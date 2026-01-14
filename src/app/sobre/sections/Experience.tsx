import { getExperience } from "@/lib/api";

export default async function Experience() {
  const experiences = await getExperience();

  if (!experiences) return null;

  return (
    <section className="section border-b border-border py-24 px-6 md:px-12">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="section-label text-xs tracking-widest uppercase block font-semibold text-muted-foreground">Experiência Profissional</h2>
        </div>
        <div>
          {experiences.map((exp: any, index: number) => (
            <div key={exp.id} className={index < experiences.length - 1 ? "mb-8 pb-8 border-b border-border" : ""}>
              <span className="text-xs text-muted-foreground block mb-2">{exp.period}</span>
              <h3 className="text-xl font-medium mb-2">{exp.title}</h3>
              <p className="text-muted-foreground">{exp.company}</p>
              {exp.description && (
                <p className="text-sm mt-4 text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
