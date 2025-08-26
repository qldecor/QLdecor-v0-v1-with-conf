import type React from "react"
import type { Metadata } from "next"
import {notFound} from 'next/navigation';
import {setRequestLocale} from 'next-intl/server';
import { Inter } from "next/font/google"
import "../globals.css"
import {NextIntlClientProvider, hasLocale, useMessages} from 'next-intl';
import {routing} from '@/i18n/routing';

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LUXCRAFT - Premium Furniture Components & Materials",
  description:
    "Crafting excellence in furniture materials. Premium stainless steel table tops, steel furniture fronts, and furniture boards for luxury furniture manufacturing.",
  keywords:
    "luxury furniture, stainless steel table tops, furniture components, premium materials, furniture manufacturing",
    generator: 'v0.dev'
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}



export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params;
}) {
  const { locale } = await params;
  // const messages = useMessages();
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

    setRequestLocale(locale);

  return (
    <html lang={locale}>
      
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
