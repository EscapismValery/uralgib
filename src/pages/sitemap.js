/**
 * Dedicated Page: HTML-карта сайта (/sitemap.html)
 */

const renderBreadcrumbs = require('../templates/breadcrumbs');

function renderSitemapPage(data, page, relPrefix) {
  function r(path) {
    if (path === '/') return `${relPrefix}/index.html`;
    if (path.endsWith('.xml') || path.endsWith('.html')) return `${relPrefix}/${path.replace(/^\//, '')}`;
    if (path.endsWith('/')) return `${relPrefix}/${path.replace(/^\//, '')}index.html`;
    return `${relPrefix}/${path.replace(/^\//, '')}/index.html`;
  }

  const sitemapSections = [
    {
      title: '1. Основные страницы завода',
      items: [
        { title: 'Главная страница', url: '/', desc: 'О заводе, парк станков ЧПУ, калькулятор, кейсы, ЛСТК, B2B-условия' },
        { title: 'Прайс-лист и онлайн-калькулятор', url: '/prices/', desc: 'Официальные тарифы на резку, гибку, покраску и интерактивный калькулятор сметы' },
        { title: 'Онлайн-заказ и загрузка чертежей', url: '/order/', desc: 'Технические требования к файлам DXF/PDF и форма экспресс-расчета' },
        { title: 'Контакты, реквизиты и схема проезда', url: '/contacts/', desc: 'г. Берёзовский, ул. Орджоникидзе 19 Б, телефоны, интерактивная Яндекс.Карта' },
        { title: 'Вакансии завода', url: '/vacancies/', desc: 'Операторы лазера 6 кВт, листогиба 220т, сварщики НАКС, инженеры КМД' }
      ]
    },
    {
      title: '2. Услуги металлообработки на оборудовании с ЧПУ',
      items: [
        { title: 'Каталог всех услуг завода', url: '/services/', desc: 'Обзор технологических участков, оборудования и видов обработки' },
        { title: 'Лазерная резка металла 6000 Вт', url: '/lazernaya-rezka-metalla/', desc: 'Оптоволоконный комплекс IRON MAC 3015C, резка стали до 25 мм, нержавейки до 16 мм на азоте' },
        { title: 'Плазменная резка с ЧПУ до 20 мм', url: '/rezka/', desc: 'Раскрой толстого листового проката на координатном столе 1500×3000 мм' },
        { title: 'Рубка на гидравлической гильотине', url: '/rubka/', desc: 'Механическая рубка листов 0.5–6.0 мм без температурного воздействия' },
        { title: 'Гибка металла на ЧПУ прессе 220т', url: '/gibka/', desc: 'Высокоточная гибка до 4000 мм с автоматической компенсацией прогиба балки' },
        { title: 'Сварочные работы аргон TIG / MIG', url: '/svarka/', desc: 'Сварка нержавейки, алюминия, контактная точечная сварка, аттестация НАКС' },
        { title: 'Токарная обработка на станках с ЧПУ', url: '/tokarka/', desc: 'Обработка тел вращения по квалитету h7: фланцы, валы, штуцеры' }
      ]
    },
    {
      title: '3. Каталог готовой металлопродукции',
      items: [
        { title: 'Каталог 8 видов продукции', url: '/products/', desc: 'ЛСТК каркасы, шкафы 42U, кабельные лотки, ворота БКТП, закладные детали, павильоны' }
      ]
    },
    {
      title: '4. Инженерный справочник и стандарты ГОСТ',
      items: [
        { title: 'Справочник аналогов сталей AISI, ASTM, ГОСТ', url: '/steelsyst/', desc: 'Таблица соответствия марок сталей, химический состав и свариваемость' },
        { title: 'ГОСТ 19903-74 Прокат горячекатаный', url: '/gost-19903-74/', desc: 'Сортамент г/к листа 0.5–160 мм, таблицы веса 1 м² и живой поиск' },
        { title: 'ГОСТ 19904-90 Прокат холоднокатаный', url: '/gost-19904-90/', desc: 'Сортамент х/к листа 0.35–5.0 мм, допуски по классам точности А и Б' },
        { title: 'ГОСТ 24045-94 Профили стальные гнутые', url: '/gost-24045-94/', desc: 'Профили трапециевидные С8, С21, НС35, Н60, Н75 и балки ЛСТК' }
      ]
    },
    {
      title: '5. Служебные разделы и юридическая информация',
      items: [
        { title: 'Политика конфиденциальности (152-ФЗ РФ)', url: '/agreement/', desc: 'Положение об обработке и защите персональных данных оператора ООО «Уралгиб»' },
        { title: 'HTML-карта сайта', url: '/sitemap.html', desc: 'Настоящая страница с полным перечнем страниц сайта' },
        { title: 'XML-карта для поисковых систем', url: '/sitemap.xml', desc: 'Файл sitemap.xml для индексации в Яндексе и Google' }
      ]
    }
  ];

  return `
  <!-- Top Banner (Clean Light Theme) -->
  <div class="bg-gradient-to-b from-white via-slate-50 to-slate-100/70 text-slate-900 border-b border-slate-200 py-10 sm:py-14">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      ${renderBreadcrumbs(page.breadcrumbs, relPrefix)}
      <div class="mt-4 max-w-3xl">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
          ${page.h1}
        </h1>
        <p class="mt-3 text-slate-600 text-sm">
          Иерархическая структура всех 19 ключевых страниц веб-ресурса ООО «Уралгиб» для быстрой навигации и индексации.
        </p>
      </div>
    </div>
  </div>

  <section class="py-14 sm:py-18 bg-slate-50 text-slate-900 border-b border-slate-200">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      ${sitemapSections.map(sec => `
        <div class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h2 class="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 mb-4">
            ${sec.title}
          </h2>
          <ul class="space-y-4">
            ${sec.items.map(item => `
              <li class="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm border-b border-slate-50 pb-2">
                <a href="${r(item.url)}" class="font-bold text-laser-600 hover:text-laser-700 hover:underline">
                  ${item.title}
                </a>
                <span class="text-xs text-slate-500 sm:text-right mt-0.5 sm:mt-0 max-w-md">
                  ${item.desc}
                </span>
              </li>
            `).join('')}
          </ul>
        </div>
      `).join('')}

    </div>
  </section>
  `;
}

module.exports = renderSitemapPage;
