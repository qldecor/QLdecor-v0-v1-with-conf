import Image from "next/image";
import { Link } from '@/i18n/navigation';
import Navbar from "@/app/[locale]/components/navbar";
import { ScrollButton } from "@/app/[locale]/components/ui/scroll-button";
import { Button } from "@/app/[locale]/components/ui/button";
import { ClipboardList, Hammer, Layers, Shield, Droplets, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import type { Metadata } from "next";

import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;

  if (locale === "en") {
    return {
      title: "Stainless Steel Countertops – Style, Durability & Modern Design | QLdecor",
      description:
        "QLdecor stainless steel countertops are a symbol of durability, hygiene and modern aesthetics. Available in various patterns and thicknesses, ideal for kitchens and commercial interiors.",
      keywords: [
        "QLdecor",
        "steel countertops",
        "stainless steel kitchen tops",
        "stainless steel island",
        "modern kitchen surfaces",
        "durable countertops"
      ],
      alternates: {
        canonical: "/en/products/steel-tables",
        languages: {
          "pl-PL": "/pl/products/steel-tables",
          "en-US": "/en/products/steel-tables",
        },
      },
      openGraph: {
        title: "Stainless Steel Countertops – Modern Surfaces by QLdecor",
        description:
          "Explore QLdecor’s stainless steel countertops: stylish, hygienic and durable. Perfect for kitchens and commercial projects.",
        url: "https://qldecor.shop/en/products/steel-tables",
        siteName: "QLdecor",
        locale: "en_US",
        type: "website",
        images: [
          {
            url: "https://qldecor.shop/img/steel-tables/hero.webp",
            width: 1200,
            height: 630,
            alt: "Stainless steel countertops QLdecor",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "QLdecor Stainless Steel Countertops",
        description:
          "Durable, hygienic and stylish stainless steel countertops by QLdecor – engineered for modern kitchens and interiors.",
        images: ["https://qldecor.shop/img/steel-tables/hero.webp"],
      },
    };
  }

  // 🇵🇱 Domyślnie PL
  return {
    title: "Blaty stalowe – styl, trwałość i nowoczesność | QLdecor",
    description:
      "Blaty stalowe QLdecor to synonim solidności, higieny i nowoczesnego designu. Dostępne w wielu strukturach i grubościach, idealne do kuchni i przestrzeni komercyjnych.",
    keywords: [
      "QLdecor",
      "blaty stalowe",
      "blaty kuchenne stalowe",
      "wyspa stalowa",
      "nowoczesne wnętrza",
      "trwałe blaty"
    ],
    alternates: {
      canonical: "/pl/products/steel-tables",
      languages: {
        "pl-PL": "/pl/products/steel-tables",
        "en-US": "/en/products/steel-tables",
      },
    },
    openGraph: {
      title: "Blaty stalowe – nowoczesne powierzchnie QLdecor",
      description:
        "Blaty stalowe QLdecor łączą trwałość, higienę i nowoczesny wygląd. Sprawdź dostępne wzory i realizacje.",
      url: "https://qldecor.shop/pl/products/steel-tables",
      siteName: "QLdecor",
      locale: "pl_PL",
      type: "website",
      images: [
        {
          url: "https://qldecor.shop/img/steel-tables/hero.webp",
          width: 1200,
          height: 630,
          alt: "Blaty stalowe QLdecor",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "QLdecor – Blaty stalowe",
      description:
        "Blaty stalowe QLdecor – solidność, higiena i design. Idealne do kuchni i przestrzeni komercyjnych.",
      images: ["https://qldecor.shop/img/steel-tables/hero.webp"],
    },
  };
};

export default function SteelTablesPage() {
  const t = useTranslations("steelTablesPage");

  const patterns = [
    { id: "snowflake", img: "/img/steel/table/clean.webp" },
    { id: "timemark", img: "/img/steel/table/harsh.webp" },
    { id: "cross", img: "/img/steel/table/stars.webp" },
    { id: "willow", img: "/img/steel/table/waves.webp" },
    { id: "icecrack", img: "/img/steel/table/spots-scaled.webp" },
    { id: "starrain", img: "/img/steel/table/squres.webp" },
    { id: "martian", img: "/img/steel/table/harsh2-scaled.webp" },
    { id: "longbrush", img: "/img/steel/table/clean2-scaled.webp" }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section className="relative h-screen">
        <Image
          src="/img/steel/table/stal_9_res.jpeg"
          alt="Blaty stalowe QLdecor"
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
                targetId="why-steel"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent font-light tracking-wide"
              >
                {t("hero.button").toUpperCase()}
              </ScrollButton>
            </div>
          </div>
        </div>
      </section>

      {/* Why Steel */}
      <section id="why-steel" className="py-32 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">
                {t("whySteel.title")}
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <Shield className="w-6 h-6 text-gray-700" />
                  <div>
                    <h3 className="text-lg font-light text-gray-900 mb-2">
                      {t("whySteel.points.durability.title")}
                    </h3>
                    <p className="text-gray-600 font-light">{t("whySteel.points.durability.text")}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Droplets className="w-6 h-6 text-gray-700" />
                  <div>
                    <h3 className="text-lg font-light text-gray-900 mb-2">
                      {t("whySteel.points.hygiene.title")}
                    </h3>
                    <p className="text-gray-600 font-light">{t("whySteel.points.hygiene.text")}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Sparkles className="w-6 h-6 text-gray-700" />
                  <div>
                    <h3 className="text-lg font-light text-gray-900 mb-2">
                      {t("whySteel.points.design.title")}
                    </h3>
                    <p className="text-gray-600 font-light">{t("whySteel.points.design.text")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[60vh]">
              <Image
                src="/img/steel/table/stal_13.jpg"
                alt="Blaty stalowe QLdecor"
                fill
                className="object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Patterns */}
      <section className="py-32">
        <div className="container mx-auto px-2 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-16 tracking-wider">
            {t("patterns.title")}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {patterns.map((p) => (
              <div
                key={p.id}
                className="group transition-transform duration-500"
              >
                <div className="relative aspect-[4/3] mb-6 overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.id}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-xl font-light text-gray-900 tracking-wide mb-3">
                  {t(`patterns.details.${p.id}.title`)}
                </h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">
                  {t(`patterns.details.${p.id}.text`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showroom */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[60vh]">
              <Image
                src="/img/steel/table/stal-8-scaled.webp"
                alt="Wyspa stalowa QLdecor"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">
                {t("showroom.title")}
              </h2>
              <p className="text-gray-600 font-light leading-relaxed mb-6">{t("showroom.text")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="py-32">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">
            {t("video.title")}
          </h2>
          <div className="aspect-video max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/J5fnhaepO3Q"
              title="Stainless steel kitchen table top"
              allowFullScreen
              className="w-full h-full"
            />
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
          </div>
        </div>
      </section>
    </div>
  );
}
