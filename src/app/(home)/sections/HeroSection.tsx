import Link from "next/link";
import Image from "next/image";
import { ArrowDownRight } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  imageSrc: string;
  imageAlt?: string;
}

export default function HeroSection({ 
  title, 
  subtitle, 
  ctaText, 
  ctaLink = "/", 
  imageSrc,
  imageAlt = "Arquitetura Minimalista"
}: HeroSectionProps) {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      
      {/* Background Image - Full Width & Color */}
      <div className="absolute inset-0 w-full h-full">
         <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-[20s] ease-linear scale-100 peer-hover:scale-105"
            priority
            sizes="100vw"
            unoptimized={process.env.NODE_ENV === 'development'}
         />
         {/* Gradient Overlay for text readability - Darkened */}
         <div className="absolute inset-0 bg-black/40" />
         <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-black/30" />
      </div>

      {/* Text Content - Overlay */}
      <div className="relative z-10 h-full w-full flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-12 lg:px-20 pointer-events-none">
         <div className="w-full pointer-events-auto peer">
             <h1 
               className="hero-title font-light tracking-tighter text-[16vw] lg:text-[10vw] leading-[0.8] -ml-[0.05em] mb-12 text-white drop-shadow-lg" 
               dangerouslySetInnerHTML={{ __html: title }} 
             />
             
             <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 border-t border-white/30 pt-10">
                 <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide max-w-2xl leading-relaxed drop-shadow-md">
                   {subtitle}
                 </p>
                 
                 <Link 
                    href={ctaLink} 
                    className="group flex items-center gap-4 px-8 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 text-sm font-medium uppercase tracking-widest"
                  >
                    {ctaText}
                    <ArrowDownRight size={20} className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
                 </Link>
             </div>
         </div>
      </div>

    </section>
  );
}
