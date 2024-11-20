"use client";

import Button from "@/components/UI/buttons/Buttons";
import { subscription } from "@/services/subscriptionService";
import { useState } from "react";
import toast from "react-hot-toast";

const SubscriptionForm = ({ button, errorText }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();

    const data = {
      name: "name",
      email,
      subscribed: true,
      array_subscripts: ["subscripts"],
    };

    if (!email) {
      toast.error(`Будь ласка, введіть ваш email.`);
      setError("Будь ласка, введіть ваш email.");
      return;
    }

    setError("");
    try {
      const res = await subscription(data);

      if (res.email) {
        toast.success("Запит на підписку відправлено. Перевірте пошту для підтвердження!");
      }
      setEmail("");
    } catch (error) {
      toast.error("Помилка при спробі підписки");
      console.error("Помилка у запиті підписки:", error);
    }
  };

  const handleFocus = () => {
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-y-5 xl:flex-row relative">
      <input
        type="email"
        className="p-5 pr-12 w-full xl:w-[440px] border-0 focus:outline-none focus:shadow-none rounded-full h-[60px] bg-bgGrey"
        value={email}
        onChange={e => setEmail(e.target.value)}
        onFocus={handleFocus}
        placeholder="Ваш email"
      />
      {error && <p className="absolute -bottom-6 left-2 italic text-red text-lg">{errorText}</p>}
      <Button
        btnType="submit"
        style={"static mx-auto w-full xl:absolute top-0 right-[calc(100%-440px-84px)] xl:w-fit"}
        view="red"
      >
        {button}
      </Button>
    </form>
  );
};

export default SubscriptionForm;
