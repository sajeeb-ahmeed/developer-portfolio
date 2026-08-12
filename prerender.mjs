/**
 * Post-build step: render the app to HTML and inject it into dist/index.html.
 *
 * Runs after both `vite build` (client -> dist/) and `vite build --ssr`
 * (server bundle -> dist-ssr/). Without this the deployed HTML body is just
 * an empty <div id="root">, so anything that does not execute JavaScript —
 * most crawlers other than Googlebot, link unfurlers, AI search engines —
 * sees a blank page.
 */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const htmlPath = path.join(root, 'dist', 'index.html');
const serverEntry = path.join(root, 'dist-ssr', 'entry-server.js');

for (const [label, p] of [['client build', htmlPath], ['server bundle', serverEntry]]) {
  if (!fs.existsSync(p)) {
    console.error(`prerender: missing ${label} at ${p}`);
    process.exit(1);
  }
}

const { render } = await import(pathToFileURL(serverEntry).href);
const appHtml = render();

if (!appHtml || appHtml.length < 1000) {
  console.error(`prerender: rendered output looks empty (${appHtml.length} chars) — refusing to write`);
  process.exit(1);
}

const marker = '<div id="root"></div>';
let html = fs.readFileSync(htmlPath, 'utf8');

if (!html.includes(marker)) {
  console.error(`prerender: could not find ${marker} in dist/index.html`);
  process.exit(1);
}

html = html.replace(marker, `<div id="root">${appHtml}</div>`);
fs.writeFileSync(htmlPath, html);

const words = appHtml.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
console.log(`prerender: injected ${appHtml.length} chars (~${words} words) into dist/index.html`);
