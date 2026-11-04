/**
 * Dedicated Page: Прайс-лист и онлайн-калькулятор (/prices/)
 * Order: First Tabular Price List & Tariffs, then Interactive Calculator
 */

const renderBreadcrumbs = require('../templates/breadcrumbs');
const renderCalculator = require('../templates/calculator-section');

function renderPricesPage(data, page, relPrefix) {
  return `
  <!-- PAGE HEADER (Clean Light Theme) -->
  <div class="bg-gradient-to-b from-white via-slate-50 to-slate-100/70 text-slate-900 border-b border-slate-200 py-10 sm:py-14">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      ${renderBreadcrumbs(page.breadcrumbs, relPrefix)}
      <div class="mt-4 max-w-3xl">
        <div class="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
          <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          <span>Официальный прайс-лист 2026 года | НДС 20%</span>
        </div>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
          ${page.h1}
        </h1>
        <p class="mt-3 text-slate-600 text-base leading-relaxed">
          Прозрачные заводские тарифы без скрытых платежей. Работаем по безналичному расчету с НДС 20%. Ниже представлена сводная тарифная сетка, а далее — интерактивный калькулятор для моментального расчета предварительной сметы вашего заказа.
        </p>
      </div>
    </div>
  </div>

  <!-- 1. COMPREHENSIVE TABULAR PRICE-LIST (COMES FIRST) -->
  <section class="py-14 sm:py-18 bg-white text-slate-900 border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto text-center mb-10">
        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Сводная тарифная сетка на металлообработку
        </h2>
        <p class="text-slate-600 text-sm mt-2">
          Все цены указаны в рублях за единицу измерения с учетом НДС 20%. При постоянном серийном сотрудничестве предоставляются индивидуальные ценовые условия.
        </p>
      </div>

      <!-- Volume Discounts Box -->
      <div class="mb-10 p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm max-w-4xl mx-auto">
        <h3 class="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 text-center">
          Система накопительных и объемных скидок
        </h3>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
          <div class="p-3 bg-white rounded-xl border border-slate-200">
            <div class="font-bold text-slate-500">до 100 м.п.</div>
            <div class="text-base font-extrabold text-slate-900 mt-1">Базовый тариф</div>
          </div>
          <div class="p-3 bg-white rounded-xl border border-slate-200">
            <div class="font-bold text-slate-500">100 – 500 м.п.</div>
            <div class="text-base font-extrabold text-amber-600 mt-1">Скидка 7%</div>
          </div>
          <div class="p-3 bg-white rounded-xl border border-slate-200">
            <div class="font-bold text-slate-500">500 – 2 000 м.п.</div>
            <div class="text-base font-extrabold text-amber-600 mt-1">Скидка 15%</div>
          </div>
          <div class="p-3 bg-white rounded-xl border border-slate-200">
            <div class="font-bold text-slate-500">от 2 000 м.п.</div>
            <div class="text-base font-extrabold text-emerald-600 mt-1">Скидка до 25%</div>
          </div>
        </div>
      </div>

      <!-- Table 1: Laser & Bending Comparative -->
      <div class="gost-table-wrapper shadow-sm max-w-5xl mx-auto overflow-x-auto">
        <table class="gost-table w-full text-xs text-left">
          <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
            <tr>
              <th class="p-3">Толщина листа</th>
              <th class="p-3">Лазер 6 кВт (Сталь 3)</th>
              <th class="p-3">Лазер N₂ (AISI 304)</th>
              <th class="p-3">Плазма с ЧПУ</th>
              <th class="p-3">Рубка гильотиной</th>
              <th class="p-3">Гибка ЧПУ 220т</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 font-mono">
            <tr><td class="p-3 font-bold text-slate-800 font-sans">0.5 мм</td><td class="p-3">22 ₽ / м</td><td class="p-3">38 ₽ / м</td><td class="p-3">—</td><td class="p-3">14 ₽ / рез</td><td class="p-3">18 ₽ / гиб</td></tr>
            <tr><td class="p-3 font-bold text-slate-800 font-sans">1.0 мм</td><td class="p-3">28 ₽ / м</td><td class="p-3">48 ₽ / м</td><td class="p-3">22 ₽ / м</td><td class="p-3">18 ₽ / рез</td><td class="p-3">22 ₽ / гиб</td></tr>
            <tr><td class="p-3 font-bold text-slate-800 font-sans">1.5 мм</td><td class="p-3">35 ₽ / м</td><td class="p-3">64 ₽ / м</td><td class="p-3">26 ₽ / м</td><td class="p-3">24 ₽ / рез</td><td class="p-3">26 ₽ / гиб</td></tr>
            <tr><td class="p-3 font-bold text-slate-800 font-sans">2.0 мм</td><td class="p-3">44 ₽ / м</td><td class="p-3">82 ₽ / м</td><td class="p-3">30 ₽ / м</td><td class="p-3">30 ₽ / рез</td><td class="p-3">32 ₽ / гиб</td></tr>
            <tr><td class="p-3 font-bold text-slate-800 font-sans">3.0 мм</td><td class="p-3">62 ₽ / м</td><td class="p-3">125 ₽ / м</td><td class="p-3">40 ₽ / м</td><td class="p-3">42 ₽ / рез</td><td class="p-3">45 ₽ / гиб</td></tr>
            <tr><td class="p-3 font-bold text-slate-800 font-sans">4.0 мм</td><td class="p-3">84 ₽ / м</td><td class="p-3">175 ₽ / м</td><td class="p-3">52 ₽ / м</td><td class="p-3">58 ₽ / рез</td><td class="p-3">65 ₽ / гиб</td></tr>
            <tr><td class="p-3 font-bold text-slate-800 font-sans">5.0 мм</td><td class="p-3">110 ₽ / м</td><td class="p-3">240 ₽ / м</td><td class="p-3">65 ₽ / м</td><td class="p-3">75 ₽ / рез</td><td class="p-3">90 ₽ / гиб</td></tr>
            <tr><td class="p-3 font-bold text-slate-800 font-sans">6.0 мм</td><td class="p-3">140 ₽ / м</td><td class="p-3">310 ₽ / м</td><td class="p-3">80 ₽ / м</td><td class="p-3">95 ₽ / рез</td><td class="p-3">125 ₽ / гиб</td></tr>
            <tr><td class="p-3 font-bold text-slate-800 font-sans">8.0 мм</td><td class="p-3">195 ₽ / м</td><td class="p-3">460 ₽ / м</td><td class="p-3">115 ₽ / м</td><td class="p-3">—</td><td class="p-3">190 ₽ / гиб</td></tr>
            <tr><td class="p-3 font-bold text-slate-800 font-sans">10.0 мм</td><td class="p-3">255 ₽ / м</td><td class="p-3">620 ₽ / м</td><td class="p-3">150 ₽ / м</td><td class="p-3">—</td><td class="p-3">280 ₽ / гиб</td></tr>
            <tr><td class="p-3 font-bold text-slate-800 font-sans">12.0 мм</td><td class="p-3">340 ₽ / м</td><td class="p-3">850 ₽ / м</td><td class="p-3">195 ₽ / м</td><td class="p-3">—</td><td class="p-3">390 ₽ / гиб</td></tr>
            <tr><td class="p-3 font-bold text-slate-800 font-sans">16.0 мм</td><td class="p-3">490 ₽ / м</td><td class="p-3">1 280 ₽ / м</td><td class="p-3">280 ₽ / м</td><td class="p-3">—</td><td class="p-3">580 ₽ / гиб</td></tr>
            <tr><td class="p-3 font-bold text-slate-800 font-sans">20.0 мм</td><td class="p-3">680 ₽ / м</td><td class="p-3">—</td><td class="p-3">390 ₽ / м</td><td class="p-3">—</td><td class="p-3">850 ₽ / гиб</td></tr>
            <tr><td class="p-3 font-bold text-slate-800 font-sans">25.0 мм</td><td class="p-3">950 ₽ / м</td><td class="p-3">—</td><td class="p-3">—</td><td class="p-3">—</td><td class="p-3">—</td></tr>
          </tbody>
        </table>
      </div>

      <!-- Powder coating & additional services -->
      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div class="p-6 bg-slate-50 rounded-xl border border-slate-200">
          <h4 class="font-bold text-slate-900 text-sm mb-3">Порошковая окраска RAL</h4>
          <ul class="text-xs space-y-2 text-slate-600">
            <li class="flex justify-between"><span>Стандартный цвет RAL (глянец / мат):</span><span class="font-bold text-slate-900">от 380 ₽ / м²</span></li>
            <li class="flex justify-between"><span>Фактура шагрень / муар:</span><span class="font-bold text-slate-900">от 420 ₽ / м²</span></li>
            <li class="flex justify-between"><span>Антик (медь, серебро, бронза):</span><span class="font-bold text-slate-900">от 480 ₽ / м²</span></li>
            <li class="flex justify-between"><span>Цинкосодержащий грунт (антикор):</span><span class="font-bold text-slate-900">+190 ₽ / м²</span></li>
          </ul>
        </div>
        
        <div class="p-6 bg-slate-50 rounded-xl border border-slate-200">
          <h4 class="font-bold text-slate-900 text-sm mb-3">Инжиниринг и сопутствующие услуги</h4>
          <ul class="text-xs space-y-2 text-slate-600">
            <li class="flex justify-between"><span>Разработка КМД по эскизу/образцу:</span><span class="font-bold text-slate-900">от 2 500 ₽</span></li>
            <li class="flex justify-between"><span>Корректировка и нестинг чертежей DXF:</span><span class="font-bold text-emerald-600">Бесплатно при заказе</span></li>
            <li class="flex justify-between"><span>Слесарная зачистка и зенковка отверстий:</span><span class="font-bold text-slate-900">от 8 ₽ / отверстие</span></li>
            <li class="flex justify-between"><span>Упаковка на деревянные паллеты в пленку:</span><span class="font-bold text-slate-900">от 450 ₽ / паллет</span></li>
          </ul>
        </div>
      </div>

      <div class="mt-8 text-center">
        <button type="button" data-open-modal="quote-modal" data-modal-comment="Запрос коммерческого предложения по прайс-листу" class="px-7 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all">
          Получить официальное коммерческое предложение с печатью
        </button>
      </div>

    </div>
  </section>

  <!-- 2. INTERACTIVE COST CALCULATOR (COMES SECOND) -->
  ${renderCalculator(relPrefix)}
  `;
}

module.exports = renderPricesPage;
