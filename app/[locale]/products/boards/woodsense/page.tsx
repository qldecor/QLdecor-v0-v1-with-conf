import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/[locale]/components/ui/button";
import Navbar from "@/app/[locale]/components/navbar";
import { ScrollButton } from "@/app/[locale]/components/ui/scroll-button";
import { useTranslations } from "next-intl";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WoodSense Series - Natural Wood Furniture Boards | QLdecor",
  description:
    "WoodSense natural wood furniture boards with authentic grain and engineered durability. Available in Light Oak, Walnut, Smoked, and more finishes.",
  canonical: "/products/boards/woodsense",
}

export default function WoodsensePage() {
  const t = useTranslations("boards.woodsense");

  const coreTypes = t.raw("seriesInfo.coreTypes") as {
    id: string;
    name: string;
    example: string;
  }[];

  const technicalSpecificationsArr: { name: string; value: string }[] = t.raw("technicalSpecifications.specs");


  const woodsenseBoards = [
    {
      id: "WS0001Z2M",
      i18nKey: "WS0001Z2M",
      image: {
        thumb: "/img/boards/woodsense/WS0001Z2M/WS0001Z2M_1.webp",
        hover: "/img/boards/woodsense/WS0001Z2M/WS0001Z2M_2.webp",
      },
    },
    {
      id: "WS0074Z2M",
      i18nKey: "WS0074Z2M",
      image: {
        thumb: "/img/boards/woodsense/WS0074Z2M/WS0074Z2M_1.webp",
        hover: "/img/boards/woodsense/WS0074Z2M/WS0074Z2M_2.webp",
      },
    },
    {
      id: "WS090211L",
      i18nKey: "WS090211L",
      image: {
        thumb: "/img/boards/woodsense/WS090211L/WS090211L_1.webp",
        hover: "/img/boards/woodsense/WS090211L/WS090211L_2.webp",
      },
    },
    {
      id: "WS004801M",
      i18nKey: "WS004801M",
      image: {
        thumb: "/img/boards/woodsense/WS004801M/WS004801M_1.webp",
        hover: "/img/boards/woodsense/WS004801M/WS004801M_2.webp",
      },
    },
    {
      id: "WS0001Z1M",
      i18nKey: "WS0001Z1M",
      image: {
        thumb: "/img/boards/woodsense/WS0001Z1M/WS0001Z1M_1.webp",
        hover: "/img/boards/woodsense/WS0001Z1M/WS0001Z1M_2.webp",
      },
    },
    {
      id: "WS005801M",
      i18nKey: "WS005801M",
      image: {
        thumb: "/img/boards/woodsense/WS005801M/WS005801M_1.webp",
        hover: "/img/boards/woodsense/WS005801M/WS005801M_2.webp",
      },
    },
    {
      id: "WS090053L",
      i18nKey: "WS090053L",
      image: {
        thumb: "/img/boards/woodsense/WS090053L/WS090053L_1.webp",
        hover: "/img/boards/woodsense/WS090053L/WS090053L_2.webp",
      },
    },
    {
      id: "WS0065Z1M",
      i18nKey: "WS0065Z1M",
      image: {
        thumb: "/img/boards/woodsense/WS0065Z1M/WS0065Z1M_1.webp",
        hover: "/img/boards/woodsense/WS0065Z1M/WS0065Z1M_2.webp",
      },
    },
    {
      id: "WS0024Z2M",
      i18nKey: "WS0024Z2M",
      image: {
        thumb: "/img/boards/woodsense/WS0024Z2M/WS0024Z2M_1.webp",
        hover: "/img/boards/woodsense/WS0024Z2M/WS0024Z2M_2.webp",
      },
    },
    {
      id: "WS090164L",
      i18nKey: "WS090164L",
      image: {
        thumb: "/img/boards/woodsense/WS090164L/WS090164L_1.webp",
        hover: "/img/boards/woodsense/WS090164L/WS090164L_2.webp",
      },
    },
    {
      id: "WS001701M",
      i18nKey: "WS001701M",
      image: {
        thumb: "/img/boards/woodsense/WS001701M/WS001701M_1.webp",
        hover: "/img/boards/woodsense/WS001701M/WS001701M_2.webp",
      },
    },
    {
      id: "WS0068Z3M",
      i18nKey: "WS0068Z3M",
      image: {
        thumb: "/img/boards/woodsense/WS0068Z3M/WS0068Z3M_1.webp",
        hover: "/img/boards/woodsense/WS0068Z3M/WS0068Z3M_2.webp",
      },
    },
    {
      id: "WS090193L",
      i18nKey: "WS090193L",
      image: {
        thumb: "/img/boards/woodsense/WS090193L/WS090193L_1.webp",
        hover: "/img/boards/woodsense/WS090193L/WS090193L_2.webp",
      },
    },
    {
      id: "WS000502M",
      i18nKey: "WS000502M",
      image: {
        thumb: "/img/boards/woodsense/WS000502M/WS000502M_1.webp",
        hover: "/img/boards/woodsense/WS000502M/WS000502M_2.webp",
      },
    },
    {
      id: "WS005001M",
      i18nKey: "WS005001M",
      image: {
        thumb: "/img/boards/woodsense/WS005001M/WS005001M_1.webp",
        hover: "/img/boards/woodsense/WS005001M/WS005001M_2.webp",
      },
    },
    {
      id: "WS000101M",
      i18nKey: "WS000101M",
      image: {
        thumb: "/img/boards/woodsense/WS000101M/WS000101M_1.webp",
        hover: "/img/boards/woodsense/WS000101M/WS000101M_2.webp",
      },
    },
    {
      id: "WS0068Z1M",
      i18nKey: "WS0068Z1M",
      image: {
        thumb: "/img/boards/woodsense/WS0068Z1M/WS0068Z1M_1.webp",
        hover: "/img/boards/woodsense/WS0068Z1M/WS0068Z1M_2.webp",
      },
    },
    {
      id: "WS004501M",
      i18nKey: "WS004501M",
      image: {
        thumb: "/img/boards/woodsense/WS004501M/WS004501M_1.webp",
        hover: "/img/boards/woodsense/WS004501M/WS004501M_2.webp",
      },
    },
    {
      id: "WS090121L",
      i18nKey: "WS090121L",
      image: {
        thumb: "/img/boards/woodsense/WS090121L/WS090121L_1.webp",
        hover: "/img/boards/woodsense/WS090121L/WS090121L_2.webp",
      },
    },
    {
      id: "WS090182L",
      i18nKey: "WS090182L",
      image: {
        thumb: "/img/boards/woodsense/WS090182L/WS090182L_1.webp",
        hover: "/img/boards/woodsense/WS090182L/WS090182L_2.webp",
      },
    },
    {
      id: "WS0008Z1M",
      i18nKey: "WS0008Z1M",
      image: {
        thumb: "/img/boards/woodsense/WS0008Z1M/WS0008Z1M_1.webp",
        hover: "/img/boards/woodsense/WS0008Z1M/WS0008Z1M_2.webp",
      },
    },
    {
      id: "WS0066Z1M",
      i18nKey: "WS0066Z1M",
      image: {
        thumb: "/img/boards/woodsense/WS0066Z1M/WS0066Z1M_1.webp",
        hover: "/img/boards/woodsense/WS0066Z1M/WS0066Z1M_2.webp",
      },
    },
    {
      id: "WS0024Z3M",
      i18nKey: "WS0024Z3M",
      image: {
        thumb: "/img/boards/woodsense/WS0024Z3M/WS0024Z3M_1.webp",
        hover: "/img/boards/woodsense/WS0024Z3M/WS0024Z3M_2.webp",
      },
    },
    {
      id: "WS090074L",
      i18nKey: "WS090074L",
      image: {
        thumb: "/img/boards/woodsense/WS090074L/WS090074L_1.webp",
        hover: "/img/boards/woodsense/WS090074L/WS090074L_2.webp",
      },
    },
    {
      id: "WS090012L",
      i18nKey: "WS090012L",
      image: {
        thumb: "/img/boards/woodsense/WS090012L/WS090012L_1.webp",
        hover: "/img/boards/woodsense/WS090012L/WS090012L_2.webp",
      },
    },
    {
      id: "WS0003Z2M",
      i18nKey: "WS0003Z2M",
      image: {
        thumb: "/img/boards/woodsense/WS0003Z2M/WS0003Z2M_1.webp",
        hover: "/img/boards/woodsense/WS0003Z2M/WS0003Z2M_2.webp",
      },
    },
    {
      id: "WS0073Z1M",
      i18nKey: "WS0073Z1M",
      image: {
        thumb: "/img/boards/woodsense/WS0073Z1M/WS0073Z1M_1.webp",
        hover: "/img/boards/woodsense/WS0073Z1M/WS0073Z1M_2.webp",
      },
    },
    {
      id: "WS0021Z3M",
      i18nKey: "WS0021Z3M",
      image: {
        thumb: "/img/boards/woodsense/WS0021Z3M/WS0021Z3M_1.webp",
        hover: "/img/boards/woodsense/WS0021Z3M/WS0021Z3M_2.webp",
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
          <span className="text-gray-900">WoodSense</span>
        </nav>
      </div> */}

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/warm-wood-like-texture-natural-grain-organic.png"
            alt="WoodSense Series - Natural Wood Texture"
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
                {t('hero.title')}
              </h1>
              <p className="text-lg text-white/90 font-light leading-relaxed mb-8">
                {t('hero.description')}
              </p>
              <ScrollButton targetId="woodsense-finishes" variant="outline" className="border-white text-white hover:bg-white hover:text-black bg-transparent font-light tracking-wide">
                {t('hero.button')}
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
              <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">{t('categoryDescription.title')}</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                {t('categoryDescription.text1')}
              </p>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                {t('categoryDescription.text2')}
              </p>
              <p className="text-gray-600 font-light leading-relaxed">
                {t('categoryDescription.text3')}
              </p>
            </div>
            <div className="relative h-[60vh]">
              <Image
                src="/img/boards/woodsense/drewno_3.webp?height=600&width=800"
                alt="WoodSense Surface Detail"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Series Info */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">
              {t("seriesInfo.title")}
            </h2>

            {t.raw("seriesInfo.description").map((paragraph: string, idx: number) => (
              <p
                key={idx}
                className={`text-gray-600 font-light leading-relaxed ${idx < (t.raw("seriesInfo.description") as string[]).length - 1 ? "mb-6" : ""
                  }`}
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-8 grid md:grid-cols-2 gap-6 text-left">
              {coreTypes.map((core) => (
                <div
                  key={core.id}
                  className="bg-gray-50 rounded-lg p-6 border border-gray-200"
                >
                  <h3 className="text-lg font-light text-gray-900 mb-2 tracking-wide">
                    <span className="font-bold">{core.id}</span> – {core.name}
                  </h3>
                  <p className="text-gray-600 font-light text-sm leading-relaxed">
                    {t("seriesInfo.exampleLabel")}:{" "}
                    <span className="text-gray-900">{core.example}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Finishes Palette */}
      <section className="py-32" id="woodsense-finishes">
        <div className="container mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">{t('palette.title')}</h2>
            <p className="text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              {t('palette.description')}
            </p>
          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {woodsenseBoards.map((board) => (
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
        </div>
      </section>

      {/* Applications Gallery */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">{t('applications.title')}</h2>
            <p className="text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              {t('applications.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                alt="Hotel Lobby Application"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Conference Room Application"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Bedroom Wardrobe Application"
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
                alt="Library Shelving Application"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Entertainment Center Application"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Retail Display Application"
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

      {/* Configuration Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">
            {t("configure.title")}
          </h2>
          <p className="text-gray-600 font-light max-w-2xl mx-auto leading-relaxed mb-12">
            {t("configure.description")}
          </p>
          <div className="flex gap-4 justify-center">
            {/* <Link href="/studio?category=boards&series=woodsense">
              <Button className="font-light tracking-wide">
                {t("configure.buttons.studio")}
              </Button>
            </Link> */}
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
  )
}
