/**
 * Dedicated Page: ГОСТ 19903-74 Прокат листовой горячекатаный (/gost-19903-74/)
 */

const renderBreadcrumbs = require('../templates/breadcrumbs');

function renderGost19903Page(data, page, relPrefix) {
  const rows = [
    { t: '0.5', w: '500–1000', m: '3.925', tol: '±0.06', gas: 'Азот N₂ / Воздух' },
    { t: '0.8', w: '500–1250', m: '6.280', tol: '±0.08', gas: 'Азот N₂ / Воздух' },
    { t: '1.0', w: '500–1400', m: '7.850', tol: '±0.09', gas: 'Азот N₂ / O₂' },
    { t: '1.2', w: '600–1400', m: '9.420', tol: '±0.10', gas: 'Азот N₂ / O₂' },
    { t: '1.5', w: '600–1500', m: '11.775', tol: '±0.12', gas: 'Кислород O₂' },
    { t: '1.8', w: '600–1500', m: '14.130', tol: '±0.13', gas: 'Кислород O₂' },
    { t: '2.0', w: '710–1800', m: '15.700', tol: '±0.15', gas: 'Кислород O₂' },
    { t: '2.5', w: '710–1800', m: '19.625', tol: '±0.17', gas: 'Кислород O₂' },
    { t: '3.0', w: '710–2000', m: '23.550', tol: '±0.20', gas: 'Кислород O₂' },
    { t: '3.5', w: '710–2000', m: '27.475', tol: '±0.22', gas: 'Кислород O₂' },
    { t: '4.0', w: '710–2200', m: '31.400', tol: '±0.24', gas: 'Кислород O₂' },
    { t: '4.5', w: '710–2200', m: '35.325', tol: '±0.26', gas: 'Кислород O₂' },
    { t: '5.0', w: '710–2200', m: '39.250', tol: '±0.28', gas: 'Кислород O₂' },
    { t: '6.0', w: '710–2500', m: '47.100', tol: '±0.30', gas: 'Кислород O₂' },
    { t: '7.0', w: '710–2500', m: '54.950', tol: '±0.35', gas: 'Кислород O₂' },
    { t: '8.0', w: '710–2500', m: '62.800', tol: '±0.38', gas: 'Кислород O₂' },
    { t: '10.0', w: '710–2500', m: '78.500', tol: '±0.42', gas: 'Кислород O₂' },
    { t: '12.0', w: '710–2500', m: '94.200', tol: '±0.48', gas: 'Кислород O₂' },
    { t: '14.0', w: '710–2500', m: '109.900', tol: '±0.52', gas: 'Кислород O₂' },
    { t: '16.0', w: '710–2500', m: '125.600', tol: '±0.58', gas: 'Кислород O₂' },
    { t: '20.0', w: '710–2500', m: '157.000', tol: '±0.68', gas: 'Кислород O₂' },
    { t: '25.0', w: '710–2500', m: '196.250', tol: '±0.80', gas: 'Кислород O₂ (макс. IRON MAC)' },
    { t: '30.0', w: '710–2500', m: '235.500', tol: '±0.95', gas: 'Плазменная резка с ЧПУ' },
    { t: '40.0', w: '710–2500', m: '314.000', tol: '±1.10', gas: 'Плазменная резка с ЧПУ' }
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
          Официальный сортамент листового горячекатаного проката толщиной от 0.5 до 40.0 мм по ГОСТ 19903-74. Интерактивная таблица теоретической массы 1 м², предельных отклонений и параметров раскроя.
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
            <h2 class="text-lg font-bold text-slate-900">Интерактивный фильтр по ГОСТ 19903-74</h2>
            <div id="gost-match-count" class="text-xs text-slate-500 font-mono mt-0.5">
              Показано: ${rows.length} из ${rows.length} позиций
            </div>
          </div>

          <div class="w-full md:w-80 relative">
            <input type="text" id="gost-search-input" placeholder="Введите толщину (например: 4.0, 16, 20)..." class="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-mono focus:outline-none focus:border-amber-500 focus:bg-white transition-colors">
            <svg class="w-4 h-4 text-slate-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </div>
        </div>

        <!-- Filter Presets -->
        <div class="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 text-xs">
          <span class="text-slate-500 font-medium mr-1">Быстрые выборки:</span>
          <button type="button" data-gost-filter="" class="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium">Все толщины</button>
          <button type="button" data-gost-filter="1.5" class="px-2.5 py-1 rounded bg-slate-100 hover:bg-amber-500 hover:text-slate-950 text-slate-700 font-medium">1.5 мм</button>
          <button type="button" data-gost-filter="2.0" class="px-2.5 py-1 rounded bg-slate-100 hover:bg-amber-500 hover:text-slate-950 text-slate-700 font-medium">2.0 мм</button>
          <button type="button" data-gost-filter="3.0" class="px-2.5 py-1 rounded bg-slate-100 hover:bg-amber-500 hover:text-slate-950 text-slate-700 font-medium">3.0 мм</button>
          <button type="button" data-gost-filter="4.0" class="px-2.5 py-1 rounded bg-slate-100 hover:bg-amber-500 hover:text-slate-950 text-slate-700 font-medium">4.0 мм</button>
          <button type="button" data-gost-filter="6.0" class="px-2.5 py-1 rounded bg-slate-100 hover:bg-amber-500 hover:text-slate-950 text-slate-700 font-medium">6.0 мм</button>
          <button type="button" data-gost-filter="8.0" class="px-2.5 py-1 rounded bg-slate-100 hover:bg-amber-500 hover:text-slate-950 text-slate-700 font-medium">8.0 мм</button>
          <button type="button" data-gost-filter="10.0" class="px-2.5 py-1 rounded bg-slate-100 hover:bg-amber-500 hover:text-slate-950 text-slate-700 font-medium">10.0 мм</button>
          <button type="button" data-gost-filter="16.0" class="px-2.5 py-1 rounded bg-slate-100 hover:bg-amber-500 hover:text-slate-950 text-slate-700 font-medium">16.0 мм</button>
          <button type="button" data-gost-filter="20.0" class="px-2.5 py-1 rounded bg-slate-100 hover:bg-amber-500 hover:text-slate-950 text-slate-700 font-medium">20.0 мм</button>
          <button type="button" data-gost-filter="25.0" class="px-2.5 py-1 rounded bg-slate-100 hover:bg-amber-500 hover:text-slate-950 text-slate-700 font-medium">25.0 мм</button>
        </div>
      </div>

      <!-- Main GOST Table -->
      <div class="gost-table-wrapper shadow-sm">
        <table class="gost-table">
          <thead>
            <tr>
              <th>Толщина листа (мм)</th>
              <th>Стандартная ширина (мм)</th>
              <th>Теоретическая масса 1 м² (кг)</th>
              <th>Предельное отклонение (мм)</th>
              <th>Оборудование завода «Уралгиб»</th>
              <th>Действие</th>
            </tr>
          </thead>
          <tbody id="gost-table-body">
            ${rows.map(r => `
              <tr>
                <td class="font-bold text-slate-900 font-mono text-sm">${r.t} мм</td>
                <td class="font-mono">${r.w}</td>
                <td class="font-bold text-amber-700 font-mono">${r.m} кг</td>
                <td class="font-mono text-slate-500">${r.tol}</td>
                <td class="text-xs">${r.gas}</td>
                <td>
                  <button type="button" data-open-modal="quote-modal" data-modal-comment="Требуется раскрой горячекатаного листа ГОСТ 19903 толщиной ${r.t} мм" class="text-xs font-bold text-amber-700 hover:text-amber-800 hover:underline">
                    Рассчитать раскрой &rarr;
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <!-- Standard Notes -->
      <div class="mt-8 p-6 bg-white rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-2">
        <h3 class="font-bold text-slate-900 text-sm">Справочные примечания к стандарту ГОСТ 19903-74:</h3>
        <p>1. Плотность стали при расчете теоретической массы принята равной 7.85 г/см³ (7850 кг/м³).</p>
        <p>2. Прокат изготовляется в листах толщиной от 0.4 до 160 мм и рулонах толщиной от 1.2 до 12 мм.</p>
        <p>3. На складе ООО «Уралгиб» постоянно поддерживается запас горячекатаных листов марок Ст3сп5 и 09Г2С ходовых толщин от 1.5 до 25.0 мм.</p>
      </div>

    </div>
  </section>
  `;
}

module.exports = renderGost19903Page;

