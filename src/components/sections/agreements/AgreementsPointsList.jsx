import { useTranslations } from "next-intl";
import PrinciplesList from "./PrinciplesList";

const AgreementsPointsList = () => {
  const t = useTranslations("Collective_labour_agreement");

  const principles = [
    {
      title: t(`collective_agreement.0.title`),
      image: "/images/agreement/principles_1.svg",
      texts: [
        t(`collective_agreement.0.texts.0`),
        t(`collective_agreement.0.texts.1`),
        t(`collective_agreement.0.texts.2`),
      ],
    },
    {
      title: t(`collective_agreement.1.title`),
      image: "/images/agreement/principles_2.svg",
      texts: [""],
    },
    {
      title: t(`collective_agreement.2.title`),
      image: "/images/agreement/principles_3.svg",
      texts: [t(`collective_agreement.2.texts.0`), t(`collective_agreement.2.texts.1`)],
    },
    {
      title: t(`collective_agreement.3.title`),
      image: "/images/agreement/principles_4.svg",
      texts: [t(`collective_agreement.3.texts.0`), t(`collective_agreement.3.texts.1`)],
    },
    {
      title: t(`collective_agreement.4.title`),
      image: "/images/agreement/principles_5.svg",
      texts: [
        t(`collective_agreement.4.texts.0`),
        t(`collective_agreement.4.texts.1`),
        t(`collective_agreement.4.texts.2`),
        t(`collective_agreement.4.texts.3`),
        t(`collective_agreement.4.texts.4`),
        t(`collective_agreement.4.texts.5`),
        t(`collective_agreement.4.texts.6`),
        t(`collective_agreement.4.texts.7`),
      ],
    },
    {
      title: t(`collective_agreement.5.title`),
      image: "/images/agreement/principles_6.svg",
      texts: [
        t(`collective_agreement.5.texts.0`),
        t(`collective_agreement.5.texts.1`),
        t(`collective_agreement.5.texts.2`),
      ],
    },
    {
      title: t(`collective_agreement.6.title`),
      image: "/images/agreement/principles_7.svg",
      texts: [t(`collective_agreement.6.texts.0`), t(`collective_agreement.6.texts.1`)],
    },
    {
      title: t(`collective_agreement.7.title`),
      image: "/images/agreement/principles_8.svg",
      texts: [
        t(`collective_agreement.7.texts.0`),
        t(`collective_agreement.7.texts.1`),
        t(`collective_agreement.7.texts.2`),
      ],
    },
    {
      title: t(`collective_agreement.8.title`),
      image: "/images/agreement/principles_9.svg",
      texts: [t(`collective_agreement.8.texts.0`), t(`collective_agreement.8.texts.1`)],
    },
    {
      title: t(`collective_agreement.9.title`),
      image: "/images/agreement/principles_10.svg",
      texts: [
        t(`collective_agreement.9.texts.0`),
        t(`collective_agreement.9.texts.1`),
        t(`collective_agreement.9.texts.2`),
        t(`collective_agreement.9.texts.3`),
        t(`collective_agreement.9.texts.4`),
        t(`collective_agreement.9.texts.5`),
      ],
    },
  ];

  return (
    <div className="h-full hidden md:flex items-start mt-8">
      <PrinciplesList principles={principles} />
    </div>
  );
};

export default AgreementsPointsList;
