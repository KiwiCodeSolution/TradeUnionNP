"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const generateRandomToken = () => {
    const token = Math.random().toString(36).substr(2);
    localStorage.setItem("token", token);
  };

  const login = async (username, password) => {
    //тимчасове рішення
    generateRandomToken();
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      localStorage.setItem("user", "Admin");
      router.push("/admin/news");
    }
    // const response = await fetch("/api/login", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ username, password }),
    // });
    // if (response.ok) {
    //   const data = await response.json();
    //   setUser(data.user);
    //   localStorage.setItem("token", data.token);
    //   router.push("/admin/news");
    // } else {
    //   throw new Error("Invalid login credentials");
    // }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    router.push("/login");
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
