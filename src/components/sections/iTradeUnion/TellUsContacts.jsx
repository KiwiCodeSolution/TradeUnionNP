"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const TellUsContacts = ({ currentContacts }) => {
  const [socLinks, setSocLinks] = useState([
    {
      title: "instagram",
      link: "",
      iconColor: "/images/soc-icons/instagram-color.svg",
      style: "shinstagram",
    },
    {
      title: "youtube",
      link: "",
      iconColor: "/images/soc-icons/youtube-color_1.svg",
      style: "shyoutobe",
    },
    {
      title: "telegram",
      link: "",
      iconColor: "/images/soc-icons/telegram-color.svg",
      style: "shtelegram",
    },
    {
      title: "facebook",
      link: "",
      iconColor: "/images/soc-icons/facebook-color.svg",
      style: "shfacebook",
    },
    {
      title: "viber",
      link: "",
      iconColor: "/images/soc-icons/viber-color.svg",
      style: "shviber",
    },
    {
      title: "messenger",
      link: "",
      iconColor: "/images/soc-icons/messanger-color.svg",
      style: "shmessanger",
    },
  ]);

  useEffect(() => {
    if (currentContacts) {
      setSocLinks(prevSocLinks =>
        prevSocLinks.map(link => ({
          ...link,
          link: currentContacts[link.title] || link.link,
        }))
      );
    }
  }, [currentContacts]);

  return (
    <ul className="w-full flex flex-wrap pt-16 justify-center gap-4">
      {socLinks.map(
        el =>
          el.link && (
            <li key={el.link}>
              <a href={el.link} target="_blank" rel="noopener noreferrer">
                <Image
                  className={`w-16 md:w-32 xl:w-28 shinstagram relative h-16 md:h-28 cursor-pointer transform hover:-translate-y-8 transition-all duration-700 ${el.style}`}
                  width={112}
                  height={112}
                  src={el.iconColor}
                  alt={`${el.title} icon`}
                />
              </a>
            </li>
          )
      )}
    </ul>
  );
};

export default TellUsContacts;
