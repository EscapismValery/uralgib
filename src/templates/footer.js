/**
 * Footer Component
 * Clean Industrial Slate & Amber
 */

function renderFooter(data, relPrefix) {
  const c = data.company;

  function r(path) {
    if (path === '/') return `${relPrefix}/index.html`;
    if (path.endsWith('.html')) return `${relPrefix}/${path.replace(/^\//, '')}`;
    if (path.endsWith('/')) return `${relPrefix}/${path.replace(/^\//, '')}index.html`;
    return `${relPrefix}/${path.replace(/^\//, '')}/index.html`;
  }

  return `
  <footer class="bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <!-- Col 1: About Factory -->
        <div class="space-y-4">
          <div class="flex flex-col">
            <span class="text-2xl font-black text-white tracking-tight leading-none">УРАЛГИБ</span>
            <span class="text-[11px] font-semibold text-slate-400 mt-1">Обработка листового металлопроката</span>
          </div>
          <p class="text-xs text-slate-400 leading-relaxed">
            Производственный комплекс высокоточной обработки листового металла полного цикла и изготовления металлоконструкций в Свердловской области.
          </p>
          <div class="p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs space-y-1">
            <div class="text-slate-300 font-semibold">ООО «Уралгиб»</div>
            <div>ОГРН: <span class="text-slate-300 font-mono">${c.ogrn}</span></div>
            <div>ИНН: <span class="text-slate-300 font-mono">${c.inn}</span> | КПП: <span class="text-slate-300 font-mono">${c.kpp}</span></div>
            <div class="text-amber-400 font-medium pt-1">Работаем с НДС 20% по договору</div>
          </div>
        </div>

        <!-- Col 2: Services Links -->
        <div>
          <h3 class="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2.5">
            Услуги завода
          </h3>
          <ul class="space-y-2 text-xs">
            <li><a href="${r('/lazernaya-rezka-metalla/')}" class="hover:text-amber-400 transition-colors">Лазерная резка 6000 Вт (до 25 мм)</a></li>
            <li><a href="${r('/gibka/')}" class="hover:text-amber-400 transition-colors">Гибка на ЧПУ прессе 220т (до 4000 мм)</a></li>
            <li><a href="${r('/rezka/')}" class="hover:text-amber-400 transition-colors">Плазменная резка с ЧПУ (до 20 мм)</a></li>
            <li><a href="${r('/rubka/')}" class="hover:text-amber-400 transition-colors">Рубка на гильотине (до 6 мм)</a></li>
            <li><a href="${r('/svarka/')}" class="hover:text-amber-400 transition-colors">Сварочные работы TIG / MIG / контактная</a></li>
            <li><a href="${r('/tokarka/')}" class="hover:text-amber-400 transition-colors">Токарная ЧПУ обработка тел вращения</a></li>
            <li><a href="${r('/services/')}" class="text-amber-400 font-semibold hover:text-amber-300 transition-colors pt-1 inline-block">Все услуги металлообработки &rarr;</a></li>
          </ul>
        </div>

        <!-- Col 3: Products & ГОСТ -->
        <div>
          <h3 class="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-slate-600 pl-2.5">
            Продукция & ГОСТ
          </h3>
          <ul class="space-y-2 text-xs">
            <li><a href="${r('/products/')}" class="hover:text-slate-300 transition-colors">ЛСТК каркасы и термопрофили</a></li>
            <li><a href="${r('/products/')}" class="hover:text-slate-300 transition-colors">Телеком и электрошкафы 42U / IP54</a></li>
            <li><a href="${r('/products/')}" class="hover:text-slate-300 transition-colors">Кабельные лотки и перфосистемы</a></li>
            <li><a href="${r('/products/')}" class="hover:text-slate-300 transition-colors">Ворота БКТП и закладные детали</a></li>
            <li><a href="${r('/steelsyst/')}" class="hover:text-slate-300 transition-colors">Аналоги сталей AISI, ASTM, ГОСТ</a></li>
            <li><a href="${r('/gost-19903-74/')}" class="hover:text-slate-300 transition-colors">ГОСТ 19903-74 Лист г/к</a></li>
            <li><a href="${r('/gost-19904-90/')}" class="hover:text-slate-300 transition-colors">ГОСТ 19904-90 Лист х/к</a></li>
            <li><a href="${r('/gost-24045-94/')}" class="hover:text-slate-300 transition-colors">ГОСТ 24045-94 Профили гнутые</a></li>
          </ul>
        </div>

        <!-- Col 4: Contacts & B2B -->
        <div class="space-y-3">
          <h3 class="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2.5">
            Контакты производства
          </h3>
          <div class="text-xs space-y-2">
            <div class="text-slate-300">
              <span class="block text-slate-500 text-[11px]">Адрес комплекса:</span>
              ${c.address}
            </div>
            <div>
              <span class="block text-slate-500 text-[11px]">Отдел продаж:</span>
              <a href="tel:${c.phoneMainDigits}" class="text-white font-bold text-sm hover:text-amber-400 transition-colors">${c.phoneMain}</a>,
              <a href="tel:${c.phoneSecondaryDigits}" class="text-slate-300 hover:text-amber-400 transition-colors">${c.phoneSecondary}</a>
            </div>
            <div>
              <span class="block text-slate-500 text-[11px]">Менеджер проектов / Мессенджеры:</span>
              <a href="tel:${c.phoneMobileDigits}" class="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors">${c.phoneMobile}</a>
            </div>
            <div>
              <span class="block text-slate-500 text-[11px]">Email для чертежей:</span>
              <a href="mailto:${c.email}" class="text-amber-400 hover:underline">${c.email}</a>
            </div>
            <div>
              <span class="block text-slate-500 text-[11px]">Режим работы:</span>
              <span class="text-slate-300">${c.schedule}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-12 pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 space-y-3 md:space-y-0">
        <div>
          © 2012–2026 ООО «Уралгиб». Все права защищены.
        </div>
        <div class="flex items-center space-x-6">
          <a href="${r('/agreement/')}" class="hover:text-slate-300 transition-colors">Политика конфиденциальности (152-ФЗ)</a>
          <a href="${r('/vacancies/')}" class="hover:text-slate-300 transition-colors">Вакансии завода</a>
          <a href="${r('/sitemap.html')}" class="hover:text-slate-300 transition-colors">Карта сайта</a>
        </div>
      </div>
    </div>
  </footer>
  `;
}

module.exports = renderFooter;
