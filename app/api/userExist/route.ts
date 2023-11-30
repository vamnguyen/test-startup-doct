import User from "@/models/User";
import { connectMongoDB } from "@/utils/connectdb";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    await connectMongoDB();
    const email = await req.json();
    const userId = await User.findOne({ email }).select("_id");

    return NextResponse.json({ userId });
  } catch (error) {
    console.log(error);
  }
};
