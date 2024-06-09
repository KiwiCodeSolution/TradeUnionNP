import { socLinks } from "@/constants/socLinks";
import Image from "next/image";

const FooterContacts = () => {
  const socLinksList = socLinks.filter(el => el.iconRed !== "");
  return (
    <article className="flex flex-col gapy-4">
      <a href="mailto:help@profspilka.org">help@profspilka.org</a>
      <div className="flex gap-x-4">
        {socLinksList.map(el => (
          <a
            key={el.link}
            href={el.link}
            target="_blank"
            className="flex items-center justify-center"
          >
            <Image
              src={el.iconRed}
              width={25}
              height={25}
              alt={`зображення білої іконки ${el.title} у червоному колі`}
            />
          </a>
        ))}
      </div>
    </article>
  );
};

export default FooterContacts;
