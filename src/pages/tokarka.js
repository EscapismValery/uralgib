/**
 * Dedicated Page: Токарная обработка ЧПУ (/tokarka/)
 */

const renderBreadcrumbs = require('../templates/breadcrumbs');

function renderTokarkaPage(data, page, relPrefix) {
  return `
  <!-- Top Banner (Clean Light Theme) -->
  <div class="bg-gradient-to-b from-white via-slate-50 to-slate-100/70 text-slate-900 border-b border-slate-200 py-10 sm:py-14">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      ${renderBreadcrumbs(page.breadcrumbs, relPrefix)}
      <div class="mt-4 max-w-3xl">
        <div class="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
          <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          <span>ЧПУ токарные центры | Квалитет h7 / h8</span>
        </div>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
          ${page.h1}
        </h1>
        <p class="mt-3 text-slate-600 text-base leading-relaxed">
          Прецизионная механическая обработка тел вращения на токарных станках с числовым программным управлением. Изготовление фланцев, валов, штуцеров, втулок и нестандартного крепежа серийно и штучно по чертежам.
        </p>
      </div>
    </div>
  </div>

  <section class="py-14 sm:py-18 bg-white text-slate-900 border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        <div class="lg:col-span-6 space-y-5">
          <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase">
            <span>Технические возможности</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Высокая точность и чистота поверхности Ra 1.6–0.8
          </h2>
          <p class="text-sm text-slate-600 leading-relaxed">
            Современные токарные станки с ЧПУ обеспечивают повторяемость размеров партии деталей с точностью до нескольких микрон. Возможно выполнение сложных переходных ступеней, нарезка внутренней и наружной конической, метрической и дюймовой резьбы, накатка рифлений и расточка посадочных шеек под подшипники.
          </p>

          <div class="grid grid-cols-2 gap-3 text-xs font-mono pt-2">
            <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
              <span class="text-slate-500 block text-[10px]">Максимальный диаметр</span>
              <span class="text-base font-bold text-slate-900">до 420 мм</span>
            </div>
            <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
              <span class="text-slate-500 block text-[10px]">Максимальная длина</span>
              <span class="text-base font-bold text-slate-900">до 1000 мм</span>
            </div>
            <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
              <span class="text-slate-500 block text-[10px]">Квалитет точности</span>
              <span class="text-base font-bold text-slate-900">h7 / h8</span>
            </div>
            <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
              <span class="text-slate-500 block text-[10px]">Материалы</span>
              <span class="text-base font-bold text-slate-900">Сталь, нерж, латунь</span>
            </div>
          </div>

          <div class="pt-2">
            <button type="button" data-open-modal="quote-modal" data-modal-comment="Запрос на токарную ЧПУ обработку по чертежу" class="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all">
              Заказать токарную обработку
            </button>
          </div>
        </div>

        <div class="lg:col-span-6">
          <div class="rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md aspect-[16/10]">
            <img src="${relPrefix}/images/equipment/cnc-lathe.jpg" alt="Токарная обработка на станках с ЧПУ" class="w-full h-full object-cover">
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Pricing Table for Turning -->
  <section class="py-14 sm:py-18 bg-slate-50 text-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-10">
        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Базовые тарифы на токарные работы (с НДС 20%)
        </h2>
        <p class="text-slate-600 text-sm mt-2">
          При серийном заказе от 50 штук действует скидка до 30% на каждую деталь за счет оптимизации времени наладки ЧПУ.
        </p>
      </div>

      <div class="gost-table-wrapper shadow-sm max-w-3xl mx-auto">
        <table class="gost-table">
          <thead>
            <tr>
              <th>Операция / Деталь</th>
              <th>Материал</th>
              <th>Ориентировочная цена</th>
              <th>Сроки</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Фланцы плоские и воротниковые (D до 200мм)</td><td>Сталь 20 / 09Г2С</td><td>от 280 ₽ / шт</td><td>от 2 дней</td></tr>
            <tr><td>Ступенчатые валы (L до 500мм)</td><td>Сталь 40Х / 45</td><td>от 450 ₽ / шт</td><td>от 3 дней</td></tr>
            <tr><td>Втулки, пальцы, штуцеры</td><td>Латунь / Бронза</td><td>от 190 ₽ / шт</td><td>от 2 дней</td></tr>
            <tr><td>Резьбовые переходники и бобышки</td><td>Нержавейка AISI 304</td><td>от 220 ₽ / шт</td><td>от 2 дней</td></tr>
            <tr><td>Нормо-час ЧПУ токарного центра</td><td>Любой сплав</td><td>1 600 ₽ / час</td><td>Серийно</td></tr>
          </tbody>
        </table>
      </div>

      <div class="mt-8 text-center">
        <button type="button" data-open-modal="quote-modal" data-modal-comment="Расчет токарных деталей" class="px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm shadow-md transition-all">
          Загрузить чертеж тел вращения на расчет
        </button>
      </div>
    </div>
  </section>
  `;
}

module.exports = renderTokarkaPage;

