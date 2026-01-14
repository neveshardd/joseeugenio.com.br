import Link from "next/link";

export default function HomeContactSection() {
  return (
    <section className="section border-t border-border bg-neutral-50 py-24 px-6 md:px-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <span className="section-label block text-xs font-semibold tracking-[0.15em] text-muted-foreground mb-8 uppercase">Disponibilidade</span>
          <h2 className="hero-title text-[clamp(3rem,6vw,5rem)] leading-none font-light tracking-tighter mb-8 md:mb-0">
            Vamos criar<br />algo único?
          </h2>
        </div>

        <div className="flex flex-col gap-8 items-start">
          <p className="text-lg text-muted-foreground max-w-[400px]">
             Estou disponível para colaborações, estágios e projetos freelance de visualização arquitetônica.
          </p>
          
          <div className="flex gap-4 flex-wrap">
            <Link 
              href="/contato" 
              className="btn inline-flex items-center justify-center px-10 py-4 text-sm font-medium uppercase tracking-wider text-white bg-foreground transition-all duration-300 border border-foreground hover:bg-transparent hover:text-foreground hover:-translate-y-0.5 hover:shadow-lg cursor-pointer"
            >
              Iniciar Conversa
            </Link>
            <a 
              href="mailto:contact@joseeugenio.com.br" 
              className="btn-outline inline-flex items-center justify-center px-10 py-4 text-sm font-medium uppercase tracking-wider text-foreground bg-transparent transition-all duration-300 border border-foreground hover:bg-foreground hover:text-white hover:-translate-y-0.5 hover:shadow-lg cursor-pointer"
            >
              Enviar E-mail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
