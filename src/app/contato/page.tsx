import { Metadata } from 'next';
import ContactSection from './sections/ContactSection';

export const metadata: Metadata = {
  title: "Contato - José Eugênio",
  description: "Entre em contato com José Eugênio.",
};

export default function Contact() {
  return (
    <main className="pt-24 md:pt-32">
      <ContactSection />
    </main>
  );
}
