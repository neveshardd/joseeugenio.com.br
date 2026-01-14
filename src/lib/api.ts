const API_URL = process.env.NEXT_PUBLIC_BACKOFFICE_API_URL || 'http://localhost:4000/api';

export async function fetchFromAPI(endpoint: string) {
  try {
    const res = await fetch(`${API_URL}${endpoint}`, { 
        next: { revalidate: 60 } // Cache for 60 seconds
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch ${endpoint}: ${res.statusText}`);
    }
    
    return res.json();
  } catch (error) {
    console.error(`Error fetching from API (${endpoint}):`, error);
    return null; // Return null on error to handle gracefully in UI
  }
}

export async function getServices() {
    return fetchFromAPI('/services');
}

export async function getWorkProcess() {
    return fetchFromAPI('/work-process');
}

export async function getFAQ() {
    return fetchFromAPI('/faq');
}

export async function getBIMFeatures() {
    return fetchFromAPI('/bim-features');
}

export async function getPageContent(key: string) {
    const res = await fetchFromAPI(`/page-content?key=${key}`);
    return res?.content || null;
}

export async function getTechStack() {
    return fetchFromAPI('/tech-stack');
}

export async function getExperience() {
    return fetchFromAPI('/experience');
}

export async function getEducation() {
    return fetchFromAPI('/education');
}

