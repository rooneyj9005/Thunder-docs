"use strict";

(function () {
  var config = window.ThunderSiteConfig || {};
  var latestReleasePromise = null;
  var packTomlPromise = null;
  var rawIndexPromise = null;

  function fetchJson(url) {
    return fetch(url).then(function (response) {
      if (!response.ok) {
        throw new Error(String(response.status));
      }
      return response.json();
    });
  }

  function fetchText(url) {
    return fetch(url).then(function (response) {
      if (!response.ok) {
        throw new Error(String(response.status));
      }
      return response.text();
    });
  }

  function fetchLatestRelease() {
    if (!latestReleasePromise) {
      latestReleasePromise = fetchJson(config.releaseApiUrl);
    }
    return latestReleasePromise;
  }

  function fetchFirstText(urls) {
    var list = urls.filter(Boolean);

    if (!list.length) {
      return Promise.reject(new Error("no urls"));
    }

    return list.reduce(function (chain, url) {
      return chain.catch(function () {
        return fetchText(url);
      });
    }, Promise.reject(new Error("start")));
  }

  function fetchPackToml() {
    if (!packTomlPromise) {
      packTomlPromise = fetchFirstText([config.packTomlUrl, config.rawPackTomlUrl]);
    }
    return packTomlPromise;
  }

  function fetchRawIndexToml() {
    if (!rawIndexPromise) {
      rawIndexPromise = fetchFirstText([config.indexTomlUrl, config.rawIndexTomlUrl]);
    }
    return rawIndexPromise;
  }

  function countMods(indexTomlText) {
    var matches = indexTomlText.match(/^file\s*=\s*"mods\/[^"]+\.pw\.toml"$/gm);
    return matches ? matches.length : null;
  }

  function updateDownloadCta() {
    var link = document.querySelector("[data-download-link]");
    var label = document.querySelector("[data-download-version]");

    if (!link) {
      return Promise.resolve();
    }

    return fetchLatestRelease()
      .then(function (release) {
        var asset = Array.isArray(release.assets)
          ? release.assets.find(function (item) {
              return typeof item.name === "string" && item.name.endsWith(".mrpack");
            })
          : null;

        if (asset && asset.browser_download_url) {
          link.href = asset.browser_download_url;
          if (label && release.tag_name) {
            label.textContent = "Latest release: " + release.tag_name;
          }
          return;
        }

        link.href = config.releaseUrl;
      })
      .catch(function () {
        link.href = config.releaseUrl;
      });
  }

  function updateVersionStatus() {
    var target = document.querySelector("[data-version-status]");

    if (!target) {
      return Promise.resolve();
    }

    return Promise.all([
      fetchLatestRelease().catch(function () { return null; }),
      fetchPackToml().catch(function () { return null; })
    ]).then(function (results) {
      var release = results[0];
      var packToml = results[1];
      var releaseVersion = release && release.tag_name ? String(release.tag_name).replace(/^v/i, "") : null;
      var packMatch = packToml && packToml.match(/^version\s*=\s*"([^"]+)"/m);
      var mainVersion = packMatch ? packMatch[1] : null;

      if (releaseVersion && mainVersion) {
        target.dataset.state = releaseVersion === mainVersion ? "in-sync" : "out-of-sync";
        target.lastElementChild.textContent = releaseVersion === mainVersion
          ? "Release " + releaseVersion + " is current"
          : "Release " + releaseVersion + ", pack metadata " + mainVersion;
        return;
      }

      if (releaseVersion) {
        target.dataset.state = "release-only";
        target.lastElementChild.textContent = "Latest release " + releaseVersion;
        return;
      }

      if (mainVersion) {
        target.dataset.state = "release-only";
        target.lastElementChild.textContent = "Pack version " + mainVersion;
        return;
      }

      if (!releaseVersion && !mainVersion) {
        target.dataset.state = "unavailable";
        target.lastElementChild.textContent = "Version status unavailable";
        return;
      }
    });
  }

  function updateModCounts() {
    var nodes = document.querySelectorAll("[data-mod-count]");

    if (!nodes.length) {
      return Promise.resolve();
    }

    return fetchRawIndexToml()
      .then(function (indexTomlText) {
        var modCount = countMods(indexTomlText);

        if (modCount === null) {
          return;
        }

        nodes.forEach(function (node) {
          node.textContent = String(modCount);
        });
      })
      .catch(function () {});
  }

  document.addEventListener("DOMContentLoaded", function () {
    updateDownloadCta();
    updateVersionStatus();
    updateModCounts();
  });
})();
