/**
 * BACH — A Journey Through Bach | script.js
 * Audio player, dynamic grid rendering, search modal, keyboard shortcuts
 */

'use strict';

/* ═══════════════════════════════════════════════════════════════════════════
   DATASET — 23 Bach tracks with Wikimedia Commons public domain audio
   ═══════════════════════════════════════════════════════════════════════════ */
const TRACKS = [
  // ─── LEVEL 1: BEGINNER ───────────────────────────────────────────────────
  {
    id: 1,
    title: 'Air on the G String',
    subtitle: 'Suite No. 3 in D major, BWV 1068 — II. Air',
    level: 'Beginner',
    gridId: 'beginnerGrid',
    durationSec: 316,
    audioUrl: './audio-files/Bach-Orchestral-Suite-no.-3-in-D-major.mp3'
  },
  {
    id: 2,
    title: 'Jesu, Joy of Man\'s Desiring',
    subtitle: 'Cantata BWV 147 — Chorale',
    level: 'Beginner',
    gridId: 'beginnerGrid',
    durationSec: 237,
    audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/4/43/Johann_Sebastian_Bach_-_Jesu%2C_Joy_of_Man%27s_Desiring.ogg/Johann_Sebastian_Bach_-_Jesu%2C_Joy_of_Man%27s_Desiring.ogg.mp3'
  },
  {
    id: 3,
    title: 'Minuet in G Major',
    subtitle: 'Notebook for Anna Magdalena Bach, BWV Anh. 114',
    level: 'Beginner',
    gridId: 'beginnerGrid',
    durationSec: 102,
    audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/3/33/Bach-minuet-in-g.ogg/Bach-minuet-in-g.ogg.mp3'
  },
  {
    id: 4,
    title: 'Cello Suite No. 1 — Prelude',
    subtitle: 'Suite No. 1 in G major, BWV 1007',
    level: 'Beginner',
    gridId: 'beginnerGrid',
    durationSec: 145,
    audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/3/3e/Anna_Magdalena_Notebook_1725_-_Minuet_in_G_major_%281%29.ogg/Anna_Magdalena_Notebook_1725_-_Minuet_in_G_major_%281%29.ogg.mp3'
  },
  {
    id: 5,
    title: 'Sheep May Safely Graze',
    subtitle: 'Was mir behagt, ist nur die muntre Jagd, BWV 208',
    level: 'Beginner',
    gridId: 'beginnerGrid',
    durationSec: 340,
    audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c1/Badinerie_from_Suite_No._2_in_B_Minor_for_Flute_and_Strings.ogg/Badinerie_from_Suite_No._2_in_B_Minor_for_Flute_and_Strings.ogg.mp3'
  },
  {
    id: 6,
    title: 'Badinerie',
    subtitle: 'Orchestral Suite No. 2 in B minor, BWV 1067',
    level: 'Beginner',
    gridId: 'beginnerGrid',
    durationSec: 87,
    audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/a/a7/Badinerie.ogg/Badinerie.ogg.mp3'
  },
  {
    id: 7,
    title: 'Sleepers, Wake!',
    subtitle: 'Cantata BWV 140 — Chorale',
    level: 'Beginner',
    gridId: 'beginnerGrid',
    durationSec: 253,
    audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/4/43/Johann_Sebastian_Bach_-_Jesu%2C_Joy_of_Man%27s_Desiring.ogg/Johann_Sebastian_Bach_-_Jesu%2C_Joy_of_Man%27s_Desiring.ogg.mp3'
  },

  // ─── LEVEL 2: INTERMEDIATE ───────────────────────────────────────────────
  {
    id: 8,
    title: 'Brandenburg Concerto No. 3',
    subtitle: 'Brandenburg Concerto No. 3 in G major, BWV 1048 — I. Allegro',
    level: 'Intermediate',
    gridId: 'intermediateGrid',
    durationSec: 425,
    audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f6/Brandenburg_Concerto_No3_in_G_major_BWV1048.ogg/Brandenburg_Concerto_No3_in_G_major_BWV1048.ogg.mp3'
  },
  {
    id: 9,
    title: 'Toccata and Fugue in D Minor',
    subtitle: 'BWV 565 — Organ',
    level: 'Intermediate',
    gridId: 'intermediateGrid',
    durationSec: 554,
    audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/2/2b/Toccata_and_Fugue_in_D_Minor_BWV_565.ogg/Toccata_and_Fugue_in_D_Minor_BWV_565.ogg.mp3'
  },
  {
    id: 10,
    title: 'Brandenburg Concerto No. 5',
    subtitle: 'Brandenburg Concerto No. 5 in D major, BWV 1050 — I.',
    level: 'Intermediate',
    gridId: 'intermediateGrid',
    durationSec: 590,
    audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f6/Brandenburg_Concerto_No3_in_G_major_BWV1048.ogg/Brandenburg_Concerto_No3_in_G_major_BWV1048.ogg.mp3'
  },
  {
    id: 11,
    title: 'Violin Concerto in A Minor',
    subtitle: 'BWV 1041 — I. Allegro moderato',
    level: 'Intermediate',
    gridId: 'intermediateGrid',
    durationSec: 394,
    audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/e/eb/Bach_violin_concerto_a_minor_BWV1041_1.ogg/Bach_violin_concerto_a_minor_BWV1041_1.ogg.mp3'
  },
  {
    id: 12,
    title: 'Two-Part Invention No. 1',
    subtitle: 'Inventions and Sinfonias, BWV 772 — C Major',
    level: 'Intermediate',
    gridId: 'intermediateGrid',
    durationSec: 58,
    audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/e/ea/Bach_-_Two-Part_Invention_No._1.ogg/Bach_-_Two-Part_Invention_No._1.ogg.mp3'
  },
  {
    id: 13,
    title: 'Chaconne in D Minor',
    subtitle: 'Partita No. 2 for Solo Violin, BWV 1004 — V.',
    level: 'Intermediate',
    gridId: 'intermediateGrid',
    durationSec: 822,
    audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/3/35/Chaconne_-_BWV_1004.ogg/Chaconne_-_BWV_1004.ogg.mp3'
  },
  {
    id: 14,
    title: 'Prelude in C Major',
    subtitle: 'Well-Tempered Clavier, Book I, BWV 846',
    level: 'Intermediate',
    gridId: 'intermediateGrid',
    durationSec: 138,
    audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/f/fb/Bach-wtc1-prelude-c-major.ogg/Bach-wtc1-prelude-c-major.ogg.mp3'
  },
  {
    id: 15,
    title: 'St. Matthew Passion — Erbarme dich',
    subtitle: 'Matthäuspassion BWV 244 — No. 39, Alto aria',
    level: 'Intermediate',
    gridId: 'intermediateGrid',
    durationSec: 430,
    audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/4/43/Johann_Sebastian_Bach_-_Jesu%2C_Joy_of_Man%27s_Desiring.ogg/Johann_Sebastian_Bach_-_Jesu%2C_Joy_of_Man%27s_Desiring.ogg.mp3'
  },

  // ─── LEVEL 3: DEEP ───────────────────────────────────────────────────────
  {
    id: 16,
    title: 'Goldberg Variations — Aria',
    subtitle: 'Goldberg Variations, BWV 988 — Opening Aria',
    level: 'Deep',
    gridId: 'deepGrid',
    durationSec: 178,
    audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/1/19/Goldberg_variations_HQ.ogg/Goldberg_variations_HQ.ogg.mp3'
  },
  {
    id: 17,
    title: 'Goldberg Variation 13',
    subtitle: 'Goldberg Variations, BWV 988 — Var. 13, a 2 Clav.',
    level: 'Deep',
    gridId: 'deepGrid',
    durationSec: 195,
    audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/3/3c/Goldberg_variation_13.ogg/Goldberg_variation_13.ogg.mp3'
  },
  {
    id: 18,
    title: 'The Well-Tempered Clavier — Fugue I',
    subtitle: 'Well-Tempered Clavier, Book I, BWV 846 — Fugue in C',
    level: 'Deep',
    gridId: 'deepGrid',
    durationSec: 127,
    audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/f/fb/Bach-wtc1-prelude-c-major.ogg/Bach-wtc1-prelude-c-major.ogg.mp3'
  },
  {
    id: 19,
    title: 'Mass in B Minor — Kyrie',
    subtitle: 'Mass in B minor, BWV 232 — I. Kyrie eleison',
    level: 'Deep',
    gridId: 'deepGrid',
    durationSec: 268,
    audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/4/43/Johann_Sebastian_Bach_-_Jesu%2C_Joy_of_Man%27s_Desiring.ogg/Johann_Sebastian_Bach_-_Jesu%2C_Joy_of_Man%27s_Desiring.ogg.mp3'
  },
  {
    id: 20,
    title: 'Passacaglia and Fugue in C Minor',
    subtitle: 'BWV 582 — Organ',
    level: 'Deep',
    gridId: 'deepGrid',
    durationSec: 720,
    audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/7/7c/20091104_Awadagin_Pratt_-_Bach%27s_Passacaglia_and_Fugue_in_C_minor%2C_BWV_582.ogg/20091104_Awadagin_Pratt_-_Bach%27s_Passacaglia_and_Fugue_in_C_minor%2C_BWV_582.ogg.mp3'
  },
  {
    id: 21,
    title: 'The Art of Fugue — Contrapunctus I',
    subtitle: 'Die Kunst der Fuge, BWV 1080 — Contrapunctus I',
    level: 'Deep',
    gridId: 'deepGrid',
    durationSec: 224,
    audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f6/Brandenburg_Concerto_No3_in_G_major_BWV1048.ogg/Brandenburg_Concerto_No3_in_G_major_BWV1048.ogg.mp3'
  },
  {
    id: 22,
    title: 'Musical Offering — Ricercar a 6',
    subtitle: 'Das Musikalische Opfer, BWV 1079',
    level: 'Deep',
    gridId: 'deepGrid',
    durationSec: 412,
    audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/7/7c/20091104_Awadagin_Pratt_-_Bach%27s_Passacaglia_and_Fugue_in_C_minor%2C_BWV_582.ogg/20091104_Awadagin_Pratt_-_Bach%27s_Passacaglia_and_Fugue_in_C_minor%2C_BWV_582.ogg.mp3'
  },
  {
    id: 23,
    title: 'Goldberg Variations — Var. 25',
    subtitle: 'Goldberg Variations, BWV 988 — Variation 25, a 2 Clav.',
    level: 'Deep',
    gridId: 'deepGrid',
    durationSec: 436,
    audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/1/19/Goldberg_variations_HQ.ogg/Goldberg_variations_HQ.ogg.mp3'
  }
];

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

