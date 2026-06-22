const fs = require('fs');
const path = require('path');

const mockContent = {
  es: {
    "aulas-casa-cultura-2012": {
      "title": "Aulas Casa de la Cultura 2012",
      "content": "<p><strong>Proyecto:</strong> Construcción de dos aulas de la Casa de la Cultura Afroputumayense</p><p><strong>Financiado por:</strong> la Asociación de Cónyuges de los Diplomáticos Acreditados en Colombia.</p><br/><p><strong>Objetivo</strong><br/>Fortalecer los procesos organizativos, culturales, educativos y comunitarios de la población afrodescendiente del departamento del Putumayo mediante la construcción y adecuación de dos aulas en la Casa de la Cultura Afroputumayense, destinadas al desarrollo de actividades de formación, capacitación, encuentros comunitarios, promoción de la identidad cultural y fortalecimiento de los derechos de las comunidades negras y afroputumayenses.</p><br/><p><strong>Población Impactada</strong><br/>El proyecto ha beneficiado de manera directa e indirecta a más de 2.500 personas pertenecientes a comunidades afrodescendientes del departamento del Putumayo, incluyendo niños, niñas, jóvenes, adultos, líderes comunitarios, mujeres, organizaciones sociales y gestores culturales. Asimismo, el espacio ha servido como punto de encuentro para instituciones y actores comunitarios interesados en la promoción de la cultura afrocolombiana y la participación ciudadana.</p><br/><p><strong>Resultados Alcanzados</strong><br/>La construcción de las dos aulas permitió consolidar un espacio físico adecuado para el desarrollo de procesos educativos, culturales y organizativos, contribuyendo significativamente al fortalecimiento institucional de la Casa de la Cultura Afroputumayense. Como resultado, las comunidades beneficiarias cuentan con mejores condiciones para la realización de capacitaciones, talleres, encuentros de saberes y actividades de promoción de la identidad étnica y cultural.<br/><br/>De igual manera, se logró fortalecer las capacidades de liderazgo y gestión comunitaria de la población afrodescendiente, generando una comunidad más capacitada y empoderada en temas relacionados con los derechos de las comunidades negras, la participación ciudadana, la preservación de las tradiciones culturales y la construcción de procesos de desarrollo con enfoque étnico y territorial. Estos espacios continúan aportando a la cohesión social, la transmisión de conocimientos ancestrales y el fortalecimiento de la identidad Afroputumayense.</p>"
    },
    "adecuacion-casa-cultura-2019": {
      "title": "Adecuación Casa de la Cultura 2019",
      "content": "<p><strong>Proyecto:</strong> Adecuación de la Casa de la Cultura Afroputumayense</p><p><strong>Entidad cooperante:</strong> CISP</p><br/><p><strong>Objetivo</strong><br/>Adecuar y fortalecer la infraestructura de la Casa de la Cultura Afroputumayense como un espacio comunitario seguro, inclusivo y funcional para el desarrollo de actividades culturales, artísticas, educativas y de integración social. Este proyecto buscó promover el reconocimiento y la valoración de la diversidad cultural del territorio, garantizando condiciones adecuadas para la realización de encuentros, procesos formativos, expresiones artísticas y eventos comunitarios que contribuyan al fortalecimiento del tejido social y la identidad cultural de las diferentes comunidades.</p><br/><p><strong>Población Impactada</strong><br/>El proyecto benefició de manera directa e indirecta a personas pertenecientes a las comunidades negras, afrodescendientes, indígenas, campesinas y demás grupos poblacionales del departamento del Putumayo. Asimismo, impactó a niños, niñas, jóvenes, adultos y adultos mayores que participan en procesos culturales, educativos y comunitarios, convirtiendo la Casa de la Cultura en un espacio de encuentro intercultural y de participación ciudadana.</p><br/><p><strong>Resultados</strong><br/>Como resultado de la adecuación de la Casa de la Cultura Afroputumayense, se logró mejorar significativamente las condiciones de seguridad y funcionalidad del espacio, brindando a la comunidad un lugar más adecuado para el desarrollo de actividades culturales y sociales. La intervención permitió fortalecer los procesos de participación comunitaria, fomentar la libertad de expresión y el diálogo intercultural, así como mejorar la presentación y exposición de muestras artísticas, culturales y patrimoniales. De igual manera, el proyecto contribuyó a la preservación y promoción de las manifestaciones culturales de los diferentes grupos étnicos y sociales del territorio, consolidando este escenario como un referente para la integración, el aprendizaje y la convivencia comunitaria.</p>"
    },
    "trabajo-cultural-continuo": {
      "title": "Trabajo Cultural Continuo",
      "content": "<p>Constituye una herramienta fundamental para la preservación, fortalecimiento y transmisión de la identidad de las comunidades Afroputumayenses. A través de las diferentes expresiones culturales, artísticas, espirituales y organizativas, se mantienen vivas las tradiciones, saberes ancestrales, costumbres, prácticas comunitarias y formas de relacionamiento que han sido heredadas de generación en generación.</p><br/><p>De acuerdo con los principios de reconocimiento, respeto por la diversidad étnica y cultural, autonomía, participación comunitaria y fortalecimiento de la identidad colectiva, el trabajo cultural permanente permite que las y los niños, jóvenes, adultos y mayores conozcan, valoren y se apropien de nuestra historia, y de los aportes que las comunidades afroputumayenses han realizado al desarrollo social, cultural, ambiental y económico del país.</p><br/><p>Asimismo, el desarrollo continuo de procesos culturales contribuye a la protección del patrimonio material e inmaterial, fortalece el tejido social y promueve espacios de encuentro, diálogo y convivencia entre las diferentes generaciones. Estas acciones favorecen la construcción de una ciudadanía consciente de sus derechos colectivos, fortaleciendo el liderazgo comunitario y la participación activa en los escenarios de toma de decisiones.</p><br/><p>El trabajo cultural también representa una estrategia de resistencia frente a las dinámicas de discriminación racial, exclusión social y pérdida de la memoria histórica. Por medio de actividades como la música tradicional, la danza, la espiritualidad, la oralidad, la gastronomía, las prácticas ancestrales, los encuentros comunitarios y los procesos de formación, se reafirma el sentido de pertenencia y se promueve el reconocimiento de la riqueza cultural afrocolombiana.</p>"
    }
  },
  en: {
    "aulas-casa-cultura-2012": {
      "title": "House of Culture Classrooms 2012",
      "content": "<p><strong>Project:</strong> Construction of two classrooms of the Afroputumayan House of Culture</p><p><strong>Funded by:</strong> Association of Spouses of Accredited Diplomats in Colombia.</p><br/><p><strong>Objective</strong><br/>To strengthen the organizational, cultural, educational, and community processes of the Afro-descendant population of the Putumayo department through the construction and adaptation of two classrooms in the Afroputumayan House of Culture.</p><br/><p><strong>Impacted Population</strong><br/>The project has directly and indirectly benefited more than 2,500 people belonging to Afro-descendant communities of the Putumayo department.</p><br/><p><strong>Results Achieved</strong><br/>The construction of the two classrooms allowed consolidating an adequate physical space for the development of educational, cultural, and organizational processes, contributing significantly to the institutional strengthening of the Afroputumayan House of Culture.</p>"
    },
    "adecuacion-casa-cultura-2019": {
      "title": "House of Culture Adaptation 2019",
      "content": "<p><strong>Project:</strong> Adaptation of the Afroputumayan House of Culture</p><p><strong>Cooperating entity:</strong> CISP</p><br/><p><strong>Objective</strong><br/>To adapt and strengthen the infrastructure of the Afroputumayan House of Culture as a safe, inclusive, and functional community space for the development of cultural, artistic, educational, and social integration activities.</p><br/><p><strong>Impacted Population</strong><br/>The project benefited directly and indirectly people belonging to black, Afro-descendant, indigenous, peasant communities, and other population groups of the Putumayo department.</p><br/><p><strong>Results</strong><br/>As a result of the adaptation of the Afroputumayan House of Culture, the security and functionality conditions of the space were significantly improved.</p>"
    },
    "trabajo-cultural-continuo": {
      "title": "Continuous Cultural Work",
      "content": "<p>It constitutes a fundamental tool for the preservation, strengthening, and transmission of the identity of the Afroputumayan communities.</p><br/><p>In accordance with the principles of recognition, respect for ethnic and cultural diversity, autonomy, community participation, and strengthening of collective identity, permanent cultural work allows children, youth, adults, and elders to know, value, and appropriate our history.</p><br/><p>Likewise, the continuous development of cultural processes contributes to the protection of tangible and intangible heritage.</p><br/><p>Cultural work also represents a strategy of resistance against the dynamics of racial discrimination, social exclusion, and loss of historical memory.</p>"
    }
  },
  fr: {
    "aulas-casa-cultura-2012": {
      "title": "Salles de classe Maison de la Culture 2012",
      "content": "<p><strong>Projet:</strong> Construction de deux salles de classe de la Maison de la Culture Afro-putumayenne</p><p><strong>Financé par:</strong> Association des Conjoints des Diplomates Accrédités en Colombie.</p><br/><p><strong>Objectif</strong><br/>Renforcer les processus organisationnels, culturels, éducatifs et communautaires de la population afro-descendante du département de Putumayo.</p><br/><p><strong>Population Impactée</strong><br/>Le projet a bénéficié directement et indirectement à plus de 2 500 personnes appartenant aux communautés afro-descendantes.</p><br/><p><strong>Résultats Atteints</strong><br/>La construction des deux salles de classe a permis de consolider un espace physique adéquat.</p>"
    },
    "adecuacion-casa-cultura-2019": {
      "title": "Adaptation Maison de la Culture 2019",
      "content": "<p><strong>Projet:</strong> Adaptation de la Maison de la Culture Afro-putumayenne</p><p><strong>Entité coopérante:</strong> CISP</p><br/><p><strong>Objectif</strong><br/>Adapter et renforcer l'infrastructure de la Maison de la Culture Afro-putumayenne en tant qu'espace communautaire sûr, inclusif et fonctionnel.</p><br/><p><strong>Population Impactée</strong><br/>Le projet a bénéficié directement et indirectement aux personnes appartenant aux communautés noires, afro-descendantes, autochtones et paysannes.</p><br/><p><strong>Résultats</strong><br/>À la suite de l'adaptation de la Maison de la Culture, les conditions de sécurité et de fonctionnalité de l'espace ont été considérablement améliorées.</p>"
    },
    "trabajo-cultural-continuo": {
      "title": "Travail Culturel Continu",
      "content": "<p>Il constitue un outil fondamental pour la préservation, le renforcement et la transmission de l'identité des communautés afro-putumayennes.</p><br/><p>Conformément aux principes de reconnaissance, de respect de la diversité, d'autonomie et de participation communautaire, le travail culturel permanent permet à tous de connaître, valoriser et s'approprier notre histoire.</p><br/><p>De même, le développement continu des processus culturels contribue à la protection du patrimoine matériel et immatériel.</p><br/><p>Le travail culturel représente également une stratégie de résistance face aux dynamiques de discrimination raciale.</p>"
    }
  },
  de: {
    "aulas-casa-cultura-2012": {
      "title": "Kulturhaus Klassenzimmer 2012",
      "content": "<p><strong>Projekt:</strong> Bau von zwei Klassenzimmern des afro-putumayanischen Kulturhauses</p><p><strong>Finanziert durch:</strong> Vereinigung der Ehepartner von in Kolumbien akkreditierten Diplomaten.</p><br/><p><strong>Ziel</strong><br/>Stärkung der organisatorischen, kulturellen, bildungsbezogenen und gemeinschaftlichen Prozesse der afro-nachkommenden Bevölkerung.</p><br/><p><strong>Betroffene Bevölkerung</strong><br/>Das Projekt kam direkt und indirekt mehr als 2.500 Menschen zugute.</p><br/><p><strong>Erreichte Ergebnisse</strong><br/>Der Bau der beiden Klassenzimmer ermöglichte die Konsolidierung eines angemessenen physischen Raums.</p>"
    },
    "adecuacion-casa-cultura-2019": {
      "title": "Anpassung des Kulturhauses 2019",
      "content": "<p><strong>Projekt:</strong> Anpassung des afro-putumayanischen Kulturhauses</p><p><strong>Kooperationspartner:</strong> CISP</p><br/><p><strong>Ziel</strong><br/>Anpassung und Stärkung der Infrastruktur des Kulturhauses als sicherer, inklusiver und funktionaler Gemeinschaftsraum.</p><br/><p><strong>Betroffene Bevölkerung</strong><br/>Das Projekt kam direkt und indirekt Menschen zugute, die zu schwarzen, afro-nachkommenden, indigenen und bäuerlichen Gemeinschaften gehören.</p><br/><p><strong>Ergebnisse</strong><br/>Infolge der Anpassung des Kulturhauses wurden die Sicherheits- und Funktionalitätsbedingungen des Raums erheblich verbessert.</p>"
    },
    "trabajo-cultural-continuo": {
      "title": "Kontinuierliche Kulturarbeit",
      "content": "<p>Sie stellt ein grundlegendes Instrument zur Bewahrung, Stärkung und Weitergabe der Identität der afro-putumayanischen Gemeinschaften dar.</p><br/><p>In Übereinstimmung mit den Prinzipien der Anerkennung, des Respekts vor der Vielfalt, der Autonomie und der Bürgerbeteiligung ermöglicht die ständige Kulturarbeit allen, unsere Geschichte zu kennen, wertzuschätzen und sich anzueignen.</p><br/><p>Ebenso trägt die kontinuierliche Entwicklung kultureller Prozesse zum Schutz des materiellen und immateriellen Erbes bei.</p><br/><p>Kulturarbeit ist auch eine Strategie des Widerstands gegen die Dynamik rassistischer Diskriminierung.</p>"
    }
  },
  it: {
    "aulas-casa-cultura-2012": {
      "title": "Aule Casa della Cultura 2012",
      "content": "<p><strong>Progetto:</strong> Costruzione di due aule della Casa della Cultura Afroputumayana</p><p><strong>Finanziato da:</strong> Associazione dei coniugi dei diplomatici accreditati in Colombia.</p><br/><p><strong>Obiettivo</strong><br/>Rafforzare i processi organizzativi, culturali, educativi e comunitari della popolazione afrodiscendente del dipartimento del Putumayo.</p><br/><p><strong>Popolazione colpita</strong><br/>Il progetto ha beneficiato direttamente e indirettamente più di 2.500 persone.</p><br/><p><strong>Risultati raggiunti</strong><br/>La costruzione delle due aule ha permesso di consolidare uno spazio fisico adeguato.</p>"
    },
    "adecuacion-casa-cultura-2019": {
      "title": "Adeguamento Casa della Cultura 2019",
      "content": "<p><strong>Progetto:</strong> Adeguamento della Casa della Cultura Afroputumayana</p><p><strong>Ente cooperante:</strong> CISP</p><br/><p><strong>Obiettivo</strong><br/>Adeguare e rafforzare l'infrastruttura della Casa della Cultura come spazio comunitario sicuro, inclusivo e funzionale.</p><br/><p><strong>Popolazione colpita</strong><br/>Il progetto ha beneficiato direttamente e indirettamente le persone appartenenti alle comunità nere, afrodiscendenti, indigene e contadine.</p><br/><p><strong>Risultati</strong><br/>Come risultato dell'adeguamento della Casa della Cultura, le condizioni di sicurezza e funzionalità dello spazio sono state notevolmente migliorate.</p>"
    },
    "trabajo-cultural-continuo": {
      "title": "Lavoro Culturale Continuo",
      "content": "<p>Costituisce uno strumento fondamentale per la conservazione, il rafforzamento e la trasmissione dell'identità delle comunità afroputumayane.</p><br/><p>In conformità con i principi di riconoscimento, rispetto della diversità, autonomia e partecipazione comunitaria, il lavoro culturale permanente permette a tutti di conoscere, valorizzare e appropriarsi della nostra storia.</p><br/><p>Allo stesso modo, lo sviluppo continuo di processi culturali contribuisce alla protezione del patrimonio materiale e immateriale.</p><br/><p>Il lavoro culturale rappresenta anche una strategia di resistenza alle dinamiche della discriminazione razziale.</p>"
    }
  }
};

const msgsDir = path.join(__dirname, 'messages');
for (const [lang, content] of Object.entries(mockContent)) {
  const filePath = path.join(msgsDir, `${lang}.json`);
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const json = JSON.parse(fileContent);
    
    // Append or replace details
    if (!json.ProjectDetails) json.ProjectDetails = {};
    json.ProjectDetails["aulas-casa-cultura-2012"] = content["aulas-casa-cultura-2012"];
    json.ProjectDetails["adecuacion-casa-cultura-2019"] = content["adecuacion-casa-cultura-2019"];
    json.ProjectDetails["trabajo-cultural-continuo"] = content["trabajo-cultural-continuo"];
    
    fs.writeFileSync(filePath, JSON.stringify(json, null, 2), 'utf8');
    console.log(`Updated real text translations in ${lang}.json`);
  }
}
