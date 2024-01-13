import { NextResponse } from "next/server";
import connect from "@/utils/db";
import { Comment } from "@/models/Comment";



export async function GET(req, {params}) {
  console.log(params);
    try{
    const {postid} = params;
     await  connect();
   const data = await   Comment.find({postId : postid })
    return new NextResponse(JSON.stringify(data), { status: 200 });
} catch (error) {
    console.error("Error:", error);
    return new NextResponse("Database Error: " + error.message, { status: 500 });
  }
}



