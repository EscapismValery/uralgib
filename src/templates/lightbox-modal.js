/**
 * Lightbox Modal Component
 */

function renderLightboxModal() {
  return `
  <div id="lightbox-modal" class="modal-container fixed inset-0 z-50 hidden items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md">
    <button type="button" id="lightbox-close" class="absolute top-5 right-5 text-white/70 hover:text-white p-2 rounded-lg bg-industrial-900/80 hover:bg-industrial-800 transition-colors z-10">
      <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>

    <!-- Prev button -->
    <button type="button" id="lightbox-prev" class="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-industrial-900/80 hover:bg-industrial-800 transition-colors z-10">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
      </svg>
    </button>

    <!-- Next button -->
    <button type="button" id="lightbox-next" class="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-industrial-900/80 hover:bg-industrial-800 transition-colors z-10">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
      </svg>
    </button>

    <!-- Content Card -->
    <div class="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center">
      <div class="relative rounded-xl overflow-hidden shadow-2xl border border-industrial-800 bg-industrial-950">
        <img id="lightbox-img" src="" alt="Деталь или объект" class="max-w-full max-h-[70vh] object-contain">
      </div>
      <div class="mt-4 text-center">
        <h4 id="lightbox-title" class="text-white text-base sm:text-lg font-bold"></h4>
        <p id="lightbox-specs" class="text-xs sm:text-sm text-laser-400 mt-1"></p>
      </div>
    </div>
  </div>
  `;
}

module.exports = renderLightboxModal;

