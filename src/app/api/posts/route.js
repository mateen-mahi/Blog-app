import { NextResponse } from "next/server";
import { Post } from "@/models/Post";
import connect from "@/utils/db";

export const GET = async () => {
  try {

    await connect();

 
    const data = await Post.find();   
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
    const newPost = new Post(payload);
    const result = await newPost.save();
    return new Response(JSON.stringify({ result }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'An error occurred' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
