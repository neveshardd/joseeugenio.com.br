import HeroContainer from "./(home)/sections/HeroContainer";
import ProjectsPreviewContainer from "./(home)/sections/ProjectsPreviewContainer";
import AboutPreviewContainer from "./(home)/sections/AboutPreviewContainer";
import HomeContactContainer from "./(home)/sections/HomeContactContainer";

export default function Home() {
  return (
    <main>
      <HeroContainer />
      <ProjectsPreviewContainer />
      <AboutPreviewContainer />
      <HomeContactContainer />
    </main>
  );
}
