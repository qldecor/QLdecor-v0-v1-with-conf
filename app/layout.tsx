import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LUXCRAFT - Premium Furniture Components & Materials",
  description:
    "Crafting excellence in furniture materials. Premium stainless steel table tops, steel furniture fronts, and furniture boards for luxury furniture manufacturing.",
  keywords:
    "luxury furniture, stainless steel table tops, furniture components, premium materials, furniture manufacturing",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
