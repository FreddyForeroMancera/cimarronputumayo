# BitÃ¡cora de Avances: CimarrÃ³n Putumayo

Este archivo contiene el registro de todos los cambios, mejoras y adiciones que vamos realizando en el proyecto.

## 18 de Junio de 2026

### AuditorÃ­a y Ajustes Iniciales
- **AuditorÃ­a General:** Se realizÃ³ una revisiÃ³n de la arquitectura del proyecto (Next.js 16, TailwindCSS v4, i18n con next-intl, Prisma). Se constatÃ³ una excelente semÃ¡ntica HTML inicial y una jerarquÃ­a clara en el DOM, optimizada para SEO.
- **IntegraciÃ³n de Logo Oficial:** 
  - Se eliminÃ³ el placeholder de texto estÃ¡tico ("CP") en la barra de navegaciÃ³n (`Header.tsx`) y en el pie de pÃ¡gina (`Footer.tsx`).
  - Se implementÃ³ el uso del componente `<Image />` de Next.js apuntando al archivo real `/logos/logo-cimarron-putumayo.png`.
  - Se corrigiÃ³ un problema de renderizado (logo invisible) eliminando la propiedad `fill` y estableciendo dimensiones explÃ­citas (`width={240}`, `height={80}`) para asegurar que el navegador reserve el espacio correctamente.
- **Ajustes de UI (Hero Section):**
  - Se corrigiÃ³ el centrado vertical del texto principal ("HERENCIA VIVA") en el componente `Hero.tsx`.
  - Se eliminaron mÃ¡rgenes y rellenos irregulares (`pt-24`, `pt-10`, `pb-20`) para permitir que *flexbox* alinee el contenido perfectamente con el rostro de la modelo de fondo, tal como en el mockup inicial.

- **Actualización del Header:** Se aumentó el tamaño del logo un 15% y se agrupó el logo junto con el menú de navegación, centrando todo el conjunto en la barra superior.

- **Alineación Vertical Estricta:** Se estableció un contenedor universal (max-w-6xl) compartido entre el Header y el Hero. Esto garantiza que el borde izquierdo del logo coincida geométricamente de manera exacta con el inicio del texto gigante ('HERENCIA VIVA') en el eje vertical inferior, unificando la lectura visual de la caja fuerte.

- **Preparación de Nueva Sección:** A la espera de la imagen de referencia para crear la siguiente sección (debajo del Hero) respetando la cuadrícula \max-w-6xl\.

- **Nueva Sección 'Somos Raíz':** Se maquetó y agregó la segunda sección de la página principal (debajo del Hero), respetando estrictamente el contenedor unificado \max-w-6xl\ para alinear los textos con el Logo superior. La estructura incluye una cuadrícula de 2 columnas (texto a la izquierda, galería fotográfica a la derecha).

- **Sección 'Nuestros Pilares':** Se desarrolló e integró la tercera sección. Se mantuvo la restricción estructural del contenedor \max-w-6xl\ para la alineación global. Consta de un título central y una cuadrícula de 3 columnas para cada pilar (Cultura, Territorio, Derechos), integrando íconos dorados y líneas separadoras verticales sutiles.

- **Nuevas Secciones de Proyectos e Historia:** Se maquetaron las secciones 'Proyectos que siembran dignidad' (con cuadrícula de 6 columnas y tarjetas de imagen) e 'Historia Destacada' (con el retrato de Librada Maturana de fondo y contenedor oscuro). Ambas mantienen la estructura global de la caja \max-w-6xl\.

- **Secciones Finales del Home:** Se diseñaron e integraron 3 nuevas secciones inferiores en la página de inicio (Casa Afro, Donaciones y Boletín), manteniendo la coherencia de anchos y los colores de la marca de manera fiel a los diseños de referencia.

- **Refinamiento Visual del Hero:**
  - Se corrigió la alineación milimétrica de los textos 'CIMARRON PUTUMAYO', 'HERENCIA' y 'VIVA' eliminando espacios en blanco del código y ajustando márgenes negativos (-6px en HERENCIA, -0.06em en VIVA).
  - Se reemplazó la imagen principal del Hero por la fotografía de la familia afroputumayense, desplazándola 20px a la derecha para un encuadre perfecto.
  - Se eliminaron filtros oscuros generales de la imagen y se implementó un degradado radial (viñeta de luz) en las coordenadas exactas de la señora mayor (60% X, 75% Y) para resaltarla, solucionando los cortes abruptos de los degradados lineales.
