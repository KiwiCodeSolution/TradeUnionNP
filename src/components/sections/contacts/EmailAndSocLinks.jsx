"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { observer } from "mobx-react-lite";
import { StoreProvider, useStore } from "@/store/StoreProvider";
import { toJS } from "mobx";

const Skeleton = ({ isMobile, section }) => (
  <div
    className={`${isMobile ? "mt-10" : "flex gap-x-4 items-center"} ${
      section === "footer"
        ? "flex-col gap-y-4"
        : "hidden xl:flex gap-x-5 items-center justify-between"
    }`}
  >
    <div className="h-5 w-40 bg-gray-300 rounded animate-pulse mb-3" />
    <div className="flex gap-2">
      {[...Array(5)].map((_, index) => (
        <div key={index} className="w-8 h-8 bg-gray-300 rounded-full animate-pulse" />
      ))}
    </div>
  </div>
);

const EmailAndSocLinksComponent = observer(({ section, title, isMobile }) => {
  const { contactsStore } = useStore();
  const allContacts = toJS(contactsStore.contacts);

  const [socLinks, setSocLinks] = useState([
    {
      title: "facebook",
      link: "",
      iconRed: "/images/soc-icons/facebook-red.svg",
      iconWhite: "/images/soc-icons/facebook-white.svg",
    },
    {
      title: "instagram",
      link: "",
      iconRed: "/images/soc-icons/instagram-red.svg",
      iconWhite: "/images/soc-icons/instagram-white.svg",
    },
    {
      title: "telegram",
      link: "",
      iconRed: "/images/soc-icons/telegram-red.svg",
      iconWhite: "/images/soc-icons/telegram-white.svg",
    },
    {
      title: "youtube",
      link: "",
      iconRed: "/images/soc-icons/youtube-red.svg",
      iconWhite: "/images/soc-icons/youtube-white.svg",
    },
    {
      title: "viber",
      link: "",
      iconRed: "/images/soc-icons/viber-red.svg",
      iconWhite: "/images/soc-icons/viber-white.svg",
    },
  ]);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Дозволяємо рендер тільки на клієнті
  }, []);

  useEffect(() => {
    if (!contactsStore.isLoading && !contactsStore.contacts?.length) {
      contactsStore.fetchContacts();
    }
  }, [contactsStore]);

  useEffect(() => {
    if (allContacts && allContacts.length > 0) {
      const [{ _id, __v, ...initialContacts }] = allContacts;
      setSocLinks(prevLinks =>
        prevLinks.map(link => ({
          ...link,
          link: initialContacts[link.title] || link.link,
        }))
      );
    }
  }, [contactsStore.contacts]);

  if (contactsStore.isLoading || !isClient) {
    return <Skeleton isMobile={isMobile} section={section} />;
  }

  return isMobile ? (
    <>
      {allContacts && (
        <a href={`mailto:${allContacts[0].mail}`} className="text-white text-base mt-10">
          {allContacts[0].mail}
        </a>
      )}

      <div className="flex gap-x-2">
        {socLinks.map(
          el =>
            el.link && (
              <a
                key={el.link}
                href={el.link}
                target="_blank"
                className="flex items-center justify-center"
              >
                <Image
                  src={el.iconWhite}
                  width={25}
                  height={25}
                  alt={`зображення білої іконки ${el.title} у червоному колі`}
                />
              </a>
            )
        )}
      </div>
    </>
  ) : (
    <article
      className={`flex ${
        section === "footer"
          ? "flex-col gap-y-4"
          : "hidden xl:flex gap-x-5 items-center justify-between"
      } `}
    >
      {section === "footer" && (
        <h3 className="text-base text-liteGrey text-center md:text-left mb-1 uppercase">{title}</h3>
      )}
      {allContacts && (
        <a
          href={`mailto:${allContacts[0].mail}`}
          className="text-red text-base text-center md:text-left underline underline-offset-1 hover:underline-offset-4"
        >
          {allContacts[0].mail}
        </a>
      )}

      <div className="flex gap-x-2">
        {socLinks.map(
          el =>
            el.link && (
              <a
                key={el.title}
                href={el.link}
                target="_blank"
                className="flex items-center justify-center"
              >
                <Image
                  src={el.iconRed}
                  width={25}
                  height={25}
                  alt={`зображення іконки ${el.title} у червоному колі`}
                />
              </a>
            )
        )}
      </div>
    </article>
  );
});

export default function EmailAndSocLinks({ section, title, isMobile }) {
  return (
    <StoreProvider>
      <EmailAndSocLinksComponent section={section} title={title} isMobile={isMobile} />
    </StoreProvider>
  );
}
