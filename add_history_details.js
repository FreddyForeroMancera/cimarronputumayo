const fs = require('fs');
const path = require('path');

const mockContent = {
  es: {
    history: {
      titleLine1: "Historial de",
      titleLine2: "Procesos ejecutados",
      desc: "Un recorrido por las acciones y procesos que han fortalecido nuestra comunidad, nuestra cultura y nuestro camino organizativo.",
      rows: {
        1: {
          col1: "Asociación de cónyuges de los diplomáticos:",
          col2: "2 aulas de la Casa de la Cultura Afroputumayense.",
          col3: "Ejecutado exitosamente",
          col4: "2012"
        },
        2: {
          col1: "CISP (Italia)",
          col2: "Adecuación de la Casa de la Cultura Afro Cimarrón Putumayo.",
          col3: "Ejecutado Exitosamente",
          col4: "2019"
        },
        3: {
          col1: "Trabajo cultural continuo",
          col2: "Casa de Cultura Afroputumayense \"Librada Maturana\":",
          col3: "Ejecución Permanente",
          col4: "Permanente"
        }
      }
    },
    details: {
      "aulas-casa-cultura-2012": {
        "title": "Aulas Casa de la Cultura 2012",
        "content": "Con el apoyo de la Asociación de cónyuges de los diplomáticos, en 2012 logramos la construcción y adecuación de 2 aulas fundamentales para la Casa de la Cultura Afroputumayense. Este logro permitió expandir significativamente nuestra capacidad de enseñanza, ofreciendo a las nuevas generaciones un espacio físico adecuado para talleres artísticos, reuniones organizativas y la transmisión de saberes ancestrales."
      },
      "adecuacion-casa-cultura-2019": {
        "title": "Adecuación Casa de la Cultura 2019",
        "content": "En alianza con el CISP (Comitato Internazionale per lo Sviluppo dei Popoli) de Italia, llevamos a cabo en 2019 una adecuación estructural de la Casa de la Cultura Afro Cimarrón Putumayo. Las obras fortalecieron las bases de nuestro recinto de resistencia cultural, mejorando la infraestructura tecnológica y espacial para acoger de manera digna las celebraciones, asambleas y proyectos de etnodesarrollo de nuestra comunidad."
      }
    }
  },
  en: {
    history: {
      titleLine1: "History of",
      titleLine2: "Executed Processes",
      desc: "A journey through the actions and processes that have strengthened our community, our culture, and our organizational path.",
      rows: {
        1: {
          col1: "Diplomats' Spouses Association:",
          col2: "2 classrooms of the Afroputumayan House of Culture.",
          col3: "Successfully executed",
          col4: "2012"
        },
        2: {
          col1: "CISP (Italy)",
          col2: "Adaptation of the Afro Cimarron Putumayo House of Culture.",
          col3: "Successfully Executed",
          col4: "2019"
        },
        3: {
          col1: "Continuous cultural work",
          col2: "Afroputumayan House of Culture \"Librada Maturana\":",
          col3: "Permanent Execution",
          col4: "Permanent"
        }
      }
    },
    details: {
      "aulas-casa-cultura-2012": {
        "title": "House of Culture Classrooms 2012",
        "content": "With the support of the Diplomats' Spouses Association, in 2012 we managed the construction and adaptation of 2 fundamental classrooms for the Afroputumayan House of Culture. This achievement significantly expanded our teaching capacity."
      },
      "adecuacion-casa-cultura-2019": {
        "title": "House of Culture Adaptation 2019",
        "content": "In alliance with CISP (Italy), we carried out a structural adaptation of the Afro Cimarron Putumayo House of Culture in 2019. The works strengthened the foundations of our cultural resistance venue."
      }
    }
  },
  fr: {
    history: {
      titleLine1: "Historique des",
      titleLine2: "Processus exécutés",
      desc: "Un parcours à travers les actions et processus qui ont renforcé notre communauté, notre culture et notre voie organisationnelle.",
      rows: {
        1: {
          col1: "Association des conjoints de diplomates:",
          col2: "2 salles de classe de la Maison de la Culture Afro-putumayenne.",
          col3: "Exécuté avec succès",
          col4: "2012"
        },
        2: {
          col1: "CISP (Italie)",
          col2: "Adaptation de la Maison de la Culture Afro Cimarron Putumayo.",
          col3: "Exécuté avec succès",
          col4: "2019"
        },
        3: {
          col1: "Travail culturel continu",
          col2: "Maison de la Culture Afro-putumayenne \"Librada Maturana\":",
          col3: "Exécution permanente",
          col4: "Permanent"
        }
      }
    },
    details: {
      "aulas-casa-cultura-2012": {
        "title": "Salles de classe Maison de la Culture 2012",
        "content": "Avec le soutien de l'Association des conjoints de diplomates, nous avons géré en 2012 la construction et l'adaptation de 2 salles de classe pour la Maison de la Culture Afro-putumayenne."
      },
      "adecuacion-casa-cultura-2019": {
        "title": "Adaptation Maison de la Culture 2019",
        "content": "En alliance avec le CISP (Italie), nous avons réalisé en 2019 une adaptation structurelle de la Maison de la Culture Afro Cimarron Putumayo."
      }
    }
  },
  de: {
    history: {
      titleLine1: "Geschichte der",
      titleLine2: "Durchgeführten Prozesse",
      desc: "Eine Reise durch die Aktionen und Prozesse, die unsere Gemeinschaft, unsere Kultur und unseren organisatorischen Weg gestärkt haben.",
      rows: {
        1: {
          col1: "Vereinigung der Diplomaten-Ehepartner:",
          col2: "2 Klassenzimmer des afro-putumayanischen Kulturhauses.",
          col3: "Erfolgreich durchgeführt",
          col4: "2012"
        },
        2: {
          col1: "CISP (Italien)",
          col2: "Anpassung des Kulturhauses Afro Cimarron Putumayo.",
          col3: "Erfolgreich durchgeführt",
          col4: "2019"
        },
        3: {
          col1: "Kontinuierliche Kulturarbeit",
          col2: "Afro-putumayanisches Kulturhaus \"Librada Maturana\":",
          col3: "Dauerhafte Durchführung",
          col4: "Dauerhaft"
        }
      }
    },
    details: {
      "aulas-casa-cultura-2012": {
        "title": "Kulturhaus Klassenzimmer 2012",
        "content": "Mit Unterstützung der Vereinigung der Diplomaten-Ehepartner gelang uns 2012 der Bau und die Anpassung von 2 Klassenzimmern für das afro-putumayanische Kulturhaus."
      },
      "adecuacion-casa-cultura-2019": {
        "title": "Anpassung des Kulturhauses 2019",
        "content": "In Zusammenarbeit mit CISP (Italien) führten wir 2019 eine strukturelle Anpassung des Kulturhauses Afro Cimarron Putumayo durch."
      }
    }
  },
  it: {
    history: {
      titleLine1: "Cronologia dei",
      titleLine2: "Processi eseguiti",
      desc: "Un viaggio attraverso le azioni e i processi che hanno rafforzato la nostra comunità, la nostra cultura e il nostro percorso organizzativo.",
      rows: {
        1: {
          col1: "Associazione dei coniugi dei diplomatici:",
          col2: "2 aule della Casa della Cultura Afroputumayana.",
          col3: "Eseguito con successo",
          col4: "2012"
        },
        2: {
          col1: "CISP (Italia)",
          col2: "Adeguamento della Casa della Cultura Afro Cimarron Putumayo.",
          col3: "Eseguito con successo",
          col4: "2019"
        },
        3: {
          col1: "Lavoro culturale continuo",
          col2: "Casa della Cultura Afroputumayana \"Librada Maturana\":",
          col3: "Esecuzione permanente",
          col4: "Permanente"
        }
      }
    },
    details: {
      "aulas-casa-cultura-2012": {
        "title": "Aule Casa della Cultura 2012",
        "content": "Con il supporto dell'Associazione dei coniugi dei diplomatici, nel 2012 abbiamo gestito la costruzione e l'adeguamento di 2 aule per la Casa della Cultura Afroputumayana."
      },
      "adecuacion-casa-cultura-2019": {
        "title": "Adeguamento Casa della Cultura 2019",
        "content": "In alleanza con il CISP (Italia), nel 2019 abbiamo effettuato un adeguamento strutturale della Casa della Cultura Afro Cimarron Putumayo."
      }
    }
  }
};

const msgsDir = path.join(__dirname, 'messages');
for (const [lang, content] of Object.entries(mockContent)) {
  const filePath = path.join(msgsDir, `${lang}.json`);
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const json = JSON.parse(fileContent);
    json.ProjectsHistory = content.history;
    // Append details
    if (!json.ProjectDetails) json.ProjectDetails = {};
    json.ProjectDetails["aulas-casa-cultura-2012"] = content.details["aulas-casa-cultura-2012"];
    json.ProjectDetails["adecuacion-casa-cultura-2019"] = content.details["adecuacion-casa-cultura-2019"];
    
    fs.writeFileSync(filePath, JSON.stringify(json, null, 2), 'utf8');
    console.log(`Updated translations in ${lang}.json`);
  }
}
