import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50">
        <div className="container mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-light tracking-wider text-gray-900">
              LUXCRAFT
            </Link>
            <div className="hidden md:flex items-center space-x-12 text-sm font-light">
              <Link href="/products" className="text-gray-900 font-medium tracking-wide">
                PRODUCTS
              </Link>
              <Link href="/collections" className="text-gray-700 hover:text-gray-900 transition-colors tracking-wide">
                COLLECTIONS
              </Link>
              <Link href="/projects" className="text-gray-700 hover:text-gray-900 transition-colors tracking-wide">
                PROJECTS
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-gray-900 transition-colors tracking-wide">
                ABOUT
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-gray-900 transition-colors tracking-wide">
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Stainless Steel Tables Hero */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/stal_14.jpeg?height=1080&width=1920"
            alt="Stainless Steel Tables"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* gradient from bottom */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-32 left-0 right-0">
          <div className="container mx-auto px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wide">STAINLESS STEEL TABLES</h1>
              <p className="text-lg text-white/90 font-light leading-relaxed mb-8">
                Engineered for perfection, crafted for eternity. Our stainless steel surfaces represent the ultimate
                fusion of industrial strength and refined aesthetics, designed to withstand the demands of professional
                use while maintaining their pristine appearance.
              </p>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent font-light tracking-wide"
              >
                SPECIFICATIONS
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Excellence */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">TECHNICAL EXCELLENCE</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-light text-gray-900 mb-3 tracking-wide">GRADE 304 STAINLESS STEEL</h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Premium austenitic stainless steel with superior corrosion resistance and exceptional durability.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-light text-gray-900 mb-3 tracking-wide">PRECISION FINISHING</h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Multiple surface treatments available: brushed, mirror polish, satin, and custom textured patterns.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-light text-gray-900 mb-3 tracking-wide">CUSTOM DIMENSIONS</h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Manufactured to exact specifications up to 3000mm length with precision edge finishing.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[60vh]">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Steel Surface Detail"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Steel Fronts */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="relative h-[70vh] mb-16">
            <Image src="/placeholder.svg?height=800&width=1600" alt="Steel Fronts" fill className="object-cover" />
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">STEEL FURNITURE FRONTS</h2>
            <p className="text-gray-600 font-light max-w-4xl mx-auto leading-relaxed mb-12">
              Authentic industrial aesthetics meet contemporary sophistication. Each steel front panel embodies the raw
              beauty of industrial materials while maintaining the refinement expected in luxury furniture applications.
            </p>
            <Button variant="outline" className="font-light tracking-wide bg-transparent">
              VIEW APPLICATIONS
            </Button>
          </div>
        </div>
      </section>

      {/* Furniture Handles */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="relative h-[70vh] mb-16">
            <Image src="/placeholder.svg?height=800&width=1600" alt="Furniture Handles" fill className="object-cover" />
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">FURNITURE HANDLES</h2>
            <p className="text-gray-600 font-light max-w-4xl mx-auto leading-relaxed mb-12">
              Contemporary handle designs that combine ergonomic excellence with aesthetic sophistication. Each handle
              is precision-engineered for durability and comfort, available in five premium finishes to complement any
              furniture design vision.
            </p>
            <Button variant="outline" className="font-light tracking-wide bg-transparent">
              EXPLORE HANDLES
            </Button>
          </div>
        </div>
      </section>

      {/* Furniture Boards Overview */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">FURNITURE BOARDS</h2>
            <p className="text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
              Four distinctive product lines, each representing a unique approach to surface design and material
              innovation, complemented by our premium furniture handles collection.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-16">
            {/* Metalux */}
            <div className="text-center">
              <div className="relative h-[50vh] mb-8">
                <Image src="/placeholder.svg?height=600&width=400" alt="Metalux Series" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4 tracking-wider">METALUX SERIES</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Advanced metallic finishes that create stunning visual depth and contemporary appeal.
              </p>
              <Button variant="outline" size="sm" className="font-light tracking-wide bg-transparent">
                DISCOVER
              </Button>
            </div>

            {/* Woodsense */}
            <div className="text-center">
              <div className="relative h-[50vh] mb-8">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Woodsense Series"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4 tracking-wider">WOODSENSE SERIES</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Authentic wood aesthetics with the durability of engineered materials.
              </p>
              <Button variant="outline" size="sm" className="font-light tracking-wide bg-transparent">
                DISCOVER
              </Button>
            </div>

            {/* Colorpro */}
            <div className="text-center">
              <div className="relative h-[50vh] mb-8">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Colorpro Series"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4 tracking-wider">COLORPRO SERIES</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Unlimited color possibilities with exceptional fade resistance and durability.
              </p>
              <Button variant="outline" size="sm" className="font-light tracking-wide bg-transparent">
                DISCOVER
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">CONFIGURE YOUR PROJECT</h2>
          <p className="text-gray-600 font-light max-w-2xl mx-auto leading-relaxed mb-12">
            Work with our specialists to create the perfect materials for your furniture designs.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/configurator">
              <Button className="font-light tracking-wide">START CONFIGURATION</Button>
            </Link>
            <Button variant="outline" className="font-light tracking-wide bg-transparent">
              VIEW CATALOG
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
