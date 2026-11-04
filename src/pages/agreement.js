/**
 * Dedicated Page: Политика конфиденциальности 152-ФЗ (/agreement/)
 */

const renderBreadcrumbs = require('../templates/breadcrumbs');

function renderAgreementPage(data, page, relPrefix) {
  const c = data.company;

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
          Действующая редакция политики оператора персональных данных ООО «Уралгиб» в соответствии с Федеральным законом № 152-ФЗ «О персональных данных» РФ.
        </p>
      </div>
    </div>
  </div>

  <section class="py-14 sm:py-18 bg-white text-slate-900 border-b border-slate-200">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate text-xs sm:text-sm leading-relaxed space-y-6">
      
      <div>
        <h2 class="text-lg font-bold text-slate-900 mb-2">1. Общие положения</h2>
        <p>
          Настоящая Политика обработки персональных данных (далее — «Политика») составлена в соответствии с требованиями Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных» и определяет порядок сбора, обработки и защиты персональной информации пользователей веб-сайта <strong>https://uralgib.ru</strong> (далее — «Сайт»), оператором которого является:
        </p>
        <p class="font-semibold text-slate-800 bg-slate-50 p-3 rounded-lg border border-slate-200">
          Общество с ограниченной ответственностью «Уралгиб»<br>
          ОГРН: ${c.ogrn}, ИНН: ${c.inn}, КПП: ${c.kpp}<br>
          Юридический адрес: ${c.address}<br>
          Email: <a href="mailto:${c.email}" class="text-laser-600">${c.email}</a>, Телефон: ${c.phoneMain}
        </p>
      </div>

      <div>
        <h2 class="text-lg font-bold text-slate-900 mb-2">2. Категории обрабатываемых данных</h2>
        <p>Оператор обрабатывает следующие персональные данные Пользователей:</p>
        <ul class="list-disc list-inside space-y-1 pl-2">
          <li>Фамилия, имя, отчество контактного лица;</li>
          <li>Номер контактного телефона;</li>
          <li>Адрес электронной почты (e-mail);</li>
          <li>Наименование и реквизиты представляемой организации (при заказе юридическим лицом);</li>
          <li>Файлы чертежей, эскизов, моделей деталей (DXF, DWG, STEP, PDF);</li>
          <li>Обезличенные технические данные (IP-адрес, cookie-файлы, геолокация, данные браузера).</li>
        </ul>
      </div>

      <div>
        <h2 class="text-lg font-bold text-slate-900 mb-2">3. Цели обработки персональных данных</h2>
        <ul class="list-disc list-inside space-y-1 pl-2">
          <li>Обработка входящих заявок на расчет стоимости металлообработки, лазерной резки, гибки и ЛСТК;</li>
          <li>Подготовка и направление коммерческих предложений, счетов и договоров поставки;</li>
          <li>Обеспечение обратной связи инженера или менеджера проекта с заказчиком;</li>
          <li>Исполнение обязательств по заключенным договорам изготовления и поставки металлоизделий;</li>
          <li>Улучшение качества работы сайта и аналитика пользовательского опыта.</li>
        </ul>
      </div>

      <div>
        <h2 class="text-lg font-bold text-slate-900 mb-2">4. Принцип конфиденциальности чертежей (NDA)</h2>
        <p>
          ООО «Уралгиб» гарантирует абсолютную конфиденциальность всей передаваемой конструкторской и технологической документации (файлы CAD/CAM). Файлы чертежей используются исключительно технологами предприятия для выполнения раскроя и никогда не передаются третьим лицам или конкурентам. По запросу заказчика подписывается отдельное двухстороннее соглашение о неразглашении конфиденциальной информации (NDA).
        </p>
      </div>

      <div>
        <h2 class="text-lg font-bold text-slate-900 mb-2">5. Срок обработки и отзыв согласия</h2>
        <p>
          Обработка персональных данных осуществляется на законной и справедливой основе до момента достижения целей обработки либо до отзыва согласия субъектом персональных данных.
        </p>
        <p>
          Субъект персональных данных вправе в любой момент отозвать свое согласие на обработку, направив письменное уведомление на электронную почту оператора: <strong>${c.email}</strong> с темой «Отзыв согласия на обработку персональных данных».
        </p>
      </div>

      <div>
        <h2 class="text-lg font-bold text-slate-900 mb-2">6. Заключительные положения</h2>
        <p>
          Политика действует бессрочно до замены ее новой редакцией. Актуальная версия всегда размещена в открытом доступе в сети Интернет по адресу: <code>https://uralgib.ru/agreement/</code>.
        </p>
      </div>

    </div>
  </section>
  `;
}

module.exports = renderAgreementPage;

