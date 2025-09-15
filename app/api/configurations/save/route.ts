import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { pool } from "@/lib/db";

function getConfigHash(config: object) {
  const json = JSON.stringify(config, Object.keys(config).sort());
  return crypto.createHash("sha256").update(json).digest("hex");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { config, parentId } = body;

    if (!config) {
      return NextResponse.json({ error: "Missing config" }, { status: 400 });
    }

    const hash = getConfigHash(config);
    const json = JSON.stringify(config);

    const result = await pool.query(
      `INSERT INTO configurations (hash, data, parent_id)
       VALUES ($1, $2, $3)
       ON CONFLICT (hash) DO UPDATE SET data = EXCLUDED.data
       RETURNING id;`,
      [hash, json, parentId || null]
    );

    return NextResponse.json({ id: result.rows[0].id });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
