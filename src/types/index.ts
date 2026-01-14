export interface Project {
  id: number;
  title: string;
  description: string;
  location: string;
  year: string;
  area: string;
  status: string;
  softwares: string;
  credits: string;
  href: string;
  meta: string;
  imageSrc: string;
  imageAlt: string;
  createdAt: string;
  updatedAt: string;
  isPlaceholder?: boolean;
}

export interface GalleryImage {
  id: number;
  url: string;
  caption: string;
  projectId: number;
  createdAt: string;
}
