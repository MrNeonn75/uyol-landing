import { privacyAz, type PrivacyContent } from '../content/privacy.az.ts';
import { privacyEn } from '../content/privacy.en.ts';
import { privacyRu } from '../content/privacy.ru.ts';
import { privacyTr } from '../content/privacy.tr.ts';
import { privacyUz } from '../content/privacy.uz.ts';
import { deleteAccountContent, type DeleteAccountLocale } from '../content/deleteAccount.ts';
import { termsContent, type TermsLocale } from '../content/terms.ts';

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function linkifyInline(text: string): string {
  const escaped = escapeHtml(text);
  return escaped
    .replace(
      /support@uyol\.app/g,
      '<a href="mailto:support@uyol.app" class="doc-link">support@uyol.app</a>'
    )
    .replace(
      /https:\/\/uyol\.app/g,
      '<a href="https://uyol.app" class="doc-link">https://uyol.app</a>'
    )
    .replace(
      /\/delete-account/g,
      '<a href="/delete-account" class="doc-link">/delete-account</a>'
    );
}

const FAVICON_SVG =
  "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='24' fill='%231E1E1E'/><path d='M30 25v32c0 12 8 20 20 20s20-8 20-20V25h-12v32c0 6-3 10-8 10s-8-4-8-10V25H30z' fill='%23DDF32C'/></svg>";

const BASE_STYLES = `
  :root {
    --accent-lime: #DDF32C;
    --dark-graphite: #1E1E1E;
    --neutral-50: #F2F2F2;
    --card-bg: #FCFCFC;
    --text-main: #333333;
    --text-muted: #504F4F;
    --border-hairline: #E0E0E0;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    font-family: 'Poppins', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    scroll-behavior: smooth;
    background-color: var(--neutral-50);
    color: var(--text-main);
  }

  body {
    margin: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: var(--neutral-50);
    color: var(--text-main);
    font-size: 16px;
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
  }

  .site-header {
    background-color: #1E1E1E;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .header-inner {
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 20px;
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  .brand-link {
    display: inline-flex;
    align-items: center;
    gap: 2px;
    text-decoration: none;
    font-size: 24px;
    font-weight: 800;
    letter-spacing: -0.02em;
    line-height: 1;
  }

  .brand-u {
    color: #DDF32C;
    font-weight: 900;
  }

  .brand-yol {
    color: #FFFFFF;
    font-weight: 700;
  }

  .home-link {
    color: #F2F2F2;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    padding: 8px 14px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.16);
    white-space: nowrap;
  }

  .home-link:hover,
  .home-link:focus-visible {
    border-color: #DDF32C;
    color: #FFFFFF;
    outline: 2px solid #DDF32C;
    outline-offset: 2px;
  }

  main {
    flex: 1;
    width: 100%;
    padding: 36px 16px 64px;
  }

  .doc-container {
    max-width: 760px;
    margin: 0 auto;
    background-color: var(--card-bg);
    border: 1px solid var(--border-hairline);
    border-radius: 20px;
    padding: 28px 20px 40px;
  }

  @media (min-width: 640px) {
    main {
      padding: 48px 24px 80px;
    }
    .doc-container {
      padding: 48px 48px 56px;
    }
  }

  .doc-top {
    border-bottom: 1px solid var(--border-hairline);
    padding-bottom: 24px;
    margin-bottom: 32px;
  }

  h1 {
    margin: 0 0 16px;
    color: #1E1E1E;
    font-size: clamp(1.65rem, 3.2vw, 2.25rem);
    font-weight: 700;
    line-height: 1.25;
    letter-spacing: -0.02em;
  }

  .lang-nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px 18px;
  }

  .lang-jump {
    display: inline-block;
    color: #1E1E1E;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    border-bottom: 3px solid #DDF32C;
    padding-bottom: 2px;
    white-space: nowrap;
  }

  .lang-jump:hover,
  .lang-jump:focus-visible {
    background-color: rgba(221, 243, 44, 0.25);
    outline: 2px solid #1E1E1E;
    outline-offset: 2px;
  }

  .lang-sep {
    color: #A3A3A3;
    user-select: none;
  }

  .section-block + .section-block {
    margin-top: 56px;
    padding-top: 44px;
    border-top: 2px solid var(--border-hairline);
  }

  .doc-subtitle {
    margin: 0 0 8px;
    color: #1E1E1E;
    font-size: 1.375rem;
    font-weight: 700;
    line-height: 1.35;
  }

  .updated-date {
    margin: 0 0 20px;
    font-size: 14px;
    color: var(--text-muted);
    font-weight: 500;
  }

  .intro-text {
    margin: 0 0 32px;
    font-size: 16px;
    line-height: 1.7;
    color: #333333;
  }

  .policy-section {
    margin-top: 32px;
  }

  h2.section-heading {
    margin: 0 0 12px;
    color: #1E1E1E;
    font-size: 1.1875rem;
    font-weight: 700;
    line-height: 1.4;
    padding-bottom: 6px;
    border-bottom: 2px solid rgba(221, 243, 44, 0.75);
    display: inline-block;
  }

  p {
    margin: 0 0 14px;
    font-size: 16px;
    line-height: 1.7;
    color: #333333;
  }

  ul {
    margin: 0 0 16px;
    padding-left: 22px;
  }

  li {
    margin-bottom: 10px;
    font-size: 16px;
    line-height: 1.7;
    color: #333333;
  }

  li strong {
    color: #1E1E1E;
    font-weight: 600;
  }

  .doc-link {
    color: #1E1E1E;
    font-weight: 600;
    text-decoration: none;
    border-bottom: 2px solid #DDF32C;
    padding-bottom: 1px;
  }

  .doc-link:hover,
  .doc-link:focus-visible {
    background-color: rgba(221, 243, 44, 0.35);
    outline: 2px solid #1E1E1E;
    outline-offset: 2px;
  }

  .site-footer {
    background-color: #181818;
    color: #B3B3B3;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding: 40px 20px;
    font-size: 13px;
  }

  .footer-inner {
    max-width: 1120px;
    margin: 0 auto;
  }

  .footer-top {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding-bottom: 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .footer-brand {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px;
  }

  .footer-tagline {
    color: #B3B3B3;
    font-size: 13px;
  }

  .footer-nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
  }

  .footer-nav a,
  .footer-legal a {
    color: #E0E0E0;
    text-decoration: none;
  }

  .footer-nav a:hover,
  .footer-nav a:focus-visible,
  .footer-legal a:hover,
  .footer-legal a:focus-visible {
    color: #DDF32C;
    text-decoration: underline;
    text-underline-offset: 4px;
  }

  .footer-bottom {
    padding-top: 24px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    font-size: 12px;
    color: #A3A3A3;
  }

  .footer-legal {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 14px;
  }
`;

