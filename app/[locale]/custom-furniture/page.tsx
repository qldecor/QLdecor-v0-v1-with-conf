import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/[locale]/components/ui/button";
import Navbar from "@/app/[locale]/components/navbar";
import { useTranslations } from "next-intl";
import { ScrollButton } from "@/app/[locale]/components/ui/scroll-button";
import type { Metadata } from "next";
import { Carousel } from "@/app/[locale]/components/carousel";
import { ClipboardList, Hammer, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Meble na wymiar – kuchnie, salony, garderoby i łazienki | QLdecor",
  description:
    "QLdecor – producent mebli na wymiar z Wrocławia. Tworzymy nowoczesne kuchnie, salony, garderoby i meble łazienkowe na wymiar. Elegancki design, perfekcyjne dopasowanie i luksusowe wykończenia.",
  alternates: {
    canonical: "/products/custom-furniture",
  },
  openGraph: {
    title: "Meble na wymiar – kuchnie, salony i garderoby | QLdecor",
    description:
      "Projektujemy i wykonujemy meble na wymiar – kuchnie, salony, garderoby i łazienki. Nowoczesny design i najwyższa jakość wykonania.",
    url: "https://qldecor.shop/products/custom-furniture",
    siteName: "QLdecor",
    images: [
      {
        url: "https://qldecor.shop/img/custom-furniture/hero-kitchen.webp",
        width: 1200,
        height: 630,
        alt: "Meble na wymiar – kuchnie i salony QLdecor"
      }
    ],
    locale: "pl_PL",
    type: "website"
  }
};

export default function CustomFurniturePage() {
  const t = useTranslations("customFurniturePage");

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/img/custom-furniture/hero-kitchen.webp"
            alt={t("hero.title")}
            fill
            className="object-cover"
            priority
          />
        </div>
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
                targetId="why-custom"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent font-light tracking-wide"
              >
                {t("hero.button")}
              </ScrollButton>
            </div>
          </div>
        </div>
      </section>

      {/* Why Custom Furniture */}
      <section id="why-custom" className="py-32 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">
                {t("whyCustom.title")}
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-light text-gray-900 mb-3 tracking-wide">
                    {t("whyCustom.points.fit.title")}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {t("whyCustom.points.fit.text")}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-light text-gray-900 mb-3 tracking-wide">
                    {t("whyCustom.points.materials.title")}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {t("whyCustom.points.materials.text")}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-light text-gray-900 mb-3 tracking-wide">
                    {t("whyCustom.points.finishing.title")}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {t("whyCustom.points.finishing.text")}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[60vh]">
              <Image
                src="/img/custom-furniture/bathroom/209.jpg"
                alt={t("whyCustom.title")}
                fill
                className="object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Kitchens */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          {/* <div className="relative h-[70vh] mb-16">
            <Image
              src="/img/custom-furniture/kitchen.webp"
              alt={t("kitchens.title")}
              fill
              className="object-cover rounded-2xl shadow-md"
            />
          </div> */}
          <div className="mb-16">
            <Carousel
              images={[
                { src: "/img/custom-furniture/kitchen/43.jpg", alt: t("kitchens.title") },
                { src: "/img/custom-furniture/kitchen/101.jpg", alt: t("kitchens.title") },
                { src: "/img/custom-furniture/kitchen/328.jpg", alt: t("kitchens.title") }
              ]}
            />
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">
              {t("kitchens.title")}
            </h2>
            <p className="text-gray-600 font-light max-w-4xl mx-auto leading-relaxed mb-12">
              {t("kitchens.description")}
            </p>
            <Button variant="outline" className="font-light tracking-wide bg-transparent">
              {t("kitchens.button")}
            </Button>
          </div>
        </div>
      </section>

      {/* Living Rooms & Wardrobes */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[60vh]">
              <Image
                src="/img/custom-furniture/living-room.webp"
                alt={t("livingRooms.title")}
                fill
                className="object-cover rounded-2xl shadow-md"
              />
            </div>
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">
                {t("livingRooms.title")}
              </h2>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                {t("livingRooms.description")}
              </p>
              <Button variant="outline" className="font-light tracking-wide bg-transparent">
                {t("livingRooms.button")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bathrooms */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">
                {t("bathrooms.title")}
              </h2>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                {t("bathrooms.description")}
              </p>
              <Button variant="outline" className="font-light tracking-wide bg-transparent">
                {t("bathrooms.button")}
              </Button>
            </div>
            <div className="relative h-[60vh] order-1 lg:order-2">
              <Image
                src="/img/custom-furniture/bathroom.webp"
                alt={t("bathrooms.title")}
                fill
                className="object-cover rounded-2xl shadow-md"
              />
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
                {t("process.steps.materials.title")}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {t("process.steps.materials.text")}
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
            <Button variant="outline" className="font-light tracking-wide bg-transparent">
              {t("cta.buttons.catalog")}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
