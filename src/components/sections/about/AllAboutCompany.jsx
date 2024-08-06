import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import ListItem from "@/components/UI/items/ListItem";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Logo from "@/images/logo-sm.svg";

const Container = ({ children }) => {
  return (
    <div className="xs:w-1/2 flex flex-col gap-4 bg-white rounded-2xl px-7 py-6 md:p-10 box-shadow relative">
      {children}
    </div>
  );
};

const AllAboutCompany = () => {
  const t = useTranslations("About");
  return (
    <BaseSection style={"bg-bgGrey"}>
      <Wrapper styles={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
        <Container>
          <h3 className="text-[30px] font-bold"> {t(`all_about.0.title`)}</h3>
          <p className="text-lg text-grey">
            <strong> {t(`all_about.0.text.0`)}</strong>, {t(`all_about.0.text.1`)}
          </p>
        </Container>
        <Container>
          <h3 className="text-[30px] font-bold"> {t(`all_about.1.title`)}</h3>
          <p className="text-lg text-grey">
            {t(`all_about.1.text.0`)} <strong> {t(`all_about.1.text.1`)}</strong>{" "}
            {t(`all_about.1.text.2`)}
          </p>
        </Container>
        <Container>
          <h3 className="text-[30px] font-bold">
            {t(`all_about.2.title.0`)}
            <span className="text-red">{t(`all_about.2.title.1`)}</span>
          </h3>
          <ul className="flex flex-col gap-y-5">
            <ListItem item={t(`all_about.2.text.0`)} gap={5} />
            <ListItem item={t(`all_about.2.text.1`)} gap={5} />
            <ListItem item={t(`all_about.2.text.2`)} gap={5} />
          </ul>
        </Container>

        <Container>
          <h3 className="text-[30px] font-bold">
            <span className="text-red"> {t(`all_about.3.title.0`)} </span>
            {t(`all_about.3.title.1`)}
          </h3>
          <ul className="flex flex-col gap-y-5">
            <ListItem item={t(`all_about.3.text.0`)} gap={5} />
            <ListItem item={t(`all_about.3.text.1`)} gap={5} />
            <ListItem item={t(`all_about.3.text.2`)} gap={5} />
          </ul>
          <Image
            src={Logo}
            width={164}
            height={165}
            alt="Логотип компанії"
            className="hidden md:block absolute -top-[64px] -left-[91px] z-[2]"
          />
        </Container>
      </Wrapper>
    </BaseSection>
  );
};

export default AllAboutCompany;
