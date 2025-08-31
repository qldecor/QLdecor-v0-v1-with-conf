import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/[locale]/components/ui/button";
import Navbar from "@/app/[locale]/components/navbar";
import { ScrollButton } from "@/app/[locale]/components/ui/scroll-button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WoodSense Series - Natural Wood Furniture Boards | QLdecor",
  description:
    "WoodSense natural wood furniture boards with authentic grain and engineered durability. Available in Light Oak, Walnut, Smoked, and more finishes.",
  canonical: "/products/furniture-boards/woodsense",
}

export default function WoodsensePage() {
  const woodsenseBoards = [
    {
      id: "WS0001Z2M",
      title: "NATURAL OAK",
      description: "Classic oak tones with timeless grain character",
      image: {
        thumb: "/img/boards/woodsense/WS0001Z2M/WS0001Z2M_1.webp",
        hover: "/img/boards/woodsense/WS0001Z2M/WS0001Z2M_2.webp",
      },
    },
    {
      id: "WS0074Z2M",
      title: "WALNUT",
      description: "Rich, chocolate-toned walnut with distinctive grain",
      image: {
        thumb: "/img/boards/woodsense/WS0074Z2M/WS0074Z2M_1.webp",
        hover: "/img/boards/woodsense/WS0074Z2M/WS0074Z2M_2.webp",
      },
    },
    {
      id: "WS090211L",
      title: "SMOKED OAK",
      description: "Dramatic oak surface with deep smoky undertones",
      image: {
        thumb: "/img/boards/woodsense/WS090211L/WS090211L_1.webp",
        hover: "/img/boards/woodsense/WS090211L/WS090211L_2.webp",
      },
    },
    {
      id: "WS004801M",
      title: "CHERRY",
      description: "Warm reddish hues with smooth, even texture",
      image: {
        thumb: "/img/boards/woodsense/WS004801M/WS004801M_1.webp",
        hover: "/img/boards/woodsense/WS004801M/WS004801M_2.webp",
      },
    },
    {
      id: "WS0001Z1M",
      title: "LIGHT OAK",
      description: "Bright, contemporary oak with subtle grain definition",
      image: {
        thumb: "/img/boards/woodsense/WS0001Z1M/WS0001Z1M_1.webp",
        hover: "/img/boards/woodsense/WS0001Z1M/WS0001Z1M_2.webp",
      },
    },
    {
      id: "WS005801M",
      title: "TEAK",
      description: "Exotic teak with golden undertones and natural oils",
      image: {
        thumb: "/img/boards/woodsense/WS005801M/WS005801M_1.webp",
        hover: "/img/boards/woodsense/WS005801M/WS005801M_2.webp",
      },
    },
    {
      id: "WS090053L",
      title: "DARK OAK",
      description: "Refined, deep oak finish with bold presence",
      image: {
        thumb: "/img/boards/woodsense/WS090053L/WS090053L_1.webp",
        hover: "/img/boards/woodsense/WS090053L/WS090053L_2.webp",
      },
    },
    {
      id: "WS0065Z1M",
      title: "HONEY MAPLE",
      description: "Soft golden tones with smooth flowing grain",
      image: {
        thumb: "/img/boards/woodsense/WS0065Z1M/WS0065Z1M_1.webp",
        hover: "/img/boards/woodsense/WS0065Z1M/WS0065Z1M_2.webp",
      },
    },
    {
      id: "WS0024Z2M",
      title: "ASH GREY",
      description: "Modern ash-inspired surface with cool neutral hues",
      image: {
        thumb: "/img/boards/woodsense/WS0024Z2M/WS0024Z2M_1.webp",
        hover: "/img/boards/woodsense/WS0024Z2M/WS0024Z2M_2.webp",
      },
    },
    {
      id: "WS090164L",
      title: "URBAN WALNUT",
      description: "Contemporary walnut finish with subdued richness",
      image: {
        thumb: "/img/boards/woodsense/WS090164L/WS090164L_1.webp",
        hover: "/img/boards/woodsense/WS090164L/WS090164L_2.webp",
      },
    },
    {
      id: "WS001701M",
      title: "GOLDEN OAK",
      description: "Lustrous oak with warm golden highlights",
      image: {
        thumb: "/img/boards/woodsense/WS001701M/WS001701M_1.webp",
        hover: "/img/boards/woodsense/WS001701M/WS001701M_2.webp",
      },
    },
    {
      id: "WS0068Z3M",
      title: "MIDNIGHT ASH",
      description: "Deep ash tones with refined, contemporary appeal",
      image: {
        thumb: "/img/boards/woodsense/WS0068Z3M/WS0068Z3M_1.webp",
        hover: "/img/boards/woodsense/WS0068Z3M/WS0068Z3M_2.webp",
      },
    },
    {
      id: "WS090193L",
      title: "RUSTIC PINE",
      description: "Natural pine-inspired surface with rustic charm",
      image: {
        thumb: "/img/boards/woodsense/WS090193L/WS090193L_1.webp",
        hover: "/img/boards/woodsense/WS090193L/WS090193L_2.webp",
      },
    },
    {
      id: "WS000502M",
      title: "AGED OAK",
      description: "Weathered oak tones with subtle patina effect",
      image: {
        thumb: "/img/boards/woodsense/WS000502M/WS000502M_1.webp",
        hover: "/img/boards/woodsense/WS000502M/WS000502M_2.webp",
      },
    },
    {
      id: "WS005001M",
      title: "SILVER BIRCH",
      description: "Soft pale tones with delicate linear grain",
      image: {
        thumb: "/img/boards/woodsense/WS005001M/WS005001M_1.webp",
        hover: "/img/boards/woodsense/WS005001M/WS005001M_2.webp",
      },
    },
    {
      id: "WS000101M",
      title: "WHITE MAPLE",
      description: "Clean and contemporary with fine, subtle texture",
      image: {
        thumb: "/img/boards/woodsense/WS000101M/WS000101M_1.webp",
        hover: "/img/boards/woodsense/WS000101M/WS000101M_2.webp",
      },
    },
    {
      id: "WS0068Z1M",
      title: "ANTIQUE WALNUT",
      description: "Dark walnut with rich vintage depth",
      image: {
        thumb: "/img/boards/woodsense/WS0068Z1M/WS0068Z1M_1.webp",
        hover: "/img/boards/woodsense/WS0068Z1M/WS0068Z1M_2.webp",
      },
    },
    {
      id: "WS004501M",
      title: "AMBER OAK",
      description: "Warm amber tones that highlight natural variation",
      image: {
        thumb: "/img/boards/woodsense/WS004501M/WS004501M_1.webp",
        hover: "/img/boards/woodsense/WS004501M/WS004501M_2.webp",
      },
    },
    {
      id: "WS090121L",
      title: "CHARCOAL ASH",
      description: "Bold, dark finish with a modern industrial edge",
      image: {
        thumb: "/img/boards/woodsense/WS090121L/WS090121L_1.webp",
        hover: "/img/boards/woodsense/WS090121L/WS090121L_2.webp",
      },
    },
    {
      id: "WS090182L",
      title: "NATURAL BEECH",
      description: "Soft honeyed tones with smooth flowing grain",
      image: {
        thumb: "/img/boards/woodsense/WS090182L/WS090182L_1.webp",
        hover: "/img/boards/woodsense/WS090182L/WS090182L_2.webp",
      },
    },
    {
      id: "WS0008Z1M",
      title: "COFFEE OAK",
      description: "Deep espresso oak with subtle linear definition",
      image: {
        thumb: "/img/boards/woodsense/WS0008Z1M/WS0008Z1M_1.webp",
        hover: "/img/boards/woodsense/WS0008Z1M/WS0008Z1M_2.webp",
      },
    },
    {
      id: "WS0066Z1M",
      title: "SAND MAPLE",
      description: "Light beige maple with refined minimal grain",
      image: {
        thumb: "/img/boards/woodsense/WS0066Z1M/WS0066Z1M_1.webp",
        hover: "/img/boards/woodsense/WS0066Z1M/WS0066Z1M_2.webp",
      },
    },
    {
      id: "WS0024Z3M",
      title: "ASH BROWN",
      description: "Neutral mid-brown ash with balanced appearance",
      image: {
        thumb: "/img/boards/woodsense/WS0024Z3M/WS0024Z3M_1.webp",
        hover: "/img/boards/woodsense/WS0024Z3M/WS0024Z3M_2.webp",
      },
    },
    {
      id: "WS090074L",
      title: "COPPER OAK",
      description: "Warm metallic undertone with glowing highlights",
      image: {
        thumb: "/img/boards/woodsense/WS090074L/WS090074L_1.webp",
        hover: "/img/boards/woodsense/WS090074L/WS090074L_2.webp",
      },
    },
    {
      id: "WS090012L",
      title: "EBONY WOOD",
      description: "Deep blackened surface with subtle matte finish",
      image: {
        thumb: "/img/boards/woodsense/WS090012L/WS090012L_1.webp",
        hover: "/img/boards/woodsense/WS090012L/WS090012L_2.webp",
      },
    },
    {
      id: "WS0003Z2M",
      title: "GRAINED WALNUT",
      description: "Distinct walnut structure with pronounced veins",
      image: {
        thumb: "/img/boards/woodsense/WS0003Z2M/WS0003Z2M_1.webp",
        hover: "/img/boards/woodsense/WS0003Z2M/WS0003Z2M_2.webp",
      },
    },
    {
      id: "WS0073Z1M",
      title: "PEARL OAK",
      description: "Soft pearl-grey finish with subtle oak character",
      image: {
        thumb: "/img/boards/woodsense/WS0073Z1M/WS0073Z1M_1.webp",
        hover: "/img/boards/woodsense/WS0073Z1M/WS0073Z1M_2.webp",
      },
    },
    {
      id: "WS0021Z3M",
      title: "DEEP MAHOGANY",
      description: "Luxurious red-brown surface with timeless appeal",
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
                WARMTH OF WOOD. ENGINEERED DURABILITY.
              </h1>
              <p className="text-lg text-white/90 font-light leading-relaxed mb-8">
                WoodSense series captures the authentic beauty of natural wood while delivering the consistency and
                performance of advanced engineered materials. Experience the tactile warmth and visual richness of
                premium timber without compromise.
              </p>
              <ScrollButton targetId="woodsense-finishes" variant="outline" className="border-white text-white hover:bg-white hover:text-black bg-transparent font-light tracking-wide">
                EXPLORE WOOD FINISHES
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
              <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">NATURAL AUTHENTICITY</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                The WoodSense series represents our commitment to capturing the essence of natural wood through advanced
                surface technology. Each finish is meticulously crafted to reproduce the subtle variations, grain
                patterns, and tactile qualities that make wood such a beloved material.
              </p>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Unlike natural wood, WoodSense boards offer superior dimensional stability, consistent quality, and
                resistance to moisture and temperature fluctuations. This makes them ideal for applications where the
                beauty of wood is desired but environmental challenges exist.
              </p>
              <p className="text-gray-600 font-light leading-relaxed">
                Perfect for residential kitchens, hospitality environments, and commercial spaces where the warmth and
                comfort of natural wood enhance the human experience while maintaining practical performance.
              </p>
            </div>
            <div className="relative h-[60vh]">
              <Image
                src="/placeholder.svg?height=600&width=800"
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
            <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">WOOD FINISHES</h2>
            <p className="text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              A carefully curated selection of wood finishes, each capturing the unique character of premium timber
              species.
            </p>
          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {woodsenseBoards.map((board) => (
              <div key={board.id} className="relative text-center group">
                <div className="relative aspect-[3/4] mb-6">
                  <Image
                    src={board.image.thumb}
                    alt={board.title}
                    fill
                    className="object-contain rounded-lg transition-opacity duration-500 group-hover:opacity-0"
                    sizes="(max-width: 768px) 100vw,
             (max-width: 1200px) 50vw,
             33vw"
                  />
                  <Image
                    src={board.image.hover}
                    alt={board.title}
                    fill
                    className="object-contain rounded-lg absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    sizes="(max-width: 768px) 100vw,
             (max-width: 1200px) 50vw,
             33vw"
                  />
                </div>
                <h3 className="text-lg font-light text-gray-900 mb-2 tracking-wide">{board.title}</h3>
                <p className="text-gray-600 font-light text-sm">{board.description}</p>
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
