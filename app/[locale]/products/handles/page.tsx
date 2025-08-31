"use client"

import { useState, useMemo, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/app/[locale]/components/ui/button"
import Navbar from "@/app/[locale]/components/navbar"
import type { HandleIndexItem, HandleFinish, HandleSide } from "@/types/handles";
import { useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";

const finishColors: Record<HandleFinish, string> = {
  gold: "#D4AF37",
  "shiny-gold": "#E6C07B",
  black: "#1A1A1A",
  silver: "#C0C0C0",
  orange: "#FF6B35",
}

const finishLabels: Record<HandleFinish, string> = {
  gold: "Gold",
  black: "Black",
  "shiny-gold": "Gold",
  silver: "Silver",
  orange: "Orange",
}

function ProductCard({ handle }: { handle: HandleIndexItem }) {
  const locale = useLocale() as keyof typeof handle.name;

  const [selectedFinish, setSelectedFinish] = useState<HandleFinish>(handle.defaultVariant.finish)
  const [selectedSize, setSelectedSize] = useState(handle.defaultVariant.size)
  const [selectedSide, setSelectedSide] = useState<HandleSide | undefined>(
    handle.defaultVariant.side || handle.sides?.[0]
  )
  const [isHovered, setIsHovered] = useState(false)

  function getVariantCovers(handle: HandleIndexItem, size: string, finish: string, side?: string) {
    const override = handle.overrides?.find(
      (o) => o.size === size && o.finish === finish && (!o.side || o.side === side)
    )

    const baseThumb = `/img/handles/${handle.id}/${finish}/${size}${side ? `/${side}` : ""}/${finish}_${size}${side ? `_${side}` : ""}_1.webp`
    const baseHover = `/img/handles/${handle.id}/${finish}/${size}${side ? `/${side}` : ""}/${finish}_${size}${side ? `_${side}` : ""}_2.webp`

    const thumb = override?.covers?.thumb || baseThumb
    const hover = override?.covers?.hover || override?.covers?.thumb || baseHover

    return { thumb, hover }
  }
  const { thumb, hover } = useMemo(
    () => getVariantCovers(handle, selectedSize, selectedFinish, selectedSide),
    [handle.id, selectedSize, selectedFinish, selectedSide]
  )

  console.log(thumb, hover)

  return (
    <div className="group">
      <div
        className="relative aspect-[4/3] bg-gray-50 mb-6 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* <Image
          src={isHovered ? hover : thumb}
          alt={`${handle.name.en} - ${selectedFinish} - ${selectedSize}mm`}
          fill
          className="object-cover transition-opacity duration-200"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        /> */}

        {/* <AnimatePresence mode="wait">
          <motion.div
            key={isHovered ? hover : thumb}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image src={isHovered ? hover : thumb} alt="" fill className="object-cover" />
          </motion.div>
        </AnimatePresence> */}

        {/* <Image src={thumb}
          alt=""
          fill
          className={`object-cover absolute transition-transform duration-700 ease-in-out ${isHovered ? "-translate-x-full" : "translate-x-0"
            }`}
        />
        <Image
          src={hover}
          alt=""
          fill
          className={`object-cover absolute transition-transform duration-700 ease-in-out ${isHovered ? "translate-x-0" : "translate-x-full"
            }`}
        /> */}

        <Image
          src={thumb}
          alt={`${handle.name.en} - ${selectedFinish} - ${selectedSize}mm`}
          fill
          className={`object-cover transition-all duration-700 ease-in-out ${isHovered ? "opacity-0 scale-105" : "opacity-100 scale-100"
            }`}
        />
        <Image
          src={hover}
          alt={`${handle.name.en} - ${selectedFinish} - ${selectedSize}mm`}
          fill
          className={`object-cover transition-all duration-700 ease-in-out ${isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
        />

      </div>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-light text-gray-900 tracking-wide">{handle.name[locale]}</h3>
          <p className="text-sm text-gray-600 font-light mt-1">{handle.blurb[locale]}</p>
        </div>
        {/* Finish Selector */}
        <div>
          <p className="text-xs text-gray-500 font-light tracking-wide mb-2">FINISH</p>
          <div className="flex gap-2">
            {handle.finishes.map((finish) => (
              <button
                key={finish}
                onClick={() => setSelectedFinish(finish)}
                className={`w-6 h-6 rounded-full border-2 transition-all duration-200 ${selectedFinish === finish
                  ? "border-gray-900 scale-110" :
                  "border-gray-300 hover:border-gray-500"
                  }`}
                style={{ backgroundColor: finishColors[finish] }}
                aria-label={`Select ${finishLabels[finish]} finish`}
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
                className={`px-3 py-1 text-xs font-light tracking-wide transition-all duration-200 ${selectedSize === size
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        {/* Side Selector */}
        {handle.sides && handle.sides.length > 0 && (
          <div>
            <p className="text-xs text-gray-500 font-light tracking-wide mb-2">SIDE</p>
            <div className="flex gap-2">
              {handle.sides.map((side) => (
                <button
                  key={side}
                  onClick={() => setSelectedSide(side)}
                  className={`px-3 py-1 text-xs font-light tracking-wide transition-all duration-200 ${selectedSide === side
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                >
                  {side.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        )}
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
  handles,
}: {
  selectedFinishes: HandleFinish[]
  onFinishChange: (finishes: HandleFinish[]) => void
  selectedSizes: string[]
  onSizeChange: (sizes: string[]) => void
  sortBy: string
  onSortChange: (sort: string) => void
  handles: HandleIndexItem[]
}) {
  const allFinishes: HandleFinish[] = ["gold", "shiny-gold", "black", "silver", "orange"] satisfies HandleFinish[]
  const allSizes = Array.from(new Set(handles.flatMap((h) => h.sizes))).sort((a, b) => Number(a) - Number(b))

  return (
    <div className="border-b border-gray-200 pb-8 mb-12">
      <div className="flex flex-wrap gap-8 items-center">
        {/* Finishes */}
        <div>
          <span className="text-xs text-gray-500 font-light tracking-wide mr-2">FINISH</span>
          {allFinishes.map((finish) => (
            <button
              key={finish}
              onClick={() =>
                selectedFinishes.includes(finish)
                  ? onFinishChange(selectedFinishes.filter((f) => f !== finish))
                  : onFinishChange([...selectedFinishes, finish])
              }
              className={`w-6 h-6 rounded-full border-2 mx-1 ${selectedFinishes.includes(finish) ? "border-gray-900 scale-110" : "border-gray-300 hover:border-gray-500"
                }`}
              style={{ backgroundColor: finishColors[finish] }}
              aria-label={`Filter by ${finishLabels[finish]}`}
            />
          ))}
        </div>
        {/* Sizes */}
        <div>
          <span className="text-xs text-gray-500 font-light tracking-wide mr-2">SIZE</span>
          {allSizes.map((size) => (
            <button
              key={size}
              onClick={() =>
                selectedSizes.includes(size)
                  ? onSizeChange(selectedSizes.filter((s) => s !== size))
                  : onSizeChange([...selectedSizes, size])
              }
              className={`px-3 py-1 text-xs font-light tracking-wide mx-1 ${selectedSizes.includes(size) ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {size}
            </button>
          ))}
        </div>
        {/* Sort */}
        <div>
          <span className="text-xs text-gray-500 font-light tracking-wide mr-2">SORT</span>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="text-xs border rounded px-2 py-1"
          >
            <option value="featured">Featured</option>
            <option value="name-asc">Name A-Z</option>
            <option value="name-desc">Name Z-A</option>
            <option value="size-asc">Smallest Size</option>
            <option value="size-desc">Largest Size</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default function HandlesPage() {
  const [handles, setHandles] = useState<HandleIndexItem[]>([])
  const [selectedFinishes, setSelectedFinishes] = useState<HandleFinish[]>([])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("featured")

  useEffect(() => {
    fetch("/api/handles")
      .then((res) => res.json())
      .then((data) => setHandles(data.items))
  }, [])

  const filteredAndSortedHandles = useMemo(() => {
    let filtered = handles

    if (selectedFinishes.length > 0) {
      filtered = filtered.filter((handle) =>
        handle.finishes.some((finish) => selectedFinishes.includes(finish as HandleFinish))
      )
    }

    if (selectedSizes.length > 0) {
      filtered = filtered.filter((handle) =>
        handle.sizes.some((size) => selectedSizes.includes(size))
      )
    }

    switch (sortBy) {
      case "name-asc":
        return [...filtered].sort((a, b) => a.name.en.localeCompare(b.name.en))
      case "name-desc":
        return [...filtered].sort((a, b) => b.name.en.localeCompare(a.name.en))
      case "size-asc":
        return [...filtered].sort(
          (a, b) => Math.min(...a.sizes.map(Number)) - Math.min(...b.sizes.map(Number))
        )
      case "size-desc":
        return [...filtered].sort(
          (a, b) => Math.max(...b.sizes.map(Number)) - Math.max(...a.sizes.map(Number))
        )
      default:
        return filtered
    }
  }, [handles, selectedFinishes, selectedSizes, sortBy])

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Navigation */}
      <Navbar />

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
            handles={handles}
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
