"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import UserMenu from "@/components/UserMenu";
import React, { useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { useSession } from "next-auth/react";

const Navigation = () => {
  const pathname = usePathname();
  if (
    pathname === "/signup" ||
    pathname === "/login" ||
    pathname === "/forgotPassword" ||
    pathname === "/newPassword"
  ) {
    return null;
  }

  const { data: session } = useSession();

  const [userMenuOpening, setUserMenuOpening] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const handleInputSearchChange = (value: any) => setInputSearch(value);
  const debouncedInputSearch = useDebounce(handleInputSearchChange, 500);

  return (
    <div className="ml-[250px] px-7 bg-[#f5f5f5] flex justify-between items-center top-0 py-4">
      {/* Left Nav Block (Search Box) */}
      <div className="flex items-center gap-2">
        {/* search icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <g clipPath="url(#clip0_4287_39503)">
            <path
              d="M17.8024 18.8637C18.0952 19.1566 18.5701 19.1566 18.863 18.8637C19.1559 18.5708 19.1559 18.0959 18.863 17.803L17.8024 18.8637ZM15.6219 9.01963C15.6219 12.6663 12.6657 15.6226 9.01896 15.6226V17.1226C13.4941 17.1226 17.1219 13.4948 17.1219 9.01963H15.6219ZM9.01896 15.6226C5.37225 15.6226 2.41602 12.6663 2.41602 9.01963H0.916016C0.916016 13.4948 4.54383 17.1226 9.01896 17.1226V15.6226ZM2.41602 9.01963C2.41602 5.37292 5.37225 2.41669 9.01896 2.41669V0.916687C4.54383 0.916687 0.916016 4.5445 0.916016 9.01963H2.41602ZM9.01896 2.41669C12.6657 2.41669 15.6219 5.37292 15.6219 9.01963H17.1219C17.1219 4.5445 13.4941 0.916687 9.01896 0.916687V2.41669ZM18.863 17.803L14.7575 13.6976L13.6969 14.7582L17.8024 18.8637L18.863 17.803Z"
              fill="#5F666F"
            />
          </g>
          <defs>
            <clipPath id="clip0_4287_39503">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
        {/* input search box */}
        <input
          type="text"
          placeholder="Search Appointment, Patient or etc"
          className="outline-none bg-[#F1F1F1] rounded-md px-4 py-2 w-[320px]"
          onChange={(e) => debouncedInputSearch(e.target.value)}
        />
      </div>

      {/* Right Nav Block */}
      <div className="flex items-center justify-between gap-5">
        {/* help icon */}
        <div className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 17.5445V17.5556M12 14.2222C12 12 15.3333 12 15.3333 9.67677C15.3333 7.89161 13.8704 6.44444 12 6.44444C10.4219 6.44444 9.04262 7.47456 8.66667 8.86869M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
              stroke="#5F666F"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        {/* notification icon */}
        <div className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3 17.5556L2.33086 17.2168C2.21316 17.4493 2.22458 17.7262 2.36103 17.9483C2.49748 18.1703 2.7394 18.3056 3 18.3056L3 17.5556ZM21 17.5556V18.3056C21.2606 18.3056 21.5025 18.1703 21.639 17.9483C21.7754 17.7262 21.7868 17.4493 21.6691 17.2168L21 17.5556ZM6 8.66667C6 5.40774 8.67748 2.75 12 2.75V1.25C7.86668 1.25 4.5 4.5618 4.5 8.66667H6ZM12 2.75C15.3225 2.75 18 5.40774 18 8.66667H19.5C19.5 4.5618 16.1333 1.25 12 1.25V2.75ZM4.5 8.66667C4.5 10.774 3.96416 12.909 3.41438 14.5379C3.14103 15.3479 2.86776 16.0225 2.66355 16.4931C2.56152 16.7282 2.47696 16.9119 2.41857 17.0355C2.38937 17.0973 2.36674 17.144 2.35175 17.1746C2.34426 17.1899 2.33868 17.2011 2.33516 17.2082C2.33339 17.2118 2.33214 17.2143 2.33142 17.2157C2.33106 17.2164 2.33083 17.2169 2.33074 17.2171C2.33069 17.2171 2.33068 17.2172 2.3307 17.2171C2.33071 17.2171 2.33075 17.217 2.33075 17.217C2.3308 17.2169 2.33086 17.2168 3 17.5556C3.66914 17.8943 3.66921 17.8942 3.6693 17.894C3.66934 17.8939 3.66943 17.8937 3.66951 17.8936C3.66967 17.8933 3.66986 17.8929 3.67008 17.8924C3.67054 17.8915 3.67112 17.8904 3.67184 17.8889C3.67328 17.8861 3.67526 17.8821 3.67775 17.8771C3.68274 17.8671 3.6898 17.8529 3.69878 17.8345C3.71676 17.7978 3.74246 17.7447 3.77479 17.6763C3.83944 17.5395 3.93067 17.3412 4.03958 17.0902C4.25724 16.5886 4.54647 15.8744 4.83562 15.0176C5.41084 13.3133 6 11.0037 6 8.66667H4.5ZM3 18.3056H21V16.8056H3V18.3056ZM21 17.5556C21.6691 17.2168 21.6692 17.2169 21.6692 17.217C21.6693 17.217 21.6693 17.2171 21.6693 17.2171C21.6693 17.2172 21.6693 17.2171 21.6693 17.2171C21.6692 17.2169 21.6689 17.2164 21.6686 17.2157C21.6679 17.2143 21.6666 17.2118 21.6648 17.2082C21.6613 17.2011 21.6557 17.1899 21.6482 17.1746C21.6333 17.144 21.6106 17.0973 21.5814 17.0355C21.523 16.9119 21.4385 16.7282 21.3365 16.4931C21.1322 16.0225 20.859 15.3479 20.5856 14.5379C20.0358 12.909 19.5 10.774 19.5 8.66667H18C18 11.0037 18.5892 13.3133 19.1644 15.0176C19.4535 15.8744 19.7428 16.5886 19.9604 17.0902C20.0693 17.3412 20.1606 17.5395 20.2252 17.6763C20.2575 17.7447 20.2832 17.7978 20.3012 17.8345C20.3102 17.8529 20.3173 17.8671 20.3222 17.8771C20.3247 17.8821 20.3267 17.8861 20.3282 17.8889C20.3289 17.8904 20.3295 17.8915 20.3299 17.8924C20.3301 17.8929 20.3303 17.8933 20.3305 17.8936C20.3306 17.8937 20.3307 17.8939 20.3307 17.894C20.3308 17.8942 20.3309 17.8943 21 17.5556ZM14.625 18.6667C14.625 20.0846 13.4586 21.25 12 21.25V22.75C14.2694 22.75 16.125 20.9306 16.125 18.6667H14.625ZM12 21.25C10.5414 21.25 9.375 20.0846 9.375 18.6667H7.875C7.875 20.9306 9.73064 22.75 12 22.75V21.25ZM9.375 18.6667V17.5556H7.875V18.6667H9.375ZM16.125 18.6667V17.5556H14.625V18.6667H16.125Z"
              fill="#5F666F"
            />
            <rect x="15" y="3" width="6" height="6" rx="3" fill="#FF5263" />
          </svg>
        </div>
        {/* settings User feature */}
        <div className="relative flex items-center justify-between gap-5 cursor-pointer">
          <div
            onClick={() => {
              console.log("click outside1", userMenuOpening);
              setUserMenuOpening((pre) => !pre);
            }}
            className="flex items-center justify-between gap-5 cursor-pointer"
          >
            <Image
              src={session?.user?.image || "/DoctorAvatar.png"}
              alt="avatar"
              width={35}
              height={35}
              className="rounded-full"
            />
            <div>
              <p className="text-[#1B2432] font-bold">
                Dr. {session?.user.firstName} {session?.user.lastName}
              </p>
              <p className="text-[#5F666F] font-medium">Cardiologist</p>
            </div>
            {/* dropdown icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.2917 5.33331C12.711 5.33331 12.9441 5.81828 12.6822 6.14566L8.38913 11.5119C8.18897 11.7621 7.80843 11.7621 7.60826 11.5119L3.31524 6.14566C3.05334 5.81828 3.28642 5.33331 3.70568 5.33331L12.2917 5.33331Z"
                fill="#5F666F"
              />
            </svg>
          </div>
          <UserMenu
            userMenuOpening={userMenuOpening}
            setUserMenuOpening={setUserMenuOpening}
          />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