/* ═══════════════════════════════════════════════════════════════════════════
   UTILITIES
   ═══════════════════════════════════════════════════════════════════════════ */
/**
 * Format seconds to M:SS string
 * @param {number} sec
 * @returns {string}
 */
function formatTime(sec) {
  if (!isFinite(sec) || isNaN(sec)) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

/**
 * Get track by ID
 * @param {number} id
 * @returns {object|undefined}
 */
function getTrack(id) {
  return TRACKS.find(t => t.id === id);
}

/**
 * Get index of current track in TRACKS array
 * @returns {number}
 */
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

    // Compute local track numbers per grid
    tracks.forEach((track, localIdx) => {
      const card = createTrackCard(track, localIdx + 1);
      container.appendChild(card);
    });
  });
}

/**
 * Create a single track card DOM element
 * @param {object} track
 * @param {number} localNum — display number within the grid
 * @returns {HTMLElement}
 */
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
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
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

  // Click on card body → play
  card.addEventListener('click', (e) => {
    if (!e.target.closest('.card-play-btn')) {
      handleCardPlay(track.id);
    }
  });

  // Click on play button → play
  const playBtn = card.querySelector('.card-play-btn');
  playBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    handleCardPlay(track.id);
  });

  // Keyboard: Enter/Space on card
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardPlay(track.id);
    }
  });

  return card;
}

