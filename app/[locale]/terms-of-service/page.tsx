"use client";

import { useTranslations } from "next-intl";
import Navbar from "../components/navbar";

export default function TermsPage() {
  const t = useTranslations("termsOfServicePage");

  return (
    <main className="bg-white py-24">
      <Navbar />
      <div className="container mx-auto px-8 max-w-3xl">
        <h1 className="text-3xl font-light text-gray-900 mb-12 tracking-wider">
          {t("title")}
        </h1>

        <section className="space-y-6 text-gray-700 leading-relaxed font-light text-sm">
          <p>{t("intro")}</p>

          <h2 className="text-xl font-light text-gray-900 mt-10 mb-4">
            {t("use.title")}
          </h2>
          <p>{t("use.content")}</p>

          <h2 className="text-xl font-light text-gray-900 mt-10 mb-4">
            {t("content.title")}
          </h2>
          <p>{t("content.content")}</p>

          <h2 className="text-xl font-light text-gray-900 mt-10 mb-4">
            {t("presentation.title")}
          </h2>
          <p>{t("presentation.content")}</p>

          <h2 className="text-xl font-light text-gray-900 mt-10 mb-4">
            {t("liability.title")}
          </h2>
          <p>{t("liability.content")}</p>

          <h2 className="text-xl font-light text-gray-900 mt-10 mb-4">
            {t("final.title")}
          </h2>
          <p>{t("final.content")}</p>
        </section>
      </div>
    </main>
  );
}
