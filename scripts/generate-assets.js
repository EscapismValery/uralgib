const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'src', 'images');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

ensureDir(baseDir);
ensureDir(path.join(baseDir, 'equipment'));
ensureDir(path.join(baseDir, 'products'));
ensureDir(path.join(baseDir, 'cases'));
ensureDir(path.join(baseDir, 'clients'));
ensureDir(path.join(baseDir, 'icons'));

// 1. LOGO SVG
const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 64" fill="none" class="w-full h-auto">
  <defs>
    <linearGradient id="logo-amber" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fbbf24"/>
      <stop offset="100%" stop-color="#d97706"/>
    </linearGradient>
    <linearGradient id="logo-steel" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#0284c7"/>
    </linearGradient>
  </defs>
  <!-- Industrial Laser / Bending Torch Icon -->
  <g transform="translate(6, 6)">
    <rect x="0" y="0" width="52" height="52" rx="10" fill="#0c1322" stroke="#233354" stroke-width="2"/>
    <!-- Laser beam and nozzle -->
    <path d="M26 8 L32 20 L20 20 Z" fill="url(#logo-steel)"/>
    <rect x="24" y="20" width="4" height="6" fill="#94a3b8"/>
    <!-- Laser spark -->
    <circle cx="26" cy="30" r="3.5" fill="url(#logo-amber)"/>
    <path d="M26 26 L26 34 M22 30 L30 30" stroke="#fbbf24" stroke-width="2" stroke-linecap="round"/>
    <!-- Bent metal sheet profile -->
    <path d="M10 40 L26 31 L42 40" stroke="url(#logo-amber)" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="26" cy="31" r="1.5" fill="#ffffff"/>
  </g>
  <!-- Text Brand -->
  <text x="70" y="32" font-family="'Inter', sans-serif" font-weight="900" font-size="24" fill="#ffffff" letter-spacing="1.5">УРАЛГИБ</text>
  <text x="70" y="48" font-family="'Inter', sans-serif" font-weight="600" font-size="10.5" fill="#f59e0b" letter-spacing="2.2">ЗАВОД МЕТАЛЛООБРАБОТКИ</text>
