const fs = require('fs');
const path = require('path');

const mockContent = {
  es: {
    title: "Proponer un Proyecto",
    description: "Cuéntanos tu idea o iniciativa. Estamos listos para escuchar y articular esfuerzos.",
    nameLabel: "Nombre completo",
    emailLabel: "Correo electrónico",
    orgLabel: "Organización / Entidad (Opcional)",
    projectTitleLabel: "Título de la Propuesta",
    projectDescLabel: "Descripción breve de la idea",
    submitBtn: "Enviar Propuesta",
    successMsg: "¡Gracias! Hemos recibido tu propuesta. Nos pondremos en contacto pronto."
  },
  en: {
    title: "Propose a Project",
    description: "Tell us your idea or initiative. We are ready to listen and join efforts.",
    nameLabel: "Full Name",
    emailLabel: "Email Address",
    orgLabel: "Organization / Entity (Optional)",
    projectTitleLabel: "Proposal Title",
    projectDescLabel: "Brief description of the idea",
    submitBtn: "Submit Proposal",
    successMsg: "Thank you! We have received your proposal. We will contact you soon."
  },
  fr: {
    title: "Proposer un projet",
    description: "Parlez-nous de votre idée ou initiative. Nous sommes prêts à écouter et à unir nos efforts.",
    nameLabel: "Nom complet",
    emailLabel: "Adresse e-mail",
    orgLabel: "Organisation / Entité (Facultatif)",
    projectTitleLabel: "Titre de la proposition",
    projectDescLabel: "Brève description de l'idée",
    submitBtn: "Soumettre la proposition",
    successMsg: "Merci ! Nous avons reçu votre proposition. Nous vous contacterons bientôt."
  },
  de: {
    title: "Ein Projekt vorschlagen",
    description: "Erzählen Sie uns von Ihrer Idee oder Initiative. Wir sind bereit zuzuhören und Kräfte zu bündeln.",
    nameLabel: "Vollständiger Name",
    emailLabel: "E-Mail-Adresse",
    orgLabel: "Organisation / Einrichtung (Optional)",
    projectTitleLabel: "Titel des Vorschlags",
    projectDescLabel: "Kurze Beschreibung der Idee",
    submitBtn: "Vorschlag einreichen",
    successMsg: "Danke! Wir haben Ihren Vorschlag erhalten. Wir werden uns bald bei Ihnen melden."
  },
  it: {
    title: "Proponi un progetto",
    description: "Raccontaci la tua idea o iniziativa. Siamo pronti ad ascoltare e unire le forze.",
    nameLabel: "Nome completo",
    emailLabel: "Indirizzo e-mail",
    orgLabel: "Organizzazione / Ente (Opzionale)",
    projectTitleLabel: "Titolo della proposta",
    projectDescLabel: "Breve descrizione dell'idea",
    submitBtn: "Invia Proposta",
    successMsg: "Grazie! Abbiamo ricevuto la tua proposta. Ti contatteremo presto."
  }
};

const msgsDir = path.join(__dirname, 'messages');
for (const [lang, content] of Object.entries(mockContent)) {
  const filePath = path.join(msgsDir, `${lang}.json`);
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const json = JSON.parse(fileContent);
    json.ProjectProposalModal = content;
    fs.writeFileSync(filePath, JSON.stringify(json, null, 2), 'utf8');
    console.log(`Updated ProjectProposalModal in ${lang}.json`);
  }
}
