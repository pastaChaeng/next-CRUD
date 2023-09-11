import connectMongoDB from "@/libs/mongodb";
import List from "@/models/list";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<Response> {
  try {
    const { title, description } = await request.json();
    await connectMongoDB();

    const newList = new List({ title, description });
    await newList.save();

    return NextResponse.json({ message: "List Created" }, { status: 201 });
  } catch (error) {
    console.error("Error creating list:", error);
    return NextResponse.json({ message: "Error creating list" }, { status: 500 });
  }
}
