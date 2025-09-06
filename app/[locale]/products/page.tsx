import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/[locale]/components/ui/button";
import Navbar from "@/app/[locale]/components/navbar";
import { useTranslations } from "next-intl";
import { ScrollButton } from "../components/ui/scroll-button";

export default function ProductsPage() {
  const t = useTranslations("productsPage");

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Navigation */}
      <Navbar />

      {/* Stainless Steel Tables Hero */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/stal_14.jpeg?height=1080&width=1920"
            alt={t("hero.title")}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* gradient from bottom */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-32 left-0 right-0">
          <div className="container mx-auto px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wide">
                {t("hero.title")}
              </h1>
              <p className="text-lg text-white/90 font-light leading-relaxed mb-8">
                {t("hero.description")}
              </p>
              <ScrollButton
                targetId="technical-excellence"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent font-light tracking-wide"
              >
                {t("hero.button")}
              </ScrollButton>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Excellence */}
      <section id="technical-excellence" className="py-32 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">
                {t("technicalExcellence.title")}
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-light text-gray-900 mb-3 tracking-wide">
                    {t("technicalExcellence.points.grade.title")}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {t("technicalExcellence.points.grade.text")}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-light text-gray-900 mb-3 tracking-wide">
                    {t("technicalExcellence.points.finishing.title")}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {t("technicalExcellence.points.finishing.text")}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-light text-gray-900 mb-3 tracking-wide">
                    {t("technicalExcellence.points.dimensions.title")}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {t("technicalExcellence.points.dimensions.text")}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[60vh]">
              <Image
                src="/img/steel/table/stal-8-scaled.webp?height=600&width=800"
                alt="Steel Surface Detail"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Steel Fronts */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="relative h-[70vh] mb-16">
            <Image
              src="/img/steel/fronts/stal-kuchania.webp?height=800&width=1600"
              alt={t("steelFronts.title")}
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">
              {t("steelFronts.title")}
            </h2>
            <p className="text-gray-600 font-light max-w-4xl mx-auto leading-relaxed mb-12">
              {t("steelFronts.description")}
            </p>
            <Button variant="outline" className="font-light tracking-wide bg-transparent">
              {t("steelFronts.button")}
            </Button>
          </div>
        </div>
      </section>

      {/* Furniture Handles */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="relative h-[70vh] mb-16">
            <Image
              src="/etsy/img_0889.webp?height=800&width=1600"
              alt={t("handles.title")}
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">
              {t("handles.title")}
            </h2>
            <p className="text-gray-600 font-light max-w-4xl mx-auto leading-relaxed mb-12">
              {t("handles.description")}
            </p>
            <Button variant="outline" className="font-light tracking-wide bg-transparent">
              <Link href="/products/handles">{t("handles.button")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Furniture Boards Overview */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">
              {t("boardsOverview.title")}
            </h2>
            <p className="text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
              {t("boardsOverview.description")}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-16">
            {/* Metalux */}
            <div className="text-center">
              <div className="relative h-[50vh] mb-8 bg-white">
                <Image
                  src="/img/boards/metalux/MLG21001L/MLG21001L_1.webp?height=600&width=400"
                  alt={t("boardsOverview.metalux.title")}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4 tracking-wider">
                {t("boardsOverview.metalux.title")}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                {t("boardsOverview.metalux.description")}
              </p>
              <Button variant="outline" size="sm" className="font-light tracking-wide bg-transparent">
                <Link href="products/boards/metalux">{t("boardsOverview.metalux.button")}</Link>
              </Button>
            </div>

            {/* Woodsense */}
            <div className="text-center">
              <div className="relative h-[50vh] mb-8 bg-white">
                <Image
                  src="/img/boards/woodsense/WS004501M/WS004501M_1.webp?height=600&width=400"
                  alt={t("boardsOverview.woodsense.title")}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4 tracking-wider">
                {t("boardsOverview.woodsense.title")}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                {t("boardsOverview.woodsense.description")}
              </p>
              <Button variant="outline" size="sm" className="font-light tracking-wide bg-transparent">
                <Link href="products/boards/woodsense">{t("boardsOverview.woodsense.button")}</Link>
              </Button>
            </div>

            {/* Colorpro */}
            <div className="text-center">
              <div className="relative h-[50vh] mb-8 bg-white">
                <Image
                  src="/img/boards/colorpro/CPG11001L/CPG11001L_1.jpg?height=600&width=400"
                  alt={t("boardsOverview.colorpro.title")}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4 tracking-wider">
                {t("boardsOverview.colorpro.title")}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                {t("boardsOverview.colorpro.description")}
              </p>
              <Button variant="outline" size="sm" className="font-light tracking-wide bg-transparent">
                <Link href="products/boards/colorpro">{t("boardsOverview.colorpro.button")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">
            {t("cta.title")}
          </h2>
          <p className="text-gray-600 font-light max-w-2xl mx-auto leading-relaxed mb-12">
            {t("cta.description")}
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/configurator">
              <Button className="font-light tracking-wide">
                {t("cta.buttons.configurator")}
              </Button>
            </Link>
            <Button variant="outline" className="font-light tracking-wide bg-transparent">
              {t("cta.buttons.catalog")}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
