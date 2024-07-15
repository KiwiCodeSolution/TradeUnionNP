import LinkButton from "@/components/UI/buttons/LinkButton";
import Image from "next/image";

const ProjectsItem = ({ item }) => {
  return (
    <article className="w-[300px] h-[382px] bg-white rounded-2xl flex flex-col justify-between items-start p-8 mx-auto hover:shadow-itemShadow">
      <div className="w-48 h-48 mx-auto">
        <Image
          src={item.image}
          width={192}
          height={192}
          alt={item.alt}
          className="w-48 h-48 object-contain"
        />
      </div>

      <h3 className="text-[15px] font-bold">{item.text}</h3>
      <LinkButton view={"transparent"} goToPage icon goTo={item.link} style={"font-bold w-[163px]"}>
        ПЕРЕГЛЯНУТИ
      </LinkButton>
    </article>
  );
};

export default ProjectsItem;
