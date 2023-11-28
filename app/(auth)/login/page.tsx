"use client";
import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { InputStateForm } from "@/interfaces";
import { useDebounce } from "@/hooks/useDebounce";

const LoginPage = () => {
  const [userRole, setUserRole] = React.useState("Doctor");
  const [inputState, setInputState] = React.useState<InputStateForm>({
    email: { isError: false, errorMessage: "Invalid Email", value: "" },
    password: { isError: false, errorMessage: "Invalid Password", value: "" },
  });

  const handleInputChange = (field: keyof InputStateForm, value: any) => {
    setInputState((prevState) => ({
      ...prevState,
      [field]: { ...prevState[field], value: value },
    }));
  };

  const debounceChanged = useDebounce(handleInputChange, 500);

  return (
    <div className="flex shrink-0 items-center justify-center h-screen">
      {/* FORM CONTAINER */}
      <Form className="inline-flex flex-col justify-center items-start gap-5 flex-1 h-auto px-32 pt-32">
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
        <Button
          htmlType="submit"
          className="-bg--primary text-white font-semibold text-base rounded px-6 py-3 w-full h-12"
        >
          Login
        </Button>
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
      </Form>

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
