/**
 * Home Page Template (index.html)
 * Light Industrial Theme - Authentic, Human, Highly Credible
 */

const renderCalculator = require('../templates/calculator-section');
const renderCases = require('../templates/cases-section');
const renderDesignBureau = require('../templates/design-bureau-section');
const renderB2BTerms = require('../templates/b2b-section');

function renderHomePage(data, pageMeta, relPrefix) {
  const c = data.company;
  const eq = data.equipment;
  const products = data.products;

  function r(path) {
    if (path === '/') return `${relPrefix}/index.html`;
    if (path.endsWith('.xml') || path.endsWith('.html')) return `${relPrefix}/${path.replace(/^\//, '')}`;
    if (path.endsWith('/')) return `${relPrefix}/${path.replace(/^\//, '')}index.html`;
    return `${relPrefix}/${path.replace(/^\//, '')}/index.html`;
  }

  return `
  <!-- HERO SECTION (Light Industrial Aesthetic) -->
  <section class="relative bg-gradient-to-b from-white via-slate-50 to-slate-100/80 text-slate-900 overflow-hidden border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        <!-- Hero Text & Value Proposition (7 cols) -->
        <div class="lg:col-span-7 space-y-6">
          <div class="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold">
            <span class="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span>
            <span>Производственный комплекс в г. Берёзовский (15 мин от ЕКАД)</span>
          </div>

          <h1 class="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-slate-900 leading-[1.18]">
            Высокоточная металлообработка <span class="text-amber-600">полного цикла</span> и металлоконструкции
          </h1>

          <p class="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
            Завод ООО «Уралгиб» выполняет оптоволоконную лазерную резку 6 кВт (до 25 мм), высокоточную гибку ЧПУ 220т (до 4000 мм), производство ЛСТК каркасов, сварочные работы TIG/MIG и порошковую окраску по каталогу RAL. Работаем напрямую без посредников.
          </p>

          <!-- 3 Micro-trust Chips -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            <div class="flex items-center space-x-2 text-xs font-semibold text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200 shadow-sm">
              <svg class="w-4 h-4 text-emerald-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span>Работаем с НДС 20%</span>
            </div>
            <div class="flex items-center space-x-2 text-xs font-semibold text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200 shadow-sm">
              <svg class="w-4 h-4 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span>Расчет сметы за 15 минут</span>
            </div>
            <div class="flex items-center space-x-2 text-xs font-semibold text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200 shadow-sm">
              <svg class="w-4 h-4 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span>Свой склад металла 800+ т</span>
            </div>
          </div>

          <!-- Hero Action Buttons -->
          <div class="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <a href="#calculator" class="px-7 py-3.5 rounded-xl font-extrabold text-sm text-slate-950 bg-amber-500 hover:bg-amber-600 shadow-md hover:shadow-lg transition-all transform active:scale-95 text-center flex items-center justify-center space-x-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
              </svg>
              <span>Калькулятор стоимости онлайн</span>
            </a>
            
            <button type="button" data-open-modal="quote-modal" class="px-7 py-3.5 rounded-xl font-bold text-sm text-slate-800 bg-white border-2 border-slate-300 hover:border-slate-800 hover:bg-slate-50 transition-all text-center flex items-center justify-center space-x-2 shadow-sm">
              <svg class="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
              </svg>
              <span>Загрузить чертежи DXF / PDF</span>
            </button>
          </div>
        </div>

        <!-- Hero Visual Showcase Card (5 cols) -->
        <div class="lg:col-span-5">
          <div class="relative rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 shadow-xl">
            
            <div class="flex items-center justify-between pb-4 border-b border-slate-100">
              <div class="flex items-center space-x-2">
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span class="text-xs font-bold uppercase tracking-wider text-slate-700">Парк станков завода онлайн</span>
              </div>
              <span class="text-[11px] font-mono text-slate-600 font-bold bg-slate-100 px-2 py-0.5 rounded">2 СМЕНЫ / СУТКИ</span>
            </div>

            <!-- Featured Machine Image -->
            <div class="mt-4 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 aspect-[16/10] relative group">
              <img src="${relPrefix}/images/equipment/iron-mac-3015c.jpg" alt="Оптоволоконный лазерный комплекс IRON MAC 3015C 6000W на заводе Уралгиб" class="w-full h-full object-cover">
              <div class="absolute bottom-2 left-2 right-2 p-2.5 rounded-lg bg-slate-900/90 backdrop-blur border border-slate-700 text-xs text-white">
                <div class="font-bold flex justify-between items-center">
                  <span>IRON MAC 3015C (6000 Вт)</span>
                  <span class="text-amber-400 font-mono text-[11px]">±0.05 мм</span>
                </div>
                <div class="text-slate-300 text-[11px] mt-0.5">Черная сталь до 25 мм, нержавейка до 16 мм</div>
              </div>
            </div>

            <!-- Quick Specs Pill Row -->
            <div class="grid grid-cols-2 gap-3 mt-4 text-xs font-mono">
              <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <div class="text-slate-500 text-[10px] uppercase font-bold">Листогиб ЧПУ</div>
                <div class="text-slate-900 font-bold text-xs mt-0.5">220т / 4000 мм</div>
              </div>
              <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <div class="text-slate-500 text-[10px] uppercase font-bold">Плазма ЧПУ</div>
                <div class="text-slate-900 font-bold text-xs mt-0.5">до 20 мм (толстый лист)</div>
              </div>
            </div>

            <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span class="text-slate-500">Срочные заказы:</span>
              <span class="text-amber-600 font-bold">запуск в производство от 24 часов</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- SCALE COUNTERS SECTION (Light Clean Style) -->
  <section class="bg-white border-b border-slate-200 py-10 sm:py-12 text-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        
        <div class="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
          <div class="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-600 font-mono tracking-tight">
            ${c.yearsOnMarket}
          </div>
          <div class="text-sm font-bold text-slate-900 mt-1">Лет на рынке</div>
          <div class="text-xs text-slate-500 mt-0.5">Безупречная деловая репутация в УрФО с 2012 года</div>
        </div>

        <div class="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
          <div class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-800 font-mono tracking-tight">
            ${c.projectsCompleted}
          </div>
          <div class="text-sm font-bold text-slate-900 mt-1">Реализованных объектов</div>
          <div class="text-xs text-slate-500 mt-0.5">От серийных партий шкафов до каркасов складов</div>
        </div>

        <div class="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
          <div class="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-500 font-mono tracking-tight">
            ${c.laserPower}
          </div>
          <div class="text-sm font-bold text-slate-900 mt-1">Мощность лазера</div>
          <div class="text-xs text-slate-500 mt-0.5">Оптоволоконный комплекс IRON MAC 3015C</div>
        </div>

        <div class="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
          <div class="text-xl sm:text-2xl lg:text-2xl font-black text-emerald-600 font-mono tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">
            ${c.pressForce}
          </div>
          <div class="text-sm font-bold text-slate-900 mt-1">Усилие гибки ЧПУ</div>
          <div class="text-xs text-slate-500 mt-0.5">Длина рабочей зоны до 4 метров с ЧПУ компенсацией</div>
        </div>

      </div>
    </div>
  </section>

  <!-- HUMAN TRUST & ENGINEERING TEAM SECTION -->
  <section class="py-14 sm:py-20 bg-slate-100/70 border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-10">
        <div class="max-w-2xl">
          <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">
            <span>Инженерный контроль завода</span>
          </div>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            Персональная ответственность за каждый чертеж и гиб
          </h2>
          <p class="mt-2 text-slate-600 text-sm sm:text-base">
            «Уралгиб» — это не безликий агрегатор посредников, а уральское производство с постоянным инженерным штатом. Каждый заказ сопровождает персональный инженер-технолог.
          </p>
        </div>
        <div class="mt-4 md:mt-0 flex items-center space-x-2 text-xs font-semibold text-slate-600 bg-white px-3.5 py-2 rounded-lg border border-slate-200 shadow-sm">
          <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
          <span>Входной и выходной контроль по ГОСТ</span>
        </div>
      </div>

      <!-- 3 Key Specialists Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div class="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
          <div>
            <div class="flex items-center space-x-3.5 mb-4">
              <div class="w-12 h-12 rounded-full bg-amber-100 border border-amber-300 text-amber-800 flex items-center justify-center font-bold text-base flex-shrink-0">
                БК
              </div>
              <div>
                <h3 class="text-sm font-bold text-slate-900">Белоусов Константин Юрьевич</h3>
                <div class="text-xs text-amber-700 font-semibold">Главный технолог производства</div>
                <div class="text-[11px] text-slate-500 font-mono">Стаж в металлообработке: 18 лет</div>
              </div>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed italic border-l-2 border-amber-400 pl-3 py-0.5">
              «Лично утверждаю карты раскроя в Pronest и параметры гибки. Наша цель — не просто порезать металл, а снизить процент отхода заготовки клиента до 12% и гарантировать идеальную сходимость деталей при сборке.»
            </p>
          </div>
          <div class="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
            Специализация: лазерный раскрой 6 кВт, листовая штамповка, оптимизация КД
          </div>
        </div>

        <div class="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
          <div>
            <div class="flex items-center space-x-3.5 mb-4">
              <div class="w-12 h-12 rounded-full bg-blue-100 border border-blue-300 text-blue-800 flex items-center justify-center font-bold text-base flex-shrink-0">
                СА
              </div>
              <div>
                <h3 class="text-sm font-bold text-slate-900">Смирнов Алексей Викторович</h3>
                <div class="text-xs text-blue-700 font-semibold">Ведущий инженер-конструктор КМ/КМД</div>
                <div class="text-[11px] text-slate-500 font-mono">Стаж проектирования: 12 лет</div>
              </div>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed italic border-l-2 border-blue-400 pl-3 py-0.5">
              «Проверяю чертежи за 15 минут. Если в узлах есть перенапряжение или нетехнологичные гибы — оперативно связываюсь с заказчиком и предлагаю корректировку без срыва сроков проекта.»
            </p>
          </div>
          <div class="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
            Специализация: разработка КМ/КМД, ЛСТК каркасы, пространственные узлы
          </div>
        </div>

        <div class="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
          <div>
            <div class="flex items-center space-x-3.5 mb-4">
              <div class="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 flex items-center justify-center font-bold text-base flex-shrink-0">
                МД
              </div>
              <div>
                <h3 class="text-sm font-bold text-slate-900">Макаров Денис Николаевич</h3>
                <div class="text-xs text-emerald-700 font-semibold">Начальник службы ОТК</div>
                <div class="text-[11px] text-slate-500 font-mono">Аттестация ВИК НАКС: 15 лет</div>
              </div>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed italic border-l-2 border-emerald-400 pl-3 py-0.5">
              «100% входной контроль металла по сертификатам заводских плавок ПАО «ММК» и «Северсталь». Выходной контроль геометрии деталей калибрами и толщины полимерного покрытия приборами Elcometer.»
            </p>
          </div>
          <div class="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
            Специализация: неразрушающий контроль, капиллярная дефектоскопия, ISO 9001
          </div>
        </div>

      </div>

      <!-- Director's Open Address Banner -->
      <div class="mt-8 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center gap-6">
        <div class="flex-shrink-0">
          <div class="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-300 flex items-center justify-center text-amber-700">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
            </svg>
          </div>
        </div>
        <div class="flex-grow space-y-1 text-center md:text-left">
          <div class="text-xs font-bold uppercase tracking-wider text-amber-700">Прямой диалог с руководством завода</div>
          <div class="text-sm sm:text-base text-slate-800 font-medium">
            «Мы работаем открыто. Приглашаем инженеров и снабженцев на производственную площадку в г. Берёзовский: покажем раскрой вашего металла на лазере 6 кВт, работу пресса 220т и образцы готовой продукции. Никаких котов в мешке.»
          </div>
          <div class="text-xs text-slate-500 font-semibold pt-1">
            Дирекция ООО «Уралгиб» • г. Берёзовский, ул. Орджоникидзе, 19 Б
          </div>
        </div>
        <div class="flex-shrink-0">
          <button type="button" data-open-modal="quote-modal" data-modal-comment="Запрос на посещение производства и экскурсию в цех" class="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow transition-colors whitespace-nowrap">
            Записаться на визит в цех
          </button>
        </div>
      </div>

    </div>
  </section>

  <!-- KEY MACHINERY PARK OVERVIEW -->
  <section class="py-16 sm:py-20 bg-white text-slate-900 border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div class="max-w-2xl">
          <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Технологический парк завода</span>
          </div>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            Оборудование с ЧПУ для задач любой сложности
          </h2>
          <p class="mt-2 text-slate-600 text-sm sm:text-base">
            Полный цикл производства на одной площадке исключает лишнюю логистику и наценки посредников.
          </p>
        </div>
        <a href="${r('/services/')}" class="mt-4 md:mt-0 text-sm font-bold text-amber-600 hover:text-amber-700 flex items-center">
          <span>Смотреть все услуги и прайс</span>
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </a>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        ${eq.slice(0, 6).map(item => `
          <div class="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group">
            <div>
              <div class="relative bg-slate-900 aspect-[16/10] overflow-hidden">
                <img src="${relPrefix}/images/${item.image}" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy">
                <div class="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-slate-900/90 text-amber-400 font-bold text-[11px] border border-amber-500/30">
                  ${item.tag}
                </div>
              </div>
              <div class="p-5">
                <h3 class="text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                  <a href="${r(`/${item.link}/`)}">${item.name}</a>
                </h3>
                <p class="mt-2 text-xs text-slate-600 leading-relaxed">
                  ${item.desc}
                </p>
                <div class="mt-4 space-y-1.5 pt-3 border-t border-slate-100 text-xs font-mono">
                  ${item.specs.slice(0, 3).map(s => `
                    <div class="flex justify-between text-slate-500">
                      <span>${s.label}:</span>
                      <span class="font-bold text-slate-800">${s.val}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
            <div class="p-5 pt-0">
              <a href="${r(`/${item.link}/`)}" class="block w-full py-2.5 px-3 rounded-lg bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-700 font-bold text-xs text-center transition-colors">
                Технические характеристики и цены &rarr;
              </a>
            </div>
          </div>
        `).join('')}
      </div>

    </div>
  </section>

  <!-- INTERACTIVE METALWORKING CALCULATOR -->
  ${renderCalculator(relPrefix)}

  <!-- REALIZED CASES & CLIENTS BLOCK -->
  ${renderCases(data, relPrefix)}

  <!-- DESIGN BUREAU (КМ / КМД) -->
  ${renderDesignBureau(relPrefix)}

  <!-- 8 PRODUCTS DIRECTIONS PREVIEW -->
  <section class="py-16 sm:py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="text-center max-w-3xl mx-auto mb-12">
        <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
          <span>Серийная продукция и конструкции</span>
        </div>
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
          8 направлений готовой продукции завода
        </h2>
        <p class="mt-2 text-slate-600 text-sm sm:text-base">
          Производим как стандартизированные элементы по ГОСТ и сериям, так и уникальные металлоизделия по КД заказчика.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        ${products.map(p => `
          <div class="bg-white rounded-xl border border-slate-200 p-4 shadow-sm hover:border-amber-500 hover:shadow-lg transition-all flex flex-col justify-between group">
            <div>
              <div class="rounded-lg overflow-hidden bg-slate-100 aspect-[16/11] mb-3 relative cursor-pointer" data-lightbox-src="${relPrefix}/images/${p.image}" data-lightbox-title="${p.title}" data-lightbox-specs="${p.specs}">
                <img src="${relPrefix}/images/${p.image}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy">
              </div>
              <h3 class="text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                ${p.title}
              </h3>
              <p class="text-xs text-slate-500 mt-1">
                ${p.subtitle}
              </p>
              <div class="text-[11px] font-mono text-slate-600 mt-2 bg-slate-50 p-2 rounded border border-slate-100">
                ${p.specs}
              </div>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-100">
              <a href="${r('/products/')}" class="block text-center text-xs font-bold text-amber-600 hover:text-amber-700">
                Смотреть галерею и чертежи &rarr;
              </a>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="text-center mt-10">
        <a href="${r('/products/')}" class="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-colors shadow">
          Открыть полный каталог продукции и галерею 8 видов
        </a>
      </div>

    </div>
  </section>

  <!-- B2B CONDITIONS & COMMERCIAL TERMS -->
  ${renderB2BTerms(relPrefix)}

  <!-- CONTACTS & FAST ROUTE TEASER (Clean Slate Theme) -->
  <section class="py-16 sm:py-20 bg-slate-900 text-white border-b border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        <div class="lg:col-span-6 space-y-5">
          <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <span>Локация производства</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-white">
            Удобная логистика: 15 минут от Екатеринбурга
          </h2>
          <p class="text-slate-300 text-sm leading-relaxed">
            Производственный комплекс расположен в г. Берёзовский, ул. Орджоникидзе 19 Б (прямой выезд на ЕКАД и Тюменский тракт без городских пробок Екатеринбурга). Открытая и закрытая площадка погрузки под длинномеры и спецтранспорт.
          </p>

          <div class="space-y-2.5 text-xs text-slate-300 font-mono">
            <div>• 623700, Свердловская обл., г. Берёзовский, ул. Орджоникидзе, 19 Б, оф. 208</div>
            <div>• Отдел продаж: <a href="tel:${c.phoneMainDigits}" class="text-amber-400 font-bold hover:underline">${c.phoneMain}</a></div>
            <div>• Мессенджеры: <a href="https://wa.me/${c.phoneMobileDigits.replace('+', '')}" class="text-emerald-400 font-bold hover:underline">${c.phoneMobile}</a> (WhatsApp / Telegram)</div>
            <div>• Email: <a href="mailto:${c.email}" class="text-amber-400 hover:underline">${c.email}</a></div>
          </div>

          <div class="pt-2 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <a href="https://yandex.ru/maps/?rtext=~56.9114,60.8042" target="_blank" rel="noopener" class="px-5 py-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm text-center shadow transition-all">
              Проложить маршрут в Яндекс.Навигаторе
            </a>
            <a href="${r('/contacts/')}" class="px-5 py-3 rounded-lg border border-slate-700 hover:border-slate-400 text-slate-300 hover:text-white font-medium text-xs sm:text-sm text-center transition-colors">
              Реквизиты и карта &rarr;
            </a>
          </div>
        </div>

        <div class="lg:col-span-6">
          <div class="rounded-2xl overflow-hidden border border-slate-800 shadow-xl h-72 sm:h-80 bg-slate-800 relative">
            <iframe src="https://yandex.ru/map-widget/v1/?ll=60.8042%2C56.9114&z=15&pt=60.8042%2C56.9114%2Cpm2dgl" width="100%" height="100%" frameborder="0" allowfullscreen="true" title="Карта проезда к заводу Уралгиб" loading="lazy"></iframe>
          </div>
        </div>

      </div>
    </div>
  </section>
  `;
}

module.exports = renderHomePage;
