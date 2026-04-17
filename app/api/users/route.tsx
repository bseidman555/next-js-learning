import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { safeParse } from "zod";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "test 1" },
    { id: 2, name: "test 2" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.issues, { status: 400 });
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
