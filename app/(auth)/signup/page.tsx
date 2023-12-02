"use client";
import { countries } from "@/constants";
import { Button, Checkbox, Input, Select } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { InputStateForm } from "@/interfaces";
import Link from "next/link";
import { useDebounce } from "@/hooks/useDebounce";
import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const SignUpPage = () => {
  const { status } = useSession();
  useEffect(() => {
    if (status === "authenticated") {
      redirect("/dashboard");
    }
  }, [status]);

  const router = useRouter();
  const [userRole, setUserRole] = React.useState("Patient");
  const [inputState, setInputState] = React.useState<InputStateForm>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    address: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (field: keyof InputStateForm, value: any) => {
    setInputState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const debounceChanged = useDebounce(handleInputChange, 500);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (
      !inputState.firstName ||
      !inputState.lastName ||
      !inputState.email ||
      !inputState.password ||
      !inputState.confirmPassword ||
      !inputState.phoneNumber ||
      !inputState.address
    ) {
      setError("Please fill all the fields.");
      return;
    }

    if (inputState.password !== inputState.confirmPassword) {
      setError("Password and Confirm Password are not matched.");
      return;
    }

    try {
      // Check User Existing
      const resUserExist = await fetch("api/userExist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputState.email),
      });

      const { userId } = await resUserExist.json();
      if (userId) {
        setError("User email already existed.");
        return;
      }

      // New User
      const res = await fetch("api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userRole, inputState }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    <div className="flex shrink-0 items-center justify-center h-screen">
      {/* FORM CONTAINER */}
      <form
        className="inline-flex flex-col justify-center items-start gap-5 flex-1 h-auto px-32 pt-32"
        onSubmit={handleSubmit}
      >
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
        {error && (
          <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md">
            {error}
          </div>
        )}
        <button
          type="submit"
          className="-bg--primary text-white font-semibold text-base rounded px-6 py-3 w-full h-12"
        >
          Sign Up
        </button>
        <p className="text-[#767C84] font-normal text-base">
          You have account already?{" "}
          <Link href={"/login"} className="-text--primary">
            Sign In
          </Link>
        </p>
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

export default SignUpPage;
