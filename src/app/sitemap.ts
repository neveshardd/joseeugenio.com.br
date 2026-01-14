import { Metadata } from 'next';

export default function Sitemap(): Metadata {
  return {
    title: 'Sitemap',
  };
}

export async function generateSitemap() {
  const baseUrl = 'https://joseeugenio.com.br';
  
  // Define static routes
  const routes = ['', '/projetos', '/servicos', '/sobre', '/contato'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return routes;
}
