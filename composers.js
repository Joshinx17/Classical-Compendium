/**
 * The Classical Compendium — Central Data Configuration
 * All composers, their biographies, and tracks are defined here.
 */

const COMPOSERS = [
  {
    id: 'bach',
    name: 'Johann Sebastian Bach',
    shortName: 'JS Bach',
    monogram: ['J.', 'S.', 'B.'],
    era: 'Baroque · 1685–1750',
    pageFile: 'bach.html',
    heroOverline: 'The Canonical Listening Guide',
    heroTitle: 'A Journey',
    heroTitleItalic: 'Through Bach',
    heroSubtitle: 'From the familiar to the transcendent — a curated path through the music of Johann Sebastian Bach, the supreme master of the Baroque era.',
    introHeading: 'How to Listen to Bach',
    introText: [
      "Bach's music has a way of revealing more of itself each time you return to it. This guide is structured as a three-stage journey — beginning with his most melodic and immediately accessible works, then moving into the structural brilliance of his middle period, before arriving at the profound intellectual architecture of his late masterpieces.",
      "There is no rush. Each stage is complete in itself. You may spend weeks in the beginner tier and find it entirely sufficient. Or the contrapuntal depth of the deep tier may call to you from the start."
    ],
    roadmap: [
      { num: 'I', title: 'Beginner Bach', desc: 'Melodic, accessible, immediately moving. The music that introduces you to his world.' },
      { num: 'II', title: 'Intermediate Bach', desc: 'Complex structures, emotional depth, the dance forms and concertos that reward attention.' },
      { num: 'III', title: 'Deep Bach', desc: 'Counterpoint as architecture. The fugues and variations that define Western music\'s summit.' }
    ],
    aboutBio: [
      "Born in Eisenach, Thuringia in 1685, Johann Sebastian Bach spent his entire life within a relatively small region of Germany, yet produced a body of work that has shaped the course of Western music for nearly three centuries.",
      "He worked primarily as a church musician and court composer — positions that offered modest social standing but demanded extraordinary productivity. In Leipzig, where he served as Thomaskantor from 1723 until his death in 1750, he was required to compose a new cantata every week for the church calendar.",
      "Bach was largely overlooked as a composer in his own time, regarded more as a virtuoso organist and teacher than as a creative genius. It was Felix Mendelssohn's landmark 1829 revival of the St. Matthew Passion — nearly eighty years after Bach's death — that began the process of restoring his reputation. What followed was a complete reassessment of what one man had accomplished."
    ],
    aboutFacts: [
      { num: '1,128', label: 'Compositions in the Bach-Werke-Verzeichnis catalogue' },
      { num: '27', label: 'Years served as Thomaskantor in Leipzig' },
      { num: '1685 – 1750', label: 'Lifespan spanning the entire Baroque era' },
      { num: '20', label: 'Children, of whom four became notable composers' }
    ],
    tracks: [
      // ─── LEVEL 1: BEGINNER
      { id: 1, title: 'Air on the G String', subtitle: 'Suite No. 3 in D major, BWV 1068 — II. Air', level: 'Beginner', gridId: 'beginnerGrid', durationSec: 316, audioUrl: '../audio-files/Bach-Orchestral-Suite-no.-3-in-D-major.mp3' },
      { id: 2, title: 'Jesu, Joy of Man\'s Desiring', subtitle: 'Cantata BWV 147 — Chorale', level: 'Beginner', gridId: 'beginnerGrid', durationSec: 237, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/4/43/Johann_Sebastian_Bach_-_Jesu%2C_Joy_of_Man%27s_Desiring.ogg/Johann_Sebastian_Bach_-_Jesu%2C_Joy_of_Man%27s_Desiring.ogg.mp3' },
      { id: 3, title: 'Minuet in G Major', subtitle: 'Notebook for Anna Magdalena Bach, BWV Anh. 114', level: 'Beginner', gridId: 'beginnerGrid', durationSec: 102, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/3/33/Bach-minuet-in-g.ogg/Bach-minuet-in-g.ogg.mp3' },
      { id: 4, title: 'Cello Suite No. 1 — Prelude', subtitle: 'Suite No. 1 in G major, BWV 1007', level: 'Beginner', gridId: 'beginnerGrid', durationSec: 145, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/3/3e/Anna_Magdalena_Notebook_1725_-_Minuet_in_G_major_%281%29.ogg/Anna_Magdalena_Notebook_1725_-_Minuet_in_G_major_%281%29.ogg.mp3' },
      { id: 5, title: 'Sheep May Safely Graze', subtitle: 'Was mir behagt, ist nur die muntre Jagd, BWV 208', level: 'Beginner', gridId: 'beginnerGrid', durationSec: 340, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c1/Badinerie_from_Suite_No._2_in_B_Minor_for_Flute_and_Strings.ogg/Badinerie_from_Suite_No._2_in_B_Minor_for_Flute_and_Strings.ogg.mp3' },
      { id: 6, title: 'Badinerie', subtitle: 'Orchestral Suite No. 2 in B minor, BWV 1067', level: 'Beginner', gridId: 'beginnerGrid', durationSec: 87, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/a/a7/Badinerie.ogg/Badinerie.ogg.mp3' },
      { id: 7, title: 'Sleepers, Wake!', subtitle: 'Cantata BWV 140 — Chorale', level: 'Beginner', gridId: 'beginnerGrid', durationSec: 253, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/4/43/Johann_Sebastian_Bach_-_Jesu%2C_Joy_of_Man%27s_Desiring.ogg/Johann_Sebastian_Bach_-_Jesu%2C_Joy_of_Man%27s_Desiring.ogg.mp3' },
      
      // ─── LEVEL 2: INTERMEDIATE
      { id: 8, title: 'Brandenburg Concerto No. 3', subtitle: 'Brandenburg Concerto No. 3 in G major, BWV 1048 — I. Allegro', level: 'Intermediate', gridId: 'intermediateGrid', durationSec: 425, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f6/Brandenburg_Concerto_No3_in_G_major_BWV1048.ogg/Brandenburg_Concerto_No3_in_G_major_BWV1048.ogg.mp3' },
      { id: 9, title: 'Toccata and Fugue in D Minor', subtitle: 'BWV 565 — Organ', level: 'Intermediate', gridId: 'intermediateGrid', durationSec: 554, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/2/2b/Toccata_and_Fugue_in_D_Minor_BWV_565.ogg/Toccata_and_Fugue_in_D_Minor_BWV_565.ogg.mp3' },
      { id: 10, title: 'Brandenburg Concerto No. 5', subtitle: 'Brandenburg Concerto No. 5 in D major, BWV 1050 — I.', level: 'Intermediate', gridId: 'intermediateGrid', durationSec: 590, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f6/Brandenburg_Concerto_No3_in_G_major_BWV1048.ogg/Brandenburg_Concerto_No3_in_G_major_BWV1048.ogg.mp3' },
      { id: 11, title: 'Violin Concerto in A Minor', subtitle: 'BWV 1041 — I. Allegro moderato', level: 'Intermediate', gridId: 'intermediateGrid', durationSec: 394, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/e/eb/Bach_violin_concerto_a_minor_BWV1041_1.ogg/Bach_violin_concerto_a_minor_BWV1041_1.ogg.mp3' },
      { id: 12, title: 'Two-Part Invention No. 1', subtitle: 'Inventions and Sinfonias, BWV 772 — C Major', level: 'Intermediate', gridId: 'intermediateGrid', durationSec: 58, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/e/ea/Bach_-_Two-Part_Invention_No._1.ogg/Bach_-_Two-Part_Invention_No._1.ogg.mp3' },
      { id: 13, title: 'Chaconne in D Minor', subtitle: 'Partita No. 2 for Solo Violin, BWV 1004 — V.', level: 'Intermediate', gridId: 'intermediateGrid', durationSec: 822, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/3/35/Chaconne_-_BWV_1004.ogg/Chaconne_-_BWV_1004.ogg.mp3' },
      { id: 14, title: 'Prelude in C Major', subtitle: 'Well-Tempered Clavier, Book I, BWV 846', level: 'Intermediate', gridId: 'intermediateGrid', durationSec: 138, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/f/fb/Bach-wtc1-prelude-c-major.ogg/Bach-wtc1-prelude-c-major.ogg.mp3' },
      { id: 15, title: 'St. Matthew Passion — Erbarme dich', subtitle: 'Matthäuspassion BWV 244 — No. 39, Alto aria', level: 'Intermediate', gridId: 'intermediateGrid', durationSec: 430, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/4/43/Johann_Sebastian_Bach_-_Jesu%2C_Joy_of_Man%27s_Desiring.ogg/Johann_Sebastian_Bach_-_Jesu%2C_Joy_of_Man%27s_Desiring.ogg.mp3' },
      
      // ─── LEVEL 3: DEEP
      { id: 16, title: 'Goldberg Variations — Aria', subtitle: 'Goldberg Variations, BWV 988 — Opening Aria', level: 'Deep', gridId: 'deepGrid', durationSec: 178, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/1/19/Goldberg_variations_HQ.ogg/Goldberg_variations_HQ.ogg.mp3' },
      { id: 17, title: 'Goldberg Variation 13', subtitle: 'Goldberg Variations, BWV 988 — Var. 13, a 2 Clav.', level: 'Deep', gridId: 'deepGrid', durationSec: 195, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/3/3c/Goldberg_variation_13.ogg/Goldberg_variation_13.ogg.mp3' },
      { id: 18, title: 'The Well-Tempered Clavier — Fugue I', subtitle: 'Well-Tempered Clavier, Book I, BWV 846 — Fugue in C', level: 'Deep', gridId: 'deepGrid', durationSec: 127, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/f/fb/Bach-wtc1-prelude-c-major.ogg/Bach-wtc1-prelude-c-major.ogg.mp3' },
      { id: 19, title: 'Mass in B Minor — Kyrie', subtitle: 'Mass in B minor, BWV 232 — I. Kyrie eleison', level: 'Deep', gridId: 'deepGrid', durationSec: 268, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/4/43/Johann_Sebastian_Bach_-_Jesu%2C_Joy_of_Man%27s_Desiring.ogg/Johann_Sebastian_Bach_-_Jesu%2C_Joy_of_Man%27s_Desiring.ogg.mp3' },
      { id: 20, title: 'Passacaglia and Fugue in C Minor', subtitle: 'BWV 582 — Organ', level: 'Deep', gridId: 'deepGrid', durationSec: 720, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/7/7c/20091104_Awadagin_Pratt_-_Bach%27s_Passacaglia_and_Fugue_in_C_minor%2C_BWV_582.ogg/20091104_Awadagin_Pratt_-_Bach%27s_Passacaglia_and_Fugue_in_C_minor%2C_BWV_582.ogg.mp3' },
      { id: 21, title: 'The Art of Fugue — Contrapunctus I', subtitle: 'Die Kunst der Fuge, BWV 1080 — Contrapunctus I', level: 'Deep', gridId: 'deepGrid', durationSec: 224, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f6/Brandenburg_Concerto_No3_in_G_major_BWV1048.ogg/Brandenburg_Concerto_No3_in_G_major_BWV1048.ogg.mp3' },
      { id: 22, title: 'Musical Offering — Ricercar a 6', subtitle: 'Das Musikalische Opfer, BWV 1079', level: 'Deep', gridId: 'deepGrid', durationSec: 412, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/7/7c/20091104_Awadagin_Pratt_-_Bach%27s_Passacaglia_and_Fugue_in_C_minor%2C_BWV_582.ogg/20091104_Awadagin_Pratt_-_Bach%27s_Passacaglia_and_Fugue_in_C_minor%2C_BWV_582.ogg.mp3' },
      { id: 23, title: 'Goldberg Variations — Var. 25', subtitle: 'Goldberg Variations, BWV 988 — Variation 25, a 2 Clav.', level: 'Deep', gridId: 'deepGrid', durationSec: 436, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/1/19/Goldberg_variations_HQ.ogg/Goldberg_variations_HQ.ogg.mp3' }
    ]
  },
  {
    id: 'mozart',
    name: 'Wolfgang Amadeus Mozart',
    shortName: 'Mozart',
    monogram: ['W.', 'A.', 'M.'],
    era: 'Classical · 1756–1791',
    pageFile: 'mozart.html',
    heroOverline: 'The Canonical Listening Guide',
    heroTitle: 'A Journey',
    heroTitleItalic: 'Through Mozart',
    heroSubtitle: 'Discover the pure, effortless beauty and profound emotion of Wolfgang Amadeus Mozart, the prodigy who defined the Classical era.',
    introHeading: 'How to Listen to Mozart',
    introText: [
      "Mozart's music often sounds so natural and inevitable that its complexity goes unnoticed. Begin with his sparkling sonatas and serenades, which are full of immediate charm.",
      "As you move to his concertos and symphonies, listen for the operatic interplay between instruments. Finally, his late operas and the Requiem reveal an unparalleled depth of human emotion."
    ],
    roadmap: [
      { num: 'I', title: 'Beginner Mozart', desc: 'Melodic grace, lively rhythms, and unmistakable joy.' },
      { num: 'II', title: 'Intermediate Mozart', desc: 'Symphonies and concertos where drama meets perfect structure.' },
      { num: 'III', title: 'Deep Mozart', desc: 'The profound late operas, chamber works, and the sublime Requiem.' }
    ],
    aboutBio: [
      "Born in Salzburg in 1756, Wolfgang Amadeus Mozart showed prodigious ability from his earliest childhood. Already competent on keyboard and violin, he composed from the age of five and performed before European royalty.",
      "At 17, Mozart was engaged as a musician at the Salzburg court but grew restless and traveled in search of a better position. While visiting Vienna in 1781, he was dismissed from his Salzburg position. He chose to stay in the capital, where he achieved fame but little financial security.",
      "During his final years in Vienna, he composed many of his best-known symphonies, concertos, and operas, and portions of the Requiem, which was largely unfinished at the time of his early death at the age of 35."
    ],
    aboutFacts: [
      { num: '600+', label: 'Compositions in the Köchel (K.) catalogue' },
      { num: '35', label: 'Years of life, producing an astonishing volume of music' },
      { num: '1756 – 1791', label: 'The defining lifespan of the Classical era' },
      { num: '22', label: 'Operas composed, ranging from comedies to profound tragedies' }
    ],
    tracks: [
      // Example placeholders for Mozart
      { id: 101, title: 'Eine kleine Nachtmusik', subtitle: 'Serenade No. 13 in G major, K. 525 — I. Allegro', level: 'Beginner', gridId: 'beginnerGrid', durationSec: 360, audioUrl: '#' },
      { id: 102, title: 'Piano Sonata No. 11', subtitle: 'K. 331 — III. Alla Turca', level: 'Beginner', gridId: 'beginnerGrid', durationSec: 210, audioUrl: '#' },
      { id: 103, title: 'Symphony No. 40', subtitle: 'K. 550 — I. Molto allegro', level: 'Intermediate', gridId: 'intermediateGrid', durationSec: 480, audioUrl: '#' },
      { id: 104, title: 'Requiem — Lacrimosa', subtitle: 'Requiem in D minor, K. 626', level: 'Deep', gridId: 'deepGrid', durationSec: 200, audioUrl: '#' }
    ]
  },
  {
    id: 'beethoven',
    name: 'Ludwig van Beethoven',
    shortName: 'Beethoven',
    monogram: ['L.', 'V.', 'B.'],
    era: 'Classical / Romantic · 1770–1827',
    pageFile: 'beethoven.html',
    heroOverline: 'The Canonical Listening Guide',
    heroTitle: 'A Journey',
    heroTitleItalic: 'Through Beethoven',
    heroSubtitle: 'Experience the revolutionary power and uncompromising individualism of Ludwig van Beethoven.',
    introHeading: 'How to Listen to Beethoven',
    introText: [
      "Beethoven tore up the rulebook of classical music. His works demand your attention through their sheer force, dramatic contrasts, and rhythmic drive.",
      "Start with the heroic symphonies and tempestuous piano sonatas. Then explore his late string quartets—music so visionary that it still sounds modern today."
    ],
    roadmap: [
      { num: 'I', title: 'Beginner Beethoven', desc: 'Famous motifs, dramatic piano sonatas, and heroic themes.' },
      { num: 'II', title: 'Intermediate Beethoven', desc: 'The groundbreaking middle-period symphonies and concertos.' },
      { num: 'III', title: 'Deep Beethoven', desc: 'The introspective late sonatas and quartets, where form dissolves into pure expression.' }
    ],
    aboutBio: [
      "Ludwig van Beethoven, born in Bonn in 1770, was a crucial figure in the transition between the Classical and Romantic eras in classical music.",
      "By his late 20s, his hearing began to deteriorate, and by the last decade of his life, he was almost completely deaf. Despite this profound personal tragedy, his creative output only grew more ambitious and groundbreaking.",
      "He elevated instrumental music to the highest plane of art, demanding that music not just entertain, but express profound philosophical and emotional truths."
    ],
    aboutFacts: [
      { num: '9', label: 'Symphonies that revolutionized orchestral music' },
      { num: '32', label: 'Piano sonatas forming the \"New Testament\" for pianists' },
      { num: '1770 – 1827', label: 'Lifespan bridging two major musical eras' },
      { num: '0', label: 'Hearing ability in his final years' }
    ],
    tracks: [
      { id: 201, title: 'Für Elise', subtitle: 'Bagatelle No. 25 in A minor', level: 'Beginner', gridId: 'beginnerGrid', durationSec: 180, audioUrl: '#' },
      { id: 202, title: 'Moonlight Sonata', subtitle: 'Piano Sonata No. 14 — I. Adagio sostenuto', level: 'Beginner', gridId: 'beginnerGrid', durationSec: 360, audioUrl: '#' },
      { id: 203, title: 'Symphony No. 5', subtitle: 'Op. 67 — I. Allegro con brio', level: 'Intermediate', gridId: 'intermediateGrid', durationSec: 420, audioUrl: '#' },
      { id: 204, title: 'Symphony No. 9', subtitle: 'Op. 125 — IV. Ode to Joy (Excerpt)', level: 'Deep', gridId: 'deepGrid', durationSec: 900, audioUrl: '#' }
    ]
  },
  {
    id: 'chopin',
    name: 'Frédéric Chopin',
    shortName: 'Chopin',
    monogram: ['F.', 'C.', ''],
    era: 'Romantic · 1810–1849',
    pageFile: 'chopin.html',
    heroOverline: 'The Canonical Listening Guide',
    heroTitle: 'A Journey',
    heroTitleItalic: 'Through Chopin',
    heroSubtitle: 'Enter the poetic and melancholic world of the "Poet of the Piano".',
    introHeading: 'How to Listen to Chopin',
    introText: [
      "Chopin's music is almost entirely dedicated to the piano. It is intimate, expressive, and characterized by beautiful, singing melodies (bel canto) over flowing accompaniments.",
      "Listen for the rubato—the subtle push and pull of tempo—that gives his music its breath and emotional fluidity."
    ],
    roadmap: [
      { num: 'I', title: 'Beginner Chopin', desc: 'Accessible nocturnes and waltzes full of immediate romantic appeal.' },
      { num: 'II', title: 'Intermediate Chopin', desc: 'The virtuosic etudes and dramatic polonaises.' },
      { num: 'III', title: 'Deep Chopin', desc: 'The complex ballades and sonatas, epic narratives in sound.' }
    ],
    aboutBio: [
      "Frédéric Chopin was a Polish composer and virtuoso pianist of the Romantic era who wrote primarily for solo piano.",
      "He has maintained worldwide renown as a leading musician of his era, one whose \"poetic genius was based on a professional technique that was without equal in his generation.\"",
      "Chopin was born in Żelazowa Wola in the Duchy of Warsaw and grew up in Warsaw, which in 1815 became part of Congress Poland."
    ],
    aboutFacts: [
      { num: '230+', label: 'Works, nearly all involving the piano' },
      { num: '21', label: 'Nocturnes that redefined the genre' },
      { num: '1810 – 1849', label: 'A short life cut short by illness' },
      { num: '2', label: 'Piano concertos composed in his youth' }
    ],
    tracks: [
      { id: 301, title: 'Nocturne in E-flat major', subtitle: 'Op. 9, No. 2', level: 'Beginner', gridId: 'beginnerGrid', durationSec: 270, audioUrl: '#' },
      { id: 302, title: 'Waltz in D-flat major', subtitle: 'Op. 64, No. 1 \"Minute Waltz\"', level: 'Beginner', gridId: 'beginnerGrid', durationSec: 110, audioUrl: '#' },
      { id: 303, title: 'Étude in C minor', subtitle: 'Op. 10, No. 12 \"Revolutionary\"', level: 'Intermediate', gridId: 'intermediateGrid', durationSec: 160, audioUrl: '#' },
      { id: 304, title: 'Ballade No. 1 in G minor', subtitle: 'Op. 23', level: 'Deep', gridId: 'deepGrid', durationSec: 540, audioUrl: '#' }
    ]
  },
  {
    id: 'tchaikovsky',
    name: 'Pyotr Ilyich Tchaikovsky',
    shortName: 'Tchaikovsky',
    monogram: ['P.', 'I.', 'T.'],
    era: 'Romantic · 1840–1893',
    pageFile: 'tchaikovsky.html',
    heroOverline: 'The Canonical Listening Guide',
    heroTitle: 'A Journey',
    heroTitleItalic: 'Through Tchaikovsky',
    heroSubtitle: 'Immerse yourself in the sweeping melodies, lush orchestration, and heart-on-sleeve emotion of Russia\'s great Romantic.',
    introHeading: 'How to Listen to Tchaikovsky',
    introText: [
      "Tchaikovsky wore his heart on his sleeve. His music is direct, emotionally overpowering, and packed with some of the most memorable melodies ever written.",
      "From the fairy-tale magic of his ballets to the existential despair of his late symphonies, his work is a testament to the extremes of human feeling."
    ],
    roadmap: [
      { num: 'I', title: 'Beginner Tchaikovsky', desc: 'The beloved ballets (Swan Lake, The Nutcracker) and instantly recognizable themes.' },
      { num: 'II', title: 'Intermediate Tchaikovsky', desc: 'The sweeping concertos and dramatic overtures.' },
      { num: 'III', title: 'Deep Tchaikovsky', desc: 'The devastatingly emotional later symphonies, especially the "Pathétique".' }
    ],
    aboutBio: [
      "Pyotr Ilyich Tchaikovsky was the first Russian composer whose music made a lasting impression internationally.",
      "Despite his many popular successes, Tchaikovsky's life was punctuated by personal crises and depression. Contributory factors included his early separation from his mother, the death of his close friend and colleague Nikolai Rubinstein, and his disastrous marriage.",
      "His sudden death at the age of 53 is generally attributed to cholera, but there is an ongoing debate as to whether it was accidental or intentional."
    ],
    aboutFacts: [
      { num: '3', label: 'Ballets that remain the most popular in the world' },
      { num: '6', label: 'Numbered symphonies charting his emotional life' },
      { num: '1840 – 1893', label: 'Lifespan marking the height of Russian Romanticism' },
      { num: '11', label: 'Operas, including Eugene Onegin and The Queen of Spades' }
    ],
    tracks: [
      { id: 401, title: 'Dance of the Sugar Plum Fairy', subtitle: 'The Nutcracker, Op. 71', level: 'Beginner', gridId: 'beginnerGrid', durationSec: 120, audioUrl: '#' },
      { id: 402, title: 'Swan Lake Theme', subtitle: 'Swan Lake, Op. 20', level: 'Beginner', gridId: 'beginnerGrid', durationSec: 180, audioUrl: '#' },
      { id: 403, title: 'Piano Concerto No. 1', subtitle: 'Op. 23 — I. Allegro non troppo e molto maestoso', level: 'Intermediate', gridId: 'intermediateGrid', durationSec: 1200, audioUrl: '#' },
      { id: 404, title: 'Symphony No. 6', subtitle: '\"Pathétique\", Op. 74 — IV. Finale: Adagio lamentoso', level: 'Deep', gridId: 'deepGrid', durationSec: 600, audioUrl: '#' }
    ]
  },
  {
    id: 'vivaldi',
    name: 'Antonio Vivaldi',
    shortName: 'Vivaldi',
    monogram: ['A.', 'V.', ''],
    era: 'Baroque · 1678–1741',
    pageFile: 'vivaldi.html',
    heroOverline: 'The Canonical Listening Guide',
    heroTitle: 'A Journey',
    heroTitleItalic: 'Through Vivaldi',
    heroSubtitle: 'Experience the fiery energy, rhythmic drive, and brilliant color of the "Red Priest" of Venice.',
    introHeading: 'How to Listen to Vivaldi',
    introText: [
      "Vivaldi's music is driven by an irrepressible rhythmic energy. Listen for the 'motoric' rhythm of the Baroque era, driving the music forward with unstoppable momentum.",
      "He was a master of the concerto, pitting a solo instrument against the orchestra in thrilling displays of virtuosity."
    ],
    roadmap: [
      { num: 'I', title: 'Beginner Vivaldi', desc: 'The Four Seasons—the most famous concertos ever written.' },
      { num: 'II', title: 'Intermediate Vivaldi', desc: 'Dazzling concertos for various instruments (mandolin, cello, flute).' },
      { num: 'III', title: 'Deep Vivaldi', desc: 'Sacred choral works like the Gloria, showing a different side of his genius.' }
    ],
    aboutBio: [
      "Antonio Lucio Vivaldi was an Italian Baroque composer, virtuoso violinist, teacher, impresario, and Roman Catholic priest.",
      "Born in Venice, he is recognized as one of the greatest Baroque composers, and his influence during his lifetime was widespread across Europe, significantly influencing J.S. Bach.",
      "He composed many of his major works while working at the Ospedale della Pietà, a home for abandoned children in Venice, where he trained a world-famous all-female orchestra."
    ],
    aboutFacts: [
      { num: '500+', label: 'Concertos composed for various instruments' },
      { num: '1', label: 'Nickname: \"il Prete Rosso\" (The Red Priest)' },
      { num: '1678 – 1741', label: 'Lifespan spanning the Italian Baroque' },
      { num: '50', label: 'Operas claimed to have been written by him' }
    ],
    tracks: [
      { id: 501, title: 'Spring (La Primavera)', subtitle: 'The Four Seasons — I. Allegro', level: 'Beginner', gridId: 'beginnerGrid', durationSec: 200, audioUrl: '#' },
      { id: 502, title: 'Summer (L\'Estate)', subtitle: 'The Four Seasons — III. Presto', level: 'Beginner', gridId: 'beginnerGrid', durationSec: 170, audioUrl: '#' },
      { id: 503, title: 'Mandolin Concerto in C major', subtitle: 'RV 425 — I. Allegro', level: 'Intermediate', gridId: 'intermediateGrid', durationSec: 190, audioUrl: '#' },
      { id: 504, title: 'Gloria in D major', subtitle: 'RV 589 — I. Gloria in excelsis Deo', level: 'Deep', gridId: 'deepGrid', durationSec: 150, audioUrl: '#' }
    ]
  },
  {
    id: 'handel',
    name: 'George Frideric Handel',
    shortName: 'Handel',
    monogram: ['G.', 'F.', 'H.'],
    era: 'Baroque · 1685–1759',
    pageFile: 'handel.html',
    heroOverline: 'The Canonical Listening Guide',
    heroTitle: 'A Journey',
    heroTitleItalic: 'Through Handel',
    heroSubtitle: 'Revel in the grandeur, theatricality, and majestic choruses of a true musical cosmopolitan.',
    introHeading: 'How to Listen to Handel',
    introText: [
      "Handel was a man of the theater. Whether writing operas, oratorios, or instrumental suites for royal water parties, his music is designed to make a public impact.",
      "Listen for his broad, open melodies and the way he uses the choir to create overwhelming sonic grandeur."
    ],
    roadmap: [
      { num: 'I', title: 'Beginner Handel', desc: 'Ceremonial suites (Water Music, Royal Fireworks) and famous choruses.' },
      { num: 'II', title: 'Intermediate Handel', desc: 'Vocal fireworks in his Italian operas and English oratorios.' },
      { num: 'III', title: 'Deep Handel', desc: 'The complete Messiah, arguably the greatest choral work ever written.' }
    ],
    aboutBio: [
      "George Frideric Handel was a German-British Baroque composer well known for his operas, oratorios, anthems, concerti grossi, and organ concertos.",
      "Handel received his training in Halle and worked as a composer in Hamburg and Italy before settling in London in 1712, where he spent the bulk of his career and became a naturalised British subject.",
      "He was strongly influenced both by the great composers of the Italian Baroque and by the middle German polyphonic choral tradition, and he in turn influenced Mozart, Haydn, and Beethoven."
    ],
    aboutFacts: [
      { num: '42', label: 'Operas written, largely in the Italian style' },
      { num: '29', label: 'Oratorios, inventing the English oratorio genre' },
      { num: '1685 – 1759', label: 'Born the same year as J.S. Bach' },
      { num: '24', label: 'Days it took to compose the Messiah in a burst of inspiration' }
    ],
    tracks: [
      { id: 601, title: 'Hallelujah Chorus', subtitle: 'Messiah, HWV 56', level: 'Beginner', gridId: 'beginnerGrid', durationSec: 240, audioUrl: '#' },
      { id: 602, title: 'Water Music: Hornpipe', subtitle: 'Suite No. 2 in D major, HWV 349', level: 'Beginner', gridId: 'beginnerGrid', durationSec: 150, audioUrl: '#' },
      { id: 603, title: 'Zadok the Priest', subtitle: 'Coronation Anthems, HWV 258', level: 'Intermediate', gridId: 'intermediateGrid', durationSec: 360, audioUrl: '#' },
      { id: 604, title: 'Lascia ch\'io pianga', subtitle: 'Rinaldo, HWV 7', level: 'Deep', gridId: 'deepGrid', durationSec: 290, audioUrl: '#' }
    ]
  }
];

// If used in a Node environment (for future potential), or simple global export:
if (typeof module !== 'undefined' && module.exports) {
  module.exports = COMPOSERS;
}
