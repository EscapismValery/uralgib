/**
 * Dedicated Page: ГОСТ 24045-94 Профили стальные листовые гнутые (/gost-24045-94/)
 */

const renderBreadcrumbs = require('../templates/breadcrumbs');

function renderGost24045Page(data, page, relPrefix) {
  const profiles = [
    { name: 'Профиль С8-1150', t: '0.4 – 0.7', w: '1150 / 1200', h: '8', m: '4.3 – 7.1', use: 'Стеновые ограждения, обшивка павильонов, заборы' },
    { name: 'Профиль С10-1100', t: '0.4 – 0.8', w: '1100 / 1155', h: '10', m: '4.5 – 8.3', use: 'Стеновые панели, внутренние перегородки цехов' },
    { name: 'Профиль С20-1100', t: '0.45 – 0.8', w: '1100 / 1150', h: '18', m: '4.9 – 8.4', use: 'Кровля ангаров, облицовка фасадов, модульные здания' },
    { name: 'Профиль С21-1000', t: '0.5 – 0.8', w: '1000 / 1051', h: '21', m: '5.4 – 8.4', use: 'Универсальный: кровля и несущие стены складов' },
    { name: 'Профиль НС35-1000', t: '0.55 – 0.8', w: '1000 / 1060', h: '35', m: '6.4 – 9.1', use: 'Несущая кровля, ограждающие конструкции' },
    { name: 'Профиль Н60-845', t: '0.7 – 0.9', w: '845 / 902', h: '60', m: '8.8 – 11.1', use: 'Несущие перекрытия, несъемная опалубка под бетон' },
    { name: 'Профиль Н75-750', t: '0.7 – 1.0', w: '750 / 800', h: '750', m: '9.3 – 12.9', use: 'Высоконагруженные покрытия промышленных зданий' },
    { name: 'Профиль Н114-600', t: '0.8 – 1.2', w: '600 / 646', h: '114', m: '11.8 – 17.2', use: 'Сверхмощные пролеты с большими снеговыми нагрузками' },
    { name: 'ЛСТК C-профиль (C150–C300)', t: '1.2 – 3.0', w: '150–300 мм', h: '40–80', m: '3.8 – 12.5', use: 'Несущие колонны, стойки и фермы ЛСТК каркасов' },
    { name: 'ЛСТК U-профиль (U150–U300)', t: '1.2 – 3.0', w: '154–304 мм', h: '40–60', m: '3.2 – 10.8', use: 'Направляющие профили каркаса, перекрытия' },
    { name: 'ЛСТК Z-профиль (Z150–Z250)', t: '1.5 – 3.0', w: '150–250 мм', h: '50–70', m: '4.5 – 11.2', use: 'Кровельные и стеновые прогоны быстровозводимых складов' },
    { name: 'ЛСТК Термопрофиль ТС/ТН', t: '1.2 – 2.0', w: '150–200 мм', h: '45', m: '3.5 – 6.8', use: 'Наружные стены с термопросечками против мостиков холода' }
  ];

  return `
  <!-- Top Banner (Clean Light Theme) -->
  <div class="bg-gradient-to-b from-white via-slate-50 to-slate-100/70 text-slate-900 border-b border-slate-200 py-10 sm:py-14">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      ${renderBreadcrumbs(page.breadcrumbs, relPrefix)}
      <div class="mt-4 max-w-3xl">
        <div class="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
          <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          <span>Государственный стандарт РФ | ЛСТК & Профнастил</span>
        </div>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
          ${page.h1}
        </h1>
        <p class="mt-3 text-slate-600 text-base leading-relaxed">
          Справочные данные по ГОСТ 24045-94 (и ГОСТ 24045-2016): сортамент гнутых трапециевидных профилей и балок ЛСТК. Габариты, масса погонного метра, предельные нагрузки и назначение в промышленном строительстве.
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
            <h2 class="text-lg font-bold text-slate-900">Поиск профилей по марке, высоте или толщине</h2>
            <div id="gost-match-count" class="text-xs text-slate-500 font-mono mt-0.5">
              Показано: ${profiles.length} из ${profiles.length} позиций
            </div>
          </div>

          <div class="w-full md:w-80 relative">
            <input type="text" id="gost-search-input" placeholder="Введите марку: С21, Н60, ЛСТК, Z-профиль..." class="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-mono focus:outline-none focus:border-amber-500 focus:bg-white transition-colors">
            <svg class="w-4 h-4 text-slate-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </div>
        </div>

        <!-- Filter Presets -->
        <div class="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 text-xs">
          <span class="text-slate-500 font-medium mr-1">Популярные профили:</span>
          <button type="button" data-gost-filter="" class="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium">Все марки</button>
          <button type="button" data-gost-filter="С8" class="px-2.5 py-1 rounded bg-slate-100 hover:bg-amber-500 hover:text-slate-950 text-slate-700 font-medium">С8</button>
          <button type="button" data-gost-filter="С21" class="px-2.5 py-1 rounded bg-slate-100 hover:bg-amber-500 hover:text-slate-950 text-slate-700 font-medium">С21</button>
          <button type="button" data-gost-filter="НС35" class="px-2.5 py-1 rounded bg-slate-100 hover:bg-amber-500 hover:text-slate-950 text-slate-700 font-medium">НС35</button>
          <button type="button" data-gost-filter="Н60" class="px-2.5 py-1 rounded bg-slate-100 hover:bg-amber-500 hover:text-slate-950 text-slate-700 font-medium">Н60</button>
          <button type="button" data-gost-filter="Н75" class="px-2.5 py-1 rounded bg-slate-100 hover:bg-amber-500 hover:text-slate-950 text-slate-700 font-medium">Н75</button>
          <button type="button" data-gost-filter="ЛСТК" class="px-2.5 py-1 rounded bg-amber-100 text-amber-900 font-bold border border-amber-300">ЛСТК балки</button>
          <button type="button" data-gost-filter="Термопрофиль" class="px-2.5 py-1 rounded bg-slate-100 hover:bg-amber-500 hover:text-slate-950 text-slate-700 font-medium">Термопрофиль</button>
        </div>
      </div>

      <!-- Main Table -->
      <div class="gost-table-wrapper shadow-sm">
        <table class="gost-table">
          <thead>
            <tr>
              <th>Марка профиля</th>
              <th>Толщина (мм)</th>
              <th>Ширина раб./общ. (мм)</th>
              <th>Высота гофра (мм)</th>
              <th>Масса 1 пог. м (кг)</th>
              <th>Область применения</th>
              <th>Действие</th>
            </tr>
          </thead>
          <tbody id="gost-table-body">
            ${profiles.map(p => `
              <tr>
                <td class="font-bold text-slate-900 font-mono text-sm">${p.name}</td>
                <td class="font-mono">${p.t}</td>
                <td class="font-mono">${p.w}</td>
                <td class="font-mono text-slate-500">${p.h} мм</td>
                <td class="font-bold text-amber-700 font-mono">${p.m} кг</td>
                <td class="text-xs text-slate-600">${p.use}</td>
                <td>
                  <button type="button" data-open-modal="quote-modal" data-modal-comment="Требуется расчет конструкций из профиля: ${p.name} (ГОСТ 24045)" class="text-xs font-bold text-amber-700 hover:text-amber-800 hover:underline">
                    Рассчитать заказ &rarr;
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <!-- LSTK Design Note -->
      <div class="mt-8 p-6 bg-white text-slate-900 rounded-2xl border border-slate-200 shadow-sm space-y-2">
        <h3 class="font-bold text-slate-900 text-sm flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
          Производство ЛСТК каркасов по чертежам КМД:
        </h3>
        <p class="text-xs text-slate-600 leading-relaxed">
          Завод ООО «Уралгиб» осуществляет изготовление комплектных каркасов быстровозводимых зданий на основе C- и Z-образных холодногнутых оцинкованных профилей с просечками (термопрофили) и без просечек. Разработка КМД, резка в точный размер, пробивка монтажных отверстий под болтовые соединения и комплектация фасонными деталями.
        </p>
      </div>

    </div>
  </section>

    </div>
  </section>
  `;
}

module.exports = renderGost24045Page;

