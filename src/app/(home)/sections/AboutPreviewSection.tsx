import Link from "next/link";

interface AboutPreviewSectionProps {
  label: string;
  heading: string;
  paragraphs: string[];
  ctaText: string;
  ctaLink: string;
}

export default function AboutPreviewSection({
  label,
  heading,
  paragraphs,
  ctaText,
  ctaLink
}: AboutPreviewSectionProps) {
  return (
    <section className="section border-b border-border py-24 px-6 md:px-12">
      <div className="grid md:grid-cols-[1fr_2fr] gap-12">
        <div>
          <h2 className="section-label block text-xs font-semibold tracking-[0.15em] text-muted-foreground mb-6 uppercase">{label}</h2>
          <div className="text-4xl md:text-6xl font-light uppercase leading-[1.1] mb-8 tracking-tighter" dangerouslySetInnerHTML={{ __html: heading }} />
        </div>
        <div>
          {paragraphs.map((paragraph, index) => (
            <p 
              key={index} 
              className={`text-lg leading-relaxed text-muted-foreground ${index < paragraphs.length - 1 ? 'mb-8' : 'mb-12'}`}
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
          <Link 
            href={ctaLink} 
            className="btn inline-flex items-center justify-center px-10 py-4 text-sm font-medium uppercase tracking-wider text-white bg-foreground transition-all duration-300 border border-foreground hover:bg-transparent hover:text-foreground hover:-translate-y-0.5 hover:shadow-lg cursor-pointer"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
