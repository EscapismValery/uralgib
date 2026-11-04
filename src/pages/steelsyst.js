/**
 * Dedicated Page: Справочник систем обозначения сталей (/steelsyst/)
 */

const renderBreadcrumbs = require('../templates/breadcrumbs');

function renderSteelsystPage(data, page, relPrefix) {
  const steelGrades = [
    {
      category: 'structural',
      gost: 'Ст3сп5 / Ст3пс',
      aisi: 'ASTM A36 / AISI 1020',
      din: 'S235JR (1.0038)',
      jis: 'SS400',
      desc: 'Углеродистая конструкционная сталь обыкновенного качества. Отличная свариваемость без подогрева, высокая пластичность при гибке.',
      laserGas: 'Кислород O₂ (быстро) или Азот N₂ (чисто)',
      use: 'Несущие строительные металлоконструкции, закладные детали, фасонки, опоры, корпусные детали.'
    },
    {
      category: 'structural',
      gost: '09Г2С',
      aisi: 'ASTM A572 Gr.50 / Grade 345',
      din: 'S355J2 (1.0577)',
      jis: 'SM490A',
      desc: 'Низколегированная конструкционная кремниево-марганцевая сталь. Сохраняет ударную вязкость при экстремальных температурах до -70°C (северное исполнение).',
      laserGas: 'Кислород O₂ или Азот N₂',
      use: 'Ответственные металлоконструкции мостов, резервуаров, быстровозводимых складов, элементов спецтехники.'
    },
    {
      category: 'structural',
      gost: 'Сталь 20',
      aisi: 'AISI 1020',
      din: 'C22 (1.0402)',
      jis: 'S20C',
      desc: 'Качественная конструкционная углеродистая сталь. Хорошо поддается цементации, токарной обработке и глубокой вытяжке.',
      laserGas: 'Кислород O₂ / N₂',
      use: 'Штуцеры, фланцы, патрубки, коллекторы котлов, слабонагруженные детали механизмов.'
    },
    {
      category: 'structural',
      gost: 'Сталь 45',
      aisi: 'AISI 1045',
      din: 'C45E (1.1191)',
      jis: 'S45C',
      desc: 'Среднеуглеродистая качественная сталь. Обладает повышенной прочностью, поддается поверхностной закалке ТВЧ до 50–55 HRC.',
      laserGas: 'Кислород O₂ (требует плавного врезания)',
      use: 'Валы, зубчатые венцы, шестерни, шпиндели, упорные пальцы, тяжелонагруженные крепежные детали.'
    },
    {
      category: 'stainless',
      gost: '08Х18Н10 (12Х18Н9)',
      aisi: 'AISI 304',
      din: '1.4301 (X5CrNi18-10)',
      jis: 'SUS 304',
      desc: 'Аустенитная немагнитная коррозионностойкая нержавеющая сталь. Высокая стойкость к кислотам и щелочам, допуск к пищевым продуктам.',
      laserGas: 'Азот N₂ высокого давления (чистый зеркальный торец)',
      use: 'Оборудование для пищевой промышленности, мебель для HoReCa, медицинские емкости, фасадные архитектурные панели.'
    },
    {
      category: 'stainless',
      gost: '03Х17Н14М3',
      aisi: 'AISI 316L',
      din: '1.4404 (X2CrNiMo17-12-2)',
      jis: 'SUS 316L',
      desc: 'Молибденсодержащая нержавеющая сталь повышенной стойкости к питтинговой коррозии в агрессивных хлоридных и морских средах.',
      laserGas: 'Азот N₂ криогенной чистоты',
      use: 'Химические реакторы, фармацевтика, морское оборудование, теплообменники агрессивных сред.'
    },
    {
      category: 'stainless',
      gost: '12Х18Н10Т',
      aisi: 'AISI 321',
      din: '1.4541 (X6CrNiTi18-10)',
      jis: 'SUS 321',
      desc: 'Хромоникелевая аустенитная сталь, стабилизированная титаном. Не склонна к межкристаллитной коррозии при сварке и нагреве до 800°C.',
      laserGas: 'Азот N₂ высокого давления',
      use: 'Выхлопные системы, печные коллекторы, сварные сосуды под давлением, нефтеперерабатывающее оборудование.'
    },
    {
      category: 'stainless',
      gost: '08Х17Т',
      aisi: 'AISI 430',
      din: '1.4016 (X6Cr17)',
      jis: 'SUS 430',
      desc: 'Ферритная хромистая нержавеющая сталь (магнитится). Экономичный аналог AISI 304 для умеренно агрессивных сред и декоративных целей.',
      laserGas: 'Азот N₂ или очищенный воздух',
      use: 'Внутренняя отделка, кожухи бытовой техники, дымоходы, вытяжные короба, торговое оборудование.'
    },
    {
      category: 'alloys',
      gost: 'АМг2 / АМг3 / АМг5',
      aisi: 'AA 5052 / AA 5754',
      din: 'EN AW-5754 / AlMg3',
      jis: 'A5052',
      desc: 'Магналии — деформируемые алюминиево-магниевые сплавы. Высокая коррозионная стойкость в морской воде, отличная пластичность при гибке.',
      laserGas: 'Азот N₂ высокого давления',
      use: 'Легкие корпуса электроприборов, судовые надстройки, резервуары для жидкостей, облицовочные панели.'
    },
    {
      category: 'alloys',
      gost: 'Д16Т (дюралюминий)',
      aisi: 'AA 2024-T4',
      din: 'EN AW-2024',
      jis: 'A2024',
      desc: 'Высокопрочный термоупрочненный дюралюминий. Имеет высокое соотношение прочности к весу, превосходно обрабатывается на фрезерных и токарных станках.',
      laserGas: 'Азот N₂ (лазерная резка с охлаждением)',
      use: 'Силовые элементы авиационной и приборостроительной техники, спортивное снаряжение, высоконагруженные кронштейны.'
    },
    {
      category: 'alloys',
      gost: 'М1 / М2 (медь)',
      aisi: 'C11000 (ETP Copper)',
      din: 'CW004A (Cu-ETP)',
      jis: 'C1100',
      desc: 'Чистая электротехническая медь с чистотой 99.9%. Высочайшая электро- и теплопроводность.',
      laserGas: 'Кислород O₂ или N₂ на волоконном лазере',
      use: 'Электротехнические шины, контактные группы, радиаторы охлаждения, трансформаторные выводы.'
    },
    {
      category: 'alloys',
      gost: 'Л63 (латунь)',
      aisi: 'C27200 (Yellow Brass)',
      din: 'CuZn37 (2.0321)',
      jis: 'C2720',
      desc: 'Простая двухкомпонентная латунь (63% Cu, 37% Zn). Отличная полируемость, стойкость к трению, легкая пайка и декоративный золотистый вид.',
      laserGas: 'Азот N₂',
      use: 'Декоративные элементы интерьера, фурнитура, втулки, сантехнические детали, радиаторные трубки.'
    }
  ];

  return `
  <!-- Top Banner (Clean Light Theme) -->
  <div class="bg-gradient-to-b from-white via-slate-50 to-slate-100/70 text-slate-900 border-b border-slate-200 py-10 sm:py-14">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      ${renderBreadcrumbs(page.breadcrumbs, relPrefix)}
      <div class="mt-4 max-w-3xl">
        <div class="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
          <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          <span>Инженерно-металлургический справочник</span>
        </div>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
          ${page.h1}
        </h1>
        <p class="mt-3 text-slate-600 text-base leading-relaxed">
          Таблица соответствия международных стандартов обозначения сталей и сплавов: ГОСТ (Россия) — AISI / ASTM (США) — DIN / EN (Германия/ЕС) — JIS (Япония). Рекомендации по лазерному раскрою, гибке и свариваемости.
        </p>
      </div>
    </div>
  </div>

  <section class="py-14 sm:py-18 bg-slate-50 text-slate-900 border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Interactive Filter & Search Controls -->
      <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <!-- Category Buttons -->
        <div class="flex items-center space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          <button type="button" data-steel-category="all" class="active-cat px-4 py-2 rounded-xl text-xs font-bold transition-all bg-amber-500 text-slate-950 whitespace-nowrap shadow-sm">
            Все марки (12)
          </button>
          <button type="button" data-steel-category="structural" class="px-4 py-2 rounded-xl text-xs font-medium transition-all bg-slate-100 hover:bg-slate-200 text-slate-700 whitespace-nowrap">
            Конструкционные (Ст3, 09Г2С)
          </button>
          <button type="button" data-steel-category="stainless" class="px-4 py-2 rounded-xl text-xs font-medium transition-all bg-slate-100 hover:bg-slate-200 text-slate-700 whitespace-nowrap">
            Нержавеющие (AISI 304/316)
          </button>
          <button type="button" data-steel-category="alloys" class="px-4 py-2 rounded-xl text-xs font-medium transition-all bg-slate-100 hover:bg-slate-200 text-slate-700 whitespace-nowrap">
            Цветмет (Алюминий, Медь, Латунь)
          </button>
        </div>

        <!-- Live Search Input -->
        <div class="w-full md:w-72 relative">
          <input type="text" id="steelsyst-search" placeholder="Поиск марки: 09Г2С, 304, S355..." class="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:outline-none focus:border-amber-500 focus:bg-white transition-colors">
          <svg class="w-4 h-4 text-slate-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </div>

      </div>

      <!-- Steel Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${steelGrades.map(s => `
          <div class="steel-grade-card bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between" data-category="${s.category}">
            <div>
              <div class="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                <span class="text-xs font-bold uppercase tracking-wider text-amber-700 font-mono">ГОСТ РФ</span>
                <span class="text-lg font-black text-slate-900 font-mono">${s.gost}</span>
              </div>

              <!-- Standards Matrix -->
              <div class="space-y-1.5 text-xs font-mono bg-slate-50 p-3 rounded-xl border border-slate-200 mb-4">
                <div class="flex justify-between text-slate-600">
                  <span class="text-slate-400">AISI / ASTM (США):</span>
                  <span class="font-bold text-slate-800">${s.aisi}</span>
                </div>
                <div class="flex justify-between text-slate-600">
                  <span class="text-slate-400">DIN / EN (Европа):</span>
                  <span class="font-bold text-slate-800">${s.din}</span>
                </div>
                <div class="flex justify-between text-slate-600">
                  <span class="text-slate-400">JIS (Япония):</span>
                  <span class="font-bold text-slate-800">${s.jis}</span>
                </div>
              </div>

              <p class="text-xs text-slate-600 leading-relaxed mb-3">
                ${s.desc}
              </p>

              <div class="space-y-2 text-xs">
                <div class="p-2.5 rounded-lg bg-amber-50/80 border border-amber-200 text-amber-950">
                  <span class="font-bold block text-[11px] text-amber-800">Режим лазерной резки 6 кВт:</span>
                  ${s.laserGas}
                </div>
                <div class="text-[11px] text-slate-500">
                  <strong class="text-slate-700">Применение:</strong> ${s.use}
                </div>
              </div>
            </div>

            <div class="mt-5 pt-4 border-t border-slate-100">
              <button type="button" data-open-modal="quote-modal" data-modal-comment="Требуется раскрой / гибка стали марки: ${s.gost} (${s.aisi})" class="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-amber-500 hover:text-slate-950 text-slate-700 font-bold text-xs text-center transition-colors">
                Заказать раскрой стали ${s.gost} &rarr;
              </button>
            </div>
          </div>
        `).join('')}
      </div>

    </div>
  </section>
  `;
}

module.exports = renderSteelsystPage;

