"use client";
import { default as Mail, default as Post } from "@/images/contacts/mail.svg";
import Phone from "@/images/contacts/phone.svg";
import Tell from "@/images/phone-white.svg";
import { StoreProvider, useStore } from "@/store/StoreProvider";
import { formatPhoneNumber } from "@/utils/formatPhoneNumber";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import { useState } from "react";

const TelMailStoreComponent = observer(({ director, page, id }) => {
  const { officesStore } = useStore();
  const [isShowContacts, setIsShowContacts] = useState("");
  const [visiblePhone, setVisiblePhone] = useState(false);
  const [loading, setLoading] = useState(false);

  const vacancy = { phone: "+380677008125", email: "help@profspilka.org" };

  const handleShowContacts = async type => {
    if (isShowContacts === type) {
      setIsShowContacts("");
      return;
    }

    setIsShowContacts(type);

    setLoading(true);
    await officesStore.fetchAllOffices();
    setLoading(false);

    if (type === "tell") setVisiblePhone(true);
  };

  const office = officesStore.offices.find(o => o._id === id) || {};
  const phoneToShow = director ? office.phone || vacancy.phone : vacancy.phone;
  const emailToShow = director ? office.email || vacancy.email : vacancy.email;

  // ф-я для рендера контенту з анімацією
  const renderPhoneBlock = () => {
    return (
      <div
        className={`transition-all duration-500 ease-in-out ${
          isShowContacts === "tell" && visiblePhone ? "max-w-xs opacity-100" : "max-w-0 opacity-0"
        } w-40`}
      >
        {isShowContacts === "tell" && !loading && (
          <p className="whitespace-nowrap">{formatPhoneNumber(phoneToShow)}</p>
        )}
      </div>
    );
  };

  const renderEmailBlock = () => {
    return (
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isShowContacts === "email" ? "max-w-xs opacity-100" : "max-w-0 opacity-0"
        }`}
      >
        {isShowContacts === "email" && !loading && <p className="text-center">{emailToShow}</p>}
      </div>
    );
  };

  return page === "ppo" ? (
    <li className="flex flex-col h-[100px] justify-between">
      {/* Мобілка */}
      <div className="flex gap-x-4 mx-auto xl:hidden items-center h-full">
        <a
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-redButtonHover bg-red"
          href={isShowContacts === "tell" && !loading ? `tel:${phoneToShow}` : "#"}
          onClick={() => handleShowContacts("tell")}
        >
          <Image src={Tell} width={20} height={20} alt="" />
        </a>
        <a
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-redButtonHover border border-red"
          href={isShowContacts === "email" && !loading ? `mailto:${emailToShow}` : "#"}
          onClick={() => handleShowContacts("email")}
        >
          <Image src={Post} width={21} height={19} alt="" />
        </a>
      </div>

      {/* Десктоп */}
      <div className="h-full gap-y-1 items-center hidden xl:flex justify-center">
        <div className="flex gap-x-2 items-center">
          <button
            className="w-14 h-14 rounded-full flex items-center justify-center hover:shadow-redButtonHover bg-red"
            onClick={() => handleShowContacts("tell")}
          >
            <Image src={Tell} width={20} height={20} alt="" />
          </button>
          {renderPhoneBlock()}
        </div>

        <div className="flex gap-x-2 items-center">
          <button
            className="w-14 h-14 rounded-full flex items-center justify-center hover:shadow-redButtonHover bg-white border border-red relative z-[2]"
            onClick={() => handleShowContacts("email")}
          >
            <Image src={Post} width={21} height={19} alt="" />
          </button>
          {renderEmailBlock()}
        </div>
      </div>
    </li>
  ) : (
    <div className="flex flex-col h-[60px] justify-between">
      {/* Мобілка */}
      <div className="flex gap-x-4 mx-auto xl:hidden">
        <a
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-redButtonHover bg-red"
          href={isShowContacts === "tell" && !loading ? `tel:${phoneToShow}` : "#"}
          onClick={async () => {
            if (!officesStore.offices.length) {
              setLoading(true);
              await officesStore.fetchAllOffices();
              setLoading(false);
            }

            const number = director
              ? officesStore.offices.find(o => o._id === id)?.phone || vacancy.phone
              : vacancy.phone;

            setVisiblePhone(true);
            setIsShowContacts("tell");

            // одразу переходимо на телефон
            if (number) {
              window.location.href = `tel:${number}`;
            }
          }}
        >
          <Image src={Tell} width={20} height={20} alt="" />
        </a>
        <a
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-redButtonHover border border-red"
          href={isShowContacts === "email" && !loading ? `mailto:${emailToShow}` : "#"}
          onClick={async () => {
            if (!officesStore.offices.length) {
              setLoading(true);
              await officesStore.fetchAllOffices();
              setLoading(false);
            }

            const emailAddress = director
              ? officesStore.offices.find(o => o._id === id)?.email || vacancy.email
              : vacancy.email;

            setIsShowContacts("email");

            // одразу переходимо у поштовий клієнт
            if (emailAddress) {
              window.location.href = `mailto:${emailAddress}`;
            }
          }}
        >
          <Image src={Post} width={21} height={19} alt="" />
        </a>
      </div>

      {/* Десктоп */}
      <div className="hidden xl:flex gap-x-4 mx-auto">
        <button
          className="flex gap-x-3 items-center text-grey hover:text-red"
          onClick={() => handleShowContacts("tell")}
        >
          <Image src={Phone} width={20} height={20} alt="" />
        </button>
        <button
          className="flex gap-x-3 items-center text-red hover:underline hover:underline-offset-1"
          onClick={() => handleShowContacts("email")}
        >
          <Image src={Mail} width={21} height={19} alt="" />
        </button>
      </div>

      {/* Відображення даних */}
      <div className="hidden xl:block">
        {isShowContacts === "tell" && !loading && (
          <p className="text-center">{formatPhoneNumber(phoneToShow)}</p>
        )}
        {isShowContacts === "email" && !loading && <p className="text-center">{emailToShow}</p>}
      </div>
    </div>
  );
});

export default function TelMailBlock({ director, region, page, id }) {
  return (
    <StoreProvider>
      <TelMailStoreComponent director={director} region={region} page={page} id={id} />
    </StoreProvider>
  );
}
