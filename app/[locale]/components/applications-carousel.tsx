"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type AppItem = {
  title: string;
  image: string;
};

export function GalleryGrid({
  apps,
  onSelect,
  className = "grid md:grid-cols-2 lg:grid-cols-4 gap-8",
}: {
  apps: AppItem[];
  onSelect: (index: number) => void;
  className?: string;
}) {
  return (
    <div className={className}>
      {apps.map((app, index) => (
        <div
          key={index}
          className="group cursor-pointer"
          onClick={() => onSelect(index)}
        >
          <div className="relative aspect-square bg-white mb-4 overflow-hidden">
            <Image
              src={app.image}
              alt={app.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          </div>
          <p className="text-sm font-light text-gray-700 tracking-wide">
            {app.title}
          </p>
        </div>
      ))}
    </div>
  );
}

export function Lightbox({
  apps,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: {
  apps: AppItem[];
  currentIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, onClose, onPrev, onNext]);

  if (currentIndex === null) return null;

  return (
    <div
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative w-[90vw] h-[80vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Zamknięcie */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white hover:text-gray-300 z-10"
        >
          <X size={32} />
        </button>

        {/* Strzałka w lewo */}
        <button
          onClick={onPrev}
          className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10"
        >
          <ChevronLeft size={40} />
        </button>

        {/* Obraz */}
        <div className="relative flex-1 w-full">
          <Image
            src={apps[currentIndex].image}
            alt={apps[currentIndex].title}
            fill
            className="object-contain"
            sizes="90vw"
          />
        </div>

        {/* Podpis pod obrazem */}
        <p className="mt-4 text-center text-white text-sm md:text-base font-light">
          {apps[currentIndex].title}
        </p>

        {/* Strzałka w prawo */}
        <button
          onClick={onNext}
          className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10"
        >
          <ChevronRight size={40} />
        </button>
      </div>
    </div>
  );
}


export default function ApplicationsGallery({ apps }: { apps: AppItem[] }) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openModal = (index: number) => setCurrentIndex(index);
  const closeModal = () => setCurrentIndex(null);
  const prevImage = () =>
    setCurrentIndex((prev) =>
      prev !== null ? (prev - 1 + apps.length) % apps.length : prev
    );
  const nextImage = () =>
    setCurrentIndex((prev) =>
      prev !== null ? (prev + 1) % apps.length : prev
    );

  return (
    <>
      <GalleryGrid
        apps={apps}
        onSelect={openModal}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" // <- możesz tu zmieniać layout
      />
      <Lightbox
        apps={apps}
        currentIndex={currentIndex}
        onClose={closeModal}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </>
  );
}
