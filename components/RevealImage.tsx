"use client";

import Image from "next/image";
import { type PropsWithChildren, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type RevealImageProps = PropsWithChildren<{
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
}>;

export function RevealImage({
  src,
  alt,
  className,
  imageClassName,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  children
}: RevealImageProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("image-reveal-wrapper", revealed && "is-revealed", className)}>
      <div className="image-reveal-shutter" />
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn("image-reveal-img object-cover", imageClassName)}
      />
      {children}
    </div>
  );
}
