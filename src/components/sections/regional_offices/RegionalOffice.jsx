"use client";
import Image from "next/image";
import Post from "@/images/contacts/mail.svg";
import Tell from "@/images/contacts/phone.svg";
import { useState } from "react";
import RedDot from "@/components/UI/RedDot";

const RegionalOffice = ({ item }) => {
  const [isShowAdmissionAddress, setIsShowAdmissionAddress] = useState(false);
  const [isShowApplicationAddress, setIsShowApplicationAddress] = useState(false);
  const [isShowCommittee, setIsShowCommittee] = useState(false);

  return (
    <article className="w-full h-fit flex flex-col rounded-2xl overflow-hidden">
      <Image src={item.image} width={100} height={80} alt={`це зображення членів ${item.region}`} />
      <ul className="w-full p-8 flex flex-col bg-white gap-y-8 border-b-[2px] border-bgGrey">
        <li className="flex gap-x-8 items-center">
          <Image
            src={item.avatar}
            width={96}
            height={96}
            alt={`фото регіонального голови ${item.region}`}
          />
          <div className="flex flex-col gap-y-2">
            <p className="text-[22px] font-bold leading-[1.3]">{item.name}</p>
            <p className="text-[15px]">{item.position} || Вакансія</p>
          </div>
        </li>
        <li className="flex flex-col gap-y-2">
          <div className="flex gap-x-2 items-center">
            <Image src={Tell} width={20} height={20} alt="червона телефонна трубка" />
            <a href={`tel:${item.tel}`} className="text-[15px] hover:tex-red">
              {item.tel}
            </a>
          </div>
          <div className="flex gap-x-2 items-center">
            <Image src={Post} width={21} height={19} alt="червоний поштовий конверт" />
            <a href={`mailto:${item.email}`} className="text-[15px] hover:tex-red">
              {item.email}
            </a>
          </div>
        </li>
        <li className="flex flex-col pb-4 border-b-[2px] border-bgGrey">
          <div className="flex items-center justify-between">
            <p className="text-[15px] font-bold">Адреса відправлення Заяв на вступ:</p>{" "}
            <button onClick={() => setIsShowAdmissionAddress(!isShowAdmissionAddress)}>+</button>
          </div>

          {isShowAdmissionAddress && <p>{item.admission_address}</p>}
        </li>
        <li className="flex flex-col pb-4 border-b-[2px] border-bgGrey">
          <div className="flex items-center justify-between">
            <p className="text-[15px] font-bold">
              Адреса відправлення Заяв на Матеріальну допомогу:
            </p>{" "}
            <button onClick={() => setIsShowApplicationAddress(!isShowApplicationAddress)}>
              +
            </button>
          </div>
          {isShowApplicationAddress && (
            <p>
              {item.application_address}|| м. Полтава, відділення “Нової пошти” №23; за шаблоном
              внутрішніх відправок “Матеріальна допомога від Профспілки”
            </p>
          )}
        </li>
        <li className="flex flex-col">
          <div className="flex items-center justify-between">
            <p className="text-[15px] font-bold">
              Склад Профкому {item.region_name} первинної профспілкової організації:
            </p>{" "}
            <button onClick={() => setIsShowCommittee(!isShowCommittee)}>+</button>
          </div>
          {isShowCommittee && (
            <ul className="flex flex-col">
              {item.committee.map(el => (
                <li className="w-full flex gap-x-3" key={el}>
                  <RedDot />
                  <p className="w-[calc(100%-9px-12px)]">{el}</p>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
      <div>
        <button>новини </button>
        <button>бланки</button>
      </div>
    </article>
  );
};

export default RegionalOffice;
