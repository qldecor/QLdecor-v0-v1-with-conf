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

const keywordsByLocale: Record<string, string[]> = {
  pl: [
    "QLdecor",
    "uchwyty meblowe",
    "uchwyty aluminiowe",
    "blaty stalowe",
    "płyty meblowe",
    "płyty dekoracyjne",
    "MetaLux",
    "WoodSense",
    "ColorPro",
    "meble na wymiar",
    "meble modułowe",
    "meble premium",
    "luksusowe wnętrza",
    "komponenty meblowe"
  ],
  en: [
    "QLdecor",
    "furniture handles",
    "aluminium handles",
    "steel countertops",
    "decorative panels",
    "furniture panels",
    "MetaLux",
    "WoodSense",
    "ColorPro",
    "custom furniture",
    "modular furniture",
    "premium furniture",
    "luxury interiors",
    "furniture components"
  ],
  de: [
    "QLdecor",
    "Möbelgriffe",
    "Aluminium Griffe",
    "Stahlarbeitsplatten",
    "Dekorplatten",
    "Möbelplatten",
    "MetaLux",
    "WoodSense",
    "ColorPro",
    "Maßmöbel",
    "modulare Möbel",
    "Premium Möbel",
    "Luxus Inneneinrichtung",
    "Möbelkomponenten"
  ],
  fr: [
    "QLdecor",
    "poignées de meubles",
    "poignées en aluminium",
    "plans de travail en acier",
    "panneaux décoratifs",
    "panneaux de meubles",
    "MetaLux",
    "WoodSense",
    "ColorPro",
    "meubles sur mesure",
    "meubles modulaires",
    "meubles premium",
    "intérieurs de luxe",
    "composants de meubles"
  ]
};

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    pl: "QLdecor – Meble Premium na Wymiar i Modułowe. Ekskluzywne komponenty meblowe.",
    en: "QLdecor – Premium Custom & Modular Furniture. Exclusive Furniture Components.",
    de: "QLdecor – Premium Maß- & Modularmöbel. Exklusive Möbelkomponenten.",
    fr: "QLdecor – Meubles Premium Sur Mesure & Modulaires. Composants de Meubles Exclusifs."
  };

  const descriptions: Record<string, string> = {
    pl: "QLdecor łączy innowacyjne materiały z ekskluzywnym designem. Oferujemy meble na wymiar i modułowe produkowane w oparciu o nasze materiały: płyty dekoracyjne MetaLux i WoodSense, blaty stalowe oraz uchwyty meblowe – tworząc rozwiązania do nowoczesnych i luksusowych wnętrz.",
    en: "QLdecor combines innovative materials with exclusive design. We offer custom and modular furniture based on our materials: MetaLux and WoodSense decorative panels, steel countertops and furniture handles – creating solutions for modern and luxury interiors.",
    de: "QLdecor verbindet innovative Materialien mit exklusivem Design. Wir bieten Maß- und Modularmöbel auf Basis unserer Materialien: MetaLux- und WoodSense-Dekorplatten, Stahlarbeitsplatten und Möbelgriffe – für moderne und luxuriöse Innenräume.",
    fr: "QLdecor allie matériaux innovants et design exclusif. Nous proposons des meubles sur mesure et modulaires fabriqués à partir de nos matériaux : panneaux décoratifs MetaLux et WoodSense, plans de travail en acier et poignées de meubles – pour des intérieurs modernes et luxueux."
  };

  return {
    title: titles[locale] ?? titles['en'],
    description: descriptions[locale] ?? descriptions['en'],
    keywords: keywordsByLocale[locale] ?? keywordsByLocale['en']
  };
}

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
