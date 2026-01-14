import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";
import { getTechStack } from "@/lib/api";

export default async function TechStack() {
  const techStackData = await getTechStack();

  if (!techStackData) return null;

  // Group by category
  const categories = techStackData.reduce((acc: any, item: any) => {
    if (!acc[item.category]) {
      acc[item.category] = {
        number: item.categoryNumber,
        title: item.categoryTitle,
        quote: item.categoryQuote,
        tools: []
      };
    }
    acc[item.category].tools.push({
      name: item.toolName,
      icon: item.toolIcon,
      description: item.toolDescription
    });
    return acc;
  }, {});

  const categoryOrder = ['bim', 'render', 'post'];

  return (
    <section className="border-b border-border">
      {/* Header Row */}
      <div className="py-16 px-6 md:px-12 border-b border-border">
        <div className="max-w-[1800px] mx-auto w-full">
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-light tracking-tighter leading-none -ml-[0.05em] text-foreground">
            Ferramentas <span className="opacity-30">&</span><br/>
            Workflow <span className="text-base align-middle opacity-50 ml-4 tracking-[0.2em] font-normal">DIGITAL</span>
          </h2>
        </div>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full bg-card">
        {categoryOrder.map((catKey, idx) => {
          const category = categories[catKey];
          if (!category) return null;

          return (
            <div 
              key={catKey}
              className={`swiss-col p-12 border-b lg:border-b-0 ${idx < 2 ? 'lg:border-r' : ''} border-border hover:bg-secondary/30 flex flex-col justify-between min-h-[400px] transition-colors duration-300`}
            >
              <div>
                <span className="text-8xl font-thin text-muted/20 leading-none mb-8 block">{category.number}</span>
                <h3 
                  className="text-[1.75rem] font-light mb-10 text-foreground"
                  dangerouslySetInnerHTML={{ __html: category.title }}
                />
                <ul className="flex flex-col gap-6">
                  {category.tools.map((tool: any, toolIdx: number) => {
                    // Dynamic icon mapping
                    let IconComponent;
                    if (tool.icon === 'EnscapeIcon') {
                      IconComponent = () => <div className="w-6 text-center font-bold">En</div>;
                    } else {
                      IconComponent = (SiIcons as any)[tool.icon] || (FaIcons as any)[tool.icon] || FaIcons.FaCube;
                    }

                    return (
                      <li key={toolIdx} className="flex items-center gap-5">
                        <IconComponent size={24} />
                        <div>
                          <span className="text-sm font-bold uppercase tracking-widest block">{tool.name}</span>
                          <span className="text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground">{tool.description}</span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="mt-12 pt-8 border-t border-border/50 text-xs text-muted-foreground leading-relaxed italic">
                &quot;{category.quote}&quot;
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
