import BaseSection from "@/components/BaseSection";
import RedDot from "@/components/UI/RedDot";
import Wrapper from "@/components/Wrapper";

const Container = ({ children }) => {
  return (
    <div className="xs:w-1/2 flex flex-col gap-4 bg-white rounded-2xl px-7 py-6 md:p-10 box-shadow">
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
            <li className="w-full text-lg text-grey flex gap-x-5 items-center">
              <RedDot />
              <p className="w-[calc(100%-9px-20px)]">
                Здійснення представництва та захист прав і інтересів членів Профспілки.
              </p>
            </li>
            <li className="w-full text-lg text-grey flex gap-x-5 items-center">
              <RedDot />
              <p className="w-[calc(100%-9px-20px)]">
                Досягнення високих стандартів умов праці у групі компаній «NOVA».
              </p>
            </li>
            <li className="w-full text-lg text-grey flex gap-x-5 items-center">
              <RedDot />
              <p className="w-[calc(100%-9px-20px)]">
                Підвищення рівня культури та різноманіття дозвілля працівників.
              </p>
            </li>
          </ul>
        </Container>

        <Container>
          <h3 className="text-[30px]">
            <span className="text-red">Принципи </span>Профспілки
          </h3>
          <ul className="flex flex-col gap-y-5">
            <li className="w-full text-lg text-grey flex gap-x-5 items-center">
              <RedDot />
              <p className="w-[calc(100%-9px-20px)]">
                Член Профспілки — головна цінність Профспілки.
              </p>
            </li>
            <li className="w-full text-lg text-grey flex gap-x-5 items-center">
              <RedDot />
              <p className="w-[calc(100%-9px-20px)]">Прозорість діяльності.</p>
            </li>
            <li className="w-full text-lg text-grey flex gap-x-5 items-center">
              <RedDot />
              <p className="w-[calc(100%-9px-20px)]">
                Активна життєва позиція – розвиток членів Профспілки в напрямку культурного
                дозвілля, спорту, можливості позитивно змінювати компанію та своє оточення,
                досягнення високих професійних та особистих результатів.
              </p>
            </li>
          </ul>
        </Container>
      </Wrapper>
    </BaseSection>
  );
};

export default AllAboutCompany;
