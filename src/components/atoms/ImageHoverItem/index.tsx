import Image from "next/image";
import { useState, useEffect } from "react";

interface Props {
  src: string;
  alt: string;
}

export default function ImageHoverItem({ src, alt }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isHovered) return;
    const handleClickOutside = () => setIsHovered(false);
    if (isMobile) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [isHovered, isMobile]);

  return (
    <div
      className="relative w-full max-w-[240px] cursor-pointer"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onClick={(e) => {
        e.stopPropagation();
        if (isMobile) setIsHovered(!isHovered);
      }}
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow-md">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-300"
        />
      </div>

      {/* Zoomed Floating Image */}
      {isHovered && (
        <div
          className="fixed z-[100] top-16 left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out"
          style={{
            width: 'min(600px, 90vw)',
            aspectRatio: '4 / 3',
          }}
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            <Image src={src} alt={alt} fill className="object-cover" />
          </div>
        </div>
      )}
    </div>
  );
}