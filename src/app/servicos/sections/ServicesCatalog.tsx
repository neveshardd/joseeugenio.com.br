import * as FaIcons from "react-icons/fa";
import { cn } from "@/lib/utils";
import { getServices } from "@/lib/api";

export default async function ServicesCatalog() {
  let servicesData = await getServices();
  
  if (!servicesData || servicesData.length === 0) {
    servicesData = [
      { id: 1, title: 'Projeto Arquitetônico', description: 'Desenvolvimento completo, do estudo preliminar ao projeto executivo.', tags: 'Arquitetura / BIM', icon: 'FaDrawPolygon' },
      { id: 2, title: 'Modelagem BIM', description: 'Criação de modelos inteligentes para coordenação e extração de quantitativos.', tags: 'BIM / Tecnologia', icon: 'FaCube' }
    ];
  }

  return (
    <section className="section border-b border-border py-24 px-6 md:px-12">
      <div className="mb-20">
        <h2 className="section-label block text-xs font-semibold tracking-[0.15em] text-muted-foreground mb-6 uppercase">Áreas de Atuação</h2>
        <h3 className="hero-title text-5xl font-light mb-6 tracking-tighter leading-[0.9] -ml-[0.05em]">Expertise Técnica</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[400px]">
        {(() => {
          // Smart packing algorithm
          const desktopItems: any[] = [];
          let currentRowWidth = 0;
          
          // Pre-calculate classes for Desktop (cols-3)
          servicesData.forEach((service: any, index: number) => {
            const isLast = index === servicesData.length - 1;
            let colSpan = 1;
            
            // Logic for assigning spans
            // We track currentRowWidth (0, 1, 2)
            
            if (currentRowWidth === 0) {
               // Start of row: Can be 1 or 2
               // Randomize or based on index characteristics
               // simple pattern: every 1st of 5 is wide
               const wantsWide = (index % 5 === 0) || (index % 7 === 0);
               if (wantsWide && !isLast) colSpan = 2;
            } else if (currentRowWidth === 1) {
               // Middle: Can be 1 or 2
               const wantsWide = (index % 4 === 0);
               if (wantsWide && !isLast) colSpan = 2; 
               else colSpan = 1;
            } else {
               // End of row: Must be 1
               colSpan = 1;
            }

            // Fill gap logic for last item
            if (isLast) {
               const remainingSpace = 3 - currentRowWidth;
               // If remainingSpace is 1, colSpan 1 fills it.
               // If remainingSpace is 2, colSpan 2 fills it.
               // If remainingSpace is 3 (new row), colSpan could be 3 to fill entire bottom?
               if (remainingSpace < 3) colSpan = remainingSpace;
               else colSpan = 3; // Make last item full width if it starts a new row alone
            }
            
            currentRowWidth = (currentRowWidth + colSpan) % 3;
            
            // Push with styling
            desktopItems.push({ ...service, colSpan });
          });

          return desktopItems.map((service, i) => {
             // Dynamic Icon mapping
             const IconComponent = (FaIcons as any)[service.icon] || FaIcons.FaCube;
             
             // Construct class based on calculated colSpan
             // Mobile: always col-span-1 (grid-cols-1)
             // Tablet: simple pattern or auto? Let's use MD:col-span-1 normally, maybe wide sometimes?
             // To keep it simple, tablet is 2 cols. 
             // Logic for tablet: 
             const tabletSpan = (i % 3 === 0) ? "md:col-span-2" : "md:col-span-1";
             
             // Desktop class
             const desktopClass = service.colSpan === 2 ? "lg:col-span-2" : service.colSpan === 3 ? "lg:col-span-3" : "lg:col-span-1";
             
             return (
                <div key={service.id} className={cn(
                  "swiss-col border border-border p-12 bg-card flex flex-col justify-between h-full relative min-h-[400px] overflow-hidden transition-all duration-300 group hover:border-foreground hover:bg-secondary/50 hover:z-10",
                  desktopClass,
                  tabletSpan
                )}>
                  <span className="absolute top-8 right-8 font-mono text-sm text-muted-foreground opacity-50">
                      {i < 9 ? `0${i + 1}` : i + 1}
                  </span>
                  
                  <div className="mb-8 opacity-50 transition-opacity duration-300 group-hover:opacity-100">
                    <IconComponent size={32} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-light mb-6">{service.title}</h3>
                    <p className="text-muted-foreground text-[0.95rem] leading-relaxed mb-12 max-w-[500px]">{service.description}</p>
                  </div>
                  
                  <div className="text-xs uppercase tracking-widest text-muted-foreground border-t border-border pt-6 mt-auto">
                    {service.tags}
                  </div>
                </div>
             );
          });
        })()}
      </div>
    </section>
  );
}
