const fs = require('fs');
const path = require('path');

const data = {
  es: {
    title1: "Casa de Cultura Afroputumayense",
    subtitle1: "Librada Maturana",
    desc1: "Un espacio vital para la memoria, el encuentro y la construcción comunitaria en el corazón del Putumayo.",
    title2: "Nuestro Hogar Comunitario",
    desc2_1: "La Casa Afro es más que una estructura física; es el corazón vibrante de nuestra organización. Aquí se entrelazan nuestras tradiciones, se planea el futuro y se celebra la vida.",
    desc2_2: "En este espacio desarrollamos talleres, reuniones comunitarias, ensayos musicales y actividades de preservación cultural."
  },
  en: {
    title1: "Afroputumayense House of Culture",
    subtitle1: "Librada Maturana",
    desc1: "A vital space for memory, gathering, and community building in the heart of Putumayo.",
    title2: "Our Community Home",
    desc2_1: "The Casa Afro is more than a physical structure; it is the vibrant heart of our organization. Here our traditions intertwine, the future is planned, and life is celebrated.",
    desc2_2: "In this space, we hold workshops, community meetings, musical rehearsals, and cultural preservation activities."
  },
  fr: {
    title1: "Maison de la Culture Afroputumayense",
    subtitle1: "Librada Maturana",
    desc1: "Un espace vital pour la mémoire, les rencontres et la construction communautaire au cœur du Putumayo.",
    title2: "Notre Foyer Communautaire",
    desc2_1: "La Casa Afro est plus qu'une structure physique ; c'est le cœur battant de notre organisation. C'est ici que nos traditions s'entremêlent, que l'avenir se planifie et que la vie est célébrée.",
    desc2_2: "Dans cet espace, nous organisons des ateliers, des réunions communautaires, des répétitions musicales et des activités de préservation culturelle."
  },
  de: {
    title1: "Haus der Afroputumayense-Kultur",
    subtitle1: "Librada Maturana",
    desc1: "Ein lebenswichtiger Raum für Erinnerung, Begegnung und Gemeinschaftsaufbau im Herzen von Putumayo.",
    title2: "Unser Gemeinschaftszentrum",
    desc2_1: "Die Casa Afro ist mehr als eine physische Struktur; sie ist das schlagende Herz unserer Organisation. Hier verflechten sich unsere Traditionen, die Zukunft wird geplant und das Leben wird gefeiert.",
    desc2_2: "In diesem Raum veranstalten wir Workshops, Gemeindetreffen, musikalische Proben und Aktivitäten zur Erhaltung der Kultur."
  },
  it: {
    title1: "Casa della Cultura Afroputumayense",
    subtitle1: "Librada Maturana",
    desc1: "Uno spazio vitale per la memoria, l'incontro e la costruzione della comunità nel cuore del Putumayo.",
    title2: "La Nostra Casa Comunitaria",
    desc2_1: "La Casa Afro è più di una struttura fisica; è il cuore pulsante della nostra organizzazione. Qui si intrecciano le nostre tradizioni, si progetta il futuro e si celebra la vita.",
    desc2_2: "In questo spazio organizziamo laboratori, riunioni comunitarie, prove musicali e attività di conservazione culturale."
  }
};

const msgsDir = path.join(__dirname, 'messages');
for (const [lang, translations] of Object.entries(data)) {
  const filePath = path.join(msgsDir, `${lang}.json`);
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const json = JSON.parse(fileContent);
    json.CasaAfroPage = translations;
    fs.writeFileSync(filePath, JSON.stringify(json, null, 2), 'utf8');
    console.log(`Updated ${lang}.json`);
  }
}
