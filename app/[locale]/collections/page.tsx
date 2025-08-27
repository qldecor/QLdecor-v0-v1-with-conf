import Link from "next/link";

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-white pt-32">
      <div className="container mx-auto px-12">
        <h1 className="text-3xl font-light mb-12 tracking-wide">Collections</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
          {/* Płyty Meblowe */}
          <div>
            <h3 className="font-semibold mb-4 uppercase">Płyty Meblowe</h3>
            <ul className="space-y-2">
              <li><Link href="/collections/boards/metalux" className="hover:underline">MetaLux</Link></li>
              <li><Link href="/collections/boards/colorpro" className="hover:underline">ColorPro</Link></li>
              <li><Link href="/collections/boards/woodsense" className="hover:underline">WoodSense</Link></li>
            </ul>
          </div>

          {/* Uchwyty */}
          <div>
            <h3 className="font-semibold mb-4 uppercase">Uchwyty Meblowe</h3>
            <ul className="space-y-2">
              <li><Link href="/collections/handles" className="hover:underline">Zobacz wszystkie</Link></li>
            </ul>
          </div>

          {/* Wieszaki */}
          <div>
            <h3 className="font-semibold mb-4 uppercase">Wieszaki</h3>
            <ul className="space-y-2">
              <li><Link href="/collections/hooks" className="hover:underline">Zobacz wszystkie</Link></li>
            </ul>
          </div>

          {/* Meble */}
          <div>
            <h3 className="font-semibold mb-4 uppercase">Meble</h3>
            <ul className="space-y-2">
              <li><Link href="/collections/furniture" className="hover:underline">Zobacz wszystkie</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}