/**
 * Dedicated Page: Гибка на ЧПУ прессе 220т (/gibka/)
 * Clean Light Industrial Theme
 */

const renderBreadcrumbs = require('../templates/breadcrumbs');

function renderGibkaPage(data, page, relPrefix) {
  return `
  <!-- PAGE HEADER (Clean Light Theme) -->
  <div class="bg-gradient-to-b from-white via-slate-50 to-slate-100/70 text-slate-900 border-b border-slate-200 py-10 sm:py-14">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      ${renderBreadcrumbs(page.breadcrumbs, relPrefix)}
      <div class="mt-4 max-w-3xl">
        <div class="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
          <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          <span>ЧПУ листогиб 2200 кН | Длина до 4000 мм</span>
        </div>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
          ${page.h1}
        </h1>
        <p class="mt-3 text-slate-600 text-base leading-relaxed">
          Профессиональная пространственная гибка листового металла на гидравлическом прессе с ЧПУ усилием 220 тонн. Длина рабочей зоны до 4 метров, точность угла 0.01°, активная компенсация прогиба стола (Crowning) и богатый парк матриц.
        </p>
      </div>
    </div>
  </div>

  <section class="py-14 sm:py-18 bg-white text-slate-900 border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        <div class="lg:col-span-6 space-y-5">
          <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase">
            <span>Технология высокой точности</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Идеальная геометрия без «бочкообразности» по всей длине 4 метра
          </h2>
          <p class="text-sm text-slate-600 leading-relaxed">
            При гибке длинномерных деталей (доборные элементы, лотки, профили ЛСТК) обычные прессы дают неравномерный угол в центре заготовки из-за упругой деформации балки. Наш пресс оснащен гидравлической ЧПУ-системой компенсации прогиба, которая рассчитывает противодействие в реальном времени, обеспечивая строго одинаковый угол 90.0° от края до края.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2">
            <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <div class="font-bold text-slate-900">Многоручьевые матрицы</div>
              <div class="text-slate-500">Широкий набор V-матриц от V6 до V120 для гибки листов толщиной от 0.5 до 12 мм с минимальным внутренним радиусом.</div>
            </div>
            <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <div class="font-bold text-slate-900">Сложные гибы и Z-профили</div>
              <div class="text-slate-500">Узкие острые пуансоны «гусиная шея» позволяют делать встречные гибы коробчатых деталей и фасадных кассет.</div>
            </div>
          </div>

          <div class="pt-2">
            <button type="button" data-open-modal="quote-modal" data-modal-comment="Запрос на гибку листового металла на ЧПУ прессе 220т" class="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs sm:text-sm shadow-md transition-all">
              Заказать ЧПУ гибку
            </button>
          </div>
        </div>

        <div class="lg:col-span-6">
          <div class="rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xl aspect-[16/10]">
            <img src="${relPrefix}/images/equipment/cnc-press-brake.jpg" alt="Листогибочный пресс с ЧПУ 220т 4000мм на заводе Уралгиб" class="w-full h-full object-cover">
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Prices Table for Bending -->
  <section class="py-14 sm:py-18 bg-slate-50 text-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-10">
        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Стоимость гибки листового металла на ЧПУ прессе (руб/гиб)
        </h2>
        <p class="text-slate-600 text-sm mt-2">
          Цены указаны с НДС 20% для длины гиба до 2500 мм. На длину 2500–4000 мм действует коэффициент 1.35.
        </p>
      </div>

      <div class="gost-table-wrapper shadow-sm max-w-3xl mx-auto overflow-x-auto">
        <table class="gost-table w-full text-xs text-left">
          <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
            <tr>
              <th class="p-3">Толщина листа</th>
              <th class="p-3">Черная сталь (Ст3/09Г2С)</th>
              <th class="p-3">Нержавеющая сталь</th>
              <th class="p-3">Алюминиевые сплавы</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 font-mono">
            <tr><td class="p-3 font-bold text-slate-800 font-sans">0.5 – 1.0 мм</td><td class="p-3">18 – 22 ₽</td><td class="p-3">28 – 35 ₽</td><td class="p-3">22 – 28 ₽</td></tr>
            <tr><td class="p-3 font-bold text-slate-800 font-sans">1.2 – 1.5 мм</td><td class="p-3">26 ₽</td><td class="p-3">42 ₽</td><td class="p-3">34 ₽</td></tr>
            <tr><td class="p-3 font-bold text-slate-800 font-sans">2.0 мм</td><td class="p-3">32 ₽</td><td class="p-3">52 ₽</td><td class="p-3">42 ₽</td></tr>
            <tr><td class="p-3 font-bold text-slate-800 font-sans">3.0 мм</td><td class="p-3">45 ₽</td><td class="p-3">75 ₽</td><td class="p-3">60 ₽</td></tr>
            <tr><td class="p-3 font-bold text-slate-800 font-sans">4.0 мм</td><td class="p-3">65 ₽</td><td class="p-3">110 ₽</td><td class="p-3">85 ₽</td></tr>
            <tr><td class="p-3 font-bold text-slate-800 font-sans">5.0 мм</td><td class="p-3">90 ₽</td><td class="p-3">160 ₽</td><td class="p-3">125 ₽</td></tr>
            <tr><td class="p-3 font-bold text-slate-800 font-sans">6.0 мм</td><td class="p-3">125 ₽</td><td class="p-3">220 ₽</td><td class="p-3">175 ₽</td></tr>
            <tr><td class="p-3 font-bold text-slate-800 font-sans">8.0 мм</td><td class="p-3">190 ₽</td><td class="p-3">340 ₽</td><td class="p-3">270 ₽</td></tr>
            <tr><td class="p-3 font-bold text-slate-800 font-sans">10.0 мм</td><td class="p-3">280 ₽</td><td class="p-3">—</td><td class="p-3">—</td></tr>
          </tbody>
        </table>
      </div>

      <div class="mt-8 text-center">
        <button type="button" data-open-modal="quote-modal" data-modal-comment="Расчет партии деталей с гибкой" class="px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-sm shadow-md transition-all">
          Прикрепить чертеж развертки на расчет
        </button>
      </div>
    </div>
  </section>
  `;
}

module.exports = renderGibkaPage;
