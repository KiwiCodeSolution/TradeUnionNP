import BaseSection from "@/components/BaseSection";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";

const TellUs = () => {
  return (
    <BaseSection>
      <Wrapper styles={"pt-32 pb-20"}>
        <Title tag={"h2"} styles={"text-center"}>
          Розкажіть,{" "}
          <span className="text-red">
            що ви в <br /> Профспілці
          </span>
        </Title>
        <p className="text-lg mt-5 text-grey text-left  md:text-center">
          Надсилайте посилання другові чи колезі, нехай також долучається!
        </p>
        <ul className="flex flex-wrap pt-16 justify-center gap-4 sm:gap-16">
          <li>
            <a href="https://www.instagram.com/profspilka.np/">
              <Image
                className="shinstagram relative h-16 md:h-28 cursor-pointer transform hover:-translate-y-8 transition-all duration-700"
                width={112}
                height={112}
                src="/images/soc-icons/instagram-color.svg"
              />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UC7Q1wWqpmQzpCcHcvIy-13A">
              <Image
                className="shyoutobe relative h-16 md:h-28 cursor-pointer transform hover:-translate-y-8 transition-all duration-700"
                width={112}
                height={112}
                src="/images/soc-icons/youtube-color_1.svg"
              />
            </a>
          </li>
          <li>
            <a href="https://t.me/profspilka_np">
              <Image
                className="shtelegram relative h-16 md:h-28 cursor-pointer transform hover:-translate-y-8 transition-all duration-700"
                width={112}
                height={112}
                src="/images/soc-icons/telegram-color.svg"
              />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/profspilka.novaposhta">
              <Image
                className="shfacebook relative h-16 md:h-28 cursor-pointer transform hover:-translate-y-8 transition-all duration-700"
                width={112}
                height={112}
                src="/images/soc-icons/facebook-color.svg"
              />
            </a>
          </li>
          <li>
            <a href="https://invite.viber.com/?g2=AQB5jyDD9hRH2E4T1sgP3mF5DLFT3M6rGUUWfv2%2FHB1AddnNt8Vy6o2DXH793wQk">
              <Image
                className="shviber relative h-16 md:h-28 cursor-pointer transform hover:-translate-y-8 transition-all duration-700"
                width={112}
                height={112}
                src="/images/soc-icons/viber-color.svg"
              />
            </a>
          </li>
          <li>
            <a href="https://www.messenger.com/">
              <Image
                className="shmessanger relative h-16 md:h-28 cursor-pointer transform hover:-translate-y-8 transition-all duration-700"
                width={112}
                height={112}
                src="/images/soc-icons/messanger-color.svg"
              />
            </a>
          </li>
        </ul>
      </Wrapper>
    </BaseSection>
  );
};

export default TellUs;
