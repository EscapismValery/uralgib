/**
 * Master HTML Layout Shell
 */

const renderHeader = require('./header');
const renderFooter = require('./footer');
const renderOrderModal = require('./order-modal');
const renderLightboxModal = require('./lightbox-modal');
const renderFloatingActions = require('./floating-actions');

function renderLayout(page, contentHtml, siteData, relPrefix) {
  const c = siteData.company;

  // Generate Breadcrumbs JSON-LD
  const breadcrumbItems = (page.breadcrumbs || [{ name: 'Главная', url: '/' }]).map((b, idx) => ({
    "@type": "ListItem",
    "position": idx + 1,
    "name": b.name,
    "item": `https://uralgib.ru${b.url}`
  }));

  const breadcrumbsSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems
  };

  // LocalBusiness Schema
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "DryCleaningOrManufacturingBusiness",
    "name": c.name,
    "legalName": c.fullName,
    "url": "https://uralgib.ru/",
    "logo": "https://uralgib.ru/images/logo.svg",
    "image": "https://uralgib.ru/images/equipment/iron-mac-3015c.jpg",
    "description": "Высокоточная металлообработка полного цикла и производство металлоконструкций в Екатеринбурге и Свердловской области.",
    "telephone": c.phoneMainDigits,
    "email": c.email,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ул. Орджоникидзе, 19 Б, офис 208",
      "addressLocality": "г. Берёзовский",
      "addressRegion": "Свердловская область",
      "postalCode": "623700",
      "addressCountry": "RU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 56.9114,
      "longitude": 60.8042
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  };

  return `<!DOCTYPE html>
<html lang="ru" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${page.title}</title>
  <meta name="description" content="${page.description}">
  <link rel="canonical" href="https://uralgib.ru${page.url}">
  
  <!-- OpenGraph / Social Meta Tags -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="${page.title}">
  <meta property="og:description" content="${page.description}">
  <meta property="og:url" content="https://uralgib.ru${page.url}">
  <meta property="og:site_name" content="ООО «Уралгиб» — Завод металлообработки">
  <meta property="og:locale" content="ru_RU">
  <meta property="og:image" content="https://uralgib.ru/images/equipment/iron-mac-3015c.jpg">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${page.title}">
  <meta name="twitter:description" content="${page.description}">

  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="${relPrefix}/images/logo.svg">
  <meta name="theme-color" content="#ffffff">

  <!-- Production CSS (Minified Tailwind + Industrial Utilities) -->
  <link rel="stylesheet" href="${relPrefix}/css/styles.css">

  <!-- JSON-LD Structured Data -->
  <script type="application/ld+json">
  ${JSON.stringify(businessSchema)}
  </script>
  <script type="application/ld+json">
  ${JSON.stringify(breadcrumbsSchema)}
  </script>
</head>
<body class="bg-slate-50 text-slate-800 antialiased font-sans flex flex-col min-h-screen">
  
  ${renderHeader(siteData, relPrefix, page.url)}

  <!-- Main Page Content -->
  <main class="flex-grow">
    ${contentHtml}
  </main>

  ${renderFooter(siteData, relPrefix)}

  ${renderOrderModal(siteData, relPrefix)}
  ${renderLightboxModal()}
  ${renderFloatingActions(siteData)}

  <!-- Pure Vanilla Client JS -->
  <script src="${relPrefix}/js/main.js"></script>
</body>
</html>`;
}

module.exports = renderLayout;