- **Ajustes de Interfaz y Traducciones:**
  - Se cambió el ítem del menú de 'Donar' a 'Donaciones' en el archivo de traducción (es.json).
  - Se igualó la altura de la columna de texto y las imágenes en la sección 'Somos Raíz' usando 'items-stretch' y 'justify-between', reduciendo además el interlineado del texto.

- **Desarrollo de la Página Quiénes Somos (/quienes-somos):**
  - Creación de 8 componentes modulares en 'src/components/about/': AboutHero, DefendemosSection, HistoriaSection, EsenciaSection, MisionVisionSection, LineasAccionSection, BaseInstitucionalSection y UneteCausaSection.
  - Implementación de cuadrícula (grid) max-w-6xl consistente con la página de inicio.
  - Programación de tarjetas dinámicas, cuadrículas de imágenes (placeholders temporales) y componentes con iconos vectoriales de lucide-react.
  - Integración de todas las secciones en 'src/app/[locale]/quienes-somos/page.tsx'.

- **Refinamiento de Página Quiénes Somos:**
  - Se invirtió el orden visual de la sección 'Defendemos Derechos'. Las 3 imágenes (collage) ahora aparecen a la izquierda en pantallas grandes, y el texto a la derecha, respetando la estructura lógica para que en celulares el texto siga apareciendo primero.

## 20 de Junio de 2026

### AuditorÃ­a Completa de UI/UX y Backend (Solo Lectura)

Se realizÃ³ un anÃ¡lisis exhaustivo de todo el proyecto en modo solo lectura, revisando cada componente, pÃ¡gina, archivo de configuraciÃ³n, traducciones y estructura. A continuaciÃ³n se registran los hallazgos.

---

#### âœ… Lo que estÃ¡ bien

**Arquitectura y Estructura**
- SeparaciÃ³n de responsabilidades correcta: cada componente tiene un Ãºnico propÃ³sito visual y estÃ¡ bien modularizado.
- Rutas internacionalizadas /[locale]/... con 
ext-intl correctamente integrado en middleware, layout y routing. Los 5 idiomas estÃ¡n definidos y los archivos JSON existen (es, en, fr, de, it).
- Layout compartido: Header y Footer se cargan una sola vez desde [locale]/layout.tsx. La gestiÃ³n del idioma activo con lang={locale} en <html> es correcta para SEO y accesibilidad.
- setRequestLocale correctamente usado en quienes-somos/page.tsx, proyectos/page.tsx y donaciones/page.tsx para SSR con i18n.
- Middleware bien configurado: el matcher excluye correctamente _next, _vercel y archivos estÃ¡ticos.
- Contenedor max-w-6xl consistente aplicado en todos los componentes, garantizando alineaciÃ³n horizontal uniforme.
- Fuentes de Google cargadas con 
ext/font (Bebas Neue + Inter): optimizadas, sin FOUT, usando variables CSS.
- Scroll lock en DonateModal: document.body.style.overflow = 'hidden' con cleanup correcto en el useEffect.
- Uso de createPortal en DonateModal para escapar del stacking context del header fijo.
- priority en imÃ¡genes crÃ­ticas (Hero, AboutHero) para optimizar LCP (Largest Contentful Paint).
- Sistema de colores coherente con variables CSS en globals.css (--color-gold, --color-brown-deep, etc.).
- SemÃ¡ntica HTML correcta: uso de <header>, <nav>, <main>, <footer>, <section>, jerarquÃ­a <h1>-<h3> respetada.
- Una sola <h1> por pÃ¡gina: cada pÃ¡gina tiene exactamente uno.
- Atributo lt presente en todas las imÃ¡genes (accesibilidad).
- Estados del newsletter correctamente manejados: idle â†’ loading â†’ success con prevenciÃ³n de submit mÃºltiple.
- Indicador de idioma activo en header mÃ³vil (bandera del idioma actual).
- Identidad visual premium y consistente: paleta dorado/marrÃ³n oscuro/crema apropiada para la ONG.
- Header fijo con ackdrop-blur glassmÃ³rfico.
- Indicador de pÃ¡gina activa en navegaciÃ³n (borde dorado + color dorado).
- MenÃº mÃ³vil de pantalla completa con selector de idiomas y botÃ³n de donaciÃ³n integrado.
- Hover effects consistentes en imÃ¡genes (scale-105) y tarjetas (bordes).
- Ã�cono flotante en tarjetas de proyectos (cÃ­rculo dorado superpuesto a la imagen).
- AnimaciÃ³n de borde dorado en ProjectsGrid (w-0 â†’ group-hover:w-full).
- DonateModal bien diseÃ±ado: layout dos columnas, estados claros, selector de frecuencia y montos predefinidos.
- Degradado radial en Hero para enfocar la figura principal.

