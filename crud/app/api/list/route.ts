import connectMongoDB from "@/libs/mongodb"
import List from "@/models/list"
import { NextResponse } from "next/server"

export async function POST(request){
    const { title, description} = request.json()
    await connectMongoDB
    await List.create({title, description})
    return NextResponse.json({message: "List Created"}, {status: 201} )
}