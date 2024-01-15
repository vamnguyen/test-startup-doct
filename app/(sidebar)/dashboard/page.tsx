"use client";
import AppointmentDashBoard from "@/components/AppointmentDashBoard";
import Stats from "@/components/Stats";
import { useSession } from "next-auth/react";

const DashBoardPage = () => {
  const { data: session } = useSession();

  return (
    <main className="ml-[250px] pt-3 px-5 bg-[#f5f5f5] flex flex-col gap-[30px] border border-red-400">
      {/* welcome user */}
      <section>
        <h1 className="text-[#1B2432]">Welcome, {session?.user?.firstName}</h1>
        <span className="font-normal text-sm text-[#5F666F]">
          Have a nice day at great work
        </span>
      </section>

      {/* stats */}
      <Stats />

      {/* appointments */}
      <AppointmentDashBoard />

      {/* recent patients */}
      <section className=""></section>
    </main>
  );
};

export default DashBoardPage;
