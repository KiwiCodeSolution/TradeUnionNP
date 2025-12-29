import { inter } from "@/app/[locale]/(client)/fonts";
import BaseSection from "@/components/BaseSection";
import { useTranslations } from "next-intl";
import HistorySwiper from "./HistorySwiper";

const reviews = [
  {
    _id: "yK1tgY8npK5tsRslA6",
    name: "Магей Юрій",
    textUkr:
      "Дякую Профспілці Нової пошти, яка в межах проєктів «Захисти захисника» та «Свій для своїх» надала мені окуляри FPV Skyzone SKY04X V2 OLED BLACK. Це обладнання допомагає мені та моєму підрозділу ще ефективніше виконувати бойові завдання.",
  },
  {
    _id: "hM7otM7mdS7bxT3wtV",
    name: "Близнюк Вячеслав",
    textUkr:
      "Щиро дякую за вашу підтримку та небайдужість! Отримання активних навушників Sordin Supreme Pro-X Neckband Green стало вагомим внеском у моє спорядження для боротьби проти агресії росії. Це не просто технічний засіб, а важливий елемент моєї безпеки та ефективності на передовій. Ваша турбота має надзвичайно велике значення для захисту нашої свободи та незалежності. Така допомога надихає і мотивує докладати ще більше зусиль у боротьбі за нашу країну. Дякую за вашу відданість. Разом ми обов'язково переможемо!",
  },
  {
    _id: "dWaiW8xkJ2rcR0ghN0",
    name: "Сулько Михайло",
    textUkr:
      "Отримав від Профспілки Нової пошти гідратор. Відтоді більше не турбуюся про те, куди покласти пляшки з водою та як їх зручно переносити. Надзвичайно корисна річ, яку рекомендую всім. Щиро вдячний Профспілці за допомогу - це дуже мотивує. Велика подяка!",
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
