// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages serves project sites under /<repo-name>/.
// The workflow passes the repo name as BASE_PATH; locally it falls back to "/".
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site: process.env.SITE_URL,
  base,
  output: 'static',
});
