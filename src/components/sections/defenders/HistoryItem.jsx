import {
  HistoryAvatar_1,
  HistoryAvatar_2,
  HistoryAvatar_3,
  HistoryAvatar_4,
} from "@/components/icons/IconsComponents";
import Bookmark from "@/images/bookmark.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

const HistoryItem = ({ item }) => {
  const icons = [HistoryAvatar_1, HistoryAvatar_2, HistoryAvatar_3, HistoryAvatar_4];

  // вибираємо випадкову іконку один раз
  const [RandomIcon, setRandomIcon] = useState(null);

  useEffect(() => {
    const index = Math.floor(Math.random() * icons.length);
    setRandomIcon(() => icons[index]);
  }, []);

  if (!RandomIcon) return null;

  return (
    <article className="flex flex-col items-center justify-between w-full md:max-w-[522px] h-[524px] md:min-h-[516px] rounded-[32px] px-4 py-16 md:py-14 relative bg-[rgba(255, 255, 255, 0.01)]">
      <Image
        src={Bookmark}
        width={23}
        height={24}
        alt="червона закладка"
        className="hidden md:block absolute -top-2 left-7"
      />
      <Image
        src="/images/logo_black.png"
        width={82}
        height={112}
        alt="логотип у сірих тонах"
        className="absolute top-1/2 -translate-y-1/2 hidden md:block left-4"
      />
      <Image
        src="/images/defenders/hist_top_mob.png"
        width={239}
        height={132}
        alt="фонове зображення, градієнт у довільній формі"
        className="absolute -top-[103px] -right-[43px]"
      />
      <Image
        src="/images/defenders/hist_bot_mob.png"
        width={238}
        height={369}
        alt="фонове зображення, градієнт у довільній формі"
        className="absolute bottom-[6px] right-0"
      />
      <div className="w-[168px] h-[168px] rounded-2xl border-[2px] border-[#E3E3E3] flex items-center justify-center mb-8 shrink-0">
        <RandomIcon />
      </div>
      <p className="text-center text-2xl md:text-[32px] font-bold">{item.name}</p>
      <p className="text-center md:text-xl my-[52px] text-bgBlack">{item.textUkr}</p>
      <p className="text-center text-2xl text-red font-bold">{item.date}</p>
    </article>
  );
};

export default HistoryItem;
