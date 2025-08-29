import Image from "next/image"
import Link from "next/link"
import { Button } from "@/app/[locale]/components/ui/button"
import Navbar from "@/app/[locale]/components/navbar"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ColorPro Series - Unlimited Color Furniture Boards | QLdecor",
  description:
    "ColorPro furniture boards with unlimited color possibilities and exceptional fade resistance. Bold chromatics and endless customization options.",
  canonical: "/products/furniture-boards/colorpro",
}

export default function ColorproPage() {
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
                BOLD CHROMATICS. ENDLESS CUSTOMIZATION.
              </h1>
              <p className="text-lg text-white/90 font-light leading-relaxed mb-8">
                ColorPro series unleashes unlimited color possibilities with exceptional fade resistance and UV
                stability. Create furniture that makes bold statements while maintaining vibrant appearance for years to
                come.
              </p>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent font-light tracking-wide"
              >
                EXPLORE COLORS
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
              <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">UNLIMITED EXPRESSION</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                The ColorPro series represents the ultimate in color freedom, where advanced pigment technology meets
                creative vision. With virtually unlimited color options, designers can achieve exact color matches,
                create custom palettes, or explore bold chromatic statements that define spaces.
              </p>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Our advanced UV-stable coating system ensures that colors maintain their vibrancy and depth even under
                intensive light exposure. This makes ColorPro ideal for applications where color consistency and
                longevity are critical to the design's success.
              </p>
              <p className="text-gray-600 font-light leading-relaxed">
                Perfect for retail environments, hospitality spaces, and residential applications where color plays a
                central role in creating atmosphere, brand identity, or personal expression.
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
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">COLOR PALETTE</h2>
            <p className="text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              A curated selection showcasing the range of possibilities. Custom colors available to match any
              specification.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative h-48 mb-6 bg-red-500 rounded-lg"></div>
              <h3 className="text-lg font-light text-gray-900 mb-2 tracking-wide">CRIMSON</h3>
              <p className="text-gray-600 font-light text-sm">Bold, passionate red with deep saturation</p>
            </div>

            <div className="text-center">
              <div className="relative h-48 mb-6 bg-blue-600 rounded-lg"></div>
              <h3 className="text-lg font-light text-gray-900 mb-2 tracking-wide">SAPPHIRE</h3>
              <p className="text-gray-600 font-light text-sm">Rich, royal blue with sophisticated depth</p>
            </div>

            <div className="text-center">
              <div className="relative h-48 mb-6 bg-green-500 rounded-lg"></div>
              <h3 className="text-lg font-light text-gray-900 mb-2 tracking-wide">EMERALD</h3>
              <p className="text-gray-600 font-light text-sm">Vibrant green with natural energy</p>
            </div>

            <div className="text-center">
              <div className="relative h-48 mb-6 bg-purple-600 rounded-lg"></div>
              <h3 className="text-lg font-light text-gray-900 mb-2 tracking-wide">AMETHYST</h3>
              <p className="text-gray-600 font-light text-sm">Luxurious purple with regal presence</p>
            </div>

            <div className="text-center">
              <div className="relative h-48 mb-6 bg-orange-500 rounded-lg"></div>
              <h3 className="text-lg font-light text-gray-900 mb-2 tracking-wide">TANGERINE</h3>
              <p className="text-gray-600 font-light text-sm">Energetic orange with warm vitality</p>
            </div>

            <div className="text-center">
              <div className="relative h-48 mb-6 bg-yellow-400 rounded-lg"></div>
              <h3 className="text-lg font-light text-gray-900 mb-2 tracking-wide">CITRINE</h3>
              <p className="text-gray-600 font-light text-sm">Bright yellow with sunny optimism</p>
            </div>

            <div className="text-center">
              <div className="relative h-48 mb-6 bg-pink-500 rounded-lg"></div>
              <h3 className="text-lg font-light text-gray-900 mb-2 tracking-wide">FUCHSIA</h3>
              <p className="text-gray-600 font-light text-sm">Bold pink with contemporary edge</p>
            </div>

            <div className="text-center">
              <div className="relative h-48 mb-6 bg-teal-600 rounded-lg"></div>
              <h3 className="text-lg font-light text-gray-900 mb-2 tracking-wide">TURQUOISE</h3>
              <p className="text-gray-600 font-light text-sm">Calming blue-green with oceanic depth</p>
            </div>

            <div className="text-center">
              <div className="relative h-48 mb-6 bg-gray-800 rounded-lg"></div>
              <h3 className="text-lg font-light text-gray-900 mb-2 tracking-wide">CHARCOAL</h3>
              <p className="text-gray-600 font-light text-sm">Deep, sophisticated neutral</p>
            </div>

            <div className="text-center">
              <div className="relative h-48 mb-6 bg-gray-100 rounded-lg border"></div>
              <h3 className="text-lg font-light text-gray-900 mb-2 tracking-wide">PEARL</h3>
              <p className="text-gray-600 font-light text-sm">Pure, luminous white with subtle depth</p>
            </div>

            <div className="text-center">
              <div className="relative h-48 mb-6 bg-indigo-600 rounded-lg"></div>
              <h3 className="text-lg font-light text-gray-900 mb-2 tracking-wide">MIDNIGHT</h3>
              <p className="text-gray-600 font-light text-sm">Deep indigo with mysterious allure</p>
            </div>

            <div className="text-center">
              <div className="relative h-48 mb-6 bg-rose-400 rounded-lg"></div>
              <h3 className="text-lg font-light text-gray-900 mb-2 tracking-wide">BLUSH</h3>
              <p className="text-gray-600 font-light text-sm">Soft rose with gentle warmth</p>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-600 font-light mb-6">
              These represent just a fraction of available colors. Custom color matching available for any
              specification.
            </p>
            <Button variant="outline" className="font-light tracking-wide bg-transparent">
              REQUEST CUSTOM COLOR
            </Button>
          </div>
        </div>
      </section>

      {/* Applications Gallery */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">APPLICATIONS</h2>
            <p className="text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              ColorPro boards excel in environments where color creates identity, atmosphere, and emotional connection.
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
                      COLORPRO SERIES
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
                    <td className="px-6 py-4 text-sm text-gray-600">UV-stable color coating with protective layer</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-light text-gray-900">Gloss Level</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Matte, semi-gloss, or high-gloss options</td>
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
                    <td className="px-6 py-4 text-sm text-gray-600">Matching color, contrasting, ABS, PVC</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-light text-gray-900">Maintenance</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      Standard cleaning agents, color-safe formulations
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
          <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">CONFIGURE COLORPRO</h2>
          <p className="text-gray-600 font-light max-w-2xl mx-auto leading-relaxed mb-12">
            Explore ColorPro configurations in our Material Studio or request custom color matching and samples to bring
            your color vision to life.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/studio?category=boards&series=colorpro">
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
