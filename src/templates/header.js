/**
 * Header Component (Clean Industrial Light Style)
 * Solid white background, zero margins on nav items, accurate smooth anchor links for cases
 */

function renderHeader(data, relPrefix, currentUrl) {
  const c = data.company;

  function r(path) {
    const [cleanPath, hash] = path.split('#');
    const hashStr = hash ? `#${hash}` : '';
    if (cleanPath === '/' || cleanPath === '') {
      if (hashStr && currentUrl === '/') return hashStr;
      return `${relPrefix}/index.html${hashStr}`;
    }
    if (cleanPath.endsWith('.xml') || cleanPath.endsWith('.html')) {
      return `${relPrefix}/${cleanPath.replace(/^\//, '')}${hashStr}`;
    }
    if (cleanPath.endsWith('/')) {
      return `${relPrefix}/${cleanPath.replace(/^\//, '')}index.html${hashStr}`;
    }
    return `${relPrefix}/${cleanPath.replace(/^\//, '')}/index.html${hashStr}`;
  }

  function isActive(path) {
    if (path === '/' && currentUrl === '/') return 'text-amber-600 font-bold';
    if (path !== '/' && currentUrl.startsWith(path)) return 'text-amber-600 font-bold';
    return 'text-slate-700 hover:text-amber-600 font-semibold';
  }

  return `
  <!-- Top Bar (Clean, informative, carries phone numbers, hours, location) -->
  <div class="bg-slate-100 text-slate-600 text-xs border-b border-slate-200 relative z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between">
      
      <!-- Left: Location & Hours -->
      <div class="flex items-center space-x-4 lg:space-x-6">
        <div class="flex items-center space-x-1.5 text-slate-700">
          <svg class="w-3.5 h-3.5 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          <span class="truncate font-medium">${c.locationShort}</span>
        </div>
        <div class="hidden md:flex items-center space-x-1.5 text-slate-500">
          <svg class="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <span>${c.schedule}</span>
        </div>
      </div>

      <!-- Right: Direct Phone Numbers & Messengers -->
      <div class="flex items-center space-x-4 lg:space-x-6">
        <a href="mailto:${c.email}" class="hidden xl:inline-flex items-center space-x-1 text-slate-600 hover:text-slate-900 transition-colors">
          <svg class="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          <span class="font-medium">${c.email}</span>
        </a>

        <a href="https://wa.me/${c.phoneMobileDigits.replace('+', '')}" target="_blank" rel="noopener" class="hidden sm:inline-flex items-center space-x-1 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>WhatsApp: ${c.phoneMobile}</span>
        </a>

        <!-- Main Phone in Topbar -->
        <a href="tel:${c.phoneMainDigits}" class="inline-flex items-center space-x-1.5 text-slate-900 hover:text-amber-600 font-bold transition-colors">
          <svg class="w-3.5 h-3.5 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
          <span class="text-xs sm:text-sm tracking-tight">${c.phoneMain}</span>
        </a>

        <span class="hidden lg:inline-block px-2 py-0.5 rounded bg-white text-slate-700 font-bold text-[11px] border border-slate-200">
          ${c.vatRate}
        </span>
      </div>

    </div>
  </div>

  <!-- Main Navigation Bar (SOLID OPAQUE WHITE, No Margin between items) -->
  <header class="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-18 py-3">
        
        <!-- Clean Typographic Logo (No icon box, no 6kW badge) -->
        <a href="${r('/')}" class="flex flex-col flex-shrink-0 group focus:outline-none" aria-label="ООО Уралгиб на Главную">
          <span class="text-2xl sm:text-[26px] font-black tracking-tight text-slate-900 group-hover:text-amber-600 transition-colors leading-none">
            УРАЛГИБ
          </span>
          <span class="text-[11px] font-semibold text-slate-500 tracking-normal mt-1">
            Обработка листового металлопроката
          </span>
        </a>

        <!-- Desktop Navigation Items (Zero Margins, Clean Paddings) -->
        <nav class="hidden lg:flex items-center text-sm">
          <!-- Dropdown: Услуги -->
          <div class="relative group">
            <a href="${r('/services/')}" class="px-3 py-2 rounded-md ${isActive('/services/')} inline-flex items-center space-x-1 transition-colors">
              <span>Услуги</span>
              <svg class="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-600 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </a>
            <!-- Dropdown Panel -->
            <div class="absolute left-0 mt-1 w-72 bg-white border border-slate-200 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50 p-2">
              <a href="${r('/lazernaya-rezka-metalla/')}" class="flex items-start p-2 rounded-lg hover:bg-slate-50 transition-colors">
                <div>
                  <div class="text-slate-900 text-xs font-bold hover:text-amber-600">Лазерная резка 6000 Вт</div>
                  <div class="text-slate-500 text-[11px]">Стол 3×1.5 м, сталь до 25 мм, чистый азот</div>
                </div>
              </a>
              <a href="${r('/gibka/')}" class="flex items-start p-2 rounded-lg hover:bg-slate-50 transition-colors">
                <div>
                  <div class="text-slate-900 text-xs font-bold hover:text-amber-600">Гибка на ЧПУ прессе</div>
                  <div class="text-slate-500 text-[11px]">220 тонн, длина рабочей зоны до 4000 мм</div>
                </div>
              </a>
              <a href="${r('/rezka/')}" class="flex items-start p-2 rounded-lg hover:bg-slate-50 transition-colors">
                <div>
                  <div class="text-slate-900 text-xs font-bold hover:text-amber-600">Плазменная резка с ЧПУ</div>
                  <div class="text-slate-500 text-[11px]">Толщина раскроя 1–20 мм, водяной стол</div>
                </div>
              </a>
              <a href="${r('/rubka/')}" class="flex items-start p-2 rounded-lg hover:bg-slate-50 transition-colors">
                <div>
                  <div class="text-slate-900 text-xs font-bold hover:text-amber-600">Рубка на гильотине</div>
                  <div class="text-slate-500 text-[11px]">Листы 0.5–6.0 мм, ножи 3000 мм</div>
                </div>
              </a>
              <a href="${r('/svarka/')}" class="flex items-start p-2 rounded-lg hover:bg-slate-50 transition-colors">
                <div>
                  <div class="text-slate-900 text-xs font-bold hover:text-amber-600">Сварочные работы TIG / MIG</div>
                  <div class="text-slate-500 text-[11px]">Нержавейка, алюминий, контроль НАКС</div>
                </div>
              </a>
              <a href="${r('/tokarka/')}" class="flex items-start p-2 rounded-lg hover:bg-slate-50 transition-colors">
                <div>
                  <div class="text-slate-900 text-xs font-bold hover:text-amber-600">Токарная ЧПУ обработка</div>
                  <div class="text-slate-500 text-[11px]">Фланцы, валы, втулки по квалитету h7</div>
                </div>
              </a>
              <div class="pt-1.5 border-t border-slate-100 mt-1">
                <a href="${r('/services/')}" class="block text-center text-xs text-amber-600 hover:text-amber-700 font-bold py-1">
                  Все услуги завода &rarr;
                </a>
              </div>
            </div>
          </div>

          <a href="${r('/products/')}" class="px-3 py-2 rounded-md ${isActive('/products/')} transition-colors">
            Продукция
          </a>
          <a href="${r('/prices/')}" class="px-3 py-2 rounded-md ${isActive('/prices/')} transition-colors">
            Прайс & Калькулятор
          </a>
          <a href="${r('/#cases')}" class="px-3 py-2 rounded-md ${currentUrl === '/' ? 'text-slate-700 hover:text-amber-600 font-semibold' : isActive('/#cases')} transition-colors">
            Объекты
          </a>
          <a href="${r('/steelsyst/')}" class="px-3 py-2 rounded-md ${isActive('/steelsyst/')} transition-colors">
            ГОСТы и стали
          </a>
          <a href="${r('/order/')}" class="px-3 py-2 rounded-md ${isActive('/order/')} transition-colors">
            Онлайн-заказ
          </a>
          <a href="${r('/contacts/')}" class="px-3 py-2 rounded-md ${isActive('/contacts/')} transition-colors">
            Контакты
          </a>
        </nav>

        <!-- Right Side: CTA Button Only (No phone, no wrap) -->
        <div class="flex items-center space-x-3">
          <button type="button" data-open-modal="quote-modal" class="inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg font-bold text-xs sm:text-sm text-slate-950 bg-amber-500 hover:bg-amber-600 shadow-sm transition-all duration-150 transform active:scale-95 whitespace-nowrap">
            <svg class="w-4 h-4 mr-1.5 text-slate-950 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
            </svg>
            Рассчитать заказ
          </button>

          <!-- Mobile Hamburger Toggle -->
          <button type="button" id="mobile-menu-btn" class="lg:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none" aria-label="Открыть мобильное меню">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>

      </div>
    </div>
  </header>

  <!-- Mobile Drawer Menu -->
  <div id="mobile-backdrop" class="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 hidden transition-opacity"></div>
  <div id="mobile-drawer" class="fixed top-0 right-0 w-80 max-w-[85vw] h-full bg-white z-50 transform translate-x-full transition-transform duration-300 ease-in-out overflow-y-auto p-5 flex flex-col justify-between shadow-2xl">
    <div>
      <div class="flex items-center justify-between pb-4 border-b border-slate-200">
        <div class="flex flex-col">
          <span class="text-xl font-black text-slate-900">УРАЛГИБ</span>
          <span class="text-[10px] text-slate-500 font-semibold">Обработка листового металлопроката</span>
        </div>
        <button type="button" id="mobile-drawer-close" class="p-1 rounded text-slate-400 hover:text-slate-700">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <div class="mt-4 space-y-4 text-sm">
        <div>
          <div class="text-[11px] font-bold text-amber-600 uppercase tracking-wider mb-2">Услуги завода</div>
          <div class="space-y-1.5 pl-2 border-l-2 border-slate-200">
            <a href="${r('/lazernaya-rezka-metalla/')}" class="block text-slate-700 hover:text-amber-600 py-1 font-medium">Лазерная резка 6000 Вт</a>
            <a href="${r('/gibka/')}" class="block text-slate-700 hover:text-amber-600 py-1 font-medium">Гибка ЧПУ 220 тонн</a>
            <a href="${r('/rezka/')}" class="block text-slate-700 hover:text-amber-600 py-1 font-medium">Плазменная резка до 20 мм</a>
            <a href="${r('/rubka/')}" class="block text-slate-700 hover:text-amber-600 py-1 font-medium">Рубка на гильотине 6 мм</a>
            <a href="${r('/svarka/')}" class="block text-slate-700 hover:text-amber-600 py-1 font-medium">Сварочные работы TIG/MIG</a>
            <a href="${r('/tokarka/')}" class="block text-slate-700 hover:text-amber-600 py-1 font-medium">Токарная обработка ЧПУ</a>
            <a href="${r('/services/')}" class="block text-amber-600 font-bold py-1">Все услуги &rarr;</a>
          </div>
        </div>

        <div>
          <div class="text-[11px] font-bold text-amber-600 uppercase tracking-wider mb-2">Разделы сайта</div>
          <div class="space-y-1.5 pl-2 border-l-2 border-slate-200">
            <a href="${r('/products/')}" class="block text-slate-700 hover:text-amber-600 py-1 font-medium">Каталог продукции</a>
            <a href="${r('/prices/')}" class="block text-slate-700 hover:text-amber-600 py-1 font-medium">Прайс-лист и калькулятор</a>
            <a href="${r('/#cases')}" class="block text-slate-700 hover:text-amber-600 py-1 font-medium">Выполненные объекты</a>
            <a href="${r('/order/')}" class="block text-slate-700 hover:text-amber-600 py-1 font-medium">Онлайн-заказ чертежей</a>
            <a href="${r('/vacancies/')}" class="block text-slate-700 hover:text-amber-600 py-1 font-medium">Вакансии завода</a>
            <a href="${r('/contacts/')}" class="block text-slate-700 hover:text-amber-600 py-1 font-medium">Контакты и реквизиты</a>
          </div>
        </div>

        <div>
          <div class="text-[11px] font-bold text-amber-600 uppercase tracking-wider mb-2">Инженерный справочник</div>
          <div class="space-y-1.5 pl-2 border-l-2 border-slate-200">
            <a href="${r('/steelsyst/')}" class="block text-slate-700 hover:text-amber-600 py-1 font-medium">Аналоги сталей AISI / ГОСТ</a>
            <a href="${r('/gost-19903-74/')}" class="block text-slate-700 hover:text-amber-600 py-1 font-medium">ГОСТ 19903-74 (Горячекатаный)</a>
            <a href="${r('/gost-19904-90/')}" class="block text-slate-700 hover:text-amber-600 py-1 font-medium">ГОСТ 19904-90 (Холоднокатаный)</a>
            <a href="${r('/gost-24045-94/')}" class="block text-slate-700 hover:text-amber-600 py-1 font-medium">ГОСТ 24045-94 (Профили ЛСТК)</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Drawer Footer -->
    <div class="pt-4 border-t border-slate-200 space-y-3">
      <div class="text-xs text-slate-600 space-y-1">
        <div class="font-bold text-slate-900">${c.phoneMain}</div>
        <div>${c.schedule}</div>
      </div>
      <button type="button" data-open-modal="quote-modal" class="w-full py-2.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs text-center shadow">
        Рассчитать стоимость
      </button>
    </div>
  </div>
  `;
}

module.exports = renderHeader;