</svg>`;
fs.writeFileSync(path.join(baseDir, 'logo.svg'), logoSvg);

// 2. EQUIPMENT SVGS
// 2.1 IRON MAC 3015C (6000W)
const ironMacSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" fill="none">
  <defs>
    <linearGradient id="im-bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#090d16"/>
    </linearGradient>
    <linearGradient id="im-laser" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="50%" stop-color="#fbbf24"/>
      <stop offset="100%" stop-color="#f59e0b"/>
    </linearGradient>
    <radialGradient id="im-glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#fbbf24" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="800" height="500" rx="16" fill="url(#im-bg)"/>
  <!-- Grid background -->
  <path d="M50 0 V500 M100 0 V500 M150 0 V500 M200 0 V500 M250 0 V500 M300 0 V500 M350 0 V500 M400 0 V500 M450 0 V500 M500 0 V500 M550 0 V500 M600 0 V500 M650 0 V500 M700 0 V500 M750 0 V500" stroke="#1e293b" stroke-width="0.5"/>
  <path d="M0 50 H800 M0 100 H800 M0 150 H800 M0 200 H800 M0 250 H800 M0 300 H800 M0 350 H800 M0 400 H800 M0 450 H800" stroke="#1e293b" stroke-width="0.5"/>
  
  <!-- Machine Base Frame -->
  <rect x="100" y="240" width="600" height="170" rx="8" fill="#1e293b" stroke="#334155" stroke-width="2"/>
  <rect x="120" y="260" width="560" height="20" fill="#0f172a"/>
  
  <!-- Slat table (coordinate table 3000x1500) -->
  <g stroke="#475569" stroke-width="2">
    <path d="M130 250 L140 265 M150 250 L160 265 M170 250 L180 265 M190 250 L200 265 M210 250 L220 265 M230 250 L240 265 M250 250 L260 265 M270 250 L280 265 M290 250 L300 265 M310 250 L320 265 M330 250 L340 265 M350 250 L360 265 M370 250 L380 265 M390 250 L400 265 M410 250 L420 265 M430 250 L440 265 M450 250 L460 265 M470 250 L480 265 M490 250 L500 265 M510 250 L520 265 M530 250 L540 265 M550 250 L560 265 M570 250 L580 265 M590 250 L600 265 M610 250 L620 265 M630 250 L640 265 M650 250 L660 265 M670 250 L680 265"/>
  </g>
  
  <!-- Metal Sheet on Table -->
  <rect x="140" y="245" width="520" height="8" rx="2" fill="#64748b" stroke="#94a3b8" stroke-width="1"/>
  
  <!-- Gantry Bridge (Portal) -->
  <rect x="360" y="110" width="80" height="150" rx="6" fill="#334155" stroke="#475569" stroke-width="2"/>
  <rect x="380" y="125" width="40" height="70" rx="4" fill="#0f172a" stroke="#0284c7" stroke-width="1.5"/>
  
  <!-- Laser Optical Cutting Head -->
  <rect x="392" y="180" width="16" height="45" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
  <polygon points="392,225 408,225 403,243 397,243" fill="#d97706"/>
  
  <!-- Laser Beam -->
  <line x1="400" y1="243" x2="400" y2="249" stroke="url(#im-laser)" stroke-width="3"/>
  <circle cx="400" cy="249" r="24" fill="url(#im-glow)"/>
  
  <!-- Laser Sparks -->
  <g stroke="#fbbf24" stroke-width="1.5" stroke-linecap="round">
    <line x1="400" y1="249" x2="380" y2="235"/>
    <line x1="400" y1="249" x2="370" y2="248"/>
    <line x1="400" y1="249" x2="385" y2="260"/>
    <line x1="400" y1="249" x2="420" y2="236"/>
    <line x1="400" y1="249" x2="430" y2="250"/>
    <line x1="400" y1="249" x2="415" y2="262"/>
    <circle cx="375" cy="232" r="1.5" fill="#ffffff"/>
    <circle cx="425" cy="230" r="1.5" fill="#ffffff"/>
  </g>
  
  <!-- Operator CNC Console -->
  <rect x="710" y="200" width="45" height="120" rx="4" fill="#1e293b" stroke="#0284c7" stroke-width="2"/>
  <rect x="716" y="215" width="33" height="40" fill="#0284c7" fill-opacity="0.3"/>
  <text x="720" y="235" font-family="monospace" font-size="7" fill="#38bdf8">CNC 6kW</text>
  <text x="720" y="247" font-family="monospace" font-size="6" fill="#10b981">ONLINE</text>
  
  <!-- Badges and specs overlays -->
  <rect x="40" y="40" width="220" height="60" rx="8" fill="#0c1322" fill-opacity="0.9" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="56" y="65" font-family="'Inter', sans-serif" font-weight="700" font-size="14" fill="#ffffff">IRON MAC 3015C</text>
  <text x="56" y="85" font-family="'Inter', sans-serif" font-size="12" fill="#fbbf24">Оптоволокно 6000 Вт | Стол 3×1.5 м</text>
  
  <rect x="540" y="40" width="220" height="60" rx="8" fill="#0c1322" fill-opacity="0.9" stroke="#0284c7" stroke-width="1.5"/>
  <text x="556" y="65" font-family="'Inter', sans-serif" font-weight="700" font-size="13" fill="#ffffff">Точность позиц.: 0.05 мм</text>
  <text x="556" y="85" font-family="'Inter', sans-serif" font-size="12" fill="#38bdf8">Сталь до 25мм | Нерж. до 16мм</text>
</svg>`;
fs.writeFileSync(path.join(baseDir, 'equipment', 'iron-mac-3015c.svg'), ironMacSvg);

