import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import First from "@/images/i-trade/first.svg";
import Second from "@/images/i-trade/second.svg";
import Third from "@/images/i-trade/third.svg";
import Fourth from "@/images/i-trade/fourth.svg";
import Fifth from "@/images/i-trade/fifth.svg";
import Path from "@/images/i-trade/path.svg";
import PathXS from "@/images/i-trade/path-xs.svg";
import BgImage from "@/images/i-trade/np-arrow-white.svg";
import Title from "@/components/Title";

const Invite = () => {
  return (
    <BaseSection style={"bg-bgGrey"}>
      <Wrapper styles={"pt-8 md:pt-32 md:pb-16"}>
        <Title tag={"h2"} styles={"text-center mb-8"}>
          <span className="text-red">Запрошуйте друзів</span>
          <br /> та отримуйте заохочення!
        </Title>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-11 md:gap-16 relative">
          <Image
            className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"
            src={BgImage}
          />
          <Image
            className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            src={Path}
            alt="схематичний малюнок звивистого шляху пунктирною лінією"
          />
          <Image
            className="md:hidden absolute left-0 top-[104px] z-10"
            src={PathXS}
            alt="схематичний малюнок звивистого шляху пунктирною лінією"
          />
          <div className="w-full md:w-1/4 flex md:flex-col justify-center items-center gap-4 relative z-30 order-1 md:order-1">
            <Image className="w-20 h-[100px] md:w-28 md:h-auto" src={First} />
            <p className="md:text-center">
              <strong>Запроси друга</strong> в&nbsp;Профспілку
            </p>
          </div>
          <div className="w-full md:w-1/4 flex md:flex-col justify-center items-center gap-4 relative z-30 order-2 md:order-4">
            <Image className="w-20 h-[100px] md:w-28 md:h-auto" src={Second} />
            <p className="md:text-center">
              Допоможи йому <strong>заповнити</strong>{" "}
              <a className="text-red underline" href="">
                Заяву&nbsp;на&nbsp;вступ
              </a>
            </p>
          </div>
          <div className="w-full md:w-1/4 flex md:flex-col justify-center items-center gap-4 relative z-30 order-3 md:order-2">
            <Image className="w-20 h-[100px] md:w-28 md:h-auto" src={Third} />
            <p className="md:text-center">
              <strong>Відправте Заяву</strong> до Профспілки
              <br />(
              <a className="text-red underline" href="">
                голові вашої області
              </a>
              )
            </p>
          </div>
          <div className="w-full md:w-1/4 flex md:flex-col justify-center items-center gap-4 relative z-30 order-4 md:order-5">
            <Image className="w-20 h-[100px] md:w-28 md:h-auto" src={Fourth} />
            <p className="md:text-center">
              <strong>Напишіть нам </strong> на{" "}
              <a className="text-red underline" href="mailto:help@profspilka.org">
                help@profspilka.org
              </a>{" "}
              і вкажіть, що ви запросили друга та бажаєте отримати заохочення
            </p>
          </div>
          <div className="w-full md:w-1/4 flex md:flex-col justify-center items-center gap-4 relative z-30 order-5 md:order-3">
            <Image className="w-20 h-[100px] md:w-28 md:h-auto" src={Fifth} />
            <p className="md:text-center">
              <strong>Отримайте</strong> брендований подарунок або сертифікат на активне дозвілля
            </p>
          </div>
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default Invite;
