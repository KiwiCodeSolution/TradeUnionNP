import BaseSection from "@/components/BaseSection";
import ListItem from "@/components/UI/items/ListItem";
import Wrapper from "@/components/Wrapper";
import points from "@/data/faq.json";
import Image from "next/image";
import Logo from "@/images/logo-sm.svg";

const FAQ = () => {
  return (
    <BaseSection>
      <Wrapper styles={"py-16"}>
        <div className="grid grid-cols-2 gap-4">
          {points.map((el, index) => (
            <article
              key={el.title[0] + el.title[1]}
              className="w-full flex flex-col gap-y-2 rounded-2xl bg-white px-7 py-6 md:p-10 shadow-standardShadow relative"
            >
              {index !== 1 && index % 2 === 1 && (
                <Image
                  src={Logo}
                  width={164}
                  height={165}
                  alt="Логотип компанії"
                  className="absolute -top-[64px] -left-[91px] z-[2]"
                />
              )}

              <h3 className="text-[30px] font-bold mb-4">
                {el.title[0]} <span className="text-red">{el.title[1]}</span>
              </h3>
              <ul className="flex flex-col gap-y-5 pl-2 faq">
                {el.points.map(item => (
                  <ListItem key={item.name} item={item.name} elements={item.information} gap={5} />
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default FAQ;
