"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/app/[locale]/components/ui/button"
import { Slider } from "@/app/[locale]/components/ui/slider"
import { Card } from "@/app/[locale]/components/ui/card"
import { Badge } from "@/app/[locale]/components/ui/badge"
import {
  ArrowLeft,
  Save,
  Share2,
  Download,
  RotateCcw,
  Eye,
  Grid3X3,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  MessageCircle,
  Send,
  Pin,
  UserPlus,
} from "lucide-react"
import { CollaborationPanel } from "@/app/[locale]/components/collaboration-panel"

interface MaterialConfig {
  category: "surfaces" | "fronts" | "handles" | "boards"
  material: string
  finish: string
  color: string
  texture: string
  dimensions: {
    width: number
    height: number
    depth: number
  }
  lighting: {
    intensity: number
    angle: number
    warmth: number
  }
  environment: string
}

interface Comment {
  id: string
  userId: string
  userName: string
  userAvatar: string
  content: string
  timestamp: string
  position?: { x: number; y: number }
  resolved: boolean
  replies: Comment[]
}

interface Collaborator {
  id: string
  name: string
  avatar: string
  role: "owner" | "editor" | "viewer"
  status: "online" | "away" | "offline"
  cursor?: { x: number; y: number }
  lastSeen: string
}

interface Activity {
  id: string
  userId: string
  userName: string
  action: string
  timestamp: string
  details: string
}

