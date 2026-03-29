# Thunder Docs

This repository contains the public Thunder website published at [thunder.john.rooney.scot](https://thunder.john.rooney.scot/).

It is mainly for contributors working on the site itself. Anyone who simply wants installation help, server setup guidance, feature overviews, or FAQ answers will almost certainly want the live site rather than this repository.

The pack itself lives in the main [`Thunder`](https://github.com/rooneyj9005/Thunder) repository. Pack metadata for packwiz is served separately from `https://packwiz.thunder.john.rooney.scot/`.

## Contributing to the Site

Contributors will usually want Bundler, Jekyll, and a local preview of the site.

These commands are often the simplest starting points:

```bash
bundle install
bundle exec jekyll serve --livereload
```

If a static build is enough, this is usually the simpler option:

```bash
bundle exec jekyll build
```

## What Lives Here

- `_layouts/default.html` contains the shared page shell.
- `assets/site.css` contains the Thunder-specific site styling on top of the Bootstrap base.
- `assets/site.js` handles release links, version status, and mod counts.
- `index.md`, `install.md`, `server.md`, `features.md`, and `faq.md` are the main content pages.

## Contributor Notes

The site generally works best when contributors keep a few things in mind:

- British English is the expected default.
- The tone should stay lively, concrete, and practical rather than generic or overly polished.
- The live site should remain friendlier than the repository for players and server owners.
- Install, update, server, and release behaviour should stay aligned with the main Thunder repository.
- The docs site and the packwiz host are separate on purpose, so references to metadata URLs are worth checking carefully.

## Deployment and Data Sources

The site is deployed separately from the pack repository through GitHub Pages.

Dynamic metadata such as the latest stable release, pack version, and mod count is read from the stable GitHub release API and the packwiz host. If those sources move, this repository usually needs to move with them.

## Licence

Original site content in this repository is released under the Unlicense. Third-party dependencies and externally hosted assets remain under their own licences.
