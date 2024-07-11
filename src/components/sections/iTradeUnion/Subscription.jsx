import BaseSection from "@/components/BaseSection";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Mail from "@/images/i-trade/getmail.svg";
import SubscriptionForm from "./SubscriptionForm";
import Telegram from "@/images/soc-icons/telegram-color.svg";
import Facebook from "@/images/soc-icons/facebook-color.svg";
import Viber from "@/images/soc-icons/viber-color.svg";

const Subscription = () => {
  return (
    <BaseSection style={"bg-bgGrey"}>
      <Wrapper styles={"pt-8 md:pt-32 pb-10"}>
        <div className="bg-white rounded-xl my-4 xs:my-8 flex justify-between items-center">
          <div className="w-full sm:w-2/3 p-4 md:p-12 flex flex-col gap-8">
            <Title tag={"h2"} styles={"text-center md:text-left"}>
              Бажаєте <span className="text-red">отримувати новини?</span>
            </Title>
            <SubscriptionForm />
            <div className="flex flex-col items-center md:flex-row gap-6">
              <p className="text-center md:text-left">Слідкуйте за новинами в мессенджерах:</p>
              <ul className="flex gap-5 items-center">
                <li>
                  <a href="https://t.me/profspilka_np">
                    <Image
                      className="shtelegram relative cursor-pointer transform hover:-translate-y-8 transition-all duration-700"
                      width={43}
                      height={43}
                      src={Telegram}
                    />
                  </a>
                </li>
                <li>
                  <a href="https://invite.viber.com/?g2=AQB5jyDD9hRH2E4T1sgP3mF5DLFT3M6rGUUWfv2%2FHB1AddnNt8Vy6o2DXH793wQk">
                    <Image
                      className="shviber relative cursor-pointer transform hover:-translate-y-8 transition-all duration-700"
                      width={43}
                      height={43}
                      src={Viber}
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/profspilka.novaposhta">
                    <Image
                      className="shfacebook relative cursor-pointer transform hover:-translate-y-8 transition-all duration-700"
                      width={43}
                      height={43}
                      src={Facebook}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden sm:block w-1/3 relative">
            <Image
              src={Mail}
              width={310}
              height={414}
              alt="зображення відкритого поштового конверту та вкладеного листа"
              className="absolute top-1/2 right-1/2 transform -translate-y-1/2 translate-x-1/2"
            />
          </div>
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default Subscription;
