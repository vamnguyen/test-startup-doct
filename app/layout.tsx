import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
import AuthProvider from "@/components/AuthProvider";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Doct | Without health, nothing can be done.",
  description:
    "Booking, Consulting, and Caring Health with Doctors and Professionals worldwide.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <SideBar />
          <Navigation />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
