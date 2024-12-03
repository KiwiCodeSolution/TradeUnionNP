"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getContacts } from "@/services/contactsService";

const EmailAndSocLinks = ({ section, title, isMobile }) => {
  const [contacts, setContacts] = useState(null);
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await getContacts();
        const [{ _id, __v, ...initialContacts }] = response.data;
        setContacts(initialContacts);

        setSocLinks(prevSocLinks =>
          prevSocLinks.map(link => ({
            ...link,
            link: initialContacts[link.title] || link.link,
          }))
        );
      } catch (err) {
        setError("Не вдалося завантажити контакти");
        console.error("Помилка завантаження контактів:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchContacts();
  }, []);

  if (loading) {
    return <div className="hidden md:block">Завантаження...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return isMobile ? (
    <>
      {contacts && (
        <a href={`mailto:${contacts.mail}`} className="text-white text-base mt-10">
          {contacts.mail}
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
      {contacts && (
        <a
          href={`mailto:${contacts.mail}`}
          className="text-red text-base text-center md:text-left underline underline-offset-1 hover:underline-offset-4"
        >
          {contacts.mail}
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
};

export default EmailAndSocLinks;