/**
 * Simple HTML escape
 * @param {string} str
 * @returns {string}
 */
function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/* ═══════════════════════════════════════════════════════════════════════════
   AUDIO PLAYBACK LOGIC
   ═══════════════════════════════════════════════════════════════════════════ */
/**
 * Load and play a track by ID
 * @param {number} trackId
 */
function loadTrack(trackId) {
  const track = getTrack(trackId);
  if (!track) return;

  // Stop current
  audio.pause();

  // Update state
  state.currentTrackId = trackId;

  // Update audio source
  audio.src = track.audioUrl;
  audio.volume = parseFloat(volumeSlider.value);
  audio.load();

  // Update player bar UI
  playerTitle.textContent = track.title;
  playerSubtitle.textContent = track.subtitle;
  playerDuration.textContent = formatTime(track.durationSec);

  // Show player bar
  playerBar.classList.add('visible');
}

/**
 * Handle play button click on a card
 * @param {number} trackId
 */
function handleCardPlay(trackId) {
  if (state.currentTrackId === trackId) {
    // Toggle play/pause
    togglePlayPause();
  } else {
    loadTrack(trackId);
    playAudio();
  }
}

/**
 * Start playing
 */
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

/**
 * Pause audio
 */
function pauseAudio() {
  audio.pause();
  state.isPlaying = false;
  updatePlayPauseUI(false);
  updateAllCardStates();
}

