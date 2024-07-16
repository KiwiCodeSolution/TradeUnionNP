"use client";
import Image from "next/image";
import Users from "@/images/icon-users.svg";
import { useState } from "react";
import RedDot from "@/components/UI/RedDot";
import Link from "next/link";
import NoPhoto from "@/images/no-photo.svg";
import ShowButton from "@/components/UI/buttons/ShowButton";
import Tell from "@/images/phone-white.svg";
import Post from "@/images/contacts/mail.svg";
import { formatPhoneNumber } from "@/utils/formatPhoneNumber";

const RegionalOffice = ({ item }) => {
  const [isShowAdmissionAddress, setIsShowAdmissionAddress] = useState(false);
  const [isShowApplicationAddress, setIsShowApplicationAddress] = useState(false);
  const [isShowCommittee, setIsShowCommittee] = useState(false);
  const [isShowContacts, setIsShowContacts] = useState("");

  function handleShowContacts(type) {
    if (isShowContacts === "tell" && type === "tell") {
      console.log("type === tell ");
      setIsShowContacts("");
      return;
    }
    if (isShowContacts === "email" && type === "email") {
      console.log("type === email ");
      setIsShowContacts("");
      return;
    } else setIsShowContacts(type);
  }

  return (
    <article className="w-full h-fit flex flex-col rounded-2xl overflow-hidden">
      <div className="w-full h-80 relative overflow-hidden bg-black">
        <Image
          src={item.image}
          width={560}
          height={320}
          alt={`це зображення членів ${item.region}`}
          className="md:hidden h-full object-cover opacity-50"
        />
        <Image
          src={item.image}
          width={560}
          height={320}
          alt={`це зображення членів ${item.region}`}
          className="hidden md:block w-full object-cover opacity-50"
        />
        <div className="w-full h-full absolute top-0 left-0 p-12 flex flex-col gap-y-1 justify-end">
          <h2 className="text-2xl font-bold leading-[1.3] text-white">{item.region}</h2>
          <p className="flex gap-x-4 items-center text-[15px] text-white opacity-75">
            <Image
              src={Users}
              width={21}
              height={20}
              alt="схематичне зображення людей, користувачів, прозорий фон білі контури"
              className=""
            />
            Кількість членів: {item.quantity} чол.
          </p>
        </div>
      </div>

      <ul className="w-full p-8 flex flex-col bg-white gap-y-8 border-b-[2px] border-bgGrey">
        <li className="flex md:min-h-[132px] xl:h-full flex-col md:flex-row gap-8 items-center">
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <Image
              src={item.avatar || NoPhoto}
              width={96}
              height={96}
              alt={`фото регіонального голови ${item.region}`}
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <p className="text-[22px] font-bold leading-[1.3] text-center md:text-left">
              {item.director || "Вакансія"}
            </p>
            <p className="text-[15px] text-center md:text-left">{item.position} </p>
          </div>
        </li>
        <li className="flex flex-col h-[100px] justify-between">
          <div className="flex gap-x-4 mx-auto xl:hidden ">
            <a
              className="w-14 h-14 rounded-full flex items-center justify-center shadow-redButtonHover bg-red"
              href={`tel:${item.phone}`}
            >
              <Image src={Tell} width={20} height={20} alt="червона телефонна трубка" />
            </a>
            <a
              className="w-14 h-14 rounded-full flex items-center justify-center shadow-redButtonHover border border-red"
              href={`mailto:${item.email}&body=питання щодо ${item.region} профспілки`}
            >
              <Image src={Post} width={21} height={19} alt="червоний поштовий конверт" />
            </a>
          </div>

          <div className="hidden xl:flex gap-x-4 mx-auto">
            <button
              className="w-14 h-14 rounded-full flex items-center justify-center shadow-redButtonHover bg-red"
              onClick={() => handleShowContacts("tell")}
            >
              <Image src={Tell} width={20} height={20} alt="червона телефонна трубка" />
            </button>
            <button
              className="w-14 h-14 rounded-full flex items-center justify-center shadow-redButtonHover border border-red"
              onClick={() => handleShowContacts("email")}
            >
              <Image src={Post} width={21} height={19} alt="червоний поштовий конверт" />
            </button>
          </div>

          <div className="hidden xl:block">
            {isShowContacts === "tell" && (
              <p className="text-center">{formatPhoneNumber(item.phone)}</p>
            )}
            {isShowContacts === "email" && <p className="text-center">{item.email}</p>}
          </div>
        </li>
        <li className="flex flex-col pb-4 border-b-[2px] border-bgGrey">
          <div className="flex items-center justify-between">
            <p className="w-4/5 text-[15px] font-bold">Адреса відправлення Заяв на вступ:</p>
            <ShowButton
              style={isShowAdmissionAddress ? "-rotate-90" : "rotate-90"}
              btnStyle={"border-[1px] border-red"}
              func={() => setIsShowAdmissionAddress(!isShowAdmissionAddress)}
            />
          </div>

          {isShowAdmissionAddress && <p>{item.admission_address || "Адресу не вказано"}</p>}
        </li>
        <li className="flex flex-col pb-4 border-b-[2px] border-bgGrey">
          <div className="flex items-center justify-between">
            <p className="w-4/5 text-[15px] font-bold">
              Адреса відправлення Заяв на Матеріальну допомогу:
            </p>
            <ShowButton
              style={isShowApplicationAddress ? "-rotate-90" : "rotate-90"}
              btnStyle={"border-[1px] border-red"}
              func={() => setIsShowApplicationAddress(!isShowApplicationAddress)}
            />
          </div>
          {isShowApplicationAddress && (
            <p>
              {item.application_address ||
                "м. Полтава, відділення “Нової пошти” №23; за шаблоном внутрішніх відправок “Матеріальна допомога від Профспілки”"}
            </p>
          )}
        </li>
        <li className="flex flex-col">
          <div className="flex items-center justify-between">
            <p className="w-4/5 text-[15px] font-bold">
              Склад Профкому {item.region_name} первинної профспілкової організації:
            </p>
            <ShowButton
              style={isShowCommittee ? "-rotate-90" : "rotate-90"}
              btnStyle={"border-[1px] border-red"}
              func={() => setIsShowCommittee(!isShowCommittee)}
            />
          </div>
          {isShowCommittee && (
            <ul className="flex flex-col mt-4 pl-4">
              {item.committee.map(el => (
                <li className="w-full flex items-center gap-x-3" key={el}>
                  <RedDot />
                  <p className="w-[calc(100%-9px-12px)]">{el}</p>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
      <div className="flex items-center bg-white">
        <a
          href={item.link_news}
          className="w-1/2 py-4 px-8 border-r-[2px] border-bgGrey uppercase text-[15px] font-bold text-red text-center hover:bg-red hover:text-white"
          target="_blank"
        >
          новини
        </a>
        <Link
          href="/blanky"
          className="w-1/2 py-4 px-8 uppercase text-[15px] font-bold text-red hover:bg-red text-center hover:text-white"
        >
          бланки
        </Link>
      </div>
    </article>
  );
};

export default RegionalOffice;
