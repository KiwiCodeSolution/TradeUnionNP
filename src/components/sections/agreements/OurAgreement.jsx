
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import agreement from "@/data/our_agreement.json";
import Image from "next/image";
import Bookmark from "@/images/agreement/bookmark-logo.svg";
import Danger from "@/images/home/icon_danger.svg";
import Title from "@/components/Title";

const OurAgreement = () => {
  return (
    <BaseSection style={"pt-32"}>
      <Wrapper>
    
        <Title tag="h2" styles="text-center">
          <span className="text-red">Наш</span> колективний договір
        </Title>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
          {agreement.map(el => (
            <article
              key={el.title}
              className="flex flex-col bg-white rounded-2xl p-8 gap-y-8 relative"
            >
              <Image
                src={Bookmark}
                width={64}
                height={74}
                className="w-16 absolute top-0 right-4 transform -translate-y-4"
                alt="закладка червоного кольору із білим логотипом профспілки"
              />
              <h3 className="text-2xl font-bold leading-[1.4]">{el.title}</h3>
              <p className="text-lg">
                {el.text[0]}
                <strong> {el.text[1]}</strong> {el.text[2]}
              </p>
            </article>
          ))}
        </div>

        <div className="w-full rounded-2xl my-12 p-16 flex gap-x-8 bg-red">
          <Image
            src={Danger}
            width={64}
            height={63}
            alt="малюнок знаку уваги: червоний знак оклику у білому трикутнику"
          />
          <p className="text-white text-lg">
            <strong>Жодний трудовий договір (контракт)</strong>, що підписується з працівниками ТОВ
            “Нова Пошта”, <strong>не може суперечити цьому Колективному договору</strong> таким
            чином, щоб порівняно з останнім права та інтереси працівника в трудовому договорі
            (контракті) були якимось чином обмежені. На період воєнного стану деякі положення
            призупинені роботодавцем. Водночас Профспілка домоглася відновлення майже всіх положень
            Колективного договору, хоч роботодавець і мав можливість не поновлювати їх дію.
          </p>
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default OurAgreement;
