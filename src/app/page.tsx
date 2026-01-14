import HeroSection from "./(home)/sections/HeroSection";
// import ProjectsPreviewSection from "./(home)/sections/ProjectsPreviewSection"; // Replaced by Container
import ProjectsPreviewContainer from "./(home)/sections/ProjectsPreviewContainer";
import AboutPreviewSection from "./(home)/sections/AboutPreviewSection";
import HomeContactSection from "./(home)/sections/HomeContactSection";
// import { ProjectCardProps } from "@/components/ProjectCard"; // No longer needed here

export default function Home() {
  return (
    <main>
      <HeroSection
        title="Arquitetura<br />do Silêncio"
        subtitle="Moldando o vazio. Esculpindo a luz."
        ctaText="Ver Portfólio Completo"
        ctaLink="/projetos"
        imageSrc="/hero.jpg"
      />

      <ProjectsPreviewContainer />

      <AboutPreviewSection
        label="O Perfil"
        heading="A atemporalidade<br/>é minha busca<br/>constante."
        paragraphs={[
          "Acredito que a arquitetura é a arte de emoldurar o vazio. Em um mundo saturado de ruído visual, busco o silêncio. Meu trabalho acadêmico é definido pela pesquisa da honestidade dos materiais — concreto aparente, aço bruto e vidro límpido.",
          "Como estudante de arquitetura, cada projeto é um exercício de diálogo entre a estrutura e o ambiente. Não projeto no terreno; projeto <em>com</em> o terreno."
        ]}
        ctaText="Conheça Minha Trajetória"
        ctaLink="/sobre"
      />

      <HomeContactSection />
    </main>
  );
}
