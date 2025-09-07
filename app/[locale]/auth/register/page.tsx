"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/app/[locale]/components/ui/button"
import { Input } from "@/app/[locale]/components/ui/input"
import { Card } from "@/app/[locale]/components/ui/card"
import { ArrowLeft, Eye, EyeOff, Building2, User } from "lucide-react"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [accountType, setAccountType] = useState<"individual" | "business">("business")
  const [isLoading, setIsLoading] = useState(false)

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate registration process
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
    // Redirect to dashboard
    window.location.href = "/dashboard"
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
            <Link href="/auth/login" className="text-sm font-light tracking-wide text-gray-700 hover:text-gray-900">
              SIGN IN
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
            <h2 className="text-3xl font-light mb-4 tracking-wide">JOIN LUXCRAFT</h2>
            <p className="font-light leading-relaxed opacity-90">
              Create your professional account to access premium materials, save configurations, and collaborate with
              your team.
            </p>
          </div>
        </div>

        {/* Right Side - Registration Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <div className="mb-12">
              <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900 mb-8 text-sm font-light">
                <ArrowLeft className="w-4 h-4 mr-2" />
                BACK TO HOME
              </Link>
              <h1 className="text-3xl font-light text-gray-900 mb-4 tracking-wider">CREATE ACCOUNT</h1>
              <p className="text-gray-600 font-light leading-relaxed">
                Join our community of furniture professionals and designers.
              </p>
            </div>

            {/* Account Type Selection */}
            <div className="mb-8">
              <h3 className="text-sm font-light text-gray-900 mb-4 tracking-wide">ACCOUNT TYPE</h3>
              <div className="grid grid-cols-2 gap-4">
                <Card
                  className={`p-4 cursor-pointer transition-all border ${
                    accountType === "business" ? "border-gray-900 bg-gray-50" : "border-gray-200 hover:border-gray-400"
                  }`}
                  onClick={() => setAccountType("business")}
                >
                  <div className="text-center">
                    <Building2 className="w-6 h-6 mx-auto mb-2 text-gray-700" />
                    <div className="text-sm font-light text-gray-900">BUSINESS</div>
                  </div>
                </Card>
                <Card
                  className={`p-4 cursor-pointer transition-all border ${
                    accountType === "individual"
                      ? "border-gray-900 bg-gray-50"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                  onClick={() => setAccountType("individual")}
                >
                  <div className="text-center">
                    <User className="w-6 h-6 mx-auto mb-2 text-gray-700" />
                    <div className="text-sm font-light text-gray-900">INDIVIDUAL</div>
                  </div>
                </Card>
              </div>
            </div>

            <form onSubmit={handleRegister} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="FIRST NAME"
                  required
                  className="border-0 border-b border-gray-200 rounded-none px-0 py-4 font-light tracking-wide placeholder:text-gray-400 focus:border-gray-900"
                />
                <Input
                  placeholder="LAST NAME"
                  required
                  className="border-0 border-b border-gray-200 rounded-none px-0 py-4 font-light tracking-wide placeholder:text-gray-400 focus:border-gray-900"
                />
              </div>

              <Input
                type="email"
                placeholder="EMAIL ADDRESS"
                required
                className="border-0 border-b border-gray-200 rounded-none px-0 py-4 font-light tracking-wide placeholder:text-gray-400 focus:border-gray-900"
              />

              {accountType === "business" && (
                <>
                  <Input
                    placeholder="COMPANY NAME"
                    required
                    className="border-0 border-b border-gray-200 rounded-none px-0 py-4 font-light tracking-wide placeholder:text-gray-400 focus:border-gray-900"
                  />
                  <Input
                    placeholder="JOB TITLE"
                    className="border-0 border-b border-gray-200 rounded-none px-0 py-4 font-light tracking-wide placeholder:text-gray-400 focus:border-gray-900"
                  />
                </>
              )}

              <Input
                placeholder="PHONE NUMBER"
                className="border-0 border-b border-gray-200 rounded-none px-0 py-4 font-light tracking-wide placeholder:text-gray-400 focus:border-gray-900"
              />

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

              <div className="space-y-3 text-sm font-light text-gray-600">
                <label className="flex items-start">
                  <input type="checkbox" required className="mr-3 mt-1" />
                  <span>
                    I agree to the{" "}
                    <Link href="/terms" className="text-gray-900 hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-gray-900 hover:underline">
                      Privacy Policy
                    </Link>
                  </span>
                </label>
                <label className="flex items-start">
                  <input type="checkbox" className="mr-3 mt-1" />
                  <span>I would like to receive updates about new materials and collections</span>
                </label>
              </div>

              <Button type="submit" disabled={isLoading} className="w-full font-light tracking-wider py-4">
                {isLoading ? "CREATING ACCOUNT..." : "CREATE ACCOUNT"}
              </Button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600 font-light text-sm">
                Already have an account?{" "}
                <Link href="/auth/login" className="text-gray-900 hover:underline">
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
