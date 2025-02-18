"use client";
import { formatPhoneNumber } from "@/utils/formatPhoneNumber";
import Image from "next/image";
import Post from "@/images/contacts/mail.svg";
import Tell from "@/images/phone-white.svg";
import Phone from "@/images/contacts/phone.svg";
import Mail from "@/images/contacts/mail.svg";
import { useState } from "react";

const TelMailBlock = ({ phone, email, director, region, page }) => {
  const [isShowContacts, setIsShowContacts] = useState("");

  function handleShowContacts(type) {
    if (isShowContacts === "tell" && type === "tell") {
      setIsShowContacts("");
      return;
    }
    if (isShowContacts === "email" && type === "email") {
      setIsShowContacts("");
      return;
    } else setIsShowContacts(type);
  }

  const vacancy = { phone: "+380677008125", email: "help@profspilka.org" };
  return page === "ppo" ? (
    <li className="flex flex-col h-[100px] justify-between">
      <div className="flex gap-x-4 mx-auto xl:hidden items-center h-full">
        <a
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-redButtonHover bg-red"
          href={`tel:${phone}`}
        >
          <Image src={Tell} width={20} height={20} alt="червона телефонна трубка" />
        </a>
        <a
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-redButtonHover border border-red"
          href={`mailto:${email}&body=питання щодо ${region} профспілки`}
        >
          <Image src={Post} width={21} height={19} alt="червоний поштовий конверт" />
        </a>
      </div>
      <div className="h-full gap-y-1 items-center hidden xl:flex justify-center">
        <div className="flex gap-x-2 items-center">
          <button
            className="w-14 h-14 rounded-full flex items-center justify-center hover:shadow-redButtonHover bg-red"
            onClick={() => handleShowContacts("tell")}
          >
            <Image src={Tell} width={20} height={20} alt="червона телефонна трубка" />
          </button>

          <div
            className={`transition-all duration-500 ease-in-out ${
              isShowContacts === "tell" ? "max-w-xs opacity-100" : "max-w-0 opacity-0"
            } w-40`}
          >
            <p className="whitespace-nowrap">{formatPhoneNumber(phone)}</p>
          </div>
        </div>
        <div className="flex gap-x-2 items-center">
          <button
            className="w-14 h-14 rounded-full flex items-center justify-center hover:shadow-redButtonHover bg-white border border-red relative z-[2]"
            onClick={() => handleShowContacts("email")}
          >
            <Image src={Post} width={21} height={19} alt="червоний поштовий конверт" />
          </button>

          <div
            className={`overflow-hidden transition-all duration-500 ${
              isShowContacts === "email" ? "max-w-xs opacity-100" : "max-w-0 opacity-0"
            }`}
          >
            <p className="text-center"> {email}</p>
          </div>
        </div>
      </div>
    </li>
  ) : (
    <div className="flex flex-col h-[60px] justify-between">
      <div className="flex gap-x-4 mx-auto xl:hidden">
        <a
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-redButtonHover bg-red"
          href={director ? `tel:${phone}` : `tel:${vacancy.phone}`}
        >
          <Image src={Tell} width={20} height={20} alt="червона телефонна трубка" />
        </a>
        <a
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-redButtonHover border border-red"
          href={
            director
              ? `mailto:${email}&body=питання щодо ${region} профспілки`
              : `mailto:${vacancy.email}`
          }
        >
          <Image src={Post} width={21} height={19} alt="червоний поштовий конверт" />
        </a>
      </div>

      <div className="hidden xl:flex gap-x-4 mx-auto">
        <button
          className="flex gap-x-3 items-center text-grey hover:text-red"
          onClick={() => handleShowContacts("tell")}
        >
          <Image src={Phone} width={20} height={20} alt="червона телефонна трубка" />
        </button>
        <button
          className="flex gap-x-3 items-center text-red hover:underline hover:underline-offset-1"
          onClick={() => handleShowContacts("email")}
        >
          <Image src={Mail} width={21} height={19} alt="червоний поштовий конверт" />
        </button>
      </div>

      <div className="hidden xl:block">
        {isShowContacts === "tell" && (
          <p className="text-center">{formatPhoneNumber(director ? phone : vacancy.phone)}</p>
        )}
        {isShowContacts === "email" && (
          <p className="text-center">{director ? email : vacancy.email}</p>
        )}
      </div>
    </div>
  );
};

export default TelMailBlock;
