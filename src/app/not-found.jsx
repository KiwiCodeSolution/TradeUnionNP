import BaseSection from "@/components/BaseSection";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

export default function NotFound({ params }) {
  return (
    <BaseSection style={""}>
      <Wrapper styles={""}>
        <div className="flex items-center justify-center h-screen">
          <div className="w-1/3 flex items-center justify-center">
            <p className="text-[200px] text-red font-bold">404</p>
          </div>
          <div className="flex flex-col gap-y-20 items-center justify-center w-2/3">
            <Title tag={"h1"} styles={"text-center"}>
              Таку сторінку не знайдено!
            </Title>
            <Link
              href="/uk"
              className="w-fit py-4 px-10 text-center h-16 outline outline-1 outline-red rounded-lg flex items-center justify-center text-red text-3xl font-bold hover:bg-red hover:text-white"
            >
              Повернутись на домашню сторінку
            </Link>
          </div>
        </div>
      </Wrapper>
    </BaseSection>
  );
}
