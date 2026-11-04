/**
 * Uralgib Industrial Web Application - Client Core JS
 * Pure Vanilla JavaScript (Modular, Zero External Dependencies)
 */

(function () {
  'use strict';

  // State Management
  const state = {
    calculator: {
      operation: 'laser',
      material: 'carbon',
      thickness: 3.0,
      cutLength: 50,
      piercesCount: 120,
      bendsCount: 40,
      coating: false,
      coatingArea: 10,
      designBureau: false,
      calculated: {
        pricePerMeter: 0,
        cuttingTotal: 0,
        pierceTotal: 0,
        bendingTotal: 0,
        coatingTotal: 0,
        designTotal: 0,
        grandTotal: 0
      }
    },
    attachedFiles: [],
    lightbox: {
      items: [],
      currentIndex: 0
    }
  };

  // Pricing Matrix Base Rates (RUB)
  const PRICING = {
    laser: {
      carbon: {
        0.5: 22, 1.0: 28, 1.5: 35, 2.0: 44, 3.0: 62, 4.0: 84, 5.0: 110,
        6.0: 140, 8.0: 195, 10.0: 255, 12.0: 340, 16.0: 490, 20.0: 680, 25.0: 950
      },
      stainless: {
        0.5: 38, 1.0: 48, 1.5: 64, 2.0: 82, 3.0: 125, 4.0: 175, 5.0: 240,
        6.0: 310, 8.0: 460, 10.0: 620, 12.0: 850, 16.0: 1280
      },
      aluminum: {
        0.5: 32, 1.0: 42, 1.5: 56, 2.0: 74, 3.0: 105, 4.0: 155, 5.0: 215,
        6.0: 285, 8.0: 410, 10.0: 560, 12.0: 780, 16.0: 1150
      },
      copper: {
        0.5: 55, 1.0: 75, 1.5: 110, 2.0: 160, 3.0: 240, 4.0: 350, 5.0: 490,
        6.0: 680, 8.0: 980, 10.0: 1450
      }
    },
    plasma: {
      carbon: {
        1.0: 22, 2.0: 30, 3.0: 40, 4.0: 52, 5.0: 65, 6.0: 80,
        8.0: 115, 10.0: 150, 12.0: 195, 16.0: 280, 20.0: 390
      },
      stainless: {
        1.0: 35, 2.0: 50, 3.0: 70, 4.0: 95, 5.0: 130, 6.0: 170,
        8.0: 240, 10.0: 330, 12.0: 440, 16.0: 620, 20.0: 840
      },
      aluminum: {
        1.0: 30, 2.0: 45, 3.0: 62, 4.0: 85, 5.0: 115, 6.0: 150,
        8.0: 215, 10.0: 295, 12.0: 390, 16.0: 550, 20.0: 750
      },
      copper: {
        1.0: 50, 2.0: 80, 3.0: 120, 4.0: 180, 5.0: 250, 6.0: 340,
        8.0: 510, 10.0: 720
      }
    },
    shears: {
      carbon: {
        0.5: 14, 1.0: 18, 1.5: 24, 2.0: 30, 3.0: 42, 4.0: 58, 5.0: 75, 6.0: 95
      },
      stainless: {
        0.5: 25, 1.0: 34, 1.5: 45, 2.0: 58, 3.0: 82, 4.0: 115, 5.0: 150, 6.0: 190
      },
      aluminum: {
        0.5: 20, 1.0: 26, 1.5: 35, 2.0: 46, 3.0: 65, 4.0: 90, 5.0: 120, 6.0: 155
      },
      copper: {
        0.5: 35, 1.0: 48, 1.5: 68, 2.0: 92, 3.0: 135, 4.0: 190, 5.0: 260, 6.0: 340
      }
    },
    bending: {
      ratePerBend: {
        0.5: 18, 1.0: 22, 1.5: 26, 2.0: 32, 3.0: 45, 4.0: 65,
        5.0: 90, 6.0: 125, 8.0: 190, 10.0: 280, 12.0: 390, 16.0: 580, 20.0: 850
      }
    },
    pierceRateMultiplier: {
      carbon: 0.18,
      stainless: 0.28,
      aluminum: 0.24,
      copper: 0.35
    },
    powderCoatingPerM2: 380,
    designBureauBase: 2500
  };

  // Helper function to find closest thickness rate
  function getRateForThickness(table, thickness) {
    if (!table) return 30;
    const keys = Object.keys(table).map(Number).sort((a, b) => a - b);
    let chosen = keys[0];
    for (let k of keys) {
      if (thickness >= k) chosen = k;
    }
    return table[chosen] || table[keys[0]];
  }

  // Calculator Engine
  function recalculate() {
    const { operation, material, thickness, cutLength, piercesCount, bendsCount, coating, coatingArea, designBureau } = state.calculator;

    let pricePerMeter = 0;
    let cuttingTotal = 0;
    let pierceTotal = 0;
    let bendingTotal = 0;
    let coatingTotal = 0;
    let designTotal = 0;

    if (operation === 'laser' || operation === 'plasma' || operation === 'shears') {
      const opTable = PRICING[operation]?.[material] || PRICING.laser.carbon;
      pricePerMeter = getRateForThickness(opTable, thickness);
      cuttingTotal = pricePerMeter * cutLength;

      // Piercing cost
      const mult = PRICING.pierceRateMultiplier[material] || 0.2;
      const pierceUnitPrice = Math.max(3, pricePerMeter * mult);
      pierceTotal = pierceUnitPrice * piercesCount;
    }

    // Bending cost
    if (bendsCount > 0) {
      const bendRate = getRateForThickness(PRICING.bending.ratePerBend, thickness);
      bendingTotal = bendRate * bendsCount;
    }

    // Coating
    if (coating && coatingArea > 0) {
      coatingTotal = PRICING.powderCoatingPerM2 * coatingArea;
    }

    // Design Bureau
    if (designBureau) {
      designTotal = PRICING.designBureauBase;
    }

    const grandTotal = Math.round(cuttingTotal + pierceTotal + bendingTotal + coatingTotal + designTotal);

    state.calculator.calculated = {
      pricePerMeter: Math.round(pricePerMeter),
      cuttingTotal: Math.round(cuttingTotal),
      pierceTotal: Math.round(pierceTotal),
      bendingTotal: Math.round(bendingTotal),
      coatingTotal: Math.round(coatingTotal),
      designTotal: Math.round(designTotal),
      grandTotal: grandTotal
    };

    updateCalculatorUI();
  }

  function updateCalculatorUI() {
    const calc = state.calculator.calculated;
    const elPricePerMeter = document.getElementById('calc-price-meter');
    const elGrandTotal = document.getElementById('calc-grand-total');
    const elCuttingTotal = document.getElementById('calc-cutting-total');
    const elPierceTotal = document.getElementById('calc-pierce-total');
    const elBendingTotal = document.getElementById('calc-bending-total');
    const elCoatingTotal = document.getElementById('calc-coating-total');
    const elThicknessVal = document.getElementById('calc-thickness-val');

    if (elPricePerMeter) elPricePerMeter.textContent = calc.pricePerMeter.toLocaleString('ru-RU');
    if (elGrandTotal) elGrandTotal.textContent = calc.grandTotal.toLocaleString('ru-RU') + ' ₽';
    if (elCuttingTotal) elCuttingTotal.textContent = calc.cuttingTotal.toLocaleString('ru-RU') + ' ₽';
    if (elPierceTotal) elPierceTotal.textContent = calc.pierceTotal.toLocaleString('ru-RU') + ' ₽';
    if (elBendingTotal) elBendingTotal.textContent = calc.bendingTotal.toLocaleString('ru-RU') + ' ₽';
    if (elCoatingTotal) elCoatingTotal.textContent = calc.coatingTotal.toLocaleString('ru-RU') + ' ₽';
    if (elThicknessVal) elThicknessVal.textContent = state.calculator.thickness.toFixed(1) + ' мм';
  }

  function initCalculator() {
    const calcContainer = document.getElementById('metal-calculator');
    if (!calcContainer) return;

    // Operation buttons
    calcContainer.querySelectorAll('[data-calc-op]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        calcContainer.querySelectorAll('[data-calc-op]').forEach(b => {
          b.classList.remove('bg-laser-500', 'text-slate-950', 'border-laser-500', 'font-bold');
          b.classList.add('bg-industrial-900', 'text-slate-300', 'border-industrial-700');
        });
        btn.classList.add('bg-laser-500', 'text-slate-950', 'border-laser-500', 'font-bold');
        btn.classList.remove('bg-industrial-900', 'text-slate-300', 'border-industrial-700');
        state.calculator.operation = btn.getAttribute('data-calc-op');
        recalculate();
      });
    });

    // Material buttons
    calcContainer.querySelectorAll('[data-calc-mat]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        calcContainer.querySelectorAll('[data-calc-mat]').forEach(b => {
          b.classList.remove('bg-steel-500', 'text-white', 'border-steel-500', 'font-bold');
          b.classList.add('bg-industrial-900', 'text-slate-300', 'border-industrial-700');
        });
        btn.classList.add('bg-steel-500', 'text-white', 'border-steel-500', 'font-bold');
        btn.classList.remove('bg-industrial-900', 'text-slate-300', 'border-industrial-700');
        state.calculator.material = btn.getAttribute('data-calc-mat');
        recalculate();
      });
    });

    // Thickness Slider & Quick Buttons
    const thicknessSlider = document.getElementById('calc-thickness-slider');
    if (thicknessSlider) {
      thicknessSlider.addEventListener('input', (e) => {
        state.calculator.thickness = parseFloat(e.target.value);
        recalculate();
      });
    }

    calcContainer.querySelectorAll('[data-calc-thick-preset]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const val = parseFloat(btn.getAttribute('data-calc-thick-preset'));
        state.calculator.thickness = val;
        if (thicknessSlider) thicknessSlider.value = val;
        recalculate();
      });
    });

    // Metric inputs
    const inputCutLength = document.getElementById('calc-input-length');
    if (inputCutLength) {
      inputCutLength.addEventListener('input', (e) => {
        state.calculator.cutLength = Math.max(1, parseFloat(e.target.value) || 0);
        recalculate();
      });
    }

    const inputPierces = document.getElementById('calc-input-pierces');
    if (inputPierces) {
      inputPierces.addEventListener('input', (e) => {
        state.calculator.piercesCount = Math.max(0, parseInt(e.target.value, 10) || 0);
        recalculate();
      });
    }

    const inputBends = document.getElementById('calc-input-bends');
    if (inputBends) {
      inputBends.addEventListener('input', (e) => {
        state.calculator.bendsCount = Math.max(0, parseInt(e.target.value, 10) || 0);
        recalculate();
      });
    }

    // Coating Checkbox
    const checkCoating = document.getElementById('calc-check-coating');
    const inputCoatingArea = document.getElementById('calc-coating-area');
    if (checkCoating) {
      checkCoating.addEventListener('change', (e) => {
        state.calculator.coating = e.target.checked;
        if (inputCoatingArea) {
          inputCoatingArea.disabled = !e.target.checked;
          if (e.target.checked) inputCoatingArea.classList.remove('opacity-50');
          else inputCoatingArea.classList.add('opacity-50');
        }
        recalculate();
      });
    }

    if (inputCoatingArea) {
      inputCoatingArea.addEventListener('input', (e) => {
        state.calculator.coatingArea = Math.max(0, parseFloat(e.target.value) || 0);
        recalculate();
      });
    }

    // Design Bureau Checkbox
    const checkDesign = document.getElementById('calc-check-design');
    if (checkDesign) {
      checkDesign.addEventListener('change', (e) => {
        state.calculator.designBureau = e.target.checked;
        recalculate();
      });
    }

    // Transfer to Quote Modal Button
    const btnSubmitCalc = document.getElementById('calc-submit-btn');
    if (btnSubmitCalc) {
      btnSubmitCalc.addEventListener('click', (e) => {
        e.preventDefault();
        transferCalculatorToModal();
      });
    }

    recalculate();
  }

  function getRussianOpName(op) {
    switch (op) {
      case 'laser': return 'Лазерная резка 6 кВт';
      case 'plasma': return 'Плазменная резка с ЧПУ';
      case 'shears': return 'Рубка на гидравлической гильотине';
      case 'bending': return 'Гибка на ЧПУ прессе 220т';
      default: return op;
    }
  }

  function getRussianMatName(mat) {
    switch (mat) {
      case 'carbon': return 'Углеродистая сталь (Ст3/09Г2С)';
      case 'stainless': return 'Нержавеющая сталь (AISI 304/430)';
      case 'aluminum': return 'Алюминий (АМг/АМц/Д16)';
      case 'copper': return 'Медь / Латунь';
      default: return mat;
    }
  }

  function transferCalculatorToModal() {
    const calc = state.calculator;
    const summary = `Расчет из калькулятора:\n` +
      `• Операция: ${getRussianOpName(calc.operation)}\n` +
      `• Материал: ${getRussianMatName(calc.material)}, толщина ${calc.thickness} мм\n` +
      `• Длина реза: ${calc.cutLength} м (${calc.calculated.cuttingTotal.toLocaleString('ru-RU')} ₽)\n` +
      `• Количество врезок: ${calc.piercesCount} шт (${calc.calculated.pierceTotal.toLocaleString('ru-RU')} ₽)\n` +
      `• Количество гибов: ${calc.bendsCount} шт (${calc.calculated.bendingTotal.toLocaleString('ru-RU')} ₽)\n` +
      (calc.coating ? `• Порошковая покраска RAL: ${calc.coatingArea} м² (${calc.calculated.coatingTotal.toLocaleString('ru-RU')} ₽)\n` : '') +
      (calc.designBureau ? `• Разработка КМ/КМД: да (+2 500 ₽)\n` : '') +
      `Итого предварительно: ${calc.calculated.grandTotal.toLocaleString('ru-RU')} ₽ (в т.ч. НДС 20%)`;

    openModal('quote-modal', summary);
  }

  // Modal Dialogs
  function openModal(modalId, prefilledComment = '') {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.classList.add('overflow-hidden');

    if (prefilledComment) {
      const commentField = modal.querySelector('textarea[name="comment"]');
      if (commentField) {
        commentField.value = prefilledComment;
      }
    }

    const firstInput = modal.querySelector('input:not([type="hidden"])');
    if (firstInput) firstInput.focus();
  }

  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.classList.remove('overflow-hidden');
  }

  function initModals() {
    // Open trigger
    document.querySelectorAll('[data-open-modal]').forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const modalId = trigger.getAttribute('data-open-modal');
        const defaultComment = trigger.getAttribute('data-modal-comment') || '';
        openModal(modalId, defaultComment);
      });
    });

    // Close triggers
    document.querySelectorAll('[data-close-modal]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const modal = btn.closest('.modal-container');
        if (modal) closeModal(modal.id);
      });
    });

    // Close on backdrop click
    document.querySelectorAll('.modal-container').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeModal(modal.id);
        }
      });
    });

    // Close on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal-container:not(.hidden)').forEach(modal => {
          closeModal(modal.id);
        });
        closeLightbox();
        closeMobileDrawer();
      }
    });

    // Drag and Drop File Upload
    initFileUploader();
  }

  function initFileUploader() {
    setupUploader('blueprint-dropzone', 'blueprint-file-input', 'blueprint-file-list');
    setupUploader('order-page-dropzone', 'order-page-file-input', 'order-page-file-list');
  }

  function setupUploader(dropzoneId, inputId, listId) {
    const dropzone = document.getElementById(dropzoneId);
    const fileInput = document.getElementById(inputId);
    const fileListContainer = document.getElementById(listId);

    if (!fileInput) return;

    if (dropzone && dropzone !== fileInput) {
      dropzone.addEventListener('click', (e) => {
        if (e.target !== fileInput) {
          fileInput.click();
        }
      });

      ['dragenter', 'dragover'].forEach(eventName => {
        dropzone.addEventListener(eventName, (e) => {
          e.preventDefault();
          e.stopPropagation();
          dropzone.classList.add('border-amber-500', 'bg-amber-500/10');
        });
      });

      ['dragleave', 'drop'].forEach(eventName => {
        dropzone.addEventListener(eventName, (e) => {
          e.preventDefault();
          e.stopPropagation();
          dropzone.classList.remove('border-amber-500', 'bg-amber-500/10');
        });
      });

      dropzone.addEventListener('drop', (e) => {
        const dt = e.dataTransfer;
        if (dt && dt.files && dt.files.length) {
          handleFiles(dt.files);
        }
      });
    }

    fileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files.length) {
        handleFiles(e.target.files);
      }
    });

    function handleFiles(files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.size > 50 * 1024 * 1024) {
          showToast(`Файл "${file.name}" превышает 50 МБ`, 'error');
          continue;
        }
        state.attachedFiles.push(file);
      }
      renderFileList();
      showToast(`Прикреплено файлов: ${state.attachedFiles.length}`, 'success');
    }

    function renderFileList() {
      if (!fileListContainer) return;
      fileListContainer.innerHTML = '';

      state.attachedFiles.forEach((file, index) => {
        const item = document.createElement('div');
        item.className = 'flex items-center justify-between p-2.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-slate-200 mt-1';
        
        const sizeFormatted = (file.size / (1024 * 1024)).toFixed(2) + ' МБ';
        item.innerHTML = `
          <div class="flex items-center space-x-2 truncate">
            <svg class="w-4 h-4 text-amber-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd"/>
            </svg>
            <span class="truncate font-medium">${file.name}</span>
            <span class="text-slate-400 text-[11px]">(${sizeFormatted})</span>
          </div>
          <button type="button" data-file-remove="${index}" class="text-red-400 hover:text-red-300 ml-2 font-bold px-1.5 py-0.5 rounded hover:bg-slate-800">
            &times;
          </button>
        `;
        fileListContainer.appendChild(item);
      });

      fileListContainer.querySelectorAll('[data-file-remove]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const idx = parseInt(btn.getAttribute('data-file-remove'), 10);
          state.attachedFiles.splice(idx, 1);
          renderFileList();
        });
      });
    }
  }

  // Smart Search for GOST Tables
  function initGostSearch() {
    const searchInput = document.getElementById('gost-search-input');
    const tableBody = document.getElementById('gost-table-body');
    const matchCountEl = document.getElementById('gost-match-count');
    const filterPills = document.querySelectorAll('[data-gost-filter]');

    if (!searchInput || !tableBody) return;

    const rows = Array.from(tableBody.querySelectorAll('tr'));
    const totalRows = rows.length;

    function applyFilter(query) {
      const q = query.trim().toLowerCase();
      let matches = 0;

      rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        if (!q || text.includes(q)) {
          row.style.display = '';
          matches++;
        } else {
          row.style.display = 'none';
        }
      });

      if (matchCountEl) {
        matchCountEl.textContent = `Показано: ${matches} из ${totalRows} позиций`;
      }
    }

    searchInput.addEventListener('input', (e) => {
      applyFilter(e.target.value);
    });

    filterPills.forEach(pill => {
      pill.addEventListener('click', (e) => {
        e.preventDefault();
        const filterVal = pill.getAttribute('data-gost-filter');
        searchInput.value = filterVal;
        applyFilter(filterVal);
      });
    });
  }

  // Steel Matrix Filter
  function initSteelsystFilter() {
    const filterBtns = document.querySelectorAll('[data-steel-category]');
    const searchInput = document.getElementById('steelsyst-search');
    const steelCards = document.querySelectorAll('.steel-grade-card');

    if (!steelCards.length) return;

    function runFilter() {
      const activeBtn = document.querySelector('[data-steel-category].active-cat');
      const cat = activeBtn ? activeBtn.getAttribute('data-steel-category') : 'all';
      const q = searchInput ? searchInput.value.trim().toLowerCase() : '';

      steelCards.forEach(card => {
        const cardCat = card.getAttribute('data-category') || '';
        const cardText = card.textContent.toLowerCase();
        const matchCat = (cat === 'all' || cardCat.includes(cat));
        const matchQuery = (!q || cardText.includes(q));

        if (matchCat && matchQuery) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    }

    filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        filterBtns.forEach(b => {
          b.classList.remove('active-cat', 'bg-laser-500', 'text-slate-950', 'font-bold');
          b.classList.add('bg-industrial-900', 'text-slate-300');
        });
        btn.classList.add('active-cat', 'bg-laser-500', 'text-slate-950', 'font-bold');
        btn.classList.remove('bg-industrial-900', 'text-slate-300');
        runFilter();
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', runFilter);
    }
  }

  // Product Catalog Tabs & Lightbox
  function initProductCatalog() {
    const tabBtns = document.querySelectorAll('[data-product-tab]');
    const productItems = document.querySelectorAll('.product-grid-item');

    if (tabBtns.length) {
      tabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          tabBtns.forEach(b => {
            b.classList.remove('bg-laser-500', 'text-slate-950', 'font-bold');
            b.classList.add('bg-white', 'text-slate-700', 'border-slate-300');
          });
          btn.classList.add('bg-laser-500', 'text-slate-950', 'font-bold');
          btn.classList.remove('bg-white', 'text-slate-700', 'border-slate-300');

          const category = btn.getAttribute('data-product-tab');
          productItems.forEach(item => {
            const itemCat = item.getAttribute('data-category');
            if (category === 'all' || itemCat === category) {
              item.style.display = '';
            } else {
              item.style.display = 'none';
            }
          });
        });
      });
    }

    // Lightbox items
    const zoomableElements = document.querySelectorAll('[data-lightbox-src]');
    if (zoomableElements.length) {
      state.lightbox.items = Array.from(zoomableElements).map(el => ({
        src: el.getAttribute('data-lightbox-src'),
        title: el.getAttribute('data-lightbox-title') || '',
        specs: el.getAttribute('data-lightbox-specs') || ''
      }));

      zoomableElements.forEach((el, index) => {
        el.addEventListener('click', (e) => {
          e.preventDefault();
          openLightbox(index);
        });
      });
    }
  }

  function openLightbox(index) {
    state.lightbox.currentIndex = index;
    const modal = document.getElementById('lightbox-modal');
    if (!modal) return;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.classList.add('overflow-hidden');

    updateLightboxContent();
  }

  function updateLightboxContent() {
    const item = state.lightbox.items[state.lightbox.currentIndex];
    if (!item) return;

    const img = document.getElementById('lightbox-img');
    const title = document.getElementById('lightbox-title');
    const specs = document.getElementById('lightbox-specs');

    if (img) img.src = item.src;
    if (title) title.textContent = item.title;
    if (specs) specs.textContent = item.specs;
  }

  function closeLightbox() {
    const modal = document.getElementById('lightbox-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.classList.remove('overflow-hidden');
  }

  function initLightboxControls() {
    const btnClose = document.getElementById('lightbox-close');
    const btnPrev = document.getElementById('lightbox-prev');
    const btnNext = document.getElementById('lightbox-next');

    if (btnClose) btnClose.addEventListener('click', closeLightbox);

    if (btnPrev) {
      btnPrev.addEventListener('click', () => {
        state.lightbox.currentIndex = (state.lightbox.currentIndex - 1 + state.lightbox.items.length) % state.lightbox.items.length;
        updateLightboxContent();
      });
    }

    if (btnNext) {
      btnNext.addEventListener('click', () => {
        state.lightbox.currentIndex = (state.lightbox.currentIndex + 1) % state.lightbox.items.length;
        updateLightboxContent();
      });
    }
  }

  // Mobile Drawer Navigation
  function initMobileMenu() {
    const btnOpen = document.getElementById('mobile-menu-btn');
    const drawer = document.getElementById('mobile-drawer');
    const backdrop = document.getElementById('mobile-backdrop');
    const btnClose = document.getElementById('mobile-drawer-close');

    if (!btnOpen || !drawer) return;

    function openDrawer() {
      drawer.classList.remove('translate-x-full');
      drawer.classList.add('translate-x-0');
      if (backdrop) backdrop.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    }

    function closeDrawer() {
      drawer.classList.add('translate-x-full');
      drawer.classList.remove('translate-x-0');
      if (backdrop) backdrop.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }

    btnOpen.addEventListener('click', openDrawer);
    if (btnClose) btnClose.addEventListener('click', closeDrawer);
    if (backdrop) backdrop.addEventListener('click', closeDrawer);

    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeDrawer);
    });
  }

  function closeMobileDrawer() {
    const drawer = document.getElementById('mobile-drawer');
    const backdrop = document.getElementById('mobile-backdrop');
    if (drawer) {
      drawer.classList.add('translate-x-full');
      drawer.classList.remove('translate-x-0');
    }
    if (backdrop) backdrop.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  // Floating Actions & Scroll-to-Top
  function initFloatingActions() {
    const btns = document.querySelectorAll('#back-to-top-btn, #mobile-back-to-top');

    window.addEventListener('scroll', () => {
      const show = window.scrollY > 400;
      btns.forEach(b => {
        if (show) {
          b.classList.remove('opacity-0', 'pointer-events-none');
        } else {
          b.classList.add('opacity-0', 'pointer-events-none');
        }
      });
    }, { passive: true });

    btns.forEach(b => {
      b.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });
  }

  // Form Submission Handling
  function initFormHandlers() {
    document.querySelectorAll('form[data-ajax-form]').forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn ? submitBtn.innerHTML : 'Отправить';

        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = `
            <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-current inline" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Отправка заявки...
          `;
        }

        setTimeout(() => {
          showToast('Заявка успешно отправлена! Инженер свяжется с вами в течение 15 минут.', 'success');
          form.reset();
          state.attachedFiles = [];
          const fileList = document.getElementById('blueprint-file-list');
          if (fileList) fileList.innerHTML = '';

          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
          }

          const modal = form.closest('.modal-container');
          if (modal) {
            setTimeout(() => closeModal(modal.id), 1200);
          }
        }, 800);
      });
    });
  }

  // Lightweight Toast Notifications
  function showToast(message, type = 'info') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'fixed bottom-5 right-5 z-50 flex flex-col space-y-2 max-w-sm';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    const bgColor = type === 'success' ? 'bg-emerald-600' : type === 'error' ? 'bg-red-600' : 'bg-industrial-900 border border-laser-500';
    toast.className = `${bgColor} text-white text-sm px-4 py-3 rounded-lg shadow-industrial-lg flex items-center justify-between space-x-3 transition-opacity duration-300`;
    
    toast.innerHTML = `
      <span>${message}</span>
      <button class="text-white hover:text-slate-200 font-bold ml-2">&times;</button>
    `;

    toast.querySelector('button').addEventListener('click', () => {
      toast.remove();
    });

    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('opacity-0');
      setTimeout(() => toast.remove(), 300);
    }, 4500);
  }

  // Smooth Scroll for in-page anchors
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#' || !href) return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
          closeMobileDrawer();
        }
      });
    });

    if (window.location.hash) {
      setTimeout(() => {
        const el = document.querySelector(window.location.hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  }

  // DOM Content Loaded Initializer
  document.addEventListener('DOMContentLoaded', () => {
    initCalculator();
    initModals();
    initGostSearch();
    initSteelsystFilter();
    initProductCatalog();
    initLightboxControls();
    initMobileMenu();
    initFloatingActions();
    initFormHandlers();
    initSmoothScroll();
  });
})();

