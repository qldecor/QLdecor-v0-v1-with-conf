import Image from "next/image";
import {Link} from '@/i18n/navigation';
import { Button } from "@/app/[locale]/components/ui/button";
import Navbar from "@/app/[locale]/components/navbar";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { ScrollButton } from "../../components/ui/scroll-button";

export const metadata: Metadata = {
  title: "Furniture Boards - Premium Engineered Surfaces | QLdecor",
  description:
    "Discover our premium furniture board collection: MetaLux metallic finishes, WoodSense natural aesthetics, and ColorPro unlimited colors. Engineered for luxury interiors.",
  canonical: "/products/boards",
};

export default function FurnitureBoardsPage() {
  const t = useTranslations("boardsPage");
  const technicalSpecificationsArr: { name: string; value: string }[] =
    t.raw("technicalSpecifications.specs");

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Navigation */}
      <Navbar />

      {/* Breadcrumbs */}
      {/* <div className="container mx-auto px-8 pt-8">
        <nav className="text-sm text-gray-500 font-light">
          <Link href="/" className="hover:text-gray-700">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-gray-700">
            Products
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{t("hero.button")}</span>
        </nav>
      </div> */}

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/img/boards/or-2007-2.webp"
            alt={t("hero.title")}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
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
                targetId="boards-series"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent font-light tracking-wide"
              >
                {t("hero.button")}
              </ScrollButton>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">
              {t("introduction.title")}
            </h2>
            <p className="text-gray-600 font-light leading-relaxed mb-8">
              {t("introduction.text1")}
            </p>
            <p className="text-gray-600 font-light leading-relaxed">
              {t("introduction.text2")}
            </p>
          </div>
        </div>
      </section>

      {/* Series Grid */}
      <section id="boards-series" className="py-32">
        <div className="container mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">
              {t("series.title")}
            </h2>
            <p className="text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              {t("series.description")}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-16">
            {/* MetaLux */}
            <div className="text-center group">
              <div className="relative h-[45vh] mb-8 overflow-hidden">
                <Image
                  src="/img/boards/metalux/MLG21001L/MLG21001L_1.webp"
                  alt={t("series.metalux.title")}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4 tracking-wider">
                {t("series.metalux.title")}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                {t("series.metalux.description")}
              </p>
              <Link href="/products/boards/metalux">
                <Button
                  variant="outline"
                  size="sm"
                  className="font-light tracking-wide bg-transparent"
                >
                  {t("series.metalux.button")}
                </Button>
              </Link>
            </div>

            {/* WoodSense */}
            <div className="text-center group">
              <div className="relative h-[45vh] mb-8 overflow-hidden">
                <Image
                  src="/img/boards/woodsense/WS090193L/WS090193L_1.webp"
                  alt={t("series.woodsense.title")}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500 group-hover:skew-y-2"
                />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4 tracking-wider">
                {t("series.woodsense.title")}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                {t("series.woodsense.description")}
              </p>
              <Link href="/products/boards/woodsense">
                <Button
                  variant="outline"
                  size="sm"
                  className="font-light tracking-wide bg-transparent"
                >
                  {t("series.woodsense.button")}
                </Button>
              </Link>
            </div>

            {/* ColorPro */}
            <div className="text-center group">
              <div className="relative h-[45vh] mb-8 overflow-hidden">
                <Image
                  src="/img/boards/colorpro/CPM14004L/CPM14004L_1.jpg"
                  alt={t("series.colorpro.title")}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4 tracking-wider">
                {t("series.colorpro.title")}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                {t("series.colorpro.description")}
              </p>
              <Link href="/products/boards/colorpro">
                <Button
                  variant="outline"
                  size="sm"
                  className="font-light tracking-wide bg-transparent"
                >
                  {t("series.colorpro.button")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">
              {t("benefits.title")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Stabilność */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <div className="relative w-8 h-8 bg-gray-400 rounded flex items-center justify-center">
                  <div className="absolute top-1 w-6 h-0.5 bg-white"></div>
                  <div className="absolute bottom-1 w-6 h-0.5 bg-white"></div>
                </div>
              </div>
              <h3 className="text-lg font-light text-gray-900 mb-3 tracking-wide">
                {t("benefits.items.stability.title")}
              </h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                {t("benefits.items.stability.text")}
              </p>
            </div>

            {/* Wykończenie */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 rounded bg-gradient-to-r from-gray-300 to-gray-600"></div>
              </div>
              <h3 className="text-lg font-light text-gray-900 mb-3 tracking-wide">
                {t("benefits.items.finish.title")}
              </h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                {t("benefits.items.finish.text")}
              </p>
            </div>

            {/* Krawędzie */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-400 rounded relative">
                  <div className="absolute inset-0 border-2 border-white rounded"></div>
                </div>
              </div>
              <h3 className="text-lg font-light text-gray-900 mb-3 tracking-wide">
                {t("benefits.items.edges.title")}
              </h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                {t("benefits.items.edges.text")}
              </p>
            </div>

            {/* Grubości */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <div className="relative w-8 h-8 flex flex-col items-center justify-center">
                  <div className="w-8 h-2 bg-gray-400 rounded mb-1"></div>
                  <div className="w-6 h-2 bg-gray-300 rounded"></div>
                </div>
              </div>
              <h3 className="text-lg font-light text-gray-900 mb-3 tracking-wide">
                {t("benefits.items.thickness.title")}
              </h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                {t("benefits.items.thickness.text")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      {/* <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-gray-900 mb-12 tracking-wider text-center">
              {t("technicalSpecifications.title")}
            </h2>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-light text-gray-900 tracking-wide">
                      {technicalSpecificationsArr[0].name}
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-light text-gray-900 tracking-wide">
                      {technicalSpecificationsArr[0].value}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {technicalSpecificationsArr.slice(1).map((row, idx) => (
                    <tr key={idx}>
                      <td className="px-6 py-4 text-sm font-light text-gray-900">
                        {row.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">
            {t("cta.title")}
          </h2>
          <p className="text-gray-600 font-light max-w-2xl mx-auto leading-relaxed mb-12">
            {t("cta.description")}
          </p>
          <div className="flex gap-4 justify-center">
            {/* <Link href="/studio?category=boards">
              <Button className="font-light tracking-wide">
                {t("cta.buttons.studio")}
              </Button>
            </Link> */}
            <Link href="/contact">
              <Button
                variant="outline"
                className="font-light tracking-wide bg-transparent"
              >
                {t("cta.buttons.contact")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