const LANGUAGE_ANCHORS: Array<{ id: string; label: string }> = [
  { id: 'az-version', label: 'Azərbaycan ↓' },
  { id: 'en-version', label: 'English version ↓' },
  { id: 'ru-version', label: 'Русский ↓' },
  { id: 'tr-version', label: 'Türkçe ↓' },
  { id: 'uz-version', label: 'O‘zbekcha ↓' },
];

function renderLanguageNav(): string {
  return `
  <nav class="lang-nav" aria-label="Dil keçidləri / Language jump links">
    ${LANGUAGE_ANCHORS.map(
      (item, idx) =>
        `<a href="#${item.id}" class="lang-jump">${escapeHtml(item.label)}</a>${
          idx < LANGUAGE_ANCHORS.length - 1 ? '<span class="lang-sep" aria-hidden="true">·</span>' : ''
        }`
    ).join('\n    ')}
  </nav>`;
}

function renderHeader(): string {
  return `
  <header class="site-header">
    <div class="header-inner">
      <a href="/" class="brand-link" aria-label="UYOL Ana Səhifə">
        <span class="brand-u">U</span><span class="brand-yol">YOL</span>
      </a>
      <a href="/" class="home-link">Ana səhifə</a>
    </div>
  </header>`;
}

function renderFooter(): string {
  const year = new Date().getFullYear();
  return `
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <a href="/" class="brand-link" aria-label="UYOL Ana Səhifə">
            <span class="brand-u">U</span><span class="brand-yol">YOL</span>
          </a>
          <span class="footer-tagline">Şəhərlərarası sərnişin və bağlama daşıma platforması</span>
        </div>
        <nav class="footer-nav" aria-label="Əsas keçidlər">
          <a href="/#nece-isleyir">Necə işləyir</a>
          <a href="/#sernisinler">Sərnişinlər</a>
          <a href="/#baglamalar">Bağlamalar</a>
          <a href="/#suruculer">Sürücülər</a>
          <a href="/#faq">Sual-cavab</a>
        </nav>
      </div>
      <div class="footer-bottom">
        <div>© ${year} UYOL. Bütün hüquqlar qorunur.</div>
        <div class="footer-legal">
          <a href="/privacy">Məxfilik siyasəti</a>
          <span aria-hidden="true">·</span>
          <a href="/delete-account">Hesabı silmək</a>
          <span aria-hidden="true">·</span>
          <a href="/terms">İstifadə şərtləri</a>
        </div>
      </div>
    </div>
  </footer>`;
}

