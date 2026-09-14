"use strict";

(function () {
  // A request that never settles is how the release note used to sit on
  // "Checking latest stable release" for good. Everything here has a deadline,
  // and everything it fills in is already rendered from _config.yml, so a slow
  // or unreachable host costs a visitor nothing.
  var FETCH_TIMEOUT_MS = 6000;

  function loadConfig() {
    var node = document.getElementById("thunder-site-config");

    if (node) {
      return {
        packVersion: node.getAttribute("data-pack-version") || "",
        packTomlUrl: node.getAttribute("data-pack-toml-url") || "",
        indexTomlUrl: node.getAttribute("data-index-toml-url") || ""
      };
    }

    return window.ThunderSiteConfig || {};
  }

  var config = loadConfig();
  var packTomlPromise = null;
  var indexTomlPromise = null;

  function fetchText(url) {
    var controller = typeof AbortController === "function" ? new AbortController() : null;
    var timer = controller
      ? setTimeout(function () { controller.abort(); }, FETCH_TIMEOUT_MS)
      : null;

    function clear() {
      if (timer) {
        clearTimeout(timer);
      }
    }

    return fetch(url, controller ? { signal: controller.signal } : undefined).then(
      function (response) {
        clear();
        if (!response.ok) {
          throw new Error(String(response.status));
        }
        return response.text();
      },
      function (error) {
        clear();
        throw error;
      }
    );
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
      packTomlPromise = fetchFirstText([config.packTomlUrl]);
    }
    return packTomlPromise;
  }

  function fetchIndexToml() {
    if (!indexTomlPromise) {
      indexTomlPromise = fetchFirstText([config.indexTomlUrl]);
    }
    return indexTomlPromise;
  }

  // The packwiz host is only ever written by a stable deploy, so the version it
  // reports is the current stable release. That makes it a better source than
  // the GitHub releases API, which is one shared host away from its sixty
  // requests an hour and answered 403 on the download button when it ran out.
  //
  // Matches a top-level version key only. The [versions] table underneath holds
  // forge and minecraft, neither of which is named "version".
  function fetchPackVersion() {
    return fetchPackToml().then(function (text) {
      var match = text.match(/^version\s*=\s*"([^"]+)"/m);
      return match ? match[1] : null;
    });
  }

  function countMods(indexTomlText) {
    var matches = indexTomlText.match(/^file\s*=\s*"mods\/[^"]+\.pw\.toml"$/gm);
    return matches ? matches.length : null;
  }

  // The download button is a plain release asset URL written into the markup, so
  // it is correct before this script runs, without JavaScript at all, and while
  // the pack host is unreachable. Only the note underneath is filled in here.
  function updateReleaseNote() {
    var label = document.querySelector("[data-download-version]");

    if (!label) {
      return Promise.resolve();
    }

    return fetchPackVersion()
      .then(function (version) {
        if (version) {
          label.textContent = "Latest stable release: v" + version;
        }
      })
      .catch(function () {});
  }

  // Rendered as "Stable release X" from the baked-in version, which claims only
  // that the site was written for it. Reaching the host is what upgrades it to
  // "is current", because only then is it known to still be true.
  function updateVersionStatus() {
    var target = document.querySelector("[data-version-status]");

    if (!target) {
      return Promise.resolve();
    }

    return fetchPackVersion()
      .then(function (version) {
        if (!version) {
          return;
        }

        target.dataset.state = "in-sync";
        target.lastElementChild.textContent = "Stable release " + version + " is current";
      })
      .catch(function () {
        if (config.packVersion) {
          return;
        }

        target.dataset.state = "unavailable";
        target.lastElementChild.textContent = "Version status unavailable";
      });
  }

  function updateModCounts() {
    var nodes = document.querySelectorAll("[data-mod-count]");

    if (!nodes.length) {
      return Promise.resolve();
    }

    return fetchIndexToml()
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
    updateReleaseNote();
    updateVersionStatus();
    updateModCounts();
  });
})();
