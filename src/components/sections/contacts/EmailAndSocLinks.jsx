import { socLinks } from "@/constants/socLinks";
import Image from "next/image";

const EmailAndSocLinks = ({ section }) => {
  const socLinksList = socLinks.filter(el => el.iconRed !== "");
  return (
    <article
      className={`hidden md:flex ${
        section === "footer" ? "flex-col gap-y-4" : "gap-x-5 items-center justify-between"
      } `}
    >
      {section === "footer" && (
        <h3 className="text-base text-liteGrey text-center md:text-left mb-1 uppercase">
          КОНТАКТИ
        </h3>
      )}
      <a
        href="mailto:help@profspilka.org"
        className="text-red text-base text-center md:text-left underline underline-offset-1 hover:underline-offset-4"
      >
        help@profspilka.org
      </a>
      <div className="flex gap-x-2">
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

export default EmailAndSocLinks;
