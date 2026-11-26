import { NextResponse } from "next/server";
import { getMeetings } from "@/lib/meetings-db";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const query = searchParams.get("query") ?? "";
  const page = Number(searchParams.get("page") ?? "1");

  if (!Number.isInteger(page) || page < 1) {
    return NextResponse.json(
      { error: "Invalid page number" },
      { status: 400 },
    );
  }

  const meetings = await getMeetings(query, page);

  return NextResponse.json(meetings);
}
