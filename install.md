---
layout: default
title: Installation
description: Install Thunder with Prism Launcher or another Modrinth-compatible launcher, give it sensible memory, and get on with playing.
---

<div class="container page-shell">
  <section class="card thunder-card page-intro mb-4">
    <div class="card-body">
      <span class="section-eyebrow">Player setup</span>
      <h1 class="page-title mb-3">Installation</h1>
      <p class="page-lead mb-0">The whole thing takes a couple of minutes. No strange ritual required.</p>
    </div>
  </section>

  <section class="mb-4">
    <div class="row g-4">
      <div class="col-md-4">
        <div class="card thunder-card h-100">
          <div class="card-body">
            <h2 class="card-title h4 mb-3">Launcher</h2>
            <p class="card-text mb-0">Use Prism Launcher or another launcher that understands Modrinth packs properly.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card thunder-card h-100">
          <div class="card-body">
            <h2 class="card-title h4 mb-3">Java</h2>
            <p class="card-text mb-0">Java 21 is required. Most launchers sort this out for you without any drama.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card thunder-card h-100">
          <div class="card-body">
            <h2 class="card-title h4 mb-3">Memory</h2>
            <p class="card-text mb-0">6 GB is the floor. 8 GB is the sensible target if you want the pack to feel smooth.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="card thunder-card mb-4">
    <div class="card-body">
      <span class="section-eyebrow">Getting the pack in</span>
      <h2 class="section-title mb-4">Install it once, let the launcher do the heavy lifting</h2>
      <div class="row g-4">
        <div class="col-md-4">
          <div class="card thunder-card h-100">
            <div class="card-body">
              <span class="step-badge mb-3">1</span>
              <h3 class="card-title h4">Download the pack</h3>
              <p class="card-text mb-0">Head to the home page and hit <strong>Download latest</strong>. Save the <code>.mrpack</code> somewhere you will find again.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card thunder-card h-100">
            <div class="card-body">
              <span class="step-badge mb-3">2</span>
              <h3 class="card-title h4">Import it into Prism</h3>
              <p class="card-text mb-0">Open Prism Launcher, choose <strong>Add Instance</strong>, then <strong>Import</strong>, and point it at the pack file.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card thunder-card h-100">
            <div class="card-body">
              <span class="step-badge mb-3">3</span>
              <h3 class="card-title h4">Hit play</h3>
              <p class="card-text mb-0">The first launch downloads the actual mods. After that, Minecraft opens and you are off.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="thunder-callout mt-4">
        <p class="mb-0">The first launch takes longer because it is fetching <span data-mod-count>127</span> mods. That is normal. Make a cup of tea and let it finish.</p>
      </div>
    </div>
  </section>

  <section class="card thunder-card mb-4">
    <div class="card-body">
      <span class="section-eyebrow">Keep it civilised</span>
      <h2 class="section-title mb-3">Give it enough memory</h2>
      <p class="page-lead mb-3">If the game stutters or falls over with an out-of-memory error, set the Java memory allocation to <strong>8192 MB</strong> in your launcher.</p>
      <div class="thunder-callout thunder-callout-warning">
        <p class="mb-0">Do not fling silly amounts of RAM at it unless you have a clear reason. More memory is not automatically better, and oversized heaps often make Java feel worse rather than better.</p>
      </div>
    </div>
  </section>

  <section class="card thunder-card">
    <div class="card-body">
      <span class="section-eyebrow">Updating</span>
      <h2 class="section-title mb-3">When a new version comes out</h2>
      <p class="page-lead mb-3">The easiest route is still the least fussy one: download the new <code>.mrpack</code> and use <strong>Update from file</strong> in Prism Launcher.</p>
      <ol class="list-copy mb-3">
        <li>Download the latest <code>.mrpack</code>.</li>
        <li>Right-click the Thunder instance and choose <strong>Edit</strong>.</li>
        <li>Use <strong>Update from file</strong> and select the new pack file.</li>
      </ol>
      <p class="muted-copy mb-3">That keeps your saves and settings in place while refreshing the pack itself.</p>
      <div class="thunder-callout">
        <p class="mb-0">Windows users can wire in <code>powershell.exe -ExecutionPolicy Bypass -File update.ps1 -PackwizSide client</code> as a pre-launch command if they want a more automated setup. Linux or macOS client sync is still best treated as a custom arrangement rather than the official one-click route.</p>
      </div>
    </div>
  </section>
</div>
