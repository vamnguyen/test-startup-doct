"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/Logo.svg";
import { usePathname } from "next/navigation";
import React from "react";
import {
  AppointmentIcon,
  BlogIcon,
  DashboardIcon,
  MessageIcon,
  PatientIcon,
  PaymentIcon,
  ScheduleTimeIcon,
  SettingIcon,
} from "@/icons";

const routes = [
  {
    label: "Overview",
    icon: <DashboardIcon />,
    href: "/dashboard",
  },
  {
    label: "Appointment",
    icon: <AppointmentIcon />,
    href: "/appointment",
  },
  {
    label: "My Patient",
    icon: <PatientIcon />,
    href: "/patient",
  },
  {
    label: "Schedule Timings",
    icon: <ScheduleTimeIcon />,
    href: "/scheduleTiming",
  },
  {
    label: "Payments",
    icon: <PaymentIcon />,
    href: "/payments",
  },
  {
    label: "Message",
    icon: <MessageIcon />,
    href: "/message",
  },
  {
    label: "Blog",
    icon: <BlogIcon />,
    href: "/blog",
  },
  {
    label: "Settings",
    icon: <SettingIcon />,
    href: "/settings",
  },
];

const SideBar = () => {
  const pathname = usePathname();

  if (
    pathname === "/signup" ||
    pathname === "/login" ||
    pathname === "/forgotPassword"
  ) {
    return null;
  }

  return (
    <div className="fixed top-0 bottom-0 inline-flex flex-col items-start gap-[45px] flex-shrink-0 py-[26px] px-4">
      <Link
        href={"/dashboard"}
        className="flex items-center justify-center gap-[3.5px]"
      >
        <div className="w-6 h-5">
          <Image src={Logo} alt="logo-app" />
        </div>
        <span className="text-[#242731] text-2xl font-extrabold">Doct</span>
      </Link>

      <div className="flex flex-col justify-center items-center">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={`w-[222px] py-[13px] px-[17px] rounded-[10px] ${
              route.href === pathname ? "bg-[#0C0B1A]" : ""
            } `}
          >
            <div className="flex items-center justify-start gap-[14px]">
              {React.cloneElement(route.icon, {
                fill: `${route.href === pathname ? "#FFF" : ""}`,
              })}
              <span
                className={`text-sm ${
                  route.href === pathname
                    ? "font-semibold text-[#FFF]"
                    : "font-normal text-[#5F666F]"
                } `}
              >
                {route.label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
