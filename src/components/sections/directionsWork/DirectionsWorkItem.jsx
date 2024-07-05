import LinkButton from "@/components/UI/buttons/LinkButton";
import Image from "next/image";
import Title from "@/components/Title";
import ListItem from "@/components/UI/items/ListItem";

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
    return <p className="text-base md:text-lg text-grey">{text}</p>;
  }

  const { boldText, regularText } = formatTextWithBoldMarker(text, quantityWords);

  return (
    <p className="text-base md:text-lg text-grey">
      <strong>{boldText}</strong>
      {` ${regularText}`}
    </p>
  );
};

const DirectionsWorkItem = ({ item, index }) => {
  return (
    <article
      className={`flex flex-col w-full ${index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
    >
      <div className="w-full md:w-1/2">
        <Image src={item.image} width={640} height={600} alt={item.title} />
      </div>
      <div className={`w-full md:w-1/2 flex flex-col ${index === 0 ? "md:mt-[127px]" : ""}`}>
        <h3 className="text-sm uppercase">НАПРЯМКИ РОБОТИ</h3>

        <Title tag="h2" styles="mt-3 mb-5">
          {item.title}
        </Title>

        <div className="flex flex-col gap-y-5">
          {item.text?.map((el, idx) => (
            <Text
              key={idx}
              text={el}
              isBold={item.isBold && idx === 0}
              quantityWords={item.quantityWords}
            />
          ))}
          {item.list && (
            <ul className="md:pl-5 flex flex-col gap-y-5">
              {item.list.map((listItem, idx) => (
                <ListItem item={listItem} gap={5} key={idx} />
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
        >
          ДІЗНАТИСЯ БІЛЬШЕ
        </LinkButton>
      </div>
    </article>
  );
};

export default DirectionsWorkItem;
