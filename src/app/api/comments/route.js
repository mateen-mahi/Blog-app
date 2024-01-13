import { NextResponse } from "next/server";
import connect from "@/utils/db";
import { Comment } from "@/models/Comment";

export const GET = async () => {
  try {

    await connect();

 
    const data = await Comment.find();   
    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse("Database Error: " + error.message, { status: 500 });
  }
};


export async function POST(request) {
  try {
    const payload = await request.json(); 
    await connect()
    const newComment = new Comment(payload);
    const result = await newComment.save();
    return new NextResponse(JSON.stringify({ result }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: 'An error occurred' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
