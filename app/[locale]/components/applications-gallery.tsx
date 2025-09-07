"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type AppItem = {
  title: string;
  image: string;
};

export default function ApplicationsGallery({ apps }: { apps: AppItem[] }) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openModal = (index: number) => setCurrentIndex(index);
  const closeModal = () => setCurrentIndex(null);

  const prevImage = () =>
    setCurrentIndex((prev) => (prev !== null ? (prev - 1 + apps.length) % apps.length : prev));
  const nextImage = () =>
    setCurrentIndex((prev) => (prev !== null ? (prev + 1) % apps.length : prev));

  return (
    <>
      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {apps.map((app, index) => (
          <div key={index} className="group cursor-pointer" onClick={() => openModal(index)}>
            <div className="relative aspect-square bg-white mb-4 overflow-hidden">
              <Image
                src={app.image}
                alt={app.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
            <p className="text-sm font-light text-gray-700 tracking-wide">{app.title}</p>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {currentIndex !== null && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          {/* Zamknięcie */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white hover:text-gray-300"
          >
            <X size={32} />
          </button>

          {/* Strzałka w lewo */}
          <button
            onClick={prevImage}
            className="absolute left-6 text-white hover:text-gray-300"
          >
            <ChevronLeft size={40} />
          </button>

          {/* Obraz */}
          <div className="relative w-[90vw] h-[80vh]">
            <Image
              src={apps[currentIndex].image}
              alt={apps[currentIndex].title}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>

          {/* Strzałka w prawo */}
          <button
            onClick={nextImage}
            className="absolute right-6 text-white hover:text-gray-300"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </>
  );
}