/**
 * Toggle play / pause
 */
function togglePlayPause() {
  if (!state.currentTrackId) {
    // Load first track if nothing selected
    loadTrack(TRACKS[0].id);
    playAudio();
    return;
  }
  if (state.isPlaying) {
    pauseAudio();
  } else {
    playAudio();
  }
}

/**
 * Update play/pause icon on main player button
 * @param {boolean} playing
 */
function updatePlayPauseUI(playing) {
  iconPlay.style.display  = playing ? 'none' : 'block';
  iconPause.style.display = playing ? 'block' : 'none';
  btnPlay.setAttribute('aria-label', playing ? 'Pause' : 'Play');
}

/**
 * Sync all card states — active/inactive, play/pause icon per card
 */
function updateAllCardStates() {
  document.querySelectorAll('.track-card').forEach(card => {
    const id = parseInt(card.dataset.trackId, 10);
    const isActive = id === state.currentTrackId;
    const isPlaying = isActive && state.isPlaying;

    card.classList.toggle('playing', isPlaying);

    const playBtn = card.querySelector('.card-play-btn');
    const iconPlayPath  = card.querySelector('.icon-play-path');
    const iconPausePath = card.querySelector('.icon-pause-path');

    if (playBtn) {
      playBtn.setAttribute('aria-label', isPlaying ? `Pause ${getTrack(id)?.title}` : `Play ${getTrack(id)?.title}`);
    }
    if (iconPlayPath)  iconPlayPath.style.display  = isPlaying ? 'none' : 'block';
    if (iconPausePath) iconPausePath.style.display = isPlaying ? 'block' : 'none';
  });
}

/**
 * Play previous track
 */
function playPrev() {
  const idx = getCurrentIndex();
  const prevIdx = (idx - 1 + TRACKS.length) % TRACKS.length;
  loadTrack(TRACKS[prevIdx].id);
  playAudio();
}

/**
 * Play next track
 */
function playNext() {
  const idx = getCurrentIndex();
  const nextIdx = (idx + 1) % TRACKS.length;
  loadTrack(TRACKS[nextIdx].id);
  playAudio();
}

/* ═══════════════════════════════════════════════════════════════════════════
   AUDIO EVENT LISTENERS
   ═══════════════════════════════════════════════════════════════════════════ */
audio.addEventListener('play', () => {
  state.isPlaying = true;
  updatePlayPauseUI(true);
  updateAllCardStates();
});

audio.addEventListener('pause', () => {
  state.isPlaying = false;
  updatePlayPauseUI(false);
  updateAllCardStates();
});

audio.addEventListener('ended', () => {
  state.isPlaying = false;
  updatePlayPauseUI(false);
  updateAllCardStates();
  // Auto-play next
  setTimeout(playNext, 600);
});

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
  if (isFinite(audio.duration)) {
    playerDuration.textContent = formatTime(audio.duration);
  }
});

audio.addEventListener('error', () => {
  // Silently skip on error — audio might not be available
  console.warn('Audio error for track:', state.currentTrackId);
});

/* ═══════════════════════════════════════════════════════════════════════════
   PLAYER BAR CONTROLS
   ═══════════════════════════════════════════════════════════════════════════ */
btnPlay.addEventListener('click', togglePlayPause);
btnPrev.addEventListener('click', playPrev);
btnNext.addEventListener('click', playNext);

volumeSlider.addEventListener('input', () => {
  audio.volume = parseFloat(volumeSlider.value);
});

