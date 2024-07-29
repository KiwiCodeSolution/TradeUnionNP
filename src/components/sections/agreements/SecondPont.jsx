import { useTranslations } from "next-intl";
import RedDot from "@/components/UI/RedDot";

const SecondPont = () => {
  const t = useTranslations("Collective_labour_agreement");
  return (
    <>
      <p>{t(`collective_agreement.1.texts.0`)}</p>
      <p>{t(`collective_agreement.1.texts.1`)}</p>
      <p>{t(`collective_agreement.1.texts.2`)}</p>
      <p>
        {t(`collective_agreement.1.texts.3`)}
        <strong>{t(`collective_agreement.1.texts.4`)}</strong>
      </p>
      <p>{t(`collective_agreement.1.texts.5`)}</p>
      <p>{t(`collective_agreement.1.texts.6`)}</p>
      <ul>
        <li className="w-full flex items-center gap-x-4">
          <RedDot />
          <p className="w-[calc(100%-9px-12px)]">{t(`collective_agreement.1.list.0`)}</p>
        </li>
        <li className="w-full flex items-center gap-x-4">
          <RedDot />
          <p className="w-[calc(100%-9px-12px)]">{t(`collective_agreement.1.list.1`)}</p>
        </li>
        <li className="w-full flex items-center gap-x-4">
          <RedDot />
          <p className="w-[calc(100%-9px-12px)]">{t(`collective_agreement.1.list.2`)}</p>
        </li>
        <li className="w-full flex items-center gap-x-4">
          <RedDot />
          <p className="w-[calc(100%-9px-12px)]">{t(`collective_agreement.1.list.3`)}</p>
        </li>
      </ul>
      <p>{t(`collective_agreement.1.texts.7`)}</p>
    </>
  );
};

export default SecondPont;
