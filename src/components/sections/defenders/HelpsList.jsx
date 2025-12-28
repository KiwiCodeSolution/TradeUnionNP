import { inter } from "@/app/[locale]/(client)/fonts";
import { Attention, MoneyHand } from "@/components/icons/IconsComponents";
import Collapse from "@/components/UI/Collapse";
import Hand from "@/images/hand.svg";
import { useTranslations } from "next-intl";
import Image from "next/image";

const HelpsList = () => {
  const t = useTranslations("Defenders");

  return (
    <div className="w-full flex flex-col xl:flex-row gap-4 xl:gap-8 mx-auto">
      <Image
        src={Hand}
        width={210}
        height={316}
        alt="малюнок руки"
        className="w-[210px] h-[316px] mx-auto xl:mx-0 shrink-0"
      />
      <div className="w-full xl:w-[calc(100%-210px-32px)] flex flex-col gap-6">
        <Collapse
          key={"uZ9haZ7lyD2fV6bbM7"}
          title={t("helps_items.0.title")}
          image={"/images/defenders/law.png"}
          index={0}
        >
          <div className="mt-4">
            <p className={`${inter.className} text-lg`}>
              {t.rich("helps_items.0.text.0", {
                b1: chunks => <span className="font-bold">{chunks}</span>,
              })}
            </p>
            <p className={`${inter.className} text-lg`}>
              {t.rich("helps_items.0.text.1", {
                b1: chunks => <span className="font-bold">{chunks}</span>,
              })}
            </p>

            <p className={`${inter.className} text-lg`}>
              <span className="text-red font-bold">{t("helps_items.0.text.2")}</span>{" "}
              <a
                href="https://legal100.org.ua/pro-nas"
                className="text-[#1C7EED] hover:underline hover:underline-offset-1"
              >
                https://legal100.org.ua/pro-nas
              </a>
            </p>
            <p className={`${inter.className} text-lg`}>
              <span className="text-red font-bold">Veteran Hub</span>{" "}
              <a
                href="https://veteranhub.com.ua"
                className="text-[#1C7EED] hover:underline hover:underline-offset-1"
              >
                https://veteranhub.com.ua
              </a>
            </p>
            <p className={`${inter.className} text-lg`}>{t("helps_items.0.text.3")}</p>
          </div>
        </Collapse>
        <Collapse
          key={"p7fpE2mbE8dD3sxF0y"}
          title={t("helps_items.1.title")}
          image={"/images/defenders/hands.png"}
          index={1}
        >
          <div className="mt-4">
            <p className={`${inter.className} text-lg`}>
              {t.rich("helps_items.1.text.0", {
                b1: chunks => <span className="font-bold">{chunks}</span>,
              })}
            </p>
            <p className={`${inter.className} text-lg`}>
              {t.rich("helps_items.1.text.1", {
                b1: chunks => <span className="font-bold">{chunks}</span>,
              })}
            </p>
            <p className={`${inter.className} text-lg`}>{t("helps_items.1.text.2")}</p>

            <p className={`${inter.className} text-lg text-red font-bold`}>
              {t("helps_items.1.text.3")}{" "}
              <a href="+380674077225" className="">
                067 407 72 25
              </a>
            </p>
          </div>
        </Collapse>
        <Collapse
          key={"U1iiL5qsQ9rhE0pqY7"}
          title={t("helps_items.2.title")}
          image={"/images/defenders/phone.png"}
          index={2}
        >
          <div className="mt-4">
            <p className={`${inter.className} text-lg font-bold xl:ml-[72px]`}>
              {t("helps_items.2.text.0")}{" "}
              <a href="+380674510739" className="text-red">
                067 451 07 39
              </a>
            </p>
            <div className="border-b-[2px] border-t-[2px] border-[#D6D6D6] my-4 py-4 flex gap-x-6 items-center">
              <div className="w-12 h-12 flex items-center justify-center shrink-0">
                <MoneyHand />
              </div>
              <div>
                <p className={`${inter.className} text-lg  font-bold`}>
                  {t("helps_items.2.text.1")}
                </p>
                <p className={`${inter.className} text-lg text-red font-bold`}>
                  {t("helps_items.2.text.2")}
                </p>
                <p className={`${inter.className} text-lg `}>{t("helps_items.2.text.3")}</p>
              </div>
            </div>

            <div className="flex gap-x-6 items-center">
              <div className="w-12 h-12 flex items-center justify-center shrink-0">
                <Attention />
              </div>
              <div>
                <p className={`${inter.className} text-lg`}>
                  {t.rich("helps_items.2.text.4", {
                    b1: chunks => <span className="font-bold text-red">{chunks}</span>,
                  })}
                </p>
                <p className={`${inter.className} text-lg font-bold`}>
                  {t("helps_items.2.text.5")}{" "}
                  <a href="+380675453525" className="">
                    +38 067 545 35 25
                  </a>
                </p>
                <a
                  href="https://novaposhta.ua/svoi/"
                  className={`text-[#1C7EED] hover:underline hover:underline-offset-1 text-lg font-bold ${inter.className}`}
                >
                  https://novaposhta.ua/svoi/
                </a>
              </div>
            </div>
          </div>
        </Collapse>
      </div>
    </div>
  );
};
export default HelpsList;