/* ─── Progress Bar Scrubbing ─────────────────────────────────────────────── */
function getProgressPct(e) {
  const rect = progressTrack.getBoundingClientRect();
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  return Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
}

progressTrack.addEventListener('mousedown', (e) => {
  state.isSeeking = true;
  seekTo(getProgressPct(e));
});
progressTrack.addEventListener('touchstart', (e) => {
  state.isSeeking = true;
  seekTo(getProgressPct(e));
}, { passive: true });

document.addEventListener('mousemove', (e) => {
  if (!state.isSeeking) return;
  seekTo(getProgressPct(e));
});
document.addEventListener('touchmove', (e) => {
  if (!state.isSeeking) return;
  seekTo(getProgressPct(e));
}, { passive: true });

document.addEventListener('mouseup', () => {
  if (state.isSeeking) state.isSeeking = false;
});
document.addEventListener('touchend', () => {
  if (state.isSeeking) state.isSeeking = false;
});

// Keyboard seek on progress track (arrow keys)
progressTrack.addEventListener('keydown', (e) => {
  if (!audio.duration) return;
  const step = audio.duration * 0.02; // 2% step
  if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
    e.preventDefault();
    audio.currentTime = Math.min(audio.currentTime + step, audio.duration);
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
    e.preventDefault();
    audio.currentTime = Math.max(audio.currentTime - step, 0);
  }
});

/**
 * Seek audio to a fraction [0, 1]
 * @param {number} pct
 */
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

// Close on backdrop click
searchOverlay.addEventListener('click', (e) => {
  if (e.target === searchOverlay) closeSearch();
});

// Search input
let searchDebounceTimer;
searchInput.addEventListener('input', () => {
  clearTimeout(searchDebounceTimer);
  searchDebounceTimer = setTimeout(() => {
    renderSearchResults(searchInput.value.trim());
  }, 120);
});

/**
 * Filter tracks and render search results
 * @param {string} query
 */
function renderSearchResults(query) {
  searchResults.innerHTML = '';

  const q = query.toLowerCase();

  const filtered = q.length === 0
    ? TRACKS
    : TRACKS.filter(t =>
        t.title.toLowerCase().includes(q) ||
        t.subtitle.toLowerCase().includes(q) ||
        t.level.toLowerCase().includes(q) ||
        String(t.id).includes(q)
      );

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

    const titleHL  = highlight(track.title, q);
    const subHL    = highlight(track.subtitle, q);

    item.innerHTML = `
      <span class="result-num">${String(track.id).padStart(2, '0')}</span>
      <div class="result-text">
        <div class="result-title">${titleHL}</div>
        <div class="result-sub">${subHL}</div>
      </div>
      <span class="result-level">${escapeHtml(track.level)}</span>
    `;

    item.addEventListener('click', () => selectSearchResult(track));
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectSearchResult(track);
      }
    });

    searchResults.appendChild(item);
  });
}

/**
 * Handle selecting a search result
 * @param {object} track
 */
function selectSearchResult(track) {
  closeSearch();
  loadTrack(track.id);
  playAudio();

  // Smooth scroll to track card
  setTimeout(() => {
    const card = document.getElementById(`track-card-${track.id}`);
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      card.focus({ preventScroll: true });
    }
  }, 320);
}

/**
 * Highlight matching text in a string
 * @param {string} text
 * @param {string} query
 * @returns {string}
 */
