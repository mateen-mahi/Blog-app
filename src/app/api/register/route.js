import connect from "@/utils/db";
import { User } from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const GET = async (request) => {
  try {
    await connect();
    const users = await User.find();

    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "An error occurred while fetching users" }, { status: 500 });
  }
};

export const POST = async (request) => {
  try {
    const { name, email, role, password } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json({ message: "Please provide all required fields" }, { status: 400 });
    }

    const hashPassword = await bcrypt.hash(password, 5);
    await connect();
    const newUser = new User({ name, email, role, password: hashPassword });
    await newUser.save();
    return NextResponse.json({ message: "User has been created" }, { status: 201 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "An error occurred while registering the user" }, { status: 500 });
  }
};
