import connect from "@/utils/db";
import { User } from "@/models/User";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
      await connect();
      const { email } = await request.json();
    const user = await User.findOne({ email }).select("_id");
    if (user) {
      return NextResponse.json({ user }, { status: 200 }); 
    } else {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
};
