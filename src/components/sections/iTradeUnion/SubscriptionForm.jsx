"use client";

import Button from "@/components/UI/buttons/Buttons";
import { useState } from "react";

const SubscriptionForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!email) {
      setError("Будь ласка, введіть ваш email.");
      return;
    }
    setError("");
    console.log("Email для підписки:", email);

    setEmail("");
  };

  const handleFocus = () => {
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-y-5 md:flex-row relative">
      <input
        type="email"
        className="p-5 pr-12 w-full md:w-[440px] border-0 focus:outline-none focus:shadow-none rounded-full h-[60px] bg-bgGrey"
        value={email}
        onChange={e => setEmail(e.target.value)}
        onFocus={handleFocus}
        placeholder="Ваш email"
      />
      {error && (
        <p className="absolute -bottom-6 left-2 italic text-red text-lg">
          Будь ласка, введіть ваш email.
        </p>
      )}
      <Button
        btnType="submit"
        style={"static mx-auto md:absolute top-0 right-[calc(100%-440px-84px)]"}
        view="red"
      >
        Підписатись
      </Button>
    </form>
  );
};

export default SubscriptionForm;
