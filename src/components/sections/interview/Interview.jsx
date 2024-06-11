import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Avatar from "@/images/home/avatar.svg";
import Quote from "@/images/lapky.svg";
import RedBtn from "@/images/arrow_red.svg";
import { inter } from "../../../app/fonts";
import LinkButton from "@/components/UI/buttons/LinkButton";

const Interview = () => {
  return (
    <BaseSection>
      <Wrapper styles={"relative"}>
        <div className="flex flex-col mt-14 md:mt-24 mx-28">
          <p className={`${inter.className} text-[40px] leading-[56px] font-light`}>
            Щодень працюємо задля спільної мети — досягнення високих стандартів умов праці та
            безпеки праці в групі компаній 'NOVA'. Згуртовуємось, є надійною опорою один одному,
            дбаємо про єдину мету та цінності.
            <br /> Дбаємо про вас!
          </p>

          <article className="mt-9 flex w-full flex-col xl:w-1/2 ">
            <div className="w-full flex gap-x-3 items-center justify-between">
              <div className="w-[100px] h-fit rounded-full overflow-hidden">
                <Image
                  src={Avatar}
                  width={100}
                  height={100}
                  alt="фотокартка людини, що давала інтерв'ю"
                />
              </div>
              <div className="w-fit flex flex-col gap-y-2">
                <h3 className="text-[22px] font-bold">Оганесьян Сергій Геннадійович</h3>
                <p className="text-[15px]">
                  Голова Всеукраїнської Профспілки Працівників Нової Пошти
                </p>
              </div>
            </div>
            <LinkButton
              view="transparent"
              style="uppercase mt-6 w-fit gap-x-2 hover:underline hover:underline-offset-4"
              goTo={"#"}
              goToPage
            >
              ІНТЕРВ'Ю ЦІЛКОМ
              <Image
                src={RedBtn}
                width={30}
                height={30}
                alt="зображення білої іконки-стрілочки вправо на червоному фоні"
                className="arrow-icon"
              />
            </LinkButton>
          </article>
        </div>
        <Image
          src={Quote}
          width={77}
          height={71}
          alt="сірі лапки"
          className="absolute bottom-0 right-0"
        />
      </Wrapper>
    </BaseSection>
  );
};

export default Interview;
