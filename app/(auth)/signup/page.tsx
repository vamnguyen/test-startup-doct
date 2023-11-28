"use client";
import { countries } from "@/constants";
import { Button, Checkbox, Form, Input, Select } from "antd";
import Image from "next/image";
import React, { useEffect } from "react";
import { InputStateForm } from "@/interfaces";
import Link from "next/link";
import { useDebounce } from "@/hooks/useDebounce";

const SignUpPage = () => {
  const [userRole, setUserRole] = React.useState("Doctor");
  const [inputState, setInputState] = React.useState<InputStateForm>({
    firstName: {
      isError: false,
      errorMessage: "Invalid First Name",
      value: "",
    },
    lastName: { isError: false, errorMessage: "Invalid Last Name", value: "" },
    email: { isError: false, errorMessage: "Invalid Email", value: "" },
    password: { isError: false, errorMessage: "Invalid Password", value: "" },
    confirmPassword: {
      isError: false,
      errorMessage: "Invalid Confirm Password",
      value: "",
    },
    phoneNumber: {
      isError: false,
      errorMessage: "Invalid Phone Number",
      value: "",
    },
    address: { isError: false, errorMessage: "Invalid Address", value: "" },
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
        <h1 className="text-[#323A46] font-bold text-2xl">Sign Up</h1>
        <p className="text-[#767C84] font-normal text-base">
          Enter details to create your account
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
        <div className="flex gap-8 w-full">
          <Input
            required
            size="large"
            placeholder="First Name"
            className="h-12"
            onChange={(e) => debounceChanged("firstName", e.target.value)}
          />
          <Input
            required
            size="large"
            placeholder="Last Name"
            className="h-12"
            onChange={(e) => debounceChanged("lastName", e.target.value)}
          />
        </div>
        <Input
          required
          size="large"
          type="email"
          placeholder="doct@gmail.com"
          className="h-12"
          onChange={(e) => debounceChanged("email", e.target.value)}
        />
        <Input
          required
          size="large"
          type="password"
          placeholder="Create Password"
          className="h-12"
          onChange={(e) => debounceChanged("password", e.target.value)}
        />
        <Input
          required
          size="large"
          type="password"
          placeholder="Confirm Password"
          className="h-12"
          onChange={(e) => debounceChanged("confirmPassword", e.target.value)}
        />
        <div className="flex gap-5 w-full">
          <Select placeholder="+84" className="w-[260px] h-11">
            {countries.map((country) => (
              <Select.Option key={country.code} value={country.name}>
                {country.code} {country.name}
              </Select.Option>
            ))}
          </Select>
          <Input
            required
            placeholder="Phone Number"
            className="h-11"
            onChange={(e) => debounceChanged("phoneNumber", e.target.value)}
          />
        </div>
        <Input
          required
          size="large"
          placeholder="Enter your address"
          className="h-12"
          onChange={(e) => debounceChanged("address", e.target.value)}
        />
        <div className="flex gap-3">
          <Checkbox>
            <p className="text-[#767C84] font-normal text-sm">
              By sign up I agree with{" "}
              <span className="-text--primary">Terms and condition</span>
            </p>
          </Checkbox>
        </div>
        <Button
          htmlType="submit"
          className="-bg--primary text-white font-semibold text-base rounded px-6 py-3 w-full h-12"
        >
          Sign Up
        </Button>
        <p className="text-[#767C84] font-normal text-base">
          You have account already?{" "}
          <Link href={"/login"} className="-text--primary">
            Sign In
          </Link>
        </p>
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

export default SignUpPage;
