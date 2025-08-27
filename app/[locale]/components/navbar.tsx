// src/components/Navbar.tsx
'use client';

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations("common"); // expects Common.products, Common.collections, etc.
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  function handleClose() {
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 200); // time = the same as in CSS animation
  }


  return (
<nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50">
  <div className="relative px-8 lg:px-16 xl:px-24 2xl:px-32 py-6 relative">
    <div className="flex items-center justify-between">
      <div className="text-xl font-light tracking-wider text-gray-900">
        LUXCRAFT
      </div>
          <div className="hidden md:flex items-center space-x-12 text-sm font-light">
          <div
            className="group"
            onMouseEnter={() => setOpen(true)}
            
          >
            {/* Kliknięcie → /products */}
            <Link
              href="/products"
              className="text-gray-700 hover:text-gray-900 transition-colors tracking-wide"
            >
              PRODUCTS
            </Link>

            {/* Mega menu */}
            {open && (
              <div className={`absolute left-0 top-full w-screen bg-white shadow-md border-t ${closing ? "animate-dropdown-out" : "animate-dropdown-in"}`} onMouseLeave={() => handleClose()}>
                <div className="mx-auto max-w-7xl px-12 py-10 grid grid-cols-4 gap-12 text-sm">
                  {/* Płyty meblowe */}
                  <div>
                    <h3 className="font-semibold mb-4 uppercase">Płyty Meblowe</h3>
                    <ul className="space-y-2">
                      <li><Link href="/products/boards/metalux">MetaLux</Link></li>
                      <li><Link href="/products/boards/colorpro">ColorPro</Link></li>
                      <li><Link href="/products/boards/woodsense">WoodSense</Link></li>
                    </ul>
                  </div>

                  {/* Uchwyty */}
                  <div>
                    <h3 className="font-semibold mb-4 uppercase">Uchwyty Meblowe</h3>
                    <ul className="space-y-2">
                      <li><Link href="/products/handles">Wszystkie</Link></li>
                    </ul>
                  </div>

                  {/* Wieszaki */}
                  <div>
                    <h3 className="font-semibold mb-4 uppercase">Wieszaki</h3>
                    <ul className="space-y-2">
                      <li><Link href="/products/hooks">Wszystkie</Link></li>
                    </ul>
                  </div>

                  {/* Meble */}
                  <div>
                    <h3 className="font-semibold mb-4 uppercase">Meble</h3>
                    <ul className="space-y-2">
                      <li><Link href="/products/furniture">Wszystkie</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
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