import express from 'express';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import {
  renderPrivacyHtml,
  renderDeleteAccountHtml,
  renderTermsHtml,
  renderSitemapXml,
  renderRobotsTxt,
} from './src/lib/renderLegalPage.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = Number(process.env.PORT || 3000);
const isProduction = process.env.NODE_ENV === 'production';

async function startServer() {
  const app = express();

  // Direct static HTML legal & SEO routes BEFORE Vite/SPA fallback (HTTP 200, zero redirects)
  app.get(['/privacy', '/privacy/', '/privacy.html'], (_req, res) => {
    res.status(200).type('text/html; charset=utf-8').send(renderPrivacyHtml());
  });

  app.get(['/delete-account', '/delete-account/', '/delete-account.html'], (_req, res) => {
    res.status(200).type('text/html; charset=utf-8').send(renderDeleteAccountHtml());
  });

  app.get(['/terms', '/terms/', '/terms.html'], (_req, res) => {
    res.status(200).type('text/html; charset=utf-8').send(renderTermsHtml());
  });

  app.get('/sitemap.xml', (_req, res) => {
    res.status(200).type('application/xml; charset=utf-8').send(renderSitemapXml());
  });

  app.get('/robots.txt', (_req, res) => {
    res.status(200).type('text/plain; charset=utf-8').send(renderRobotsTxt());
  });

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.resolve(__dirname, 'dist');
    app.use(express.static(distDir, { redirect: false, index: ['index.html'] }));

    app.get('/', (_req, res) => {
      res.status(200).sendFile(path.join(distDir, 'index.html'));
    });

    app.get('*', (req, res) => {
      const indexFile = path.join(distDir, 'index.html');
      if (fs.existsSync(indexFile)) {
        res.status(200).sendFile(indexFile);
      } else {
        res.status(404).send('Not found');
      }
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`UYOL server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
