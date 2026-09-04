---
layout: default
title: Home
description: Thunder is a Forge modpack for playing with your mates. Tech, magic, building, exploration, and proper server support in one stable pack.
---

<section class="container py-lg-4">
  <div class="row g-4 g-lg-5 align-items-center">
    <div class="col-lg-7">
      <span class="section-eyebrow">Minecraft 1.20.1 | Forge 47.4.13</span>
      <h1 class="hero-title mt-2 mb-3">Thunder</h1>
      <p class="hero-copy mb-0">
        A modpack for playing with your mates. Build daft factories, sling
        spells, make lovely bases, and wander off into a world that feels worth
        exploring. <span data-mod-count>130</span> mods, all tested, all
        stable.
      </p>
      <div class="d-flex flex-column flex-sm-row gap-3 mt-4">
        <a class="btn thunder-btn thunder-btn-primary btn-lg" data-download-link href="{{ site.release_url }}">Download latest</a>
        <a class="btn thunder-btn thunder-btn-ghost btn-lg" href="{{ '/server/' | relative_url }}">Run a server</a>
      </div>
      <p class="release-note mt-3 mb-0" data-download-version>Checking latest stable release</p>
    </div>
    <div class="col-lg-5">
      <div class="card thunder-card hero-panel">
        <div class="card-body">
          <div class="d-grid gap-3">
            <div class="stat-block">
              <div class="stat-label">Built around</div>
              <div class="stat-copy">Create, Mekanism, Ars Nouveau, Hexerei, and AE2</div>
            </div>
            <div class="stat-block">
              <div class="stat-label">Best for</div>
              <div class="stat-copy">Long-running worlds with friends, not one-week novelty saves</div>
            </div>
            <div class="stat-block">
              <div class="stat-label">Why it behaves itself</div>
              <div class="stat-copy">Tested releases, sensible scripts, and a proper update path</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="container py-5">
  <div class="row justify-content-between align-items-end g-3 mb-4">
    <div class="col-lg-7">
      <span class="section-eyebrow">What is in it</span>
      <h2 class="section-title mb-2">Built to give you a bit of everything</h2>
      <p class="section-copy mb-0">Big technical projects, proper magic, nicer building, better multiplayer quality of life, and admin support that is not an afterthought.</p>
    </div>
  </div>
  <div class="row g-4">
    <div class="col-lg-4">
      <a class="thunder-link-card" href="{{ '/features/#automate' | relative_url }}">
        <div class="card thunder-card">
          <div class="card-body">
            <h3 class="card-title h4 mb-3">Automate everything</h3>
            <p class="card-text mb-0">Conveyor belts, ore processing, digital storage, routed items, autocrafting, and enough machinery to turn a hillside into a mildly alarming production line.</p>
          </div>
        </div>
      </a>
    </div>
    <div class="col-lg-4">
      <a class="thunder-link-card" href="{{ '/features/#magic' | relative_url }}">
        <div class="card thunder-card">
          <div class="card-body">
            <h3 class="card-title h4 mb-3">Spells and rituals</h3>
            <p class="card-text mb-0">Write your own spells, brew trouble in a cauldron, raise altars, and fly about on a broom because walking is beneath you now.</p>
          </div>
        </div>
      </a>
    </div>
    <div class="col-lg-4">
      <a class="thunder-link-card" href="{{ '/features/#build' | relative_url }}">
        <div class="card thunder-card">
          <div class="card-body">
            <h3 class="card-title h4 mb-3">Build something lovely</h3>
            <p class="card-text mb-0">More block variants, better furniture, cleaner industrial pieces, and enough decorative choice to stop every base becoming a cobblestone cube.</p>
          </div>
        </div>
      </a>
    </div>
  </div>
  <div class="text-center mt-4">
    <a href="{{ '/features/' | relative_url }}">See the full feature list</a>
  </div>
</section>

<section class="container py-5">
  <div class="card thunder-card">
    <div class="card-body p-lg-5">
      <div class="text-center mb-5">
        <span class="section-eyebrow">Get playing quickly</span>
        <h2 class="section-title mb-2">Up and running in about two minutes</h2>
        <p class="section-copy mx-auto mb-0">No scavenger hunt for jar files. No manual mod wrangling. Just import the pack and let the launcher get on with it.</p>
      </div>
      <div class="row g-4">
        <div class="col-md-4">
          <div class="card thunder-card h-100">
            <div class="card-body">
              <span class="step-badge mb-3">1</span>
              <h3 class="card-title h4">Grab the pack</h3>
              <p class="card-text mb-0">Hit the download button above. You will get a small <code>.mrpack</code> file rather than a giant zip full of mods.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card thunder-card h-100">
            <div class="card-body">
              <span class="step-badge mb-3">2</span>
              <h3 class="card-title h4">Import it</h3>
              <p class="card-text mb-0">Open <a href="https://prismlauncher.org">Prism Launcher</a>, choose <strong>Add Instance</strong>, then <strong>Import</strong>, and point it at the file.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card thunder-card h-100">
            <div class="card-body">
              <span class="step-badge mb-3">3</span>
              <h3 class="card-title h4">Play</h3>
              <p class="card-text mb-0">Launch the instance and let it fetch what it needs. After the first run, it behaves like any other instance.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-4">
        <a class="me-3" href="{{ '/install/' | relative_url }}">Need more detail? Full installation guide</a>
        <a href="{{ '/server/' | relative_url }}">Running a server? Setup guide</a>
      </div>
    </div>
  </div>
</section>
