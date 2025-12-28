import { inter } from "@/app/[locale]/(client)/fonts";
import BaseSection from "@/components/BaseSection";
import { useTranslations } from "next-intl";
import HistorySwiper from "./HistorySwiper";

const reviews = [
  {
    _id: "yK1tgY8npK5tsRslA6",
    name: "Олена Ковальчук",
    textUkr:
      "Отримала чіткі роз'яснення щодо мобілізації та документів. Пояснили людською мовою. Дуже допомогло зняти тривогу.",
    date: "03.01.2025",
  },
  {
    _id: "hM7otM7mdS7bxT3wtV",
    name: "Ігор Мельник",
    textUkr:
      "Підсказали, як правильно оформити заяви та звернення. Реальна юридична підтримка, а не вода.",
    date: "27.12.2024",
  },
  {
    _id: "dWaiW8xkJ2rcR0ghN0",
    name: "Марія Мацюк",
    textUkr:
      "Дякую за консультацію щодо прав на службі. Вперше відчула, що мене не просто відфутболили, а вислухали.",
    date: "15.12.2024",
  },
  {
    _id: "mA4pxK9pfZ7ozF8msR",
    name: "Андрій Поліщук",
    textUkr:
      "Допомогли з підготовкою до військових зборів. Чіткий список, що і куди. Без паніки і зайвих нервів.",
    date: "05.01.2025",
  },
  {
    _id: "l6rkD3kW9oeH8wpC4b",
    name: "Світлана Дячук",
    textUkr:
      "Консультація була швидкою та предметною. Пояснили мої права і кроки, які потрібно зробити далі.",
    date: "29.12.2024",
  },
  {
    _id: "dF4ntQ4ktV9hkZ4mgZ",
    name: "Роман Гаврилюк",
    textUkr:
      "Підтримали під час зборів і допомогли з документами. Відчувається турбота, а не формальність.",
    date: "09.01.2025",
  },
  {
    _id: "p5qqMwnN0ahS0cfD6t",
    name: "Наталія Шевченко",
    textUkr:
      "Отримала відповіді на складні юридичні питання. Стало зрозуміло, що робити далі і куди звертатися.",
    date: "02.01.2025",
  },
  {
    _id: "hSxsV1dmF8igB7pnN7",
    name: "Тарас Левченко",
    textUkr:
      "Підказали алгоритм дій під час повістки та зборів. Спокій з'явився одразу — коли знаєш план, вже не так страшно.",
    date: "21.12.2024",
  },
  {
    _id: "W6tvQisR5viM9ptG6w",
    name: "Ірина Тарасюк",
    textUkr:
      "Дуже тактовна та професійна консультація. Допомогли розібратись у моїй ситуації без зайвих слів.",
    date: "11.01.2025",
  },
];

const History = () => {
  const t = useTranslations("Defenders");
  return (
    <BaseSection style={"mt-10 md:mt-[60px] xl:mt-0"}>
      <div
        className={
          "w-full xl:w-[1280px] flex flex-col gap-4 xl:gap-4 mx-auto pt-12 px-4 md:px-14 xl:px-[50px]"
        }
      >
        <h2
          className={`text-[32px] md:text-[40px] xl:text-[50px] font-extrabold text-center ${inter.className}`}
        >
          <span className="text-red">{t("history_title.0")}</span>
          {t("history_title.1")}
        </h2>
        <HistorySwiper reviews={reviews} />
      </div>
    </BaseSection>
  );
};
export default History;
