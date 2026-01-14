import { Metadata } from 'next';
import ServicesHero from './sections/ServicesHero';
import ServicesCatalog from './sections/ServicesCatalog';
import WorkProcess from './sections/WorkProcess';
import BIMMethodology from './sections/BIMMethodology';
import FAQSection from './sections/FAQSection';
import ServicesCTA from './sections/ServicesCTA';

export const metadata: Metadata = {
  title: "Serviços - José Eugênio",
  description: "Serviços de arquitetura, projetos complementares e modelagem BIM.",
};

export default function Services() {
  return (
    <main>
      <ServicesHero />
      <ServicesCatalog />
      <WorkProcess />
      <BIMMethodology />
      <FAQSection />
      <ServicesCTA />
    </main>
  );
}