// 2.2 CNC PRESS BRAKE (220т, 4000мм)
const pressBrakeSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" fill="none">
  <rect width="800" height="500" rx="16" fill="#090d16"/>
  <!-- Structure -->
  <rect x="120" y="80" width="560" height="340" rx="12" fill="#17233d" stroke="#334873" stroke-width="3"/>
  <!-- Hydraulic side columns -->
  <rect x="150" y="110" width="80" height="280" rx="6" fill="#0c1322" stroke="#233354" stroke-width="2"/>
  <rect x="570" y="110" width="80" height="280" rx="6" fill="#0c1322" stroke="#233354" stroke-width="2"/>
  <!-- Hydraulic cylinders top -->
  <rect x="170" y="70" width="40" height="60" rx="4" fill="#f59e0b"/>
  <rect x="590" y="70" width="40" height="60" rx="4" fill="#f59e0b"/>
  <!-- Upper movable beam (ram) -->
  <rect x="230" y="140" width="340" height="90" fill="#334155" stroke="#475569" stroke-width="2"/>
  <!-- Upper punch punch tooling -->
  <polygon points="250,230 550,230 540,265 260,265" fill="#94a3b8" stroke="#cbd5e1" stroke-width="1.5"/>
  <!-- Bent metal sheet in die -->
  <path d="M220 280 L400 270 L580 280" stroke="#f59e0b" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
  <!-- Lower multi-V die and bed -->
  <polygon points="250,274 550,274 560,320 240,320" fill="#475569" stroke="#64748b" stroke-width="2"/>
  <rect x="230" y="320" width="340" height="60" fill="#1e293b"/>
  <!-- CNC Graphic Controller -->
  <rect x="660" y="160" width="100" height="120" rx="6" fill="#0f172a" stroke="#0284c7" stroke-width="2"/>
  <rect x="670" y="175" width="80" height="50" rx="3" fill="#0284c7" fill-opacity="0.2"/>
  <text x="675" y="195" font-family="monospace" font-size="8" fill="#38bdf8">DELEM CNC</text>
  <text x="675" y="212" font-family="monospace" font-size="8" fill="#10b981">ANGLE: 90.00°</text>
  <!-- Badges -->
  <rect x="40" y="30" width="230" height="50" rx="6" fill="#070b14" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="55" y="52" font-family="'Inter', sans-serif" font-weight="700" font-size="13" fill="#ffffff">ЧПУ Пресс 2200 кН (220т)</text>
  <text x="55" y="68" font-family="'Inter', sans-serif" font-size="11" fill="#f59e0b">Длина гиба до 4000 мм | Угол 0.01°</text>
</svg>`;
fs.writeFileSync(path.join(baseDir, 'equipment', 'cnc-press-brake.svg'), pressBrakeSvg);

// 2.3 PLASMA CUTTER (до 20 мм)
const plasmaSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" fill="none">
  <rect width="800" height="500" rx="16" fill="#090d16"/>
  <rect x="100" y="140" width="600" height="260" rx="8" fill="#17233d" stroke="#233354" stroke-width="2"/>
  <!-- Water table grid -->
  <rect x="120" y="200" width="560" height="180" fill="#0c182b"/>
  <!-- Plasma Gantry -->
  <rect x="360" y="100" width="80" height="180" fill="#334873" stroke="#48639c" stroke-width="2"/>
  <polygon points="390,230 410,230 405,255 395,255" fill="#f8fafc"/>
  <!-- Plasma Arc -->
  <line x1="400" y1="255" x2="400" y2="280" stroke="#38bdf8" stroke-width="4"/>
  <circle cx="400" cy="280" r="20" fill="#0284c7" fill-opacity="0.4"/>
  <!-- Cut metal plate -->
  <rect x="160" y="275" width="480" height="12" fill="#64748b"/>
  <!-- Badge -->
  <rect x="40" y="30" width="220" height="50" rx="6" fill="#070b14" stroke="#0284c7" stroke-width="1.5"/>
  <text x="55" y="52" font-family="'Inter', sans-serif" font-weight="700" font-size="13" fill="#ffffff">Плазменная резка с ЧПУ</text>
  <text x="55" y="68" font-family="'Inter', sans-serif" font-size="11" fill="#38bdf8">Толщина раскроя 1–20 мм | 3000×1500</text>
</svg>`;
fs.writeFileSync(path.join(baseDir, 'equipment', 'plasma-cutter.svg'), plasmaSvg);

