import { getFAQ } from "@/lib/api";

export default async function FAQSection() {
  let faqs = await getFAQ();

  if (!faqs || faqs.length === 0) {
    faqs = [
      { id: 1, question: 'Quais softwares são utilizados?', answer: 'Trabalhamos prioritariamente com Revit (BIM), Enscape e Adobe Suite.' }
    ];
  }

  return (
    <section className="section bg-secondary/30 border-b border-border py-24 px-6 md:px-12">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="section-label block text-xs font-semibold tracking-[0.15em] text-muted-foreground mb-6 uppercase">Dúvidas Frequentes</h2>
          <h3 className="hero-title text-[2.5rem] font-light tracking-tighter leading-[0.9] -ml-[0.05em]">Perguntas<br/>Comuns</h3>
        </div>
        <div className="flex flex-col gap-8">
          {faqs.map((item: any, i: number) => (
            <div key={i} className="faq-item">
              <h4 className="text-lg font-bold mb-2">{item.question}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
