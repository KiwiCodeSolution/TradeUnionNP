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
  return (
    <BaseSection style={"bg-bgGrey"}>
      <Wrapper styles={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
        <Container>
          <h3 className="text-[30px]">Мета</h3>
          <p className="text-lg text-grey">
            <strong>Здійснення представництва та захист трудових</strong>, соціально-економічних
            прав і інтересів членів Профспілки.
          </p>
        </Container>
        <Container>
          <h3 className="text-[30px]">Місія</h3>
          <p className="text-lg text-grey">
            Досягнення <strong>високих стандартів умов праці та безпеки праці</strong> в групі
            компаній «NOVA» та активної життєвої позиції працівників.
          </p>
        </Container>
        <Container>
          <h3 className="text-[30px]">
            Основні <span className="text-red">засади</span>
          </h3>
          <ul className="flex flex-col gap-y-5">
            <ListItem
              item={"Здійснення представництва та захист прав і інтересів членів Профспілки."}
              gap={5}
            />
            <ListItem
              item={"Досягнення високих стандартів умов праці у групі компаній «NOVA»."}
              gap={5}
            />
            <ListItem
              item={"Підвищення рівня культури та різноманіття дозвілля працівників."}
              gap={5}
            />
          </ul>
        </Container>

        <Container>
          <h3 className="text-[30px]">
            <span className="text-red">Принципи </span>Профспілки
          </h3>
          <ul className="flex flex-col gap-y-5">
            <ListItem item={"Член Профспілки — головна цінність Профспілки."} gap={5} />
            <ListItem item={"Прозорість діяльності."} gap={5} />
            <ListItem
              item={
                "Активна життєва позиція – розвиток членів Профспілки в напрямку культурного дозвілля, спорту, можливості позитивно змінювати компанію та своє оточення, досягнення високих професійних та особистих результатів."
              }
              gap={5}
            />
          </ul>
          <Image
            src={Logo}
            width={164}
            height={165}
            alt="Логотип компанії"
            className="absolute -top-[64px] -left-[91px] z-[2]"
          />
        </Container>
      </Wrapper>
    </BaseSection>
  );
};

export default AllAboutCompany;