function renderDocumentShell(options: {
  title: string;
  description: string;
  canonicalPath: string;
  bodyHtml: string;
}): string {
  const canonicalUrl = `https://uyol.app${options.canonicalPath}`;
  return `<!doctype html>
<html lang="az">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(options.title)}</title>
    <meta name="description" content="${escapeHtml(options.description)}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${escapeHtml(canonicalUrl)}" />
    <meta name="theme-color" content="#1E1E1E" />
    <link rel="icon" type="image/svg+xml" href="${FAVICON_SVG}" />
    <meta property="og:title" content="${escapeHtml(options.title)}" />
    <meta property="og:description" content="${escapeHtml(options.description)}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${escapeHtml(canonicalUrl)}" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
    <style>${BASE_STYLES}</style>
  </head>
  <body>
    ${renderHeader()}
    <main>
      <article class="doc-container">
        ${options.bodyHtml}
      </article>
    </main>
    ${renderFooter()}
  </body>
</html>`;
}

function renderPrivacyLanguageBlock(content: PrivacyContent, anchorId: string): string {
  const sectionsHtml = content.sections
    .map((section) => {
      const paragraphsHtml = (section.paragraphs || [])
        .map((p) => `<p>${linkifyInline(p)}</p>`)
        .join('');

      const itemsHtml = section.items?.length
        ? `<ul>${section.items
            .map((item) => {
              const labelHtml = item.label
                ? `<strong>${escapeHtml(item.label)}</strong> `
                : '';
              return `<li>${labelHtml}${linkifyInline(item.text)}</li>`;
            })
            .join('')}</ul>`
        : '';

      const afterHtml = (section.afterParagraphs || [])
        .map((p) => `<p>${linkifyInline(p)}</p>`)
        .join('');

      return `
      <section class="policy-section" aria-labelledby="${escapeHtml(section.id)}">
        <h2 id="${escapeHtml(section.id)}" class="section-heading">${escapeHtml(section.title)}</h2>
        ${paragraphsHtml}
        ${itemsHtml}
        ${afterHtml}
      </section>`;
    })
    .join('');

  return `
  <div class="section-block" id="${escapeHtml(anchorId)}" lang="${escapeHtml(content.lang)}">
    <p class="doc-subtitle">${escapeHtml(content.title)}</p>
    <p class="updated-date">${escapeHtml(content.lastUpdatedLabel)} ${escapeHtml(content.lastUpdatedDate)}</p>
    <p class="intro-text">${linkifyInline(content.intro)}</p>
    ${sectionsHtml}
  </div>`;
}

export function renderPrivacyHtml(): string {
  const bodyHtml = `
    <div class="doc-top">
      <h1>Məxfilik Siyasəti / Privacy Policy</h1>
      ${renderLanguageNav()}
    </div>
    ${renderPrivacyLanguageBlock(privacyAz, 'az-version')}
    ${renderPrivacyLanguageBlock(privacyEn, 'en-version')}
    ${renderPrivacyLanguageBlock(privacyRu, 'ru-version')}
    ${renderPrivacyLanguageBlock(privacyTr, 'tr-version')}
    ${renderPrivacyLanguageBlock(privacyUz, 'uz-version')}
  `;

  return renderDocumentShell({
    title: 'UYOL – Məxfilik Siyasəti / Privacy Policy',
    description:
      'UYOL mobil tətbiqləri (Sərnişin və Sürücü) və uyol.app saytı üçün rəsmi məxfilik siyasəti (AZ, EN, RU, TR, UZ).',
    canonicalPath: '/privacy',
    bodyHtml,
  });
}

