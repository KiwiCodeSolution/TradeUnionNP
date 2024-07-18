import { useTranslations } from "next-intl";
import LinkButton from "@/components/UI/buttons/LinkButton";
import Image from "next/image";
import Title from "@/components/Title";
import ListItem from "@/components/UI/items/ListItem";

const DirectionsWorkItem = ({ item, index, locale }) => {
  const t = useTranslations("HomePage.directions");
  return (
    <article
      className={`flex flex-col w-full ${index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
    >
      <div className="w-full md:w-1/2">
        <Image src={item.image} width={640} height={600} alt={item.title} />
      </div>
      <div className={`w-full md:w-1/2 flex flex-col ${index === 0 ? "md:mt-[127px]" : ""}`}>
        <h3 className="text-sm uppercase"> {t(`title`)}</h3>

        <Title tag="h2" styles="mt-3 mb-5">
          {t(`items.${index}.title`)}
        </Title>

        <div className="flex flex-col gap-y-5">
          <p className="text-base md:text-lg text-grey">
            {index === 0 ? (
              <strong> {t(`items.${index}.text.0`)}</strong>
            ) : (
              t(`items.${index}.text.0`)
            )}
            {t(`items.${index}.text.1`)}
          </p>
          {index === 0 && (
            <p className="text-base md:text-lg text-grey">{t(`items.${index}.text.2`)}</p>
          )}

          {item.list && (
            <ul className="md:pl-5 flex flex-col gap-y-5">
              {item.list.map((listItem, idx) => (
                <ListItem item={t(`items.${index}.list.${idx}`)} gap={5} key={idx} />
              ))}
            </ul>
          )}
        </div>

        <LinkButton
          view="transparent"
          style="uppercase mt-6 w-fit gap-x-2 hover:underline hover:underline-offset-4 text-sm font-bold"
          goTo={item.link}
          goToPage
          icon
          locale={locale}
        >
          {t(`button`)}
        </LinkButton>
      </div>
    </article>
  );
};

export default DirectionsWorkItem;
