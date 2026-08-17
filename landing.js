/**
 * The Classical Compendium — Landing Page Logic
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const gridContainer = document.getElementById('composerGrid');
  if (!gridContainer) return;

  const cardsHtml = COMPOSERS.map(c => `
    <a href="composers/${c.pageFile}" class="composer-card">
      <div class="composer-card-bg">
        <svg viewBox="0 0 200 200" class="monogram-svg">
          <circle cx="100" cy="100" r="92" fill="none" stroke="currentColor" stroke-width="1"/>
          ${c.monogram[0] ? `<text x="100" y="${c.monogram[2] ? '88' : '100'}" text-anchor="middle" class="monogram-text monogram-initial">${c.monogram[0]}</text>` : ''}
          ${c.monogram[1] ? `<text x="100" y="${c.monogram[2] ? '116' : '128'}" text-anchor="middle" class="monogram-text monogram-initial">${c.monogram[1]}</text>` : ''}
          ${c.monogram[2] ? `<text x="100" y="144" text-anchor="middle" class="monogram-text monogram-initial">${c.monogram[2]}</text>` : ''}
        </svg>
      </div>
      <div class="composer-card-content">
        <h3 class="composer-card-name">${c.shortName}</h3>
        <span class="composer-card-era">${c.era}</span>
      </div>
    </a>
  `).join('');

  gridContainer.innerHTML = cardsHtml;
  
  // Also setup sidebar for landing page
  const btnOpenSidebar = document.getElementById('btnOpenSidebar');
  const btnCloseSidebar = document.getElementById('btnCloseSidebar');
  const sidebarOverlay = document.getElementById('sidebarOverlay');
  
  if (btnOpenSidebar && sidebarOverlay) {
    // Populate sidebar list
    const sidebarList = sidebarOverlay.querySelector('.sidebar-list');
    if (sidebarList) {
      sidebarList.innerHTML = COMPOSERS.map(c => `
        <li>
          <a href="composers/${c.pageFile}" class="sidebar-link">
            <div class="sidebar-link-text">
              <span class="sidebar-link-name">${c.shortName}</span>
              <span class="sidebar-link-era">${c.era}</span>
            </div>
          </a>
        </li>
      `).join('');
    }

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

    if (btnCloseSidebar) btnCloseSidebar.addEventListener('click', closeSidebar);
    sidebarOverlay.addEventListener('click', (e) => {
      if (e.target === sidebarOverlay) closeSidebar();
    });
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !sidebarOverlay.hasAttribute('hidden')) {
        closeSidebar();
      }
    });
  }
});
