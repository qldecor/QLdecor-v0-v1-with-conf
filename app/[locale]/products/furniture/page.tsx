"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/[locale]/components/navbar";
import { ScrollButton } from "@/app/[locale]/components/ui/scroll-button";
import { Button } from "@/app/[locale]/components/ui/button";
import { ClipboardList, Hammer, Layers } from "lucide-react";
import { useTranslations } from "next-intl";
// import type { Metadata } from "next";
import { Carousel } from "@/app/[locale]/components/carousel";
import { GalleryGrid, Lightbox } from "@/app/[locale]/components/applications-carousel";
import { useState } from "react";

// export const metadata: Metadata = {
//   title: "Meble QLdecor – biblioteki, komody, indywidualne realizacje",
//   description:
//     "Ekskluzywne meble QLdecor wykonane z płyt WoodSense i MetaLux. Biblioteki, komody i indywidualne projekty dla nowoczesnych, luksusowych wnętrz.",
//   keywords: [
//     "meble QLdecor",
//     "biblioteki",
//     "meble premium",
//     "WoodSense",
//     "MetaLux",
//     "komody",
//     "meble na zamówienie"
//   ],
//   alternates: {
//     canonical: "/furniture"
//   },
//   openGraph: {
//     title: "Meble QLdecor – biblioteki i indywidualne realizacje",
//     description:
//       "Nowoczesne biblioteki i komody wykonane z płyt WoodSense i MetaLux. Zobacz nasze realizacje i zaprojektuj wymarzone meble.",
//     url: "https://qldecor.shop/furniture",
//     siteName: "QLdecor",
//     locale: "pl_PL",
//     type: "website",
//     images: [
//       {
//         url: "https://qldecor.shop/img/furniture/hero.webp",
//         width: 1200,
//         height: 630,
//         alt: "Meble QLdecor – biblioteki z WoodSense i MetaLux"
//       }
//     ]
//   }
// };

export default function FurniturePage() {
  const t = useTranslations("furniturePage");

  const images = [
    { title: "Type 1", image: "/img/furniture/library/vis/g1-scaled.webp" },
    { title: "Type 2", image: "/img/furniture/library/vis/g2-scaled.webp" },
    { title: "Type 2", image: "/img/furniture/library/vis/t1-scaled.webp" },
    { title: "Type 3", image: "/img/furniture/library/vis/t2-scaled.webp" },
    { title: "Type 4", image: "/img/furniture/library/vis/t3-scaled.webp" }
  ];


  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openModal = (index: number) => setCurrentIndex(index);
  const closeModal = () => setCurrentIndex(null);
  const prevImage = () => setCurrentIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null));
  const nextImage = () => setCurrentIndex((i) => (i !== null ? (i + 1) % images.length : null));


  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="/img/furniture/BBB-2.webp"
          alt={t("hero.title")}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-32 left-0 right-0">
          <div className="container mx-auto px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wide">
                {t("hero.title")}
              </h1>
              <p className="text-lg text-white/90 font-light leading-relaxed mb-8">
                {t("hero.description")}
              </p>
              <ScrollButton
                targetId="why-furniture"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent font-light tracking-wide"
              >
                {t("hero.button").toUpperCase()}
              </ScrollButton>
            </div>
          </div>
        </div>
      </section>

      {/* Why Furniture */}
      <section id="why-furniture" className="py-32 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">
                {t("whyFurniture.title")}
              </h2>
              <div className="space-y-6 text-gray-600 font-light leading-relaxed">
                <p>{t("whyFurniture.text1")}</p>
                <p>{t("whyFurniture.text2")}</p>
              </div>
            </div>
            <div className="relative h-[60vh]">
              <Image
                src="/img/furniture/bab_optimized.webp"
                alt={t("whyFurniture.title")}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Libraries Section */}
      <section className="py-32">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-12 tracking-wider">
            {t("libraries.title")}
          </h2>
          <p className="text-gray-600 font-light max-w-3xl mx-auto leading-relaxed mb-16">
            {t("libraries.description")}
          </p>

          <div className="max-w-4xl mx-auto">
            <Carousel
              images={[
                { src: "/img/furniture/library/img_4161_2.webp", alt: t("libraries.title") },
                { src: "/img/furniture/library/img_4164_2.jpg", alt: t("libraries.title") },
                { src: "/img/furniture/library/img_4191_2.jpg", alt: t("libraries.title") },
                { src: "/img/furniture/library/img_4192_2.jpg", alt: t("libraries.title") },
                { src: "/img/furniture/library/img_4233_2.jpg", alt: t("libraries.title") },
                { src: "/img/furniture/library/img_4274_2.jpg", alt: t("libraries.title") },
                { src: "/img/furniture/library/img_4290_2.jpg", alt: t("libraries.title") },
                { src: "/img/furniture/library/img_4351_2.jpg", alt: t("libraries.title") }
              ]}
              className="aspect-[3/4] max-h-[80vh] rounded-lg shadow-lg bg-white"
              imgClassName="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Visualization */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-12 tracking-wider">
            {t("visualization.title")}
          </h2>

          <GalleryGrid
            apps={images}
            onSelect={openModal}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          />

          {currentIndex !== null && (
            <Lightbox
              apps={images}
              currentIndex={currentIndex}
              onClose={closeModal}
              onPrev={prevImage}
              onNext={nextImage}
            />
          )}
        </div>
      </section>

      {/* Showroom */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[60vh]">
              <Image
                src="/img/furniture/t5-scaled.webp"
                alt={t("showroom.title")}
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">
                {t("showroom.title")}
              </h2>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                {t("showroom.text")}
              </p>
              <Link href="/contact">
                <Button variant="outline" className="font-light tracking-wide">
                  {t("showroom.button").toUpperCase()}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-12 tracking-wider">
            {t("process.title")}
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-gray-100">
                <ClipboardList className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4">
                {t("process.steps.consulting.title")}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {t("process.steps.consulting.text")}
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-gray-100">
                <Layers className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4">
                {t("process.steps.design.title")}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {t("process.steps.design.text")}
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-gray-100">
                <Hammer className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4">
                {t("process.steps.production.title")}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {t("process.steps.production.text")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">
            {t("cta.title")}
          </h2>
          <p className="text-gray-600 font-light max-w-2xl mx-auto leading-relaxed mb-12">
            {t("cta.description")}
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact">
              <Button className="font-light tracking-wide">
                {t("cta.buttons.contact")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
