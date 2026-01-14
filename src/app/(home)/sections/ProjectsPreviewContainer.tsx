"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProjectsPreviewSection from "./ProjectsPreviewSection";
import { Project } from "@/types";
import { ProjectCardProps } from "@/components/ProjectCard";
import { Loader2 } from "lucide-react";
import { getImageUrl } from "@/lib/image-url";
import { useState, useCallback } from "react";
import ProjectModal from "@/components/ProjectModal";

const API_URL = process.env.NEXT_PUBLIC_BACKOFFICE_API_URL || "http://localhost:4000/api";

export default function ProjectsPreviewContainer() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const { data: projects, isLoading, error } = useQuery<Project[]>({
    queryKey: ["home-projects"],
    queryFn: async () => {
      const { data } = await axios.get(`${API_URL}/projects`);
      // Return only top 3 projects for preview
      return data.slice(0, 3);
    },
  });

  const handleOpen = (project: Project) => {
    setSelectedProject(project);
  };

  const handleClose = useCallback(() => {
    setSelectedProject(null);
  }, []);

  if (isLoading) {
    return (
      <section className="section border-b border-border py-24 px-6 md:px-12 flex justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </section>
    );
  }

  if (error) {
    return (
        <ProjectsPreviewSection 
            label="Destaques" 
            projects={[
                {
                    href: "/projetos",
                    imageAlt: "Ver todos os projetos",
                    title: "Portfólio Completo",
                    meta: "2023 — 2026",
                    isPlaceholder: true,
                    placeholderTitle: "Explorar Acervo",
                    placeholderSubtitle: "Ver todos os projetos"
                }
            ]} 
        />
    );
  }

  // Transform Project to ProjectCardProps
  const displayProjects: ProjectCardProps[] = (projects || []).map((p) => ({
    href: undefined, // No href, we use onClick
    imageSrc: getImageUrl(p.imageSrc),
    imageAlt: p.imageAlt || p.title,
    title: p.title,
    meta: p.meta,
    onClick: () => handleOpen(p),
  }));

  // Append the "See All" placeholder card
  displayProjects.push({
    href: "/projetos",
    imageAlt: "Ver todos os projetos",
    title: "Portfólio Completo",
    meta: "2023 — 2026",
    isPlaceholder: true,
    placeholderTitle: "Explorar Acervo",
    placeholderSubtitle: "Ver todos os projetos"
  });

  return (
    <>
      <ProjectsPreviewSection
        label="Destaques Acadêmicos"
        projects={displayProjects}
      />
      <ProjectModal 
        project={selectedProject} 
        onClose={handleClose} 
      />
    </>
  );
}
