import EmailForgotPassword from "@/components/EmailForgotPassword";
import EmailWelcome from "@/components/EmailWelcome";
import { render } from "@react-email/render";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { data, type } = await req.json();
  const email = data.email;
  let fullName = data.firstName + " " + data.lastName;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    auth: {
      user: process.env.EMAIL_USER_APP!,
      pass: process.env.EMAIL_PASS_APP!,
    },
  });

  let emailHTML, subject, text;
  if (type === "forgot_password") {
    emailHTML = render(EmailForgotPassword());
    subject = "[Doctsyl] Reset Password";
    text = "Reset password instruction";
  } else if (type === "welcome") {
    emailHTML = render(EmailWelcome());
    subject = `[Doctsyl] Welcome ${fullName} to our app!`;
    text = `Dear ${fullName}, welcome to our app!`;
  }

  const mailOptions = {
    from: process.env.EMAIL_USER!,
    to: email,
    subject: subject,
    text: text,
    html: emailHTML,
  };

  try {
    await transporter.sendMail(mailOptions);

    return NextResponse.json("Email sent successfully!", { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Error sending email", { status: 500 });
  }
}
