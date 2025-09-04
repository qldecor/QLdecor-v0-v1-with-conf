import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/[locale]/components/ui/button";
import Navbar from "@/app/[locale]/components/navbar";
import type { Metadata } from "next";
import { ScrollButton } from "@/app/[locale]/components/ui/scroll-button";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "MetaLux Series - Metallic Furniture Boards | QLdecor",
  description:
    "MetaLux metallic furniture boards with futuristic sheen and architectural presence. Premium finishes including Titanium, Graphite, and Champagne.",
  canonical: "/products/furniture-boards/metalux",
};

export default function MetaluxPage() {
  const t = useTranslations("boards.metalux");

  const metaluxBoards = [
    {
      id: "MLG21001L",
      i18nKey: "MLG21001L",
      image: {
        thumb: "/img/boards/metalux/MLG21001L/MLG21001L_1.webp",
        hover: "/img/boards/metalux/MLG21001L/MLG21001L_2.webp",
      },
    },
    {
      id: "MLG22002L",
      i18nKey: "MLG22002L",
      image: {
        thumb: "/img/boards/metalux/MLG22002L/MLG22002L_1.webp",
        hover: "/img/boards/metalux/MLG22002L/MLG22002L_2.webp",
      },
    },
    {
      id: "MLG23003L",
      i18nKey: "MLG23003L",
      image: {
        thumb: "/img/boards/metalux/MLG23003L/MLG23003L_1.webp",
        hover: "/img/boards/metalux/MLG23003L/MLG23003L_2.webp",
      },
    },
    {
      id: "MLG24004L",
      i18nKey: "MLG24004L",
      image: {
        thumb: "/img/boards/metalux/MLG24004L/MLG24004L_1.webp",
        hover: "/img/boards/metalux/MLG24004L/MLG24004L_2.webp",
      },
    },
    {
      id: "MLG25005L",
      i18nKey: "MLG25005L",
      image: {
        thumb: "/img/boards/metalux/MLG25005L/MLG25005L_1.webp",
        hover: "/img/boards/metalux/MLG25005L/MLG25005L_2.webp",
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
          <span className="text-gray-900">MetaLux</span>
        </nav>
      </div> */}

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/close-up-metallic-surface-futuristic-sheen-archite.png"
            alt="MetaLux Series - Metallic Surface Detail"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-x0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-32 left-0 right-0">
          <div className="container mx-auto px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wide">
                FUTURISTIC SHEEN. ARCHITECTURAL PRESENCE.
              </h1>
              <p className="text-lg text-white/90 font-light leading-relaxed mb-8">
                MetaLux series delivers sophisticated metallic finishes that transform furniture into architectural
                statements. Advanced surface technology creates depth and luminosity while maintaining exceptional
                scratch resistance and durability.
              </p>
              <ScrollButton targetId="metalux-finishes" variant="outline" className="border-white text-white hover:bg-white hover:text-black bg-transparent font-light tracking-wide">
                VIEW FINISHES
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
              <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">METALLIC SOPHISTICATION</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                The MetaLux series represents the pinnacle of metallic surface technology, where advanced materials
                science meets contemporary design vision. Each finish captures and reflects light in unique ways,
                creating dynamic visual experiences that change throughout the day.
              </p>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Engineered for modern interiors that demand both aesthetic impact and functional performance, MetaLux
                boards offer exceptional scratch resistance and maintain their lustrous appearance even under intensive
                use.
              </p>
              <p className="text-gray-600 font-light leading-relaxed">
                Perfect for contemporary kitchens, luxury retail environments, and architectural installations where
                metallic sophistication creates the desired atmosphere of innovation and refinement.
              </p>
            </div>
            <div className="relative h-[60vh]">
              <Image src="/metallic-surface-macro-detail-reflection.png" alt="MetaLux Surface Detail" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Finishes Palette */}
      <section id="metalux-finishes" className="py-32">
        <div className="container mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">METALLIC FINISHES</h2>
            <p className="text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              A curated selection of metallic finishes, each engineered to deliver consistent quality and distinctive
              character.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {metaluxBoards.map((board) => (
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
            <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">APPLICATIONS</h2>
            <p className="text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              MetaLux boards excel in environments where metallic sophistication enhances the overall design narrative.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative h-64">
              <Image
                src="/modern-kitchen-metallic-cabinets.png"
                alt="Modern Kitchen Application"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-64">
              <Image
                src="/luxury-retail-metallic-display.png"
                alt="Retail Display Application"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-64">
              <Image
                src="/office-furniture-metallic-finish.png"
                alt="Office Furniture Application"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-64">
              <Image
                src="/architectural-wall-panels-metallic.png"
                alt="Architectural Panels Application"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-64">
              <Image
                src="/bathroom-vanity-metallic-surface.png"
                alt="Bathroom Vanity Application"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-64">
              <Image
                src="/reception-desk-metallic-finish.png"
                alt="Reception Desk Application"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-64">
              <Image
                src="/wardrobe-doors-metallic.png"
                alt="Wardrobe Doors Application"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-64">
              <Image
                src="/conference-table-metallic-surface.png"
                alt="Conference Table Application"
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
                      METALUX SERIES
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
                    <td className="px-6 py-4 text-sm text-gray-600">Advanced metallic coating with protective layer</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-light text-gray-900">Gloss Level</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Semi-gloss (40-60 GU)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-light text-gray-900">Thicknesses</td>
                    <td className="px-6 py-4 text-sm text-gray-600">16mm, 19mm, 22mm</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-light text-gray-900">Sheet Sizes</td>
                    <td className="px-6 py-4 text-sm text-gray-600">2800 x 2070mm (custom sizes available)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-light text-gray-900">Edge Options</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Matching metallic, contrasting, ABS</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-light text-gray-900">Maintenance</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      Standard cleaning agents, microfiber cloth recommended
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
          <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">CONFIGURE METALUX</h2>
          <p className="text-gray-600 font-light max-w-2xl mx-auto leading-relaxed mb-12">
            Explore MetaLux configurations in our Material Studio or request detailed specifications and samples from
            our technical specialists.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/studio?category=boards&series=metalux">
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
