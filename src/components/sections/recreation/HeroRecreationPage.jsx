import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import PathPage from "@/components/PathPage";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Heart from "@/images/recreations/heart.svg";
import Party from "@/images/recreations/party.svg";
import Hero from "@/images/recreations/hero_image.svg";
import { inter } from "@/app/[locale]/(client)/fonts";

const HeroRecreationPage = () => {
  const t = useTranslations("Sport");
  return (
    <BaseSection style={""}>
      <Wrapper>
        <PathPage endPath={t(`path`)} />
        <div className="w-full flex flex-col md:flex-row mt-8 items-center">
          <div className="w-full md:w-1/2 flex flex-col">
            <Title tag={"h1"} styles={"text-center md:text-left"}>
              <span className="text-red">{t(`title.0`)}</span> {t(`title.1`)}
            </Title>
            <p className="text-lg text-grey my-8 text-center md:text-left">
              {t(`subtitle.0`)}
              <strong className="text-bgBlack">{t(`subtitle.1`)}</strong> {t(`subtitle.2`)}
            </p>
            <div className="w-full md:w-3/4 flex items-start md:items-center gap-x-4 mb-4">
              <Image
                src={Heart}
                width={49}
                height={50}
                alt="зображення серця, червоний контур на білому фоні"
              />
              <p className="text-lg text-grey">
                <strong className="text-bgBlack">{t(`first_text.0`)}</strong>, {t(`first_text.1`)}
              </p>
            </div>
            <div className="w-full md:w-3/4 flex items-start md:items-center gap-x-4">
              <Image src={Party} width={50} height={43} alt="зображення паперового феєрверку" />
              <p className="text-lg text-grey">
                <strong className="text-bgBlack">{t(`second_text.0`)}</strong> {t(`second_text.1`)}
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="relative z-0 bg-white rounded-2xl px-8 py-4 flex items-center gap-4 w-full sm:w-96 mt-8 mx-auto">
              <p
                className={`${inter.className} text-red text-lg font-bold flex flex-col md:flex-row gap-x-2 text-center`}
              >
                {t(`value.0`)} <span className="text-[34px]">2550</span>
              </p>
              <p className="text-base text-grey"> {t(`value.1`)}</p>
            </div>
            <Image
              src={Hero}
              width={592}
              height={508}
              alt="малюнок трьох людей у спортивних футболках та шортах, кожен тримає по одному спортивному знаряддю: футбольний м'яч, тенісну ракетку, шар для боулінгу"
              className="-mt-5 relative z-[1]"
            />
          </div>
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default HeroRecreationPage;
