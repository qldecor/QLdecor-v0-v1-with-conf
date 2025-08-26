// src/components/Navbar.tsx
'use client';

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations("common"); // expects Common.products, Common.collections, etc.

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="text-xl font-light tracking-wider text-gray-900">
            LUXCRAFT
          </div>
          <div className="hidden md:flex items-center space-x-12 text-sm font-light">
            <Link
              href="/products"
              className="text-gray-700 hover:text-gray-900 transition-colors tracking-wide"
            >
              {t("products").toUpperCase()}
            </Link>
            <Link
              href="/collections"
              className="text-gray-700 hover:text-gray-900 transition-colors tracking-wide"
            >
              {t("collections").toUpperCase()}
            </Link>
            <Link
              href="/projects"
              className="text-gray-700 hover:text-gray-900 transition-colors tracking-wide"
            >
              {t("projects").toUpperCase()}
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-gray-900 transition-colors tracking-wide"
            >
              {t("about").toUpperCase()}
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-gray-900 transition-colors tracking-wide"
            >
              {t("contact").toUpperCase()}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}