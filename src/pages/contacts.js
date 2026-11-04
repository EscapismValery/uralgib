/**
 * Dedicated Page: Контакты и реквизиты (/contacts/)
 * Light Industrial Theme with Light Requisites Card
 */

const renderBreadcrumbs = require('../templates/breadcrumbs');

function renderContactsPage(data, page, relPrefix) {
  const c = data.company;

  return `
  <!-- PAGE HEADER (Clean Light Theme) -->
  <div class="bg-gradient-to-b from-white via-slate-50 to-slate-100/70 text-slate-900 border-b border-slate-200 py-10 sm:py-14">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      ${renderBreadcrumbs(page.breadcrumbs, relPrefix)}
      <div class="mt-4 max-w-3xl">
        <div class="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
          <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          <span>Производственный комплекс в Свердловской области</span>
        </div>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
          ${page.h1}
        </h1>
        <p class="mt-3 text-slate-600 text-base leading-relaxed">
          Удобное расположение в 15 минутах от Екатеринбурга с прямым выездом на ЕКАД и Тюменский тракт. Собственная открытая и закрытая территория для погрузки длинномеров и тяжелого автотранспорта.
        </p>
      </div>
    </div>
  </div>

  <section class="py-14 sm:py-18 bg-slate-50 text-slate-900 border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Contacts 4-col Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div class="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center mb-3">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </div>
          <h3 class="text-sm font-bold text-slate-900">Адрес производства</h3>
          <p class="text-xs text-slate-600 leading-relaxed">${c.address}</p>
          <div class="text-[11px] text-amber-600 font-semibold pt-1">15 минут от Екатеринбурга / ЕКАД</div>
        </div>

        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div class="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-3">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
          </div>
          <h3 class="text-sm font-bold text-slate-900">Отдел продаж</h3>
          <p class="text-xs text-slate-600">
            <a href="tel:${c.phoneMainDigits}" class="text-slate-900 font-bold hover:text-amber-600 block text-sm">${c.phoneMain}</a>
            <a href="tel:${c.phoneSecondaryDigits}" class="text-slate-600 hover:text-amber-600 block text-xs mt-0.5">${c.phoneSecondary}</a>
          </p>
          <div class="text-[11px] text-slate-400 pt-1">${c.schedule}</div>
        </div>

        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div class="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center mb-3">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
          </div>
          <h3 class="text-sm font-bold text-slate-900">Мессенджеры</h3>
          <p class="text-xs text-slate-600">
            <a href="https://wa.me/${c.phoneMobileDigits.replace('+', '')}" class="text-emerald-600 font-bold block text-sm hover:underline">${c.phoneMobile}</a>
          </p>
          <div class="text-[11px] text-slate-500 pt-1">WhatsApp & Telegram (прямой чат с технологом)</div>
        </div>

        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div class="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center mb-3">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          <h3 class="text-sm font-bold text-slate-900">Электронная почта</h3>
          <p class="text-xs text-slate-600">
            <a href="mailto:${c.email}" class="text-slate-900 font-bold hover:text-amber-600 block text-sm">${c.email}</a>
          </p>
          <div class="text-[11px] text-slate-500 pt-1">Для договоров, ТЗ и чертежей</div>
        </div>

      </div>

      <!-- Map & Requisites Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        <!-- Yandex Map Embed (7 cols) -->
        <div class="lg:col-span-7 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm p-3">
          <div class="h-96 w-full rounded-xl overflow-hidden bg-slate-100">
            <iframe src="https://yandex.ru/map-widget/v1/?ll=60.8042%2C56.9114&z=15&pt=60.8042%2C56.9114%2Cpm2dgl" width="100%" height="100%" frameborder="0" allowfullscreen="true" title="Интерактивная карта проезда к заводу Уралгиб" loading="lazy"></iframe>
          </div>
          <div class="p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span class="text-slate-600 font-medium">Координаты: 56.9114° N, 60.8042° E</span>
            <a href="https://yandex.ru/maps/?rtext=~56.9114,60.8042" target="_blank" rel="noopener" class="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold shadow transition-all">
              Построить маршрут в Яндекс.Картах
            </a>
          </div>
        </div>

        <!-- Official Legal Requisites (5 cols) - LIGHT THEME -->
        <div class="lg:col-span-5 bg-white text-slate-900 rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm space-y-4">
          <div class="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold uppercase tracking-wider">
            <span>Карточка предприятия</span>
          </div>
          <h2 class="text-lg font-bold text-slate-900">Реквизиты компании для договоров</h2>
          
          <div class="space-y-2.5 text-xs font-mono text-slate-700 pt-1">
            <div class="flex justify-between border-b border-slate-100 pb-2">
              <span class="text-slate-500 font-sans">Организация:</span>
              <span class="font-bold text-slate-900 text-right font-sans">${c.fullName}</span>
            </div>
            <div class="flex justify-between border-b border-slate-100 pb-2">
              <span class="text-slate-500 font-sans">ОГРН:</span>
              <span class="text-slate-900 font-bold">${c.ogrn}</span>
            </div>
            <div class="flex justify-between border-b border-slate-100 pb-2">
              <span class="text-slate-500 font-sans">ИНН:</span>
              <span class="text-slate-900 font-bold">${c.inn}</span>
            </div>
            <div class="flex justify-between border-b border-slate-100 pb-2">
              <span class="text-slate-500 font-sans">КПП:</span>
              <span class="text-slate-900 font-bold">${c.kpp}</span>
            </div>
            <div class="flex justify-between border-b border-slate-100 pb-2">
              <span class="text-slate-500 font-sans">Налогообложение:</span>
              <span class="text-amber-700 font-bold font-sans">${c.vatRate} (ОСНО)</span>
            </div>
            <div class="flex justify-between border-b border-slate-100 pb-2">
              <span class="text-slate-500 font-sans">ЭДО:</span>
              <span class="text-emerald-700 font-bold font-sans">Диадок (СКБ Контур) / СБИС</span>
            </div>
            <div class="flex justify-between border-b border-slate-100 pb-2">
              <span class="text-slate-500 font-sans">Юр. адрес:</span>
              <span class="text-slate-900 text-right font-sans text-[11px]">${c.address}</span>
            </div>
          </div>

          <div class="pt-3">
            <button type="button" data-open-modal="quote-modal" data-modal-comment="Запрос карточки предприятия с банковскими реквизитами" class="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow-md transition-all">
              Запросить типовой договор поставки с НДС
            </button>
          </div>
        </div>

      </div>

    </div>
  </section>
  `;
}

module.exports = renderContactsPage;
