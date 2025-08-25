"use client";
import Image from "next/image";
import Users from "@/images/icon-users.svg";
import { useEffect, useState } from "react";
import RedDot from "@/components/UI/RedDot";

import NoPhoto from "@/images/no-photo.png";
import ShowButton from "@/components/UI/buttons/ShowButton";
import TelMailBlock from "./TelMailBlock";
import { Link } from "@/navigation";
import LinkButton from "@/components/UI/buttons/LinkButton";
import { Edit } from "@/components/icons/IconsComponents";
import { BaseURLImage } from "@/constants/BaseUrl";

const RegionalOffice = ({ item, locale, section, source }) => {
  const [isShowAdmissionAddress, setIsShowAdmissionAddress] = useState(false);
  const [isShowApplicationAddress, setIsShowApplicationAddress] = useState(false);
  const [isShowCommittee, setIsShowCommittee] = useState(false);
  const [imageSrc, setImageSrc] = useState(NoPhoto);
  const [avatarSrc, setAvatarSrc] = useState(NoPhoto);

  useEffect(() => {
    const newSrcImage = (item.image && `${BaseURLImage}${item.image}`) || NoPhoto;
    setImageSrc(newSrcImage);
    const newSrcAvatar = (item.avatar && `${BaseURLImage}${item.avatar}`) || NoPhoto;
    setAvatarSrc(newSrcAvatar);
  }, [item.image, item.avatar]);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const pattern = item.region.split(" ")[0].slice(0, -1);
  const isHidden = item.is_active === false && section === "admin";

  return (
    <article
      className={`w-full flex flex-col ${isHidden ? "opacity-50" : "opacity-100"} ${
        source === "search" ? "xl:w-[900px] mx-auto pb-10" : "h-fit rounded-2xl overflow-hidden"
      }`}
    >
      <div
        className={`w-full relative overflow-hidden bg-black ${
          source === "search" ? "h-200 xl:h-[400px] mx-auto " : "h-80  "
        }`}
      >
        {item.image && (
          <>
            <Image
              src={imageSrc}
              width={source === "search" ? 900 : 560}
              height={source === "search" ? 400 : 320}
              alt={`це зображення членів ${item.region}`}
              className="md:hidden h-full object-cover opacity-50"
            />
            <Image
              src={imageSrc}
              width={source === "search" ? 900 : 560}
              height={source === "search" ? 400 : 320}
              alt={`це зображення членів ${item.region}`}
              className="hidden md:block w-full object-cover opacity-50"
            />
          </>
        )}
        {section === "admin" && (
          <div className="w-full h-full absolute top-0 left-0 p-12 flex flex-col justify-start z-[5]">
            <LinkButton
              view={"red"}
              goToPage
              goTo={`/admin/ppo/${item._id}`}
              style={"font-semibold min-w-[163px] group"}
            >
              Редагувати запис{" "}
              <Edit className={"fill-white group-hover:fill-transparent w-8 h-8"} />
            </LinkButton>
          </div>
        )}

        <div className="w-full h-full absolute top-0 left-0 p-12 flex flex-col justify-end">
          <div className="flex flex-col gap-y-1">
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
      </div>

      <ul
        className={`w-full p-8 flex gap-y-8 border-b-[2px] ${
          source === "search" ? "border-white justify-between" : "border-bgGrey bg-white flex-col"
        }`}
      >
        <li className="flex md:min-h-[132px] xl:h-full flex-col md:flex-row gap-8 items-center">
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <Image
              src={item.director ? avatarSrc : NoPhoto}
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

        <TelMailBlock
          email={item.email}
          phone={item.phone}
          director={item.director}
          region={item.region}
          page={"ppo"}
        />
      </ul>
      <ul
        className={`w-full p-8 flex gap-y-8 border-b-[2px] flex-col ${
          source === "search" ? "border-white" : "border-bgGrey bg-white flex-col"
        }`}
      >
        <li
          className={`flex flex-col pb-4 border-b-[2px] ${
            source === "search" ? "border-white" : "border-bgGrey"
          }`}
        >
          <div className="flex items-center justify-between">
            <p className="w-4/5 text-[15px] font-bold">Адреса відправлення Заяв на вступ:</p>
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
              {item.application_address
                ? item.application_address
                : item.director
                ? `Документи в ${pattern}у ППО`
                : "За шаблоном внутрішніх відправлень “Матеріальна допомога від Профспілки”"}
            </p>
          </div>
        </li>
        <li
          className={`flex flex-col pb-4 border-b-[2px] ${
            source === "search" ? "border-white" : "border-bgGrey"
          }`}
        >
          <div className="flex items-center justify-between">
            <p className="w-4/5 text-[15px] font-bold">
              Адреса відправлення Заяв на Матеріальну допомогу:
            </p>
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
            <p>
              {item.admission_address ||
                "За шаблоном внутрішніх відправлень “Матеріальна допомога від Профспілки”"}
            </p>
          </div>
        </li>
        <li className="flex flex-col">
          <div className="flex items-center justify-between">
            <p className="w-4/5 text-[15px] font-bold">
              Склад Профкому {pattern + "ої"} первинної профспілкової організації:
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
              {item.committee.map(
                el =>
                  el !== "" && (
                    <li className="w-full flex items-center gap-x-3" key={el}>
                      <RedDot />
                      <p className="w-[calc(100%-9px-12px)]">{el}</p>
                    </li>
                  )
              )}
            </ul>
          </div>
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
          locale={locale}
        >
          бланки
        </Link>
      </div>
    </article>
  );
};

export default RegionalOffice;
