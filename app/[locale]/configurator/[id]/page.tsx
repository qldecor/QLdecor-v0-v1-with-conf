import { notFound } from "next/navigation";
import ConfiguratorPage from "../page"; // <-- używamy Twojego pliku z "use client"

async function fetchConfig(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/configurations/${id}`,
    { cache: "no-store" }
  );
  if (!res.ok) return null;
  const data = await res.json();
  return data.data;
}

export default async function ConfiguratorDetailPage({ params }: { params: { id: string } }) {
  const config = await fetchConfig(params.id);
  if (!config) notFound();

  // ⚡ przekazujemy initialConfig do Twojego client componenta
  return <ConfiguratorPage initialConfig={config} />;
}