---

#### â�Œ Errores y Problemas CrÃ­ticos

1. **ImÃ¡genes placeholder en producciÃ³n (CRÃ�TICO):** Aproximadamente 20 componentes usan /images/hero/hero_bg.png como imagen de relleno. Afecta: AboutSection, FeaturedStorySection, CasaAfroSection, BaseInstitucionalSection, EsenciaSection, ProjectsGrid, StoriesGrid, AboutHero, DonationsHero, DonationsBanner, DonateModal y mÃ¡s.

2. **El botÃ³n "Donar ahora" no procesa pagos (CRÃ�TICO):** En DonateModal.tsx, el submit llama Ãºnicamente a onClose(). No hay integraciÃ³n con pasarela de pago (Wompi, PayU, Stripe).

3. **El newsletter es decorativo (CRÃ�TICO):** NewsletterSection.tsx simula la suscripciÃ³n con setTimeout. No hay API route ni servicio de email real (Mailchimp, SendGrid, etc.).

4. **Links rotos con href="#" (ALTO):** Footer: Casa Afro, Convocatorias, Contacto, PolÃ­tica de privacidad, TÃ©rminos y condiciones. Redes sociales en Header y Footer. StoriesGrid: todas las historias individuales. ProjectsGrid: todos los botones "Ver Proyecto". DonationsCorporate: "Suma Tu Empresa".

5. **Ruta /contacto no existe (ALTO):** En DonationSection.tsx hay un <Link href="/contacto"> sin page correspondiente. Causa 404.

6. **Ruta /casa-afro no existe (ALTO):** En CasaAfroSection.tsx hay un <Link href="/casa-afro"> sin page correspondiente.

7. **Sin metadata ni SEO en ninguna pÃ¡gina (ALTO):** Ninguna page.tsx exporta generateMetadata ni un objeto metadata. Sin <title>, <meta description>, ni Open Graph. El layout [locale]/layout.tsx tampoco tiene metadata global de fallback.

8. **Tipado desactualizado en historias/page.tsx (MEDIO):** Usa params: { locale: string } sÃ­ncrono en lugar de params: Promise<{ locale: string }> como las demÃ¡s pÃ¡ginas. Puede causar advertencias en el build.

9. **src/lib/ y src/data/ vacÃ­os (MEDIO):** No hay helpers ni datos centralizados. El contenido de proyectos e historias estÃ¡ hardcodeado directamente en los componentes.

10. **Prisma instalado pero sin configurar (BAJO/FUTURO):** No hay schema.prisma, modelos, ni conexiÃ³n a base de datos.

11. **ramer-motion y eact-hook-form+zod instalados pero sin usar (BAJO):** Dependencias que aumentan el bundle sin aportar funcionalidad actualmente.

12. **ImÃ¡genes de banderas desde CDN externo con <img> nativo (BAJO):** En Header.tsx se usa <img src="https://flagcdn.com/..."> en lugar de <Image> de Next.js. Sin control de cachÃ©, sin optimizaciÃ³n, sin fallback.

---

#### ðŸ”§ Mejoras Recomendadas

**UX/UI**
- Agregar scroll indicator (flecha animada) al fondo del Hero para indicar que hay mÃ¡s contenido.
- Usar placeholder="blur" en 
ext/image para evitar CLS al cargar imÃ¡genes reales.
- Implementar transiciones de pÃ¡gina con ramer-motion (ya instalado) y AnimatePresence.
- Agregar scroll-behavior: smooth en globals.css.
- Mejorar accesibilidad del menÃº mÃ³vil: ria-expanded, ria-controls, trap de foco.
- Agregar skip navigation link (<a href="#main-content">) para lectores de pantalla.
- SecciÃ³n de impacto con contadores animados (familias beneficiadas, aÃ±os de trabajo, etc.).
- SecciÃ³n de testimonios/citas de la comunidad.
- Mapa del Putumayo para visualizar cobertura territorial.

