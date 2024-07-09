"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const withAuth = WrappedComponent => {
  return props => {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
      console.log("withAuth", user);
      if (!user) {
        router.push("/login");
      }
    }, [user, router]);

    return user ? <WrappedComponent {...props} /> : null;
  };
};

export default withAuth;
