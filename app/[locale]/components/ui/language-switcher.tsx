"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Globe } from "lucide-react";

const LANGS = [
  { code: "pl", label: "PL" },
  { code: "en", label: "EN" },
];

export default function LanguageSwitcher({ mobile = false }: { mobile?: boolean }) {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [open, setOpen] = useState(false);

  const changeLanguage = (newLocale: string) => {
    router.push(`/${newLocale}${pathname.replace(/^\/(en|pl)/, "")}`);
    setOpen(false);
  };

  if (mobile) {
    // 📱 MOBILE VERSION – toggle on click
    return (
      <div className="border-t pt-4">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-between w-full text-gray-700 hover:text-gray-900 uppercase tracking-wide py-2"
        >
          <span className="flex items-center space-x-2">
            <Globe size={16} className="text-gray-600" />
            <span>{locale.toUpperCase()}</span>
          </span>
          <span className={`transform transition-transform ${open ? "rotate-180" : ""}`}>
            ▼
          </span>

        </button>


        {open && (
          <div className="mt-2 pl-6 space-y-2">
            {LANGS.filter((lang) => lang.code !== locale).map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`block text-left w-full text-sm uppercase ${
                  locale === lang.code
                    ? "text-gray-900 font-medium"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  // 💻 DESKTOP VERSION – hover dropdown
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="px-2 py-1 text-gray-700 hover:text-gray-900 uppercase tracking-wide flex items-center space-x-1"
      >
        <Globe size={16} className="text-gray-600" />
        <span>{locale.toUpperCase()}</span>
      </button>

      {open && (
        <>
          {/* hover bridge */}
          <div className="absolute top-full left-0 w-full h-4 bg-transparent"></div>

          <div className="absolute right-0 top-full mt-4 bg-white shadow-sm z-50">
            {LANGS.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`block cursor-pointer w-full text-left px-4 py-2 text-sm uppercase ${
                  locale === lang.code
                    ? "text-gray-900 font-medium"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
