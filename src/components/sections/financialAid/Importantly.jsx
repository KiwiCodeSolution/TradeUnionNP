import BaseSection from "@/components/BaseSection";
import Title from "@/components/Title";
import LinkButton from "@/components/UI/buttons/LinkButton";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import Hand from "@/images/aid/statement.svg";

const Importantly = () => {
  return (
    <BaseSection style={"bg-bgGrey pt-12 sm:pt-32 pb-12"}>
      <Wrapper>
        <div className="w-full bg-white rounded-2xl py-7 md:py-14 pl-16 relative">
          <div className="w-1/2 flex flex-col gap-y-4">
            <Title tag={"h2"}>Увага!</Title>
            <p className="text-lg text-grey">
              Профспілка надає допомогу <strong> лише членам Профспілки!</strong>
            </p>
            <p className="text-lg text-grey">
              Щоб долучитися — заповнюйте відповідний{" "}
              <Link href="/blanky" className="text-red underline hover:underline-offset-2">
                бланк
              </Link>{" "}
              та відправляйте{" "}
              <Link href="/kontakty" className="text-red underline hover:underline-offset-2">
                Голові ППО (первинної профспілкової організації).
              </Link>
            </p>
            <LinkButton view={"red"} goToPage goTo={"/blanky"} style={"uppercase mt-4"} icon>
              ЗАВАНТАЖИТИ ЗАЯВУ
            </LinkButton>
          </div>
          <Image
            src={Hand}
            width={512}
            height={429}
            alt="зображення договору та рук, що тримають кулькову ручку"
            className="absolute bottom-0 right-12"
          />
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default Importantly;
