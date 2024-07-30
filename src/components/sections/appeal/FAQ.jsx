import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import ListItem from "@/components/UI/items/ListItem";
import Wrapper from "@/components/Wrapper";
import points from "@/data/faq.json";
import Image from "next/image";
import Logo from "@/images/logo-sm.svg";

const FAQ = () => {
  const t = useTranslations("Appeal");
  return (
    <BaseSection style={""}>
      <Wrapper styles={"py-16"}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {points.map((el, index) => (
            <article
              key={t(`faq.${index}.title.0`) + t(`faq.${index}.title.1`)}
              className="w-full flex flex-col gap-y-2 rounded-2xl bg-white px-7 py-6 md:p-10 shadow-standardShadow relative"
            >
              {index !== 1 && index % 2 === 1 && (
                <Image
                  src={Logo}
                  width={164}
                  height={165}
                  alt="Логотип компанії"
                  className="hidden md:block absolute -top-[64px] -left-[91px] z-[2]"
                />
              )}

              <h3 className="text-[30px] font-bold mb-4">
                {t(`faq.${index}.title.0`)}{" "}
                <span className="text-red">{t(`faq.${index}.title.1`)}</span>
              </h3>
              <ul className="flex flex-col gap-y-5 pl-2 faq">
                {el.points.map((item, idx) => (
                  <ListItem
                    key={t(`faq.${index}.points.${idx}.name`)}
                    item={t(`faq.${index}.points.${idx}.name`)}
                    elements={
                      item.information.length > 0 && [
                        t(`faq.${index}.points.${idx}.information.0`),
                        t(`faq.${index}.points.${idx}.information.1`),
                        t(`faq.${index}.points.${idx}.information.2`),
                        t(`faq.${index}.points.${idx}.information.3`),
                        t(`faq.${index}.points.${idx}.information.4`),
                        t(`faq.${index}.points.${idx}.information.5`),
                      ]
                    }
                    gap={5}
                  />
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
