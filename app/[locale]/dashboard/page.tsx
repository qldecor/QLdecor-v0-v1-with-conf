"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Settings, Plus, Share2, Download, Edit3, Trash2, Copy, Eye, Calendar, User, LogOut } from "lucide-react"

interface SavedConfiguration {
  id: string
  name: string
  category: string
  dimensions: string
  finish: string
  price: number
  createdAt: string
  lastModified: string
  isShared: boolean
  shareUrl?: string
}

export default function DashboardPage() {
  const [configurations, setConfigurations] = useState<SavedConfiguration[]>([
    {
      id: "1",
      name: "Executive Desk Surface",
      category: "Stainless Steel Tables",
      dimensions: "2000 × 800 × 20mm",
      finish: "Brushed",
      price: 1250,
      createdAt: "2024-01-15",
      lastModified: "2024-01-20",
      isShared: false,
    },
    {
      id: "2",
      name: "Kitchen Island Top",
      category: "Stainless Steel Tables",
      dimensions: "2400 × 1000 × 25mm",
      finish: "Mirror Polish",
      price: 1890,
      createdAt: "2024-01-10",
      lastModified: "2024-01-18",
      isShared: true,
      shareUrl: "https://luxcraft.com/share/abc123",
    },
    {
      id: "3",
      name: "Cabinet Fronts - Metalux",
      category: "Furniture Boards",
      dimensions: "600 × 400 × 18mm",
      finish: "Chrome",
      price: 450,
      createdAt: "2024-01-08",
      lastModified: "2024-01-12",
      isShared: false,
    },
    {
      id: "4",
      name: "Contemporary Bar Handles",
      category: "Furniture Handles",
      dimensions: "320mm L × 12mm Ø",
      finish: "Matte Black",
      price: 85,
      createdAt: "2024-01-05",
      lastModified: "2024-01-10",
      isShared: false,
    },
  ])

  const handleShare = (configId: string) => {
    const config = configurations.find((c) => c.id === configId)
    if (config) {
      const shareUrl = `https://luxcraft.com/share/${configId}`
      navigator.clipboard.writeText(shareUrl)
      // Update configuration to mark as shared
      setConfigurations((prev) => prev.map((c) => (c.id === configId ? { ...c, isShared: true, shareUrl } : c)))
      alert("Share link copied to clipboard!")
    }
  }

  const handleDuplicate = (configId: string) => {
    const config = configurations.find((c) => c.id === configId)
    if (config) {
      const newConfig = {
        ...config,
        id: Date.now().toString(),
        name: `${config.name} (Copy)`,
        createdAt: new Date().toISOString().split("T")[0],
        lastModified: new Date().toISOString().split("T")[0],
        isShared: false,
        shareUrl: undefined,
      }
      setConfigurations((prev) => [newConfig, ...prev])
    }
  }

  const handleDelete = (configId: string) => {
    if (confirm("Are you sure you want to delete this configuration?")) {
      setConfigurations((prev) => prev.filter((c) => c.id !== configId))
    }
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
            <div className="flex items-center gap-6">
              <Link href="/configurator" className="text-sm font-light tracking-wide text-gray-700 hover:text-gray-900">
                CONFIGURATOR
              </Link>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-gray-600" />
                </div>
                <span className="text-sm font-light text-gray-900">Sarah Chen</span>
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                  <LogOut className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20">
        {/* Header */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-4xl font-light text-gray-900 mb-4 tracking-wider">MY DASHBOARD</h1>
                <p className="text-gray-600 font-light leading-relaxed">
                  Manage your saved configurations, share projects, and track your material specifications.
                </p>
              </div>
              <div className="flex gap-4">
                <Link href="/configurator">
                  <Button className="font-light tracking-wide">
                    <Plus className="w-4 h-4 mr-2" />
                    NEW CONFIGURATION
                  </Button>
                </Link>
                <Button variant="outline" className="font-light tracking-wide bg-transparent">
                  <Settings className="w-4 h-4 mr-2" />
                  SETTINGS
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-light text-gray-900 mb-2">{configurations.length}</div>
                  <div className="text-sm font-light text-gray-600 tracking-wide">SAVED CONFIGURATIONS</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-light text-gray-900 mb-2">
                    {configurations.filter((c) => c.isShared).length}
                  </div>
                  <div className="text-sm font-light text-gray-600 tracking-wide">SHARED PROJECTS</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-light text-gray-900 mb-2">
                    ${configurations.reduce((sum, c) => sum + c.price, 0).toLocaleString()}
                  </div>
                  <div className="text-sm font-light text-gray-600 tracking-wide">TOTAL PROJECT VALUE</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-light text-gray-900 mb-2">12</div>
                  <div className="text-sm font-light text-gray-600 tracking-wide">DAYS THIS MONTH</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Configurations */}
        <section className="py-20">
          <div className="container mx-auto px-8">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-light text-gray-900 tracking-wider">SAVED CONFIGURATIONS</h2>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" className="font-light tracking-wide bg-transparent">
                  FILTER
                </Button>
                <Button variant="outline" size="sm" className="font-light tracking-wide bg-transparent">
                  SORT
                </Button>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {configurations.map((config) => (
                <Card key={config.id} className="border-0 shadow-lg overflow-hidden group">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt={config.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 flex gap-2">
                      {config.isShared && (
                        <Badge className="bg-white/90 text-gray-900 text-xs font-light">SHARED</Badge>
                      )}
                      <Badge variant="secondary" className="bg-white/90 text-gray-900 text-xs font-light">
                        {config.category.split(" ")[0]}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-lg font-light text-gray-900 mb-2 tracking-wide">{config.name}</h3>
                      <p className="text-sm text-gray-600 font-light">{config.category}</p>
                    </div>

                    <div className="space-y-2 mb-6 text-sm font-light text-gray-600">
                      <div className="flex justify-between">
                        <span>Dimensions:</span>
                        <span>{config.dimensions}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Finish:</span>
                        <span>{config.finish}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Price:</span>
                        <span className="font-medium text-gray-900">${config.price.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-gray-500 mb-6">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>Modified {config.lastModified}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Link href={`/configurator?config=${config.id}`} className="flex-1">
                        <Button size="sm" className="w-full font-light tracking-wide">
                          <Edit3 className="w-3 h-3 mr-2" />
                          EDIT
                        </Button>
                      </Link>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleShare(config.id)}
                        className="font-light tracking-wide bg-transparent"
                      >
                        <Share2 className="w-3 h-3" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDuplicate(config.id)}
                        className="font-light tracking-wide bg-transparent"
                      >
                        <Copy className="w-3 h-3" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDelete(config.id)}
                        className="font-light tracking-wide bg-transparent text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Shared Projects */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl font-light text-gray-900 mb-12 tracking-wider">SHARED PROJECTS</h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {configurations
                .filter((c) => c.isShared)
                .map((config) => (
                  <Card key={config.id} className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-light text-gray-900 mb-2 tracking-wide">{config.name}</h3>
                          <p className="text-sm text-gray-600 font-light">{config.category}</p>
                        </div>
                        <Badge className="bg-green-100 text-green-800 text-xs font-light">ACTIVE</Badge>
                      </div>

                      <div className="bg-gray-50 p-4 rounded mb-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-light text-gray-600">Share URL:</span>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => navigator.clipboard.writeText(config.shareUrl || "")}
                            className="text-xs font-light"
                          >
                            COPY
                          </Button>
                        </div>
                        <div className="text-xs text-gray-500 font-mono mt-1 truncate">{config.shareUrl}</div>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="font-light tracking-wide bg-transparent">
                          <Eye className="w-3 h-3 mr-2" />
                          VIEW
                        </Button>
                        <Button size="sm" variant="outline" className="font-light tracking-wide bg-transparent">
                          <Download className="w-3 h-3 mr-2" />
                          EXPORT
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
