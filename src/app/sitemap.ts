import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cimarronputumayo.org';
  const sitemapEntries: MetadataRoute.Sitemap = [];

  const addEntriesForPath = (path: string) => {
    routing.locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: path === '' ? 1 : 0.8,
      });
    });
  };

  addEntriesForPath('');
  addEntriesForPath('/quienes-somos');
  addEntriesForPath('/proyectos');
  addEntriesForPath('/historias');
  addEntriesForPath('/donaciones');
  addEntriesForPath('/contacto');
  addEntriesForPath('/casa-afro');

  return sitemapEntries;
}
