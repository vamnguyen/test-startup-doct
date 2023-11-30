"use client";
import { Button, Checkbox, Input } from "antd";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { InputStateForm } from "@/interfaces";
import { useDebounce } from "@/hooks/useDebounce";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const [userRole, setUserRole] = React.useState("Doctor");
  const [inputState, setInputState] = React.useState<InputStateForm>({
    email: "",
    password: "",
  });
  const [error, setError] = useState("second");

  const handleInputChange = (field: keyof InputStateForm, value: any) => {
    setInputState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const debounceChanged = useDebounce(handleInputChange, 500);

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email: inputState.email,
        password: inputState.password,
        redirect: false,
      });

      if (res?.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex shrink-0 items-center justify-center h-screen">
      {/* FORM CONTAINER */}
      <form
        onSubmit={handleFormSubmit}
        className="inline-flex flex-col justify-center items-start gap-5 flex-1 h-auto px-32 pt-32"
      >
        <h1 className="text-[#323A46] font-bold text-2xl">
          Welcome to Doctsyl
        </h1>
        <p className="text-[#767C84] font-normal text-base">
          Don't have an account?{" "}
          <Link
            href={"/signup"}
            className="-text--primary font-medium text-base"
          >
            Sign Up
          </Link>
        </p>
        <div className="flex gap-8 w-full">
          <Button
            className={`w-full !h-12 ${
              userRole === "Doctor" ? "-bg--primary-2 text-white" : ""
            }`}
            size="large"
            onClick={() => setUserRole("Doctor")}
          >
            Doctor
          </Button>
          <Button
            className={`w-full !h-12 ${
              userRole === "Patient" ? "-bg--primary-2 text-white" : ""
            }`}
            size="large"
            onClick={() => setUserRole("Patient")}
          >
            Patient
          </Button>
        </div>

        <div className="flex justify-between gap-7 w-full">
          <button
            className="flex gap-4 p-4 ring-1 ring-orange-100 rounded-md w-1/2"
            // onClick={() => signIn("google")}
          >
            <Image
              src="/google.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Google</span>
          </button>
          <button
            className="flex gap-4 p-4 ring-1 ring-blue-100 rounded-md w-1/2"
            // onClick={() => signIn("facebook")}
          >
            <Image
              src="/facebook.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Facebook</span>
          </button>
        </div>

        <span className="px-3 text-gray-500">Or with email and password</span>
        <Input
          required
          size="large"
          type="email"
          placeholder="Enter your email"
          className="h-12"
          onChange={(e) => debounceChanged("email", e.target.value)}
        />
        <Input
          required
          size="large"
          type="password"
          placeholder="Password"
          className="h-12"
          onChange={(e) => debounceChanged("password", e.target.value)}
        />
        <button
          type="submit"
          className="-bg--primary text-white font-semibold text-base rounded px-6 py-3 w-full h-12"
        >
          Login
        </button>
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-3">
            <Checkbox>
              <p className="text-[#767C84] font-normal text-sm">Remember Me</p>
            </Checkbox>
          </div>
          <Link
            href={"/forgotPassword"}
            className="-text--primary font-medium text-sm"
          >
            Forgot Password?
          </Link>
        </div>
      </form>

      {/* IMAGE CONTAINER */}
      <div className="">
        <Image
          src="/auth-image.png"
          alt="auth"
          width={735}
          height={900}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
