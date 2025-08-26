import Image from "next/image"
import Link from "next/link"
import { Button } from "@/app/[locale]/components/ui/button"

export default function AboutPage() {
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
              <Link href="/products" className="text-gray-700 hover:text-gray-900 transition-colors tracking-wide">
                PRODUCTS
              </Link>
              <Link href="/collections" className="text-gray-700 hover:text-gray-900 transition-colors tracking-wide">
                COLLECTIONS
              </Link>
              <Link href="/projects" className="text-gray-700 hover:text-gray-900 transition-colors tracking-wide">
                PROJECTS
              </Link>
              <Link href="/about" className="text-gray-900 font-medium tracking-wide">
                ABOUT
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-gray-900 transition-colors tracking-wide">
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Heritage Hero */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="LUXCRAFT Heritage"
            fill
            className="object-cover grayscale"
            priority
          />
        </div>

        <div className="absolute bottom-32 left-0 right-0">
          <div className="container mx-auto px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wide">HERITAGE & INNOVATION</h1>
              <p className="text-lg text-white/90 font-light leading-relaxed">
                Since 1999, LUXCRAFT has been at the forefront of furniture material innovation, combining traditional
                craftsmanship with cutting-edge technology to create components that define luxury furniture
                manufacturing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">OUR PHILOSOPHY</h2>
            <p className="text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
              We believe that exceptional furniture deserves exceptional materials. Every component we create embodies
              our commitment to precision, innovation, and timeless design. Our approach combines the finest materials
              with meticulous craftsmanship to deliver surfaces that not only meet but exceed the expectations of luxury
              furniture manufacturers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="relative h-[60vh]">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Manufacturing Process"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">MANUFACTURING EXCELLENCE</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-8">
                Our state-of-the-art facility combines advanced CNC machinery with traditional craftsmanship techniques.
                Every surface undergoes rigorous quality control processes, ensuring that each component meets our
                exacting standards for precision, finish quality, and durability.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-light text-gray-900 mb-2 tracking-wide">PRECISION ENGINEERING</h3>
                  <p className="text-gray-600 font-light text-sm">Tolerances within 0.1mm across all dimensions</p>
                </div>
                <div>
                  <h3 className="text-lg font-light text-gray-900 mb-2 tracking-wide">QUALITY ASSURANCE</h3>
                  <p className="text-gray-600 font-light text-sm">Multi-stage inspection process for every component</p>
                </div>
                <div>
                  <h3 className="text-lg font-light text-gray-900 mb-2 tracking-wide">SUSTAINABLE PRACTICES</h3>
                  <p className="text-gray-600 font-light text-sm">
                    Eco-friendly processes and responsible material sourcing
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">GLOBAL REACH</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-8">
                From our headquarters, we serve luxury furniture manufacturers across 40 countries, delivering
                components that meet the highest international standards. Our global network ensures consistent quality
                and reliable delivery, regardless of project scale or location.
              </p>
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-light text-gray-900 mb-2">25+</div>
                  <div className="text-sm font-light text-gray-600 tracking-wide">YEARS</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-gray-900 mb-2">500+</div>
                  <div className="text-sm font-light text-gray-600 tracking-wide">PARTNERS</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-gray-900 mb-2">40+</div>
                  <div className="text-sm font-light text-gray-600 tracking-wide">COUNTRIES</div>
                </div>
              </div>
            </div>
            <div className="relative h-[60vh]">
              <Image src="/placeholder.svg?height=600&width=800" alt="Global Presence" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">LEADERSHIP TEAM</h2>
            <p className="text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Our leadership combines decades of experience in luxury manufacturing with a vision for the future of
              furniture materials.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            <div className="text-center">
              <div className="relative h-[40vh] mb-8 grayscale">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Sarah Chen, CEO"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-light text-gray-900 mb-2 tracking-wide">SARAH CHEN</h3>
              <p className="text-sm font-light text-gray-600 tracking-wide">CHIEF EXECUTIVE OFFICER</p>
            </div>

            <div className="text-center">
              <div className="relative h-[40vh] mb-8 grayscale">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Marcus Weber, Design Director"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-light text-gray-900 mb-2 tracking-wide">MARCUS WEBER</h3>
              <p className="text-sm font-light text-gray-600 tracking-wide">DESIGN DIRECTOR</p>
            </div>

            <div className="text-center">
              <div className="relative h-[40vh] mb-8 grayscale">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Elena Rodriguez, Operations Manager"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-light text-gray-900 mb-2 tracking-wide">ELENA RODRIGUEZ</h3>
              <p className="text-sm font-light text-gray-600 tracking-wide">OPERATIONS MANAGER</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">COLLABORATE WITH US</h2>
          <p className="text-gray-600 font-light max-w-2xl mx-auto leading-relaxed mb-12">
            Discover how our expertise and premium materials can elevate your furniture designs.
          </p>
          <Button className="font-light tracking-wide">START A CONVERSATION</Button>
        </div>
      </section>
    </div>
  )
}
