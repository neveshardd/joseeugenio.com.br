import Image from "next/image";

interface HeroImageProps {
  src: string;
  alt: string;
}

export default function HeroImage({ src, alt }: HeroImageProps) {
  return (
    <div className="hero-image-container w-full h-[70vh] relative overflow-hidden border-y border-border">
      <Image 
        src={src} 
        alt={alt} 
        fill 
        className="object-cover"
        priority
        sizes="100vw"
      />
    </div>
  );
}
