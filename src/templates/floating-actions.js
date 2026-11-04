/**
 * Floating Quick Action Bar & Back to Top
 */

function renderFloatingActions(data) {
  const c = data.company;

  return `
  <!-- Floating Contact Widget (Desktop & Mobile) -->
  <div class="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
    
    <!-- Back to top button -->
    <button type="button" id="back-to-top-btn" class="w-11 h-11 rounded-full bg-industrial-900 border border-industrial-700 text-slate-300 hover:text-white hover:bg-industrial-800 hover:border-laser-500 shadow-industrial-lg flex items-center justify-center transition-all duration-300 opacity-0 pointer-events-none transform active:scale-95" aria-label="Наверх страницы">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
      </svg>
    </button>

    <!-- Quick WhatsApp button -->
    <a href="https://wa.me/${c.phoneMobileDigits.replace('+', '')}?text=${encodeURIComponent('Здравствуйте! Интересует расчет металлообработки на заводе Уралгиб.')}" target="_blank" rel="noopener" class="group relative w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-industrial-lg flex items-center justify-center transition-transform hover:scale-110 active:scale-95" aria-label="Написать в WhatsApp">
      <span class="absolute -top-1 -right-1 flex h-3 w-3">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
      </span>
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2Z"/>
      </svg>
      <!-- Tooltip -->
      <span class="absolute right-14 bg-industrial-950 text-white text-xs font-semibold px-2.5 py-1.5 rounded-md whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-industrial-800">
        Чат в WhatsApp (онлайн)
      </span>
    </a>

    <!-- Floating Call button -->
    <a href="tel:${c.phoneMainDigits}" class="group relative w-12 h-12 rounded-full bg-industrial-900 border border-laser-500 text-laser-400 hover:bg-laser-500 hover:text-slate-950 shadow-industrial-lg flex items-center justify-center transition-transform hover:scale-110 active:scale-95" aria-label="Позвонить в отдел продаж">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
      </svg>
      <!-- Tooltip -->
      <span class="absolute right-14 bg-industrial-950 text-white text-xs font-semibold px-2.5 py-1.5 rounded-md whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-industrial-800">
        Позвонить: ${c.phoneMain}
      </span>
    </a>

  </div>
  `;
}

module.exports = renderFloatingActions;

