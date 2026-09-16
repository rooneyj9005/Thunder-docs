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
    var status = document.querySelector("[data-mod-count-status]");

    if (!nodes.length) {
      return Promise.resolve();
    }

    return fetchIndexToml()
      .then(function (indexTomlText) {
        var modCount = countMods(indexTomlText);

        if (modCount === null) {
          return;
        }

        var text = String(modCount);
        var changed = false;

        nodes.forEach(function (node) {
          if (node.textContent !== text) {
            node.textContent = text;
            changed = true;
          }
        });

        // Silence when the baked-in fallback was already right, which is the
        // usual case. There is nothing to tell anyone in that.
        if (changed && status) {
          status.textContent = "Mod count updated: Thunder has " + text + " mods.";
        }
      })
      .catch(function () {});
  }

  // Bootstrap opens an accordion panel on click and on nothing else, so a link
  // to a single answer, /faq/#faq-optifine, lands on a closed one. The hash may
  // name the panel or its heading; both sit inside the same accordion item.
  function hashAccordionItem() {
    var hash = window.location.hash;

    if (hash.length < 2) {
      return null;
    }

    var id;

    try {
      id = decodeURIComponent(hash.slice(1));
    } catch (error) {
      return null;
    }

    var target = document.getElementById(id);

    return target ? target.closest(".accordion-item") : null;
  }

  // A collapsed panel is display:none, so the browser's own jump to the fragment
  // has nothing to aim at and leaves the page where it was. Opening the panel
  // then moves everything below it. Both are why the scroll is done here.
  function revealHashPanel(scrollNow) {
    var item = typeof window.bootstrap === "undefined" ? null : hashAccordionItem();
    var panel = item ? item.querySelector(".accordion-collapse") : null;

    if (!panel) {
      return;
    }

    // "instant" rather than "auto", which defers to the smooth scroll-behavior
    // in site.css and would animate a landing that should already have happened.
    function settle() {
      item.scrollIntoView({ block: "start", behavior: "instant" });
    }

    if (panel.classList.contains("show")) {
      if (scrollNow) {
        settle();
      }
      return;
    }

    panel.addEventListener("shown.bs.collapse", settle, { once: true });
    window.bootstrap.Collapse.getOrCreateInstance(panel, { toggle: false }).show();
  }

  document.addEventListener("DOMContentLoaded", function () {
    updateReleaseNote();
    updateVersionStatus();
    updateModCounts();
    revealHashPanel(false);
  });

  // The browser's fragment scroll can land after DOMContentLoaded, putting the
  // page back where it started. Asserting it again here is what makes it stick.
  window.addEventListener("load", function () {
    revealHashPanel(true);
  });

  window.addEventListener("hashchange", function () {
    revealHashPanel(true);
  });
})();
