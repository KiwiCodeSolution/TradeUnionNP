import { useTranslations } from "next-intl";
import FloatContact from "./FloatContact";
import UpButton from "./UI/buttons/UpButton";

const ButtonsWrapper = ({ locale }) => {
  const t = useTranslations("BotsTexts");
  const tgTitle = t("telegram-bot_text");
  const vbTitle = t("viber-bot_text");
  return (
    <div
      className="fixed bottom-6 right-5 flex flex-col items-end gap-[10px] z-[1000]"
      role="region"
      aria-label="Зв'язок з ботами та кнопка для прокрутки вгору"
    >
      <FloatContact tgTitle={tgTitle} vbTitle={vbTitle} />
      <UpButton />
    </div>
  );
};
export default ButtonsWrapper;
