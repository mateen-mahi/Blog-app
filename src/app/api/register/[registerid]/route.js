import connect from "@/utils/db";
import { NextResponse } from "next/server";
import { User } from "@/models/User";

export const PUT = async (request, content) => {
  try {
    const regID = content.params.registerid;
    const idValue = { _id: regID };
    const payload = await request.json();
    await connect();
    const data = await User.findOneAndUpdate(idValue, payload);
    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error("Error in PUT:", error);
    return new NextResponse("Error in PUT: " + error.message, { status: 500 });
  }
};

export const GET = async (request, content) => {
  try {
    const regID = content.params.registerid;
    const idValue = { _id: regID };
    await connect();
    const data = await User.findById(idValue);
    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error("Error in GET:", error);
    return new NextResponse("Error in GET: " + error.message, { status: 500 });
  }
};



export const DELETE = async (request, content) => {
  try {
    const regID = content.params.registerid;
    const idValue = { _id: regID };
    await connect();
    const data = await User.deleteOne(idValue);
    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error("Error in DELETE:", error);
    return new NextResponse("Error in DELETE: " + error.message, { status: 500 });
  }
};