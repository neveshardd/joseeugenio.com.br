import { Project, GalleryImage } from "@/types";
import { getImageUrl } from "@/lib/image-url";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ChevronLeft, ChevronRight, Loader2, Maximize2, Minimize2, X } from "lucide-react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import { useCallback, useEffect, useRef, useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";

const API_URL = process.env.NEXT_PUBLIC_BACKOFFICE_API_URL || "http://localhost:4000/api";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryRef = useRef<ImageGallery>(null);

  const { data: galleryImages, isLoading: isLoadingGallery } = useQuery<GalleryImage[]>({
    queryKey: ["gallery", project?.id],
    queryFn: async () => {
      if (!project) return [];
      const { data } = await axios.get(`${API_URL}/gallery?projectId=${project.id}`);
      return data;
    },
    enabled: !!project,
  });

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  const toggleFullscreen = () => {
    if (galleryRef.current) {
        // @ts-ignore
        (galleryRef.current as any).toggleFullScreen();
    }
  };

  // Handle Body Scroll Lock
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
       document.body.style.overflow = "auto";
    };
  }, [project]);

  // Keyboard navigation for closing
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!project) return;
      if (e.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, handleClose]);

  const getGalleryItems = (project: Project, images?: GalleryImage[]): ReactImageGalleryItem[] => {
    // Start with the cover image
    const coverUrl = getImageUrl(project.imageSrc);
    const items: ReactImageGalleryItem[] = [];
    
    if (coverUrl) {
      items.push({
        original: coverUrl,
        thumbnail: coverUrl,
        originalAlt: project.title,
        thumbnailAlt: project.title,
      });
    }

    // Add gallery images if available
    if (images && images.length > 0) {
        images.forEach(img => {
            const url = getImageUrl(img.url);
            const item: ReactImageGalleryItem = {
                original: url,
                thumbnail: url,
                originalAlt: img.caption || project.title,
                thumbnailAlt: img.caption || project.title,
            };
            // Avoid duplicate cover image if it's also in the gallery
            if (url !== coverUrl) {
                items.push(item);
            }
        });
    }

    return items;
  };

  const renderLeftNav = (onClick: React.MouseEventHandler<HTMLElement>, disabled: boolean) => (
    <button 
      className="absolute left-0 top-24 bottom-20 z-50 flex items-center justify-center px-4 hover:bg-white/5 transition-colors group/nav outline-none cursor-pointer"
      disabled={disabled} 
      onClick={onClick}
      aria-label="Previous Slide"
    >
      <ChevronLeft size={64} strokeWidth={1} className="text-white/70 group-hover/nav:text-white transition-colors drop-shadow-lg" />
    </button>
  );

  const renderRightNav = (onClick: React.MouseEventHandler<HTMLElement>, disabled: boolean) => (
    <button 
      className="absolute right-0 top-24 bottom-20 z-50 flex items-center justify-center px-4 hover:bg-white/5 transition-colors group/nav outline-none cursor-pointer"
      disabled={disabled} 
      onClick={onClick}
      aria-label="Next Slide"
    >
      <ChevronRight size={64} strokeWidth={1} className="text-white/70 group-hover/nav:text-white transition-colors drop-shadow-lg" />
    </button>
  );

  const renderCustomControls = () => {
    const totalImages = (galleryImages?.length || 0) + 1; // +1 for cover

    return (
      <div className="absolute top-0 left-0 w-full p-6 z-50 flex items-start justify-between pointer-events-none">
         {/* Counter - Top Left */}
         <span className="text-white text-xl font-light tracking-widest select-none pointer-events-auto">
            {currentIndex + 1}/{totalImages}
         </span>

         {/* Controls - Top Right */}
         <div className="flex gap-3 pointer-events-auto">
            <button 
               onClick={(e) => { e.stopPropagation(); toggleFullscreen(); }}
               className="text-white/70 hover:text-white transition-colors cursor-pointer"
               aria-label={isFullscreen ? "Sair da Tela Cheia" : "Tela Cheia"}
               title={isFullscreen ? "Sair da Tela Cheia" : "Tela Cheia"}
             >
               {isFullscreen ? <Minimize2 size={24} strokeWidth={1.5} /> : <Maximize2 size={24} strokeWidth={1.5} />}
             </button>
            <button 
               onClick={(e) => { e.stopPropagation(); handleClose(); }}
               className="text-white/70 hover:text-white transition-colors cursor-pointer"
               aria-label="Close Gallery"
               title="Fechar"
             >
               <X size={28} strokeWidth={1.5} />
             </button>
         </div>
      </div>
    );
  };

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-100 bg-black/95 backdrop-blur-md animate-in fade-in duration-300 flex flex-col md:flex-row overflow-hidden"
    >
      {/* Main Gallery Area */}
      <div className="relative flex-1 h-[50vh] md:h-full w-full bg-black/40 flex items-center justify-center">
          
          <div className="w-full h-full flex items-center justify-center">
            <style jsx global>{`
              .image-gallery,
              .image-gallery-content,
              .image-gallery-slide-wrapper,
              .image-gallery-swipe,
              .image-gallery-slides {
                height: 100%;
                width: 100%;
              }

              .image-gallery-slide {
                padding-top: 80px !important;
                padding-bottom: 80px !important;
                padding-left: 100px !important;
                padding-right: 100px !important;
                height: 100%;
                display: flex !important;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                box-sizing: border-box !important;
              }

              .image-gallery-slide .image-gallery-image {
                max-height: 100% !important;
                max-width: 100% !important;
                width: auto !important;
                object-fit: contain;
                background: transparent;
                box-shadow: 0 0 40px rgba(0,0,0,0.5); 
              }

              @media (max-width: 768px) {
                .image-gallery-slide {
                    padding-left: 40px;
                    padding-right: 40px;
                }
              }

              .image-gallery-thumbnail-image {
                object-fit: cover;
                height: 60px;
                border-radius: 4px;
              }
              .image-gallery-thumbnail.active, .image-gallery-thumbnail:hover, .image-gallery-thumbnail:focus {
                border: 2px solid white;
              }

              .image-gallery-icon {
                color: white;
                filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
              }
              .image-gallery-icon:hover {
                color: #fff;
              }
              .image-gallery-svg {
                width: 32px;
                height: 32px;
              }
            `}</style>
            {isLoadingGallery ? (
                <div className="flex items-center justify-center w-full h-full">
                    <Loader2 className="h-10 w-10 animate-spin text-white/50" />
                </div>
            ) : (
                <ImageGallery 
                    ref={galleryRef}
                    items={getGalleryItems(project, galleryImages)} 
                    showPlayButton={false}
                    showFullscreenButton={false} 
                    showThumbnails={(galleryImages?.length || 0) > 0}
                    showIndex={false}
                    lazyLoad={true}
                    startIndex={0}
                    additionalClass="w-full h-full flex items-center justify-center"
                    onScreenChange={(full) => setIsFullscreen(full)}
                    onSlide={(index) => setCurrentIndex(index)}
                    slideDuration={0}
                    renderLeftNav={renderLeftNav}
                    renderRightNav={renderRightNav}
                    renderCustomControls={renderCustomControls}
                />
            )}
          </div>
      </div>

      {/* Sidebar Information */}
      <div className="w-full md:w-[380px] lg:w-[420px] h-[50vh] md:h-full bg-neutral-900 border-t md:border-t-0 md:border-l border-neutral-800 flex flex-col z-10 shadow-2xl">
          <div className="flex-1 overflow-y-auto p-8 md:p-10">
              <div className="mt-2 md:mt-12">
                  <span className="text-xs font-bold tracking-[0.2em] text-primary/80 uppercase mb-6 block">
                    {project.meta?.split('—')[0] || project.meta}
                  </span>
                  <h2 className="text-2xl md:text-4xl font-light text-white mb-8 tracking-tight leading-tight">
                    {project.title}
                  </h2>
                  
                  <div className="space-y-8 text-neutral-400 font-light leading-relaxed text-sm md:text-[0.95rem]">
                    <p>{project.description}</p>
                    
                    <div className="pt-8 border-t border-neutral-800 grid grid-cols-2 gap-y-8 gap-x-4">
                        {project.year && (
                            <div>
                                <span className="block text-[10px] uppercase tracking-wider text-neutral-500 mb-2 font-semibold">Ano</span>
                                <span className="text-neutral-200">{project.year}</span>
                            </div>
                        )}
                        {project.status && (
                            <div>
                                <span className="block text-[10px] uppercase tracking-wider text-neutral-500 mb-2 font-semibold">Status</span>
                                <span className="text-neutral-200">{project.status}</span>
                            </div>
                        )}
                        {project.area && (
                            <div>
                                <span className="block text-[10px] uppercase tracking-wider text-neutral-500 mb-2 font-semibold">Área</span>
                                <span className="text-neutral-200">{project.area}</span>
                            </div>
                        )}
                        {project.softwares && (
                            <div>
                                <span className="block text-[10px] uppercase tracking-wider text-neutral-500 mb-2 font-semibold">Softwares</span>
                                <span className="text-neutral-200">{project.softwares}</span>
                            </div>
                        )}
                        {project.location && (
                            <div className="col-span-2">
                                <span className="block text-[10px] uppercase tracking-wider text-neutral-500 mb-2 font-semibold">Localização</span>
                                <span className="text-neutral-200">{project.location}</span>
                            </div>
                        )}
                        {project.credits && (
                            <div className="col-span-2">
                                <span className="block text-[10px] uppercase tracking-wider text-neutral-500 mb-2 font-semibold">Ficha Técnica</span>
                                <span className="text-neutral-200">{project.credits}</span>
                            </div>
                        )}
                    </div>
                  </div>
              </div>
          </div>

          <div className="p-6 md:p-8 bg-neutral-900 border-t border-neutral-800 text-[10px] text-neutral-600 uppercase tracking-widest text-center">
            © {new Date().getFullYear()} José Eugênio
          </div>
      </div>
    </div>
  );
}
