"use client";

import Title from "@/components/Title";
import Loader from "@/components/UI/loader/Loader";
import { BaseURL } from "@/constants/BaseUrl";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const UnsubscriptionPageComponent = ({ text }) => {
  const [status, setStatus] = useState(null); // "success" | "error" | null
  const [isLoading, setIsLoading] = useState(true);

  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const didRun = useRef(false);

  useEffect(() => {
    if (didRun.current) return;
    didRun.current = true;

    const unsubscribe = async () => {
      if (!email) {
        setStatus("error");
        setIsLoading(false);
        return;
      }
      console.log(email);
      try {
        const res = await fetch(`${BaseURL}subscription/unsubscribe?email=${email}`, {
          method: "GET",
        });

        if (!res.ok) throw new Error("Error");

        setStatus("success");
        toast.success(text.confirmationSuccess);
      } catch (error) {
        setStatus("error");
        toast.error(text.confirmationError);
      } finally {
        setIsLoading(false);
      }
    };

    unsubscribe();
  }, [email, text.confirmationSuccess, text.confirmationError]);

  // ---- Поки статус не визначений, показуємо Loader ----
  if (isLoading || status === null) {
    return <Loader />;
  }

  // ---- Формуємо текст повідомлення ----
  const renderText = () => {
    switch (status) {
      case "success":
        return (
          <>
            {text.successText[0]}
            <span className="text-red italic"> {email} </span>
            {text.successText[1]}
          </>
        );

      case "error":
        return (
          <>
            {text.errorText[0]}
            <span className="text-red italic"> {email} </span>
            {text.errorText[1]}
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full flex flex-col gap-y-2 py-5">
      <Title tag="h3" styles="text-center text-2xl font-bold leading-[65px]">
        {renderText()}
      </Title>
    </div>
  );
};

export default UnsubscriptionPageComponent;
