"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Project } from "@/types";
import { getImageUrl } from "@/lib/image-url";
import ProjectModal from "@/components/ProjectModal";

const API_URL = process.env.NEXT_PUBLIC_BACKOFFICE_API_URL || "http://localhost:4000/api";

export default function ProjectGallery() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Fetch Projects
  const { data: projects, isLoading: isLoadingProjects, error: projectsError } = useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: async () => {
      const { data } = await axios.get(`${API_URL}/projects`);
      return data;
    },
  });

  const handleOpen = (project: Project) => {
    setSelectedProject(project);
  };

  const handleClose = useCallback(() => {
    setSelectedProject(null);
  }, []);

  if (isLoadingProjects) {
      return (
          <div className="w-full h-[50vh] flex items-center justify-center">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
      );
  }

  if (projectsError) {
      return (
          <div className="w-full py-24 text-center">
              <p className="text-muted-foreground">Não foi possível carregar os projetos no momento.</p>
          </div>
      );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        {projects?.map((project) => (
          <div 
            key={project.id} 
            className="group cursor-pointer"
            onClick={() => handleOpen(project)}
          >
            <div className="project-image bg-secondary aspect-4/5 relative overflow-hidden mb-4">
               {project.imageSrc ? (
                <Image 
                  src={getImageUrl(project.imageSrc)} 
                  alt={project.imageAlt || project.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                />
               ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    Sem Imagem
                </div>
               )}
            </div>
            
            <div className="flex justify-between items-baseline border-b border-border pb-2 group-hover:border-foreground transition-colors">
              <h3 className="text-xl font-light">{project.title}</h3>
              <span className="text-xs uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">
                {project.year || "2024"}
              </span>
            </div>
            <div className="mt-2 flex justify-between text-xs text-muted-foreground">
               <span>{project.meta?.split('—')[0] || ""}</span>
               <span>{project.location}</span>
            </div>
          </div>
        ))}
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={handleClose} 
      />
    </>
  );
}