export default function MaterialStudioPage() {
  const [config, setConfig] = useState<MaterialConfig>({
    category: "surfaces",
    material: "stainless-steel",
    finish: "brushed",
    color: "natural",
    texture: "fine",
    dimensions: {
      width: 2000,
      height: 800,
      depth: 20,
    },
    lighting: {
      intensity: 75,
      angle: 45,
      warmth: 50,
    },
    environment: "studio",
  })

  const [activePanel, setActivePanel] = useState<"material" | "lighting" | "environment">("material")
  const [isAnimating, setIsAnimating] = useState(false)
  const [viewMode, setViewMode] = useState<"3d" | "flat" | "context">("3d")

  const [collaborators, setCollaborators] = useState<Collaborator[]>([
    {
      id: "1",
      name: "Sarah Chen",
      avatar: "/placeholder.svg?height=32&width=32",
      role: "owner",
      status: "online",
      lastSeen: "now",
    },
    {
      id: "2",
      name: "Marcus Weber",
      avatar: "/placeholder.svg?height=32&width=32",
      role: "editor",
      status: "online",
      cursor: { x: 450, y: 300 },
      lastSeen: "2 min ago",
    },
    {
      id: "3",
      name: "Elena Rodriguez",
      avatar: "/placeholder.svg?height=32&width=32",
      role: "viewer",
      status: "away",
      lastSeen: "5 min ago",
    },
  ])

  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      userId: "2",
      userName: "Marcus Weber",
      userAvatar: "/placeholder.svg?height=32&width=32",
      content:
        "The brushed finish looks perfect for this application. What do you think about increasing the lighting intensity?",
      timestamp: "2 min ago",
      position: { x: 400, y: 250 },
      resolved: false,
      replies: [
        {
          id: "1-1",
          userId: "1",
          userName: "Sarah Chen",
          userAvatar: "/placeholder.svg?height=32&width=32",
          content: "Good point! I'll adjust it now.",
          timestamp: "1 min ago",
          resolved: false,
          replies: [],
        },
      ],
    },
  ])

  const [activities, setActivities] = useState<Activity[]>([
    {
      id: "1",
      userId: "2",
      userName: "Marcus Weber",
      action: "changed material",
      timestamp: "3 min ago",
      details: "Stainless Steel → Carbon Steel",
    },
    {
      id: "2",
      userId: "1",
      userName: "Sarah Chen",
      action: "adjusted lighting",
      timestamp: "5 min ago",
      details: "Intensity: 65% → 75%",
    },
  ])

  const [showComments, setShowComments] = useState(true)
  const [showCollaborators, setShowCollaborators] = useState(true)
  const [newComment, setNewComment] = useState("")
  const [commentPosition, setCommentPosition] = useState<{ x: number; y: number } | null>(null)
  const [isAddingComment, setIsAddingComment] = useState(false)

  const materials = {
    surfaces: [
      { id: "stainless-steel", name: "Stainless Steel", description: "Premium grade 304" },
      { id: "carbon-steel", name: "Carbon Steel", description: "Industrial strength" },
      { id: "aluminum", name: "Aluminum", description: "Lightweight precision" },
    ],
    fronts: [
      { id: "steel-front", name: "Steel Front", description: "Raw industrial" },
      { id: "oxidized-steel", name: "Oxidized Steel", description: "Weathered patina" },
    ],
    handles: [
      { id: "bar-handle", name: "Bar Handle", description: "Contemporary linear" },
      { id: "pull-handle", name: "Pull Handle", description: "Ergonomic grip" },
    ],
    boards: [
      { id: "metalux", name: "Metalux", description: "Metallic finish" },
      { id: "woodsense", name: "Woodsense", description: "Natural grain" },
      { id: "colorpro", name: "Colorpro", description: "Custom color" },
    ],
  }

  const finishes = {
    "stainless-steel": [
      { id: "brushed", name: "Brushed", description: "Directional texture" },
      { id: "mirror", name: "Mirror", description: "High gloss" },
      { id: "satin", name: "Satin", description: "Soft matte" },
      { id: "textured", name: "Textured", description: "Custom pattern" },
    ],
    "carbon-steel": [
      { id: "raw", name: "Raw", description: "Natural finish" },
      { id: "blackened", name: "Blackened", description: "Dark treatment" },
    ],
    "bar-handle": [
      { id: "matte-black", name: "Matte Black", description: "Contemporary" },
      { id: "brushed-brass", name: "Brushed Brass", description: "Warm metallic" },
      { id: "polished-chrome", name: "Polished Chrome", description: "Mirror finish" },
    ],
  }

  const environments = [
    { id: "studio", name: "Studio", description: "Neutral lighting" },
    { id: "kitchen", name: "Kitchen", description: "Warm residential" },
    { id: "office", name: "Office", description: "Professional space" },
    { id: "showroom", name: "Showroom", description: "Dramatic display" },
  ]

  const updateConfig = (updates: Partial<MaterialConfig>) => {
    setConfig((prev) => ({ ...prev, ...updates }))
  }

  const handleMaterialChange = (materialId: string) => {
    updateConfig({
      material: materialId,
      finish: finishes[materialId as keyof typeof finishes]?.[0]?.id || "brushed",
    })
  }

  const startAnimation = () => {
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 3000)
  }

  const addComment = (content: string, position?: { x: number; y: number }) => {
    const comment: Comment = {
      id: Date.now().toString(),
      userId: "1",
      userName: "Sarah Chen",
      userAvatar: "/placeholder.svg?height=32&width=32",
      content,
      timestamp: "now",
      position,
      resolved: false,
      replies: [],
    }
    setComments((prev) => [comment, ...prev])
    setNewComment("")
    setCommentPosition(null)
    setIsAddingComment(false)
  }

  const resolveComment = (commentId: string) => {
    setComments((prev) => prev.map((comment) => (comment.id === commentId ? { ...comment, resolved: true } : comment)))
  }

  const inviteCollaborator = () => {
    // Simulate adding a new collaborator
    const newCollaborator: Collaborator = {
      id: Date.now().toString(),
      name: "New Collaborator",
      avatar: "/placeholder.svg?height=32&width=32",
      role: "viewer",
      status: "online",
      lastSeen: "now",
    }
    setCollaborators((prev) => [...prev, newCollaborator])
  }

  const handleViewportClick = (event: React.MouseEvent) => {
    if (isAddingComment) {
      setCommentPosition({ x: event.clientX, y: event.clientY })
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="container mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Link href="/" className="text-xl font-light tracking-wider">
                QLdecor
              </Link>
              <div className="text-sm font-light text-gray-400 tracking-wide">MATERIAL STUDIO</div>
            </div>
            <div className="flex items-center gap-4">
              {/* Collaborators */}
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {collaborators.slice(0, 3).map((collaborator) => (
                    <div key={collaborator.id} className="relative">
                      <Image
                        src={collaborator.avatar || "/placeholder.svg"}
                        alt={collaborator.name}
                        width={28}
                        height={28}
                        className="rounded-full border-2 border-gray-800"
                      />
                      <div
                        className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-gray-900 ${
                          collaborator.status === "online"
                            ? "bg-green-500"
                            : collaborator.status === "away"
                              ? "bg-yellow-500"
                              : "bg-gray-500"
                        }`}
                      />
                    </div>
                  ))}
                  {collaborators.length > 3 && (
                    <div className="w-7 h-7 rounded-full bg-gray-700 border-2 border-gray-800 flex items-center justify-center">
                      <span className="text-xs text-white">+{collaborators.length - 3}</span>
                    </div>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white hover:bg-gray-800 font-light"
                  onClick={inviteCollaborator}
                >
                  <UserPlus className="w-4 h-4" />
                </Button>
              </div>

              {/* Collaboration Controls */}
              <div className="flex items-center gap-2 border-l border-gray-700 pl-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`font-light ${showComments ? "text-white bg-gray-800" : "text-gray-400 hover:text-white hover:bg-gray-800"}`}
                  onClick={() => setShowComments(!showComments)}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  COMMENTS ({comments.filter((c) => !c.resolved).length})
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`font-light ${isAddingComment ? "text-white bg-gray-800" : "text-gray-400 hover:text-white hover:bg-gray-800"}`}
                  onClick={() => setIsAddingComment(!isAddingComment)}
                >
                  <Pin className="w-4 h-4 mr-2" />
                  {isAddingComment ? "CANCEL" : "ADD COMMENT"}
                </Button>
              </div>

              {/* Existing controls */}
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-gray-800 font-light"
                onClick={startAnimation}
              >
                {isAnimating ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                {isAnimating ? "PAUSE" : "ANIMATE"}
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-gray-800 font-light">
                <Save className="w-4 h-4 mr-2" />
                SAVE
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-gray-800 font-light">
                <Share2 className="w-4 h-4 mr-2" />
                SHARE
              </Button>
              <Link href="/configurator">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-white hover:bg-gray-800 font-light bg-transparent"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  CONFIGURATOR
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="pt-16 flex h-screen">
        {/* Left Panel - Controls */}
        <div className="w-80 bg-gray-900 border-r border-gray-800 overflow-y-auto">
          <div className="p-6">
            {/* Category Selection */}
            <div className="mb-8">
              <h3 className="text-sm font-light text-gray-400 mb-4 tracking-wide">CATEGORY</h3>
              <div className="grid grid-cols-2 gap-2">
                {Object.keys(materials).map((category) => (
                  <Button
                    key={category}
                    variant={config.category === category ? "default" : "ghost"}
                    size="sm"
                    className={`font-light text-xs tracking-wide ${
                      config.category === category
                        ? "bg-white text-black"
                        : "text-gray-400 hover:text-white hover:bg-gray-800"
                    }`}
                    onClick={() => updateConfig({ category: category as any })}
                  >
                    {category.toUpperCase()}
                  </Button>
                ))}
              </div>
            </div>

            {/* Control Tabs */}
            <div className="mb-6">
              <div className="flex border-b border-gray-800">
                {["material", "lighting", "environment"].map((tab) => (
                  <button
                    key={tab}
                    className={`px-4 py-2 text-xs font-light tracking-wide transition-colors ${
                      activePanel === tab ? "text-white border-b-2 border-white" : "text-gray-400 hover:text-white"
                    }`}
                    onClick={() => setActivePanel(tab as any)}
                  >
                    {tab.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Material Panel */}
            {activePanel === "material" && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-light text-gray-400 mb-3 tracking-wide">MATERIAL</h4>
                  <div className="space-y-2">
                    {materials[config.category].map((material) => (
                      <Card
                        key={material.id}
                        className={`p-3 cursor-pointer transition-all border ${
                          config.material === material.id
                            ? "border-white bg-gray-800"
                            : "border-gray-700 bg-gray-900 hover:border-gray-600"
                        }`}
                        onClick={() => handleMaterialChange(material.id)}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-800 rounded"></div>
                          <div>
                            <div className="text-sm font-light text-white">{material.name}</div>
                            <div className="text-xs text-gray-400">{material.description}</div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-light text-gray-400 mb-3 tracking-wide">FINISH</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {(finishes[config.material as keyof typeof finishes] || []).map((finish) => (
                      <Card
                        key={finish.id}
                        className={`p-3 cursor-pointer transition-all border ${
                          config.finish === finish.id
                            ? "border-white bg-gray-800"
                            : "border-gray-700 bg-gray-900 hover:border-gray-600"
                        }`}
                        onClick={() => updateConfig({ finish: finish.id })}
                      >
                        <div className="text-center">
                          <div className="w-full h-8 bg-gradient-to-r from-gray-600 to-gray-700 rounded mb-2"></div>
                          <div className="text-xs font-light text-white">{finish.name}</div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-light text-gray-400 mb-3 tracking-wide">DIMENSIONS</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-gray-400">WIDTH</span>
                        <span className="text-xs text-white">{config.dimensions.width}mm</span>
                      </div>
                      <Slider
                        value={[config.dimensions.width]}
                        onValueChange={([value]) =>
                          updateConfig({
                            dimensions: { ...config.dimensions, width: value },
                          })
                        }
                        max={3000}
                        min={500}
                        step={50}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-gray-400">HEIGHT</span>
                        <span className="text-xs text-white">{config.dimensions.height}mm</span>
                      </div>
                      <Slider
                        value={[config.dimensions.height]}
                        onValueChange={([value]) =>
                          updateConfig({
                            dimensions: { ...config.dimensions, height: value },
                          })
                        }
                        max={1500}
                        min={200}
                        step={25}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Lighting Panel */}
            {activePanel === "lighting" && (
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-light text-gray-400 tracking-wide">INTENSITY</span>
                    <span className="text-xs text-white">{config.lighting.intensity}%</span>
                  </div>
                  <Slider
                    value={[config.lighting.intensity]}
                    onValueChange={([value]) =>
                      updateConfig({
                        lighting: { ...config.lighting, intensity: value },
                      })
                    }
                    max={100}
                    min={0}
                    step={5}
                    className="w-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-light text-gray-400 tracking-wide">ANGLE</span>
                    <span className="text-xs text-white">{config.lighting.angle}°</span>
                  </div>
                  <Slider
                    value={[config.lighting.angle]}
                    onValueChange={([value]) =>
                      updateConfig({
                        lighting: { ...config.lighting, angle: value },
                      })
                    }
                    max={90}
                    min={0}
                    step={5}
                    className="w-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-light text-gray-400 tracking-wide">WARMTH</span>
                    <span className="text-xs text-white">{config.lighting.warmth}%</span>
                  </div>
                  <Slider
                    value={[config.lighting.warmth]}
                    onValueChange={([value]) =>
                      updateConfig({
                        lighting: { ...config.lighting, warmth: value },
                      })
                    }
                    max={100}
                    min={0}
                    step={5}
                    className="w-full"
                  />
                </div>
              </div>
            )}

            {/* Environment Panel */}
            {activePanel === "environment" && (
              <div className="space-y-4">
                {environments.map((env) => (
                  <Card
                    key={env.id}
                    className={`p-4 cursor-pointer transition-all border ${
                      config.environment === env.id
                        ? "border-white bg-gray-800"
                        : "border-gray-700 bg-gray-900 hover:border-gray-600"
                    }`}
                    onClick={() => updateConfig({ environment: env.id })}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-8 bg-gradient-to-r from-gray-600 to-gray-800 rounded"></div>
                      <div>
                        <div className="text-sm font-light text-white">{env.name}</div>
                        <div className="text-xs text-gray-400">{env.description}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Center - 3D Viewport */}
        <div className="flex-1 relative bg-gradient-to-br from-gray-900 to-black">
          {/* Collaborator Cursors */}
          {collaborators.map((collaborator) =>
            collaborator.cursor && collaborator.id !== "1" ? (
              <div
                key={collaborator.id}
                className="absolute z-20 pointer-events-none"
                style={{ left: collaborator.cursor.x, top: collaborator.cursor.y }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg" />
                  <div className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-light">{collaborator.name}</div>
                </div>
              </div>
            ) : null,
          )}

          {/* Comment Pins */}
          {comments.map((comment) =>
            comment.position && !comment.resolved ? (
              <div
                key={comment.id}
                className="absolute z-20 cursor-pointer"
                style={{ left: comment.position.x, top: comment.position.y }}
              >
                <div className="w-6 h-6 bg-yellow-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                  <MessageCircle className="w-3 h-3 text-white" />
                </div>
              </div>
            ) : null,
          )}

          {/* Comment Position Indicator */}
          {commentPosition && (
            <div
              className="absolute z-20 pointer-events-none"
              style={{ left: commentPosition.x, top: commentPosition.y }}
            >
              <div className="w-6 h-6 bg-yellow-500 rounded-full border-2 border-white shadow-lg animate-pulse" />
            </div>
          )}

          {/* View Mode Controls */}
          <div className="absolute top-6 left-6 z-10">
            <div className="flex gap-2">
              {[
                { id: "3d", icon: Grid3X3, label: "3D" },
                { id: "flat", icon: Eye, label: "FLAT" },
                { id: "context", icon: Maximize2, label: "CONTEXT" },
              ].map(({ id, icon: Icon, label }) => (
                <Button
                  key={id}
                  variant={viewMode === id ? "default" : "ghost"}
                  size="sm"
                  className={`font-light text-xs ${
                    viewMode === id ? "bg-white text-black" : "text-gray-400 hover:text-white hover:bg-gray-800"
                  }`}
                  onClick={() => setViewMode(id as any)}
                >
                  <Icon className="w-3 h-3 mr-1" />
                  {label}
                </Button>
              ))}
            </div>
          </div>

          {/* Animation Controls */}
          <div className="absolute top-6 right-6 z-10">
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <RotateCcw className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Main Viewport */}
          <div className="h-full flex items-center justify-center p-12 cursor-crosshair" onClick={handleViewportClick}>
            <div className={`relative transition-all duration-1000 ${isAnimating ? "animate-pulse scale-105" : ""}`}>
              <div className="relative w-96 h-64 transform perspective-1000 rotate-x-12 rotate-y-12">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Material+Preview"
                  alt="Material Preview"
                  fill
                  className="object-cover rounded-lg shadow-2xl"
                  style={{
                    filter: `brightness(${config.lighting.intensity}%) hue-rotate(${config.lighting.warmth * 3.6}deg)`,
                  }}
                />

                {/* Dimension Labels */}
                <div className="absolute -top-8 left-0 right-0 flex justify-center">
                  <Badge className="bg-black/80 text-white text-xs font-light border-gray-600">
                    {config.dimensions.width}mm
                  </Badge>
                </div>
                <div className="absolute top-0 bottom-0 -left-12 flex items-center">
                  <Badge className="bg-black/80 text-white text-xs font-light border-gray-600 transform -rotate-90">
                    {config.dimensions.height}mm
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Comment Input Modal */}
          {commentPosition && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-30">
              <Card className="bg-gray-900 border-gray-700 w-96">
                <div className="p-6">
                  <h3 className="text-lg font-light text-white mb-4">Add Comment</h3>
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Share your thoughts..."
                    className="w-full h-24 bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white placeholder-gray-400 resize-none focus:outline-none focus:border-gray-600"
                    autoFocus
                  />
                  <div className="flex gap-2 mt-4">
                    <Button
                      size="sm"
                      className="bg-white text-black hover:bg-gray-200 font-light"
                      onClick={() => addComment(newComment, commentPosition)}
                      disabled={!newComment.trim()}
                    >
                      <Send className="w-3 h-3 mr-2" />
                      POST
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-gray-400 hover:text-white hover:bg-gray-800 font-light"
                      onClick={() => {
                        setCommentPosition(null)
                        setNewComment("")
                        setIsAddingComment(false)
                      }}
                    >
                      CANCEL
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Material Info Overlay */}
          <div className="absolute bottom-6 left-6 right-6">
            <Card className="bg-black/80 border-gray-700 backdrop-blur-sm">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-light text-white mb-2 tracking-wide">
                      {materials[config.category].find((m) => m.id === config.material)?.name}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span>
                        {
                          (finishes[config.material as keyof typeof finishes] || []).find((f) => f.id === config.finish)
                            ?.name
                        }{" "}
                        Finish
                      </span>
                      <span>•</span>
                      <span>
                        {config.dimensions.width} × {config.dimensions.height}mm
                      </span>
                      <span>•</span>
                      <span>{environments.find((e) => e.id === config.environment)?.name} Environment</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-600 text-white hover:bg-gray-800 font-light bg-transparent"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      EXPORT
                    </Button>
                    <Button size="sm" className="bg-white text-black hover:bg-gray-200 font-light">
                      CONFIGURE
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Right Panel - Material Library */}
        <CollaborationPanel
          comments={comments}
          collaborators={collaborators}
          activities={activities}
          onResolveComment={resolveComment}
          onAddReply={(commentId, content) => {
            // Add reply logic
            const reply: Comment = {
              id: Date.now().toString(),
              userId: "1",
              userName: "Sarah Chen",
              userAvatar: "/placeholder.svg?height=32&width=32",
              content,
              timestamp: "now",
              resolved: false,
              replies: [],
            }
            setComments((prev) =>
              prev.map((comment) =>
                comment.id === commentId ? { ...comment, replies: [...comment.replies, reply] } : comment,
              ),
            )
          }}
          onInviteCollaborator={inviteCollaborator}
        />
      </div>
    </div>
  )
}
