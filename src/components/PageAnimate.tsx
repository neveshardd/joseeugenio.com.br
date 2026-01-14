"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function PageAnimate({ children }: { children: React.ReactNode }) {
  
  useLayoutEffect(() => {
    // 1. Initialize Lenis for Smooth Scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    // Connect GSAP ScrollTrigger to Lenis
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    requestAnimationFrame(raf);

    // 2. Global GSAP Animations using Context
    const ctx = gsap.context(() => {
      
      // A. HERO TITLES (Char by Char Reveal)
      const heroTitles = document.querySelectorAll(".hero-title");
      if (heroTitles.length > 0) {
        // Warning: SplitType might need a small delay if fonts are loading, but Next.js fonts optimize this.
        const text = new SplitType(".hero-title", { types: "chars,words" });
        
        gsap.fromTo(text.chars, 
          { 
            y: 100, 
            opacity: 0,
            rotateZ: 5
          },
          { 
            y: 0, 
            opacity: 1, 
            rotateZ: 0,
            duration: 1, 
            stagger: 0.02,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: ".hero-title",
              start: "top 85%",
            }
          }
        );
      }

      // B. SECTION LABELS (Slide & Reveal)
      const labels = document.querySelectorAll(".section-label");
      labels.forEach((label) => {
        gsap.fromTo(label,
            { x: -30, opacity: 0, letterSpacing: "0.5em" },
            {
                x: 0,
                opacity: 1,
                letterSpacing: "0.15em",
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: label,
                    start: "top 90%",
                }
            }
        );
      });

      // C. PARAGRAPHS & SUBTITLES (Line by Line Reveal)
      // We target widely used text elements
      const texts = document.querySelectorAll("p, .hero-subtitle, .text-lg");
      texts.forEach((el) => {
          gsap.fromTo(el,
            { y: 20, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 95%",
                }
            }
          );
      });

      // D. CARDS & GRID ITEMS (Staggered Fade Up with Scale)
      const gridItems = document.querySelectorAll(".card-item, .project-item, .swiss-col");
      if (gridItems.length > 0) {
          ScrollTrigger.batch(gridItems, {
              start: "top 90%",
              onEnter: (elements) => {
                  gsap.fromTo(elements, 
                      { y: 60, opacity: 0, scale: 0.95 },
                      { 
                          y: 0, 
                          opacity: 1, 
                          scale: 1, 
                          duration: 0.8, 
                          stagger: 0.15, 
                          ease: "power3.out" 
                      }
                  );
              },
              once: true
          });
      }

      // E. NAVIGATION LINKS (Simulate entrance)
      // Updated selector for new structure: .nav-link
      gsap.fromTo(".nav-link", 
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out", delay: 0.5 }
      );

      // F. HERO IMAGE PARALLAX
      const heroImgs = document.querySelectorAll(".hero-image-container img");
      heroImgs.forEach((img) => {
          gsap.to(img, {
              yPercent: 20,
              ease: "none",
              scrollTrigger: {
                  trigger: img.parentElement,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true
              }
          });
      });

    });

    return () => {
        ctx.revert();
        lenis.destroy();
    };
  }, []); 

  return <>{children}</>;
}
