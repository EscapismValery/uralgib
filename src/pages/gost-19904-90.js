/**
 * Dedicated Page: ГОСТ 19904-90 Прокат листовой холоднокатаный (/gost-19904-90/)
 */

const renderBreadcrumbs = require('../templates/breadcrumbs');

function renderGost19904Page(data, page, relPrefix) {
  const rows = [
    { t: '0.35', w: '500–1000', m: '2.748', tolA: '±0.03', tolB: '±0.04', gas: 'Азот N₂ (чистый рез)' },
    { t: '0.40', w: '500–1000', m: '3.140', tolA: '±0.03', tolB: '±0.04', gas: 'Азот N₂' },
    { t: '0.50', w: '500–1250', m: '3.925', tolA: '±0.04', tolB: '±0.05', gas: 'Азот N₂ / Гильотина' },
    { t: '0.55', w: '500–1250', m: '4.318', tolA: '±0.04', tolB: '±0.05', gas: 'Азот N₂' },
    { t: '0.60', w: '500–1250', m: '4.710', tolA: '±0.04', tolB: '±0.06', gas: 'Азот N₂' },
    { t: '0.70', w: '500–1250', m: '5.495', tolA: '±0.05', tolB: '±0.06', gas: 'Азот N₂' },
    { t: '0.80', w: '500–1400', m: '6.280', tolA: '±0.05', tolB: '±0.07', gas: 'Азот N₂' },
    { t: '0.90', w: '500–1400', m: '7.065', tolA: '±0.06', tolB: '±0.08', gas: 'Азот N₂' },
    { t: '1.00', w: '500–1500', m: '7.850', tolA: '±0.06', tolB: '±0.08', gas: 'Азот N₂ / O₂' },
    { t: '1.20', w: '600–1500', m: '9.420', tolA: '±0.07', tolB: '±0.09', gas: 'Азот N₂ / O₂' },
    { t: '1.40', w: '600–1500', m: '10.990', tolA: '±0.08', tolB: '±0.10', gas: 'Азот N₂ / O₂' },
    { t: '1.50', w: '600–1500', m: '11.775', tolA: '±0.08', tolB: '±0.10', gas: 'Азот N₂ / O₂' },
    { t: '1.80', w: '600–1500', m: '14.130', tolA: '±0.09', tolB: '±0.11', gas: 'Кислород O₂' },
    { t: '2.00', w: '600–1600', m: '15.700', tolA: '±0.10', tolB: '±0.12', gas: 'Кислород O₂' },
    { t: '2.50', w: '600–1600', m: '19.625', tolA: '±0.11', tolB: '±0.14', gas: 'Кислород O₂' },
    { t: '3.00', w: '600–1600', m: '23.550', tolA: '±0.12', tolB: '±0.15', gas: 'Кислород O₂' },
    { t: '3.50', w: '600–1600', m: '27.475', tolA: '±0.14', tolB: '±0.17', gas: 'Кислород O₂' },
    { t: '4.00', w: '600–1600', m: '31.400', tolA: '±0.15', tolB: '±0.18', gas: 'Кислород O₂' },
    { t: '5.00', w: '600–1600', m: '39.250', tolA: '±0.16', tolB: '±0.20', gas: 'Кислород O₂' }
  ];

  return `
  <!-- Top Banner (Clean Light Theme) -->
  <div class="bg-gradient-to-b from-white via-slate-50 to-slate-100/70 text-slate-900 border-b border-slate-200 py-10 sm:py-14">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      ${renderBreadcrumbs(page.breadcrumbs, relPrefix)}
      <div class="mt-4 max-w-3xl">
        <div class="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
          <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          <span>Государственный стандарт РФ</span>
        </div>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
          ${page.h1}
        </h1>
        <p class="mt-3 text-slate-600 text-base leading-relaxed">
          Официальный стандарт на холоднокатаный листовой прокат шириной от 500 мм и толщиной от 0.35 до 5.0 мм по ГОСТ 19904-90. Точные отклонения по классам точности А и Б, масса и рекомендации по гибке.
        </p>
      </div>
    </div>
  </div>

  <section class="py-14 sm:py-18 bg-slate-50 text-slate-900 border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Smart Search & Filter Header -->
      <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mb-8 space-y-4">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 class="text-lg font-bold text-slate-900">Поиск по ГОСТ 19904-90 (Холоднокатаный лист)</h2>
            <div id="gost-match-count" class="text-xs text-slate-500 font-mono mt-0.5">
              Показано: ${rows.length} из ${rows.length} позиций
            </div>
          </div>

          <div class="w-full md:w-80 relative">
            <input type="text" id="gost-search-input" placeholder="Поиск толщины (например: 0.8, 1.5, 2.0)..." class="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-mono focus:outline-none focus:border-amber-500 focus:bg-white transition-colors">
            <svg class="w-4 h-4 text-slate-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </div>
        </div>

        <!-- Filter Presets -->
        <div class="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 text-xs">
          <span class="text-slate-500 font-medium mr-1">Популярные толщины:</span>
          <button type="button" data-gost-filter="" class="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium">Все толщины</button>
          <button type="button" data-gost-filter="0.5" class="px-2.5 py-1 rounded bg-slate-100 hover:bg-amber-500 hover:text-slate-950 text-slate-700 font-medium">0.5 мм</button>
          <button type="button" data-gost-filter="0.8" class="px-2.5 py-1 rounded bg-slate-100 hover:bg-amber-500 hover:text-slate-950 text-slate-700 font-medium">0.8 мм</button>
          <button type="button" data-gost-filter="1.0" class="px-2.5 py-1 rounded bg-slate-100 hover:bg-amber-500 hover:text-slate-950 text-slate-700 font-medium">1.0 мм</button>
          <button type="button" data-gost-filter="1.2" class="px-2.5 py-1 rounded bg-slate-100 hover:bg-amber-500 hover:text-slate-950 text-slate-700 font-medium">1.2 мм</button>
          <button type="button" data-gost-filter="1.5" class="px-2.5 py-1 rounded bg-slate-100 hover:bg-amber-500 hover:text-slate-950 text-slate-700 font-medium">1.5 мм</button>
          <button type="button" data-gost-filter="2.0" class="px-2.5 py-1 rounded bg-slate-100 hover:bg-amber-500 hover:text-slate-950 text-slate-700 font-medium">2.0 мм</button>
          <button type="button" data-gost-filter="3.0" class="px-2.5 py-1 rounded bg-slate-100 hover:bg-amber-500 hover:text-slate-950 text-slate-700 font-medium">3.0 мм</button>
        </div>
      </div>

      <!-- Main Table -->
      <div class="gost-table-wrapper shadow-sm">
        <table class="gost-table">
          <thead>
            <tr>
              <th>Толщина листа (мм)</th>
              <th>Ширина проката (мм)</th>
              <th>Масса 1 м² (кг)</th>
              <th>Отклонение (Класс А)</th>
              <th>Отклонение (Класс Б)</th>
              <th>Обработка на заводе</th>
              <th>Действие</th>
            </tr>
          </thead>
          <tbody id="gost-table-body">
            ${rows.map(r => `
              <tr>
                <td class="font-bold text-slate-900 font-mono text-sm">${r.t} мм</td>
                <td class="font-mono">${r.w}</td>
                <td class="font-bold text-amber-700 font-mono">${r.m} кг</td>
                <td class="font-mono text-slate-500">${r.tolA}</td>
                <td class="font-mono text-slate-500">${r.tolB}</td>
                <td class="text-xs">${r.gas}</td>
                <td>
                  <button type="button" data-open-modal="quote-modal" data-modal-comment="Требуется раскрой / гибка холоднокатаного листа ГОСТ 19904 толщиной ${r.t} мм" class="text-xs font-bold text-amber-700 hover:text-amber-800 hover:underline">
                    Заказать деталь &rarr;
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

    </div>
  </section>
  `;
}

module.exports = renderGost19904Page;

