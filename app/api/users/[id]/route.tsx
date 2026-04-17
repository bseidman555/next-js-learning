import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: number } },
) {
  const { id } = await params;
  // get from db
  //if not found return 404
  //else return data
  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({ id: 1, name: "test 1" });
}
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } },
) {
  const { id } = await params;
  //validate req body
  const body = await request.json();
  // this is the example with zod schema validation
  const validation = schema.safeParse(body);
  //if inavlid, return 400
  if (!validation.success)
    return NextResponse.json(validation.error.issues, { status: 400 });

  // if doesn't exist, return 404
  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  //else update the user
  return NextResponse.json({ id: 1, name: body.name });
  //return updated user
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } },
) {
  const { id } = await params;
  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({});
}
