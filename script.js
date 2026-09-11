/* ============================================================
   SCRIPT.JS: Sistema Dupla Camada x Strawberry Design System
   - Official Strawberry Ambient Grid Canvas Wave Engine
   - Strawberry FAQ Accordion Toggle Controller
   - Reveal on Scroll (Intersection Observer)
   - Interactive Browser Chrome Tabs
   - Smooth Navigation & Zero Console Errors
============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  


  /* ---------- 1. AMBIENT GRID CANVAS (STRAWBERRY OFFICIAL) ---------- */
  const canvas = document.getElementById('ambientGridCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
    if (ctx) {
      const colors = [
        { color: 'rgba(255, 255, 255, 0.98)', weight: 35 }, /* Branco puro brilhante */
        { color: 'rgba(52, 211, 153, 0.35)', weight: 25 },  /* Esmeralda suave luminoso */
        { color: 'rgba(16, 185, 129, 0.25)', weight: 20 },  /* Mint translúcido */
        { color: 'rgba(240, 253, 244, 0.90)', weight: 20 }  /* Crystalline white-green */
      ];

      const state = {
        grid: [],
        cols: 0,
        rows: 0,
        size: 0,
        time: 0,
        speed: 0.012,
        density: 28,
        frameId: 0,
        inView: true
      };

      function getRandomColorIndex() {
        const total = colors.reduce((acc, c) => acc + c.weight, 0);
        let r = Math.random() * total;
        for (let i = 0; i < colors.length; i++) {
          if (r < colors[i].weight) return i;
          r -= colors[i].weight;
        }
        return 0;
      }

      function resize() {
        const parent = canvas.parentElement;
        if (!parent) return;
        const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
        const w = parent.clientWidth;
        const h = parent.clientHeight;
        if (w === 0 || h === 0) return;

        canvas.width = w * dpr;
        canvas.height = h * dpr;
        canvas.style.width = w + 'px';
        canvas.style.height = h + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        const isMobile = w < 640;
        state.density = isMobile ? 18 : 28;
        state.speed = isMobile ? 0.016 : 0.012;
        state.size = Math.min(w, h) / state.density;
        state.cols = Math.ceil(w / state.size) + 1;
        state.rows = Math.ceil(h / state.size) + 1;

        const total = state.cols * state.rows;
        state.grid = new Array(total);
        for (let i = 0; i < total; i++) {
          const rand = Math.random();
          let shape = 'square';
          if (rand > 0.6) shape = 'circle';
          else if (rand > 0.3) shape = 'rhombus';
          state.grid[i] = {
            colorIndex: getRandomColorIndex(),
            shape: shape
          };
        }
      }

      /* Strawberry Wave Math Function */
      function wave(n, t, time, cx, cy) {
        return Math.sin((n / (cx * 2)) * 10 + time) * Math.cos((t / (cy * 2)) * 5 + time * 0.5);
      }

      function draw() {
        const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
        const w = canvas.width / dpr;
        const h = canvas.height / dpr;
        const cx = w / 2;
        const cy = h / 2;
        const o = state.size;
        const half = o / 2;

        ctx.clearRect(0, 0, w, h);

        let idx = 0;
        for (let c = 0; c < state.cols; c++) {
          for (let r = 0; r < state.rows; r++) {
            const cell = state.grid[idx++];
            if (!cell) continue;

            const posX = c * o;
            const posY = r * o;
            const val = (wave(posX, posY, state.time, cx, cy) + 1) / 2;
            const clamped = val < 0.2 ? 0 : val > 0.8 ? 1 : (val - 0.2) / 0.6;
            const smooth = clamped * clamped * (3 - 2 * clamped);
            const size = o * 0.1 + o * 0.75 * smooth;

            if (size < 0.5) continue;

            ctx.fillStyle = colors[cell.colorIndex].color;
            const midX = posX + half;
            const midY = posY + half;

            if (cell.shape === 'square') {
              ctx.fillRect(posX + (o - size) / 2, posY + (o - size) / 2, size, size);
            } else if (cell.shape === 'rhombus') {
              ctx.beginPath();
              const z = size * 0.4 * 1.414;
              ctx.moveTo(midX, midY - z);
              ctx.lineTo(midX + z, midY);
              ctx.lineTo(midX, midY + z);
              ctx.lineTo(midX - z, midY);
              ctx.closePath();
              ctx.fill();
            } else {
              ctx.beginPath();
              ctx.arc(midX, midY, size * 0.45, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }

      function loop() {
        if (state.inView) {
          state.time += state.speed;
          draw();
        }
        state.frameId = requestAnimationFrame(loop);
      }

      resize();
      loop();
      window.addEventListener('resize', resize, { passive: true });

      const observer = new IntersectionObserver(([entry]) => {
        state.inView = entry.isIntersecting;
      }, { threshold: 0.05 });
      observer.observe(canvas);
    }
  }

  /* ---------- 2. FAQ ACCORDION TOGGLE (STRAWBERRY OFFICIAL) ---------- */
  const faqItems = document.querySelectorAll('.accordion .item');
  faqItems.forEach((item) => {
    const trigger = item.querySelector('.trigger');
    const answerGrid = item.querySelector('.answer-grid');
    const userBubble = item.querySelector('.bubble-user');

    if (!trigger || !answerGrid) return;

    trigger.addEventListener('click', () => {
      const isCurrentlyOpen = trigger.getAttribute('aria-expanded') === 'true';

      if (isCurrentlyOpen) {
        trigger.setAttribute('aria-expanded', 'false');
        answerGrid.classList.remove('open');
        answerGrid.setAttribute('aria-hidden', 'true');
        if (userBubble) userBubble.classList.remove('bubble-user-open');
      } else {
        trigger.setAttribute('aria-expanded', 'true');
        answerGrid.classList.add('open');
        answerGrid.setAttribute('aria-hidden', 'false');
        if (userBubble) {
          /* Smooth staggered reveal matching Strawberry's cubic-bezier */
          setTimeout(() => userBubble.classList.add('bubble-user-open'), 40);
        }
      }
    });
  });

  /* ---------- 3. REVEAL ON SCROLL ---------- */
  const revealEls = document.querySelectorAll('.reveal, .vtl-item--anim');
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );
  revealEls.forEach((el) => revealObserver.observe(el));

  /* ---------- 4. HERO ENTRANCE ---------- */
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    setTimeout(() => heroContent.classList.add('visible'), 80);
  }

  
  /* ---------- 5. HERO BROWSER TABS CONTROLLER (AGENDA, ENTRADA, RETORNO) ---------- */
  const heroTabs = document.querySelectorAll('.browser-tab[data-hero-tab]');
  const heroPanels = document.querySelectorAll('.hero-tab-panel');

  heroTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-hero-tab');
      heroTabs.forEach(t => t.classList.remove('browser-tab--active'));
      heroPanels.forEach(p => p.classList.remove('active'));

      tab.classList.add('browser-tab--active');
      const targetPanel = document.getElementById('hero-panel-' + target);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  /* ---------- 8. CRM SHOWCASE 4-TABS CONTROLLER ---------- */
  const crmNavBtns = document.querySelectorAll('.crm-nav-btn');
  const crmPanels = document.querySelectorAll('.crm-tab-panel');

  crmNavBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      crmNavBtns.forEach(b => b.classList.remove('active'));
      crmPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPanel = document.getElementById('crm-tab-' + targetTab);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });


  /* ---------- 6. SMOOTH SCROLL ANCHORS ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 30;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ---------- 7. STAGGER TRANSITIONS ---------- */
  document.querySelectorAll('.status-ribbon').forEach((ribbon, i) => {
    ribbon.style.transitionDelay = `${i * 0.05}s`;
  });

  document.querySelectorAll('.command-tile').forEach((tile, i) => {
    tile.style.transitionDelay = `${i * 0.06}s`;
  });

  /* ---------- 9. DYNAMIC REAL-TIME DATES ENGINE & TODAY OFFER ---------- */
  function initDynamicDates() {
    try {
      const now = new Date();
      const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
      const curMonth = months[now.getMonth()];
      const nextMonth = months[(now.getMonth() + 1) % 12];

      const formatD = (d) => String(d.getDate()).padStart(2, '0');
      const formatM = (d) => String(d.getMonth() + 1).padStart(2, '0');

      // Popula a data de validade da oferta especial no PIX
      const todayShort = `${formatD(now)}/${formatM(now)}`;
      const todayFull = `${formatD(now)} de ${curMonth}`;
      document.querySelectorAll('.dynamic-today-short').forEach(el => el.textContent = todayShort);
      document.querySelectorAll('.dynamic-today-full').forEach(el => el.textContent = todayFull);

      const tabLabel = document.getElementById('hero-agenda-tab-label');
      if (tabLabel) {
        tabLabel.textContent = `Agenda Ativa: ${curMonth} e ${nextMonth}`;
      }

      // Monday calculation
      const dayOfWeek = now.getDay(); // 0 is Sun, 1 is Mon...
      const diffToMonday = dayOfWeek === 0 ? 1 : 1 - dayOfWeek;
      const monday = new Date(now);
      monday.setDate(now.getDate() + diffToMonday);

      const friday = new Date(monday);
      friday.setDate(monday.getDate() + 4);

      const weekLabel = document.getElementById('agenda-week-label');
      if (weekLabel) {
        const monD = monday.getDate();
        const friD = friday.getDate();
        const monthStr = monday.getMonth() === friday.getMonth() 
          ? months[monday.getMonth()] 
          : `${months[monday.getMonth()]} / ${months[friday.getMonth()]}`;
        weekLabel.innerHTML = `Grade da Semana (${monD} a ${friD} de ${monthStr}) · Consultório <span class="dynamic-city">Matão e região</span>`;
      }

      const dayNames = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'];
      const dayEls = document.querySelectorAll('.agenda-day-name[data-day]');
      dayEls.forEach((el) => {
        const idx = parseInt(el.getAttribute('data-day'), 10);
        const dayDate = new Date(monday);
        dayDate.setDate(monday.getDate() + idx);

        const isToday = now.getDate() === dayDate.getDate() && 
                        now.getMonth() === dayDate.getMonth() && 
                        now.getFullYear() === dayDate.getFullYear();

        const dateStr = `${dayNames[idx]} · ${formatD(dayDate)}/${formatM(dayDate)}`;
        if (isToday) {
          el.innerHTML = `${dateStr} <span class="agenda-today-pill">Hoje</span>`;
          const col = el.closest('.agenda-day-col');
          if (col) col.classList.add('agenda-day-col--today');
        } else {
          el.textContent = dateStr;
        }

        // Atualiza botões do seletor mobile de dias
        const switcherDateEl = document.querySelector(`[data-switcher-day="${idx}"]`);
        if (switcherDateEl) {
          switcherDateEl.textContent = isToday ? 'Hoje' : `${formatD(dayDate)}/${formatM(dayDate)}`;
        }
        const switcherBtn = document.querySelector(`.day-switcher-btn[data-day-index="${idx}"]`);
        if (switcherBtn) {
          if (isToday) {
            switcherBtn.classList.add('day-switcher-btn--today', 'active');
          } else {
            switcherBtn.classList.remove('day-switcher-btn--today', 'active');
          }
        }
      });
    } catch (e) {
      console.error('Error initializing dynamic dates:', e);
    }
  }
  initDynamicDates();

  /* ---------- 10. DYNAMIC CITY & REGIONAL ENGINE ---------- */
  function initDynamicCity() {
    // Clusters de cidades vizinhas para prova social do Google
    const regionalClusters = {
      'matão': ['Araraquara', 'São Carlos', 'Taquaritinga'],
      'matao': ['Araraquara', 'São Carlos', 'Taquaritinga'],
      'araraquara': ['São Carlos', 'Matão', 'Taquaritinga'],
      'são carlos': ['Araraquara', 'Matão', 'Ibaté'],
      'sao carlos': ['Araraquara', 'Matão', 'Ibaté'],
      'ribeirão preto': ['Sertãozinho', 'Cravinhos', 'Jardinópolis'],
      'ribeirao preto': ['Sertãozinho', 'Cravinhos', 'Jardinópolis'],
      'taquaritinga': ['Matão', 'Jaboticabal', 'Monte Alto']
    };

    function applyCity(cityName) {
      const city = (cityName || 'Matão').trim();
      const cityKey = city.toLowerCase();

      // REGRA: Em toda a página, manter APENAS a localização EXATA do lead (ex: "Matão")
      document.querySelectorAll('.dynamic-city').forEach(el => {
        el.textContent = city;
      });

      document.querySelectorAll('.dynamic-city-full').forEach(el => {
        el.textContent = city;
      });

      document.querySelectorAll('.dynamic-city-badge').forEach(el => {
        el.textContent = city;
      });

      // REGRA: O ÚNICO lugar que varia para cidades vizinhas da região é nas provas sociais do Google.
      // E quando a cidade atual for Matão, a cidade dos depoimentos NÃO PODE ser Matão (devem ser outras).
      let reviewCities = regionalClusters[cityKey];
      if (!reviewCities || !reviewCities.length) {
        const fallbacks = ['Araraquara', 'São Carlos', 'Taquaritinga', 'Ribeirão Preto'];
        reviewCities = fallbacks.filter(c => c.toLowerCase() !== cityKey);
      } else {
        // Garante que a cidade do lead NUNCA apareça nos depoimentos
        reviewCities = reviewCities.filter(c => c.toLowerCase() !== cityKey);
      }

      if (reviewCities.length < 3) {
        if (!reviewCities.includes('Araraquara') && cityKey !== 'araraquara') reviewCities.push('Araraquara');
        if (!reviewCities.includes('São Carlos') && cityKey !== 'são carlos' && cityKey !== 'sao carlos') reviewCities.push('São Carlos');
        if (!reviewCities.includes('Taquaritinga') && cityKey !== 'taquaritinga') reviewCities.push('Taquaritinga');
      }

      const reviewSpecs = document.querySelectorAll('.review-location-city');
      const specialities = [
        'Nutrição Clínica & Metabólica',
        'Nutrição Esportiva & Performance',
        'Saúde da Mulher & Fertilidade'
      ];

      reviewSpecs.forEach((el, i) => {
        const targetCity = reviewCities[i % reviewCities.length];
        const spec = specialities[i % specialities.length];
        el.textContent = `${spec} · ${targetCity}`;
      });
    }

    // Default: Matão (depoimentos em Araraquara, São Carlos e Taquaritinga)
    applyCity('Matão');

    // Geo-IP detection com cache em sessionStorage
    const cachedCity = sessionStorage.getItem('lead_user_city');
    if (cachedCity) {
      applyCity(cachedCity);
      return;
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);

    fetch('https://ipapi.co/json/', { signal: controller.signal })
      .then(res => res.json())
      .then(data => {
        clearTimeout(timeoutId);
        if (data && data.city) {
          sessionStorage.setItem('lead_user_city', data.city);
          applyCity(data.city);
        }
      })
      .catch(() => {
        // Fallback já ativo com elegância
      });
  }
  initDynamicCity();


  /* ---------- 11. MOBILE MOCKUPS TOUCH, SWIPE & AUTO-FOCUS CONTROLLER ---------- */
  function initMobileMockupNavigation() {
    // A. Hero Agenda: Seletor de dias e foco automático no dia atual com swipe tátil
    const agendaGrid = document.querySelector('.agenda-week-grid');
    const daySwitcherBtns = document.querySelectorAll('.day-switcher-btn');
    const agendaCols = document.querySelectorAll('.agenda-day-col');

    let currentHeroDayIdx = 2;

    function scrollHeroToColumn(index, smooth = true) {
      if (!agendaGrid || !agendaCols[index]) return;
      currentHeroDayIdx = Math.max(0, Math.min(index, agendaCols.length - 1));
      const col = agendaCols[currentHeroDayIdx];
      const targetLeft = col.offsetLeft - (agendaGrid.clientWidth - col.clientWidth) / 2;
      agendaGrid.scrollTo({ left: Math.max(0, targetLeft), behavior: smooth ? 'smooth' : 'auto' });
      
      daySwitcherBtns.forEach(btn => {
        btn.classList.toggle('active', parseInt(btn.getAttribute('data-day-index'), 10) === currentHeroDayIdx);
      });
    }

    function focusTodayColumn(smooth = false) {
      if (window.innerWidth > 820 || !agendaGrid) return;
      let todayIdx = -1;
      agendaCols.forEach((col, i) => {
        if (col.classList.contains('agenda-day-col--today')) todayIdx = i;
      });
      if (todayIdx === -1) todayIdx = 2; // Quarta-feira como fallback
      scrollHeroToColumn(todayIdx, smooth);
    }

    daySwitcherBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const idx = parseInt(btn.getAttribute('data-day-index'), 10);
        scrollHeroToColumn(idx, true);
      });
    });

    // Touch Swipe Gestures para Hero Agenda
    if (agendaGrid) {
      let touchStartX = 0;
      let touchStartY = 0;
      let touchStartTime = 0;

      agendaGrid.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        touchStartTime = Date.now();
      }, { passive: true });

      agendaGrid.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;
        const elapsedTime = Date.now() - touchStartTime;

        // Se o gesto foi predominantemente horizontal
        if (Math.abs(deltaX) > 35 && Math.abs(deltaX) > Math.abs(deltaY) && elapsedTime < 600) {
          if (deltaX < 0) {
            // Deslizar para a esquerda -> próximo dia
            if (currentHeroDayIdx < agendaCols.length - 1) {
              scrollHeroToColumn(currentHeroDayIdx + 1, true);
            }
          } else {
            // Deslizar para a direita -> dia anterior
            if (currentHeroDayIdx > 0) {
              scrollHeroToColumn(currentHeroDayIdx - 1, true);
            }
          }
        }
      }, { passive: true });

      let scrollTimer = null;
      agendaGrid.addEventListener('scroll', () => {
        if (window.innerWidth > 820) return;
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
          const gridCenter = agendaGrid.scrollLeft + agendaGrid.clientWidth / 2;
          let closestIdx = 0;
          let minDist = Infinity;
          agendaCols.forEach((col, i) => {
            const colCenter = col.offsetLeft + col.clientWidth / 2;
            const dist = Math.abs(gridCenter - colCenter);
            if (dist < minDist) {
              minDist = dist;
              closestIdx = i;
            }
          });
          currentHeroDayIdx = closestIdx;
          daySwitcherBtns.forEach(btn => {
            btn.classList.toggle('active', parseInt(btn.getAttribute('data-day-index'), 10) === closestIdx);
          });
        }, 50);
      }, { passive: true });
    }

    // B. CRM Kanban: Seletor das 4 fases no Mobile com Swipe Tátil
    const kanbanBoard = document.querySelector('.crm-kanban-board');
    const kanbanSwitchBtns = document.querySelectorAll('.kanban-switch-btn');
    const kanbanCols = document.querySelectorAll('.crm-col');

    let currentKanbanIdx = 0;

    function scrollKanbanToColumn(index, smooth = true) {
      if (!kanbanBoard || !kanbanCols[index]) return;
      currentKanbanIdx = Math.max(0, Math.min(index, kanbanCols.length - 1));
      const col = kanbanCols[currentKanbanIdx];
      const targetLeft = col.offsetLeft - (kanbanBoard.clientWidth - col.clientWidth) / 2;
      kanbanBoard.scrollTo({ left: Math.max(0, targetLeft), behavior: smooth ? 'smooth' : 'auto' });
      
      kanbanSwitchBtns.forEach(btn => {
        btn.classList.toggle('active', parseInt(btn.getAttribute('data-col-index'), 10) === currentKanbanIdx);
      });
    }

    kanbanSwitchBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const idx = parseInt(btn.getAttribute('data-col-index'), 10);
        scrollKanbanToColumn(idx, true);
      });
    });

    if (kanbanBoard) {
      let kTouchStartX = 0;
      let kTouchStartY = 0;
      let kTouchStartTime = 0;

      kanbanBoard.addEventListener('touchstart', (e) => {
        kTouchStartX = e.touches[0].clientX;
        kTouchStartY = e.touches[0].clientY;
        kTouchStartTime = Date.now();
      }, { passive: true });

      kanbanBoard.addEventListener('touchend', (e) => {
        const kTouchEndX = e.changedTouches[0].clientX;
        const kTouchEndY = e.changedTouches[0].clientY;
        const deltaX = kTouchEndX - kTouchStartX;
        const deltaY = kTouchEndY - kTouchStartY;
        const elapsed = Date.now() - kTouchStartTime;

        if (Math.abs(deltaX) > 35 && Math.abs(deltaX) > Math.abs(deltaY) && elapsed < 600) {
          if (deltaX < 0) {
            if (currentKanbanIdx < kanbanCols.length - 1) {
              scrollKanbanToColumn(currentKanbanIdx + 1, true);
            }
          } else {
            if (currentKanbanIdx > 0) {
              scrollKanbanToColumn(currentKanbanIdx - 1, true);
            }
          }
        }
      }, { passive: true });

      let kanbanScrollTimer = null;
      kanbanBoard.addEventListener('scroll', () => {
        if (window.innerWidth > 820) return;
        clearTimeout(kanbanScrollTimer);
        kanbanScrollTimer = setTimeout(() => {
          const boardCenter = kanbanBoard.scrollLeft + kanbanBoard.clientWidth / 2;
          let closestIdx = 0;
          let minDist = Infinity;
          kanbanCols.forEach((col, i) => {
            const colCenter = col.offsetLeft + col.clientWidth / 2;
            const dist = Math.abs(boardCenter - colCenter);
            if (dist < minDist) {
              minDist = dist;
              closestIdx = i;
            }
          });
          currentKanbanIdx = closestIdx;
          kanbanSwitchBtns.forEach(btn => {
            btn.classList.toggle('active', parseInt(btn.getAttribute('data-col-index'), 10) === closestIdx);
          });
        }, 50);
      }, { passive: true });
    }

    // Foco inicial imediato no dia atual após montagem do DOM
    setTimeout(() => {
      focusTodayColumn(false);
    }, 150);

    // Re-foca ao trocar para a aba agenda na Hero
    document.querySelectorAll('[data-hero-tab="agenda"]').forEach(tab => {
      tab.addEventListener('click', () => {
        setTimeout(() => focusTodayColumn(true), 100);
      });
    });

    window.addEventListener('resize', () => {
      clearTimeout(window._mockupResizeTimer);
      window._mockupResizeTimer = setTimeout(() => {
        if (window.innerWidth <= 820) {
          focusTodayColumn(false);
        }
      }, 150);
    });
  }

  initMobileMockupNavigation();


  /* ---------- 12. JOURNEY STEPPER INTERACTIVE CONTROLLER ---------- */
  function initJourneyStepper() {
    const track = document.getElementById('journeyNavTrack');
    const nodes = document.querySelectorAll('.journey-step-node');
    const panels = document.querySelectorAll('.journey-stage-panel');
    const dots = document.querySelectorAll('.journey-dot-btn');
    const prevBtn = document.getElementById('journeyPrevBtn');
    const nextBtn = document.getElementById('journeyNextBtn');
    const fill = document.getElementById('journeyProgressFill');

    if (!nodes.length || !panels.length) return;

    let currentStep = 0;
    const totalSteps = nodes.length;

    function goToStep(idx) {
      if (idx < 0) idx = 0;
      if (idx >= totalSteps) idx = totalSteps - 1;
      currentStep = idx;

      nodes.forEach((n, i) => {
        n.classList.toggle('active', i === currentStep);
      });

      panels.forEach((p, i) => {
        p.classList.toggle('active', i === currentStep);
      });

      dots.forEach((d, i) => {
        d.classList.toggle('active', i === currentStep);
      });

      if (fill && track) {
        const percent = (currentStep / (totalSteps - 1)) * 100;
        fill.style.width = `calc(${percent}% - 20px)`;
      }

      if (window.innerWidth <= 900 && nodes[currentStep] && track) {
        const activeNode = nodes[currentStep];
        const scrollLeft = activeNode.offsetLeft - (track.clientWidth - activeNode.clientWidth) / 2;
        track.scrollTo({ left: Math.max(0, scrollLeft), behavior: 'smooth' });
      }
    }

    nodes.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const step = parseInt(btn.getAttribute('data-step'), 10);
        goToStep(step);
      });
    });

    dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        e.preventDefault();
        const step = parseInt(dot.getAttribute('data-step'), 10);
        goToStep(step);
      });
    });

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        goToStep(currentStep === 0 ? totalSteps - 1 : currentStep - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        goToStep((currentStep + 1) % totalSteps);
      });
    }

    const showcase = document.getElementById('journeyStageShowcase');
    if (showcase) {
      let touchStartX = 0;
      showcase.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });
      showcase.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        const diff = touchEndX - touchStartX;
        if (Math.abs(diff) > 45) {
          if (diff < 0) {
            goToStep((currentStep + 1) % totalSteps);
          } else {
            goToStep(currentStep === 0 ? totalSteps - 1 : currentStep - 1);
          }
        }
      }, { passive: true });
    }

    goToStep(0);
  }

  initJourneyStepper();

});