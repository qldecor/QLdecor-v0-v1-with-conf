"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/app/[locale]/components/ui/button"
import { Input } from "@/app/[locale]/components/ui/input"
import { Card, CardContent } from "@/app/[locale]/components/ui/card"
import { ArrowLeft, Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate login process
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    // Redirect to configurator or dashboard
    window.location.href = "/configurator"
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-light tracking-wider text-gray-900">
              QLdecor
            </Link>
            <Link href="/auth/register" className="text-sm font-light tracking-wide text-gray-700 hover:text-gray-900">
              CREATE ACCOUNT
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-20 min-h-screen flex">
        {/* Left Side - Hero Image */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <Image
            src="/placeholder.svg?height=1080&width=960"
            alt="Luxury Materials"
            fill
            className="object-cover grayscale"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-16 left-16 text-white max-w-md">
            <h2 className="text-3xl font-light mb-4 tracking-wide">WELCOME BACK</h2>
            <p className="font-light leading-relaxed opacity-90">
              Access your saved configurations, project history, and exclusive material collections.
            </p>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <div className="mb-12">
              <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900 mb-8 text-sm font-light">
                <ArrowLeft className="w-4 h-4 mr-2" />
                BACK TO HOME
              </Link>
              <h1 className="text-3xl font-light text-gray-900 mb-4 tracking-wider">SIGN IN</h1>
              <p className="text-gray-600 font-light leading-relaxed">
                Access your account to manage configurations and projects.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-8">
              <div>
                <Input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  required
                  className="border-0 border-b border-gray-200 rounded-none px-0 py-4 font-light tracking-wide placeholder:text-gray-400 focus:border-gray-900"
                />
              </div>

              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="PASSWORD"
                  required
                  className="border-0 border-b border-gray-200 rounded-none px-0 py-4 pr-10 font-light tracking-wide placeholder:text-gray-400 focus:border-gray-900"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-4 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex items-center justify-between text-sm font-light">
                <label className="flex items-center text-gray-600">
                  <input type="checkbox" className="mr-2" />
                  REMEMBER ME
                </label>
                <Link href="/auth/forgot-password" className="text-gray-600 hover:text-gray-900">
                  FORGOT PASSWORD?
                </Link>
              </div>

              <Button type="submit" disabled={isLoading} className="w-full font-light tracking-wider py-4">
                {isLoading ? "SIGNING IN..." : "SIGN IN"}
              </Button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600 font-light text-sm">
                Don't have an account?{" "}
                <Link href="/auth/register" className="text-gray-900 hover:underline">
                  Create one here
                </Link>
              </p>
            </div>

            {/* Professional Features */}
            <Card className="mt-12 border border-gray-200">
              <CardContent className="p-6">
                <h3 className="font-light text-gray-900 mb-4 tracking-wide">PROFESSIONAL ACCOUNT BENEFITS</h3>
                <ul className="space-y-2 text-sm font-light text-gray-600">
                  <li>• Save unlimited material configurations</li>
                  <li>• Share projects with team members</li>
                  <li>• Access exclusive material collections</li>
                  <li>• Priority technical support</li>
                  <li>• Advanced pricing and availability</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
