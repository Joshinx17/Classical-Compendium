# The Classical Compendium

A curated, elegant, and beginner-friendly web guide to classical music. This platform is designed to introduce listeners to the masterworks of the greatest composers through a structured, three-tiered journey (Beginner, Intermediate, Deep).

## 🎵 Features

- **Data-Driven Architecture**: All composer biographies, facts, and audio tracks are managed through a single centralized configuration file (`composers.js`).
- **Custom Audio Player**: A fully custom, accessible audio player built from scratch with Vanilla JavaScript, featuring global state management, continuous playback, scrubbing, and volume control.
- **Dynamic Template Engine**: Composer pages are generated on-the-fly using a shared JavaScript template engine, eliminating HTML duplication.
- **Global Sidebar Navigation**: Seamlessly switch between different composers using the slide-out hamburger navigation menu.
- **Track Search**: A built-in search modal to instantly find pieces by title, level, or ID.
- **Responsive & Beautiful UI**: A premium, typography-focused design that looks stunning on desktops, tablets, and mobile devices.

## 🏗️ Project Structure

```text
Classical-Compendium/
│
├── index.html                # The main landing page
├── style.css                 # Global styles, variables, and UI components
├── composers.js              # ⚙️ MASTER CONFIG: All composer & track data lives here
├── landing.js                # Logic for generating the landing page composer grid
├── composer-template.js      # The template engine & audio player logic
│
├── audio-files/              # Directory for all .mp3 audio files
│   └── (e.g. Bach-Orchestral-Suite-no.-3-in-D-major.mp3)
│
└── composers/                # Minimal HTML shells for each composer
    ├── bach.html
    ├── beethoven.html
    ├── chopin.html
    ├── handel.html
    ├── mozart.html
    ├── tchaikovsky.html
    └── vivaldi.html
```

## 🚀 Getting Started

This project is built purely with Vanilla HTML, CSS, and JavaScript. There are no build tools, bundlers, or dependencies required.

1. Clone or download the repository.
2. Open `index.html` in your web browser, or serve it using a local development server (like VS Code's Live Server).

## 🛠️ How to Add or Edit Composers

The entire platform is driven by `composers.js`. You do not need to write HTML to add new tracks or composers.

### Adding a New Track
1. Open `composers.js`.
2. Locate the composer you wish to edit (e.g., JS Bach).
3. Under their `tracks` array, add a new track object:
```javascript
{ 
  id: 99, 
  title: 'Your Track Title', 
  subtitle: 'Track Subtitle', 
  level: 'Beginner', 
  gridId: 'beginnerGrid', 
  durationSec: 300, 
  audioUrl: '../audio-files/your-audio-file.mp3' 
}
```

### Adding a New Composer
1. Open `composers.js` and add a new composer object to the `COMPOSERS` array. Use the existing composers as a structural template.
2. Ensure you specify a unique `id` and set their `pageFile` (e.g., `debussy.html`).
3. In the `composers/` folder, duplicate an existing HTML shell (like `bach.html`), rename it to `debussy.html`, and change the data attribute on the body tag to match the new ID:
```html
<body data-composer="debussy">
```
4. The new composer will automatically appear on the landing page grid and in the global sidebar navigation!

## 📜 Credits
- **Design & Code**: Built with Vanilla JS and CSS.
- **Audio**: All current recordings are in the public domain and sourced from Wikimedia Commons.