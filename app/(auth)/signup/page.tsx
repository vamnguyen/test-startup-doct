"use client";
import { countries } from "@/constants";
import { Button, Checkbox, Input, Select } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { InputStateForm } from "@/interfaces";
import Link from "next/link";
import { useDebounceForm } from "@/hooks/useDebounce";
import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";

const SignUpPage = () => {
  const { status } = useSession();
  useEffect(() => {
    if (status === "authenticated") {
      redirect("/dashboard");
    }
  }, [status]);

  const router = useRouter();
  const {
    setValue,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<InputStateForm>({});
  const [userRole, setUserRole] = React.useState("Patient");
  const [error, setError] = useState("");

  const handleInputChange = (field: keyof InputStateForm, value: any) => {
    setValue(field, value);
  };

  const debounceChanged = useDebounceForm(handleInputChange, 500);

  const onSubmit = async (data: InputStateForm) => {
    try {
      // Check User Existing
      const resUserExist = await fetch("api/userExist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data.email),
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
        body: JSON.stringify({ userRole, data }),
      });

      if (res.ok) {
        reset({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
          phoneNumber: "",
          address: "",
        });
        router.push("/dashboard");
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
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1>Sign Up</h1>
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
            size="large"
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
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div role="status">
              <svg
                aria-hidden="true"
                className="inline w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading... please wait</span>
            </div>
          ) : (
            "Sign Up"
          )}
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
