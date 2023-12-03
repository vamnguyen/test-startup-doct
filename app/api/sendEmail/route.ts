import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export default async function POST(req: NextRequest) {
  const { email } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    secure: true,
  });
}
