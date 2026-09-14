# Thunder Docs

This repository contains the public Thunder website published at [thunder.john.rooney.scot](https://thunder.john.rooney.scot/).

It is for contributors working on the site itself. Anyone after installation help, server setup guidance, feature overviews, or FAQ answers wants the live site instead.

The pack itself lives in the main [`Thunder`](https://github.com/rooneyj9005/Thunder) repository. Pack metadata for packwiz is served separately from `https://packwiz.thunder.john.rooney.scot/`.

## Contributing to the Site

You need Bundler, Jekyll, and a local preview.

CI reads the Ruby version from `.ruby-version`, currently 3.3.11. Matching it locally avoids Bundler and Jekyll mismatches. On native Windows, a fresh RubyInstaller setup needs `ridk install` before `bundle install` can compile native gems.

```bash
bundle install
bundle exec jekyll serve --livereload
```

For a static build without the preview server:

```bash
bundle exec jekyll build
```

If you refresh `Gemfile.lock` on Windows, add the Linux platform back before committing:

```bash
bundle lock --add-platform x86_64-linux
```

## What Lives Here

- `_layouts/default.html` is the shared page shell.
- `assets/site.css` layers the Thunder styling over the Bootstrap base.
- `assets/site.js` fills in the release note, the version status, and the mod counts.
- `index.md`, `install.md`, `server.md`, `features.md`, and `faq.md` are the content pages.

## Contributor Notes

- British English throughout.
- Keep the tone lively, concrete, and practical. Generic or over-polished copy is worse than none.
- The live site stays friendlier than this repository. Players and server owners read that; contributors read this.
- Install, update, server, and release behaviour must match the main Thunder repository.
- The docs site and the packwiz host are separate on purpose. Check metadata URLs against that split.

## Deployment and Data Sources

The site deploys through GitHub Pages, separately from the pack repository.

The pack version, the version status, and the mod count are read at runtime from the packwiz host, out of its `pack.toml` and `index.toml`. Nothing here calls the GitHub API: it is one shared runner address away from its rate limit, and a 403 used to reach visitors. The download button is a plain release asset URL in the markup, so it is right before the script runs and while the host is unreachable. Every value baked into the markup is a fallback. If the packwiz host moves, this repository moves with it.

## Licence

Original site content in this repository is released under the Unlicense. Third-party dependencies and externally hosted assets remain under their own licences.
