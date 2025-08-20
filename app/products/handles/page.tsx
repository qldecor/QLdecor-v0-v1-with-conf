"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { handlesMock, type Handle, type HandleFinish } from "@/data/handles-mock"

const finishColors = {
  gold: "#D4AF37",
  black: "#1A1A1A",
  silver: "#C0C0C0",
  orange: "#FF6B35",
}

const finishLabels = {
  gold: "Gold",
  black: "Black",
  silver: "Silver",
  orange: "Orange",
}

function ProductCard({ handle }: { handle: Handle }) {
  const [selectedFinish, setSelectedFinish] = useState<HandleFinish>(handle.finishes[0] as HandleFinish)
  const [selectedSize, setSelectedSize] = useState(handle.sizes[0])
  const [isHovered, setIsHovered] = useState(false)

  const currentVariant = handle.variants.find((v) => v.size === selectedSize)
  const currentImages = currentVariant?.images[selectedFinish]

  return (
    <div className="group">
      <div
        className="relative aspect-[4/3] bg-gray-50 mb-6 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {currentImages && (
          <>
            <Image
              src={currentImages.primary || "/placeholder.svg"}
              alt={`${handle.name} - ${finishLabels[selectedFinish]} - ${selectedSize}mm`}
              fill
              className={`object-cover transition-opacity duration-200 ${isHovered ? "opacity-0" : "opacity-100"}`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <Image
              src={currentImages.secondary || "/placeholder.svg"}
              alt={`${handle.name} - ${finishLabels[selectedFinish]} - ${selectedSize}mm - Detail`}
              fill
              className={`object-cover transition-opacity duration-200 ${isHovered ? "opacity-100" : "opacity-0"}`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </>
        )}
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-light text-gray-900 tracking-wide">{handle.name}</h3>
          <p className="text-sm text-gray-600 font-light mt-1">{handle.blurb}</p>
        </div>

        {/* Finish Selector */}
        <div>
          <p className="text-xs text-gray-500 font-light tracking-wide mb-2">FINISH</p>
          <div className="flex gap-2">
            {handle.finishes.map((finish) => (
              <button
                key={finish}
                onClick={() => setSelectedFinish(finish as HandleFinish)}
                className={`w-6 h-6 rounded-full border-2 transition-all duration-200 ${
                  selectedFinish === finish ? "border-gray-900 scale-110" : "border-gray-300 hover:border-gray-500"
                }`}
                style={{ backgroundColor: finishColors[finish as HandleFinish] }}
                aria-label={`Select ${finishLabels[finish as HandleFinish]} finish`}
              />
            ))}
          </div>
        </div>

        {/* Size Selector */}
        <div>
          <p className="text-xs text-gray-500 font-light tracking-wide mb-2">SIZE (MM)</p>
          <div className="flex gap-1">
            {handle.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1 text-xs font-light tracking-wide transition-all duration-200 ${
                  selectedSize === size ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function FilterBar({
  selectedFinishes,
  onFinishChange,
  selectedSizes,
  onSizeChange,
  sortBy,
  onSortChange,
}: {
  selectedFinishes: HandleFinish[]
  onFinishChange: (finishes: HandleFinish[]) => void
  selectedSizes: number[]
  onSizeChange: (sizes: number[]) => void
  sortBy: string
  onSortChange: (sort: string) => void
}) {
  const allFinishes: HandleFinish[] = ["gold", "black", "silver", "orange"]
  const allSizes = Array.from(new Set(handlesMock.flatMap((h) => h.sizes))).sort((a, b) => a - b)

  return (
    <div className="border-b border-gray-200 pb-8 mb-12">
      <div className="flex flex-wrap gap-8 items-center">
        {/* Finish Filters */}
        <div>
          <p className="text-xs text-gray-500 font-light tracking-wide mb-3">FINISH</p>
          <div className="flex gap-3">
            {allFinishes.map((finish) => (
              <button
                key={finish}
                onClick={() => {
                  if (selectedFinishes.includes(finish)) {
                    onFinishChange(selectedFinishes.filter((f) => f !== finish))
                  } else {
                    onFinishChange([...selectedFinishes, finish])
                  }
                }}
                className={`flex items-center gap-2 px-3 py-1 text-xs font-light tracking-wide transition-all duration-200 ${
                  selectedFinishes.includes(finish)
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: finishColors[finish] }} />
                {finishLabels[finish]}
              </button>
            ))}
          </div>
        </div>

        {/* Size Filters */}
        <div>
          <p className="text-xs text-gray-500 font-light tracking-wide mb-3">SIZE</p>
          <div className="flex gap-2">
            {allSizes.map((size) => (
              <button
                key={size}
                onClick={() => {
                  if (selectedSizes.includes(size)) {
                    onSizeChange(selectedSizes.filter((s) => s !== size))
                  } else {
                    onSizeChange([...selectedSizes, size])
                  }
                }}
                className={`px-3 py-1 text-xs font-light tracking-wide transition-all duration-200 ${
                  selectedSizes.includes(size)
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {size}mm
              </button>
            ))}
          </div>
        </div>

        {/* Sort */}
        <div className="ml-auto">
          <p className="text-xs text-gray-500 font-light tracking-wide mb-3">SORT BY</p>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="bg-gray-100 text-gray-700 text-xs font-light tracking-wide px-3 py-1 border-0 focus:bg-gray-200 outline-none"
          >
            <option value="featured">Featured</option>
            <option value="name-asc">Name A-Z</option>
            <option value="name-desc">Name Z-A</option>
            <option value="size-asc">Size ↑</option>
            <option value="size-desc">Size ↓</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default function HandlesPage() {
  const [selectedFinishes, setSelectedFinishes] = useState<HandleFinish[]>([])
  const [selectedSizes, setSelectedSizes] = useState<number[]>([])
  const [sortBy, setSortBy] = useState("featured")

  const filteredAndSortedHandles = useMemo(() => {
    let filtered = handlesMock

    // Apply filters
    if (selectedFinishes.length > 0) {
      filtered = filtered.filter((handle) =>
        handle.finishes.some((finish) => selectedFinishes.includes(finish as HandleFinish)),
      )
    }

    if (selectedSizes.length > 0) {
      filtered = filtered.filter((handle) => handle.sizes.some((size) => selectedSizes.includes(size)))
    }

    // Apply sorting
    switch (sortBy) {
      case "name-asc":
        return [...filtered].sort((a, b) => a.name.localeCompare(b.name))
      case "name-desc":
        return [...filtered].sort((a, b) => b.name.localeCompare(a.name))
      case "size-asc":
        return [...filtered].sort((a, b) => Math.min(...a.sizes) - Math.min(...b.sizes))
      case "size-desc":
        return [...filtered].sort((a, b) => Math.min(...b.sizes) - Math.min(...a.sizes))
      default:
        return filtered
    }
  }, [selectedFinishes, selectedSizes, sortBy])

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

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"
          style={{
            backgroundImage:
              "url(/placeholder.svg?height=1080&width=1920&query=premium+aluminum+furniture+handles+macro+photography)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-8">
          <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-8">PREMIUM FURNITURE HANDLES</h1>
          <p className="text-xl md:text-2xl font-light tracking-wide mb-12 opacity-90">
            Precision-milled. Refined finishes. Built for daily use.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="font-light tracking-wider px-8 py-4"
              onClick={() => document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" })}
            >
              EXPLORE COLLECTION
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="font-light tracking-wider px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              DOWNLOAD SPECS
            </Button>
          </div>
        </div>
      </section>

      {/* Key Selling Points */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-16">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-400 rounded"></div>
              </div>
              <h3 className="text-lg font-light text-gray-900 mb-4 tracking-wider">SOLID ALUMINUM</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                Precision-milled from solid aluminum billets for exceptional durability and feel.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-gray-400 rounded"></div>
              </div>
              <h3 className="text-lg font-light text-gray-900 mb-4 tracking-wider">REFINED FINISHES</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                Premium anodized and powder-coated finishes that resist wear and maintain their beauty.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-400 rounded flex items-center justify-center">
                  <div className="w-4 h-1 bg-white rounded"></div>
                </div>
              </div>
              <h3 className="text-lg font-light text-gray-900 mb-4 tracking-wider">MULTIPLE SIZES</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                Comprehensive range of sizes and center-to-center options for any application.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              <h3 className="text-lg font-light text-gray-900 mb-4 tracking-wider">FAST LEAD TIMES</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                In-stock inventory and efficient manufacturing for quick project turnaround.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section id="collection" className="py-32 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-8 tracking-wider">HANDLE COLLECTION</h2>
            <p className="text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
              Each handle is precision-engineered for both form and function, available in multiple finishes and sizes
              to complement any design aesthetic.
            </p>
          </div>

          <FilterBar
            selectedFinishes={selectedFinishes}
            onFinishChange={setSelectedFinishes}
            selectedSizes={selectedSizes}
            onSizeChange={setSelectedSizes}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            {filteredAndSortedHandles.map((handle) => (
              <ProductCard key={handle.id} handle={handle} />
            ))}
          </div>

          {filteredAndSortedHandles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 font-light">No handles match your current filters.</p>
              <Button
                variant="outline"
                className="mt-4 font-light tracking-wide bg-transparent"
                onClick={() => {
                  setSelectedFinishes([])
                  setSelectedSizes([])
                }}
              >
                CLEAR FILTERS
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-gray-900 mb-8 tracking-wider">TECHNICAL SPECIFICATIONS</h2>
            </div>

            <div className="bg-white border border-gray-200 overflow-hidden">
              <table className="w-full">
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-8 py-6 text-sm font-light text-gray-900 tracking-wide">MATERIAL</td>
                    <td className="px-8 py-6 text-sm font-light text-gray-600">6061-T6 Aluminum Alloy</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-8 py-6 text-sm font-light text-gray-900 tracking-wide">FINISHES</td>
                    <td className="px-8 py-6 text-sm font-light text-gray-600">
                      Anodized Gold, Matte Black, Brushed Silver, Orange Powder Coat
                    </td>
                  </tr>
                  <tr>
                    <td className="px-8 py-6 text-sm font-light text-gray-900 tracking-wide">COATING</td>
                    <td className="px-8 py-6 text-sm font-light text-gray-600">
                      Class II Anodizing (20-25 microns) / Powder Coating (60-80 microns)
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-8 py-6 text-sm font-light text-gray-900 tracking-wide">SIZES AVAILABLE</td>
                    <td className="px-8 py-6 text-sm font-light text-gray-600">30mm - 1000mm (various C-C options)</td>
                  </tr>
                  <tr>
                    <td className="px-8 py-6 text-sm font-light text-gray-900 tracking-wide">MOUNTING</td>
                    <td className="px-8 py-6 text-sm font-light text-gray-600">M4 stainless steel screws included</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-8 py-6 text-sm font-light text-gray-900 tracking-wide">CARE</td>
                    <td className="px-8 py-6 text-sm font-light text-gray-600">
                      Clean with mild soap and water, avoid abrasive cleaners
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" className="font-light tracking-wider px-8 bg-transparent">
                DOWNLOAD ALL SPECS (PDF)
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-8 tracking-wider">APPLICATIONS</h2>
            <p className="text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
              Our handles enhance both residential and commercial projects, from luxury kitchens to modern office
              environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Modern Kitchen", image: "/placeholder-c6vyi.png" },
              { title: "Executive Office", image: "/executive-office-handles.png" },
              { title: "Luxury Wardrobe", image: "/luxury-wardrobe.png" },
              { title: "Retail Display", image: "/retail-display-cabinet-handles.png" },
              { title: "Hotel Suite", image: "/hotel-suite-furniture-handles.png" },
              { title: "Conference Room", image: "/conference-room-cabinet-handles.png" },
              { title: "Residential Bath", image: "/bathroom-vanity-handles.png" },
              { title: "Commercial Space", image: "/commercial-office-storage-handles.png" },
            ].map((app, index) => (
              <div key={index} className="group">
                <div className="relative aspect-square bg-white mb-4 overflow-hidden">
                  <Image
                    src={app.image || "/placeholder.svg"}
                    alt={app.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <p className="text-sm font-light text-gray-700 tracking-wide">{app.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-light text-gray-900 mb-8 tracking-wider">NEED SAMPLES OR A QUOTE?</h2>
            <p className="text-gray-600 font-light leading-relaxed mb-12">
              Our team is ready to help you select the perfect handles for your project. Request physical samples or get
              a detailed quote for your specifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="font-light tracking-wider px-8">
                <Link href="/contact">CONTACT US</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-light tracking-wider px-8 bg-transparent">
                <Link href="/products">VIEW FULL CATALOG</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
