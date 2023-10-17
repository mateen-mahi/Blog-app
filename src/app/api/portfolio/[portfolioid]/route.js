
import { Portfolio } from "@/models/Portfolio";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const PUT = async (request, content) => {
  try {
    const portfolioID = content.params.portfolioid;
    const idValue = { _id: portfolioID };
    const payload = await request.json();
    await connect();
    const data = await Portfolio.findOneAndUpdate(idValue, payload);
    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error("Error in PUT:", error);
    return new NextResponse("Error in PUT: " + error.message, { status: 500 });
  }
};

export const GET = async (request, content) => {
  try {
    const portfolioID = content.params.portfolioid;
    const idValue = { _id: portfolioID };
    await connect();
    const data = await Portfolio.findById(idValue);
    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error("Error in GET:", error);
    return new NextResponse("Error in GET: " + error.message, { status: 500 });
  }
};



export const DELETE = async (request, content) => {
  try {
    const portfolioID = content.params.portfolioid;
    const idValue = { _id: portfolioID };
    await connect();
    const data = await Portfolio.deleteOne(idValue);
    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error("Error in DELETE:", error); // Change "GET" to "DELETE"
    return new NextResponse("Error in DELETE: " + error.message, { status: 500 });
  }
};