"use client";

import { SessionProvider } from "next-auth/react";

interface IAuthProvider {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: IAuthProvider) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
