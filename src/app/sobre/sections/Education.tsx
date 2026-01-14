import { getEducation } from "@/lib/api";

export default async function Education() {
  let education = await getEducation();

  if (!education || education.length === 0) {
    education = [
      { id: 1, period: '2020 — 2025', title: 'Arquitetura e Urbanismo', institution: 'Universidade', description: 'Graduação em andamento.' }
    ];
  }

  return (
    <section className="section bg-secondary/30 border-b border-border py-24 px-6 md:px-12">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="section-label text-xs tracking-widest uppercase block font-semibold text-muted-foreground">Formação Acadêmica</h2>
        </div>
        <div>
          {education.map((edu: any, index: number) => (
            <div key={edu.id} className={index < education.length - 1 ? "mb-8 pb-8 border-b border-border/50" : ""}>
              <span className="text-xs text-muted-foreground block mb-2">{edu.period}</span>
              <h3 className="text-xl font-medium mb-2">{edu.title}</h3>
              <p className="text-muted-foreground">{edu.institution}</p>
              {edu.description && (
                <p className="text-sm mt-4 text-muted-foreground leading-relaxed">{edu.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
