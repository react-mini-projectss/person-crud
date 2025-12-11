import Person from "@/models/Person";
import { connectDB } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PUT(req: Request, context: { params: Promise<{ id: string }> }) {
  await connectDB();
  const { id } = await context.params;
  const body = await req.json();
  const updated = await Person.findByIdAndUpdate(id, body, { new: true });
  return NextResponse.json(updated);
}

export async function DELETE(req: Request, context: { params: Promise<{ id: string }> }) {
  await connectDB();
  const { id } = await context.params;
  await Person.findByIdAndDelete(id);
  return NextResponse.json({ message: "Deleted" });
}
