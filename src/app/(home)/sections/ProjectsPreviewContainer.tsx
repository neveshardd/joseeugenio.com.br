"use client";

import { useQuery } from "@tanstack/react-query";
import { getPageContent, fetchFromAPI } from "@/lib/api";
import ProjectsPreviewSection from "./ProjectsPreviewSection";
import { Project } from "@/types";
import { ProjectCardProps } from "@/components/ProjectCard";
import { Loader2 } from "lucide-react";
import { getImageUrl } from "@/lib/image-url";
import { useState, useCallback } from "react";
import ProjectModal from "@/components/ProjectModal";

export default function ProjectsPreviewContainer() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const { data: projects, isLoading: projectsLoading } = useQuery<Project[]>({
    queryKey: ["home-projects"],
    queryFn: async () => {
      try {
        const data = await fetchFromAPI("/projects");
        return data?.slice(0, 3) || [];
      } catch (err) {
        console.error("Error fetching projects for home:", err);
        return [];
      }
    },
    retry: 1,
  });

  const { data: content, isLoading: contentLoading } = useQuery({
    queryKey: ["page-content", "home_projects"],
    queryFn: () => getPageContent("home_projects"),
  });

  const handleOpen = (project: Project) => {
    setSelectedProject(project);
  };

  const handleClose = useCallback(() => {
    setSelectedProject(null);
  }, []);

  if (projectsLoading || contentLoading) {
    return (
      <section className="section border-b border-border py-24 px-6 md:px-12 flex justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground/20" />
      </section>
    );
  }

  if (!projects || projects.length === 0) return null;

  // Transform Project to ProjectCardProps
  const displayProjects: ProjectCardProps[] = projects.map((p) => ({
    href: undefined,
    imageSrc: getImageUrl(p.imageSrc),
    imageAlt: p.imageAlt || p.title,
    title: p.title,
    meta: p.meta,
    onClick: () => handleOpen(p),
  }));

  // Append the "See All" placeholder card if content exists or use minimal defaults
  displayProjects.push({
    href: content?.ctaLink || "/projetos",
    imageAlt: content?.ctaAlt || "Ver todos os projetos",
    title: content?.ctaTitle || "Portfólio",
    meta: content?.ctaMeta || "",
    isPlaceholder: true,
    placeholderTitle: content?.placeholderTitle || "Ver Todos",
    placeholderSubtitle: content?.placeholderSubtitle || ""
  });

  return (
    <>
      <ProjectsPreviewSection
        label={content?.label || "Projetos"}
        projects={displayProjects}
      />
      <ProjectModal 
        project={selectedProject} 
        onClose={handleClose} 
      />
    </>
  );
}
