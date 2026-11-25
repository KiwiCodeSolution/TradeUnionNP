"use client";

import { useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import { installUnauthorizedHandler } from "@/lib/api/unauthorized";

export const Providers = ({ children }) => {
  useEffect(() => {
    installUnauthorizedHandler();
  }, []);

  return <SessionProvider>{children}</SessionProvider>;
};
