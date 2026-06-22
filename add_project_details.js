const fs = require('fs');
const path = require('path');

const slugs = [
  'uramba-cimarron',
  'etnodesarrollo-afroputumayo',
  'talento-afro-innovador',
  'guardianes-rios',
  'formacion-derechos'
];

const mockContent = {
  es: {
    title: "Detalles del Proyecto",
    galleryTitle: "Galería de Actividades",
    "uramba-cimarron": {
      "title": "Uramba Cimarrón",
      "content": "Uramba Cimarrón es una iniciativa central de nuestra asociación orientada a fortalecer el tejido social y la solidaridad comunitaria. A través del trabajo colectivo (Uramba), buscamos empoderar a las comunidades afrodescendientes del Putumayo, promoviendo la organización comunitaria, el rescate de nuestras tradiciones ancestrales y la construcción de un futuro más equitativo y digno para todos. Este proyecto involucra talleres de liderazgo, encuentros culturales y jornadas de trabajo solidario."
    },
    "etnodesarrollo-afroputumayo": {
      "title": "Etnodesarrollo Afroputumayo",
      "content": "Este proyecto se enfoca en impulsar procesos de etnodesarrollo que fortalezcan la autonomía económica y la identidad territorial de nuestras comunidades. Implementamos estrategias que respetan nuestra cosmovisión y el entorno natural del Amazonas, fomentando prácticas agrícolas sostenibles, emprendimientos locales y la defensa de nuestros derechos territoriales. Es un paso vital hacia el auto-sostenimiento y la dignidad colectiva."
    },
    "talento-afro-innovador": {
      "title": "Talento Afro Innovador",
      "content": "Con Talento Afro Innovador, abrimos puertas para las nuevas generaciones afroputumayenses. Este programa de formación integral ofrece herramientas en liderazgo, tecnología, emprendimiento y artes. Nuestro objetivo es que los jóvenes encuentren espacios seguros para desarrollar su potencial, conectarse con sus raíces y convertirse en los futuros líderes y agentes de cambio dentro y fuera de sus comunidades."
    },
    "guardianes-rios": {
      "title": "Guardianes de los Ríos Amazónicos",
      "content": "El agua es vida y memoria. Guardianes de los Ríos Amazónicos es un proyecto dedicado al cuidado del territorio, la protección de nuestros ríos y la preservación de los saberes ambientales ancestrales. Organizamos jornadas de limpieza, educación ambiental y monitoreo de las fuentes hídricas del Putumayo, trabajando de la mano con las comunidades locales para garantizar un ecosistema saludable para el futuro."
    },
    "formacion-derechos": {
      "title": "Formación en Derechos y Liderazgo",
      "content": "Creemos firmemente que la educación es la base de la libertad. Este proyecto desarrolla procesos pedagógicos continuos para fortalecer la ciudadanía activa, la equidad de género y la participación política de la población afrodescendiente. A través de seminarios y diplomados comunitarios, empoderamos a líderes y lideresas para que defiendan sus derechos humanos, territoriales y culturales con conocimiento y convicción."
    }
  },
  en: {
    title: "Project Details",
    galleryTitle: "Activity Gallery",
    "uramba-cimarron": {
      "title": "Uramba Cimarrón",
      "content": "Uramba Cimarrón is a central initiative of our association aimed at strengthening the social fabric and community solidarity. Through collective work (Uramba), we seek to empower Afro-descendant communities in Putumayo, promoting community organization, the rescue of our ancestral traditions, and the construction of a more equitable and dignified future for all."
    },
    "etnodesarrollo-afroputumayo": {
      "title": "Ethnodevelopment Afroputumayo",
      "content": "This project focuses on promoting ethnodevelopment processes that strengthen economic autonomy and the territorial identity of our communities. We implement strategies that respect our worldview and the natural environment of the Amazon, encouraging sustainable agricultural practices and the defense of our territorial rights."
    },
    "talento-afro-innovador": {
      "title": "Innovative Afro Talent",
      "content": "With Innovative Afro Talent, we open doors for new Afro-Putumayan generations. This comprehensive training program offers tools in leadership, technology, entrepreneurship, and arts. Our goal is for young people to find safe spaces to develop their potential and become future leaders."
    },
    "guardianes-rios": {
      "title": "Guardians of the Amazon Rivers",
      "content": "Water is life and memory. Guardians of the Amazon Rivers is a project dedicated to the care of the territory, the protection of our rivers, and the preservation of ancestral environmental knowledge. We organize cleanup days and environmental education to ensure a healthy ecosystem."
    },
    "formacion-derechos": {
      "title": "Rights and Leadership Training",
      "content": "We firmly believe that education is the foundation of freedom. This project develops continuous pedagogical processes to strengthen active citizenship, gender equity, and political participation of the Afro-descendant population, empowering community leaders."
    }
  },
  fr: {
    title: "Détails du projet",
    galleryTitle: "Galerie d'activités",
    "uramba-cimarron": {
      "title": "Uramba Cimarrón",
      "content": "Uramba Cimarrón est une initiative centrale de notre association visant à renforcer le tissu social et la solidarité communautaire. Par le travail collectif (Uramba), nous cherchons à autonomiser les communautés afro-descendantes du Putumayo."
    },
    "etnodesarrollo-afroputumayo": {
      "title": "Ethnodéveloppement Afroputumayo",
      "content": "Ce projet se concentre sur la promotion des processus d'ethnodéveloppement qui renforcent l'autonomie économique et l'identité territoriale de nos communautés."
    },
    "talento-afro-innovador": {
      "title": "Talent Afro Innovant",
      "content": "Avec Talent Afro Innovant, nous ouvrons des portes aux nouvelles générations afro-putumayennes grâce à un programme de formation complet."
    },
    "guardianes-rios": {
      "title": "Gardiens des rivières d'Amazonie",
      "content": "L'eau est la vie et la mémoire. Gardiens des rivières d'Amazonie est un projet dédié au soin du territoire et à la protection de nos rivières."
    },
    "formacion-derechos": {
      "title": "Formation aux droits et au leadership",
      "content": "Nous croyons fermement que l'éducation est le fondement de la liberté. Ce projet développe des processus pédagogiques pour renforcer la citoyenneté active."
    }
  },
  de: {
    title: "Projektdetails",
    galleryTitle: "Aktivitätsgalerie",
    "uramba-cimarron": {
      "title": "Uramba Cimarrón",
      "content": "Uramba Cimarrón ist eine zentrale Initiative unserer Vereinigung zur Stärkung des sozialen Gefüges und der Solidarität der Gemeinschaft durch kollektive Arbeit."
    },
    "etnodesarrollo-afroputumayo": {
      "title": "Ethno-Entwicklung Afroputumayo",
      "content": "Dieses Projekt konzentriert sich auf die Förderung von Ethno-Entwicklungsprozessen, die die wirtschaftliche Autonomie und die territoriale Identität unserer Gemeinden stärken."
    },
    "talento-afro-innovador": {
      "title": "Innovatives Afro-Talent",
      "content": "Mit Innovatives Afro-Talent öffnen wir Türen für neue afro-putumayanische Generationen durch ein umfassendes Ausbildungsprogramm."
    },
    "guardianes-rios": {
      "title": "Wächter der Amazonasflüsse",
      "content": "Wasser ist Leben und Erinnerung. Wächter der Amazonasflüsse ist ein Projekt zum Schutz unseres Territoriums und unserer Flüsse."
    },
    "formacion-derechos": {
      "title": "Rechte- und Führungstraining",
      "content": "Wir glauben fest daran, dass Bildung die Grundlage der Freiheit ist. Dieses Projekt entwickelt pädagogische Prozesse zur Stärkung der aktiven Bürgerschaft."
    }
  },
  it: {
    title: "Dettagli del Progetto",
    galleryTitle: "Galleria delle Attività",
    "uramba-cimarron": {
      "title": "Uramba Cimarrón",
      "content": "Uramba Cimarrón è un'iniziativa centrale della nostra associazione volta a rafforzare il tessuto sociale e la solidarietà comunitaria attraverso il lavoro collettivo."
    },
    "etnodesarrollo-afroputumayo": {
      "title": "Sviluppo Etnico Afroputumayo",
      "content": "Questo progetto si concentra sulla promozione dei processi di sviluppo etnico che rafforzano l'autonomia economica e l'identità territoriale delle nostre comunità."
    },
    "talento-afro-innovador": {
      "title": "Talento Afro Innovativo",
      "content": "Con Talento Afro Innovativo apriamo le porte alle nuove generazioni afro-putumayane attraverso un programma di formazione completo."
    },
    "guardianes-rios": {
      "title": "Guardiani dei fiumi amazzonici",
      "content": "L'acqua è vita e memoria. Guardiani dei fiumi amazzonici è un progetto dedicato alla cura del territorio e alla protezione dei nostri fiumi."
    },
    "formacion-derechos": {
      "title": "Formazione sui diritti e sulla leadership",
      "content": "Crediamo fermamente che l'educazione sia il fondamento della libertà. Questo progetto sviluppa processi pedagogici per rafforzare la cittadinanza attiva."
    }
  }
};

const msgsDir = path.join(__dirname, 'messages');
for (const [lang, content] of Object.entries(mockContent)) {
  const filePath = path.join(msgsDir, `${lang}.json`);
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const json = JSON.parse(fileContent);
    json.ProjectDetails = content;
    fs.writeFileSync(filePath, JSON.stringify(json, null, 2), 'utf8');
    console.log(`Updated ProjectDetails in ${lang}.json`);
  }
}
