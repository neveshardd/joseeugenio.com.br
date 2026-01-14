import { getWorkProcess } from "@/lib/api";

export default async function WorkProcess() {
  let steps = await getWorkProcess();

  if (!steps || steps.length === 0) {
    steps = [
      { id: 1, num: '01', title: 'Brainstorming', description: 'Alinhamento de expectativas e necessidades do projeto.' },
      { id: 2, num: '02', title: 'Estudo', description: 'Desenvolvimento das primeiras ideias e volumetrias.' }
    ];
  }

  return (
    <section className="section border-b border-border py-24 px-6 md:px-12">
      <h2 className="section-label text-center mb-16 block text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase">Etapas do Processo</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step: any) => (
          <div key={step.id} className="swiss-col border border-border p-8 bg-card transition-colors duration-300 hover:border-foreground">
            <span className="text-5xl font-bold text-border block leading-none mb-6">
              {step.num}
            </span>
            <h3 className="text-lg font-bold mb-4">{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
