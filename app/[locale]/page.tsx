import Image from "next/image";
import {Link} from '@/i18n/navigation';
import { Button } from "@/app/[locale]/components/ui/button";
import NavBar from "@/app/[locale]/components/navbar";
import { ChevronDown } from "lucide-react";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { ScrollButton } from "./components/ui/scroll-button";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;

  if (locale === "en") {
    return {
      title: "QLdecor – Luxury Steel Tables, Furniture, Handles & Premium Boards",
      description:
        "QLdecor creates exclusive interiors with luxury steel tables, custom furniture, designer handles, and premium furniture boards: MetaLux, WoodSense, and ColorPro. Timeless design for modern homes and offices.",
      keywords: [
        "QLdecor",
        "luxury furniture",
        "steel tables",
        "custom furniture",
        "furniture handles",
        "aluminum handles",
        "furniture boards",
        "MetaLux boards",
        "WoodSense boards",
        "ColorPro boards",
        "modern interiors",
        "premium materials"
      ],
      alternates: {
        canonical: "/en",
        languages: {
          "pl-PL": "/pl",
          "en-US": "/en",
        },
      },
      openGraph: {
        title: "QLdecor – Luxury Steel Tables, Custom Furniture & Premium Boards",
        description:
          "Discover QLdecor: exclusive steel tables, custom-made furniture, aluminum handles, and premium boards from MetaLux, WoodSense, and ColorPro.",
        url: "https://qldecor.shop/en",
        siteName: "QLdecor",
        images: [
          {
            url: "https://qldecor.shop/img/steel/table/stal_9_res.jpeg",
            width: 1920,
            height: 1080,
            alt: "QLdecor – luxury furniture and premium materials",
          },
        ],
        locale: "en_US",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "QLdecor – Luxury Steel Tables & Premium Furniture Boards",
        description:
          "Luxury interiors with QLdecor: steel tables, designer handles, custom furniture, and premium boards MetaLux, WoodSense, ColorPro.",
        images: ["https://qldecor.shop/img/steel/table/stal_9_res.jpeg"],
      },
    };
  }

  // domyślnie PL
  return {
    title: "QLdecor – Stoły stalowe, meble, uchwyty i ekskluzywne płyty meblowe",
    description:
      "QLdecor tworzy luksusowe wnętrza dzięki stołom stalowym, meblom na wymiar, designerskim uchwytom oraz płytom meblowym MetaLux, WoodSense i ColorPro. Ponadczasowy design do nowoczesnych przestrzeni.",
    keywords: [
      "QLdecor",
      "meble luksusowe",
      "stoły stalowe",
      "meble na wymiar",
      "uchwyty meblowe",
      "uchwyty aluminiowe",
      "płyty meblowe",
      "płyty MetaLux",
      "płyty WoodSense",
      "płyty ColorPro",
      "nowoczesne wnętrza",
      "materiały premium"
    ],
    alternates: {
      canonical: "/pl",
      languages: {
        "pl-PL": "/pl",
        "en-US": "/en",
      },
    },
    openGraph: {
      title: "QLdecor – Stoły stalowe, meble i luksusowe płyty meblowe",
      description:
        "QLdecor oferuje stoły stalowe, meble na wymiar, aluminiowe uchwyty oraz kolekcje płyt meblowych MetaLux, WoodSense i ColorPro.",
      url: "https://qldecor.shop/pl",
      siteName: "QLdecor",
      images: [
        {
          url: "https://qldecor.shop/img/steel/table/stal_9_res.jpeg",
          width: 1920,
          height: 1080,
          alt: "QLdecor – luksusowe stoły, meble i płyty meblowe",
        },
      ],
      locale: "pl_PL",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "QLdecor – Stoły stalowe i luksusowe meble na wymiar",
      description:
        "Ekskluzywna oferta QLdecor: stoły stalowe, uchwyty aluminiowe, meble na wymiar oraz kolekcje płyt MetaLux, WoodSense i ColorPro.",
      images: ["https://qldecor.shop/img/steel/table/stal_9_res.jpeg"],
    },
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('homePage');

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/img/steel/table/stal_9_res.jpeg?height=1080&width=1920"
            alt={t("hero.title")}
            fill
            className="object-cover brightness-70"
            priority
          />
        </div>

        {/* gradient */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-32 left-0 right-0 z-10">
          <div className="container mx-auto px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wide">
                {t("hero.title")}
              </h1>
              <p className="text-lg text-white/90 font-light leading-relaxed mb-8">
                {t("hero.description")}
              </p>
              <div className="flex gap-4">
                <ScrollButton
                  targetId="product-grid"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black bg-transparent font-light tracking-wide"
                >
                  {t("hero.discoverMore")}
                </ScrollButton>
                {/* <Link href="/configurator">
                  <Button className="bg-white text-black hover:bg-gray-100 font-light tracking-wide">
                    {t("hero.configureMaterials")}
                  </Button>
                </Link> */}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <ChevronDown className="h-6 w-6 text-white animate-bounce" />
        </div>
      </section>

      {/* News Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-2xl font-light text-gray-900 mb-8 tracking-wider">
              {t("news.title")}
            </h2>
            <p className="text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              {t("news.text")}
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section id="product-grid" className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            <div className="group cursor-pointer">
              <Link href="/products/steel-tables">
                <div className="relative aspect-square mb-6 overflow-hidden">
                  <Image
                    src="/img/steel/table/stal_9_res.jpeg?height=400&width=400"
                    alt={t("products.steelTables")}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-sm font-light tracking-wider text-gray-900 text-center">
                  {t("products.steelTables")}
                </h3>
              </Link>
            </div>

            {/* <div className="group cursor-pointer">
              <div className="relative aspect-square mb-6 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt={t("products.steelFronts")}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-sm font-light tracking-wider text-gray-900 text-center">
                {t("products.steelFronts")}
              </h3>
            </div> */}

            <div className="group cursor-pointer">
              <Link href="/products/furniture">
                <div className="relative aspect-square mb-6 overflow-hidden">
                  <Image
                    src="/img/furniture/t5-scaled.webp" // podmień na swoje główne zdjęcie mebli
                    alt={t("products.furniture")}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-sm font-light tracking-wider text-gray-900 text-center">
                  {t("products.furniture")}
                </h3>
              </Link>
            </div>

            <div className="group cursor-pointer">
              <Link href="/products/handles">
                <div className="relative aspect-square mb-6 overflow-hidden">
                  <Image
                    src="/img/handles/020_600_etsy.webp?height=400&width=400"
                    alt={t("products.handles")}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-sm font-light tracking-wider text-gray-900 text-center">
                  {t("products.handles")}
                </h3>
              </Link>
            </div>

            <div className="group cursor-pointer">
              <Link href="/products/boards/metalux">
                <div className="relative aspect-square mb-6 overflow-hidden">

                  <Image
                    src="/img/boards/metalux/MLG21001L/MLG21001L_1.webp?height=400&width=400"
                    alt={t("products.metalux")}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-sm font-light tracking-wider text-gray-900 text-center">
                  {t("products.metalux")}
                </h3>
              </Link>
            </div>

            <div className="group cursor-pointer">
              <Link href="/products/boards/woodsense">
                <div className="relative aspect-square mb-6 overflow-hidden">
                  <Image
                    src="/img/boards/woodsense/WS0003Z2M/WS0003Z2M_1.webp?height=400&width=400"
                    alt={t("products.woodsense")}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-sm font-light tracking-wider text-gray-900 text-center">
                  {t("products.woodsense")}
                </h3>
              </Link>
            </div>

            <div className="group cursor-pointer">
              <Link href="/products/boards/colorpro">
                <div className="relative aspect-square mb-6 overflow-hidden">
                  <Image
                    src="/img/boards/colorpro/CPG11001L/CPG11001L_1.jpg?height=400&width=400"
                    alt={t("products.colorpro")}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-sm font-light tracking-wider text-gray-900 text-center">
                  {t("products.colorpro")}
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Steel Fronts Collection */}
      {/* <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="relative h-[70vh] mb-16">
            <Image
              src="/modern-kitchen-metallic-cabinets.png?height=800&width=1600"
              alt={t("collections.steelFronts.title")}
              fill
              className="object-cover"
            />
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">
              {t("collections.steelFronts.title")}
            </h2>
            <p className="text-gray-600 font-light max-w-4xl mx-auto leading-relaxed mb-12">
              {t("collections.steelFronts.text")}
            </p>
            <Button variant="outline" className="font-light tracking-wide bg-transparent">
              {t("collections.steelFronts.button")}
            </Button>
          </div>
        </div>
      </section> */}

      {/* Furniture Collection */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="relative h-[70vh] mb-16">
            <Image
              src="/img/furniture/library/vis/g1-scaled.webp"
              alt={t("collections.furniture.title")}
              fill
              className="object-cover"
            />
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">
              {t("collections.furniture.title")}
            </h2>
            <p className="text-gray-600 font-light max-w-4xl mx-auto leading-relaxed mb-12">
              {t("collections.furniture.text")}
            </p>
            <Link href="/products/furniture">
              <Button variant="outline" className="font-light tracking-wide bg-transparent">
                {t("collections.furniture.button")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Metalux Series */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="relative h-[70vh] mb-16">
            <Image
              src="/img/boards/metalux/MLG22002L/MLG22002L_1.webp?height=800&width=1600"
              alt={t("collections.metalux.title")}
              fill
              className="object-contain"
            />
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">
              {t("collections.metalux.title")}
            </h2>
            <p className="text-gray-600 font-light max-w-4xl mx-auto leading-relaxed mb-12">
              {t("collections.metalux.text")}
            </p>
            <Link href="/products/boards/metalux">
              <Button variant="outline" className="cursor-pointer font-light tracking-wide bg-transparent">
                {t("collections.metalux.button")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="relative h-[70vh] mb-16">
            <Image
              src="/img/boards/woodsense/or-8042-black-scaled.webp?height=800&width=1600"
              alt={t("craftsmanship.title")}
              fill
              className="object-cover"
            />
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">
              {t("craftsmanship.title")}
            </h2>
            <p className="text-gray-600 font-light max-w-4xl mx-auto leading-relaxed mb-12">
              {t("craftsmanship.text")}
            </p>
            <Link href="/custom-furniture">
              <Button variant="outline" className="font-light tracking-wide bg-transparent">
                {t("craftsmanship.button")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-16">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="text-xl font-light tracking-wider text-gray-900 mb-8">
                {t("footer.brand")}
              </div>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                {t("footer.slogan")}
              </p>
            </div>
            <div>
              <h4 className="font-light text-gray-900 mb-6 tracking-wide">
                {t("footer.products")}
              </h4>
              <ul className="space-y-3 text-sm font-light text-gray-600">
                <li><Link href="/products/steel-tables" className="hover:text-gray-900 transition-colors">{t("footer.links.steel-tables")}</Link></li>
                <li><Link href="/products/steel-fronts" className="hover:text-gray-900 transition-colors">{t("footer.links.steel-fronts")}</Link></li>
                <li><Link href="/products/handles" className="hover:text-gray-900 transition-colors">{t("footer.links.furniture-handles")}</Link></li>
                <li><Link href="/products/boards" className="hover:text-gray-900 transition-colors">{t("footer.links.furniture-boards")}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-light text-gray-900 mb-6 tracking-wide">
                {t("footer.collections")}
              </h4>
              <ul className="space-y-3 text-sm font-light text-gray-600">
                <li><Link href="/products/boards/metalux" className="hover:text-gray-900 transition-colors">{t("footer.links.metalux")}</Link></li>
                <li><Link href="/products/boards/woodsense" className="hover:text-gray-900 transition-colors">{t("footer.links.woodsense")}</Link></li>
                <li><Link href="/products/boards/colopro" className="hover:text-gray-900 transition-colors">{t("footer.links.colorpro")}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-light text-gray-900 mb-6 tracking-wide">
                {t("footer.connect")}
              </h4>
              <ul className="space-y-3 text-sm font-light text-gray-600">
                <li><Link href="/custom-furniture" className="hover:text-gray-900 transition-colors">{t("footer.links.custom-furniture")}</Link></li>
                <li><Link href="/about" className="hover:text-gray-900 transition-colors">{(t('footer.links.about'))}</Link></li>
                <li><Link href="/contact" className="hover:text-gray-900 transition-colors">{t('footer.links.contact')}</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-100 mt-12 pt-8 text-center">
            <p className="text-gray-600 font-light text-sm">
              {t("footer.copyright")}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
