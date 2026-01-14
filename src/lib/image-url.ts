export const getImageUrl = (path?: string) => {
  if (!path) return '';
  if (path.startsWith('http')) return path; // Already absolute (e.g. external or already processed)
  if (path.startsWith('/uploads')) {
    const baseUrl = process.env.NEXT_PUBLIC_BACKOFFICE_URL || 'http://localhost:4000';
    return `${baseUrl}${path}`;
  }
  return path; // Fallback for local frontend images (e.g. /hero.jpg)
};
