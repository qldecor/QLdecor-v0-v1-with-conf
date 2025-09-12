"use client";

import { useTranslations } from "next-intl";
import Navbar from "../components/navbar";

export default function PrivacyPolicyPage() {
  const t = useTranslations("privacyPolicyPage");

  return (
    <main className="bg-white py-24">
      <Navbar/>
      <div className="container mx-auto px-8 max-w-3xl">
        <h1 className="text-3xl font-light text-gray-900 mb-12 tracking-wider">
          {t("title")}
        </h1>

        <section className="space-y-6 text-gray-700 leading-relaxed font-light text-sm">
          <p>{t("intro")}</p>

          <h2 className="text-xl font-light text-gray-900 mt-10 mb-4">
            {t("cookies.title")}
          </h2>
          <p>{t("cookies.content1")}</p>
          <p>{t("cookies.content2")}</p>

          <h2 className="text-xl font-light text-gray-900 mt-10 mb-4">
            {t("rights.title")}
          </h2>
          <p>{t("rights.content")}</p>
        </section>
      </div>
    </main>
  );
}
