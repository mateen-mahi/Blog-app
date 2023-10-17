
import { Message } from "@/models/Message";
import connect from "@/utils/db";
import { NextResponse } from "next/server";


export const DELETE = async (request, content) => {
  try {
    const deleteID = content.params.messageid;
    const idValue = { _id: deleteID };
    await connect();
    const data = await Message.deleteOne(idValue);
    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error("Error in DELETE:", error);
    return new NextResponse("Error in DELETE: " + error.message, { status: 500 });
  }
};