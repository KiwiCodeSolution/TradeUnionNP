import LinkButton from "@/components/UI/buttons/LinkButton";
import Image from "next/image";
import Arrow from "@/images/arrow_red.svg";
import RedDot from "@/components/UI/RedDot";
import Title from "@/components/Title";

const Text = ({ text, isBold, quantityWords }) => {
  function formatTextWithBoldMarker(text, numberOfWords) {
    const words = text.split(" ");
    let boldText = "";
    let regularText = "";

    for (let i = 0; i < words.length; i++) {
      if (i < numberOfWords) {
        boldText += words[i] + " ";
      } else {
        regularText += words[i] + " ";
      }
    }

    return {
      boldText: boldText.trim(),
      regularText: regularText.trim(),
    };
  }

  if (!isBold) {
    return <p>{text}</p>;
  }

  const { boldText, regularText } = formatTextWithBoldMarker(text, quantityWords);

  return (
    <p className="text-lg text-grey">
      <strong>{boldText}</strong>
      {` ${regularText}`}
    </p>
  );
};

const DirectionsWorkItem = ({ item, index }) => {
  return (
    <article className={`flex w-full ${index % 2 !== 0 ? "flex-row-reverse" : "flex-row"}`}>
      <div className="w-1/2">
        <Image src={item.image} width={640} height={600} alt={item.title} />
      </div>
      <div className={`w-1/2 flex flex-col ${index === 0 ? "mt-[127px]" : ""}`}>
        <h3 className="text-sm uppercase">НАПРЯМКИ РОБОТИ</h3>

        <Title tag="h2" styles="mt-3 mb-5">
          {item.title}
        </Title>

        <div className="flex flex-col gap-y-2">
          {item.text?.map((el, idx) => (
            <Text
              key={idx}
              text={el}
              isBold={item.isBold && idx === 0}
              quantityWords={item.quantityWords}
            />
          ))}
          {item.list && (
            <ul className="pl-5 flex flex-col mt-5 gap-y-5">
              {item.list.map((listItem, idx) => (
                <li key={idx} className="w-full text-lg text-grey flex gap-x-2 items-center">
                  <RedDot />
                  <p className="w-[calc(100%-18px)]"> {listItem}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        <LinkButton
          view="transparent"
          style="uppercase mt-6 w-fit gap-x-2 hover:underline hover:underline-offset-4"
          goTo={item.link}
          goToPage
        >
          ДІЗНАТИСЯ БІЛЬШЕ
          <Image
            src={Arrow}
            width={30}
            height={30}
            alt="зображення білої іконки-стрілочки вправо на червоному фоні"
            className="arrow-icon"
          />
        </LinkButton>
      </div>
    </article>
  );
};

export default DirectionsWorkItem;
