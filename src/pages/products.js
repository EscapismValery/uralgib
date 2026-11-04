/**
 * Dedicated Page: Каталог продукции (/products/)
 * Clean Light Theme with Photorealistic Imagery
 */

const renderBreadcrumbs = require('../templates/breadcrumbs');

function renderProductsPage(data, page, relPrefix) {
  const products = data.products;

  return `
  <!-- PAGE HEADER (Clean Light Theme) -->
  <div class="bg-gradient-to-b from-white via-slate-50 to-slate-100/70 text-slate-900 border-b border-slate-200 py-10 sm:py-14">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      ${renderBreadcrumbs(page.breadcrumbs, relPrefix)}
      <div class="mt-4 max-w-3xl">
        <div class="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
          <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          <span>8 направлений производства | ГОСТ и ТУ</span>
        </div>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
          ${page.h1}
        </h1>
        <p class="mt-3 text-slate-600 text-base leading-relaxed">
          Каталог серийной и индивидуальной продукции завода ООО «Уралгиб». Полнофункциональный интерактивный просмотр с фотогалереей, техническими параметрами и быстрой отправкой заявки на производство.
        </p>
      </div>
    </div>
  </div>

  <section class="py-14 sm:py-18 bg-slate-50 text-slate-900 border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Category Filter Tabs -->
      <div class="flex items-center space-x-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
        <button type="button" data-product-tab="all" class="px-4 py-2 rounded-xl text-xs font-bold transition-all bg-amber-500 text-slate-950 whitespace-nowrap shadow-sm">
          Все изделия (8)
        </button>
        <button type="button" data-product-tab="lstk" class="px-4 py-2 rounded-xl text-xs font-medium transition-all bg-white text-slate-700 border border-slate-300 hover:border-amber-500 whitespace-nowrap">
          ЛСТК профили
        </button>
        <button type="button" data-product-tab="enclosures" class="px-4 py-2 rounded-xl text-xs font-medium transition-all bg-white text-slate-700 border border-slate-300 hover:border-amber-500 whitespace-nowrap">
          Корпуса и шкафы 42U
        </button>
        <button type="button" data-product-tab="cable" class="px-4 py-2 rounded-xl text-xs font-medium transition-all bg-white text-slate-700 border border-slate-300 hover:border-amber-500 whitespace-nowrap">
          Кабельные трассы
        </button>
        <button type="button" data-product-tab="bktp" class="px-4 py-2 rounded-xl text-xs font-medium transition-all bg-white text-slate-700 border border-slate-300 hover:border-amber-500 whitespace-nowrap">
          Ворота БКТП
        </button>
        <button type="button" data-product-tab="embedded" class="px-4 py-2 rounded-xl text-xs font-medium transition-all bg-white text-slate-700 border border-slate-300 hover:border-amber-500 whitespace-nowrap">
          Закладные 1.400-15
        </button>
        <button type="button" data-product-tab="pavilions" class="px-4 py-2 rounded-xl text-xs font-medium transition-all bg-white text-slate-700 border border-slate-300 hover:border-amber-500 whitespace-nowrap">
          Торговые павильоны
        </button>
        <button type="button" data-product-tab="stainless" class="px-4 py-2 rounded-xl text-xs font-medium transition-all bg-white text-slate-700 border border-slate-300 hover:border-amber-500 whitespace-nowrap">
          Нержавеющая мебель
        </button>
        <button type="button" data-product-tab="custom" class="px-4 py-2 rounded-xl text-xs font-medium transition-all bg-white text-slate-700 border border-slate-300 hover:border-amber-500 whitespace-nowrap">
          Нестандартные детали
        </button>
      </div>

      <!-- Products Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        ${products.map(p => `
          <div class="product-grid-item bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group" data-category="${p.category}">
            <div>
              <div class="relative bg-slate-100 aspect-[16/11] overflow-hidden cursor-pointer" data-lightbox-src="${relPrefix}/images/${p.image}" data-lightbox-title="${p.title}" data-lightbox-specs="${p.specs}">
                <img src="${relPrefix}/images/${p.image}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                <div class="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-slate-900/80 text-amber-400 font-mono text-[10px] border border-slate-700">
                  Увеличить фото
                </div>
              </div>
              <div class="p-5">
                <h3 class="text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                  ${p.title}
                </h3>
                <p class="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  ${p.subtitle}
                </p>
                <div class="mt-3.5 p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs font-mono text-slate-700 space-y-1">
                  <div class="text-[10px] uppercase text-slate-400">Характеристики:</div>
                  <div>${p.specs}</div>
                </div>
              </div>
            </div>
            
            <div class="p-5 pt-0">
              <button type="button" data-open-modal="quote-modal" data-modal-comment="Запрос на производство изделия: ${p.title} (${p.specs})" class="w-full py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs text-center shadow-md transition-all">
                Заказать расчет партии
              </button>
            </div>
          </div>
        `).join('')}
      </div>

    </div>
  </section>
  `;
}

module.exports = renderProductsPage;
