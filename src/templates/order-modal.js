/**
 * RFP Quote / Blueprint Upload Modal Component
 * Clean Light Industrial Theme
 */

function renderOrderModal(data, relPrefix) {
  const c = data.company;

  function r(path) {
    if (path === '/') return `${relPrefix}/index.html`;
    if (path.endsWith('.html')) return `${relPrefix}/${path.replace(/^\//, '')}`;
    if (path.endsWith('/')) return `${relPrefix}/${path.replace(/^\//, '')}index.html`;
    return `${relPrefix}/${path.replace(/^\//, '')}/index.html`;
  }

  return `
  <div id="quote-modal" class="modal-container fixed inset-0 z-50 hidden items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto overflow-x-hidden">
    <div class="relative w-full max-w-xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-2xl p-4 sm:p-7 text-slate-900 my-4 sm:my-8 max-h-[92vh] overflow-y-auto overflow-x-hidden box-border">
      
      <!-- Close button -->
      <button type="button" data-close-modal class="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 text-slate-400 hover:text-slate-700 p-2 rounded-lg hover:bg-slate-100 transition-colors z-10" aria-label="Закрыть">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>

      <!-- Modal Header -->
      <div class="mb-5 pr-8">
        <div class="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-[11px] font-bold uppercase tracking-wider mb-2">
          <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          <span>Прямой расчет на заводе</span>
        </div>
        <h3 class="text-lg sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
          Заявка на расчет металлообработки
        </h3>
        <p class="text-xs text-slate-600 mt-1 leading-relaxed">
          Прикрепите чертеж или эскиз детали. Инженер завода «Уралгиб» проверит геометрию и пришлет официальную смету с НДС за 15–30 минут.
        </p>
      </div>

      <!-- Form -->
      <form data-ajax-form class="space-y-3.5 text-xs sm:text-sm">
        
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">
              Ваше имя / Контактное лицо <span class="text-amber-600">*</span>
            </label>
            <input type="text" name="name" required placeholder="Константин, инженер" class="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-[16px] sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors box-border">
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">
              Компания / Организация
            </label>
            <input type="text" name="company" placeholder="ООО «Стройтехмонтаж»" class="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-[16px] sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors box-border">
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">
              Телефон для связи <span class="text-amber-600">*</span>
            </label>
            <input type="tel" name="phone" required placeholder="+7 (___) ___-__-__" class="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-[16px] sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors box-border">
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">
              Email для получения КП <span class="text-amber-600">*</span>
            </label>
            <input type="email" name="email" required placeholder="snabshenie@stroy.ru" class="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-[16px] sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors box-border">
          </div>
        </div>

        <!-- Drag and Drop Blueprint Dropzone -->
        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1">
            Чертежи, эскизы или спецификация детали (до 50 МБ)
          </label>
          <label id="blueprint-dropzone" for="blueprint-file-input" class="block border-2 border-dashed border-slate-300 hover:border-amber-500 rounded-xl p-4 sm:p-5 text-center cursor-pointer transition-colors bg-slate-50/80 hover:bg-amber-50/30 group">
            <input type="file" id="blueprint-file-input" name="blueprints" multiple accept=".dxf,.dwg,.pdf,.step,.stp,.iges,.igs,.zip,.rar,.png,.jpg,.jpeg" class="sr-only">
            <svg class="w-7 h-7 sm:w-8 sm:h-8 mx-auto text-amber-500 mb-1.5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
            </svg>
            <div class="text-xs text-slate-700 font-medium">
              <span class="text-amber-600 font-bold underline">Кликните для выбора файлов</span> или перетащите их сюда
            </div>
            <div class="text-[11px] text-slate-500 mt-1">
              Форматы: DXF, DWG, PDF, STEP, STP, ZIP (до 50 МБ)
            </div>
          </label>
          <!-- Selected files container -->
          <div id="blueprint-file-list" class="mt-2 space-y-1.5"></div>
        </div>

        <!-- Technical Comment / Specification -->
        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1">
            Техническое задание, требуемый металл и тираж
          </label>
          <textarea name="comment" rows="3" placeholder="Марка стали (например, 09Г2С 4мм), количество деталей, требования по гибке/покраске RAL..." class="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-[16px] sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors box-border"></textarea>
        </div>

        <!-- 152-ФЗ Checkbox -->
        <div class="flex items-start space-x-2.5 pt-1">
          <input type="checkbox" required id="modal-policy-agree" class="w-4 h-4 mt-0.5 rounded text-amber-500 focus:ring-amber-500 border-slate-300 bg-white flex-shrink-0" checked>
          <label for="modal-policy-agree" class="text-[11px] text-slate-500 leading-tight">
            Я соглашаюсь с <a href="${r('/agreement/')}" target="_blank" class="text-amber-600 hover:underline">Политикой конфиденциальности</a> и даю согласие на обработку данных (152-ФЗ РФ).
          </label>
        </div>

        <!-- Submit Button -->
        <div class="pt-1">
          <button type="submit" class="w-full py-3.5 px-4 rounded-xl font-black text-sm text-slate-950 bg-amber-500 hover:bg-amber-600 shadow-md transition-all duration-150 transform active:scale-[0.98] flex items-center justify-center space-x-2">
            <span>Отправить заявку на завод</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </button>
        </div>

        <div class="flex items-center justify-center space-x-4 text-[11px] text-slate-500 pt-1">
          <span class="flex items-center">
            <svg class="w-3.5 h-3.5 mr-1 text-emerald-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            Гарантия NDA
          </span>
          <span class="flex items-center">
            <svg class="w-3.5 h-3.5 mr-1 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
            </svg>
            Расчет за 15–30 мин
          </span>
        </div>

      </form>

    </div>
  </div>
  `;
}

module.exports = renderOrderModal;
