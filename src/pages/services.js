/**
 * Services Catalog Page (/services/)
 * Clean Light Industrial Theme
 */

const renderBreadcrumbs = require('../templates/breadcrumbs');

function renderServicesPage(data, page, relPrefix) {
  const eq = data.equipment;

  function r(path) {
    if (path === '/') return `${relPrefix}/index.html`;
    if (path.endsWith('.html')) return `${relPrefix}/${path.replace(/^\//, '')}`;
    if (path.endsWith('/')) return `${relPrefix}/${path.replace(/^\//, '')}index.html`;
    return `${relPrefix}/${path.replace(/^\//, '')}/index.html`;
  }

  return `
  <!-- PAGE HEADER (Clean Light Theme) -->
  <div class="bg-gradient-to-b from-white via-slate-50 to-slate-100/70 text-slate-900 border-b border-slate-200 py-10 sm:py-14">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      ${renderBreadcrumbs(page.breadcrumbs, relPrefix)}
      <div class="mt-4 max-w-3xl">
        <div class="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
          <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          <span>Собственный парк ЧПУ оборудования | Свердловская область</span>
        </div>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
          ${page.h1}
        </h1>
        <p class="mt-3 text-slate-600 text-base leading-relaxed">
          ООО «Уралгиб» оказывает полный спектр услуг металлообработки по чертежам и техническим заданиям заказчика. Высокая точность, серийное качество, минимальные сроки и работа с НДС 20%.
        </p>
      </div>
    </div>
  </div>

  <section class="py-14 sm:py-18 bg-slate-50 text-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        ${eq.map(item => `
          <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
            <div>
              <div class="relative bg-slate-900 aspect-[16/10] overflow-hidden">
                <img src="${relPrefix}/images/${item.image}" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy">
                <div class="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-900/90 text-amber-400 font-bold text-xs border border-amber-500/30">
                  ${item.tag}
                </div>
              </div>
              <div class="p-6">
                <h2 class="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                  <a href="${r(`/${item.link}/`)}">${item.name}</a>
                </h2>
                <p class="mt-2.5 text-xs text-slate-600 leading-relaxed">
                  ${item.desc}
                </p>
                <div class="mt-5 pt-4 border-t border-slate-100 space-y-2 text-xs font-mono">
                  ${item.specs.map(s => `
                    <div class="flex justify-between items-center text-slate-600">
                      <span>${s.label}:</span>
                      <span class="font-bold text-slate-900 text-right">${s.val}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
            
            <div class="p-6 pt-0 space-y-2">
              <a href="${r(`/${item.link}/`)}" class="block w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-800 font-bold text-xs text-center transition-colors shadow-sm">
                Подробные характеристики и прайс &rarr;
              </a>
              <button type="button" data-open-modal="quote-modal" data-modal-comment="Запрос на услугу: ${item.name}" class="block w-full py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs text-center shadow-md transition-all">
                Быстрый расчет стоимости
              </button>
            </div>
          </div>
        `).join('')}
      </div>

    </div>
  </section>
  `;
}

module.exports = renderServicesPage;
