# astro-minimal-rounded-content

A minimal [Astro](https://astro.build) site with a header on top, a sidebar
navigation on the left and a content area on the right that is wrapped in a
border with a large border-radius. The rounded box stays static while its
content scrolls inside it.

The header switches between four CSS approaches to that, each available at
its own URL prefix with three content pages (short, medium, long) below it:

| Option | URL prefix | Approach |
|---|---|---|
| 1 · Box scrolls | `/box-scroll/` | The box fills the viewport and is itself the scroll container (`overflow-y: auto`). |
| 2 · Inner wrapper scrolls | `/inner-scroll/` | The box is a static frame (`overflow: hidden`); an inner wrapper scrolls. |
| 3 · Max-height cap | `/max-height/` | The box grows with its content up to the viewport height, then scrolls (`max-height`). |
| 4 · Fixed position | `/fixed/` | The box is taken out of the grid with `position: fixed` and scrolls internally. |

The option definitions live in `src/layouts.ts`, the CSS for each one in
`src/layouts/Layout.astro` under the matching `[data-layout="…"]` selector.

## Development

```sh
npm install
npm run dev      # start the dev server
npm run build    # build the static site into dist/
npm run preview  # preview the production build
```

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site
and publishes `dist/` to GitHub Pages. In the repository settings, set
**Pages → Build and deployment → Source** to **GitHub Actions** once.

The workflow passes the Pages base path to Astro via the `BASE_PATH`
environment variable, so the site works both at `https://<user>.github.io/<repo>/`
and at a custom domain root.
