// "use client";

import Image from "next/image";
import {Link} from '@/i18n/navigation';
import { Button } from "@/app/[locale]/components/ui/button";
import Navbar from "@/app/[locale]/components/navbar";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("aboutPage");

  function openChat() {
    if (typeof window !== "undefined" && (window as any).Chatway) {
      (window as any).Chatway("open");
    } else {
      console.warn("Chatway widget jeszcze się nie załadował");
    }
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />

      {/* Heritage Hero */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/img/boards/woodsense/_vis/111_22.webp?height=1080&width=1920"
            alt="QLdecor Heritage"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="absolute bottom-32 left-0 right-0">
          <div className="container mx-auto px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wide">
                {t("hero.title")}
              </h1>
              <p className="text-lg text-white/90 font-light leading-relaxed">
                {t("hero.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">
            {t("philosophy.title")}
          </h2>
          <p className="text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
            {t("philosophy.description")}
          </p>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="relative h-[60vh]">
              <Image
                src="/img/boards/visuals/or-2007-gold-furniture.webp?placeholder.svg?height=600&width=800"
                alt="Manufacturing Process"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">
                {t("manufacturing.title")}
              </h2>
              <p className="text-gray-600 font-light leading-relaxed mb-8">
                {t("manufacturing.description")}
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-light text-gray-900 mb-2 tracking-wide">
                    {t("manufacturing.points.precision.title")}
                  </h3>
                  <p className="text-gray-600 font-light text-sm">
                    {t("manufacturing.points.precision.description")}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-light text-gray-900 mb-2 tracking-wide">
                    {t("manufacturing.points.quality.title")}
                  </h3>
                  <p className="text-gray-600 font-light text-sm">
                    {t("manufacturing.points.quality.description")}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-light text-gray-900 mb-2 tracking-wide">
                    {t("manufacturing.points.sustainability.title")}
                  </h3>
                  <p className="text-gray-600 font-light text-sm">
                    {t("manufacturing.points.sustainability.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Global Reach */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">
                {t("global.title")}
              </h2>
              <p className="text-gray-600 font-light leading-relaxed mb-8">
                {t("global.description")}
              </p>
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-light text-gray-900 mb-2">25+</div>
                  <div className="text-sm font-light text-gray-600 tracking-wide">
                    {t("global.stats.years")}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-light text-gray-900 mb-2">500+</div>
                  <div className="text-sm font-light text-gray-600 tracking-wide">
                    {t("global.stats.partners")}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-light text-gray-900 mb-2">40+</div>
                  <div className="text-sm font-light text-gray-600 tracking-wide">
                    {t("global.stats.countries")}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[60vh]">
              <Image
                src="/img/boards/visuals/or-022a-furniture.webp?height=600&width=800"
                alt="Global Presence"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      {/* <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">
              {t("team.title")}
            </h2>
            <p className="text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              {t("team.description")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            {["ceo", "director", "manager"].map((member) => (
              <div key={member} className="text-center">
                <div className="relative h-[40vh] mb-8 grayscale">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt={t(`team.members.${member}.name`)}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-light text-gray-900 mb-2 tracking-wide">
                  {t(`team.members.${member}.name`)}
                </h3>
                <p className="text-sm font-light text-gray-600 tracking-wide">
                  {t(`team.members.${member}.role`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact CTA */}
      <section className="py-32">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">
            {t("cta.title")}
          </h2>
          <p className="text-gray-600 font-light max-w-2xl mx-auto leading-relaxed mb-12">
            {t("cta.description")}
          </p>
          <Button className="font-light tracking-wide">
            <Link href="/contact">
              {t("cta.button")}
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
