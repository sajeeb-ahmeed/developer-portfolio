import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

/**
 * Build-time entry point. `prerender.mjs` calls this after the client
 * build and injects the result into dist/index.html, so crawlers receive
 * the full page as real HTML instead of an empty <div id="root">.
 *
 * Every section renders from static data in src/data/profile.ts. The only
 * async part of the app is the GitHub repo feed, which loads in a
 * useEffect — effects do not run during renderToString, so that section
 * prerenders in its loading state and fills in on the client. That is
 * intentional: it keeps server and client output identical, which is what
 * hydration requires.
 */
export function render(): string {
  return renderToString(
    <React.StrictMode>
      <StaticRouter location="/">
        <App />
      </StaticRouter>
    </React.StrictMode>,
  );
}
