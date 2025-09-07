"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import {Link} from '@/i18n/navigation';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Copy, Edit3, User, Calendar, Share2 } from "lucide-react"

interface SharedConfiguration {
  id: string
  name: string
  category: string
  dimensions: {
    length: number
    width: number
    thickness: number
  }
  finish: string
  edge: string
  price: number
  createdBy: string
  createdAt: string
  description?: string
}

export default function SharedConfigPage({ params }: { params: { id: string } }) {
  const [config, setConfig] = useState<SharedConfiguration | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading shared configuration
    setTimeout(() => {
      setConfig({
        id: params.id,
        name: "Executive Desk Surface",
        category: "Stainless Steel Tables",
        dimensions: {
          length: 2000,
          width: 800,
          thickness: 20,
        },
        finish: "Brushed",
        edge: "Straight Cut",
        price: 1250,
        createdBy: "Sarah Chen",
        createdAt: "2024-01-15",
        description:
          "Premium material configuration designed for contemporary furniture applications, including surfaces, fronts, and hardware components.",
      })
      setIsLoading(false)
    }, 1000)
  }, [params.id])

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    alert("Link copied to clipboard!")
  }

  const handleDuplicate = () => {
    // Redirect to configurator with this configuration as template
    window.location.href = `/configurator?template=${params.id}`
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-light">Loading configuration...</p>
        </div>
      </div>
    )
  }

  if (!config) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light text-gray-900 mb-4">Configuration Not Found</h1>
          <p className="text-gray-600 font-light mb-8">The shared configuration you're looking for doesn't exist.</p>
          <Link href="/">
            <Button className="font-light tracking-wide">RETURN HOME</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-light tracking-wider text-gray-900">
              QLdecor
            </Link>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopyLink}
                className="font-light tracking-wide bg-transparent"
              >
                <Copy className="w-4 h-4 mr-2" />
                COPY LINK
              </Button>
              <Link href="/auth/login">
                <Button size="sm" className="font-light tracking-wide">
                  SIGN IN
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20">
        {/* Header */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-8">
            <div className="flex items-center gap-4 mb-6">
              <Badge className="bg-blue-100 text-blue-800 text-xs font-light">SHARED CONFIGURATION</Badge>
              <div className="flex items-center gap-2 text-sm font-light text-gray-600">
                <User className="w-4 h-4" />
                <span>Created by {config.createdBy}</span>
                <span>•</span>
                <Calendar className="w-4 h-4" />
                <span>{config.createdAt}</span>
              </div>
            </div>
            <h1 className="text-4xl font-light text-gray-900 mb-4 tracking-wider">{config.name}</h1>
            <p className="text-gray-600 font-light leading-relaxed max-w-3xl">
              {config.description || "A premium material configuration shared for your review and collaboration."}
            </p>
          </div>
        </section>

        {/* Configuration Details */}
        <section className="py-20">
          <div className="container mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Visual Preview */}
              <div>
                <div className="relative aspect-[4/3] mb-8">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt={config.name}
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

                <div className="text-center">
                  <h3 className="text-xl font-light text-gray-900 mb-4 tracking-wide">{config.category}</h3>
                  <div className="flex justify-center gap-4 text-sm font-light text-gray-600 mb-4">
                    <span>
                      {config.dimensions.length} × {config.dimensions.width}mm
                    </span>
                    <span>•</span>
                    <span>{config.dimensions.thickness}mm thick</span>
                  </div>
                  <div className="text-sm font-light text-gray-600">{config.finish} finish</div>
                </div>
              </div>

              {/* Specifications */}
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">SPECIFICATIONS</h2>

                <Card className="border border-gray-200 mb-8">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center">
                        <span className="font-light text-gray-600">CATEGORY</span>
                        <span className="font-light text-gray-900">{config.category}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-light text-gray-600">DIMENSIONS</span>
                        <span className="font-light text-gray-900">
                          {config.dimensions.length} × {config.dimensions.width} × {config.dimensions.thickness}mm
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-light text-gray-600">SURFACE AREA</span>
                        <span className="font-light text-gray-900">
                          {((config.dimensions.length * config.dimensions.width) / 1000000).toFixed(2)}m²
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-light text-gray-600">FINISH</span>
                        <span className="font-light text-gray-900">{config.finish}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-light text-gray-600">EDGE TREATMENT</span>
                        <span className="font-light text-gray-900">{config.edge}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200 bg-gray-50 mb-8">
                  <CardContent className="p-8">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-light text-gray-900 tracking-wide">ESTIMATED PRICE</span>
                      <div className="text-right">
                        <div className="text-3xl font-light text-gray-900">${config.price.toLocaleString()}</div>
                        <div className="text-xs text-gray-600 font-light">Excluding shipping & taxes</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-4">
                  <Button onClick={handleDuplicate} className="w-full font-light tracking-wide">
                    <Edit3 className="w-4 h-4 mr-2" />
                    CUSTOMIZE THIS CONFIGURATION
                  </Button>
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="font-light tracking-wide bg-transparent">
                      <Download className="w-4 h-4 mr-2" />
                      DOWNLOAD SPECS
                    </Button>
                    <Button
                      variant="outline"
                      onClick={handleCopyLink}
                      className="font-light tracking-wide bg-transparent"
                    >
                      <Share2 className="w-4 h-4 mr-2" />
                      SHARE
                    </Button>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-gray-50 rounded">
                  <h3 className="font-light text-gray-900 mb-4 tracking-wide">INTERESTED IN THIS CONFIGURATION?</h3>
                  <p className="text-sm font-light text-gray-600 mb-4 leading-relaxed">
                    Create a free account to save configurations, request quotes, and collaborate with our team.
                  </p>
                  <div className="flex gap-4">
                    <Link href="/auth/register" className="flex-1">
                      <Button className="w-full font-light tracking-wide">CREATE ACCOUNT</Button>
                    </Link>
                    <Link href="/contact" className="flex-1">
                      <Button variant="outline" className="w-full font-light tracking-wide bg-transparent">
                        CONTACT US
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
