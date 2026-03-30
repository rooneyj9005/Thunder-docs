---
layout: default
title: Server Setup
description: Set up a Thunder server on Linux, Windows, or a Pterodactyl-compatible panel with the official scripts and published pack metadata.
---

<div class="container page-shell">
  <section class="card thunder-card page-intro mb-4">
    <div class="card-body">
      <span class="section-eyebrow">Hosting</span>
      <h1 class="page-title mb-3">Server Setup</h1>
      <p class="page-lead mb-0">Want to host Thunder for your group? Here is how to get a server running without making a meal of it.</p>
    </div>
  </section>

  <section class="mb-4">
    <div class="row g-4">
      <div class="col-lg-4">
        <div class="card thunder-card h-100">
          <div class="card-body">
            <h2 class="card-title h4 mb-3">Panel hosting</h2>
            <p class="card-text mb-0">Use the published <code>pterodactyl.json</code> egg, keep the packwiz URL in place, and let the startup scripts handle sync.</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card thunder-card h-100">
          <div class="card-body">
            <h2 class="card-title h4 mb-3">Standalone Linux</h2>
            <p class="card-text mb-0">If you have <code>curl</code>, the Linux installer gets you most of the way there in one command and can fetch a local Temurin 21 runtime if Java is missing.</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card thunder-card h-100">
          <div class="card-body">
            <h2 class="card-title h4 mb-3">Standalone Windows</h2>
            <p class="card-text mb-0">Run the PowerShell installer in an empty folder and it will even fetch Temurin 21 for you if Java is missing.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="card thunder-card mb-4">
    <div class="card-body">
      <span class="section-eyebrow">The short version</span>
      <h2 class="section-title mb-3">The scripts do the boring bits for you</h2>
      <p class="page-lead mb-0">The official install and startup scripts fetch Forge, pull in <code>packwiz-installer-bootstrap</code>, and keep the server aligned with the published metadata. That means far less manual copying and far fewer "which mods do I need?" headaches.</p>
    </div>
  </section>

  <section class="card thunder-card mb-4">
    <div class="card-body">
      <span class="section-eyebrow">Pterodactyl and Pelican</span>
      <h2 class="section-title mb-4">Import the egg and let it get on with it</h2>
      <div class="row g-4">
        <div class="col-md-4">
          <div class="card thunder-card h-100">
            <div class="card-body">
              <span class="step-badge mb-3">1</span>
              <h3 class="card-title h4">Import the egg</h3>
              <p class="card-text mb-0">Download <code>pterodactyl.json</code> from the latest stable Thunder release and import it through your panel.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card thunder-card h-100">
            <div class="card-body">
              <span class="step-badge mb-3">2</span>
              <h3 class="card-title h4">Create the server</h3>
              <p class="card-text mb-0">Pick Java 21, keep the supplied packwiz URL, and set the panel memory to match the sort of player count you expect. The startup script will derive a heap from that automatically unless you fill in <code>Exact JVM Memory</code>.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card thunder-card h-100">
            <div class="card-body">
              <span class="step-badge mb-3">3</span>
              <h3 class="card-title h4">Start it</h3>
              <p class="card-text mb-0">The egg installs Forge, then runs startup with sync enabled so the pack stays aligned with the published metadata.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="card thunder-card mb-4">
    <div class="card-body">
      <span class="section-eyebrow">Standalone Linux</span>
      <h2 class="section-title mb-3">Bootstrap a server with one command</h2>
      <p class="page-lead mb-3">You need <strong>curl</strong> and a normal Linux userspace with <strong>tar</strong> and <strong>gzip</strong>. If Java 17 or 21 is missing, the installer fetches a local Temurin 21 runtime for you.</p>
      <pre class="thunder-code mb-3"><code>mkdir thunder-server &amp;&amp; cd thunder-server &amp;&amp; curl -sSfLO https://github.com/rooneyj9005/Thunder/releases/latest/download/install.sh &amp;&amp; bash install.sh</code></pre>
      <p class="muted-copy mb-0">After accepting the EULA, start the server with <code>bash startup.sh</code>. If you want the script to size the heap from a known server allocation, use <code>bash startup.sh --memory 8192</code>. If you want a fixed heap instead, use <code>bash startup.sh --jvm-memory 7168</code>.</p>
    </div>
  </section>

  <section class="card thunder-card mb-4">
    <div class="card-body">
      <span class="section-eyebrow">Standalone Windows</span>
      <h2 class="section-title mb-3">Run the PowerShell installer in an empty folder</h2>
      <p class="page-lead mb-3">If Java 17 or 21 is missing, the script downloads Temurin 21 automatically before installing the rest of the server.</p>
      <pre class="thunder-code mb-3"><code>.\install.ps1
Set-Content -LiteralPath eula.txt -Value "eula=true" -Encoding ASCII
.\startup.ps1</code></pre>
      <p class="muted-copy mb-0">That gives you the same general flow as Linux without needing a separate Java install first. Optional memory control works the same way here: <code>.\startup.ps1 -MemoryMiB 8192</code> derives a heap from the total server allocation, while <code>.\startup.ps1 -JvmMemoryMiB 7168</code> pins the heap exactly.</p>
    </div>
  </section>

  <section class="card thunder-card mb-4">
    <div class="card-body">
      <span class="section-eyebrow">Good to know</span>
      <h2 class="section-title mb-3">Where the metadata lives</h2>
      <p class="page-lead mb-0">The public docs live on <code>thunder.john.rooney.scot</code>, but the packwiz metadata itself is served separately from <code>packwiz.thunder.john.rooney.scot</code>. That split is deliberate. The docs explain things. The packwiz host keeps sync and update tooling pointed at a stable source.</p>
    </div>
  </section>

  <section class="card thunder-card">
    <div class="card-body">
      <span class="section-eyebrow">Packwiz behaviour</span>
      <h2 class="section-title mb-3">What it actually manages</h2>
      <p class="page-lead mb-3">Thunder uses exact indexed paths, not folder-wide management.</p>
      <ul class="list-copy mb-3">
        <li>If a specific path is listed in <code>index.toml</code>, packwiz can restore the pack version of that exact file on sync.</li>
        <li>If another file sits next to it but is not indexed, packwiz generally leaves that file alone.</li>
        <li>So "this folder contains managed files" is not the same thing as "everything in this folder belongs to the pack".</li>
      </ul>
      <div class="thunder-callout">
        <p class="mb-0">If you disable updates and customise pack-managed files, you are effectively keeping a local fork. That can be perfectly reasonable, but it stops being the official pack state.</p>
      </div>
    </div>
  </section>
</div>
