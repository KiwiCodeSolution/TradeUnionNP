"use client";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import { useState } from "react";
import principles from "@/data/principles.json";
import Image from "next/image";
import RedDot from "@/components/UI/RedDot";
import Title from "@/components/Title";

const SecondPont = () => {
  return (
    <>
      <p>
        Цей Колективний договір унікальний ще й тому, що працівники мають закріплені гарантії при
        скороченні. Відповідно до законодавства та судової практики, при скороченні роботодавець має
        запропонувати всі інші актуальні вакантні посади на підприємстві.
      </p>
      <p>
        Колективний договір ТОВ “Нова пошта” єдиний в Україні захищає працівників від можливих
        порушень та тривалих судових розглядів. Саме на основі судової практики було сформульовано
        положення, що у разі скорочення “пропонування працівникам вакансій по підприємству
        здійснюється не менше трьох разів протягом двох місяців після попередження працівника про
        скорочення” (п. 3.9).
      </p>
      <p>
        Колективний договір встановив строки погодження з профспілкою звільнення працівників з
        ініціативи адміністрації підприємства (тобто скорочення) – три місяці, а також зобов’язали
        надавати інформацію про причини наступних звільнень, кількість і категорії працівників, яких
        це може стосуватися, тобто, працівники будуть попереджені за три місяці до скорочення
        (замість двох, як це зазначено в КЗпП).
      </p>
      <p>
        Водночас закріплено, що працівникам, які підпадають під скорочення, пропонуються наявні
        вакансії відповідно до спеціальності/кваліфікації працівників у{" "}
        <strong> першу чергу і не менше трьох разів.</strong>
      </p>
      <p>
        Ще одним нововведенням є оплачувана відпустка в останній місяць роботи для здійснення пошуку
        нового місця роботи у випадку скорочення працівника не менше одного дня в неділю. Тобто
        працівник може відлучитися для проходження співбесіди, не боячись, що його можуть звільнити
        за прогул.
      </p>
      <p>
        Важливим положенням є ще й те, що працівникам, звільненим у зв’язку з ліквідацією або
        реорганізацією Підприємства, скороченням чисельності чи штату працівників, крім вихідної
        допомоги, передбаченої чинним законодавством, виплачується допомога, розмір якої залежить
        від загального стажу роботи на підприємстві:
      </p>
      <ul>
        <li className="w-full flex gap-x-4">
          <RedDot />
          <p className="w-[calc(100%-9px-12px)]">від 3 до 5 років + 1 середньомісячна ЗП</p>
        </li>
        <li className="w-full flex gap-x-4">
          <RedDot />
          <p className="w-[calc(100%-9px-12px)]">від 5 до 8 років + 2 середньомісячні ЗП</p>
        </li>
        <li className="w-full flex gap-x-4">
          <RedDot />
          <p className="w-[calc(100%-9px-12px)]">від 8 до 10 років + 3 середньомісячні ЗП</p>
        </li>
        <li className="w-full flex gap-x-4">
          <RedDot />
          <p className="w-[calc(100%-9px-12px)]">від 10 років + 4 середньомісячні ЗП</p>
        </li>
      </ul>
      <p>
        Ці положення є в першу чергу позитивними для працівника, а також — для компанії, адже
        формують лояльність працівників через гарантування захищеності в разі структурних змін в
        компанії і суттєво стимулюють роботодавця зробити все можливе для збереження робочого місця
        працівника, а в разі неможливості – надати йому іншу підходящу роботу
      </p>
    </>
  );
};

const AgreementsPoints = () => {
  const [currentPoint, setCurrentPoint] = useState(0);

  const currentPrinciple = principles.find((el, index) => index === currentPoint);

  return (
    <BaseSection style={"py-16"}>
      <Wrapper>
        <Title tag="h2" styles="text-center">
          Колективний <span className="text-red">договір</span>
        </Title>

        <div className=" h-full flex items-start mt-8">
          <div className="w-1/2 flex flex-col min-h-[960px]">
            {principles.map((el, index) => (
              <button
                key={el.title}
                className={`w-full h-fit flex items-center rounded-l-2xl p-8 gap-x-4 text-lg font-bold ${
                  index === currentPoint ? "bg-white" : ""
                }`}
                onClick={() => setCurrentPoint(index)}
              >
                <Image
                  src={el.image}
                  width={32}
                  height={32}
                  alt={`зображення на тему ${el.title}`}
                />
                <p>{el.title}</p>
              </button>
            ))}
          </div>
          <div
            className={`w-1/2 min-h-[960px] p-8 ${
              currentPoint === 0
                ? "rounded-b-2xl rounded-r-2xl"
                : currentPoint === principles.length - 1
                ? "rounded-t-2xl rounded-r-2xl"
                : "rounded-2xl"
            }  bg-white text-[15px] flex flex-col gap-y-4`}
          >
            {currentPoint === 1 ? (
              <SecondPont />
            ) : (
              currentPrinciple.texts.map((el, index) => <p key={index + 22}>{el}</p>)
            )}
          </div>
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default AgreementsPoints;
