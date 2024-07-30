import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import DocumentsList from "./DocumentsList";
import Image from "next/image";
import Arrow from "@/images/arrow_red.svg";

const Documents = () => {
  const t = useTranslations("Financial_Aid");
  return (
    <BaseSection id={"documents"} style={"bg-bgGrey pt-16"}>
      <Wrapper>
        <Title tag={"h2"} styles={"text-center"}>
          <span className="text-red">{t(`documents_title.0`)} </span> {t(`documents_title.1`)}{" "}
          <br /> {t(`documents_title.2`)}
        </Title>
        <DocumentsList />
        <div className="mx-auto mt-12">
          <a
            href="/files/pologennya.pdf"
            target="_blank"
            className="w-fit flex flex-row items-center gap-3 text-red text-sm uppercase font-bold mx-auto"
          >
            {t(`doc_button`)}
            <Image
              src={Arrow}
              width={30}
              height={30}
              alt="біла стрілочка вправо на червоному фоні"
              className="arrow-icon"
            />
          </a>
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default Documents;