**TÃ©cnico / Backend**
- Crear src/app/api/newsletter/route.ts e integrar Mailchimp o SendGrid.
- Integrar pasarela de pago Wompi (Colombia) o PayU con webhook de confirmaciÃ³n.
- Centralizar datos en src/data/projects.ts y src/data/stories.ts.
- Crear prisma/schema.prisma con modelos Newsletter y Donation.
- Exportar generateMetadata en cada page.tsx con title, description y Open Graph.
- Crear src/app/sitemap.ts y src/app/robots.ts.
- Agregar error.tsx y 
ot-found.tsx en [locale]/.
- Usar dynamic() de Next.js para lazy loading de secciones below-the-fold.
- Crear .env.example con las claves necesarias (DB, email, pagos).

**InternacionalizaciÃ³n**
- Internacionalizar ~15 componentes con texto hardcodeado en espaÃ±ol: AboutSection, PillarsSection, ProjectsSection, CasaAfroSection, FeaturedStorySection, DonationSection, y todos los de bout/ y proyectos/.

---

#### ðŸ“Š Tabla de Prioridades

**URGENTE (antes de lanzar):**
1. Reemplazar todas las imÃ¡genes placeholder con imÃ¡genes reales
2. Eliminar todos los href="#" rotos
3. Crear rutas faltantes /contacto y /casa-afro o eliminar los links
4. Agregar metadata y SEO en todas las pÃ¡ginas
5. Conectar newsletter a servicio de email real
6. Conectar modal de donaciÃ³n a pasarela de pago real
7. Corregir tipado de historias/page.tsx

**IMPORTANTE (prÃ³xima iteraciÃ³n):**
1. Internacionalizar todas las secciones hardcodeadas en espaÃ±ol
2. Centralizar datos en src/data/
3. Agregar error.tsx y 
ot-found.tsx
4. Agregar sitemap.xml y obots.txt
5. Implementar animaciones con ramer-motion
6. Mejorar accesibilidad ARIA del menÃº mÃ³vil

**LARGO PLAZO:**
1. Configurar Prisma con base de datos
2. Desarrollar panel de administraciÃ³n (carpeta src/components/admin/ existe pero vacÃ­a)
3. Lazy loading de secciones below-the-fold
4. Mapas interactivos de cobertura territorial
5. CMS headless (Sanity, Contentful) para gestionar historias y proyectos

### Plan de ImplementaciÃ³n de Mejoras

Basado en la auditorÃ­a, se ha definido un plan de implementaciÃ³n en 4 fases:

#### Fase 1: Correcciones CrÃ­ticas de Pre-Lanzamiento (1-2 dÃ­as)
- **SEO y Metadata:** Agregar metadata estÃ¡tica y dinÃ¡mica, configurar sitemap.ts y obots.ts.
- **Rutas y Links:** Crear pÃ¡ginas de /contacto y /casa-afro, eliminar placeholders con href="#".
- **Manejo de Errores:** Implementar 
ot-found.tsx y error.tsx.
- **Tipado:** Corregir el tipado asÃ­ncrono en historias/page.tsx.
- **Assets:** Reemplazar placeholders (hero_bg.png) por imÃ¡genes reales estructuradas en /public/images/.

#### Fase 2: Backend y Funcionalidad Real (3-5 dÃ­as)
- **Newsletter:** Conectar formulario con API Route para Mailchimp/SendGrid.
- **Donaciones:** Integrar pasarela Wompi o PayU vÃ­a API y webhooks.
- **Base de Datos:** Configurar Prisma con modelos para Newsletter, Donation y ContactMessage.
- **Contacto:** Implementar API para enviar mensajes y guardar en DB.

#### Fase 3: InternacionalizaciÃ³n y CentralizaciÃ³n (2-3 dÃ­as)
- **Traducciones:** Migrar ~15 componentes hardcodeados en espaÃ±ol al sistema 
ext-intl.
- **CentralizaciÃ³n de Datos:** Mover proyectos e historias a src/data/.
- **Rutas DinÃ¡micas:** Crear pÃ¡ginas individuales generadas estÃ¡ticamente para cada historia y proyecto (/[locale]/historias/[slug]).

#### Fase 4: UX, Animaciones y Panel de Control (5-8 dÃ­as)
- **Animaciones:** Implementar transiciones y fade-ins con ramer-motion.
- **Accesibilidad:** Mejorar menÃº mÃ³vil con ARIA y agregar skip-links.
- **PÃ¡ginas Legales:** Redactar y publicar PolÃ­tica de Privacidad y TÃ©rminos de Uso.
- **Panel Admin:** Desarrollar panel interno (/admin/) para gestionar donaciones, mensajes y suscriptores.

**Total estimado: 11-18 días de trabajo.**

