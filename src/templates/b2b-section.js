/**
 * B2B Terms & Commercial Conditions Component (VAT, Leasing, Delivery, Contracts)
 * Light Industrial Theme
 */

function renderB2BTerms(relPrefix) {
  return `
  <section class="py-16 sm:py-20 bg-white text-slate-900 border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="text-center max-w-3xl mx-auto mb-12">
        <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3">
          <svg class="w-3.5 h-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
          <span>Прозрачные условия для юрлиц</span>
        </div>
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
          Выгодные условия сотрудничества для B2B-клиентов
        </h2>
        <p class="mt-2 text-slate-600 text-sm sm:text-base">
          Работаем по безналичному расчету с НДС 20%, фиксируем сроки и гарантии в договоре поставки.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <!-- Card 1: VAT & Tax -->
        <div class="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-500 transition-colors shadow-sm">
          <div class="w-12 h-12 rounded-lg bg-amber-500/10 text-amber-700 flex items-center justify-center font-black text-lg mb-4">
            20%
          </div>
          <h3 class="text-base font-bold text-slate-900 mb-2">
            Работа с НДС 20%
          </h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            Полный пакет бухгалтерских документов (УПД, счета-фактуры через Диадок / СБИС ЭДО в день отгрузки). Без задержек и камеральных рисков.
          </p>
        </div>

        <!-- Card 2: Payment stages -->
        <div class="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-500 transition-colors shadow-sm">
          <div class="w-12 h-12 rounded-lg bg-blue-500/10 text-blue-700 flex items-center justify-center mb-4">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h3 class="text-base font-bold text-slate-900 mb-2">
            Гибкая оплата и аванс 50%
          </h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            Запуск партии в производство при авансе от 50%. Для постоянных клиентов и крупных серийных контрактов доступна отсрочка платежа до 30 дней.
          </p>
        </div>

        <!-- Card 3: Leasing Support -->
        <div class="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-500 transition-colors shadow-sm">
          <div class="w-12 h-12 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center mb-4">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
          </div>
          <h3 class="text-base font-bold text-slate-900 mb-2">
            Содействие в лизинге
          </h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            Поставка крупных металлоконструкций и каркасов ЛСТК через ведущие лизинговые компании (СберЛизинг, ВТБ Лизинг, Европлан, Балтийский Лизинг).
          </p>
        </div>

        <!-- Card 4: Logistics & Delivery -->
        <div class="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-500 transition-colors shadow-sm">
          <div class="w-12 h-12 rounded-lg bg-emerald-500/10 text-emerald-700 flex items-center justify-center mb-4">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
            </svg>
          </div>
          <h3 class="text-base font-bold text-slate-900 mb-2">
            Собственный транспорт и ТК
          </h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            Оперативная доставка длинномерами и манипуляторами по Екатеринбургу и УрФО. Отправка во все регионы РФ через «Деловые Линии», ПЭК, «КИТ».
          </p>
        </div>

      </div>

      <!-- Quick B2B Action Banner -->
      <div class="mt-10 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
        <div>
          <h4 class="text-lg sm:text-xl font-bold">Нужен расчет по вашей спецификации или договору поставки?</h4>
          <p class="text-xs sm:text-sm text-slate-400 mt-1">Пришлите ведомость элементов или спецификацию — ведущий инженер завода рассчитает коммерческое предложение с точными сроками и скидкой от тоннажа.</p>
        </div>
        <button type="button" data-open-modal="quote-modal" data-modal-comment="Запрос B2B коммерческого предложения для юридического лица" class="flex-shrink-0 px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs sm:text-sm shadow-md transition-all whitespace-nowrap">
          Получить КП с НДС 20%
        </button>
      </div>

    </div>
  </section>
  `;
}

module.exports = renderB2BTerms;
