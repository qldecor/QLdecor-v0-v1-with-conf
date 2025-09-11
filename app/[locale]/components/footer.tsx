"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="text-xl font-light tracking-wider text-gray-900 mb-8">
              {t("footer.brand")}
            </div>
            <p className="text-gray-600 font-light text-sm leading-relaxed">
              {t("footer.slogan")}
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-light text-gray-900 mb-6 tracking-wide">
              {t("footer.products")}
            </h4>
            <ul className="space-y-3 text-sm font-light text-gray-600">
              <li>
                <Link
                  href="/products/steel-tables"
                  className="hover:text-gray-900 transition-colors"
                >
                  {t("footer.links.steel-tables")}
                </Link>
              </li>
              <li>
                <Link
                  href="/products/steel-fronts"
                  className="hover:text-gray-900 transition-colors"
                >
                  {t("footer.links.steel-fronts")}
                </Link>
              </li>
              <li>
                <Link
                  href="/products/handles"
                  className="hover:text-gray-900 transition-colors"
                >
                  {t("footer.links.furniture-handles")}
                </Link>
              </li>
              <li>
                <Link
                  href="/products/boards"
                  className="hover:text-gray-900 transition-colors"
                >
                  {t("footer.links.furniture-boards")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-light text-gray-900 mb-6 tracking-wide">
              {t("footer.collections")}
            </h4>
            <ul className="space-y-3 text-sm font-light text-gray-600">
              <li>
                <Link
                  href="/products/boards/metalux"
                  className="hover:text-gray-900 transition-colors"
                >
                  {t("footer.links.metalux")}
                </Link>
              </li>
              <li>
                <Link
                  href="/products/boards/woodsense"
                  className="hover:text-gray-900 transition-colors"
                >
                  {t("footer.links.woodsense")}
                </Link>
              </li>
              <li>
                <Link
                  href="/products/boards/colorpro"
                  className="hover:text-gray-900 transition-colors"
                >
                  {t("footer.links.colorpro")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-light text-gray-900 mb-6 tracking-wide">
              {t("footer.connect")}
            </h4>
            <ul className="space-y-3 text-sm font-light text-gray-600">
              <li>
                <Link
                  href="/custom-furniture"
                  className="hover:text-gray-900 transition-colors"
                >
                  {t("footer.links.custom-furniture")}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-gray-900 transition-colors"
                >
                  {t("footer.links.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-gray-900 transition-colors"
                >
                  {t("footer.links.contact")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-100 mt-12 pt-8 text-center">
          <p className="text-gray-600 font-light text-sm">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
