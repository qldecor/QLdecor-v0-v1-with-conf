// src/components/Navbar.tsx
'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "@/app/[locale]/components/ui/language-switcher";

export default function Navbar() {
  const t = useTranslations("common"); // expects Common.products, Common.collections, etc.
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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

          <Link href="/" className="flex items-center">
            <Image
              src="/logo-qldecor.png"   // plik w public/logo.png
              alt="QLdecor Logo"
              width={150}
              height={50}
              priority
              className="drop-shadow-[0_0_3px_rgba(0,0,0,0.3)]"
            />
          </Link>
          <div className="hidden md:flex items-center space-x-12 text-sm font-light">
            <div
              className="group"
              onMouseEnter={() => setOpen(true)}

            >
              {/* Kliknięcie → /products */}
              <Link
                href="/products"
                className="px-2 py-1 text-gray-700 transition duration-200 hover:text-gray-900 hover:drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)]"
              >
                {t('products').toUpperCase()}
              </Link>

              {/* Mega menu */}
              {open && (
                <div className={`absolute left-0 top-full w-screen bg-white/90 backdrop-blur-sm shadow-md border-t ${closing ? "animate-dropdown-out" : "animate-dropdown-in"}`} onMouseLeave={() => handleClose()}>
                  <div className="mx-auto max-w-7xl px-12 py-10 grid grid-cols-4 gap-12 text-sm">
                    {/* Płyty meblowe */}
                    <div>
                      <div className="navbar-slide-link w-fit">
                        <Link
                          href="/products/boards"
                          className="linksss group relative z-10 block px-1 py-1 text-gray-700 font-light tracking-wide transition-colors duration-300 hover:text-gray-900 uppercase"
                        >
                          {/* <span className="navbar-slide-link"> */}
                          <span className="main-text">{t('boards')}</span>
                          <span className="see-all">{t('see-all')}</span>
                          {/* </span> */}
                        </Link>
                      </div>
                      <ul className="space-y-2 px-1 py-2">
                        <li><Link className="relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[1px] after:bg-black/30 after:transition-all after:duration-500 after:ease-in-out hover:after:w-full" href="/products/boards/metalux">MetaLux</Link></li>
                        <li><Link className="relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[1px] after:bg-black/30 after:transition-all after:duration-500 after:ease-in-out hover:after:w-full" href="/products/boards/colorpro">ColorPro</Link></li>
                        <li><Link className="relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[1px] after:bg-black/30 after:transition-all after:duration-500 after:ease-in-out hover:after:w-full" href="/products/boards/woodsense">WoodSense</Link></li>
                      </ul>
                    </div>

                    {/* Uchwyty */}
                    <div className="navbar-slide-link w-fit">
                      <Link
                        href="/products/handles"
                        className="linksss group relative z-10 block px-1 py-1 text-gray-700 font-light tracking-wide transition-colors duration-300 hover:text-gray-900 uppercase"
                      >
                        {/* <span className="navbar-slide-link"> */}
                        <span className="main-text">{t('handles')}</span>
                        <span className="see-all">{t('see-all')}</span>
                        {/* </span> */}
                      </Link>
                    </div>

                    {/* Blaty stalowe */}
                    <div className="navbar-slide-link w-fit">
                      <Link
                        href="/products/steel-tables"
                        className="linksss group relative z-10 block px-1 py-1 text-gray-700 font-light tracking-wide transition-colors duration-300 hover:text-gray-900 uppercase"
                      >
                        <span className="main-text">{t("steel-tables")}</span>
                        <span className="see-all">{t("see-all")}</span>
                      </Link>
                    </div>

                    {/* Wieszaki */}
                    {/* <div>
                      <Link className="relative px-1 py-1 text-gray-700 font-light tracking-wide 
             transition-colors duration-300 hover:text-gray-900
             after:content-[''] after:absolute after:left-0 after:-bottom-0.5 
             after:w-0 after:h-[1px] after:bg-black/70
             after:transition-all after:duration-500 after:ease-in-out
             hover:after:w-full uppercase" href="/products/handles">{t('hooks')}</Link>
                    </div> */}

                    {/* Meble */}
                    {/* <div>
                      <Link className="relative px-1 py-1 text-gray-700 font-light tracking-wide 
             transition-colors duration-300 hover:text-gray-900
             after:content-[''] after:absolute after:left-0 after:-bottom-0.5 
             after:w-0 after:h-[1px] after:bg-black/70
             after:transition-all after:duration-500 after:ease-in-out
             hover:after:w-full uppercase" href="/products/handles">{t('furniture')}</Link>
                    </div> */}
                  </div>
                </div>
              )}
            </div>
            <Link
              href="/custom-furniture"
              className="text-gray-700 hover:text-gray-900 transition-colors tracking-wide"
            >
              {t("custom-furniture").toUpperCase()}
            </Link>
            {/* <Link
              href="/collections"
              className="text-gray-700 hover:text-gray-900 transition-colors tracking-wide"
            >
              {t("collections").toUpperCase()}
            </Link> */}
            {/* <Link
              href="/projects"
              className="text-gray-700 hover:text-gray-900 transition-colors tracking-wide"
            >
              {t("projects").toUpperCase()}
            </Link> */}
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
            {/* Language selector */}
            <LanguageSwitcher />
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}

      {mobileOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <div className="flex flex-col px-8 py-6 space-y-4 text-sm font-light">

            {/* Products – rozwijane */}
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer text-gray-700 hover:text-gray-900 uppercase py-2">
                {t("products")}
                <span className="ml-2 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 pl-4 space-y-4 text-gray-700">
                <Link
                  href="/products/boards"
                  onClick={() => setMobileOpen(false)}
                  className="font-medium block"
                >
                  {t("boards")}
                </Link>

                <ul className="pl-4 space-y-3 border-l border-gray-200">
                  <li>
                    <Link
                      href="/products/boards/metalux"
                      onClick={() => setMobileOpen(false)}
                      className="block text-gray-600 hover:text-gray-900"
                    >
                      MetaLux
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/boards/colorpro"
                      onClick={() => setMobileOpen(false)}
                      className="block text-gray-600 hover:text-gray-900"
                    >
                      ColorPro
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/boards/woodsense"
                      onClick={() => setMobileOpen(false)}
                      className="block text-gray-600 hover:text-gray-900"
                    >
                      WoodSense
                    </Link>
                  </li>
                </ul>

                <Link
                  href="/products/handles"
                  onClick={() => setMobileOpen(false)}
                  className="font-medium block"
                >
                  {t("handles")}
                </Link>
                <Link
                  href="/products/steel-tables"
                  onClick={() => setMobileOpen(false)}
                  className="font-medium block"
                >
                  {t("steel-tables")}
                </Link>
              </div>
            </details>

            <Link href="/custom-furniture" onClick={() => setMobileOpen(false)}
              className="flex justify-between items-center text-gray-700 hover:text-gray-900 uppercase  tracking-wide py-3">
              {t("custom-furniture")}
            </Link>

            <Link href="/about" onClick={() => setMobileOpen(false)}
              className="flex justify-between items-center text-gray-700 hover:text-gray-900 uppercase tracking-wide py-3">
              {t("about")}
            </Link>

            <Link href="/contact" onClick={() => setMobileOpen(false)}
              className="flex justify-between items-center text-gray-700 hover:text-gray-900 uppercase tracking-wide py-3">
              {t("contact")}
            </Link>
            <LanguageSwitcher mobile />
          </div>
        </div>
      )}

    </nav>
  );
}
