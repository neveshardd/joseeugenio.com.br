import Image from "next/image";
import Link from "next/link";

export interface ProjectCardProps {
  href?: string;
  imageSrc?: string;
  imageAlt: string;
  title: string;
  meta: string;
  isPlaceholder?: boolean;
  placeholderTitle?: string;
  placeholderSubtitle?: string;
  onClick?: () => void;
}

export default function ProjectCard({
  href,
  imageSrc,
  imageAlt,
  title,
  meta,
  isPlaceholder = false,
  placeholderTitle,
  placeholderSubtitle,
  onClick
}: ProjectCardProps) {
  const Content = () => (
    <>
      <div className="project-image relative aspect-4/5 bg-secondary overflow-hidden mb-6">
        {isPlaceholder ? (
          <div className="flex flex-col items-center justify-center h-full w-full bg-secondary text-center p-8 text-muted-foreground group-hover:text-foreground transition-colors">
            <h4 className="mb-2 text-xl font-medium text-foreground">{placeholderTitle}</h4>
            <p>{placeholderSubtitle}</p>
          </div>
        ) : imageSrc ? (
          <Image 
            src={imageSrc} 
            alt={imageAlt} 
            fill 
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            unoptimized
          />
        ) : null}
      </div>
      <h3 className="project-title text-2xl font-medium mb-2 tracking-tight">{title}</h3>
      <p className="project-meta text-sm text-muted-foreground uppercase tracking-widest">{meta}</p>
    </>
  );

  if (onClick) {
    return (
      <button 
        onClick={onClick} 
        className="project-item group block w-full text-left no-underline text-inherit pointer-events-auto bg-transparent border-none p-0 cursor-pointer"
      >
        <Content />
      </button>
    );
  }

  return (
    <Link href={href || "#"} className="project-item group block no-underline text-inherit pointer-events-auto">
      <Content />
    </Link>
  );
}
