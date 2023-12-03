import EmailForgotPassword from "@/components/EmailForgotPassword";
import React from "react";

const AppointmentPage = () => {
  return (
    <main className="ml-[250px] mt-3 px-5 bg-[#f5f5f5] h-screen border border-red-400">
      <EmailForgotPassword />
    </main>
  );
};

export default AppointmentPage;
