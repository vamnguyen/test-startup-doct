import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

const HomePage = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  } else {
    redirect("/login");
  }
};

export default HomePage;
