/**
 * Dedicated Page: Рубка на гильотине (/rubka/)
 */

const renderBreadcrumbs = require('../templates/breadcrumbs');

function renderRubkaPage(data, page, relPrefix) {
  return `
  <!-- Top Banner (Clean Light Theme) -->
  <div class="bg-gradient-to-b from-white via-slate-50 to-slate-100/70 text-slate-900 border-b border-slate-200 py-10 sm:py-14">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      ${renderBreadcrumbs(page.breadcrumbs, relPrefix)}
      <div class="mt-4 max-w-3xl">
        <div class="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
          <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          <span>Гидравлическая гильотина | Длина ножей 3000 мм</span>
        </div>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
          ${page.h1}
        </h1>
        <p class="mt-3 text-slate-600 text-base leading-relaxed">
          Быстрая механическая рубка листового металла на гидравлических гильотинных ножницах. Идеально ровный прямолинейный срез без термического воздействия, окалины и деформаций по цене от 14 рублей за рез.
        </p>
      </div>
    </div>
  </div>

  <section class="py-14 sm:py-18 bg-white text-slate-900 border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        <div class="lg:col-span-6 space-y-5">
          <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase">
            <span>Технологические особенности</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Преимущества гильотинной рубки перед терморезкой
          </h2>
          <p class="text-sm text-slate-600 leading-relaxed">
            В отличие от лазерной или плазменной резки, гильотина производит рез механическим сдвигом. Это означает, что кромка не подвергается термическому отпуску или закалке, не образуются оксиды и не нарушается кристаллическая решетка металла. Заготовки сразу готовы к дальнейшей гибке на листогибе и механической сварке.
          </p>

          <div class="space-y-3 pt-2 text-xs">
            <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-3">
              <div class="w-6 h-6 rounded bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">✓</div>
              <div>
                <div class="font-bold text-slate-900">Высочайшая скорость при нарезке полос</div>
                <div class="text-slate-500 mt-0.5">Рез 3-метрового листа занимает всего 2 секунды, что гарантирует минимальную стоимость партии.</div>
              </div>
            </div>

            <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-3">
              <div class="w-6 h-6 rounded bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">✓</div>
              <div>
                <div class="font-bold text-slate-900">Сохранение оцинкованного покрытия</div>
                <div class="text-slate-500 mt-0.5">При рубке оцинкованный слой на кромке затягивается ножом и не выгорает, сохраняя антикоррозийную стойкость.</div>
              </div>
            </div>
          </div>

          <div class="pt-2">
            <button type="button" data-open-modal="quote-modal" data-modal-comment="Запрос на рубку листового металла на гильотине" class="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all">
              Заказать рубку на гильотине
            </button>
          </div>
        </div>

        <div class="lg:col-span-6">
          <div class="rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md aspect-[16/10]">
            <img src="${relPrefix}/images/equipment/guillotine-shears.jpg" alt="Гидравлические гильотинные ножницы 3000 мм" class="w-full h-full object-cover">
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Prices Table for Rubka -->
  <section class="py-14 sm:py-18 bg-slate-50 text-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-10">
        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Стоимость рубки листового металла (руб/рез с НДС 20%)
        </h2>
        <p class="text-slate-600 text-sm mt-2">
          При заказе от 500 резов предоставляется скидка до 20%.
        </p>
      </div>

      <div class="gost-table-wrapper shadow-sm max-w-3xl mx-auto">
        <table class="gost-table">
          <thead>
            <tr>
              <th>Толщина листа</th>
              <th>Черная сталь (Ст3/09Г2С)</th>
              <th>Оцинкованный лист</th>
              <th>Нержавеющая сталь</th>
              <th>Алюминий</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>0.5 – 0.8 мм</td><td>14 ₽</td><td>15 ₽</td><td>25 ₽</td><td>20 ₽</td></tr>
            <tr><td>1.0 – 1.2 мм</td><td>18 ₽</td><td>20 ₽</td><td>34 ₽</td><td>26 ₽</td></tr>
            <tr><td>1.5 – 2.0 мм</td><td>24 ₽</td><td>28 ₽</td><td>45 ₽</td><td>35 ₽</td></tr>
            <tr><td>2.5 – 3.0 мм</td><td>42 ₽</td><td>46 ₽</td><td>82 ₽</td><td>65 ₽</td></tr>
            <tr><td>4.0 мм</td><td>58 ₽</td><td>—</td><td>115 ₽</td><td>90 ₽</td></tr>
            <tr><td>5.0 мм</td><td>75 ₽</td><td>—</td><td>150 ₽</td><td>120 ₽</td></tr>
            <tr><td>6.0 мм</td><td>95 ₽</td><td>—</td><td>190 ₽</td><td>155 ₽</td></tr>
          </tbody>
        </table>
      </div>

      <div class="mt-8 text-center">
        <button type="button" data-open-modal="quote-modal" data-modal-comment="Запрос на рубку полос и заготовок" class="px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm shadow-md transition-all">
          Отправить размеры полос на расчет
        </button>
      </div>
    </div>
  </section>
  `;
}

module.exports = renderRubkaPage;

