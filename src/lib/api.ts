import { FALLBACK_DATA } from './fallbacks';

const API_URL = process.env.NEXT_PUBLIC_BACKOFFICE_API_URL || 'http://localhost:4000/api';

export async function fetchFromAPI(endpoint: string, fallbackKey?: string) {
  try {
    const res = await fetch(`${API_URL}${endpoint}`, { 
        next: { revalidate: 60 } // Cache for 60 seconds
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch ${endpoint}: ${res.statusText}`);
    }
    
    return await res.json();
  } catch (error: any) {
    // Return fallback data if available
    if (fallbackKey && FALLBACK_DATA[fallbackKey]) {
        return FALLBACK_DATA[fallbackKey];
    }
    
    return null;
  }
}

export async function getServices() {
    return fetchFromAPI('/services', 'services') || [];
}

export async function getWorkProcess() {
    return fetchFromAPI('/work-process', 'work-process') || [];
}

export async function getFAQ() {
    return fetchFromAPI('/faq', 'faq') || [];
}

export async function getBIMFeatures() {
    return fetchFromAPI('/bim-features', 'bim-features') || [];
}

export async function getPageContent(key: string) {
    const res = await fetchFromAPI(`/page-content?key=${key}`);
    
    if (res?.content) return res.content;
    
    // Check specific fallback for page-content keys
    if (FALLBACK_DATA['page-content']?.[key]) {
        return FALLBACK_DATA['page-content'][key];
    }
    
    return null;
}

export async function getTechStack() {
    return fetchFromAPI('/tech-stack', 'tech-stack') || [];
}

export async function getExperience() {
    return fetchFromAPI('/experience', 'experience') || [];
}

export async function getEducation() {
    return fetchFromAPI('/education', 'education') || [];
}