// 2.4 GUILLOTINE SHEARS (до 6 мм)
const shearsSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" fill="none">
  <rect width="800" height="500" rx="16" fill="#090d16"/>
  <rect x="120" y="120" width="560" height="280" rx="10" fill="#17233d" stroke="#334873" stroke-width="2"/>
  <!-- Hold down clamps -->
  <g fill="#f59e0b">
    <rect x="160" y="240" width="24" height="40" rx="2"/>
    <rect x="220" y="240" width="24" height="40" rx="2"/>
    <rect x="280" y="240" width="24" height="40" rx="2"/>
    <rect x="340" y="240" width="24" height="40" rx="2"/>
    <rect x="400" y="240" width="24" height="40" rx="2"/>
    <rect x="460" y="240" width="24" height="40" rx="2"/>
    <rect x="520" y="240" width="24" height="40" rx="2"/>
    <rect x="580" y="240" width="24" height="40" rx="2"/>
  </g>
  <!-- Blade angle line -->
  <polygon points="150,225 610,210 610,230 150,245" fill="#e2e8f0"/>
  <!-- Work bed -->
  <rect x="140" y="280" width="520" height="100" fill="#0f172a"/>
  <!-- Badges -->
  <rect x="40" y="30" width="230" height="50" rx="6" fill="#070b14" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="55" y="52" font-family="'Inter', sans-serif" font-weight="700" font-size="13" fill="#ffffff">Гидравлическая гильотина</text>
  <text x="55" y="68" font-family="'Inter', sans-serif" font-size="11" fill="#f59e0b">Рубка листов 0.5–6 мм | Длина 3000 мм</text>
</svg>`;
fs.writeFileSync(path.join(baseDir, 'equipment', 'guillotine-shears.svg'), shearsSvg);

// 2.5 WELDING TIG/MIG
const weldingSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" fill="none">
  <rect width="800" height="500" rx="16" fill="#090d16"/>
  <!-- Welding bench -->
  <rect x="100" y="260" width="600" height="160" rx="8" fill="#17233d" stroke="#334873" stroke-width="2"/>
  <rect x="120" y="250" width="560" height="20" fill="#64748b"/>
  <!-- Workpieces being welded -->
  <polygon points="260,250 400,250 400,160 360,160 360,210 260,210" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1.5"/>
  <polygon points="400,250 540,250 540,210 440,210 440,160 400,160" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
  <!-- Torch and arc -->
  <path d="M480 90 L420 180" stroke="#f59e0b" stroke-width="14" stroke-linecap="round"/>
  <polygon points="415,185 425,185 420,205" fill="#cbd5e1"/>
  <!-- Arc flash -->
  <circle cx="400" cy="205" r="30" fill="#38bdf8" fill-opacity="0.3"/>
  <circle cx="400" cy="205" r="10" fill="#ffffff"/>
  <!-- Badges -->
  <rect x="40" y="30" width="220" height="50" rx="6" fill="#070b14" stroke="#0284c7" stroke-width="1.5"/>
  <text x="55" y="52" font-family="'Inter', sans-serif" font-weight="700" font-size="13" fill="#ffffff">Сварочный участок TIG/MIG</text>
  <text x="55" y="68" font-family="'Inter', sans-serif" font-size="11" fill="#38bdf8">Аргонная сварка нержавейки и Al</text>
</svg>`;
fs.writeFileSync(path.join(baseDir, 'equipment', 'welding-tig-mig.svg'), weldingSvg);

