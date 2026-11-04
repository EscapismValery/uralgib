/**
 * Breadcrumbs Visual Component
 */

function renderBreadcrumbs(breadcrumbs, relPrefix) {
  if (!breadcrumbs || breadcrumbs.length <= 1) return '';

  function r(path) {
    if (path === '/') return `${relPrefix}/index.html`;
    if (path.endsWith('.html')) return `${relPrefix}/${path.replace(/^\//, '')}`;
    if (path.endsWith('/')) return `${relPrefix}/${path.replace(/^\//, '')}index.html`;
    return `${relPrefix}/${path.replace(/^\//, '')}/index.html`;
  }

  return `
  <nav aria-label="Хлебные крошки" class="py-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-xs text-slate-500">
    <ol class="flex items-center space-x-2 flex-wrap">
      ${breadcrumbs.map((b, idx) => {
        const isLast = idx === breadcrumbs.length - 1;
        if (isLast) {
          return `
            <li class="flex items-center space-x-2">
              <span class="text-slate-400">/</span>
              <span class="text-slate-700 font-semibold" aria-current="page">${b.name}</span>
            </li>
          `;
        } else {
          return `
            <li class="flex items-center space-x-2">
              ${idx > 0 ? '<span class="text-slate-400">/</span>' : ''}
              <a href="${r(b.url)}" class="hover:text-amber-600 transition-colors">${b.name}</a>
            </li>
          `;
        }
      }).join('')}
    </ol>
  </nav>
  `;
}

module.exports = renderBreadcrumbs;