---

### Parámetros de Desarrollo Continuo
- **Soporte Multi-idioma Obligatorio:** De aquí en adelante, cualquier nueva página o componente que se desarrolle debe integrarse inmediatamente con el sistema de traducciones (`next-intl`) para garantizar soporte en todos los idiomas configurados (`es`, `en`, `fr`, `de`, `it`). No se debe usar texto plano (hardcodeado) en los componentes.

### Internacionalización (i18n) - Implementación
- Se completó la refactorización para extraer el texto "hardcodeado" en español de los componentes principales y conectarlos con el sistema `next-intl`.
- Se crearon scripts de inyección para generar traducciones precisas a Inglés, Francés, Alemán e Italiano en los archivos JSON correspondientes.
- **Secciones Refactorizadas:**
  - **Home (Inicio):** `AboutSection`, `PillarsSection`, `ProjectsSection`, `CasaAfroSection`, `FeaturedStorySection`, `DonationSection`, `NewsletterSection`.
  - **Quiénes Somos (/quienes-somos):** `AboutHero`, `BaseInstitucionalSection`, `DefendemosSection`, `EsenciaSection`, `HistoriaSection`, `LineasAccionSection`, `MisionVisionSection`, `UneteCausaSection`.
  - **Proyectos (/proyectos):** `ProjectsHero`, `ProjectsDirection`, `ProjectsCTA`, `ProjectsGrid`.
  - **Historias (/historias):** `FeaturedStory`, `StoriesGrid`, `StoriesHero`, `StoriesInfographic`.
  - **Donaciones (/donaciones):** `DonationsCorporate`, `DonationsHero`, `DonationsMicro`.
  - **Contacto (/contacto):** `ContactForm`.

### Correcciones de Internacionalización (Fase 1)
- **Páginas Traducidas (Hardcoded removido):**
  - **Página de Contacto (`/contacto`):** Se reemplazó el texto estático (títulos e información de contacto) usando `getTranslations` de `next-intl/server`. Se añadieron las traducciones al bloque `ContactPage` en los 5 idiomas.
  - **Página Casa Afro (`/casa-afro`):** Se extrajo todo el contenido en español quemado en el componente y se integró con `next-intl/server`. Se inyectaron traducciones bajo el bloque `CasaAfroPage` para `es`, `en`, `fr`, `de` e `it`.
- **Actualización de Navegación (`Header.tsx`):**
  - Se agregó el botón/enlace de **"Contacto"** al menú principal, ubicándolo junto al enlace de Donaciones en la vista de escritorio y en el menú desplegable móvil.
  - Se utilizó la clave de traducción existente `Navigation.contact` asegurando que el menú esté 100% internacionalizado en todos los idiomas soportados.
- **Corrección en Política de Privacidad:**
  - Se corrigieron las traducciones de la Sección 2 (Responsable del tratamiento) en los archivos `en.json`, `fr.json`, `de.json` e `it.json`.
  - Se tradujeron correctamente las etiquetas (Entidad, NIT, Representante legal, Dirección, Correo, Teléfono) manteniendo intactos los datos legales, nombres propios y direcciones físicas de la asociación.
  - Se confirmó y validó que el middleware de `next-intl` funciona de manera transparente y eficiente usando la cabecera `Accept-Language` del navegador para el direccionamiento automático por idioma.

### Implementación de Páginas Individuales de Proyectos y Actualización Gráfica
- **Actualización de Imágenes (Home / Proyectos):**
  - Se reemplazaron todas las imágenes placeholder (`hero_bg.png`) en las secciones `AboutSection` ("Somos Raíz") y `ProjectsSection` ("Proyectos que siembran dignidad") por las fotografías reales subidas a la carpeta `public/images/`.
- **Rutas Dinámicas para Proyectos (`/proyectos/[slug]`):**
  - Se creó el sistema de rutas dinámicas en `src/app/[locale]/proyectos/[slug]/page.tsx` para alojar páginas descriptivas de cada uno de los 5 proyectos principales.
  - Se implementó el componente dedicado `ProjectDetailView.tsx` que estructura el diseño interno del proyecto (Hero, Contenido y Galería).
  - Se inyectó texto simulado pero completamente traducido en el bloque `ProjectDetails` dentro de los archivos `messages/*.json` (es, en, fr, de, it).
