import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = await params;

  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  // get from db
  //if not found return 404
  //else return data
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json(user);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = await params;
  //validate req body
  const body = await request.json();
  // this is the example with zod schema validation
  const validation = schema.safeParse(body);
  //if inavlid, return 400
  if (!validation.success)
    return NextResponse.json(validation.error.issues, { status: 400 });

  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  // if doesn't exist, return 404
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  //else update the user

  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: { name: body.name, email: body.email },
  });
  return NextResponse.json(updatedUser);
  //return updated user
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = await params;

  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  await prisma.user.delete({
    where: {
      id: user.id,
    },
  });

  return NextResponse.json({});
}