// 2.6 CNC LATHE (Токарка)
const latheSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" fill="none">
  <rect width="800" height="500" rx="16" fill="#090d16"/>
  <rect x="120" y="140" width="560" height="260" rx="10" fill="#17233d" stroke="#233354" stroke-width="2"/>
  <!-- Chuck -->
  <rect x="160" y="190" width="90" height="160" rx="4" fill="#334155" stroke="#475569" stroke-width="2"/>
  <!-- Workpiece rotating -->
  <rect x="250" y="240" width="220" height="60" rx="2" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1.5"/>
  <rect x="470" y="250" width="90" height="40" fill="#94a3b8"/>
  <!-- Cutting tool turret -->
  <rect x="420" y="180" width="70" height="50" fill="#d97706" rx="4"/>
  <polygon points="435,230 455,230 445,245" fill="#f8fafc"/>
  <!-- Badges -->
  <rect x="40" y="30" width="220" height="50" rx="6" fill="#070b14" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="55" y="52" font-family="'Inter', sans-serif" font-weight="700" font-size="13" fill="#ffffff">Токарный участок с ЧПУ</text>
  <text x="55" y="68" font-family="'Inter', sans-serif" font-size="11" fill="#f59e0b">Фланцы, втулки, валы по h7</text>
</svg>`;
fs.writeFileSync(path.join(baseDir, 'equipment', 'cnc-lathe.svg'), latheSvg);

// 2.7 POWDER COATING
const powderSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" fill="none">
  <rect width="800" height="500" rx="16" fill="#090d16"/>
  <rect x="100" y="120" width="600" height="280" rx="10" fill="#17233d" stroke="#233354" stroke-width="2"/>
  <!-- Overhead conveyor rail -->
  <line x1="120" y1="160" x2="680" y2="160" stroke="#f59e0b" stroke-width="6"/>
  <!-- Hanging parts -->
  <g stroke="#94a3b8" stroke-width="2">
    <line x1="220" y1="160" x2="220" y2="210"/>
    <rect x="180" y="210" width="80" height="140" fill="#ef4444" rx="4"/>
    
    <line x1="400" y1="160" x2="400" y2="210"/>
    <rect x="360" y="210" width="80" height="140" fill="#3b82f6" rx="4"/>
    
    <line x1="580" y1="160" x2="580" y2="210"/>
    <rect x="540" y="210" width="80" height="140" fill="#10b981" rx="4"/>
  </g>
  <!-- Badges -->
  <rect x="40" y="30" width="230" height="50" rx="6" fill="#070b14" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="55" y="52" font-family="'Inter', sans-serif" font-weight="700" font-size="13" fill="#ffffff">Порошковая окраска RAL</text>
  <text x="55" y="68" font-family="'Inter', sans-serif" font-size="11" fill="#f59e0b">Полимеризация 200°C | 250+ цветов</text>
</svg>`;
fs.writeFileSync(path.join(baseDir, 'equipment', 'powder-coating.svg'), powderSvg);

// 3. PRODUCTS SVGS (8 items)
const productsData = [
  { file: 'lstk-structures.svg', title: 'ЛСТК профили и балки', subtitle: 'Термопрофили, балки, фермы для каркасов' },
  { file: 'electrical-enclosures.svg', title: 'Корпуса и шкафы 42U', subtitle: 'Электротехнические шкафы IP54/65' },
  { file: 'cable-trays.svg', title: 'Кабельные трассы', subtitle: 'Перфорированные и лестничные лотки' },
  { file: 'bktp-doors.svg', title: 'Ворота и двери БКТП', subtitle: 'Для трансформаторных подстанций' },
  { file: 'embedded-parts.svg', title: 'Закладные детали', subtitle: 'Серия 1.400-15, анкерные плиты' },
  { file: 'modular-pavilions.svg', title: 'Торговые павильоны', subtitle: 'Быстровозводимые модули и каркасы' },
  { file: 'stainless-furniture.svg', title: 'Нержавеющая мебель', subtitle: 'Пищепром, HoReCa, столы AISI 304' },
  { file: 'custom-parts.svg', title: 'Нестандартные детали', subtitle: 'По чертежам заказчика с ЧПУ точностью' },
];

