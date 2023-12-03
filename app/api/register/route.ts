import { connectMongoDB } from "@/utils/connectdb";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";
import { hashSync, genSaltSync } from "bcrypt";

export const POST = async (req: NextRequest) => {
  try {
    const { userRole, data } = await req.json();
    const role = userRole;
    const { firstName, lastName, email, password, phoneNumber, address } = data;

    await connectMongoDB();

    const salt = genSaltSync(10);
    const hashPassword = hashSync(password, salt);
    const newUser = await new User({
      role,
      firstName,
      lastName,
      email,
      password: hashPassword,
      phoneNumber,
      address,
    });

    await newUser.save();
    return new NextResponse("User is registered successfully!", {
      status: 201,
    });
  } catch (error) {
    return new NextResponse("An error occurred while registering the user.", {
      status: 500,
    });
  }
};
