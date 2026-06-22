const fs = require('fs');
const path = require('path');

const data = {
  en: [
    "<strong>Entity:</strong> Asociación Departamental por los Derechos Humanos de Consejos Comunitarios, Organizaciones de Base y demás formas CIMARRÓN PUTUMAYO",
    "<strong>NIT:</strong> 846003787-0",
    "<strong>Legal Representative:</strong> CORTES CORTES MARLENY",
    "<strong>Address:</strong> Carrera 21 # 31-90, Barrio El Jardín, Puerto Asís - Putumayo",
    "<strong>Email:</strong> putumayocimarron@gmail.com",
    "<strong>Contact Phone:</strong> 3113590790"
  ],
  fr: [
    "<strong>Entité:</strong> Asociación Departamental por los Derechos Humanos de Consejos Comunitarios, Organizaciones de Base y demás formas CIMARRÓN PUTUMAYO",
    "<strong>NIT:</strong> 846003787-0",
    "<strong>Représentant légal:</strong> CORTES CORTES MARLENY",
    "<strong>Adresse:</strong> Carrera 21 # 31-90, Barrio El Jardín, Puerto Asís - Putumayo",
    "<strong>E-mail:</strong> putumayocimarron@gmail.com",
    "<strong>Téléphone de contact:</strong> 3113590790"
  ],
  de: [
    "<strong>Einrichtung:</strong> Asociación Departamental por los Derechos Humanos de Consejos Comunitarios, Organizaciones de Base y demás formas CIMARRÓN PUTUMAYO",
    "<strong>NIT:</strong> 846003787-0",
    "<strong>Gesetzlicher Vertreter:</strong> CORTES CORTES MARLENY",
    "<strong>Adresse:</strong> Carrera 21 # 31-90, Barrio El Jardín, Puerto Asís - Putumayo",
    "<strong>E-Mail:</strong> putumayocimarron@gmail.com",
    "<strong>Kontakttelefon:</strong> 3113590790"
  ],
  it: [
    "<strong>Entità:</strong> Asociación Departamental por los Derechos Humanos de Consejos Comunitarios, Organizaciones de Base y demás formas CIMARRÓN PUTUMAYO",
    "<strong>NIT:</strong> 846003787-0",
    "<strong>Rappresentante legale:</strong> CORTES CORTES MARLENY",
    "<strong>Indirizzo:</strong> Carrera 21 # 31-90, Barrio El Jardín, Puerto Asís - Putumayo",
    "<strong>E-mail:</strong> putumayocimarron@gmail.com",
    "<strong>Telefono di contatto:</strong> 3113590790"
  ]
};

const msgsDir = path.join(__dirname, 'messages');
for (const [lang, list] of Object.entries(data)) {
  const filePath = path.join(msgsDir, `${lang}.json`);
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const json = JSON.parse(fileContent);
    if (json.Terms && json.Terms.sections && json.Terms.sections[1] && json.Terms.sections[1].list) {
      json.Terms.sections[1].list = list;
      fs.writeFileSync(filePath, JSON.stringify(json, null, 2), 'utf8');
      console.log(`Updated terms in ${lang}.json`);
    }
  }
}
