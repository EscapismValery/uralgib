/**
 * Dedicated Page: Вакансии (/vacancies/)
 */

const renderBreadcrumbs = require('../templates/breadcrumbs');

function renderVacanciesPage(data, page, relPrefix) {
  const c = data.company;

  const vacancies = [
    {
      title: 'Оператор-наладчик лазерного комплекса IRON MAC (ЧПУ)',
      salary: 'от 95 000 до 140 000 ₽ на руки',
      schedule: 'Сменный график 2/2 (день/ночь)',
      duties: 'Раскрой листового металла на оптоволоконном лазере 6 кВт, загрузка управляющих программ CypCut, контроль качества кромок и замена расходников (сопла, защитные стекла).',
      requirements: 'Опыт работы на лазерных станках ЧПУ от 1 года, умение читать чертежи, знание режимов резки азот/кислород.'
    },
    {
      title: 'Оператор листогибочного пресса с ЧПУ 220т',
      salary: 'от 90 000 до 135 000 ₽ на руки',
      schedule: 'Сменный график 2/2',
      duties: 'Гибка деталей из листового металла толщиной 1–10 мм на прессе DELEM ЧПУ (длина до 4000 мм), установка пуансонов и V-матриц, контроль углов электронным угломером.',
      requirements: 'Опыт работы на гибочных прессах с ЧПУ от 1 года, понимание коэффициента развертки (K-фактора).'
    },
    {
      title: 'Электрогазосварщик аргонщик (TIG / MIG)',
      salary: 'от 95 000 до 150 000 ₽ на руки',
      schedule: 'График 5/2 или 2/2',
      duties: 'Сварка металлоконструкций, рам, шкафов и изделий из нержавеющей стали AISI 304 и алюминия. Подготовка кромок, зачистка и пассивация швов.',
      requirements: 'Опыт TIG/MIG сварки от 2 лет, аттестация НАКС приветствуется.'
    },
    {
      title: 'Инженер-конструктор КМД / Технолог',
      salary: 'от 100 000 до 160 000 ₽ на руки',
      schedule: 'График 5/2 (08:00 – 17:00)',
      duties: 'Разработка деталировочных чертежей КМД в Компас-3D / SolidWorks, составление управляющих программ для станков с ЧПУ, раскладка (нестинг) деталей на листе.',
      requirements: 'Высшее техническое образование, владение CAD/CAM ПО, знание технологии металлообработки.'
    }
  ];

  return `
  <!-- Top Banner (Clean Light Theme) -->
  <div class="bg-gradient-to-b from-white via-slate-50 to-slate-100/70 text-slate-900 border-b border-slate-200 py-10 sm:py-14">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      ${renderBreadcrumbs(page.breadcrumbs, relPrefix)}
      <div class="mt-4 max-w-3xl">
        <div class="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Работа на современном заводе в Берёзовском</span>
        </div>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
          ${page.h1}
        </h1>
        <p class="mt-3 text-slate-600 text-base leading-relaxed">
          Приглашаем специалистов на постоянную работу в современный производственный комплекс ООО «Уралгиб». Официальное трудоустройство по ТК РФ, белая заработная плата дважды в месяц, теплое светлое производство и доставка служебным транспортом из Екатеринбурга.
        </p>
      </div>
    </div>
  </div>

  <section class="py-14 sm:py-18 bg-slate-50 text-slate-900 border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Company Benefits Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
        <div class="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div class="text-amber-600 font-black text-xl mb-1">100% ТК РФ</div>
          <h3 class="text-base font-bold text-slate-900">Официальное оформление</h3>
          <p class="text-xs text-slate-600 leading-relaxed">Оплачиваемый отпуск 28 дней, больничные листы, прозрачные выплаты без задержек день в день.</p>
        </div>
        <div class="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div class="text-slate-700 font-black text-xl mb-1">Комфорт</div>
          <h3 class="text-base font-bold text-slate-900">Европейские условия труда</h3>
          <p class="text-xs text-slate-600 leading-relaxed">Отапливаемый чистый цех, система вентиляции и аспирации, раздевалки, душевые и комната приема пищи.</p>
        </div>
        <div class="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div class="text-emerald-600 font-black text-xl mb-1">Трансфер</div>
          <h3 class="text-base font-bold text-slate-900">Доставка до работы</h3>
          <p class="text-xs text-slate-600 leading-relaxed">Бесплатная доставка корпоративным транспортом от метро «Проспект Космонавтов» и станции «Берёзовский».</p>
        </div>
      </div>

      <!-- Vacancies List -->
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-900">Открытые вакансии завода</h2>

        <div class="space-y-4">
          ${vacancies.map(v => `
            <div class="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm hover:border-amber-400 hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div class="space-y-2 max-w-3xl">
                <div class="flex flex-wrap items-center gap-2">
                  <h3 class="text-lg font-bold text-slate-900">${v.title}</h3>
                  <span class="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">${v.schedule}</span>
                </div>
                <div class="text-amber-600 font-black text-base font-mono">${v.salary}</div>
                <p class="text-xs text-slate-600 leading-relaxed pt-1">
                  <strong>Обязанности:</strong> ${v.duties}
                </p>
                <p class="text-xs text-slate-600 leading-relaxed">
                  <strong>Требования:</strong> ${v.requirements}
                </p>
              </div>

              <div class="flex-shrink-0">
                <button type="button" data-open-modal="quote-modal" data-modal-comment="Отклик на вакансию: ${v.title}" class="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow-md transition-all whitespace-nowrap">
                  Откликнуться на вакансию
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- HR Direct Contact -->
      <div class="mt-12 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 class="font-bold text-slate-900 text-base">Хотите работать у нас, но не нашли своей специальности?</h4>
          <p class="text-xs text-slate-600 mt-1">Отправьте резюме в отдел кадров на <a href="mailto:${c.email}" class="text-amber-600 underline font-medium">${c.email}</a> или позвоните по телефону <a href="tel:${c.phoneMobileDigits}" class="text-emerald-600 font-bold">${c.phoneMobile}</a>.</p>
        </div>
        <button type="button" data-open-modal="quote-modal" data-modal-comment="Отправка резюме в отдел кадров" class="flex-shrink-0 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-sm transition-all">
          Отправить резюме
        </button>
      </div>

    </div>
  </section>
  `;
}

module.exports = renderVacanciesPage;

