import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import {NextIntlClientProvider} from 'next-intl';

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LUXCRAFT - Premium Furniture Components & Materials",
  description:
    "Crafting excellence in furniture materials. Premium stainless steel table tops, steel furniture fronts, and furniture boards for luxury furniture manufacturing.",
  keywords:
    "luxury furniture, stainless steel table tops, furniture components, premium materials, furniture manufacturing",
    generator: 'v0.dev'
}

// export function generateStaticParams() {
//   return [{ locale: 'pl' }, { locale: 'en' }];
// }


export default function RootLayout({ children, params }: { children: React.ReactNode, params: { locale: string } }) {
  return (
    <html lang={params.locale}>
      <body className={inter.className}>
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
