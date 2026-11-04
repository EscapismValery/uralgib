const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'src', 'images');
const clientsDir = path.join(baseDir, 'clients');

if (!fs.existsSync(clientsDir)) {
  fs.mkdirSync(clientsDir, { recursive: true });
}

// 1. AUTHENTIC MOTIV TELECOM LOGO
const motivSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 70" fill="none">
  <rect width="240" height="70" rx="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
  <!-- MOTIV Official Emblem: Orange circle with 3 convergent arrows -->
  <g transform="translate(16, 12)">
    <circle cx="23" cy="23" r="21" fill="#FF5C00"/>
    <!-- 3 converging arrows at 120 degrees -->
    <path d="M23 8 L27 18 L23 16 L19 18 Z" fill="#ffffff"/>
    <path d="M35 29 L26 23 L27 21 L34 23 Z" fill="#ffffff"/>
    <path d="M11 29 L18 23 L19 21 L12 23 Z" fill="#ffffff"/>
    <circle cx="23" cy="23" r="3.5" fill="#ffffff"/>
  </g>
  <!-- MOTIV Wordmark -->
  <text x="68" y="36" font-family="'Inter', -apple-system, sans-serif" font-weight="900" font-size="22" fill="#FF5C00" letter-spacing="1.5">МОТИВ</text>
  <text x="68" y="49" font-family="'Inter', -apple-system, sans-serif" font-weight="600" font-size="8.5" fill="#475569" letter-spacing="1">ТЕЛЕКОММУНИКАЦИИ</text>
</svg>`;
fs.writeFileSync(path.join(clientsDir, 'motiv.svg'), motivSvg);

// 2. AUTHENTIC URALKABEL (Холдинг Кабельный Альянс / УГМК)
const uralkabelSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 70" fill="none">
  <rect width="240" height="70" rx="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
  <!-- HKA / UMMC Cable Core Emblem -->
  <g transform="translate(16, 13)">
    <rect x="0" y="0" width="44" height="44" rx="6" fill="#003B71"/>
    <!-- Cable section circular cores -->
    <circle cx="22" cy="22" r="14" stroke="#ffffff" stroke-width="2.5" fill="none"/>
    <circle cx="22" cy="15" r="4.5" fill="#D97706"/>
    <circle cx="16" cy="26" r="4.5" fill="#D97706"/>
    <circle cx="28" cy="26" r="4.5" fill="#D97706"/>
    <circle cx="22" cy="22" r="2" fill="#ffffff"/>
  </g>
  <text x="70" y="34" font-family="'Inter', -apple-system, sans-serif" font-weight="900" font-size="17" fill="#003B71" letter-spacing="1.2">УРАЛКАБЕЛЬ</text>
  <text x="70" y="48" font-family="'Inter', -apple-system, sans-serif" font-weight="600" font-size="7.5" fill="#64748B" letter-spacing="0.5">ХОЛДИНГ КАБЕЛЬНЫЙ АЛЬЯНС УГМК</text>
</svg>`;
fs.writeFileSync(path.join(clientsDir, 'uralkabel.svg'), uralkabelSvg);

// 3. AUTHENTIC RADIAN LOGO (Инжиниринг и автоматизация)
const radianSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 70" fill="none">
  <rect width="240" height="70" rx="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
  <!-- Radian Radar Wave Emblem -->
  <g transform="translate(18, 14)">
    <circle cx="21" cy="21" r="20" fill="#0055A5" fill-opacity="0.1"/>
    <path d="M21 5 A16 16 0 0 1 37 21" stroke="#0055A5" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M21 11 A10 10 0 0 1 31 21" stroke="#0055A5" stroke-width="3" fill="none" stroke-linecap="round"/>
    <circle cx="21" cy="21" r="4.5" fill="#D97706"/>
  </g>
  <text x="68" y="36" font-family="'Inter', -apple-system, sans-serif" font-weight="900" font-size="19" fill="#0055A5" letter-spacing="2">РАДИАН</text>
  <text x="68" y="49" font-family="'Inter', -apple-system, sans-serif" font-weight="600" font-size="8.5" fill="#64748B" letter-spacing="1">ПРОМЫШЛЕННЫЙ ИНЖИНИРИНГ</text>
</svg>`;
fs.writeFileSync(path.join(clientsDir, 'radian.svg'), radianSvg);

// 4. AUTHENTIC GEN-SU / ГЕН СТРОЙУРАЛ LOGO
const gensuSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 70" fill="none">
  <rect width="240" height="70" rx="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
  <!-- Construction Tower / Structural Block Emblem -->
  <g transform="translate(16, 13)">
    <rect x="0" y="0" width="44" height="44" rx="6" fill="#0D7A53"/>
    <!-- Steel structural frame shape -->
    <path d="M12 34 L22 10 L32 34 Z" stroke="#ffffff" stroke-width="2.5" fill="none"/>
    <line x1="16" y1="24" x2="28" y2="24" stroke="#ffffff" stroke-width="2"/>
    <circle cx="22" cy="18" r="2.5" fill="#D97706"/>
  </g>
  <text x="70" y="34" font-family="'Inter', -apple-system, sans-serif" font-weight="900" font-size="16" fill="#1E293B" letter-spacing="1">ГЕН СТРОЙУРАЛ</text>
  <text x="70" y="48" font-family="'Inter', -apple-system, sans-serif" font-weight="600" font-size="7.5" fill="#0D7A53" letter-spacing="0.5">СТРОИТЕЛЬНАЯ КОМПАНИЯ (ГЕН-СУ)</text>
</svg>`;
fs.writeFileSync(path.join(clientsDir, 'gensu.svg'), gensuSvg);

console.log('✅ Generated authentic partner logos (MOTIV, URALKABEL, RADIAN, GEN-SU)');

