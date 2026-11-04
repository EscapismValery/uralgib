/**
 * Dedicated Page: Лазерная резка металла 6000 Вт (/lazernaya-rezka-metalla/)
 */

const renderBreadcrumbs = require('../templates/breadcrumbs');
const renderCalculator = require('../templates/calculator-section');

function renderLaserPage(data, page, relPrefix) {
  function r(path) {
    if (path === '/') return `${relPrefix}/index.html`;
    if (path.endsWith('.html')) return `${relPrefix}/${path.replace(/^\//, '')}`;
    if (path.endsWith('/')) return `${relPrefix}/${path.replace(/^\//, '')}index.html`;
    return `${relPrefix}/${path.replace(/^\//, '')}/index.html`;
  }

  return `
  <!-- Top Banner & Breadcrumbs (Clean Light Theme) -->
  <div class="bg-gradient-to-b from-white via-slate-50 to-slate-100/70 text-slate-900 border-b border-slate-200 py-10 sm:py-14">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      ${renderBreadcrumbs(page.breadcrumbs, relPrefix)}
      <div class="mt-4 max-w-3xl">
        <div class="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
          <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          <span>Оптоволокно 6 кВт | Точность ±0.05 мм</span>
        </div>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
          ${page.h1}
        </h1>
        <p class="mt-3 text-slate-600 text-base leading-relaxed">
          Промышленный раскрой листового металла на волоконном лазерном комплексе <strong>IRON MAC 3015C (6000 Вт)</strong>. Чистый рез азотом под покраску без окалины, обработка черной стали до 25 мм, нержавейки и алюминия до 16 мм.
        </p>
      </div>
    </div>
  </div>

  <!-- Machine Presentation -->
  <section class="py-16 sm:py-20 bg-white text-slate-900 border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        <div class="lg:col-span-6 space-y-5">
          <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase">
            <span>Флагманский комплекс завода</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Возможности лазерного комплекса IRON MAC 3015C
          </h2>
          <p class="text-sm text-slate-600 leading-relaxed">
            Станок оснащен немецкой лазерной оптикой с автоматической фокусировкой, сменным челночным столом 3000×1500 мм и системой числового программного управления последнего поколения. Время смены паллет составляет всего 15 секунд, что обеспечивает непрерывность производственного процесса в 2 рабочие смены.
          </p>

          <div class="grid grid-cols-2 gap-3 text-xs font-mono pt-2">
            <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
              <span class="text-slate-500 block text-[10px]">Черная сталь (Ст3/09Г2С)</span>
              <span class="text-base font-bold text-slate-900">до 25 мм</span>
            </div>
            <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
              <span class="text-slate-500 block text-[10px]">Нержавеющая сталь (AISI)</span>
              <span class="text-base font-bold text-slate-900">до 16 мм</span>
            </div>
            <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
              <span class="text-slate-500 block text-[10px]">Алюминий (АМг/АМц)</span>
              <span class="text-base font-bold text-slate-900">до 16 мм</span>
            </div>
            <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
              <span class="text-slate-500 block text-[10px]">Медь и латунь</span>
              <span class="text-base font-bold text-slate-900">до 10 мм</span>
            </div>
          </div>

          <div class="pt-2 flex items-center space-x-4">
            <button type="button" data-open-modal="quote-modal" data-modal-comment="Запрос на лазерную резку 6000 Вт" class="px-6 py-3 rounded-xl bg-laser-500 hover:bg-laser-600 text-slate-950 font-black text-xs sm:text-sm shadow-glow-laser transition-all">
              Заказать лазерную резку
            </button>
            <a href="#prices" class="text-xs sm:text-sm font-bold text-slate-700 hover:text-laser-600">
              Смотреть тарифную сетку &darr;
            </a>
          </div>
        </div>

        <div class="lg:col-span-6">
          <div class="rounded-2xl overflow-hidden bg-industrial-950 border border-industrial-800 shadow-industrial-lg aspect-[16/10]">
            <img src="${relPrefix}/images/equipment/iron-mac-3015c.jpg" alt="Оптоволоконный лазерный комплекс IRON MAC 3015C" class="w-full h-full object-cover">
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Gas Technology: N2 vs O2 -->
  <section class="py-16 sm:py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-12">
        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Технологические газы: чистый рез под ваши задачи
        </h2>
        <p class="text-slate-600 text-sm mt-2">
          Мы используем компрессорные станции высокого давления и криогенный азот для максимального качества кромки.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Nitrogen -->
        <div class="p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div class="inline-flex items-center px-3 py-1 rounded-full bg-steel-50 text-steel-700 text-xs font-bold uppercase">
            <span>Азот высокого давления (N₂ 16–25 бар)</span>
          </div>
          <h3 class="text-xl font-bold text-slate-900">Чистый светлый торец без окалины</h3>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Идеально для нержавеющей стали, алюминия и ответственных деталей из черной стали. На торце не образуется оксидная пленка, что позволяет сразу наносить порошковую краску без пескоструйной обработки и сваривать детали без риска пор.
          </p>
          <ul class="text-xs text-slate-600 space-y-1.5 font-medium">
            <li class="flex items-center text-slate-800">
              <svg class="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              100% адгезия порошковой краски по RAL
            </li>
            <li class="flex items-center text-slate-800">
              <svg class="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              Отсутствие заусенцев и грата
            </li>
          </ul>
        </div>

        <!-- Oxygen -->
        <div class="p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div class="inline-flex items-center px-3 py-1 rounded-full bg-laser-50 text-laser-700 text-xs font-bold uppercase">
            <span>Кислородная резка (O₂ 0.5–6 бар)</span>
          </div>
          <h3 class="text-xl font-bold text-slate-900">Раскрой толстой черной стали до 25 мм</h3>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Применяется для раскроя толстолистовых конструкционных сталей (Ст3, 09Г2С, Сталь 20). Экзотермическая реакция окисления железа позволяет быстро и экономично резать листы толщиной до 25 мм с высокой прямолинейностью кромки.
          </p>
          <ul class="text-xs text-slate-600 space-y-1.5 font-medium">
            <li class="flex items-center text-slate-800">
              <svg class="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              Минимальная себестоимость метра реза
            </li>
            <li class="flex items-center text-slate-800">
              <svg class="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              Резка фасонных деталей, фланцев и плит
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Pricing Table Section -->
  <section id="prices" class="py-16 sm:py-20 bg-white text-slate-900 border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-10">
        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Прайс-лист на лазерную резку 6 кВт (руб/м.п. с НДС 20%)
        </h2>
        <p class="text-slate-600 text-sm mt-2">
          Цены указаны при объеме от 100 м.п. Для крупных партий свыше 1000 метров действуют оптовые скидки до 25%.
        </p>
      </div>

      <div class="gost-table-wrapper shadow-sm">
        <table class="gost-table">
          <thead>
            <tr>
              <th>Толщина (мм)</th>
              <th>Черная сталь (Ст3/09Г2С)</th>
              <th>Врезка (черн.)</th>
              <th>Нержавейка (AISI 304 N₂)</th>
              <th>Алюминий (АМг/АМц)</th>
              <th>Медь / Латунь</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>0.5 мм</td><td>22 ₽</td><td>3.0 ₽</td><td>38 ₽</td><td>32 ₽</td><td>55 ₽</td></tr>
            <tr><td>1.0 мм</td><td>28 ₽</td><td>3.5 ₽</td><td>48 ₽</td><td>42 ₽</td><td>75 ₽</td></tr>
            <tr><td>1.5 мм</td><td>35 ₽</td><td>4.5 ₽</td><td>64 ₽</td><td>56 ₽</td><td>110 ₽</td></tr>
            <tr><td>2.0 мм</td><td>44 ₽</td><td>5.5 ₽</td><td>82 ₽</td><td>74 ₽</td><td>160 ₽</td></tr>
            <tr><td>3.0 мм</td><td>62 ₽</td><td>8.0 ₽</td><td>125 ₽</td><td>105 ₽</td><td>240 ₽</td></tr>
            <tr><td>4.0 мм</td><td>84 ₽</td><td>11.0 ₽</td><td>175 ₽</td><td>155 ₽</td><td>350 ₽</td></tr>
            <tr><td>5.0 мм</td><td>110 ₽</td><td>15.0 ₽</td><td>240 ₽</td><td>215 ₽</td><td>490 ₽</td></tr>
            <tr><td>6.0 мм</td><td>140 ₽</td><td>20.0 ₽</td><td>310 ₽</td><td>285 ₽</td><td>680 ₽</td></tr>
            <tr><td>8.0 мм</td><td>195 ₽</td><td>28.0 ₽</td><td>460 ₽</td><td>410 ₽</td><td>980 ₽</td></tr>
            <tr><td>10.0 мм</td><td>255 ₽</td><td>38.0 ₽</td><td>620 ₽</td><td>560 ₽</td><td>1 450 ₽</td></tr>
            <tr><td>12.0 мм</td><td>340 ₽</td><td>50.0 ₽</td><td>850 ₽</td><td>780 ₽</td><td>По запросу</td></tr>
            <tr><td>16.0 мм</td><td>490 ₽</td><td>75.0 ₽</td><td>1 280 ₽</td><td>1 150 ₽</td><td>По запросу</td></tr>
            <tr><td>20.0 мм</td><td>680 ₽</td><td>110.0 ₽</td><td>—</td><td>—</td><td>—</td></tr>
            <tr><td>25.0 мм</td><td>950 ₽</td><td>160.0 ₽</td><td>—</td><td>—</td><td>—</td></tr>
          </tbody>
        </table>
      </div>

      <div class="mt-8 text-center">
        <button type="button" data-open-modal="quote-modal" data-modal-comment="Расчет лазерной резки по прайс-листу" class="px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-sm shadow-md transition-all">
          Загрузить чертеж на точный расчет за 15 минут
        </button>
      </div>
    </div>
  </section>

  <!-- Embedded Calculator -->
  ${renderCalculator(relPrefix)}
  `;
}

module.exports = renderLaserPage;

