# astro-minimal-rounded-content

A minimal [Astro](https://astro.build) site with a sidebar navigation on the
left and a content area on the right that is wrapped in a border with a large
border-radius. Three pages with different content heights (short, medium,
long) show that the rounded box always wraps exactly its content.

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
