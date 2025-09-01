// src/components/Navbar.tsx
'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";

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
                      <h3 className="font-semibold mb-4 uppercase">{t('boards')}</h3>
                      <ul className="space-y-2">
                        <li><Link href="/products/boards/metalux">MetaLux</Link></li>
                        <li><Link href="/products/boards/colorpro">ColorPro</Link></li>
                        <li><Link href="/products/boards/woodsense">WoodSense</Link></li>
                      </ul>
                    </div>

                    {/* Uchwyty */}
                    <div className="navbar-slide-link">
<Link
  href="/products/handles"
  className="linksss group relative z-10 block px-1 py-1 text-gray-700 font-light tracking-wide transition-colors duration-300 hover:text-gray-900 uppercase"
>
  {/* <span className="navbar-slide-link"> */}
    <span className="main-text w-fit px-1 py-1 text-gray-700 font-light tracking-wide 
             transition-colors duration-300 hover:text-gray-900
             after:content-[''] after:absolute after:right-0 after:-bottom-0.5 
             after:w-0 after:h-[1px] after:bg-black/30
             after:transition-all after:duration-500 after:ease-in-out
             hover:after:w-full uppercase">{t('handles')}</span>
    <span className="see-all ">{t('see-all')}</span>
  {/* </span> */}
</Link>
                    </div>

                    {/* Wieszaki */}
                    <div>
                      <Link className="relative px-1 py-1 text-gray-700 font-light tracking-wide 
             transition-colors duration-300 hover:text-gray-900
             after:content-[''] after:absolute after:left-0 after:-bottom-0.5 
             after:w-0 after:h-[1px] after:bg-black/30
             after:transition-all after:duration-500 after:ease-in-out
             hover:after:w-full uppercase" href="/products/handles">{t('hooks')}</Link>
                    </div>

                    {/* Meble */}
                    <div>
                      <Link className="relative px-1 py-1 text-gray-700 font-light tracking-wide 
             transition-colors duration-300 hover:text-gray-900
             after:content-[''] after:absolute after:left-0 after:-bottom-0.5 
             after:w-0 after:h-[1px] after:bg-black/30
             after:transition-all after:duration-500 after:ease-in-out
             hover:after:w-full uppercase" href="/products/handles">{t('furniture')}</Link>
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
            <Link href="/products" onClick={() => setMobileOpen(false)}>
              {t("products").toUpperCase()}
            </Link>
            <Link href="/collections" onClick={() => setMobileOpen(false)}>
              {t("collections").toUpperCase()}
            </Link>
            <Link href="/projects" onClick={() => setMobileOpen(false)}>
              {t("projects").toUpperCase()}
            </Link>
            <Link href="/about" onClick={() => setMobileOpen(false)}>
              {t("about").toUpperCase()}
            </Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)}>
              {t("contact").toUpperCase()}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
