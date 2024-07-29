import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import agreement from "@/data/our_agreement.json";
import Image from "next/image";
import Bookmark from "@/images/agreement/bookmark-logo.svg";
import Danger from "@/images/home/icon_danger.svg";
import Title from "@/components/Title";

const OurAgreement = () => {
  const t = useTranslations("Collective_labour_agreement");
  return (
    <BaseSection style={"pt-32"}>
      <Wrapper>
        <Title tag="h2" styles="text-center">
          <span className="text-red"> {t(`our_agreement_title.0`)}</span>{" "}
          {t(`our_agreement_title.1`)}
        </Title>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
          {agreement.map((el, index) => (
            <article
              key={t(`our_agreement.${index}.title`)}
              className="flex flex-col bg-white rounded-2xl p-8 gap-y-8 relative"
            >
              <Image
                src={Bookmark}
                width={64}
                height={74}
                className="w-16 absolute top-0 right-4 transform -translate-y-4"
                alt="закладка червоного кольору із білим логотипом профспілки"
              />
              <h3 className="text-2xl font-bold leading-[1.4]">
                {t(`our_agreement.${index}.title`)}
              </h3>
              <p className="text-lg">
                {t(`our_agreement.${index}.text.0`)}
                <strong> {t(`our_agreement.${index}.text.1`)}</strong>
                {t(`our_agreement.${index}.text.2`)}
              </p>
            </article>
          ))}
        </div>

        <div className="w-full rounded-2xl my-12 p-16 flex flex-col md:flex-row gap-8 bg-red">
          <Image
            src={Danger}
            width={64}
            height={63}
            alt="малюнок знаку уваги: червоний знак оклику у білому трикутнику"
          />
          <p className="text-white text-lg">
            <strong>{t(`warning.0`)}</strong>, <span className="opacity-75">{t(`warning.1`)},</span>{" "}
            <strong>{t(`warning.2`)}</strong>
            <span className="opacity-75">{t(`warning.3`)}</span>
          </p>
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default OurAgreement;
