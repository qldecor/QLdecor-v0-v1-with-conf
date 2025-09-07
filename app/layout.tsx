import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: "QLdecor – Ekskluzywne komponenty meblowe i meble na wymiar",
  description:
    "QLdecor łączy innowacyjne materiały z ekskluzywnym designem. Oferujemy aluminiowe uchwyty meblowe, płyty dekoracyjne MetaLux i WoodSense, blaty stalowe oraz meble na wymiar – tworząc rozwiązania do nowoczesnych i luksusowych wnętrz.",
  keywords: [
    "QLdecor",
    "uchwyty meblowe",
    "blaty stalowe",
    "płyty meblowe",
    "MetaLux",
    "WoodSense",
    "ColorPro",
    "meble na wymiar",
    "meble premium"
  ],
  generator: "Next.js",
  openGraph: {
    title: "QLdecor – Premium Furniture Components",
    description:
      "Ekskluzywne uchwyty, płyty, blaty stalowe i meble na wymiar od QLdecor.",
    url: "https://qldecor.shop",
    siteName: "QLdecor",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "https://qldecor.shop/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "QLdecor – Premium Furniture"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
