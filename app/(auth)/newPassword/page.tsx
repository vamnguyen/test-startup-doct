"use client";
import { useDebounceForm } from "@/hooks/useDebounce";
import { InputStateForm } from "@/interfaces";
import { ValidateEmail } from "@/lib";
import { Input } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ForgotPassword = () => {
  const {
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<InputStateForm>({});

  const [notification, setNotification] = useState("");
  const router = useRouter();

  const handleInputChange = (field: keyof InputStateForm, value: any) => {
    setValue(field, value);
  };
  const debouncedChanged = useDebounceForm(handleInputChange, 500);

  const onSubmit = async (data: InputStateForm) => {
    if (!data.email || !data.password || !data.confirmPassword)
      return setNotification("All field is required");

    if (!ValidateEmail(data.email!)) return setNotification("Email invalid.");

    if (data.password !== data.confirmPassword)
      return setNotification("Password and Confirm Password don't match");

    try {
      const res = await fetch("/api/changePassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      const response = await res.json();

      if (res.ok && res.status === 200) {
        router.push("/login?notify=Password%20successfully%20updated");
      } else {
        setNotification(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#f5f5f5] flex justify-center items-center h-screen">
      <form
        className="bg-[#FFF] inline-flex flex-col items-center gap-5 justify-center py-16 px-16"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1>New Password</h1>
        {!notification ? (
          <p className="-text--primary-2 font-medium text-sm bg-[#E9F6FE] rounded py-3 px-6">
            Please create a new password that you don’t use on any other site
          </p>
        ) : (
          <p className="bg-[#fdf6e0] rounded py-3 px-8 -text--secondary font-medium text-sm">
            {notification}
          </p>
        )}
        <Input
          type="email"
          placeholder="Your email account registered with our app"
          size="large"
          className="h-12"
          onChange={(e) => debouncedChanged("email", e.target.value)}
        />
        <Input
          type="password"
          placeholder="Enter your new password"
          size="large"
          className="h-12"
          onChange={(e) => debouncedChanged("password", e.target.value)}
        />
        <Input
          type="password"
          placeholder="Confirm your new password"
          size="large"
          className="h-12"
          onChange={(e) => debouncedChanged("confirmPassword", e.target.value)}
        />
        <button
          type="submit"
          className="-bg--primary text-white font-semibold text-base rounded px-6 py-3 w-full h-12"
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
            "Change"
          )}
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
