/**
 * In-House Design Bureau (КМ / КМД) Component
 */

function renderDesignBureau(relPrefix) {
  function r(path) {
    if (path === '/') return `${relPrefix}/index.html`;
    if (path.endsWith('.html')) return `${relPrefix}/${path.replace(/^\//, '')}`;
    if (path.endsWith('/')) return `${relPrefix}/${path.replace(/^\//, '')}index.html`;
    return `${relPrefix}/${path.replace(/^\//, '')}/index.html`;
  }

  return `
  <section class="py-16 sm:py-20 bg-slate-900 text-white relative border-b border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        <!-- Left Column: Bureau Information (7 cols) -->
        <div class="lg:col-span-7 space-y-6">
          <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <svg class="w-3.5 h-3.5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
            </svg>
            <span>Инжиниринговый центр завода</span>
          </div>

          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Собственное проектно-конструкторское бюро (КМ / КМД)
          </h2>

          <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
            Вам не нужно нанимать сторонних проектировщиков. Инженеры ООО «Уралгиб» разработают деталировочные чертежи марки КМД, создадут 3D-модели узлов и скомпонуют оптимальную карту раскроя с минимальным коэффициентом отхода.
          </p>

          <!-- 4 Key Advantages Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            
            <div class="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
              <div class="text-amber-400 font-bold text-sm flex items-center">
                <svg class="w-4 h-4 mr-1.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                Экономия 4–8% металла
              </div>
              <p class="text-xs text-slate-400 leading-relaxed">
                Алгоритмы автоматического нестинга (раскладки) плотно группируют заготовки на стандартных листах 1500×3000 и 1500×6000 мм.
              </p>
            </div>

            <div class="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
              <div class="text-amber-400 font-bold text-sm flex items-center">
                <svg class="w-4 h-4 mr-1.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                Компас-3D & SolidWorks
              </div>
              <p class="text-xs text-slate-400 leading-relaxed">
                Принимаем файлы в форматах DXF, DWG, STEP, IGES, PDF или разрабатываем модель с нуля по образцу детали или эскизу.
              </p>
            </div>

            <div class="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
              <div class="text-amber-400 font-bold text-sm flex items-center">
                <svg class="w-4 h-4 mr-1.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                Развертка с учетом K-фактора
              </div>
              <p class="text-xs text-slate-400 leading-relaxed">
                Точный расчет нейтрального слоя и радиусов гибки под наш ЧПУ пресс 220т с точностью угла до 0.01° без брака.
              </p>
            </div>

            <div class="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
              <div class="text-amber-400 font-bold text-sm flex items-center">
                <svg class="w-4 h-4 mr-1.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                Расчет прочности и нагрузок
              </div>
              <p class="text-xs text-slate-400 leading-relaxed">
                Статический расчет ферм, балок и узлов ЛСТК по СП 260.1325800 с выдачей официальной проектной документации.
              </p>
            </div>

          </div>

          <div class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <button type="button" data-open-modal="quote-modal" data-modal-comment="Требуется разработка чертежей КМ/КМД и расчет раскроя" class="px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm text-center shadow-md transition-all">
              Заказать разработку КМД
            </button>
            <a href="${r('/order/')}" class="px-5 py-3 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-medium text-sm text-center transition-colors">
              Требования к чертежам DXF &rarr;
            </a>
          </div>
        </div>

        <!-- Right Column: Visual Blueprint Card (5 cols) -->
        <div class="lg:col-span-5">
          <div class="p-6 bg-slate-950 rounded-2xl border border-slate-800 shadow-xl relative overflow-hidden">
            <div class="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center justify-between">
              <span>Спецификация КМД в работе</span>
              <span class="font-mono text-[10px] text-slate-500">REV. 2.4</span>
            </div>
            
            <div class="space-y-3 font-mono text-xs">
              <div class="p-3 bg-slate-900 rounded-lg border border-slate-800 flex justify-between items-center">
                <span class="text-slate-300">Ферма Ф-1 (L=18м)</span>
                <span class="text-emerald-400 font-bold">Готово в ЧПУ</span>
              </div>
              <div class="p-3 bg-slate-900 rounded-lg border border-slate-800 flex justify-between items-center">
                <span class="text-slate-300">Стойка СТ-4 (H=6.2м)</span>
                <span class="text-emerald-400 font-bold">Раскрой лазером</span>
              </div>
              <div class="p-3 bg-slate-900 rounded-lg border border-slate-800 flex justify-between items-center">
                <span class="text-slate-300">Фасонка ФС-12 (лист 12мм)</span>
                <span class="text-amber-400 font-bold">Оптимизация нестинга</span>
              </div>
            </div>

            <div class="mt-5 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-slate-300 leading-relaxed">
              <span class="font-bold text-amber-400 block mb-1">Срочный запуск управляющей программы:</span>
              При наличии чистого DXF-контура без наложений оператор загружает деталь в ЧПУ лазерного комплекса IRON MAC в течение 20 минут.
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
  `;
}

module.exports = renderDesignBureau;