productsData.forEach((p, idx) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" fill="none">
    <rect width="600" height="400" rx="12" fill="#0f172a"/>
    <rect x="20" y="20" width="560" height="360" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
    <!-- Technical Blueprint background grid -->
    <path d="M40 0 V400 M80 0 V400 M120 0 V400 M160 0 V400 M200 0 V400 M240 0 V400 M280 0 V400 M320 0 V400 M360 0 V400 M400 0 V400 M440 0 V400 M480 0 V400 M520 0 V400 M560 0 V400" stroke="#334155" stroke-width="0.5"/>
    <path d="M0 40 H600 M0 80 H600 M0 120 H600 M0 160 H600 M0 200 H600 M0 240 H600 M0 280 H600 M0 320 H600 M0 360 H600" stroke="#334155" stroke-width="0.5"/>
    
    <!-- Central dynamic representation -->
    <g transform="translate(150, 80)">
      <rect x="0" y="0" width="300" height="180" rx="8" fill="#0c1322" stroke="#f59e0b" stroke-width="2"/>
      <path d="M20 90 L150 20 L280 90 L150 160 Z" stroke="#38bdf8" stroke-width="2" fill="#0284c7" fill-opacity="0.15"/>
      <circle cx="150" cy="90" r="30" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4 2"/>
      <line x1="70" y1="90" x2="230" y2="90" stroke="#ffffff" stroke-width="1.5"/>
      <line x1="150" y1="40" x2="150" y2="140" stroke="#ffffff" stroke-width="1.5"/>
    </g>
    
    <!-- Caption bar -->
    <rect x="30" y="290" width="540" height="75" rx="6" fill="#090d16" fill-opacity="0.95" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="50" y="322" font-family="'Inter', sans-serif" font-weight="700" font-size="16" fill="#ffffff">${p.title}</text>
    <text x="50" y="345" font-family="'Inter', sans-serif" font-size="13" fill="#cbd5e1">${p.subtitle}</text>
    <rect x="470" y="307" width="80" height="28" rx="4" fill="#f59e0b"/>
    <text x="484" y="326" font-family="'Inter', sans-serif" font-weight="700" font-size="11" fill="#090d16">ГОСТ / ТУ</text>
  </svg>`;
  fs.writeFileSync(path.join(baseDir, 'products', p.file), svg);
});

// 4. CASES SVGS (6 items)
const casesData = [
  { file: 'warehouse-frame.svg', title: 'Склад 18×48м (864 м²)', city: 'г. Екатеринбург', tonnage: '38.5 тонн ЛСТК' },
  { file: 'telecom-cabinets.svg', title: 'Шкафы 42U для ПАО МОТИВ', city: 'г. Екатеринбург', tonnage: 'Серия 450 шт.' },
  { file: 'cable-project.svg', title: 'Кабельные лотки АО Уралкабель', city: 'г. Екатеринбург', tonnage: '1500 пог. м' },
  { file: 'bktp-gates.svg', title: 'Ворота БКТП подстанций', city: 'г. Первоуральск', tonnage: '32 комплекта' },
  { file: 'commercial-pavilion.svg', title: 'Торговый павильон 15×8м', city: 'г. Берёзовский', tonnage: '120 м² каркас' },
  { file: 'food-equipment.svg', title: 'Мебель AISI 304 для пищепрома', city: 'г. Екатеринбург', tonnage: '75 единиц изделий' },
];

casesData.forEach(c => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 450" fill="none">
    <rect width="700" height="450" rx="14" fill="#070b14"/>
    <rect x="25" y="25" width="650" height="400" rx="10" fill="#111b30" stroke="#233354" stroke-width="2"/>
    
    <!-- Isometric Wireframe / 3D Model representation -->
    <g transform="translate(100, 60)">
      <polygon points="100,40 400,40 500,120 200,120" fill="#1e293b" stroke="#0284c7" stroke-width="2"/>
      <polygon points="100,40 200,120 200,240 100,160" fill="#0f172a" stroke="#0284c7" stroke-width="2"/>
      <polygon points="200,120 500,120 500,240 200,240" fill="#17233d" stroke="#f59e0b" stroke-width="2"/>
      <!-- Grid trusses -->
      <line x1="200" y1="120" x2="350" y2="240" stroke="#38bdf8" stroke-width="1.5"/>
      <line x1="350" y1="120" x2="500" y2="240" stroke="#38bdf8" stroke-width="1.5"/>
      <line x1="350" y1="120" x2="200" y2="240" stroke="#38bdf8" stroke-width="1.5"/>
      <line x1="500" y1="120" x2="350" y2="240" stroke="#38bdf8" stroke-width="1.5"/>
    </g>
    
    <!-- Info Overlay Box -->
    <rect x="45" y="320" width="610" height="90" rx="8" fill="#0c1322" fill-opacity="0.95" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="65" y="352" font-family="'Inter', sans-serif" font-weight="700" font-size="17" fill="#ffffff">${c.title}</text>
    <text x="65" y="380" font-family="'Inter', sans-serif" font-size="13" fill="#cbd5e1">Локация: <tspan fill="#f59e0b" font-weight="600">${c.city}</tspan> | Объем: <tspan fill="#38bdf8" font-weight="600">${c.tonnage}</tspan></text>
    <rect x="520" y="340" width="115" height="34" rx="4" fill="#f59e0b"/>
    <text x="532" y="362" font-family="'Inter', sans-serif" font-weight="700" font-size="11" fill="#090d16">ВЫПОЛНЕНО</text>
  </svg>`;
  fs.writeFileSync(path.join(baseDir, 'cases', c.file), svg);
});

