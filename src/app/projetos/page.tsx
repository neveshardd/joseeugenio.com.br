import { Metadata } from "next";
import ProjectsHero from "./sections/ProjectsHero";
import ProjectsGallerySection from "./sections/ProjectsGallerySection";

export const metadata: Metadata = {
  title: "Projetos - José Eugênio",
  description: "Projetos acadêmicos e conceituais de arquitetura.",
};

export default function Projects() {
  return (
    <main className="pt-24 md:pt-32">
      <ProjectsHero />
      <ProjectsGallerySection />
    </main>
  );
}
