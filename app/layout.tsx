import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: "QLdecor – Meble Premium na Wymiar i Modułowe. Ekskluzywne komponenty meblowe.",
  description:
    "QLdecor łączy innowacyjne materiały z ekskluzywnym designem. Oferujemy meble na wymiar i modułowe produkowane w oparciu o nasze materiały: płyty dekoracyjne MetaLux i WoodSense, blaty stalowe oraz uchwyty meblowe – tworząc rozwiązania do nowoczesnych i luksusowych wnętrz.",
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
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KG7FSHLS');`,
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KG7FSHLS"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
