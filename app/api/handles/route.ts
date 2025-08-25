import { NextResponse } from "next/server";
import type { HandlesIndex } from "@/types/handles";

export async function GET() {
  const data = (await import("@/content/handles/index.json")) as HandlesIndex;
  return NextResponse.json({ items: data.items });
}