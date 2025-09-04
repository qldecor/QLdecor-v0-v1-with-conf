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
          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="relative text-center">
              <div className="relative aspect-[3/4] mb-6">
                <Image
                  src="/img/boards/woodsense/WS0001Z1M.webp"
                  alt="LIGHT OAK"
                  fill
                  className="object-contain rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-lg font-light text-gray-900 mb-2 tracking-wide">LIGHT OAK</h3>
              <p className="text-gray-600 font-light text-sm">Bright, contemporary oak with subtle grain definition</p>
            </div>

            <div className="text-center">
              <div className="relative h-48 mb-6 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg"></div>
              <h3 className="text-lg font-light text-gray-900 mb-2 tracking-wide">WALNUT</h3>
              <p className="text-gray-600 font-light text-sm">Rich, chocolate-toned walnut with distinctive grain</p>
            </div>

            <div className="text-center">
              <div className="relative h-48 mb-6 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg"></div>
              <h3 className="text-lg font-light text-gray-900 mb-2 tracking-wide">SMOKED OAK</h3>
              <p className="text-gray-600 font-light text-sm">Dramatic, darkened oak with enhanced grain contrast</p>
            </div>

            <div className="text-center">
              <div className="relative h-48 mb-6 bg-gradient-to-br from-red-300 to-red-500 rounded-lg"></div>
              <h3 className="text-lg font-light text-gray-900 mb-2 tracking-wide">CHERRY</h3>
              <p className="text-gray-600 font-light text-sm">Warm, reddish cherry with smooth grain patterns</p>
            </div>

            <div className="text-center">
              <div className="relative h-48 mb-6 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-lg"></div>
              <h3 className="text-lg font-light text-gray-900 mb-2 tracking-wide">MAPLE</h3>
              <p className="text-gray-600 font-light text-sm">Clean, pale maple with fine, consistent grain</p>
            </div>

            <div className="text-center">
              <div className="relative h-48 mb-6 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg"></div>
              <h3 className="text-lg font-light text-gray-900 mb-2 tracking-wide">TEAK</h3>
              <p className="text-gray-600 font-light text-sm">Exotic teak with golden undertones and natural oils</p>
            </div>
          </div> */}
        </div>
      </section>

      {/* Applications Gallery */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">APPLICATIONS</h2>
            <p className="text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              WoodSense boards bring natural warmth to environments where comfort and authenticity are paramount.
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
              TECHNICAL SPECIFICATIONS
            </h2>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-light text-gray-900 tracking-wide">
                      SPECIFICATION
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-light text-gray-900 tracking-wide">
                      WOODSENSE SERIES
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-light text-gray-900">Core Material</td>
                    <td className="px-6 py-4 text-sm text-gray-600">High-density engineered substrate</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-light text-gray-900">Surface Finish</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      Advanced wood-grain reproduction with protective coating
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-light text-gray-900">Gloss Level</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Matte to semi-matte (5-25 GU)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-light text-gray-900">Thicknesses</td>
                    <td className="px-6 py-4 text-sm text-gray-600">12mm, 16mm, 19mm, 22mm, 25mm</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-light text-gray-900">Sheet Sizes</td>
                    <td className="px-6 py-4 text-sm text-gray-600">2800 x 2070mm (custom sizes available)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-light text-gray-900">Edge Options</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Matching wood-grain, solid wood veneer, ABS</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-light text-gray-900">Maintenance</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      Standard wood cleaners, avoid abrasive materials
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">CONFIGURE WOODSENSE</h2>
          <p className="text-gray-600 font-light max-w-2xl mx-auto leading-relaxed mb-12">
            Explore WoodSense configurations in our Material Studio or request detailed specifications and samples to
            experience the authentic wood feel firsthand.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/studio?category=boards&series=woodsense">
              <Button className="font-light tracking-wide">CONFIGURE IN MATERIAL STUDIO</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="font-light tracking-wide bg-transparent">
                REQUEST QUOTE
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
