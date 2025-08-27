import Image from "next/image"
import Link from "next/link"
import { Button } from "@/app/[locale]/components/ui/button"
import Navbar from "@/app/[locale]/components/navbar"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "WoodSense Series - Natural Wood Furniture Boards | QLdecor",
  description:
    "WoodSense natural wood furniture boards with authentic grain and engineered durability. Available in Light Oak, Walnut, Smoked, and more finishes.",
  canonical: "/products/furniture-boards/woodsense",
}

export default function WoodsensePage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Navigation */}
      <Navbar />

      {/* Breadcrumbs */}
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
      </div>

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
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent font-light tracking-wide"
              >
                VIEW WOOD FINISHES
              </Button>
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
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">WOOD FINISHES</h2>
            <p className="text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              A carefully curated selection of wood finishes, each capturing the unique character of premium timber
              species.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="relative h-48 mb-6 bg-gradient-to-br from-yellow-100 to-yellow-300 rounded-lg"></div>
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
          </div>
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
