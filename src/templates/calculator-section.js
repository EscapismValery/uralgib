/**
 * Interactive Metalworking Cost Calculator Component
 * Refined Professional Slate & Amber Palette
 */

function renderCalculator(relPrefix) {
  return `
  <section id="calculator" class="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden border-t border-b border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center max-w-3xl mx-auto mb-12">
        <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
          <span class="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span>
          <span>Онлайн-калькулятор цен 2026 года</span>
        </div>
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
          Мгновенный расчет стоимости металлообработки
        </h2>
        <p class="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
          Выберите операцию, марку металла и параметры реза. Калькулятор учитывает стоимость реза, врезок, гибки и доп. опций с НДС 20%.
        </p>
      </div>

      <div id="metal-calculator" class="bg-slate-950 border border-slate-800 rounded-2xl shadow-xl p-5 sm:p-8 lg:p-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <!-- Left Column: Controls (7 cols) -->
          <div class="lg:col-span-7 space-y-6">
            
            <!-- Step 1: Operation -->
            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5">
                1. Выберите операцию металлообработки
              </label>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button type="button" data-calc-op="laser" class="p-3 rounded-lg border text-xs text-center transition-all bg-amber-500 text-slate-950 border-amber-500 font-bold shadow-md">
                  Лазер 6 кВт
                </button>
                <button type="button" data-calc-op="plasma" class="p-3 rounded-lg border text-xs text-center transition-all bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-500">
                  Плазма ЧПУ
                </button>
                <button type="button" data-calc-op="shears" class="p-3 rounded-lg border text-xs text-center transition-all bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-500">
                  Рубка гильотиной
                </button>
                <button type="button" data-calc-op="bending" class="p-3 rounded-lg border text-xs text-center transition-all bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-500">
                  Гибка 220 тонн
                </button>
              </div>
            </div>

            <!-- Step 2: Material -->
            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5">
                2. Марка сплава / Тип металла
              </label>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button type="button" data-calc-mat="carbon" class="p-2.5 rounded-lg border text-xs text-center transition-all bg-slate-700 text-white border-slate-600 font-bold">
                  Черная сталь (Ст3/09Г2С)
                </button>
                <button type="button" data-calc-mat="stainless" class="p-2.5 rounded-lg border text-xs text-center transition-all bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-500">
                  Нержавейка (AISI 304/430)
                </button>
                <button type="button" data-calc-mat="aluminum" class="p-2.5 rounded-lg border text-xs text-center transition-all bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-500">
                  Алюминий (АМг/АМц)
                </button>
                <button type="button" data-calc-mat="copper" class="p-2.5 rounded-lg border text-xs text-center transition-all bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-500">
                  Медь / Латунь
                </button>
              </div>
            </div>

            <!-- Step 3: Thickness Slider & Quick Presets -->
            <div class="p-4 bg-slate-900 rounded-xl border border-slate-800">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-bold uppercase tracking-wider text-slate-300">
                  3. Толщина листа
                </span>
                <span id="calc-thickness-val" class="text-lg font-black text-amber-400 font-mono">
                  3.0 мм
                </span>
              </div>
              <input type="range" id="calc-thickness-slider" min="0.5" max="20" step="0.5" value="3.0" class="w-full">
              
              <!-- Quick thickness chips -->
              <div class="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-slate-800">
                <span class="text-[10px] text-slate-400 self-center mr-1">Быстрый выбор:</span>
                <button type="button" data-calc-thick-preset="1.0" class="px-2 py-0.5 rounded text-[11px] bg-slate-800 hover:bg-slate-700 text-slate-300">1.0</button>
                <button type="button" data-calc-thick-preset="1.5" class="px-2 py-0.5 rounded text-[11px] bg-slate-800 hover:bg-slate-700 text-slate-300">1.5</button>
                <button type="button" data-calc-thick-preset="2.0" class="px-2 py-0.5 rounded text-[11px] bg-slate-800 hover:bg-slate-700 text-slate-300">2.0</button>
                <button type="button" data-calc-thick-preset="3.0" class="px-2 py-0.5 rounded text-[11px] bg-amber-500/20 text-amber-400 font-bold border border-amber-500/40">3.0</button>
                <button type="button" data-calc-thick-preset="4.0" class="px-2 py-0.5 rounded text-[11px] bg-slate-800 hover:bg-slate-700 text-slate-300">4.0</button>
                <button type="button" data-calc-thick-preset="6.0" class="px-2 py-0.5 rounded text-[11px] bg-slate-800 hover:bg-slate-700 text-slate-300">6.0</button>
                <button type="button" data-calc-thick-preset="8.0" class="px-2 py-0.5 rounded text-[11px] bg-slate-800 hover:bg-slate-700 text-slate-300">8.0</button>
                <button type="button" data-calc-thick-preset="10.0" class="px-2 py-0.5 rounded text-[11px] bg-slate-800 hover:bg-slate-700 text-slate-300">10.0</button>
                <button type="button" data-calc-thick-preset="16.0" class="px-2 py-0.5 rounded text-[11px] bg-slate-800 hover:bg-slate-700 text-slate-300">16.0</button>
                <button type="button" data-calc-thick-preset="20.0" class="px-2 py-0.5 rounded text-[11px] bg-slate-800 hover:bg-slate-700 text-slate-300">20.0</button>
              </div>
            </div>

            <!-- Step 4: Metric Inputs -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label class="block text-xs font-semibold text-slate-300 mb-1.5">
                  Длина реза (пог. м)
                </label>
                <div class="relative">
                  <input type="number" id="calc-input-length" value="50" min="1" step="1" class="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono text-sm focus:outline-none focus:border-amber-500">
                  <span class="absolute right-3 top-2 text-xs text-slate-400">м.п.</span>
                </div>
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-300 mb-1.5">
                  Количество врезок
                </label>
                <div class="relative">
                  <input type="number" id="calc-input-pierces" value="120" min="0" step="1" class="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono text-sm focus:outline-none focus:border-amber-500">
                  <span class="absolute right-3 top-2 text-xs text-slate-400">шт</span>
                </div>
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-300 mb-1.5">
                  Количество гибов
                </label>
                <div class="relative">
                  <input type="number" id="calc-input-bends" value="40" min="0" step="1" class="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono text-sm focus:outline-none focus:border-amber-500">
                  <span class="absolute right-3 top-2 text-xs text-slate-400">шт</span>
                </div>
              </div>
            </div>

            <!-- Step 5: Optional additions -->
            <div class="pt-3 border-t border-slate-800 space-y-3">
              <div class="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-800">
                <label class="flex items-center space-x-2.5 cursor-pointer">
                  <input type="checkbox" id="calc-check-coating" class="w-4 h-4 rounded text-amber-500 focus:ring-amber-500 border-slate-700 bg-slate-800">
                  <span class="text-xs text-slate-300 font-medium">Порошковая полимерная покраска RAL (380 ₽/м²)</span>
                </label>
                <div class="w-24">
                  <input type="number" id="calc-coating-area" value="10" min="1" disabled class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-white text-xs font-mono opacity-50">
                </div>
              </div>

              <div class="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-800">
                <label class="flex items-center space-x-2.5 cursor-pointer">
                  <input type="checkbox" id="calc-check-design" class="w-4 h-4 rounded text-amber-500 focus:ring-amber-500 border-slate-700 bg-slate-800">
                  <span class="text-xs text-slate-300 font-medium">Разработка 3D-модели и чертежей КМ/КМД бюро завода (+2 500 ₽)</span>
                </label>
              </div>
            </div>

          </div>

          <!-- Right Column: Results Summary (5 cols) -->
          <div class="lg:col-span-5 flex flex-col justify-between p-6 sm:p-7 bg-slate-900 rounded-xl border border-slate-800 shadow-inner">
            <div>
              <div class="flex items-center justify-between pb-4 border-b border-slate-800">
                <span class="text-xs font-bold uppercase tracking-wider text-slate-400">Смета металлообработки</span>
                <span class="inline-flex items-center px-2 py-0.5 rounded text-[11px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                  Срок: от 1 дня
                </span>
              </div>

              <!-- Price Breakdown List -->
              <div class="py-4 space-y-3 text-xs text-slate-300">
                <div class="flex justify-between items-center">
                  <span>Ставка за метр реза:</span>
                  <span class="font-bold text-white font-mono"><span id="calc-price-meter">62</span> ₽/м.п.</span>
                </div>
                <div class="flex justify-between items-center">
                  <span>Раскрой металла:</span>
                  <span id="calc-cutting-total" class="font-bold text-white font-mono">3 100 ₽</span>
                </div>
                <div class="flex justify-between items-center">
                  <span>Врезки / отверстия:</span>
                  <span id="calc-pierce-total" class="font-bold text-white font-mono">1 344 ₽</span>
                </div>
                <div class="flex justify-between items-center">
                  <span>Гибка деталей на ЧПУ:</span>
                  <span id="calc-bending-total" class="font-bold text-white font-mono">1 800 ₽</span>
                </div>
                <div class="flex justify-between items-center">
                  <span>Порошковая окраска RAL:</span>
                  <span id="calc-coating-total" class="font-bold text-white font-mono">0 ₽</span>
                </div>
              </div>

              <div class="pt-4 border-t border-slate-800">
                <div class="text-[11px] uppercase tracking-wider text-slate-400 mb-1">Итоговая расчетная стоимость:</div>
                <div id="calc-grand-total" class="text-3xl sm:text-4xl font-black text-amber-400 font-mono tracking-tight">
                  6 244 ₽
                </div>
                <div class="text-[11px] text-slate-400 mt-1 flex items-center">
                  <svg class="w-3.5 h-3.5 text-amber-500 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  Включает НДС 20% | Окончательная смета после анализа чертежа DXF
                </div>
              </div>
            </div>

            <!-- CTA Button inside calculator -->
            <div class="pt-6 mt-6 border-t border-slate-800 space-y-2.5">
              <button type="button" id="calc-submit-btn" class="w-full py-3.5 px-4 rounded-xl font-extrabold text-sm text-slate-950 bg-amber-500 hover:bg-amber-600 shadow-md transition-all duration-150 transform active:scale-95 text-center flex items-center justify-center space-x-2">
                <span>Зафиксировать цену и отправить расчет</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </button>
              <p class="text-[11px] text-slate-400 text-center">
                Передает данные в форму заявки с возможностью прикрепить файл DXF/PDF
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  </section>
  `;
}

module.exports = renderCalculator;