function highlight(text, query) {
  if (!query) return escapeHtml(text);
  const escaped = escapeHtml(text);
  const escapedQ = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return escaped.replace(
    new RegExp(`(${escapedQ})`, 'gi'),
    '<mark class="highlight">$1</mark>'
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   KEYBOARD SHORTCUTS
   ═══════════════════════════════════════════════════════════════════════════ */
document.addEventListener('keydown', (e) => {
  const tag = document.activeElement.tagName;
  const isTyping = (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT');

  // Escape → close search
  if (e.key === 'Escape') {
    if (!searchOverlay.hasAttribute('hidden')) {
      closeSearch();
    }
    return;
  }

  // Spacebar → toggle play/pause (not when typing)
  if (e.key === ' ' && !isTyping) {
    e.preventDefault();
    togglePlayPause();
    return;
  }

  // Arrow keys for seeking (not when typing)
  if (!isTyping) {
    if (e.key === 'ArrowRight' && e.ctrlKey) {
      e.preventDefault();
      playNext();
    } else if (e.key === 'ArrowLeft' && e.ctrlKey) {
      e.preventDefault();
      playPrev();
    }
  }
});

/* ═══════════════════════════════════════════════════════════════════════════
   HEADER SCROLL BEHAVIOR
   ═══════════════════════════════════════════════════════════════════════════ */
const headerObserver = new IntersectionObserver(
  ([entry]) => {
    siteHeader.classList.toggle('scrolled', !entry.isIntersecting);
  },
  { threshold: 0, rootMargin: `-${72}px 0px 0px 0px` }
);

// Observe a sentinel element at top of page
const sentinel = document.createElement('div');
sentinel.style.cssText = 'position:absolute;top:0;left:0;width:1px;height:1px;pointer-events:none;';
document.body.prepend(sentinel);
headerObserver.observe(sentinel);

/* ─── Fallback scroll listener for header ───────────────────────────────── */
let lastScrollY = 0;
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  siteHeader.classList.toggle('scrolled', y > 10);
  lastScrollY = y;
}, { passive: true });

/* ═══════════════════════════════════════════════════════════════════════════
   MOBILE MENU TOGGLE
   ═══════════════════════════════════════════════════════════════════════════ */
mobileMenuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  mobileMenuToggle.setAttribute('aria-expanded', isOpen);
  // Animate hamburger
  const spans = mobileMenuToggle.querySelectorAll('span');
  if (isOpen) {
    spans[0].style.transform = 'translateY(6.5px) rotate(45deg)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'translateY(-6.5px) rotate(-45deg)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
});

// Close mobile menu on nav link click
mainNav.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    mobileMenuToggle.setAttribute('aria-expanded', 'false');
    const spans = mobileMenuToggle.querySelectorAll('span');
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  });
});

/* ═══════════════════════════════════════════════════════════════════════════
   CARD ENTRANCE ANIMATIONS (IntersectionObserver)
   CSS handles the initial opacity:0 / translateY(20px) state.
   We just add .card-visible when cards enter the viewport.
   ═══════════════════════════════════════════════════════════════════════════ */
function initCardAnimations() {
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const card = entry.target;
        const delay = parseInt(card.dataset.animDelay || '0', 10);
        setTimeout(() => {
          card.classList.add('card-visible');
        }, delay);
        cardObserver.unobserve(card);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.track-card').forEach((card) => {
    // Stagger cards within each grid
    const gridCards = Array.from(card.closest('.track-grid').querySelectorAll('.track-card'));
    const localIdx = gridCards.indexOf(card);
    card.dataset.animDelay = localIdx * 55;
    cardObserver.observe(card);
  });
}

/* ═══════════════════════════════════════════════════════════════════════════
   VOLUME SLIDER VISUAL UPDATE
   ═══════════════════════════════════════════════════════════════════════════ */
function updateVolumeSliderTrack() {
  const val = parseFloat(volumeSlider.value);
  const pct = val * 100;
  volumeSlider.style.background = `linear-gradient(to right, var(--gold) ${pct}%, rgba(255,255,255,0.15) ${pct}%)`;
}
volumeSlider.addEventListener('input', updateVolumeSliderTrack);
updateVolumeSliderTrack();

/* ═══════════════════════════════════════════════════════════════════════════
   HERO BUTTON — smooth scroll
   ═══════════════════════════════════════════════════════════════════════════ */
document.querySelector('.btn-hero')?.addEventListener('click', (e) => {
  e.preventDefault();
  const target = document.querySelector('#intro');
  if (target) target.scrollIntoView({ behavior: 'smooth' });
});

/* ═══════════════════════════════════════════════════════════════════════════
   INIT
   ═══════════════════════════════════════════════════════════════════════════ */
function init() {
  renderGrids();
  initCardAnimations();

  // Set initial volume
  audio.volume = parseFloat(volumeSlider.value);

  // Announce player bar is ready
  console.log(
    '%cBACH — A Journey Through Bach',
    'font-family: serif; font-size: 16px; color: #a67c3c;',
    `\n${TRACKS.length} tracks loaded. Press Space to play/pause.`
  );
}

// Run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}