import Image from "next/image"
import Link from "next/link"
import { Button } from "@/app/[locale]/components/ui/button"
import Navbar from "@/app/[locale]/components/navbar"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Furniture Boards - Premium Engineered Surfaces | QLdecor",
  description:
    "Discover our premium furniture board collection: MetaLux metallic finishes, WoodSense natural aesthetics, and ColorPro unlimited colors. Engineered for luxury interiors.",
  canonical: "/products/furniture-boards",
}

export default function FurnitureBoardsPage() {
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
          <span className="text-gray-900">Furniture Boards</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/premium-furniture-boards-engineered-surfaces.png"
            alt="Premium Furniture Boards"
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
                ENGINEERED BOARDS FOR PREMIUM INTERIORS
              </h1>
              <p className="text-lg text-white/90 font-light leading-relaxed mb-8">
                Three distinctive series combining advanced materials technology with exceptional aesthetic appeal. Each
                board delivers superior performance while maintaining the refined elegance expected in luxury furniture
                applications.
              </p>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent font-light tracking-wide"
              >
                EXPLORE SERIES
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">ENGINEERED EXCELLENCE</h2>
            <p className="text-gray-600 font-light leading-relaxed mb-8">
              Our furniture board collection represents the pinnacle of material engineering, where cutting-edge
              technology meets sophisticated design. Each series offers unique aesthetic possibilities while maintaining
              exceptional durability and performance standards.
            </p>
            <p className="text-gray-600 font-light leading-relaxed">
              From metallic sophistication to natural warmth and unlimited color expression, our boards provide the
              foundation for creating furniture that stands the test of time while making a lasting visual impact.
            </p>
          </div>
        </div>
      </section>

      {/* Series Grid */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">THREE DISTINCTIVE SERIES</h2>
            <p className="text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Each series represents a unique approach to surface design, offering distinct aesthetic and functional
              benefits for different design visions and applications.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-16">
            {/* MetaLux */}
            <div className="text-center group">
              <div className="relative h-[60vh] mb-8 overflow-hidden">
                <Image
                  src="/metallic-surface-futuristic-sheen-architectural.png"
                  alt="MetaLux Series - Metallic Finishes"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4 tracking-wider">METALUX SERIES</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Futuristic metallic finishes that create stunning visual depth and contemporary architectural presence.
                Perfect for modern interiors seeking sophisticated industrial aesthetics.
              </p>
              <Link href="/products/furniture-boards/metalux">
                <Button variant="outline" size="sm" className="font-light tracking-wide bg-transparent">
                  EXPLORE METALUX
                </Button>
              </Link>
            </div>

            {/* WoodSense */}
            <div className="text-center group">
              <div className="relative h-[60vh] mb-8 overflow-hidden">
                <Image
                  src="/natural-wood-grain-warm-texture-organic.png"
                  alt="WoodSense Series - Natural Wood Aesthetics"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4 tracking-wider">WOODSENSE SERIES</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Authentic wood aesthetics with engineered durability. Captures the natural warmth and tactile appeal of
                premium timber while offering superior stability and consistency.
              </p>
              <Link href="/products/furniture-boards/woodsense">
                <Button variant="outline" size="sm" className="font-light tracking-wide bg-transparent">
                  EXPLORE WOODSENSE
                </Button>
              </Link>
            </div>

            {/* ColorPro */}
            <div className="text-center group">
              <div className="relative h-[60vh] mb-8 overflow-hidden">
                <Image
                  src="/bold-colors-vibrant-chromatic-customization.png"
                  alt="ColorPro Series - Unlimited Colors"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4 tracking-wider">COLORPRO SERIES</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Unlimited color possibilities with exceptional fade resistance. Bold chromatics and endless
                customization options for creating truly unique furniture pieces that make a statement.
              </p>
              <Link href="/products/furniture-boards/colorpro">
                <Button variant="outline" size="sm" className="font-light tracking-wide bg-transparent">
                  EXPLORE COLORPRO
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
            <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">KEY BENEFITS</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-400 rounded"></div>
              </div>
              <h3 className="text-lg font-light text-gray-900 mb-3 tracking-wide">DIMENSIONAL STABILITY</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                Superior resistance to warping, swelling, and dimensional changes across all environmental conditions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-400 rounded"></div>
              </div>
              <h3 className="text-lg font-light text-gray-900 mb-3 tracking-wide">PREMIUM FINISH QUALITY</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                Consistent surface quality with exceptional depth, clarity, and tactile appeal across all series.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-400 rounded"></div>
              </div>
              <h3 className="text-lg font-light text-gray-900 mb-3 tracking-wide">EDGE OPTIONS</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                Multiple edge finishing options including matching, contrasting, and specialty treatments.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-400 rounded"></div>
              </div>
              <h3 className="text-lg font-light text-gray-900 mb-3 tracking-wide">THICKNESS RANGE</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                Available in multiple thicknesses from 12mm to 25mm to suit various application requirements.
              </p>
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
                    <th className="px-6 py-4 text-left text-sm font-light text-gray-900 tracking-wide">DETAILS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-light text-gray-900">Core Material</td>
                    <td className="px-6 py-4 text-sm text-gray-600">High-density engineered substrate</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-light text-gray-900">Thickness Range</td>
                    <td className="px-6 py-4 text-sm text-gray-600">12mm, 16mm, 19mm, 22mm, 25mm</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-light text-gray-900">Standard Sheet Size</td>
                    <td className="px-6 py-4 text-sm text-gray-600">2800 x 2070mm (custom sizes available)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-light text-gray-900">Edge Options</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Matching, contrasting, ABS, PVC, veneer</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-light text-gray-900">Fire Rating</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Class B-s2,d0 (EN 13501-1)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-light text-gray-900">Formaldehyde Emission</td>
                    <td className="px-6 py-4 text-sm text-gray-600">E1 compliant (≤ 0.1 ppm)</td>
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
          <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">EXPLORE SPECIFICATIONS</h2>
          <p className="text-gray-600 font-light max-w-2xl mx-auto leading-relaxed mb-12">
            Discover detailed specifications and configuration options for each series in our Material Studio, or
            contact our specialists for personalized guidance.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/studio?category=boards">
              <Button className="font-light tracking-wide">OPEN MATERIAL STUDIO</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="font-light tracking-wide bg-transparent">
                CONTACT SPECIALISTS
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
