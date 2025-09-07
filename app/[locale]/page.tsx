import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/[locale]/components/ui/button";
import NavBar from "@/app/[locale]/components/navbar";
import { ChevronDown } from "lucide-react";
import { setRequestLocale, getTranslations } from "next-intl/server";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('homePage');

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/stal_9.jpeg?height=1080&width=1920"
            alt={t("hero.title")}
            fill
            className="object-cover brightness-70"
            priority
          />
        </div>

        {/* gradient */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-32 left-0 right-0 z-10">
          <div className="container mx-auto px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wide">
                {t("hero.title")}
              </h1>
              <p className="text-lg text-white/90 font-light leading-relaxed mb-8">
                {t("hero.description")}
              </p>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black bg-transparent font-light tracking-wide"
                >
                  {t("hero.discoverMore")}
                </Button>
                <Link href="/configurator">
                  <Button className="bg-white text-black hover:bg-gray-100 font-light tracking-wide">
                    {t("hero.configureMaterials")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <ChevronDown className="h-6 w-6 text-white animate-bounce" />
        </div>
      </section>

      {/* News Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-2xl font-light text-gray-900 mb-8 tracking-wider">
              {t("news.title")}
            </h2>
            <p className="text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              {t("news.text")}
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            <div className="group cursor-pointer">
              <div className="relative aspect-square mb-6 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt={t("products.steelTables")}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-sm font-light tracking-wider text-gray-900 text-center">
                {t("products.steelTables")}
              </h3>
            </div>

            <div className="group cursor-pointer">
              <div className="relative aspect-square mb-6 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt={t("products.steelFronts")}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-sm font-light tracking-wider text-gray-900 text-center">
                {t("products.steelFronts")}
              </h3>
            </div>

            <div className="group cursor-pointer">
              <Link href="/products/handles">
                <div className="relative aspect-square mb-6 overflow-hidden">
                  <Image
                    src="/img/handles/020_600_etsy.webp?height=400&width=400"
                    alt={t("products.handles")}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-sm font-light tracking-wider text-gray-900 text-center">
                  {t("products.handles")}
                </h3>
              </Link>
            </div>

            <div className="group cursor-pointer">
              <Link href="/products/boards/metalux">
                <div className="relative aspect-square mb-6 overflow-hidden">

                  <Image
                    src="/img/boards/metalux/MLG21001L/MLG21001L_1.webp?height=400&width=400"
                    alt={t("products.metalux")}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-sm font-light tracking-wider text-gray-900 text-center">
                  {t("products.metalux")}
                </h3>
              </Link>
            </div>

            <div className="group cursor-pointer">
              <Link href="/products/boards/woodsense">
                <div className="relative aspect-square mb-6 overflow-hidden">
                  <Image
                    src="/img/boards/woodsense/WS0003Z2M/WS0003Z2M_1.webp?height=400&width=400"
                    alt={t("products.woodsense")}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-sm font-light tracking-wider text-gray-900 text-center">
                  {t("products.woodsense")}
                </h3>
              </Link>
            </div>

            <div className="group cursor-pointer">
              <Link href="/products/boards/colorpro">
              <div className="relative aspect-square mb-6 overflow-hidden">
                <Image
                  src="/img/boards/colorpro/CPG11001L/CPG11001L_1.jpg?height=400&width=400"
                  alt={t("products.colorpro")}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-sm font-light tracking-wider text-gray-900 text-center">
                {t("products.colorpro")}
              </h3>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Steel Fronts Collection */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="relative h-[70vh] mb-16">
            <Image
              src="/modern-kitchen-metallic-cabinets.png?height=800&width=1600"
              alt={t("collections.steelFronts.title")}
              fill
              className="object-cover"
            />
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">
              {t("collections.steelFronts.title")}
            </h2>
            <p className="text-gray-600 font-light max-w-4xl mx-auto leading-relaxed mb-12">
              {t("collections.steelFronts.text")}
            </p>
            <Button variant="outline" className="font-light tracking-wide bg-transparent">
              {t("collections.steelFronts.button")}
            </Button>
          </div>
        </div>
      </section>

      {/* Metalux Series */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="relative h-[70vh] mb-16">
            <Image
              src="/placeholder.svg?height=800&width=1600"
              alt={t("collections.metalux.title")}
              fill
              className="object-cover"
            />
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">
              {t("collections.metalux.title")}
            </h2>
            <p className="text-gray-600 font-light max-w-4xl mx-auto leading-relaxed mb-12">
              {t("collections.metalux.text")}
            </p>
            <Button variant="outline" className="font-light tracking-wide bg-transparent">
              {t("collections.metalux.button")}
            </Button>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="relative h-[70vh] mb-16">
            <Image
              src="/img/boards/woodsense/or-8042-black-scaled.webp?height=800&width=1600"
              alt={t("craftsmanship.title")}
              fill
              className="object-cover"
            />
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wider">
              {t("craftsmanship.title")}
            </h2>
            <p className="text-gray-600 font-light max-w-4xl mx-auto leading-relaxed mb-12">
              {t("craftsmanship.text")}
            </p>
            <Button variant="outline" className="font-light tracking-wide bg-transparent">
              {t("craftsmanship.button")}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-16">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="text-xl font-light tracking-wider text-gray-900 mb-8">
                {t("footer.brand")}
              </div>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                {t("footer.slogan")}
              </p>
            </div>
            <div>
              <h4 className="font-light text-gray-900 mb-6 tracking-wide">
                {t("footer.products")}
              </h4>
              <ul className="space-y-3 text-sm font-light text-gray-600">
                <li><Link href="#" className="hover:text-gray-900 transition-colors">{t("products.steelTables")}</Link></li>
                <li><Link href="#" className="hover:text-gray-900 transition-colors">{t("products.steelFronts")}</Link></li>
                <li><Link href="#" className="hover:text-gray-900 transition-colors">{t("products.handles")}</Link></li>
                <li><Link href="#" className="hover:text-gray-900 transition-colors">Furniture Boards</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-light text-gray-900 mb-6 tracking-wide">
                {t("footer.collections")}
              </h4>
              <ul className="space-y-3 text-sm font-light text-gray-600">
                <li><Link href="#" className="hover:text-gray-900 transition-colors">{t("collections.metalux.title")}</Link></li>
                <li><Link href="#" className="hover:text-gray-900 transition-colors">Woodsense Series</Link></li>
                <li><Link href="#" className="hover:text-gray-900 transition-colors">Colorpro Series</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-light text-gray-900 mb-6 tracking-wide">
                {t("footer.connect")}
              </h4>
              <ul className="space-y-3 text-sm font-light text-gray-600">
                <li><Link href="#" className="hover:text-gray-900 transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-gray-900 transition-colors">Contact</Link></li>
                <li><Link href="#" className="hover:text-gray-900 transition-colors">Projects</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-100 mt-12 pt-8 text-center">
            <p className="text-gray-600 font-light text-sm">
              {t("footer.copyright")}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
