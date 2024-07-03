import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import First from "@/images/i-trade/first.svg";
import Second from "@/images/i-trade/second.svg";
import Third from "@/images/i-trade/third.svg";
import Fourth from "@/images/i-trade/fourth.svg";
import Fifth from "@/images/i-trade/fifth.svg";
import Path from "@/images/i-trade/path.svg";
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
        <div className="hidden sm:flex flex-wrap flex-row justify-center gap-16 relative">
          <Image
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"
            src={BgImage}
          />

          <Image
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            src={Path}
          />

          <div className="w-1/4 flex flex-col justify-center items-center gap-4 relative z-30">
            <Image className="w-28" src={First} />
            <p className="text-center">
              <strong>Запроси друга</strong> в&nbsp;Профспілку
            </p>
          </div>
          <div className="w-1/4 flex flex-col justify-center items-center gap-4 relative z-30">
            <Image className="w-28" src={Third} />
            <p className="text-center">
              <strong>Відправте Заяву</strong> до Профспілки
              <br />(
              <a className="text-red underline" href="">
                голові вашої області
              </a>
              )
            </p>
          </div>
          <div className="w-1/4 flex flex-col justify-center items-center gap-4 relative z-30">
            <Image className="w-28" src={Fifth} />
            <p className="text-center">
              <strong>Отримайте</strong> брендований подарунок або сертифікат на активне дозвілля
            </p>
          </div>
          <div className="w-1/4 flex flex-col justify-center items-center gap-4 relative z-30">
            <Image className="w-28" src={Second} />
            <p className="text-center">
              Допоможи йому <strong>заповнити</strong>{" "}
              <a className="text-red underline" href="">
                Заяву&nbsp;на&nbsp;вступ
              </a>
            </p>
          </div>
          <div className="w-1/4 flex flex-col justify-center items-center gap-4 relative z-30">
            <Image className="w-28" src={Fourth} />
            <p className="text-center">
              <strong>Напишіть нам </strong> на{" "}
              <a className="text-red underline" href="mailto:help@profspilka.org">
                help@profspilka.org
              </a>{" "}
              і вкажіть, що ви запросили друга та бажаєте отримати заохочення
            </p>
          </div>
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default Invite;
