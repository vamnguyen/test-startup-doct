import User from "@/models/User";
import { connectMongoDB } from "@/utils/connectdb";
import { genSaltSync, hashSync } from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { email, password: oldPassword } = await req.json();

  try {
    await connectMongoDB();
    let user = await User.findOne({ email });

    if (!user)
      return NextResponse.json("User email is not exist", { status: 400 });

    const salt = genSaltSync(10);
    const hashPassword = hashSync(oldPassword, salt);
    user.password = hashPassword;

    await user.save();
    return NextResponse.json("Change password user successfully!", {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json("An Error occurred while change password user.", {
      status: 500,
    });
  }
};
