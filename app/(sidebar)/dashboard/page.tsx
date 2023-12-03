"use client";
import { useSession } from "next-auth/react";

const DashBoardPage = () => {
  const { data: session } = useSession();

  return (
    <main className="ml-[250px] mt-3 px-5 bg-[#f5f5f5] h-screen border border-red-400">
      {/* welcome user */}
      <section>
        <h1 className="text-[#1B2432]">Welcome, {session?.user?.firstName}</h1>
        <span className="font-normal text-sm text-[#5F666F]">
          Have a nice day at great work
        </span>
      </section>

      {/* stats */}
      <section className="flex items-center gap-5">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </section>

      {/* appointments */}
      <section className=""></section>

      {/* recent patients */}
      <section className=""></section>
    </main>
  );
};

export default DashBoardPage;
