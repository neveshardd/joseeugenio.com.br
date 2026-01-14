import ProjectCard, { ProjectCardProps } from "@/components/ProjectCard";

interface ProjectsPreviewSectionProps {
  label: string;
  projects: ProjectCardProps[];
}

export default function ProjectsPreviewSection({ label, projects }: ProjectsPreviewSectionProps) {
  return (
    <section className="section border-b border-border py-24 px-6 md:px-12">
      <span className="section-label block text-xs font-semibold tracking-[0.15em] text-muted-foreground mb-6 uppercase">{label}</span>
      <div className="projects-grid grid grid-cols-1 gap-6 w-full pt-8 max-w-[1800px] mx-auto md:grid-cols-2 lg:gap-12">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
