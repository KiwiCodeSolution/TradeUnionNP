"use client";

import Title from "@/components/Title";
import { useSearchParams } from "next/navigation";

const SubscriptionPageComponent = ({ text }) => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  return (
    <div className="w-full flex flex-col gap-y-2 py-5">
      <Title tag={"h3"} styles={"text-center text-2xl font-bold leading-[65px]"}>
        {text[0]}
        <span className="text-red italic"> {email}</span>

        {text[1]}
      </Title>
    </div>
  );
};

export default SubscriptionPageComponent;
