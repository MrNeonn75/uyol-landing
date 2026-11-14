import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  renderPrivacyHtml,
  renderDeleteAccountHtml,
  renderTermsHtml,
  renderSitemapXml,
  renderRobotsTxt,
} from '../src/lib/renderLegalPage.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '..', 'dist');

function writeStaticFile(relativePath: string, content: string) {
  const fullPath = path.join(distDir, relativePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content, 'utf-8');
}

const privacyHtml = renderPrivacyHtml();
const deleteAccountHtml = renderDeleteAccountHtml();
const termsHtml = renderTermsHtml();
const sitemapXml = renderSitemapXml();
const robotsTxt = renderRobotsTxt();

// Write both directory index.html and .html files for maximum static hosting compatibility
writeStaticFile('privacy/index.html', privacyHtml);
writeStaticFile('privacy.html', privacyHtml);

writeStaticFile('delete-account/index.html', deleteAccountHtml);
writeStaticFile('delete-account.html', deleteAccountHtml);

writeStaticFile('terms/index.html', termsHtml);
writeStaticFile('terms.html', termsHtml);

writeStaticFile('sitemap.xml', sitemapXml);
writeStaticFile('robots.txt', robotsTxt);

console.log('Generated static legal pages, sitemap.xml, and robots.txt in dist/');
