"use client";

import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Button } from "@/app/[locale]/components/ui/button";

export function Carousel({ images }: { images: { src: string; alt: string }[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );
  const [current, setCurrent] = useState(1);
  const [count, setCount] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrent(emblaApi.selectedScrollSnap() + 1);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setCount(emblaApi.scrollSnapList().length);
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden shadow-md" ref={emblaRef}>
        <div className="flex">
          {images.map((img, index) => (
            <div key={index} className="flex-[0_0_100%] relative h-[70vh]">
              <Image src={img.src} alt={img.alt} fill className="object-cover" priority={index === 0} />
            </div>
          ))}
        </div>
      </div>
      {/* Przycisk Poprzedni */}
      <Button
        variant="outline"
        className="absolute left-4 top-1/2 transform -translate-y-1/2"
        onClick={scrollPrev}
      >
        ‹
      </Button>
      {/* Przycisk Następny */}
      <Button
        variant="outline"
        className="absolute right-4 top-1/2 transform -translate-y-1/2"
        onClick={scrollNext}
      >
        ›
      </Button>
      {/* Wskaźnik slajdu */}
      <div className="absolute bottom-4 right-4 bg-black/50 text-white text-sm px-2 py-1">
        {current} / {count}
      </div>
    </div>
  );
}
