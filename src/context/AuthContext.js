"use client";

import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { BaseURL } from "@/constants/BaseUrl";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const generateRandomToken = () => {
    const token = Math.random().toString(36).substr(2);
    localStorage.setItem("token", token);
  };

  // const login = async (username, password) => {
  //   const response = await fetch(`${BaseURL}auth/login`, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ username, password }),
  //   });

  //   if (response.ok) {
  //     const data = await response.json();
  //     setUser(data.user);
  //     router.push("/uk/admin/news");
  //   } else {
  //     throw new Error("Invalid login credentials");
  //   }
  // };

  // const logout = () => {
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("user");

  //   router.push("/uk/login");
  // };

  // return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