- **Enrutamiento Interno 100% Internacionalizado:**
  - Se actualizaron los componentes `ProjectsSection.tsx` (en el Inicio) y `ProjectsGrid.tsx` (en la página de Proyectos) asignando un `slug` específico a cada tarjeta (ej: `uramba-cimarron`).
  - Se utilizaron componentes nativos `<Link>` de `@/i18n/routing` para garantizar que al hacer clic en un proyecto, la URL respete automáticamente el idioma detectado/seleccionado por el usuario (ej: `/fr/proyectos/uramba-cimarron`).
  - La tarjeta de "CASA AFRO LIBRADA MATURANA" se conectó exitosamente a su respectiva página individual (`/casa-afro`).

### Interacciones y Modal de Propuestas
- **Modal de Propuesta de Proyectos (`ProjectProposalModal.tsx`):**
  - Se desarrolló un modal interactivo con React Portals (`createPortal`) que se superpone a la aplicación, permitiendo a los usuarios enviar propuestas comunitarias directamente desde la página de Proyectos sin cambiar de ruta.
  - Diseño responsivo y oscuro con campos para nombre, correo, organización, título y descripción.
  - El componente maneja estados dinámicos (`"use client"`), mostrando un estado de "Cargando..." al enviar y un mensaje de éxito con cierre automático tras 3 segundos.
  - Se actualizaron los botones CTA (`ProjectsCTA.tsx`) para desencadenar el modal en lugar de redirigir a una página externa.
  - Todas las etiquetas, botones y alertas de validación fueron inyectados en los archivos JSON y están 100% traducidos.

### Historial de Procesos Ejecutados
- **Nueva Sección Visual (`ProjectsHistory.tsx`):**
  - Se replicó fielmente la tabla de diseño proporcionada (fondo marfil, líneas separadoras tenues y flechas indicadoras a la derecha) mostrando la entidad cooperante, el nombre de la obra, el estado y el año.
  - Se insertó de manera lógica en `/proyectos/page.tsx`, justo antes de la cuadrícula de los nuevos proyectos en territorio.
- **Rutas Históricas e Inyección de Texto Real:**
  - Se agregaron nuevas rutas dinámicas para alojar los proyectos ya ejecutados: `/proyectos/aulas-casa-cultura-2012`, `/proyectos/adecuacion-casa-cultura-2019` y `/proyectos/trabajo-cultural-continuo`.
  - Se reemplazó el texto *lorem ipsum* de prueba con el texto real y detallado proporcionado por el usuario.
  - Se implementó la renderización de texto enriquecido HTML (`<strong>`, `<p>`) usando `dangerouslySetInnerHTML` junto con `t.raw()` de `next-intl` para evitar errores de parseo y mostrar correctamente párrafos y negritas.
  - Se generaron las traducciones precisas de todos los textos reales e históricos en los 5 idiomas configurados.

## 22 de Junio de 2026

### Actualización de Imágenes y Comportamiento UI
- **Conexión de Nuevas Imágenes Reales:**
  - Se reemplazaron placeholders en la sección `CasaAfroSection` con las imágenes `casa_afro_1.png` y `casa_afro_2.png`.
  - Se actualizó el Hero de la página "Quiénes Somos" (`AboutHero.tsx`) con la imagen panorámica `asamblea_cimarron.png`.
  - Se integraron `historia_1.png` e `historia_2.png` en la sección "Nuestra Historia" (`HistoriaSection.tsx`), manteniendo el efecto escala de grises al pasar el cursor.
  - Se conectaron `esencia_1.png` y `esencia_2.png` en el collage de la sección "Nuestra Esencia" (`EsenciaSection.tsx`).
  - Se actualizó la imagen panorámica (21:9) con bordes redondeados en `ProjectsLandscape.tsx` utilizando `proyectos_paisaje.jpg`.
- **Refinamiento Funcional:**
  - Se refactorizó `DonationSection.tsx` transformándolo en un *Client Component* (`'use client'`).
  - El botón inferior de "DONAR AHORA" en la página principal ahora abre directamente el modal flotante (`DonateModal`) en lugar de redirigir a otra ruta, unificando la experiencia de usuario.
- **Nuevas Imágenes y Tipografías:**
  - Se conectaron las tres imágenes para la cuadrícula de Historias (`StoriesGrid.tsx`): `historias_selva_1.jpg`, `historias_casa_afro.jpg`, e `historias_juventud.jpg`.
  - Se actualizó el banner de Donaciones (`DonationsBanner.tsx`) con la imagen de fondo `fondo_donaciones.png` y se corrigió la tipografía (`font-sans`) para que respete el uso de minúsculas correctamente.
