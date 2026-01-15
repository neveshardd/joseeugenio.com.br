"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
  ctaLink = "#",
}: AboutPreviewSectionProps) {
  return (
    <section className="section bg-neutral-50 py-32 md:py-56 px-6 md:px-12 lg:px-24 overflow-hidden border-b border-border relative">
      
      {/* Background Architectural Initials - Subtle decorative watermark */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[50vw] font-bold text-black/2 leading-none pointer-events-none select-none tracking-tighter">
        JE
      </div>

      <div className="w-full max-w-screen-2xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Side: Label and Heading */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-6 mb-16">
               <div className="w-12 h-px bg-black/20" />
               <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-black/40">
                {label}
               </span>
            </div>
            
            <h2 
              className="text-6xl md:text-8xl lg:text-[10rem] font-light tracking-tighter leading-[0.8] mb-12 uppercase wrap-break-word"
              dangerouslySetInnerHTML={{ __html: heading }}
            />

            <div className="w-full h-px bg-black/5 mt-16 lg:mt-24 hidden lg:block" />
          </div>

          {/* Right Side: Paragraphs and CTA - Offset downwards on desktop */}
          <div className="lg:col-span-4 lg:pt-48 flex flex-col justify-end">
            <div className="space-y-10 mb-20 relative">
              {/* Vertical accent line */}
              <div className="absolute -left-8 top-0 bottom-0 w-px bg-black/10 hidden md:block" />
              
              {paragraphs.map((p, i) => (
                <p 
                  key={i} 
                  className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light first-letter:text-4xl first-letter:font-normal first-letter:text-black"
                  dangerouslySetInnerHTML={{ __html: p }}
                />
              ))}
            </div>

            <Link 
              href={ctaLink} 
              className="group flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.5em] no-underline hover:text-black transition-colors"
            >
              <span className="relative py-2">
                {ctaText}
                <span className="absolute bottom-0 left-0 w-full h-px bg-black scale-x-0 origin-right transition-transform duration-500 ease-expo group-hover:scale-x-100 group-hover:origin-left" />
              </span>
              <div className="relative flex items-center justify-center w-14 h-14 rounded-full border border-black/10 group-hover:bg-black group-hover:text-white transition-all duration-300">
                <ArrowRight size={20} className="transition-transform duration-500 group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer decoration */}
      <div className="absolute bottom-12 left-12 hidden lg:flex items-center gap-8">
        <div className="w-32 h-px bg-black/5" />
      </div>
    </section>
  );
}
