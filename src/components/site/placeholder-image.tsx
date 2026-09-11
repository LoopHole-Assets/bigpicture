"use client";

import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
  src: string;
  alt: string;
  tone?: string;
  label?: string;
  caption?: string;
  className?: string;
  seed?: number;
  priority?: boolean;
  contain?: boolean;
}

export function PlaceholderImage({
  src,
  alt,
  className,
  priority = false,
  contain = false,
}: PlaceholderImageProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={cn(
          "absolute inset-0 h-full w-full",
          contain ? "bg-white object-contain p-3" : "object-cover"
        )}
      />
    </div>
  );
}
