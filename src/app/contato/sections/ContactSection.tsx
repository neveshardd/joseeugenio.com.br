import Link from "next/link";
import { cn } from "@/lib/utils";
import { getPageContent } from "@/lib/api";

export default async function ContactSection() {
  const content = await getPageContent('contact_info');

  if (!content) return null;

  return (
    <section className="section flex flex-col justify-center items-center min-h-[80vh] border-b border-border py-24 px-6 md:px-12">
      <div className="flex flex-col items-center text-center py-16 px-4 max-w-[800px] w-full">
        <span className="section-label block text-xs font-semibold tracking-[0.15em] text-muted-foreground mb-8 uppercase">
          {content.label || 'Vamos Conversar?'}
        </span>
        <h2 className="contact-heading text-[clamp(2.5rem,6vw,5rem)] mb-12 font-light">
          {content.heading || 'Entre em Contato'}
        </h2>
        <p className="mb-16 text-lg text-center max-w-[500px] text-muted-foreground leading-relaxed">
          {content.description || 'Estou disponível para estágios, parcerias acadêmicas ou projetos freelance.'}
        </p>
        
        <div className="flex flex-col gap-4 items-center w-full">
          <a 
            href={`mailto:${content.email || 'contact@joseeugenio.com.br'}`} 
            className="btn w-full max-w-[400px] inline-flex items-center justify-center px-10 py-4 text-sm font-medium uppercase tracking-wider text-white bg-foreground transition-all duration-300 border border-foreground hover:bg-transparent hover:text-foreground hover:-translate-y-0.5 hover:shadow-lg cursor-pointer"
          >
            Enviar E-mail
          </a>
          {content.whatsapp && (
            <a 
              href={`https://wa.me/${content.whatsapp}`} 
              className="btn-outline w-full max-w-[400px] inline-flex items-center justify-center px-10 py-4 text-sm font-medium uppercase tracking-wider text-foreground bg-transparent transition-all duration-300 border border-foreground hover:bg-foreground hover:text-white hover:-translate-y-0.5 hover:shadow-lg cursor-pointer"
            >
              WhatsApp
            </a>
          )}
        </div>

        <div className="mt-16 flex gap-8 justify-center">
          {content.linkedin && (
            <a href={content.linkedin} className="link-elegant inline-flex items-center gap-2 no-underline text-foreground relative font-semibold uppercase text-xs tracking-[0.15em] pb-[2px] transition-opacity duration-300 hover:opacity-80 group">
              LinkedIn
              <span className="link-icon text-[1.1em] transition-transform duration-500 ease-[cubic-bezier(0.165,0.84,0.44,1)] inline-block group-hover:translate-x-1.5">⟶</span>
              <span className="absolute bottom-0 left-0 w-full h-px bg-foreground scale-x-0 origin-right transition-transform duration-500 ease-[cubic-bezier(0.165,0.84,0.44,1)] group-hover:scale-x-100 group-hover:origin-left"/>
            </a>
          )}
          {content.instagram && (
            <a href={content.instagram} className="link-elegant inline-flex items-center gap-2 no-underline text-foreground relative font-semibold uppercase text-xs tracking-[0.15em] pb-[2px] transition-opacity duration-300 hover:opacity-80 group">
              Instagram
              <span className="link-icon text-[1.1em] transition-transform duration-500 ease-[cubic-bezier(0.165,0.84,0.44,1)] inline-block group-hover:translate-x-1.5">⟶</span>
              <span className="absolute bottom-0 left-0 w-full h-px bg-foreground scale-x-0 origin-right transition-transform duration-500 ease-[cubic-bezier(0.165,0.84,0.44,1)] group-hover:scale-x-100 group-hover:origin-left"/>
            </a>
          )}
          {content.behance && (
            <a href={content.behance} className="link-elegant inline-flex items-center gap-2 no-underline text-foreground relative font-semibold uppercase text-xs tracking-[0.15em] pb-[2px] transition-opacity duration-300 hover:opacity-80 group">
              Behance
              <span className="link-icon text-[1.1em] transition-transform duration-500 ease-[cubic-bezier(0.165,0.84,0.44,1)] inline-block group-hover:translate-x-1.5">⟶</span>
              <span className="absolute bottom-0 left-0 w-full h-px bg-foreground scale-x-0 origin-right transition-transform duration-500 ease-[cubic-bezier(0.165,0.84,0.44,1)] group-hover:scale-x-100 group-hover:origin-left"/>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
