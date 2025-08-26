"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/app/[locale]/components/ui/button"
import { Slider } from "@/app/[locale]/components/ui/slider"
import { Card } from "@/app/[locale]/components/ui/card"
import { Badge } from "@/app/[locale]/components/ui/badge"
import { ArrowLeft, Download, Share2, Save } from "lucide-react"

interface ConfigState {
  category: "steel-tables" | "steel-fronts" | "furniture-boards" | "furniture-handles"
  series?: "metalux" | "woodsense" | "colorpro"
  dimensions: {
    length: number
    width: number
    thickness: number
  }
  finish: string
  edge: string
  color?: string
  quantity: number
}

export default function ConfiguratorPage() {
  const [config, setConfig] = useState<ConfigState>({
    category: "steel-tables",
    dimensions: {
      length: 2000,
      width: 800,
      thickness: 20,
    },
    finish: "brushed",
    edge: "straight",
    quantity: 1,
  })

  const [activeStep, setActiveStep] = useState(1)

  const categories = [
    {
      id: "steel-tables",
      name: "STAINLESS STEEL TABLES",
      description: "Premium steel surfaces for professional applications",
    },
    {
      id: "steel-fronts",
      name: "STEEL FURNITURE FRONTS",
      description: "Industrial aesthetics for contemporary furniture",
    },
    {
      id: "furniture-boards",
      name: "FURNITURE BOARDS",
      description: "Three distinctive series for diverse applications",
    },
    {
      id: "furniture-handles",
      name: "FURNITURE HANDLES",
      description: "Premium handles in contemporary finishes",
    },
  ]

  const finishes = {
    "steel-tables": [
      { id: "brushed", name: "BRUSHED", description: "Subtle directional texture" },
      { id: "mirror", name: "MIRROR POLISH", description: "High-gloss reflective finish" },
      { id: "satin", name: "SATIN", description: "Smooth, low-gloss surface" },
      { id: "textured", name: "TEXTURED", description: "Custom pattern applications" },
    ],
    "steel-fronts": [
      { id: "raw", name: "RAW STEEL", description: "Authentic industrial appearance" },
      { id: "oxidized", name: "OXIDIZED", description: "Controlled patina finish" },
      { id: "blackened", name: "BLACKENED", description: "Deep charcoal treatment" },
    ],
    "furniture-boards": [
      { id: "metalux-chrome", name: "CHROME", description: "Brilliant metallic finish" },
      { id: "metalux-bronze", name: "BRONZE", description: "Warm metallic tone" },
      { id: "woodsense-oak", name: "OAK", description: "Natural wood grain" },
      { id: "woodsense-walnut", name: "WALNUT", description: "Rich dark wood" },
      { id: "colorpro-custom", name: "CUSTOM COLOR", description: "Unlimited color options" },
    ],
    "furniture-handles": [
      { id: "matte-black", name: "MATTE BLACK", description: "Contemporary black finish" },
      { id: "brushed-brass", name: "BRUSHED BRASS", description: "Warm brass with texture" },
      { id: "polished-chrome", name: "POLISHED CHROME", description: "Mirror-like chrome finish" },
      { id: "antique-bronze", name: "ANTIQUE BRONZE", description: "Aged bronze patina" },
      { id: "satin-nickel", name: "SATIN NICKEL", description: "Smooth nickel finish" },
    ],
  }

  const edges = [
    { id: "straight", name: "STRAIGHT CUT", description: "Clean, precise edge" },
    { id: "beveled", name: "BEVELED", description: "45° angled edge" },
    { id: "rounded", name: "ROUNDED", description: "Soft curved edge" },
    { id: "custom", name: "CUSTOM PROFILE", description: "Bespoke edge treatment" },
  ]

  const updateConfig = (updates: Partial<ConfigState>) => {
    setConfig((prev) => ({ ...prev, ...updates }))
  }

  const calculatePrice = () => {
    const basePrice =
      config.category === "steel-tables"
        ? 450
        : config.category === "steel-fronts"
          ? 280
          : config.category === "furniture-handles"
            ? 45
            : 320

    if (config.category === "furniture-handles") {
      // For handles, price per piece regardless of dimensions
      const finishMultiplier = config.finish.includes("brass") || config.finish.includes("bronze") ? 1.4 : 1.0
      return Math.round(basePrice * finishMultiplier * config.quantity)
    }

    const area = (config.dimensions.length * config.dimensions.width) / 1000000 // m²
    const finishMultiplier = config.finish.includes("mirror") ? 1.3 : config.finish.includes("textured") ? 1.5 : 1.0
    return Math.round(basePrice * area * finishMultiplier * config.quantity)
  }

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<{ name: string; email: string } | null>(null)

  useEffect(() => {
    // Check if user is authenticated
    const userData = localStorage.getItem("user")
    if (userData) {
      setUser(JSON.parse(userData))
      setIsAuthenticated(true)
    }
  }, [])

  const handleSaveConfiguration = async () => {
    if (!isAuthenticated) {
      // Redirect to login
      window.location.href = "/auth/login?redirect=/configurator"
      return
    }

    const configData = {
      id: Date.now().toString(),
      name: `${config.category} Configuration`,
      category: categories.find((c) => c.id === config.category)?.name || "",
      dimensions: `${config.dimensions.length} × ${config.dimensions.width} × ${config.dimensions.thickness}mm`,
      finish: finishes[config.category]?.find((f) => f.id === config.finish)?.name || "",
      price: calculatePrice(),
      createdAt: new Date().toISOString().split("T")[0],
      lastModified: new Date().toISOString().split("T")[0],
      isShared: false,
    }

    // Save to localStorage (in real app, this would be an API call)
    const savedConfigs = JSON.parse(localStorage.getItem("savedConfigurations") || "[]")
    savedConfigs.unshift(configData)
    localStorage.setItem("savedConfigurations", JSON.stringify(savedConfigs))

    alert("Configuration saved successfully!")
  }

  const handleShareConfiguration = () => {
    const shareData = {
      ...config,
      price: calculatePrice(),
      createdBy: user?.name || "Anonymous",
      createdAt: new Date().toISOString().split("T")[0],
    }

    // Generate share URL (in real app, this would create a database entry)
    const shareId = btoa(JSON.stringify(shareData))
      .replace(/[^a-zA-Z0-9]/g, "")
      .substring(0, 12)
    const shareUrl = `${window.location.origin}/share/${shareId}`

    navigator.clipboard.writeText(shareUrl)
    alert("Share link copied to clipboard!")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-light tracking-wider text-gray-900">
              LUXCRAFT
            </Link>
            <div className="flex items-center gap-8">
              <Link
                href="/products"
                className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-light tracking-wide"
              >
                PRODUCTS
              </Link>
              <div className="flex items-center gap-4">
                {isAuthenticated ? (
                  <>
                    <Link
                      href="/dashboard"
                      className="text-sm font-light tracking-wide text-gray-700 hover:text-gray-900"
                    >
                      DASHBOARD
                    </Link>
                    <Button
                      onClick={handleSaveConfiguration}
                      variant="outline"
                      size="sm"
                      className="font-light tracking-wide bg-transparent"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      SAVE
                    </Button>
                  </>
                ) : (
                  <Link href="/auth/login">
                    <Button variant="outline" size="sm" className="font-light tracking-wide bg-transparent">
                      SIGN IN TO SAVE
                    </Button>
                  </Link>
                )}
                <Button
                  onClick={handleShareConfiguration}
                  variant="outline"
                  size="sm"
                  className="font-light tracking-wide bg-transparent"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  SHARE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20 flex">
        {/* Configuration Panel */}
        <div className="w-1/2 p-12 overflow-y-auto h-screen">
          <div className="max-w-lg">
            {/* Header */}
            <div className="mb-12">
              <Link
                href="/products"
                className="flex items-center text-gray-600 hover:text-gray-900 mb-6 text-sm font-light"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                BACK TO PRODUCTS
              </Link>
              <h1 className="text-3xl font-light text-gray-900 mb-4 tracking-wider">MATERIAL CONFIGURATOR</h1>
              <p className="text-gray-600 font-light leading-relaxed">
                Design your perfect component with precision control over every specification.
              </p>
            </div>

            {/* Step Indicator */}
            <div className="flex items-center mb-12">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-light ${
                      activeStep >= step ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {step}
                  </div>
                  {step < 4 && <div className={`w-12 h-px ${activeStep > step ? "bg-gray-900" : "bg-gray-200"}`} />}
                </div>
              ))}
            </div>

            {/* Step 1: Category Selection */}
            {activeStep === 1 && (
              <div className="space-y-8">
                <h2 className="text-xl font-light text-gray-900 tracking-wide">SELECT CATEGORY</h2>
                <div className="space-y-4">
                  {categories.map((category) => (
                    <Card
                      key={category.id}
                      className={`p-6 cursor-pointer transition-all border ${
                        config.category === category.id
                          ? "border-gray-900 bg-gray-50"
                          : "border-gray-200 hover:border-gray-400"
                      }`}
                      onClick={() => {
                        updateConfig({ category: category.id as any })
                        setActiveStep(2)
                      }}
                    >
                      <h3 className="font-light text-gray-900 mb-2 tracking-wide">{category.name}</h3>
                      <p className="text-sm text-gray-600 font-light">{category.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Dimensions */}
            {activeStep === 2 && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-light text-gray-900 tracking-wide">
                    {config.category === "furniture-handles" ? "HANDLE SPECIFICATIONS" : "DIMENSIONS"}
                  </h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setActiveStep(1)}
                    className="text-gray-600 font-light"
                  >
                    BACK
                  </Button>
                </div>

                {config.category === "furniture-handles" ? (
                  <div className="space-y-8">
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <label className="text-sm font-light text-gray-900 tracking-wide">HANDLE LENGTH</label>
                        <span className="text-sm font-light text-gray-600">{config.dimensions.length}mm</span>
                      </div>
                      <Slider
                        value={[config.dimensions.length]}
                        onValueChange={([value]) =>
                          updateConfig({
                            dimensions: { ...config.dimensions, length: value },
                          })
                        }
                        max={600}
                        min={96}
                        step={32}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-gray-400 mt-2">
                        <span>96mm</span>
                        <span>600mm</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <label className="text-sm font-light text-gray-900 tracking-wide">HANDLE DIAMETER</label>
                        <span className="text-sm font-light text-gray-600">{config.dimensions.width}mm</span>
                      </div>
                      <Slider
                        value={[config.dimensions.width]}
                        onValueChange={([value]) =>
                          updateConfig({
                            dimensions: { ...config.dimensions, width: value },
                          })
                        }
                        max={25}
                        min={8}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-gray-400 mt-2">
                        <span>8mm</span>
                        <span>25mm</span>
                      </div>
                    </div>

                    <div className="p-4 bg-gray-50 rounded">
                      <h3 className="text-sm font-light text-gray-900 mb-2 tracking-wide">HANDLE STYLE</h3>
                      <p className="text-xs text-gray-600 font-light">
                        Contemporary bar handle with concealed mounting system. Available in standard and custom
                        lengths.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-8">
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <label className="text-sm font-light text-gray-900 tracking-wide">LENGTH</label>
                        <span className="text-sm font-light text-gray-600">{config.dimensions.length}mm</span>
                      </div>
                      <Slider
                        value={[config.dimensions.length]}
                        onValueChange={([value]) =>
                          updateConfig({
                            dimensions: { ...config.dimensions, length: value },
                          })
                        }
                        max={3000}
                        min={500}
                        step={50}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-gray-400 mt-2">
                        <span>500mm</span>
                        <span>3000mm</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <label className="text-sm font-light text-gray-900 tracking-wide">WIDTH</label>
                        <span className="text-sm font-light text-gray-600">{config.dimensions.width}mm</span>
                      </div>
                      <Slider
                        value={[config.dimensions.width]}
                        onValueChange={([value]) =>
                          updateConfig({
                            dimensions: { ...config.dimensions, width: value },
                          })
                        }
                        max={1500}
                        min={200}
                        step={25}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-gray-400 mt-2">
                        <span>200mm</span>
                        <span>1500mm</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <label className="text-sm font-light text-gray-900 tracking-wide">THICKNESS</label>
                        <span className="text-sm font-light text-gray-600">{config.dimensions.thickness}mm</span>
                      </div>
                      <Slider
                        value={[config.dimensions.thickness]}
                        onValueChange={([value]) =>
                          updateConfig({
                            dimensions: { ...config.dimensions, thickness: value },
                          })
                        }
                        max={50}
                        min={8}
                        step={2}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-gray-400 mt-2">
                        <span>8mm</span>
                        <span>50mm</span>
                      </div>
                    </div>
                  </div>
                )}

                <Button onClick={() => setActiveStep(3)} className="w-full font-light tracking-wide">
                  CONTINUE TO FINISHES
                </Button>
              </div>
            )}

            {/* Step 3: Finish Selection */}
            {activeStep === 3 && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-light text-gray-900 tracking-wide">
                    {config.category === "furniture-handles" ? "FINISH SELECTION" : "SURFACE FINISH"}
                  </h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setActiveStep(2)}
                    className="text-gray-600 font-light"
                  >
                    BACK
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {finishes[config.category]?.map((finish) => (
                    <Card
                      key={finish.id}
                      className={`p-4 cursor-pointer transition-all border ${
                        config.finish === finish.id
                          ? "border-gray-900 bg-gray-50"
                          : "border-gray-200 hover:border-gray-400"
                      }`}
                      onClick={() => updateConfig({ finish: finish.id })}
                    >
                      <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-300 rounded mb-3"></div>
                      <h3 className="text-sm font-light text-gray-900 mb-1 tracking-wide">{finish.name}</h3>
                      <p className="text-xs text-gray-600 font-light">{finish.description}</p>
                    </Card>
                  ))}
                </div>

                <div className="space-y-6">
                  <h3 className="text-lg font-light text-gray-900 tracking-wide">EDGE TREATMENT</h3>
                  <div className="space-y-3">
                    {edges.map((edge) => (
                      <Card
                        key={edge.id}
                        className={`p-4 cursor-pointer transition-all border ${
                          config.edge === edge.id
                            ? "border-gray-900 bg-gray-50"
                            : "border-gray-200 hover:border-gray-400"
                        }`}
                        onClick={() => updateConfig({ edge: edge.id })}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="text-sm font-light text-gray-900 tracking-wide">{edge.name}</h4>
                            <p className="text-xs text-gray-600 font-light">{edge.description}</p>
                          </div>
                          <div className="w-12 h-8 bg-gray-200 rounded"></div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                <Button onClick={() => setActiveStep(4)} className="w-full font-light tracking-wide">
                  REVIEW CONFIGURATION
                </Button>
              </div>
            )}

            {/* Step 4: Review & Quote */}
            {activeStep === 4 && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-light text-gray-900 tracking-wide">CONFIGURATION SUMMARY</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setActiveStep(3)}
                    className="text-gray-600 font-light"
                  >
                    BACK
                  </Button>
                </div>

                <Card className="p-6 border border-gray-200">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-sm font-light text-gray-600">CATEGORY</span>
                      <span className="text-sm font-light text-gray-900">
                        {categories.find((c) => c.id === config.category)?.name}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-light text-gray-600">
                        {config.category === "furniture-handles" ? "SPECIFICATIONS" : "DIMENSIONS"}
                      </span>
                      <span className="text-sm font-light text-gray-900">
                        {config.category === "furniture-handles"
                          ? `${config.dimensions.length}mm L × ${config.dimensions.width}mm Ø`
                          : `${config.dimensions.length} × ${config.dimensions.width} × ${config.dimensions.thickness}mm`}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-light text-gray-600">SURFACE AREA</span>
                      <span className="text-sm font-light text-gray-900">
                        {((config.dimensions.length * config.dimensions.width) / 1000000).toFixed(2)}m²
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-light text-gray-600">FINISH</span>
                      <span className="text-sm font-light text-gray-900">
                        {finishes[config.category]?.find((f) => f.id === config.finish)?.name}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-light text-gray-600">EDGE</span>
                      <span className="text-sm font-light text-gray-900">
                        {edges.find((e) => e.id === config.edge)?.name}
                      </span>
                    </div>
                  </div>
                </Card>

                <div className="space-y-4">
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-sm font-light text-gray-900 tracking-wide">QUANTITY</label>
                    <span className="text-sm font-light text-gray-600">{config.quantity} pieces</span>
                  </div>
                  <Slider
                    value={[config.quantity]}
                    onValueChange={([value]) => updateConfig({ quantity: value })}
                    max={50}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>1 piece</span>
                    <span>50 pieces</span>
                  </div>
                </div>

                <Card className="p-6 bg-gray-50 border border-gray-200">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-light text-gray-900 tracking-wide">ESTIMATED PRICE</span>
                    <div className="text-right">
                      <div className="text-2xl font-light text-gray-900">${calculatePrice().toLocaleString()}</div>
                      <div className="text-xs text-gray-600 font-light">Excluding shipping & taxes</div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs font-light">
                    Final pricing subject to technical review
                  </Badge>
                </Card>

                <div className="flex gap-4">
                  <Button className="flex-1 font-light tracking-wide">REQUEST QUOTE</Button>
                  <Button variant="outline" className="flex-1 font-light tracking-wide bg-transparent">
                    <Download className="w-4 h-4 mr-2" />
                    DOWNLOAD SPECS
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Visual Preview */}
        <div className="w-1/2 bg-gray-50 relative">
          <div className="sticky top-20 h-screen flex items-center justify-center p-12">
            <div className="text-center">
              <div className="relative w-96 h-64 mb-8">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Material Preview"
                  fill
                  className="object-cover rounded-lg shadow-2xl"
                />
                {/* Dimension Overlay */}
                <div className="absolute -top-6 left-0 right-0 flex justify-center">
                  <div className="bg-white px-3 py-1 rounded text-xs font-light text-gray-600 shadow">
                    {config.dimensions.length}mm
                  </div>
                </div>
                <div className="absolute top-0 bottom-0 -left-8 flex items-center">
                  <div className="bg-white px-3 py-1 rounded text-xs font-light text-gray-600 shadow transform -rotate-90">
                    {config.dimensions.width}mm
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-light text-gray-900 tracking-wide">
                  {categories.find((c) => c.id === config.category)?.name}
                </h3>
                <div className="flex justify-center gap-4 text-sm font-light text-gray-600">
                  <span>
                    {config.dimensions.length} × {config.dimensions.width}mm
                  </span>
                  <span>•</span>
                  <span>{config.dimensions.thickness}mm thick</span>
                </div>
                <div className="text-sm font-light text-gray-600">
                  {finishes[config.category]?.find((f) => f.id === config.finish)?.name} finish
                </div>
              </div>

              {/* Material Samples */}
              <div className="mt-12">
                <h4 className="text-sm font-light text-gray-900 mb-4 tracking-wide">SURFACE PREVIEW</h4>
                <div className="grid grid-cols-3 gap-3">
                  {finishes[config.category]?.slice(0, 3).map((finish) => (
                    <div
                      key={finish.id}
                      className={`aspect-square rounded cursor-pointer transition-all ${
                        config.finish === finish.id ? "ring-2 ring-gray-900" : "hover:ring-1 ring-gray-400"
                      }`}
                      onClick={() => updateConfig({ finish: finish.id })}
                    >
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
