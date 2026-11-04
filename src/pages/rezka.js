/**
 * Dedicated Page: Плазменная резка (/rezka/)
 */

const renderBreadcrumbs = require('../templates/breadcrumbs');

function renderRezkaPage(data, page, relPrefix) {
  return `
  <!-- Top Banner (Clean Light Theme) -->
  <div class="bg-gradient-to-b from-white via-slate-50 to-slate-100/70 text-slate-900 border-b border-slate-200 py-10 sm:py-14">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      ${renderBreadcrumbs(page.breadcrumbs, relPrefix)}
      <div class="mt-4 max-w-3xl">
        <div class="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
          <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          <span>ЧПУ стол 1500×3000 мм | Толщина до 20 мм</span>
        </div>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
          ${page.h1}
        </h1>
        <p class="mt-3 text-slate-600 text-base leading-relaxed">
          Экономически эффективный раскрой толстолистового металлопроката на координатном плазменном станке с ЧПУ. Производство опорных плит, косынок, фланцев и закладных деталей для строительных металлоконструкций.
        </p>
      </div>
    </div>
  </div>

  <section class="py-14 sm:py-18 bg-white text-slate-900 border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        <div class="lg:col-span-6 space-y-5">
          <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase">
            <span>Преимущества плазменного раскроя</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Оптимальный баланс скорости и стоимости на толстом листе
          </h2>
          <p class="text-sm text-slate-600 leading-relaxed">
            Плазменная резка незаменима при серийном изготовлении деталей строительного назначения из углеродистой стали толщиной от 4 до 20 мм. Скорость резки превышает газокислородную резку в 3–5 раз при существенно меньшей стоимости погонного метра по сравнению с гидроабразивом.
          </p>

          <div class="space-y-3 pt-2 text-xs">
            <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-3">
              <div class="w-6 h-6 rounded bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">✓</div>
              <div>
                <div class="font-bold text-slate-900">Водяной стол снижает термические поводки</div>
                <div class="text-slate-500 mt-0.5">Заготовка охлаждается водой, что исключает коробление даже длинных и узких пластин.</div>
              </div>
            </div>

            <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-3">
              <div class="w-6 h-6 rounded bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">✓</div>
              <div>
                <div class="font-bold text-slate-900">Высокая скорость на толщинах 10–20 мм</div>
                <div class="text-slate-500 mt-0.5">Быстрый прокол и резка без длительного прогрева металла.</div>
              </div>
            </div>
          </div>

          <div class="pt-2">
            <button type="button" data-open-modal="quote-modal" data-modal-comment="Запрос на плазменную резку металла с ЧПУ" class="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all">
              Рассчитать плазменную резку
            </button>
          </div>
        </div>

        <div class="lg:col-span-6">
          <div class="rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md aspect-[16/10]">
            <img src="${relPrefix}/images/equipment/plasma-cutter.jpg" alt="Плазменная резка металла с ЧПУ" class="w-full h-full object-cover">
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Prices Table for Plasma -->
  <section class="py-14 sm:py-18 bg-slate-50 text-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-10">
        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Прайс-лист на плазменную резку металла с ЧПУ (руб/м.п.)
        </h2>
        <p class="text-slate-600 text-sm mt-2">
          Включает НДС 20%. Возможно выполнение заказа из металла заказчика или со склада ООО «Уралгиб».
        </p>
      </div>

      <div class="gost-table-wrapper shadow-sm max-w-4xl mx-auto">
        <table class="gost-table">
          <thead>
            <tr>
              <th>Толщина листа</th>
              <th>Черная сталь (Ст3/09Г2С)</th>
              <th>Врезка (прокол)</th>
              <th>Нержавеющая сталь</th>
              <th>Алюминий</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>2.0 мм</td><td>30 ₽</td><td>4.0 ₽</td><td>50 ₽</td><td>45 ₽</td></tr>
            <tr><td>3.0 мм</td><td>40 ₽</td><td>5.5 ₽</td><td>70 ₽</td><td>62 ₽</td></tr>
            <tr><td>4.0 мм</td><td>52 ₽</td><td>7.0 ₽</td><td>95 ₽</td><td>85 ₽</td></tr>
            <tr><td>5.0 мм</td><td>65 ₽</td><td>9.0 ₽</td><td>130 ₽</td><td>115 ₽</td></tr>
            <tr><td>6.0 мм</td><td>80 ₽</td><td>12.0 ₽</td><td>170 ₽</td><td>150 ₽</td></tr>
            <tr><td>8.0 мм</td><td>115 ₽</td><td>16.0 ₽</td><td>240 ₽</td><td>215 ₽</td></tr>
            <tr><td>10.0 мм</td><td>150 ₽</td><td>22.0 ₽</td><td>330 ₽</td><td>295 ₽</td></tr>
            <tr><td>12.0 мм</td><td>195 ₽</td><td>30.0 ₽</td><td>440 ₽</td><td>390 ₽</td></tr>
            <tr><td>16.0 мм</td><td>280 ₽</td><td>45.0 ₽</td><td>620 ₽</td><td>550 ₽</td></tr>
            <tr><td>20.0 мм</td><td>390 ₽</td><td>65.0 ₽</td><td>840 ₽</td><td>750 ₽</td></tr>
          </tbody>
        </table>
      </div>

      <div class="mt-8 text-center">
        <button type="button" data-open-modal="quote-modal" data-modal-comment="Запрос на расчет плазменной резки по прайсу" class="px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm shadow-md transition-all">
          Загрузить чертежи на расчет плазмы
        </button>
      </div>
    </div>
  </section>
  `;
}

module.exports = renderRezkaPage;

