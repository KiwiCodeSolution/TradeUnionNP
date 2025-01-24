"use client";
import React, { createContext, useContext } from "react";
import RootStore from "@/store/RootStore";

const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
  const rootStore = new RootStore();
  return <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>;
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};