function renderDeleteAccountLocale(
  locale: DeleteAccountLocale,
  langCode: string,
  anchorId: string
): string {
  return `
    <div class="section-block" id="${escapeHtml(anchorId)}" lang="${escapeHtml(langCode)}">
      <p class="doc-subtitle">${escapeHtml(locale.title)}</p>
      <p class="updated-date">${escapeHtml(locale.lastUpdated)}</p>
      <p class="intro-text">${linkifyInline(locale.intro)}</p>

      <section class="policy-section">
        <h2 class="section-heading">${escapeHtml(locale.stepsTitle)}</h2>
        <ul>${locale.steps.map((s) => `<li>${linkifyInline(s)}</li>`).join('')}</ul>
      </section>

      <section class="policy-section">
        <h2 class="section-heading">${escapeHtml(locale.emailGuideTitle)}</h2>
        <ul>${locale.emailGuide.map((s) => `<li>${linkifyInline(s)}</li>`).join('')}</ul>
      </section>

      <section class="policy-section">
        <h2 class="section-heading">${escapeHtml(locale.deletedTitle)}</h2>
        <ul>${locale.deletedItems.map((s) => `<li>${linkifyInline(s)}</li>`).join('')}</ul>
      </section>

      <section class="policy-section">
        <h2 class="section-heading">${escapeHtml(locale.retainedTitle)}</h2>
        <ul>${locale.retainedItems.map((s) => `<li>${linkifyInline(s)}</li>`).join('')}</ul>
      </section>

      <section class="policy-section">
        <h2 class="section-heading">${escapeHtml(locale.timeframeTitle)}</h2>
        <p>${linkifyInline(locale.timeframeText)}</p>
      </section>
    </div>`;
}

export function renderDeleteAccountHtml(): string {
  const bodyHtml = `
    <div class="doc-top">
      <h1>Hesabı və məlumatları silmək / Delete Account and Data</h1>
      ${renderLanguageNav()}
    </div>
    ${renderDeleteAccountLocale(deleteAccountContent.az, 'az', 'az-version')}
    ${renderDeleteAccountLocale(deleteAccountContent.en, 'en', 'en-version')}
    ${renderDeleteAccountLocale(deleteAccountContent.ru, 'ru', 'ru-version')}
    ${renderDeleteAccountLocale(deleteAccountContent.tr, 'tr', 'tr-version')}
    ${renderDeleteAccountLocale(deleteAccountContent.uz, 'uz', 'uz-version')}
  `;

  return renderDocumentShell({
    title: 'UYOL – Hesabı və Məlumatları Silmək / Delete Account',
    description:
      'UYOL hesabınızı və şəxsi məlumatlarınızı necə silmək olar (AZ, EN, RU, TR, UZ).',
    canonicalPath: '/delete-account',
    bodyHtml,
  });
}

function renderTermsLocale(
  locale: TermsLocale,
  langCode: string,
  anchorId: string
): string {
  return `
    <div class="section-block" id="${escapeHtml(anchorId)}" lang="${escapeHtml(langCode)}">
      <p class="doc-subtitle">${escapeHtml(locale.title)}</p>
      <p class="updated-date">${escapeHtml(locale.lastUpdated)}</p>
      <p class="intro-text">${linkifyInline(locale.intro)}</p>
      ${locale.sections
        .map(
          (sec) => `
        <section class="policy-section">
          <h2 class="section-heading">${escapeHtml(sec.title)}</h2>
          ${sec.paragraphs.map((p) => `<p>${linkifyInline(p)}</p>`).join('')}
        </section>`
        )
        .join('')}
    </div>`;
}

export function renderTermsHtml(): string {
  const bodyHtml = `
    <div class="doc-top">
      <h1>İstifadə Şərtləri / Terms of Service</h1>
      ${renderLanguageNav()}
    </div>
    ${renderTermsLocale(termsContent.az, 'az', 'az-version')}
    ${renderTermsLocale(termsContent.en, 'en', 'en-version')}
    ${renderTermsLocale(termsContent.ru, 'ru', 'ru-version')}
    ${renderTermsLocale(termsContent.tr, 'tr', 'tr-version')}
    ${renderTermsLocale(termsContent.uz, 'uz', 'uz-version')}
  `;

  return renderDocumentShell({
    title: 'UYOL – İstifadə Şərtləri / Terms of Service',
    description:
      'UYOL şəhərlərarası sərnişin və bağlama daşıma platformasının istifadə şərtləri və qaydaları (AZ, EN, RU, TR, UZ).',
    canonicalPath: '/terms',
    bodyHtml,
  });
}

export function renderSitemapXml(): string {
  const lastmod = '2026-11-14';
  const urls = [
    { loc: 'https://uyol.app/', priority: '1.0' },
    { loc: 'https://uyol.app/privacy', priority: '0.8' },
    { loc: 'https://uyol.app/delete-account', priority: '0.7' },
    { loc: 'https://uyol.app/terms', priority: '0.6' },
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;
}

export function renderRobotsTxt(): string {
  return `User-agent: *
Allow: /
Allow: /privacy
Allow: /delete-account
Allow: /terms

Sitemap: https://uyol.app/sitemap.xml
`;
}
