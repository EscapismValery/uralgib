/**
 * Realized Projects & Cases Component (Matches & Exceeds lstk-ural.ru aesthetic)
 * Light Industrial Theme, Authentic Photography & Client Logos
 */

function renderCases(data, relPrefix) {
  const cases = data.cases;
  const clients = data.clients;

  return `
  <section id="cases" class="scroll-mt-24 py-16 sm:py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Title & Subtitle -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div class="max-w-2xl">
          <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
            <svg class="w-3.5 h-3.5 text-slate-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"/>
            </svg>
            <span>Портфолио выполненных контрактов</span>
          </div>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            Реализованные объекты и серии металлоизделий
          </h2>
          <p class="mt-2 text-slate-600 text-sm sm:text-base">
            Реальные параметры, тоннаж, сроки и локации выполненных контрактов для ключевых предприятий УрФО.
          </p>
        </div>

        <div class="mt-4 md:mt-0 flex items-center space-x-2 text-xs font-semibold text-slate-500">
          <span>С 2012 года сдано более 500 объектов</span>
        </div>
      </div>

      <!-- Cases Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        ${cases.map(c => `
          <div class="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col justify-between group">
            <div>
              <!-- Visual Image with Lightbox Trigger -->
              <div class="relative bg-slate-900 aspect-[16/10] overflow-hidden cursor-pointer" data-lightbox-src="${relPrefix}/images/${c.image}" data-lightbox-title="${c.title}" data-lightbox-specs="${c.city} | ${c.tonnage}">
                <img src="${relPrefix}/images/${c.image}" alt="${c.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div class="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-amber-500 text-slate-950 font-extrabold text-[11px] shadow">
                  ${c.term}
                </div>
                <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                  <span class="inline-flex items-center text-slate-200">
                    <svg class="w-3.5 h-3.5 mr-1 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                    </svg>
                    ${c.city}
                  </span>
                  <span class="text-slate-300 font-medium">${c.tonnage}</span>
                </div>
              </div>

              <!-- Body Info -->
              <div class="p-5">
                <div class="text-[11px] text-slate-500 font-medium mb-1">
                  Заказчик: <span class="text-slate-800 font-semibold">${c.customer}</span>
                </div>
                <h3 class="text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors leading-snug">
                  ${c.title}
                </h3>
                <p class="mt-2.5 text-xs text-slate-600 leading-relaxed">
                  ${c.desc}
                </p>
              </div>
            </div>

            <!-- Footer Action -->
            <div class="p-5 pt-0 border-t border-slate-100 mt-2">
              <button type="button" data-open-modal="quote-modal" data-modal-comment="Интересует расчет аналогичного объекта: ${c.title} (${c.tonnage})" class="w-full mt-3 py-2 px-3 rounded-lg bg-slate-100 hover:bg-amber-500 hover:text-slate-950 text-slate-700 font-bold text-xs transition-colors duration-150 flex items-center justify-center space-x-1.5">
                <span>Рассчитать аналогичный объект</span>
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Large Clients & Partners Trust Shelf -->
      <div class="mt-16 pt-12 border-t border-slate-200">
        <div class="text-center mb-8">
          <span class="text-xs font-bold uppercase tracking-wider text-slate-500">
            Нам доверяют лидеры телекома, энергетики и промышленности Урала
          </span>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          ${clients.map(client => `
            <div class="bg-white rounded-xl border border-slate-200 p-4 flex flex-col items-center justify-center text-center shadow-sm hover:border-amber-500 transition-colors">
              <img src="${relPrefix}/images/${client.logo}" alt="${client.name}" class="h-10 w-auto object-contain mb-2" loading="lazy">
              <div class="text-xs font-bold text-slate-800">${client.name}</div>
              <div class="text-[10px] text-slate-500">${client.sub}</div>
            </div>
          `).join('')}
        </div>
      </div>

    </div>
  </section>
  `;
}

module.exports = renderCases;
