import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50">
        <div className="container mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="text-xl font-light tracking-wider text-gray-900">LUXCRAFT</div>
            <div className="hidden md:flex items-center space-x-12 text-sm font-light">
              <Link href="/products" className="text-gray-700 hover:text-gray-900 transition-colors tracking-wide">
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

      {/* Hero Section - Stainless Steel Table */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Premium Stainless Steel Table"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="absolute bottom-32 left-0 right-0">
          <div className="container mx-auto px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wide">
                STAINLESS STEEL COLLECTION
              </h1>
              <p className="text-lg text-white/90 font-light leading-relaxed mb-8">
                Uncompromising precision meets timeless elegance. Each surface crafted with meticulous attention to
                detail, delivering exceptional durability without sacrificing aesthetic refinement.
              </p>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black bg-transparent font-light tracking-wide"
                >
                  DISCOVER MORE
                </Button>
                <Link href="/configurator">
                  <Button className="bg-white text-black hover:bg-gray-100 font-light tracking-wide">
                    CONFIGURE MATERIALS
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="h-6 w-6 text-white animate-bounce" />
        </div>
      </section>

      {/* News Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-2xl font-light text-gray-900 mb-8 tracking-wider">NEWS 2024</h2>
            <p className="text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              At the forefront of material innovation, LUXCRAFT presents a new generation of premium components that
              redefine luxury furniture manufacturing, combining cutting-edge technology with artisanal craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            <div className="group cursor-pointer">
              <div className="relative aspect-square mb-6 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Steel Tables"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-sm font-light tracking-wider text-gray-900 text-center">STEEL TABLES</h3>
            </div>

            <div className="group cursor-pointer">
              <div className="relative aspect-square mb-6 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Steel Fronts"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-sm font-light tracking-wider text-gray-900 text-center">STEEL FRONTS</h3>
            </div>

            <div className="group cursor-pointer">
              <div className="relative aspect-square mb-6 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Furniture Handles"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-sm font-light tracking-wider text-gray-900 text-center">FURNITURE HANDLES</h3>
            </div>

            <div className="group cursor-pointer">
              <div className="relative aspect-square mb-6 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Metalux"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-sm font-light tracking-wider text-gray-900 text-center">METALUX</h3>
            </div>

            <div className="group cursor-pointer">
              <div className="relative aspect-square mb-6 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Woodsense"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-sm font-light tracking-wider text-gray-900 text-center">WOODSENSE</h3>
            </div>

            <div className="group cursor-pointer">
              <div className="relative aspect-square mb-6 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Colorpro"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-sm font-light tracking-wider text-gray-900 text-center">COLORPRO</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Steel Fronts Collection */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="relative h-[70vh] mb-16">
            <Image
              src="/placeholder.svg?height=800&width=1600"
              alt="Steel Fronts Collection"
              fill
              className="object-cover"
            />
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">STEEL FRONTS COLLECTION</h2>
            <p className="text-gray-600 font-light max-w-4xl mx-auto leading-relaxed mb-12">
              The Steel Fronts Collection is inspired by the finest industrial design traditions, where form and
              function unite in perfect harmony. Each surface embodies uncompromising elegance, bringing authentic steel
              character to contemporary interiors.
            </p>
            <Button variant="outline" className="font-light tracking-wide bg-transparent">
              EXPLORE COLLECTION
            </Button>
          </div>
        </div>
      </section>

      {/* Metalux Series */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="relative h-[70vh] mb-16">
            <Image src="/placeholder.svg?height=800&width=1600" alt="Metalux Series" fill className="object-cover" />
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">METALUX SERIES</h2>
            <p className="text-gray-600 font-light max-w-4xl mx-auto leading-relaxed mb-12">
              Born from a dialogue between Poliform and LUXCRAFT, the Metalux Series redefines the modern furniture
              landscape, offering one of the most sophisticated metallic finishes ever created by designers, with
              unparalleled depth and luminosity for contemporary living.
            </p>
            <Button variant="outline" className="font-light tracking-wide bg-transparent">
              DISCOVER METALUX
            </Button>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="relative h-[70vh] mb-16">
            <Image
              src="/placeholder.svg?height=800&width=1600"
              alt="Craftsmanship"
              fill
              className="object-cover grayscale"
            />
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">CRAFTSMANSHIP</h2>
            <p className="text-gray-600 font-light max-w-4xl mx-auto leading-relaxed mb-12">
              Every component is born from the perfect synthesis of traditional craftsmanship and innovative technology.
              Our artisans bring decades of expertise to each surface, ensuring that every detail meets the highest
              standards of luxury manufacturing.
            </p>
            <Button variant="outline" className="font-light tracking-wide bg-transparent">
              OUR PROCESS
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-16">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="text-xl font-light tracking-wider text-gray-900 mb-8">LUXCRAFT</div>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                Crafting excellence in furniture materials since 1999.
              </p>
            </div>
            <div>
              <h4 className="font-light text-gray-900 mb-6 tracking-wide">PRODUCTS</h4>
              <ul className="space-y-3 text-sm font-light text-gray-600">
                <li>
                  <Link href="#" className="hover:text-gray-900 transition-colors">
                    Steel Tables
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900 transition-colors">
                    Steel Fronts
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900 transition-colors">
                    Furniture Handles
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900 transition-colors">
                    Furniture Boards
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-light text-gray-900 mb-6 tracking-wide">COLLECTIONS</h4>
              <ul className="space-y-3 text-sm font-light text-gray-600">
                <li>
                  <Link href="#" className="hover:text-gray-900 transition-colors">
                    Metalux Series
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900 transition-colors">
                    Woodsense Series
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900 transition-colors">
                    Colorpro Series
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-light text-gray-900 mb-6 tracking-wide">CONNECT</h4>
              <ul className="space-y-3 text-sm font-light text-gray-600">
                <li>
                  <Link href="#" className="hover:text-gray-900 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900 transition-colors">
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-100 mt-12 pt-8 text-center">
            <p className="text-gray-600 font-light text-sm">&copy; 2024 LUXCRAFT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
