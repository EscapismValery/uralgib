/**
 * Dedicated Page: Сварочные работы TIG/MIG (/svarka/)
 */

const renderBreadcrumbs = require('../templates/breadcrumbs');

function renderSvarkaPage(data, page, relPrefix) {
  return `
  <!-- Top Banner (Clean Light Theme) -->
  <div class="bg-gradient-to-b from-white via-slate-50 to-slate-100/70 text-slate-900 border-b border-slate-200 py-10 sm:py-14">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      ${renderBreadcrumbs(page.breadcrumbs, relPrefix)}
      <div class="mt-4 max-w-3xl">
        <div class="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
          <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          <span>TIG аргон | MIG/MAG | Контактная сварка | НАКС</span>
        </div>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
          ${page.h1}
        </h1>
        <p class="mt-3 text-slate-600 text-base leading-relaxed">
          Профессиональная сварка металлоконструкций, емкостей и тонколистовых изделий. Аргонодуговая сварка нержавеющей стали и алюминия, полуавтоматическая сварка строительных рам и контактная точечная сварка корпусов.
        </p>
      </div>
    </div>
  </div>

  <section class="py-14 sm:py-18 bg-white text-slate-900 border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        <div class="lg:col-span-6 space-y-5">
          <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase">
            <span>Качество сварных соединений</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Сварка ответственных конструкций с контролем качества ВИК
          </h2>
          <p class="text-sm text-slate-600 leading-relaxed">
            Сварочный участок ООО «Уралгиб» укомплектован инверторными сварочными аппаратами промышленного класса (Kemppi, EWM). Сварщики аттестованы в соответствии с требованиями НАКС (Национальное Агентство Контроля Сварки). Каждое изделие проходит визуально-измерительный контроль геометрии швов и проверку на герметичность при необходимости.
          </p>

          <div class="space-y-3 pt-2 text-xs">
            <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-3">
              <div class="w-6 h-6 rounded bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">✓</div>
              <div>
                <div class="font-bold text-slate-900">Аргонодуговая сварка (TIG)</div>
                <div class="text-slate-500 mt-0.5">Эстетичный ровный чешуйчатый шов без брызг. Пассивация и электрохимическая очистка швов нержавейки.</div>
              </div>
            </div>

            <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-3">
              <div class="w-6 h-6 rounded bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">✓</div>
              <div>
                <div class="font-bold text-slate-900">Полуавтомат в защитных газах (MIG/MAG)</div>
                <div class="text-slate-500 mt-0.5">Глубокий провар, высокая производительность при сборке силовых балок, ферм и закладных деталей.</div>
              </div>
            </div>

            <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-3">
              <div class="w-6 h-6 rounded bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">✓</div>
              <div>
                <div class="font-bold text-slate-900">Точечная контактная сварка</div>
                <div class="text-slate-500 mt-0.5">Сварка тонких листов 0.8–2.0 мм без сквозного прожига и температурных деформаций лицевых панелей.</div>
              </div>
            </div>
          </div>

          <div class="pt-2">
            <button type="button" data-open-modal="quote-modal" data-modal-comment="Запрос на сварочные работы TIG/MIG" class="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all">
              Заказать сварочные работы
            </button>
          </div>
        </div>

        <div class="lg:col-span-6">
          <div class="rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md aspect-[16/10]">
            <img src="${relPrefix}/images/equipment/welding-tig-mig.jpg" alt="Сварочный участок TIG/MIG" class="w-full h-full object-cover">
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Pricing Table for Welding -->
  <section class="py-14 sm:py-18 bg-slate-50 text-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-10">
        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Ориентировочная стоимость сварочных работ (с НДС 20%)
        </h2>
        <p class="text-slate-600 text-sm mt-2">
          Окончательная цена определяется по чертежу и требованиям к классу сварного шва.
        </p>
      </div>

      <div class="gost-table-wrapper shadow-sm max-w-3xl mx-auto">
        <table class="gost-table">
          <thead>
            <tr>
              <th>Вид сварки / Материал</th>
              <th>Единица измерения</th>
              <th>Базовая ставка</th>
              <th>Примечание</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>MIG/MAG полуавтомат (черная сталь)</td><td>пог. метр шва</td><td>от 220 ₽</td><td>Катет шва 4–6 мм</td></tr>
            <tr><td>MIG/MAG полуавтомат (толстый металл)</td><td>пог. метр шва</td><td>от 380 ₽</td><td>Катет шва 8–12 мм с разделкой</td></tr>
            <tr><td>TIG аргон (нержавеющая сталь)</td><td>пог. метр шва</td><td>от 450 ₽</td><td>Включает пассивацию шва</td></tr>
            <tr><td>TIG аргон (алюминиевые сплавы)</td><td>пог. метр шва</td><td>от 550 ₽</td><td>Сварка переменным током AC</td></tr>
            <tr><td>Точечная контактная сварка</td><td>1 точка</td><td>от 6.5 ₽</td><td>Серийные партии корпусов</td></tr>
            <tr><td>Слесарно-сборочные работы по чертежам</td><td>нормо-час</td><td>1 200 ₽</td><td>Сборка в сварочном кондукторе</td></tr>
          </tbody>
        </table>
      </div>

      <div class="mt-8 text-center">
        <button type="button" data-open-modal="quote-modal" data-modal-comment="Расчет сварки по чертежам" class="px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm shadow-md transition-all">
          Отправить чертеж сварочного узла
        </button>
      </div>
    </div>
  </section>
  `;
}

module.exports = renderSvarkaPage;

