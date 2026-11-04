/**
 * Master SSG Site Builder for ООО «Уралгиб»
 * Compiles all 19 HTML pages, builds Tailwind CSS, copies assets, and produces dist/
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const CleanCSS = require('clean-css');

// Import Site Data & Templates
const SITE_DATA = require('./src/data/site-data');
const renderLayout = require('./src/templates/layout');

// Page renderers
const renderHomePage = require('./src/pages/home');
const renderServicesPage = require('./src/pages/services');
const renderLaserPage = require('./src/pages/lazernaya-rezka-metalla');
const renderRezkaPage = require('./src/pages/rezka');
const renderRubkaPage = require('./src/pages/rubka');
const renderGibkaPage = require('./src/pages/gibka');
const renderSvarkaPage = require('./src/pages/svarka');
const renderTokarkaPage = require('./src/pages/tokarka');
const renderProductsPage = require('./src/pages/products');
const renderPricesPage = require('./src/pages/prices');
const renderOrderPage = require('./src/pages/order');
const renderContactsPage = require('./src/pages/contacts');
const renderVacanciesPage = require('./src/pages/vacancies');
const renderSteelsystPage = require('./src/pages/steelsyst');
const renderGost19903Page = require('./src/pages/gost-19903-74');
const renderGost19904Page = require('./src/pages/gost-19904-90');
const renderGost24045Page = require('./src/pages/gost-24045-94');
const renderAgreementPage = require('./src/pages/agreement');
const renderSitemapPage = require('./src/pages/sitemap');

const rootDir = __dirname;
const distDir = path.join(rootDir, 'dist');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function copyDirRecursive(src, dest) {
  ensureDir(dest);
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

console.log('🚀 Starting Uralgib SSG Build Process...');

// 1. Compile Tailwind CSS
console.log('📦 Compiling Tailwind CSS...');
const cssInputDir = path.join(rootDir, 'src', 'css');
const cssInputFile = path.join(cssInputDir, 'input.css');
const cssTempOutput = path.join(rootDir, 'src', 'css', 'temp-tailwind.css');

ensureDir(path.join(rootDir, 'css'));
ensureDir(path.join(distDir, 'css'));

try {
  execSync(`npx tailwindcss -i "${cssInputFile}" -o "${cssTempOutput}" --minify`, {
    stdio: 'inherit',
    cwd: rootDir
  });
  
  const rawCss = fs.readFileSync(cssTempOutput, 'utf-8');
  const minified = new CleanCSS({ level: 2 }).minify(rawCss);
  const finalCss = minified.styles;

  fs.writeFileSync(path.join(rootDir, 'css', 'styles.css'), finalCss);
  fs.writeFileSync(path.join(distDir, 'css', 'styles.css'), finalCss);
  
  // Clean temp
  if (fs.existsSync(cssTempOutput)) fs.unlinkSync(cssTempOutput);
  console.log(`✅ CSS compiled and minified: ${(finalCss.length / 1024).toFixed(1)} KB`);
} catch (err) {
  console.error('Tailwind build error:', err);
  process.exit(1);
}

// 2. Copy Client JS
console.log('📜 Copying client JavaScript...');
ensureDir(path.join(rootDir, 'js'));
ensureDir(path.join(distDir, 'js'));
const jsContent = fs.readFileSync(path.join(rootDir, 'src', 'js', 'main.js'), 'utf-8');
fs.writeFileSync(path.join(rootDir, 'js', 'main.js'), jsContent);
fs.writeFileSync(path.join(distDir, 'js', 'main.js'), jsContent);
console.log('✅ JS deployed to root and dist.');

// 3. Copy Images
console.log('🖼️ Copying visual assets and SVGs...');
ensureDir(path.join(rootDir, 'images'));
ensureDir(path.join(distDir, 'images'));
copyDirRecursive(path.join(rootDir, 'src', 'images'), path.join(rootDir, 'images'));
copyDirRecursive(path.join(rootDir, 'src', 'images'), path.join(distDir, 'images'));
console.log('✅ Images deployed to root and dist.');

// 4. Page Registry Mapping
const pageRenderers = {
  '/': renderHomePage,
  '/services/': renderServicesPage,
  '/lazernaya-rezka-metalla/': renderLaserPage,
  '/rezka/': renderRezkaPage,
  '/rubka/': renderRubkaPage,
  '/gibka/': renderGibkaPage,
  '/svarka/': renderSvarkaPage,
  '/tokarka/': renderTokarkaPage,
  '/products/': renderProductsPage,
  '/prices/': renderPricesPage,
  '/order/': renderOrderPage,
  '/contacts/': renderContactsPage,
  '/vacancies/': renderVacanciesPage,
  '/steelsyst/': renderSteelsystPage,
  '/gost-19903-74/': renderGost19903Page,
  '/gost-19904-90/': renderGost19904Page,
  '/gost-24045-94/': renderGost24045Page,
  '/agreement/': renderAgreementPage,
  '/sitemap.html': renderSitemapPage
};

// 5. Generate All 19 Pages
console.log('📄 Rendering all 19 SEO pages with relative links...');

SITE_DATA.pages.forEach((pageMeta) => {
  const renderer = pageRenderers[pageMeta.url];
  if (!renderer) {
    console.error(`Missing renderer for URL: ${pageMeta.url}`);
    return;
  }

  const isRoot = (pageMeta.url === '/' || pageMeta.url === '/sitemap.html');
  const relPrefix = isRoot ? '.' : '..';

  // Render Page Content
  const pageContentHtml = renderer(SITE_DATA, pageMeta, relPrefix);
  // Wrap in Master Layout
  const fullHtml = renderLayout(pageMeta, pageContentHtml, SITE_DATA, relPrefix);

  // Determine file paths
  let rootFilePath;
  let distFilePath;

  if (pageMeta.url === '/') {
    rootFilePath = path.join(rootDir, 'index.html');
    distFilePath = path.join(distDir, 'index.html');
  } else if (pageMeta.url === '/sitemap.html') {
    rootFilePath = path.join(rootDir, 'sitemap.html');
    distFilePath = path.join(distDir, 'sitemap.html');
  } else {
    const subfolder = pageMeta.slug;
    ensureDir(path.join(rootDir, subfolder));
    ensureDir(path.join(distDir, subfolder));
    rootFilePath = path.join(rootDir, subfolder, 'index.html');
    distFilePath = path.join(distDir, subfolder, 'index.html');
  }

  fs.writeFileSync(rootFilePath, fullHtml, 'utf-8');
  fs.writeFileSync(distFilePath, fullHtml, 'utf-8');
  console.log(`  ✓ Generated: ${pageMeta.url} -> [${path.relative(rootDir, rootFilePath)}]`);
});

// 6. Generate sitemap.xml
console.log('🗺️ Generating sitemap.xml...');
const today = new Date().toISOString().split('T')[0];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${SITE_DATA.pages.map(p => `  <url>
    <loc>https://uralgib.ru${p.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.url === '/' || p.url === '/prices/' ? 'daily' : 'weekly'}</changefreq>
    <priority>${p.url === '/' ? '1.0' : p.url.startsWith('/services/') || p.url.includes('rezka') || p.url.includes('gibka') ? '0.9' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(rootDir, 'sitemap.xml'), sitemapXml);
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml);
console.log('✅ sitemap.xml generated with 19 URLs.');

// 7. Generate robots.txt
console.log('🤖 Generating robots.txt...');
const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://uralgib.ru/sitemap.xml
Host: https://uralgib.ru
`;

fs.writeFileSync(path.join(rootDir, 'robots.txt'), robotsTxt);
fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsTxt);
console.log('✅ robots.txt generated.');

// 8. Generate .htaccess
console.log('⚙️ Generating .htaccess (Gzip + Caching + DirectoryIndex)...');
const htaccess = `# Apache Configuration for ООО «Уралгиб» (uralgib.ru)
# UTF-8 Encoding
AddDefaultCharset UTF-8
DirectoryIndex index.html

# Enable Gzip / Deflate Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript
  AddOutputFilterByType DEFLATE application/javascript application/x-javascript application/json
  AddOutputFilterByType DEFLATE image/svg+xml
</IfModule>

# Browser Caching Headers
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresDefault "access plus 1 month"
  
  # HTML Documents (1 hour)
  ExpiresByType text/html "access plus 1 hour"
  
  # CSS and JavaScript (1 year)
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  
  # Images and SVGs (1 year)
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  
  # Fonts
  ExpiresByType font/woff2 "access plus 1 year"
  ExpiresByType font/woff "access plus 1 year"
</IfModule>

# Security Headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
`;

fs.writeFileSync(path.join(rootDir, '.htaccess'), htaccess);
fs.writeFileSync(path.join(distDir, '.htaccess'), htaccess);
console.log('✅ .htaccess generated.');

console.log('\n🎉 ALL DONE! 19 SEO pages generated in root and in dist/. Double-click ready and deploy ready!');

