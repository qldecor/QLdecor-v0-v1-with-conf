import type React from "react";
import type { Metadata } from "next";
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Inter } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import Footer from "@/app/[locale]/components/footer";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "QLdecor – Meble Premium na Wymiar i Modułowe. Ekskluzywne komponenty meblowe.",
  description:
    "QLdecor łączy innowacyjne materiały z ekskluzywnym designem. Oferujemy meble na wymiar i modułowe produkowane w oparciu o nasze materiały: płyty dekoracyjne MetaLux i WoodSense, blaty stalowe oraz uchwyty meblowe – tworząc rozwiązania do nowoczesnych i luksusowych wnętrz.",
  keywords: [
    "QLdecor",
    "komponenty meblowe",
    "uchwyty aluminiowe",
    "uchwyty meblowe",
    "blaty stalowe",
    "płyty meblowe",
    "MetaLux",
    "WoodSense",
    "ColorPro",
    "meble na wymiar",
    "luksusowe wnętrza"
  ]
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale}>
          {children}
          <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
