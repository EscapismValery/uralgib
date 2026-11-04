/**
 * Dedicated Page: Онлайн-заказ и загрузка чертежей (/order/)
 * Clean Light Industrial Theme
 */

const renderBreadcrumbs = require('../templates/breadcrumbs');

function renderOrderPage(data, page, relPrefix) {
  function r(path) {
    if (path === '/') return `${relPrefix}/index.html`;
    if (path.endsWith('.html')) return `${relPrefix}/${path.replace(/^\//, '')}`;
    if (path.endsWith('/')) return `${relPrefix}/${path.replace(/^\//, '')}index.html`;
    return `${relPrefix}/${path.replace(/^\//, '')}/index.html`;
  }

  return `
  <!-- PAGE HEADER (Clean Light Theme) -->
  <div class="bg-gradient-to-b from-white via-slate-50 to-slate-100/70 text-slate-900 border-b border-slate-200 py-10 sm:py-14">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      ${renderBreadcrumbs(page.breadcrumbs, relPrefix)}
      <div class="mt-4 max-w-3xl">
        <div class="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
          <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          <span>Экспресс-оценка инженером за 15–30 минут</span>
        </div>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
          ${page.h1}
        </h1>
        <p class="mt-3 text-slate-600 text-base leading-relaxed">
          Отправьте файлы чертежей в формате DXF, DWG, STEP или PDF. Инженер-технолог завода выполнит аудит геометрии, рассчитает оптимальную раскладку на листе и пришлет счет-договор с НДС 20%.
        </p>
      </div>
    </div>
  </div>

  <section class="py-14 sm:py-18 bg-slate-50 text-slate-900 border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        <!-- Left Column: Drawing Requirements & Checklist (5 cols) -->
        <div class="lg:col-span-5 space-y-6">
          <div class="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h2 class="text-base font-bold text-slate-900 flex items-center">
              <svg class="w-5 h-5 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              Требования к файлам чертежей
            </h2>
            
            <div class="space-y-3 text-xs text-slate-600 leading-relaxed">
              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div class="font-bold text-slate-900 mb-1">Формат DXF / DWG для лазера:</div>
                <ul class="list-disc list-inside space-y-1 text-slate-600">
                  <li>Масштаб строго 1:1 в пространстве Модели (Model).</li>
                  <li>Все контуры замкнуты (замкнутые полилинии).</li>
                  <li>Отсутствие наложенных линий (double lines) и точек.</li>
                  <li>Размерные линии и рамка вынесены на отдельный слой или удалены.</li>
                </ul>
              </div>

              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div class="font-bold text-slate-900 mb-1">Формат STEP / STP для гибки:</div>
                <p>Твердотельные 3D-модели деталей из листового металла для точного импорта в CAM-систему пресса DELEM с расчетом упоров и радиусов.</p>
              </div>

              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div class="font-bold text-slate-900 mb-1">Формат PDF:</div>
                <p>Сборочные чертежи с указанием габаритных размеров, допусков, шероховатости и марки материала для сверки перед запуском.</p>
              </div>
            </div>

            <div class="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
              <span class="font-bold block mb-1">Нет готового чертежа в DXF?</span>
              Пришлите фото детали, эскиз от руки или образец — конструкторское бюро «Уралгиб» разработает цифровую модель для станка ЧПУ.
            </div>
          </div>

          <!-- Guarantees Badge -->
          <div class="p-6 bg-white rounded-2xl border border-slate-200 text-slate-800 space-y-3 shadow-sm">
            <h3 class="text-xs font-bold text-amber-600 uppercase tracking-wider">Наши гарантии заказчику:</h3>
            <ul class="text-xs space-y-2.5 text-slate-600">
              <li class="flex items-center">
                <span class="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs mr-2.5 flex-shrink-0">✓</span>
                <span>Сохранение коммерческой тайны и подписание соглашения NDA</span>
              </li>
              <li class="flex items-center">
                <span class="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs mr-2.5 flex-shrink-0">✓</span>
                <span>Фиксация стоимости и сроков поставки в договоре</span>
              </li>
              <li class="flex items-center">
                <span class="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs mr-2.5 flex-shrink-0">✓</span>
                <span>100% замена деталей за счет завода при выявлении скрытого брака</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Right Column: Interactive Order Form (7 cols) - LIGHT THEME -->
        <div class="lg:col-span-7">
          <div class="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 text-slate-900 shadow-sm">
            
            <div class="mb-6">
              <span class="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">Форма отправки файлов на завод</span>
              <h2 class="text-xl sm:text-2xl font-black text-slate-900">Прикрепить файлы и спецификацию</h2>
            </div>

            <form data-ajax-form class="space-y-4 text-xs sm:text-sm">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-semibold text-slate-700 mb-1">
                    Ваше имя / Контактное лицо <span class="text-amber-600">*</span>
                  </label>
                  <input type="text" name="name" required placeholder="Андрей" class="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors">
                </div>
                <div>
                  <label class="block text-xs font-semibold text-slate-700 mb-1">
                    Название компании (для счета с НДС)
                  </label>
                  <input type="text" name="company" placeholder="ООО «ПромМеталл»" class="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors">
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-semibold text-slate-700 mb-1">
                    Телефон для связи <span class="text-amber-600">*</span>
                  </label>
                  <input type="tel" name="phone" required placeholder="+7 (___) ___-__-__" class="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors">
                </div>
                <div>
                  <label class="block text-xs font-semibold text-slate-700 mb-1">
                    Email для расчета и счета <span class="text-amber-600">*</span>
                  </label>
                  <input type="email" name="email" required placeholder="zakaz@prommetall.ru" class="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors">
                </div>
              </div>

              <!-- Drag and Drop Dropzone -->
              <div>
                <label class="block text-xs font-semibold text-slate-700 mb-1">
                  Файлы чертежей (DXF, DWG, PDF, STEP до 50 МБ)
                </label>
                <label id="order-page-dropzone" for="order-page-file-input" class="block border-2 border-dashed border-slate-300 hover:border-amber-500 rounded-xl p-6 text-center cursor-pointer transition-colors bg-slate-50/80 hover:bg-amber-50/30 group">
                  <input type="file" id="order-page-file-input" name="blueprints" multiple accept=".dxf,.dwg,.pdf,.step,.stp,.zip,.rar" class="sr-only">
                  <svg class="w-9 h-9 mx-auto text-amber-500 mb-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                  </svg>
                  <div class="text-xs text-slate-700 font-medium">
                    <span class="text-amber-600 font-bold underline">Выберите файлы</span> или перетащите их в это поле
                  </div>
                  <div class="text-[11px] text-slate-500 mt-1">
                    Поддерживаются одиночные файлы или архивы ZIP / RAR (до 50 МБ)
                  </div>
                </label>
                <div id="order-page-file-list" class="mt-2 space-y-1.5"></div>
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-700 mb-1">
                  Комментарий, количество деталей, марка стали
                </label>
                <textarea name="comment" rows="3" placeholder="Укажите тираж, толщину металла, требования по покраске RAL или гибке..." class="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"></textarea>
              </div>

              <div class="flex items-start space-x-2.5 pt-1">
                <input type="checkbox" required id="order-policy-check" class="w-4 h-4 mt-0.5 rounded text-amber-500 focus:ring-amber-500 border-slate-300 bg-white" checked>
                <label for="order-policy-check" class="text-[11px] text-slate-500 leading-tight">
                  Я согласен на обработку персональных данных согласно <a href="${r('/agreement/')}" class="text-amber-600 hover:underline">152-ФЗ РФ</a>.
                </label>
              </div>

              <div class="pt-2">
                <button type="submit" class="w-full py-4 px-4 rounded-xl font-black text-sm text-slate-950 bg-amber-500 hover:bg-amber-600 shadow-md transition-all duration-150 transform active:scale-95 flex items-center justify-center space-x-2">
                  <span>Отправить чертежи на расчет инженеру</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </button>
              </div>
            </form>

          </div>
        </div>

      </div>
    </div>
  </section>
  `;
}

module.exports = renderOrderPage;
