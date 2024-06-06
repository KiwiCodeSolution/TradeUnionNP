import LinkButton from "@/components/UI/buttons/LinkButton";
import Image from "next/image";

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
    <p>
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
      <div className="w-1/2 flex flex-col">
        <h3>НАПРЯМКИ РОБОТИ</h3>
        <h2>{item.title}</h2>

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
            <ul className="list-disc pl-5">
              {item.list.map((listItem, idx) => (
                <li key={idx}>{listItem}</li>
              ))}
            </ul>
          )}
        </div>

        <LinkButton view="transparent" style="uppercase" goTo={item.link} goToPage>
          ДІЗНАТИСЯ БІЛЬШЕ
        </LinkButton>
      </div>
    </article>
  );
};

export default DirectionsWorkItem;
