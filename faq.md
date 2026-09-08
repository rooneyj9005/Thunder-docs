---
layout: default
title: FAQ
description: Frequently asked questions about Thunder, including RAM, updates, managed files, hosting, voice chat, and support.
---

<div class="container page-shell">
  <section class="card thunder-card page-intro mb-4">
    <div class="card-body">
      <span class="section-eyebrow">Common questions</span>
      <h1 class="page-title mb-3">Frequently asked questions</h1>
      <p class="page-lead mb-0">If your question is not here, <a href="{{ site.pack_repo_url }}/issues">open an issue on the pack repository</a> and include the relevant log. Guesswork helps nobody.</p>
    </div>
  </section>

  <section>
    <div class="accordion" id="faqAccordion">
      <div class="accordion-item">
        <h2 class="accordion-header" id="faq-heading-ram">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq-ram" aria-expanded="true" aria-controls="faq-ram">How much RAM do I need?</button>
        </h2>
        <div id="faq-ram" class="accordion-collapse collapse show" aria-labelledby="faq-heading-ram" data-bs-parent="#faqAccordion">
          <div class="accordion-body">Give Minecraft at least 6 GB, ideally 8 GB. That is enough for Thunder's current <span data-mod-count>130</span>-mod shape without getting silly. Do not go beyond 10 GB unless you have a real reason.</div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="faq-heading-version">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-version" aria-expanded="false" aria-controls="faq-version">What Minecraft version does Thunder run on?</button>
        </h2>
        <div id="faq-version" class="accordion-collapse collapse" aria-labelledby="faq-heading-version" data-bs-parent="#faqAccordion">
          <div class="accordion-body">Minecraft 1.20.1 on Forge 47.4.13. Other Minecraft versions are not supported, and neither are Fabric, NeoForge or Quilt.</div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="faq-heading-mods">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-mods" aria-expanded="false" aria-controls="faq-mods">Can I add my own mods?</button>
        </h2>
        <div id="faq-mods" class="accordion-collapse collapse" aria-labelledby="faq-heading-mods" data-bs-parent="#faqAccordion">
          <div class="accordion-body">Yes, but know what the pack manages. Extra files with unique non-indexed paths are usually fine. Editing indexed pack files is a different matter, because packwiz can restore those exact paths on sync.</div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="faq-heading-managed">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-managed" aria-expanded="false" aria-controls="faq-managed">What files are managed?</button>
        </h2>
        <div id="faq-managed" class="accordion-collapse collapse" aria-labelledby="faq-heading-managed" data-bs-parent="#faqAccordion">
          <div class="accordion-body">Only exact file paths listed in <code>index.toml</code>. Packwiz does not treat an entire directory as managed just because one file in that directory is indexed.</div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="faq-heading-config">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-config" aria-expanded="false" aria-controls="faq-config">Will my config edits survive updates?</button>
        </h2>
        <div id="faq-config" class="accordion-collapse collapse" aria-labelledby="faq-heading-config" data-bs-parent="#faqAccordion">
          <div class="accordion-body">If you edit a path the pack already indexes, packwiz can restore the pack version of that exact file on sync. If you add a separate non-indexed file next to it, that separate file is usually left alone. Two indexed files are the exception: your server list in <code>servers.dat</code> and the log filter in <code>config/logbegone.toml</code> are only written on a fresh install, so your edits to those stay put.</div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="faq-heading-update">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-update" aria-expanded="false" aria-controls="faq-update">How do I update to a new version?</button>
        </h2>
        <div id="faq-update" class="accordion-collapse collapse" aria-labelledby="faq-heading-update" data-bs-parent="#faqAccordion">
          <div class="accordion-body">For client installs, the easiest route is to download the new <code>.mrpack</code> and use <strong>Update from file</strong> in Prism Launcher. For servers, run <code>PACKWIZ_SIDE=server bash tools/update.sh</code> on Linux or <code>.\tools\update.ps1 -PackwizSide server</code> on Windows, or set <code>PACKWIZ_AUTO_UPDATE=true</code> to sync on every start.</div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="faq-heading-updater">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-updater" aria-expanded="false" aria-controls="faq-updater">Is the auto-updater safe?</button>
        </h2>
        <div id="faq-updater" class="accordion-collapse collapse" aria-labelledby="faq-heading-updater" data-bs-parent="#faqAccordion">
          <div class="accordion-body">It syncs the published pack metadata and the exact indexed files that belong to the pack. It is off by default, so restarting a server never changes your mod set on its own. Turn it on with <code>PACKWIZ_AUTO_UPDATE=true</code> when you want the server to follow the published pack, and leave it off if you would rather update deliberately.</div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="faq-heading-egg">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-egg" aria-expanded="false" aria-controls="faq-egg">Is there a Pterodactyl egg?</button>
        </h2>
        <div id="faq-egg" class="accordion-collapse collapse" aria-labelledby="faq-heading-egg" data-bs-parent="#faqAccordion">
          <div class="accordion-body">Yes. Thunder publishes <code>pterodactyl.json</code> as a release asset for panel imports.</div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="faq-heading-java">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-java" aria-expanded="false" aria-controls="faq-java">What Java version do I need?</button>
        </h2>
        <div id="faq-java" class="accordion-collapse collapse" aria-labelledby="faq-heading-java" data-bs-parent="#faqAccordion">
          <div class="accordion-body">Java 17 or 21 both work. Most launchers handle this for you, and the server scripts fetch a local Temurin 21 if neither is present.</div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="faq-heading-voice">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-voice" aria-expanded="false" aria-controls="faq-voice">Does voice chat work automatically?</button>
        </h2>
        <div id="faq-voice" class="accordion-collapse collapse" aria-labelledby="faq-heading-voice" data-bs-parent="#faqAccordion">
          <div class="accordion-body">Yes, provided the server is running the pack properly and UDP traffic is allowed on the configured voice port. Server owners can switch it off with <code>ENABLE_VOICE_CHAT=false</code>, which binds the voice server to <code>127.0.0.1</code> and leaves the rest of its config file alone.</div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="faq-heading-optifine">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-optifine" aria-expanded="false" aria-controls="faq-optifine">Is OptiFine supported?</button>
        </h2>
        <div id="faq-optifine" class="accordion-collapse collapse" aria-labelledby="faq-heading-optifine" data-bs-parent="#faqAccordion">
          <div class="accordion-body">No. OptiFine and modern Forge mod stacks rarely get on well. If you want shaders, use the supported shader route rather than trying to wedge OptiFine into the pack.</div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="faq-heading-firstlaunch">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-firstlaunch" aria-expanded="false" aria-controls="faq-firstlaunch">Why does the first launch take so long?</button>
        </h2>
        <div id="faq-firstlaunch" class="accordion-collapse collapse" aria-labelledby="faq-heading-firstlaunch" data-bs-parent="#faqAccordion">
          <div class="accordion-body">It is fetching <span data-mod-count>130</span> mods and building the model and recipe caches for all of them. Later launches are much quicker. Give the first one a few minutes before deciding something has gone wrong.</div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="faq-heading-performance">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-performance" aria-expanded="false" aria-controls="faq-performance">The game runs, but it feels laggy. What should I try?</button>
        </h2>
        <div id="faq-performance" class="accordion-collapse collapse" aria-labelledby="faq-heading-performance" data-bs-parent="#faqAccordion">
          <div class="accordion-body">Check RAM allocation first and keep it around 8 GB, then drop render distance and simulation distance. Simulation distance is the expensive one, because it decides how many chunks are actively ticked and this pack is full of block entities. Keep both nearer 12 than 32. Do not mistake first-launch stutter for normal performance. If you have bolted extra mods on top, remove them before blaming the base pack.</div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="faq-heading-cost">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-cost" aria-expanded="false" aria-controls="faq-cost">Does Thunder cost anything?</button>
        </h2>
        <div id="faq-cost" class="accordion-collapse collapse" aria-labelledby="faq-heading-cost" data-bs-parent="#faqAccordion">
          <div class="accordion-body">No. Nothing is sold, nothing is monetised, and there are no adverts anywhere. Thunder exists because it is a good modpack worth sharing.</div>
        </div>
      </div>
    </div>
  </section>
</div>
