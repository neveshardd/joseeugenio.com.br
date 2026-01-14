import { Metadata } from 'next';
import AboutHero from './sections/AboutHero';
import AboutManifesto from './sections/AboutManifesto';
import TechStack from './sections/TechStack';
import Experience from './sections/Experience';
import Education from './sections/Education';

export const metadata: Metadata = {
  title: "Sobre - José Eugênio",
  description: "Sobre José Eugênio, estudante de arquitetura e especialista em BIM.",
};

export default function About() {
  return (
    <main>
      <AboutHero />
      <AboutManifesto />
      <TechStack />
      <Experience />
      <Education />
    </main>
  );
}
