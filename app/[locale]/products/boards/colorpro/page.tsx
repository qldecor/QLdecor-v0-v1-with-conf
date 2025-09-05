import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/[locale]/components/ui/button";
import Navbar from "@/app/[locale]/components/navbar";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { ScrollButton } from "@/app/[locale]/components/ui/scroll-button";

export const metadata: Metadata = {
  title: "ColorPro Series - Unlimited Color Furniture Boards | QLdecor",
  description:
    "ColorPro furniture boards with unlimited color possibilities and exceptional fade resistance. Bold chromatics and endless customization options.",
  canonical: "/products/furniture-boards/colorpro",
};

export default function ColorproPage() {
  const t = useTranslations("boards.colorpro");

  const technicalSpecificationsArr: { name: string; value: string }[] =
    t.raw("technicalSpecifications.specs");

  const colorproBoards = [
    {
      id: "CPM12002L",
      i18nKey: "CPM12002L",
      image: {
        thumb: "/img/boards/colorpro/CPM12002L/CPM12002L_1.jpg",
        hover: "/img/boards/colorpro/CPM12002L/CPM12002L_2.jpeg",
      },
    },
    {
      id: "CPG13003L",
      i18nKey: "CPG13003L",
      image: {
        thumb: "/img/boards/colorpro/CPG13003L/CPG13003L_1.jpg",
        hover: "/img/boards/colorpro/CPG13003L/CPG13003L_2.jpeg",
      },
    },
    {
      id: "CPG14004L",
      i18nKey: "CPG14004L",
      image: {
        thumb: "/img/boards/colorpro/CPG14004L/CPG14004L_1.jpg",
        hover: "/img/boards/colorpro/CPG14004L/CPG14004L_2.jpeg",
      },
    },
    {
      id: "CPM14004L",
      i18nKey: "CPM14004L",
      image: {
        thumb: "/img/boards/colorpro/CPM14004L/CPM14004L_1.jpg",
        hover: "/img/boards/colorpro/CPM14004L/CPM14004L_2.jpeg",
      },
    },
    {
      id: "CPG12002L",
      i18nKey: "CPG12002L",
      image: {
        thumb: "/img/boards/colorpro/CPG12002L/CPG12002L_1.jpg",
        hover: "/img/boards/colorpro/CPG12002L/CPG12002L_2.jpeg",
      },
    },
    {
      id: "CPG11001L",
      i18nKey: "CPG11001L",
      image: {
        thumb: "/img/boards/colorpro/CPG11001L/CPG11001L_1.jpg",
        hover: "/img/boards/colorpro/CPG11001L/CPG11001L_2.jpeg",
      },
    },
    {
      id: "CPM13003L",
      i18nKey: "CPM13003L",
      image: {
        thumb: "/img/boards/colorpro/CPM13003L/CPM13003L_1.jpeg",
        hover: "/img/boards/colorpro/CPM13003L/CPM13003L_2.jpeg",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Navigation */}
      <Navbar />

      {/* Breadcrumbs
      <div className="container mx-auto px-8 pt-8">
        <nav className="text-sm text-gray-500 font-light">
          <Link href="/" className="hover:text-gray-700">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-gray-700">
            Products
          </Link>
          <span className="mx-2">/</span>
          <Link href="/products/furniture-boards" className="hover:text-gray-700">
            Furniture Boards
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">ColorPro</span>
        </nav>
      </div> */}

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="ColorPro Series - Bold Color Composition"
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
                targetId="colorpro-finishes"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent font-light tracking-wide"
              >
                {t("hero.button")}
              </ScrollButton>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">
                {t("categoryDescription.title")}
              </h2>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                {t("categoryDescription.text1")}
              </p>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                {t("categoryDescription.text2")}
              </p>
              <p className="text-gray-600 font-light leading-relaxed">
                {t("categoryDescription.text3")}
              </p>
            </div>
            <div className="relative h-[60vh]">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="ColorPro Surface Detail"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Finishes Palette */}
      <section id="colorpro-finishes" className="py-32">
        <div className="container mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">
              {t("palette.title")}
            </h2>
            <p className="text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              {t("palette.description")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {colorproBoards.map((board) => (
              <div key={board.id} className="relative text-center group">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={board.image.thumb}
                    alt={t(`${board.i18nKey}.title`)}
                    fill
                    className="object-contain rounded-lg transition-opacity duration-500 group-hover:opacity-0"
                    sizes="(max-width: 768px) 100vw,
                           (max-width: 1200px) 50vw,
                           33vw"
                  />
                  <Image
                    src={board.image.hover}
                    alt={t(`${board.i18nKey}.title`)}
                    fill
                    className="object-contain rounded-lg absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    sizes="(max-width: 768px) 100vw,
                           (max-width: 1200px) 50vw,
                           33vw"
                  />
                </div>
                <h3 className="text-lg font-light text-gray-900 mb-2 tracking-wide">
                  {t(`${board.i18nKey}.title`).toUpperCase()}
                </h3>
                <p className="text-gray-600 font-light text-sm">
                  {t(`${board.i18nKey}.description`)}
                </p>
                <p className="text-xs text-gray-400 mt-2 tracking-widest">
                  {board.id}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <p className="text-gray-600 font-light mb-6">
              {t("palette.extra")}
            </p>
            <Button
              variant="outline"
              className="font-light tracking-wide bg-transparent"
            >
              {t("palette.request")}
            </Button>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">
              {t("applications.title")}
            </h2>
            <p className="text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              {t("applications.description")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Retail Display Application"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Children's Playroom Application"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Restaurant Interior Application"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Office Reception Application"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Hotel Lobby Application"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Healthcare Wayfinding Application"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Residential Kitchen Application"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Exhibition Display Application"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-32">
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
      </section>

      {/* Configure Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">
            {t("configure.title")}
          </h2>
          <p className="text-gray-600 font-light max-w-2xl mx-auto leading-relaxed mb-12">
            {t("configure.description")}
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/studio?category=boards&series=colorpro">
              <Button className="font-light tracking-wide">
                {t("configure.buttons.studio")}
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="font-light tracking-wide bg-transparent"
              >
                {t("configure.buttons.quote")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
