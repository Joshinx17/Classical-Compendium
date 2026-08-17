/**
 * The Classical Compendium — Composer Page Template Engine
 * Reads the composer ID from document.body.dataset.composer,
 * fetches data from composers.js, injects the HTML, and runs player logic.
 */

'use strict';

function init() {
  const composerId = document.body.dataset.composer;
  const composer = COMPOSERS.find(c => c.id === composerId);

  if (!composer) {
    document.body.innerHTML = '<h1>Composer not found</h1><a href="../index.html">Go back</a>';
    return;
  }

  renderPage(composer);
  initPlayer(composer.tracks);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

function renderPage(composer) {
  const formatText = (textArray) => textArray.map(p => `<p>${p}</p>`).join('');

  const roadmapHtml = composer.roadmap.map(step => `
    <div class="roadmap-step">
      <span class="roadmap-num">${step.num}</span>
      <div>
        <strong>${step.title}</strong>
        <p>${step.desc}</p>
      </div>
    </div>
  `).join('');

  const factsHtml = composer.aboutFacts.map(fact => `
    <div class="fact-card">
      <span class="fact-number">${fact.num}</span>
      <span class="fact-label">${fact.label}</span>
    </div>
  `).join('');

  const sidebarHtml = `
    <!-- Sidebar Navigation -->
    <div class="sidebar-overlay" id="sidebarOverlay" hidden>
      <nav class="composer-sidebar">
        <div class="sidebar-header">
          <span class="sidebar-logo">The Classical Compendium</span>
          <button class="sidebar-close" id="btnCloseSidebar" aria-label="Close sidebar">✕</button>
        </div>
        <ul class="sidebar-list">
          ${COMPOSERS.map(c => `
            <li>
              <a href="${c.id === composer.id ? '#' : c.pageFile}" class="sidebar-link ${c.id === composer.id ? 'active' : ''}">
                <div class="sidebar-link-text">
                  <span class="sidebar-link-name">${c.shortName}</span>
                  <span class="sidebar-link-era">${c.era}</span>
                </div>
              </a>
            </li>
          `).join('')}
        </ul>
        <div class="sidebar-footer">
          <a href="../index.html" class="sidebar-home-link">← Back to Home</a>
        </div>
      </nav>
    </div>
  `;

  document.body.innerHTML = `
    ${sidebarHtml}

    <header class="site-header" id="site-header" role="banner">
      <div class="header-inner">
        <button class="hamburger-btn" id="btnOpenSidebar" aria-label="Open sidebar">
          <span></span><span></span><span></span>
        </button>
        <a href="../index.html" class="logo" aria-label="Home">THE CLASSICAL COMPENDIUM.</a>
        <nav class="main-nav" aria-label="Main navigation">
          <ul>
            <li><a href="#intro" class="nav-link">Story</a></li>
            <li><a href="#beginner" class="nav-link">Beginner</a></li>
            <li><a href="#intermediate" class="nav-link">Intermediate</a></li>
            <li><a href="#deep" class="nav-link">Deep</a></li>
            <li><a href="#about" class="nav-link">Composer</a></li>
          </ul>
        </nav>
        <button class="btn-search" id="btnOpenSearch" aria-label="Open search" aria-haspopup="dialog">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <span>Search</span>
        </button>
        <button class="mobile-menu-toggle" id="mobileMenuToggle" aria-label="Toggle mobile menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>

    <section class="hero" id="hero" aria-label="Hero section">
      <div class="hero-content">
        <p class="hero-overline">${composer.heroOverline}</p>
        <h1 class="hero-title">${composer.heroTitle}<br /><em>${composer.heroTitleItalic}</em></h1>
        <p class="hero-subtitle">${composer.heroSubtitle}</p>
        <a href="#intro" class="btn-hero">Begin the Journey</a>
      </div>
      <div class="hero-monogram" aria-hidden="true">
        <svg viewBox="0 0 200 200" class="monogram-svg">
          <circle cx="100" cy="100" r="92" fill="none" stroke="currentColor" stroke-width="1"/>
          <circle cx="100" cy="100" r="84" fill="none" stroke="currentColor" stroke-width="0.4" stroke-dasharray="3 6"/>
          ${composer.monogram[0] ? `<text x="100" y="${composer.monogram[2] ? '88' : '100'}" text-anchor="middle" class="monogram-text monogram-initial">${composer.monogram[0]}</text>` : ''}
          ${composer.monogram[1] ? `<text x="100" y="${composer.monogram[2] ? '116' : '128'}" text-anchor="middle" class="monogram-text monogram-initial">${composer.monogram[1]}</text>` : ''}
          ${composer.monogram[2] ? `<text x="100" y="144" text-anchor="middle" class="monogram-text monogram-initial">${composer.monogram[2]}</text>` : ''}
        </svg>
      </div>
    </section>

    <section class="intro-section" id="intro" aria-labelledby="intro-heading">
      <div class="intro-inner">
        <div class="section-number" aria-hidden="true">01</div>
        <div class="intro-body">
          <h2 class="section-heading" id="intro-heading">${composer.introHeading.replace(composer.shortName, `<em>${composer.shortName}</em>`).replace(composer.name.split(' ').pop(), `<em>${composer.name.split(' ').pop()}</em>`)}</h2>
          <div class="intro-columns">
            <div class="intro-col">
              ${formatText(composer.introText)}
            </div>
            <div class="intro-col">
              <div class="roadmap">${roadmapHtml}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="level-section level-light" id="beginner" aria-labelledby="beginner-heading">
      <div class="level-header">
        <div class="level-meta">
          <span class="section-number" aria-hidden="true">02</span>
          <span class="level-badge level-badge--light">Level I</span>
        </div>
        <h2 class="section-heading" id="beginner-heading">Beginner<br /><em>${composer.name.split(' ').pop()}</em></h2>
        <p class="level-intro">Start here. These pieces are melodically rich, structurally clear, and emotionally immediate.</p>
      </div>
      <div class="track-grid" id="beginnerGrid" role="list" aria-label="Beginner tracks"></div>
    </section>

    <section class="level-section level-dark" id="intermediate" aria-labelledby="intermediate-heading">
      <div class="level-header">
        <div class="level-meta">
          <span class="section-number" aria-hidden="true">03</span>
          <span class="level-badge level-badge--dark">Level II</span>
        </div>
        <h2 class="section-heading" id="intermediate-heading">Intermediate<br /><em>${composer.name.split(' ').pop()}</em></h2>
        <p class="level-intro">You've heard the melody. Now hear the architecture. These works reveal structural genius.</p>
      </div>
      <div class="track-grid" id="intermediateGrid" role="list" aria-label="Intermediate tracks"></div>
    </section>

    <section class="level-section level-light" id="deep" aria-labelledby="deep-heading">
      <div class="level-header">
        <div class="level-meta">
          <span class="section-number" aria-hidden="true">04</span>
          <span class="level-badge level-badge--light">Level III</span>
        </div>
        <h2 class="section-heading" id="deep-heading">Deep<br /><em>${composer.name.split(' ').pop()}</em></h2>
        <p class="level-intro">Here, music becomes philosophy. These works represent the outer limit of achievement.</p>
      </div>
      <div class="track-grid" id="deepGrid" role="list" aria-label="Deep tracks"></div>
    </section>

    <section class="about-section" id="about" aria-labelledby="about-heading">
      <div class="about-inner">
        <div class="about-number" aria-hidden="true">05</div>
        <div class="about-body">
          <h2 class="section-heading" id="about-heading">${composer.name.replace(' ', '<br /><em>').replace(/$/, '</em>')}</h2>
          <div class="about-columns">
            <div class="about-col about-col--bio">
              ${formatText(composer.aboutBio)}
            </div>
            <div class="about-col about-col--facts">
              ${factsHtml}
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="site-footer" role="contentinfo">
      <div class="footer-inner">
        <div class="footer-brand">
          <span class="logo">THE CLASSICAL COMPENDIUM.</span>
          <p>A curated listening guide to classical music. All recordings are public domain, sourced from Wikimedia Commons.</p>
        </div>
        <div class="footer-links">
          <nav aria-label="Footer navigation">
            <a href="#beginner">Level I</a>
            <a href="#intermediate">Level II</a>
            <a href="#deep">Level III</a>
            <a href="#about">Composer</a>
          </nav>
          <p class="footer-copy">&copy; 2024 The Classical Compendium.</p>
        </div>
      </div>
    </footer>

    <audio id="audioPlayer" preload="none"></audio>

    <div class="player-bar" id="playerBar" aria-label="Audio player" role="region" aria-live="polite">
      <div class="player-inner">
        <div class="player-info">
          <div class="player-thumb" id="playerThumb" aria-hidden="true">
            <svg viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" rx="4" fill="#2a2620"/>
              <text x="20" y="26" text-anchor="middle" font-size="16" fill="#a67c3c" font-family="Cormorant Garamond, serif">♩</text>
            </svg>
          </div>
          <div class="player-track-text">
            <span class="player-title" id="playerTitle">Select a track</span>
            <span class="player-subtitle" id="playerSubtitle">—</span>
          </div>
        </div>

        <div class="player-center">
          <div class="player-controls" role="group" aria-label="Playback controls">
            <button class="ctrl-btn" id="btnPrev" aria-label="Previous track" title="Previous">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 6h2v12H6zm3.5 6 8.5 6V6z"/></svg>
            </button>
            <button class="ctrl-btn ctrl-play" id="btnPlay" aria-label="Play" title="Play / Pause">
              <svg class="icon-play" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
              <svg class="icon-pause" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style="display:none"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
            </button>
            <button class="ctrl-btn" id="btnNext" aria-label="Next track" title="Next">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 18l8.5-6L6 6v12zm2-8.14 5.5 2.14L8 14.14V9.86zM16 6h2v12h-2z"/></svg>
            </button>
          </div>
          <div class="player-progress-row">
            <span class="player-time" id="playerCurrentTime">0:00</span>
            <div class="progress-track" id="progressTrack" role="slider" aria-label="Seek" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" tabindex="0">
              <div class="progress-fill" id="progressFill"></div>
              <div class="progress-thumb" id="progressThumb"></div>
            </div>
            <span class="player-time" id="playerDuration">0:00</span>
          </div>
        </div>

        <div class="player-right">
          <div class="volume-group" aria-label="Volume control">
            <svg class="vol-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
            </svg>
            <input type="range" class="volume-slider" id="volumeSlider" min="0" max="1" step="0.01" value="0.8" aria-label="Volume" />
          </div>
        </div>
      </div>
    </div>

    <div class="search-overlay" id="searchOverlay" role="dialog" aria-modal="true" aria-label="Search tracks" hidden>
      <div class="search-modal">
        <div class="search-header">
          <label for="searchInput" class="search-label">Search Tracks</label>
          <button class="search-close" id="btnCloseSearch" aria-label="Close search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div class="search-input-wrap">
          <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input type="search" id="searchInput" class="search-field" placeholder="Search by title, or level…" autocomplete="off" spellcheck="false" />
        </div>
        <div class="search-results" id="searchResults" role="listbox" aria-label="Search results"></div>
        <p class="search-hint" id="searchHint">Type to search across all tracks</p>
      </div>
    </div>
  `;

  const nameParts = composer.name.split(' ');
  const lastName = nameParts.pop();
  const restName = nameParts.join(' ');
  document.getElementById('about-heading').innerHTML = `${restName}<br /><em>${lastName}</em>`;
}

function initPlayer(TRACKS) {
  /* ═══════════════════════════════════════════════════════════════════════════
     STATE
     ═══════════════════════════════════════════════════════════════════════════ */
  const state = {
    currentTrackId: null,
    isPlaying: false,
    isSeeking: false,
  };

  /* ═══════════════════════════════════════════════════════════════════════════
     DOM REFERENCES
     ═══════════════════════════════════════════════════════════════════════════ */
  const audio          = document.getElementById('audioPlayer');
  const playerBar      = document.getElementById('playerBar');
  const btnPlay        = document.getElementById('btnPlay');
  const btnPrev        = document.getElementById('btnPrev');
  const btnNext        = document.getElementById('btnNext');
  const playerTitle    = document.getElementById('playerTitle');
  const playerSubtitle = document.getElementById('playerSubtitle');
  const playerCurrentTime = document.getElementById('playerCurrentTime');
  const playerDuration    = document.getElementById('playerDuration');
  const progressFill   = document.getElementById('progressFill');
  const progressThumb  = document.getElementById('progressThumb');
  const progressTrack  = document.getElementById('progressTrack');
  const volumeSlider   = document.getElementById('volumeSlider');
  const iconPlay       = btnPlay.querySelector('.icon-play');
  const iconPause      = btnPlay.querySelector('.icon-pause');

  const searchOverlay  = document.getElementById('searchOverlay');
  const searchInput    = document.getElementById('searchInput');
  const searchResults  = document.getElementById('searchResults');
  const searchHint     = document.getElementById('searchHint');
  const btnOpenSearch  = document.getElementById('btnOpenSearch');
  const btnCloseSearch = document.getElementById('btnCloseSearch');

  const siteHeader     = document.getElementById('site-header');
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mainNav        = document.querySelector('.main-nav');
  
  const btnOpenSidebar = document.getElementById('btnOpenSidebar');
  const btnCloseSidebar = document.getElementById('btnCloseSidebar');
  const sidebarOverlay = document.getElementById('sidebarOverlay');

  /* ═══════════════════════════════════════════════════════════════════════════
     SIDEBAR LOGIC
     ═══════════════════════════════════════════════════════════════════════════ */
  btnOpenSidebar.addEventListener('click', () => {
    sidebarOverlay.removeAttribute('hidden');
    setTimeout(() => sidebarOverlay.classList.add('visible'), 10);
    document.body.style.overflow = 'hidden';
  });

  const closeSidebar = () => {
    sidebarOverlay.classList.remove('visible');
    setTimeout(() => sidebarOverlay.setAttribute('hidden', ''), 400); 
    document.body.style.overflow = '';
  };

  btnCloseSidebar.addEventListener('click', closeSidebar);
  sidebarOverlay.addEventListener('click', (e) => {
    if (e.target === sidebarOverlay) closeSidebar();
  });

  /* ═══════════════════════════════════════════════════════════════════════════
     UTILITIES
     ═══════════════════════════════════════════════════════════════════════════ */
  function formatTime(sec) {
    if (!isFinite(sec) || isNaN(sec)) return '0:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  }

  function getTrack(id) {
    return TRACKS.find(t => t.id === id);
  }

  function getCurrentIndex() {
    return TRACKS.findIndex(t => t.id === state.currentTrackId);
  }

  /* ═══════════════════════════════════════════════════════════════════════════
     DYNAMIC GRID RENDERING
     ═══════════════════════════════════════════════════════════════════════════ */
  function renderGrids() {
    const grids = {
      beginnerGrid:     TRACKS.filter(t => t.gridId === 'beginnerGrid'),
      intermediateGrid: TRACKS.filter(t => t.gridId === 'intermediateGrid'),
      deepGrid:         TRACKS.filter(t => t.gridId === 'deepGrid'),
    };

    Object.entries(grids).forEach(([gridId, tracks]) => {
      const container = document.getElementById(gridId);
      if (!container) return;
      tracks.forEach((track, localIdx) => {
        const card = createTrackCard(track, localIdx + 1);
        container.appendChild(card);
      });
    });
  }

  function createTrackCard(track, localNum) {
    const card = document.createElement('article');
    card.className = 'track-card';
    card.id = `track-card-${track.id}`;
    card.dataset.trackId = track.id;
    card.setAttribute('role', 'listitem');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `${track.title} — ${track.subtitle}`);

    card.innerHTML = `
      <div class="card-num">
        <span>${String(localNum).padStart(2, '0')}</span>
        <div class="playing-anim" aria-hidden="true">
          <div class="bar"></div><div class="bar"></div>
          <div class="bar"></div><div class="bar"></div>
        </div>
      </div>
      <h3 class="card-title">${escapeHtml(track.title)}</h3>
      <p class="card-subtitle">${escapeHtml(track.subtitle)}</p>
      <div class="card-footer">
        <span class="card-duration">${formatTime(track.durationSec)}</span>
        <button class="card-play-btn" aria-label="Play ${escapeHtml(track.title)}" data-track-id="${track.id}">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path class="icon-play-path" d="M8 5v14l11-7z"/>
            <path class="icon-pause-path" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" style="display:none"/>
          </svg>
        </button>
      </div>
    `;

    card.addEventListener('click', (e) => {
      if (!e.target.closest('.card-play-btn')) handleCardPlay(track.id);
    });

    const playBtn = card.querySelector('.card-play-btn');
    playBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      handleCardPlay(track.id);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleCardPlay(track.id);
      }
    });

    return card;
  }

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  /* ═══════════════════════════════════════════════════════════════════════════
     AUDIO PLAYBACK LOGIC
     ═══════════════════════════════════════════════════════════════════════════ */
  function loadTrack(trackId) {
    const track = getTrack(trackId);
    if (!track) return;
    audio.pause();
    state.currentTrackId = trackId;
    audio.src = track.audioUrl;
    audio.volume = parseFloat(volumeSlider.value);
    audio.load();
    playerTitle.textContent = track.title;
    playerSubtitle.textContent = track.subtitle;
    playerDuration.textContent = formatTime(track.durationSec);
    playerBar.classList.add('visible');
  }

  function handleCardPlay(trackId) {
    if (state.currentTrackId === trackId) togglePlayPause();
    else { loadTrack(trackId); playAudio(); }
  }

  function playAudio() {
    audio.play().then(() => {
      state.isPlaying = true;
      updatePlayPauseUI(true);
      updateAllCardStates();
    }).catch(err => {
      console.warn('Playback failed:', err);
      state.isPlaying = false;
      updatePlayPauseUI(false);
    });
  }

  function pauseAudio() {
    audio.pause();
    state.isPlaying = false;
    updatePlayPauseUI(false);
    updateAllCardStates();
  }

  function togglePlayPause() {
    if (!state.currentTrackId) {
      loadTrack(TRACKS[0].id);
      playAudio();
      return;
    }
    if (state.isPlaying) pauseAudio();
    else playAudio();
  }

  function updatePlayPauseUI(playing) {
    iconPlay.style.display  = playing ? 'none' : 'block';
    iconPause.style.display = playing ? 'block' : 'none';
    btnPlay.setAttribute('aria-label', playing ? 'Pause' : 'Play');
  }

  function updateAllCardStates() {
    document.querySelectorAll('.track-card').forEach(card => {
      const id = parseInt(card.dataset.trackId, 10);
      const isActive = id === state.currentTrackId;
      const isPlaying = isActive && state.isPlaying;

      card.classList.toggle('playing', isPlaying);
      const playBtn = card.querySelector('.card-play-btn');
      const iconPlayPath  = card.querySelector('.icon-play-path');
      const iconPausePath = card.querySelector('.icon-pause-path');

      if (playBtn) playBtn.setAttribute('aria-label', isPlaying ? `Pause ${getTrack(id)?.title}` : `Play ${getTrack(id)?.title}`);
      if (iconPlayPath)  iconPlayPath.style.display  = isPlaying ? 'none' : 'block';
      if (iconPausePath) iconPausePath.style.display = isPlaying ? 'block' : 'none';
    });
  }

  function playPrev() {
    const idx = getCurrentIndex();
    const prevIdx = (idx - 1 + TRACKS.length) % TRACKS.length;
    loadTrack(TRACKS[prevIdx].id);
    playAudio();
  }

  function playNext() {
    const idx = getCurrentIndex();
    const nextIdx = (idx + 1) % TRACKS.length;
    loadTrack(TRACKS[nextIdx].id);
    playAudio();
  }

  /* ═══════════════════════════════════════════════════════════════════════════
     AUDIO EVENT LISTENERS
     ═══════════════════════════════════════════════════════════════════════════ */
  audio.addEventListener('play', () => { state.isPlaying = true; updatePlayPauseUI(true); updateAllCardStates(); });
  audio.addEventListener('pause', () => { state.isPlaying = false; updatePlayPauseUI(false); updateAllCardStates(); });
  audio.addEventListener('ended', () => { state.isPlaying = false; updatePlayPauseUI(false); updateAllCardStates(); setTimeout(playNext, 600); });
  
  audio.addEventListener('timeupdate', () => {
    if (state.isSeeking) return;
    const { currentTime, duration } = audio;
    if (!isFinite(duration) || duration === 0) return;
    const pct = (currentTime / duration) * 100;
    progressFill.style.width = `${pct}%`;
    progressThumb.style.left = `${pct}%`;
    progressTrack.setAttribute('aria-valuenow', Math.round(pct));
    playerCurrentTime.textContent = formatTime(currentTime);
  });

  audio.addEventListener('loadedmetadata', () => {
    if (isFinite(audio.duration)) playerDuration.textContent = formatTime(audio.duration);
  });
  
  audio.addEventListener('error', () => { console.warn('Audio error for track:', state.currentTrackId); });

  btnPlay.addEventListener('click', togglePlayPause);
  btnPrev.addEventListener('click', playPrev);
  btnNext.addEventListener('click', playNext);
  volumeSlider.addEventListener('input', () => { audio.volume = parseFloat(volumeSlider.value); updateVolumeSliderTrack(); });

  function updateVolumeSliderTrack() {
    const val = parseFloat(volumeSlider.value);
    const pct = val * 100;
    volumeSlider.style.background = `linear-gradient(to right, var(--gold) ${pct}%, rgba(255,255,255,0.15) ${pct}%)`;
  }
  updateVolumeSliderTrack();

  /* ─── Progress Bar Scrubbing ─────────────────────────────────────────────── */
  function getProgressPct(e) {
    const rect = progressTrack.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    return Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
  }

  progressTrack.addEventListener('mousedown', (e) => { state.isSeeking = true; seekTo(getProgressPct(e)); });
  progressTrack.addEventListener('touchstart', (e) => { state.isSeeking = true; seekTo(getProgressPct(e)); }, { passive: true });
  document.addEventListener('mousemove', (e) => { if (!state.isSeeking) return; seekTo(getProgressPct(e)); });
  document.addEventListener('touchmove', (e) => { if (!state.isSeeking) return; seekTo(getProgressPct(e)); }, { passive: true });
  document.addEventListener('mouseup', () => { if (state.isSeeking) state.isSeeking = false; });
  document.addEventListener('touchend', () => { if (state.isSeeking) state.isSeeking = false; });
  progressTrack.addEventListener('keydown', (e) => {
    if (!audio.duration) return;
    const step = audio.duration * 0.02;
    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') { e.preventDefault(); audio.currentTime = Math.min(audio.currentTime + step, audio.duration); }
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') { e.preventDefault(); audio.currentTime = Math.max(audio.currentTime - step, 0); }
  });

  function seekTo(pct) {
    if (!isFinite(audio.duration)) return;
    audio.currentTime = pct * audio.duration;
    const p = pct * 100;
    progressFill.style.width = `${p}%`;
    progressThumb.style.left = `${p}%`;
    playerCurrentTime.textContent = formatTime(audio.currentTime);
  }

  /* ═══════════════════════════════════════════════════════════════════════════
     SEARCH MODAL
     ═══════════════════════════════════════════════════════════════════════════ */
  function openSearch() {
    searchOverlay.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => searchInput.focus());
    renderSearchResults('');
  }
  function closeSearch() {
    searchOverlay.setAttribute('hidden', '');
    document.body.style.overflow = '';
    btnOpenSearch.focus();
  }
  btnOpenSearch.addEventListener('click', openSearch);
  btnCloseSearch.addEventListener('click', closeSearch);
  searchOverlay.addEventListener('click', (e) => { if (e.target === searchOverlay) closeSearch(); });

  let searchDebounceTimer;
  searchInput.addEventListener('input', () => {
    clearTimeout(searchDebounceTimer);
    searchDebounceTimer = setTimeout(() => { renderSearchResults(searchInput.value.trim()); }, 120);
  });

  function renderSearchResults(query) {
    searchResults.innerHTML = '';
    const q = query.toLowerCase();
    const filtered = q.length === 0 ? TRACKS : TRACKS.filter(t => t.title.toLowerCase().includes(q) || t.subtitle.toLowerCase().includes(q) || t.level.toLowerCase().includes(q) || String(t.id).includes(q));

    if (filtered.length === 0) {
      searchHint.style.display = 'none';
      searchResults.innerHTML = `<p class="search-no-results">No tracks found for "<strong>${escapeHtml(query)}</strong>"</p>`;
      return;
    }
    searchHint.style.display = query.length === 0 ? 'block' : 'none';

    filtered.forEach(track => {
      const item = document.createElement('div');
      item.className = 'search-result-item';
      item.setAttribute('role', 'option');
      item.setAttribute('tabindex', '0');
      item.setAttribute('aria-selected', 'false');
      item.setAttribute('aria-label', `Play ${track.title}`);

      item.innerHTML = `
        <span class="result-num">${String(track.id).padStart(2, '0')}</span>
        <div class="result-text">
          <div class="result-title">${highlight(track.title, q)}</div>
          <div class="result-sub">${highlight(track.subtitle, q)}</div>
        </div>
        <span class="result-level">${escapeHtml(track.level)}</span>
      `;

      item.addEventListener('click', () => selectSearchResult(track));
      item.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectSearchResult(track); } });
      searchResults.appendChild(item);
    });
  }

  function selectSearchResult(track) {
    closeSearch();
    loadTrack(track.id);
    playAudio();
    setTimeout(() => {
      const card = document.getElementById(`track-card-${track.id}`);
      if (card) { card.scrollIntoView({ behavior: 'smooth', block: 'center' }); card.focus({ preventScroll: true }); }
    }, 320);
  }

  function highlight(text, query) {
    if (!query) return escapeHtml(text);
    const escaped = escapeHtml(text);
    const escapedQ = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return escaped.replace(new RegExp(`(${escapedQ})`, 'gi'), '<mark class="highlight">$1</mark>');
  }

  document.addEventListener('keydown', (e) => {
    const tag = document.activeElement.tagName;
    const isTyping = (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT');
    if (e.key === 'Escape') {
      if (!searchOverlay.hasAttribute('hidden')) closeSearch();
      else if (!sidebarOverlay.hasAttribute('hidden')) closeSidebar();
      return;
    }
    if (e.key === ' ' && !isTyping) { e.preventDefault(); togglePlayPause(); return; }
    if (!isTyping) {
      if (e.key === 'ArrowRight' && e.ctrlKey) { e.preventDefault(); playNext(); }
      else if (e.key === 'ArrowLeft' && e.ctrlKey) { e.preventDefault(); playPrev(); }
    }
  });

  const headerObserver = new IntersectionObserver(([entry]) => { siteHeader.classList.toggle('scrolled', !entry.isIntersecting); }, { threshold: 0, rootMargin: `-${72}px 0px 0px 0px` });
  const sentinel = document.createElement('div');
  sentinel.style.cssText = 'position:absolute;top:0;left:0;width:1px;height:1px;pointer-events:none;';
  document.body.prepend(sentinel);
  headerObserver.observe(sentinel);

  let lastScrollY = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    siteHeader.classList.toggle('scrolled', y > 10);
    lastScrollY = y;
  }, { passive: true });

  mobileMenuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    mobileMenuToggle.setAttribute('aria-expanded', isOpen);
    const spans = mobileMenuToggle.querySelectorAll('span');
    if (isOpen) {
      spans[0].style.transform = 'translateY(6.5px) rotate(45deg)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'translateY(-6.5px) rotate(-45deg)';
    } else {
      spans[0].style.transform = ''; spans[1].style.opacity = ''; spans[2].style.transform = '';
    }
  });

  mainNav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      mobileMenuToggle.setAttribute('aria-expanded', 'false');
      mobileMenuToggle.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    });
  });

  function initCardAnimations() {
    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const card = entry.target;
          const delay = parseInt(card.dataset.animDelay || '0', 10);
          setTimeout(() => { card.classList.add('card-visible'); }, delay);
          cardObserver.unobserve(card);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.track-card').forEach((card) => {
      const gridCards = Array.from(card.closest('.track-grid').querySelectorAll('.track-card'));
      const localIdx = gridCards.indexOf(card);
      card.dataset.animDelay = localIdx * 55;
      cardObserver.observe(card);
    });
  }

  document.querySelector('.btn-hero')?.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector('#intro');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });

  renderGrids();
  initCardAnimations();
  audio.volume = parseFloat(volumeSlider.value);
}
