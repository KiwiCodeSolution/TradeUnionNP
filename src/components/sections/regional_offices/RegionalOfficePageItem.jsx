"use client";

import Users from "@/images/icon-users.svg";
import NoPhoto from "@/images/no-photo.png";
import Image from "next/image";
import Tell from "@/images/phone-white.svg";
import Post from "@/images/contacts/mail.svg";
import { formatPhoneNumber } from "@/utils/formatPhoneNumber";
import { useState } from "react";
import ShowButton from "@/components/UI/buttons/ShowButton";
import RedDot from "@/components/UI/RedDot";
import { Link } from "@/navigation";

const RegionalOfficePageItem = ({ office }) => {
  const [isShowAdmissionAddress, setIsShowAdmissionAddress] = useState(false);
  const [isShowApplicationAddress, setIsShowApplicationAddress] = useState(false);
  const [isShowCommittee, setIsShowCommittee] = useState(false);
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
  return (
    <article className="w-full xl:w-[900px] mx-auto flex flex-col pb-10">
      <div className="w-full h-200 xl:h-[400px] mx-auto overflow-hidden relative">
        <div className="w-fit mx-auto bg-black">
          <Image
            src={office.image}
            width={900}
            height={400}
            className="mx-auto h-full object-cover opacity-50"
          />
        </div>
        <div className="w-fit h-full absolute top-0 left-1 md:left-0 md:right-1/2 px-3 py-8 md:p-12 flex flex-col gap-y-1 justify-end">
          <h2 className="text-2xl font-bold leading-[1.3] text-white">{office.region}</h2>
          <p className="flex gap-x-4 items-center text-[15px] text-white opacity-75">
            <Image
              src={Users}
              width={21}
              height={20}
              alt="схематичне зображення людей, користувачів, прозорий фон білі контури"
              className=""
            />
            Кількість членів: {office.quantity} чол.
          </p>
        </div>
      </div>
      <ul className="w-full py-8 flex items-center justify-between gap-x-8 border-b-[2px] border-white">
        <li className="flex md:min-h-[132px] xl:h-full flex-col md:flex-row gap-8 items-center">
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <Image
              src={office.avatar || NoPhoto}
              width={96}
              height={96}
              alt={`фото регіонального голови ${office.region}`}
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <p className="text-[22px] font-bold leading-[1.3] text-center md:text-left">
              {office.director || "Вакансія"}
            </p>
            <p className="text-[15px] text-center md:text-left">{office.position} </p>
          </div>
        </li>
        <li className="flex flex-col h-[100px] justify-between">
          <div className="flex gap-x-4 mx-auto xl:hidden items-center h-full">
            <a
              className="w-14 h-14 rounded-full flex items-center justify-center shadow-redButtonHover bg-red"
              href={`tel:${office.phone}`}
            >
              <Image src={Tell} width={20} height={20} alt="червона телефонна трубка" />
            </a>
            <a
              className="w-14 h-14 rounded-full flex items-center justify-center shadow-redButtonHover border border-red"
              href={`mailto:${office.email}&body=питання щодо ${office.region} профспілки`}
            >
              <Image src={Post} width={21} height={19} alt="червоний поштовий конверт" />
            </a>
          </div>
          <div className="h-full gap-y-1 items-center hidden xl:flex">
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
                <p className="whitespace-nowrap">{formatPhoneNumber(office.phone)}</p>
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
                <p className="text-center"> {office.email}</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <ul>
        <li className="flex flex-col py-4 border-b-[2px] border-white">
          <div className="flex items-center justify-between">
            <p className="w-4/5 text-[15px] font-bold">Адреса відправлення Заяв на вступ:</p>
            <ShowButton
              style={isShowAdmissionAddress ? "-rotate-90" : "rotate-90"}
              btnStyle={"border-[1px] border-red"}
              func={() => setIsShowAdmissionAddress(!isShowAdmissionAddress)}
            />
          </div>

          <div
            className={`transition-all duration-500 ease-in-out ${
              isShowAdmissionAddress ? "max-h-20 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <p>{office.admission_address || "Адресу не вказано"}</p>
          </div>
        </li>
        <li className="flex flex-col py-4 border-b-[2px] border-white">
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
          <div
            className={`transition-all duration-500 ease-in-out ${
              isShowApplicationAddress
                ? "max-h-20 opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <p>
              {office.application_address ||
                "м. Полтава, відділення “Нової пошти” №23; за шаблоном внутрішніх відправок “Матеріальна допомога від Профспілки”"}
            </p>
          </div>
        </li>
        <li className="flex flex-col py-4">
          <div className="flex items-center justify-between">
            <p className="w-4/5 text-[15px] font-bold">
              Склад Профкому {office.region_name} первинної профспілкової організації:
            </p>
            <ShowButton
              style={isShowCommittee ? "-rotate-90" : "rotate-90"}
              btnStyle={"border-[1px] border-red"}
              func={() => setIsShowCommittee(!isShowCommittee)}
            />
          </div>
          <div
            className={`transition-all duration-500 ease-in-out ${
              isShowCommittee ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <ul className="flex flex-col mt-4 pl-4">
              {office.committee.map(el => (
                <li className="w-full flex items-center gap-x-3" key={el}>
                  <RedDot />
                  <p className="w-[calc(100%-9px-12px)]">{el}</p>
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ul>
      <div className="flex gap-x-2 items-center">
        <a
          href={office.link_news}
          className="w-1/2 py-4 px-8 border-[2px] border-white rounded bg-white uppercase text-[15px] font-bold text-red text-center hover:bg-red hover:border-red hover:text-white"
          target="_blank"
        >
          новини
        </a>
        <Link
          href="/blanky"
          className="w-1/2 py-4 px-8 border-[2px] border-white rounded bg-white uppercase text-[15px] font-bold text-red hover:bg-red hover:border-red text-center hover:text-white"
        >
          бланки
        </Link>
      </div>
    </article>
  );
};

export default RegionalOfficePageItem;
