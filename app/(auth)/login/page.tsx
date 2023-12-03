"use client";
import { Button, Checkbox, Input } from "antd";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { InputStateForm } from "@/interfaces";
import { useDebounceForm } from "@/hooks/useDebounce";
import { signIn, useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const { status } = useSession();
  useEffect(() => {
    if (status === "authenticated") {
      redirect("/dashboard");
    }
  }, [status]);

  const router = useRouter();
  const [userRole, setUserRole] = React.useState("Doctor");
  const [error, setError] = useState("");

  const {
    setValue,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<InputStateForm>({});

  const handleInputChange = (field: keyof InputStateForm, value: any) => {
    setValue(field, value);
  };

  const debounceChanged = useDebounceForm(handleInputChange, 500);

  const onSubmit = async (data: InputStateForm) => {
    try {
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (res?.error) {
        setError("Invalid Credentials or User not found.");
        return;
      }

      reset({ email: "", password: "" });
      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex shrink-0 items-center justify-center h-screen">
      {/* FORM CONTAINER */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="inline-flex flex-col justify-center items-start gap-5 flex-1 h-auto px-32 pt-32"
      >
        <h1>Welcome to Doctsyl</h1>
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
            // onClick={() => signIn("github")}
          >
            <Image
              src="/github.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Github</span>
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
            </div>
          ) : (
            "Login"
          )}
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
