/**
 * Floating Quick Action Bar & Mobile App-Style Bottom Navigation
 */

function renderFloatingActions(data) {
  const c = data.company;

  return `
  <!-- MOBILE BOTTOM APP BAR (Fixed at screen bottom on mobile < lg) -->
  <div class="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-2xl safe-area-bottom">
    <div class="max-w-md mx-auto flex items-center space-x-2">
      
      <!-- Direct Call Button -->
      <a href="tel:${c.phoneMainDigits}" class="w-12 h-12 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 flex flex-col items-center justify-center flex-shrink-0 transition-colors active:scale-95" aria-label="Позвонить в отдел продаж">
        <svg class="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
        <span class="text-[9px] font-bold text-slate-600 mt-0.5 leading-none">Звонок</span>
      </a>

      <!-- WhatsApp Direct Chat Button -->
      <a href="https://wa.me/${c.phoneMobileDigits.replace('+', '')}?text=${encodeURIComponent('Здравствуйте! Интересует расчет металлообработки на заводе Уралгиб.')}" target="_blank" rel="noopener" class="w-12 h-12 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white flex flex-col items-center justify-center flex-shrink-0 shadow-sm transition-colors active:scale-95" aria-label="Написать в WhatsApp">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2Z"/>
        </svg>
        <span class="text-[9px] font-bold text-white mt-0.5 leading-none">WhatsApp</span>
      </a>

      <!-- Big Primary CTA: "Рассчитать заказ онлайн" -->
      <button type="button" data-open-modal="quote-modal" class="flex-1 h-12 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center justify-center space-x-2 px-3 whitespace-nowrap">
        <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
        </svg>
        <span>Рассчитать заказ онлайн</span>
      </button>

    </div>
  </div>

  <!-- DESKTOP FLOATING ACTIONS (Screens >= lg) -->
  <div class="hidden lg:flex fixed bottom-6 right-6 z-40 flex-col items-end space-y-3">
    
    <!-- Back to top button -->
    <button type="button" id="back-to-top-btn" class="w-11 h-11 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 shadow-lg flex items-center justify-center transition-all duration-300 opacity-0 pointer-events-none transform active:scale-95" aria-label="Наверх страницы">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
      </svg>
    </button>

    <!-- WhatsApp button -->
    <a href="https://wa.me/${c.phoneMobileDigits.replace('+', '')}?text=${encodeURIComponent('Здравствуйте! Интересует расчет металлообработки на заводе Уралгиб.')}" target="_blank" rel="noopener" class="group relative w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg flex items-center justify-center transition-transform hover:scale-110 active:scale-95" aria-label="Написать в WhatsApp">
      <span class="absolute -top-1 -right-1 flex h-3 w-3">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
      </span>
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2Z"/>
      </svg>
      <span class="absolute right-14 bg-slate-900 text-white text-xs font-semibold px-2.5 py-1.5 rounded-md whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-slate-800">
        Чат в WhatsApp (онлайн)
      </span>
    </a>

    <!-- Call button -->
    <a href="tel:${c.phoneMainDigits}" class="group relative w-12 h-12 rounded-full bg-slate-900 border border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-slate-950 shadow-lg flex items-center justify-center transition-transform hover:scale-110 active:scale-95" aria-label="Позвонить в отдел продаж">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
      </svg>
      <span class="absolute right-14 bg-slate-900 text-white text-xs font-semibold px-2.5 py-1.5 rounded-md whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-slate-800">
        Позвонить: ${c.phoneMain}
      </span>
    </a>

  </div>

  <!-- Mobile Back to Top Button (Floats right above the mobile bottom bar) -->
  <button type="button" id="mobile-back-to-top" class="lg:hidden fixed bottom-18 right-3 z-30 w-10 h-10 rounded-full bg-slate-900/90 text-white shadow-lg flex items-center justify-center transition-all duration-300 opacity-0 pointer-events-none transform active:scale-95" aria-label="Наверх страницы">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
    </svg>
  </button>
  `;
}

module.exports = renderFloatingActions;

