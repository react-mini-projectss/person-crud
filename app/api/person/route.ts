import Person from "@/models/Person";
import { connectDB } from "@/lib/db";
import { NextResponse } from "next/server";


export async function GET() {
await connectDB();
const people = await Person.find();
return NextResponse.json(people);
}


export async function POST(req: Request) {
await connectDB();
const body = await req.json();
const newPerson = await Person.create(body);
return NextResponse.json(newPerson);
}