// 5. CLIENT LOGOS SVGS
// 5.1 MOTIV
const motivSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" fill="none">
  <rect width="200" height="60" rx="8" fill="#111b30"/>
  <circle cx="35" cy="30" r="16" fill="#f59e0b"/>
  <path d="M28 30 L42 30 M35 23 L35 37" stroke="#090d16" stroke-width="3" stroke-linecap="round"/>
  <text x="65" y="36" font-family="'Inter', sans-serif" font-weight="900" font-size="18" fill="#ffffff" letter-spacing="2">МОТИВ</text>
  <text x="65" y="47" font-family="'Inter', sans-serif" font-size="8" fill="#94a3b8">ТЕЛЕКОММУНИКАЦИИ</text>
</svg>`;
fs.writeFileSync(path.join(baseDir, 'clients', 'motiv.svg'), motivSvg);

// 5.2 URALKABEL
const uralkabelSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" fill="none">
  <rect width="200" height="60" rx="8" fill="#111b30"/>
  <rect x="20" y="18" width="24" height="24" rx="4" fill="#0284c7"/>
  <text x="56" y="35" font-family="'Inter', sans-serif" font-weight="800" font-size="16" fill="#ffffff">УРАЛКАБЕЛЬ</text>
  <text x="56" y="47" font-family="'Inter', sans-serif" font-size="8" fill="#38bdf8">КАБЕЛЬНЫЙ ЗАВОД</text>
</svg>`;
fs.writeFileSync(path.join(baseDir, 'clients', 'uralkabel.svg'), uralkabelSvg);

// 5.3 RADIAN
const radianSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" fill="none">
  <rect width="200" height="60" rx="8" fill="#111b30"/>
  <circle cx="32" cy="30" r="14" stroke="#f59e0b" stroke-width="3"/>
  <circle cx="32" cy="30" r="6" fill="#f59e0b"/>
  <text x="58" y="36" font-family="'Inter', sans-serif" font-weight="800" font-size="17" fill="#ffffff" letter-spacing="1">РАДИАН</text>
  <text x="58" y="47" font-family="'Inter', sans-serif" font-size="8" fill="#94a3b8">ИНЖИНИРИНГ</text>
</svg>`;
fs.writeFileSync(path.join(baseDir, 'clients', 'radian.svg'), radianSvg);

// 5.4 GEN-SU
const gensuSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" fill="none">
  <rect width="200" height="60" rx="8" fill="#111b30"/>
  <polygon points="22,40 34,18 46,40" fill="#10b981"/>
  <text x="58" y="35" font-family="'Inter', sans-serif" font-weight="800" font-size="16" fill="#ffffff">ГЕН-СУ</text>
  <text x="58" y="47" font-family="'Inter', sans-serif" font-size="8" fill="#10b981">СТРОИТЕЛЬНЫЙ ХОЛДИНГ</text>
</svg>`;
fs.writeFileSync(path.join(baseDir, 'clients', 'gensu.svg'), gensuSvg);

console.log('Successfully generated all SVG visual assets!');

