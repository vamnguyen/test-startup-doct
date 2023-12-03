import useClickOutSide from "@/hooks/useClickOutSide";
import { signOut } from "next-auth/react";
import React, { useState } from "react";

interface IUserMenuProps {
  userMenuOpening: boolean;
  setUserMenuOpening: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserMenu = ({ userMenuOpening, setUserMenuOpening }: IUserMenuProps) => {
  const [toggleBtn, setToggleBtn] = useState(false);
  const { nodeRef } = useClickOutSide(() => {
    if (userMenuOpening) setUserMenuOpening((pre) => !pre);
  }, userMenuOpening);

  return (
    <div
      ref={nodeRef}
      onClick={(e) => e.stopPropagation()}
      className={`bg-[#FFF] absolute -bottom-4 translate-y-full -translate-x-5 w-[250px] ${
        userMenuOpening ? "flex" : "hidden"
      } flex-col items-start gap-2 py-4`}
    >
      {/* profile */}
      <div className="flex items-center gap-3 py-[10px] px-5 cursor-pointer hover:bg-[#f5f5f5] w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M14 14.6666V13.1852C14 11.5488 12.6569 10.2222 11 10.2222H5C3.34315 10.2222 2 11.5488 2 13.1852V14.6666M11 4.29628C11 5.93268 9.65685 7.25924 8 7.25924C6.34315 7.25924 5 5.93268 5 4.29628C5 2.65988 6.34315 1.33331 8 1.33331C9.65685 1.33331 11 2.65988 11 4.29628Z"
            stroke="#5F666F"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="font-medium text-base text-[#49505B]">Profile</span>
      </div>
      {/* settings */}
      <div className="flex items-center gap-3 py-[10px] px-5 cursor-pointer hover:bg-[#f5f5f5] w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <g clipPath="url(#clip0_4293_4092)">
            <path
              d="M6.51917 2.07405C6.51917 1.66495 6.85081 1.33331 7.25991 1.33331H8.74139C9.15049 1.33331 9.48213 1.66495 9.48213 2.07405V2.49538C9.48213 2.81227 9.69481 3.08757 9.98748 3.20908C10.2803 3.33063 10.6211 3.28431 10.8453 3.06015L11.1433 2.76213C11.4326 2.47286 11.9016 2.47286 12.1909 2.76213L13.2384 3.8097C13.5277 4.09898 13.5277 4.56799 13.2384 4.85727L12.9405 5.15524C12.7163 5.37941 12.67 5.72033 12.7915 6.01312C12.9131 6.30581 13.1884 6.5185 13.5053 6.5185L13.9266 6.5185C14.3357 6.5185 14.6673 6.85014 14.6673 7.25924V8.74072C14.6673 9.14982 14.3357 9.48146 13.9266 9.48146H13.5053C13.1884 9.48146 12.9131 9.69415 12.7915 9.98682C12.67 10.2796 12.7163 10.6205 12.9405 10.8447L13.2385 11.1427C13.5277 11.4319 13.5277 11.901 13.2385 12.1902L12.1909 13.2378C11.9016 13.5271 11.4326 13.5271 11.1433 13.2378L10.8453 12.9398C10.6212 12.7156 10.2803 12.6693 9.98749 12.7909C9.69482 12.9124 9.48213 13.1877 9.48213 13.5046V13.9259C9.48213 14.335 9.15049 14.6666 8.74139 14.6666H7.25991C6.85081 14.6666 6.51917 14.335 6.51917 13.9259V13.5046C6.51917 13.1877 6.30648 12.9124 6.01379 12.7909C5.721 12.6693 5.38008 12.7156 5.15591 12.9398L4.85792 13.2378C4.56865 13.5271 4.09964 13.5271 3.81036 13.2378L2.76279 12.1902C2.47352 11.9009 2.47352 11.4319 2.76279 11.1427L3.06082 10.8446C3.28498 10.6205 3.3313 10.2796 3.20975 9.98681C3.08824 9.69414 2.81294 9.48146 2.49605 9.48146H2.07473C1.66563 9.48146 1.33398 9.14982 1.33398 8.74072V7.25924C1.33398 6.85014 1.66563 6.5185 2.07472 6.5185L2.49603 6.5185C2.81293 6.5185 3.08824 6.30581 3.20976 6.01314C3.33132 5.72035 3.28499 5.37945 3.06082 5.15528L2.76281 4.85727C2.47353 4.56799 2.47353 4.09898 2.76281 3.8097L3.81037 2.76214C4.09965 2.47286 4.56866 2.47286 4.85794 2.76214L5.15595 3.06015C5.38012 3.28432 5.72102 3.33065 6.01381 3.20909C6.30648 3.08757 6.51917 2.81226 6.51917 2.49536V2.07405Z"
              stroke="#8D9198"
              strokeWidth="1.2"
            />
            <path
              d="M9.48213 7.99998C9.48213 8.81818 8.81885 9.48146 8.00065 9.48146C7.18245 9.48146 6.51917 8.81818 6.51917 7.99998C6.51917 7.18178 7.18245 6.5185 8.00065 6.5185C8.81885 6.5185 9.48213 7.18178 9.48213 7.99998Z"
              stroke="#8D9198"
              strokeWidth="1.2"
            />
          </g>
          <defs>
            <clipPath id="clip0_4293_4092">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <span className="font-medium text-base text-[#49505B]">Settings</span>
      </div>
      {/* interface */}
      <div
        className="relative flex items-center gap-3 py-[10px] px-5 cursor-pointer hover:bg-[#f5f5f5] w-full"
        onClick={() => setToggleBtn(!toggleBtn)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M0.888672 7.99978H2.46892M13.5306 7.99978H15.1109M7.99978 0.888672V2.46892M7.99978 13.5306V15.1109M2.46894 2.46894L4.04918 4.04918M11.9504 11.9504L13.5306 13.5306M2.46897 13.5306L4.04921 11.9504M11.9504 4.04915L13.5306 2.4689M10.3702 7.99978C10.3702 9.3089 9.3089 10.3702 7.99978 10.3702C6.69066 10.3702 5.62941 9.3089 5.62941 7.99978C5.62941 6.69066 6.69066 5.62941 7.99978 5.62941C9.3089 5.62941 10.3702 6.69066 10.3702 7.99978Z"
            stroke="#8D9198"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="font-medium text-base text-[#49505B]">Interface</span>

        <div className="inline-flex items-center cursor-pointer absolute right-5">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            checked={toggleBtn}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </div>
      </div>
      {/* Logout */}
      <div
        className="flex items-center gap-3 py-[10px] px-5 cursor-pointer hover:bg-[#f5f5f5] w-full"
        onClick={() => signOut()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M5.42857 4.21459C3.40147 5.09574 2 6.98634 2 9.17645C2 12.2086 4.68629 14.6666 8 14.6666C11.3137 14.6666 14 12.2086 14 9.17645C14 6.98634 12.5985 5.09574 10.5714 4.21459M8 1.33331V7.60782"
            stroke="#8D9198"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="font-medium text-base text-[#49505B]">Logout</span>
      </div>
    </div>
  );
};

export default UserMenu;
