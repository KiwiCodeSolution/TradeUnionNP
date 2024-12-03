"use client";

import Title from "@/components/Title";
import Loader from "@/components/UI/loader/Loader";
import { confirmSubscription } from "@/services/subscriptionService";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const SubscriptionPageComponent = ({ text }) => {
  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  useEffect(() => {
    const confirm = async () => {
      if (!email) return;
      setIsLoading(true);
      try {
        await confirmSubscription({ email });
        setStatus("success");
        setIsLoading(false);
        toast.success(text.confirmationSuccess);
      } catch (error) {
        if (error.message === "Internal server error") {
          setStatus("exists");
          setIsLoading(false);
          toast.error(text.confirmationExists);
        } else {
          setStatus("error");
          setIsLoading(false);
          toast.error(error.message || text.confirmationError);
        }
      }
    };

    confirm();
  }, [email]);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="w-full flex flex-col gap-y-2 py-5">
      <Title tag={"h3"} styles={"text-center text-2xl font-bold leading-[65px]"}>
        {status === "success"
          ? text.successText[0]
          : status === "exists"
          ? text.existsText[0]
          : text.errorText[0]}
        <span className="text-red italic"> {email} </span>
        {status === "success"
          ? text.successText[1]
          : status === "exists"
          ? text.existsText[1]
          : text.errorText[1]}
      </Title>
    </div>
  );
};

export default SubscriptionPageComponent;
