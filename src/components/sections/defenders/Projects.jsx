import { inter } from "@/app/[locale]/(client)/fonts";
import BaseSection from "@/components/BaseSection";
import { useTranslations } from "next-intl";
import Image from "next/image";
import ProjectsList from "./ProjectsList";

const Projects = () => {
  const t = useTranslations("Defenders");
  const projects = [
    {
      _id: "ySdeT4czM2beF8jwU1",
      name: t("projects.0.name"),
      description: t.rich("projects.0.description", {
        b1: chunks => <span className="font-bold text-red">{chunks}</span>,
        b2: chunks => <span className="font-bold">{chunks}</span>,
      }),
      text: t("projects.0.text"),
      image: "/images/defenders/project_1.png",
      sum: "1 817 508 грн",
    },
    {
      _id: "yE3oU5arB6mtI6fqW2",
      name: t("projects.1.name"),
      description: t.rich("projects.1.description", {
        b1: chunks => <span className="font-bold text-red">{chunks}</span>,
        b2: chunks => <span className="font-bold">{chunks}</span>,
      }),
      text: t("projects.1.text"),
      image: "/images/defenders/project_2.png",
      sum: "560 000 грн",
    },
    {
      _id: "fE6cY7xkX3slW9wjM6",
      name: t("projects.2.name"),
      description: t.rich("projects.2.description", {
        b1: chunks => <span className="font-bold text-red">{chunks}</span>,
        b2: chunks => <span className="font-bold">{chunks}</span>,
      }),
      text: t("projects.2.text"),
      image: "/images/defenders/project_3.png",
      sum: "122 500 грн",
    },
    {
      _id: "cU1enB2pcI9ehE2fO9",
      name: t("projects.3.name"),
      description: t.rich("projects.3.description", {
        b1: chunks => <span className="font-bold text-red">{chunks}</span>,
        b2: chunks => <span className="font-bold">{chunks}</span>,
      }),
      text: t("projects.3.text"),
      image: "/images/defenders/project_4.png",
      sum: "863 500 грн",
    },
    {
      _id: "tW2msZ3pyG5jzG6vjF",
      name: t("projects.4.name"),
      description: t.rich("projects.4.description", {
        b1: chunks => <span className="font-bold text-red">{chunks}</span>,
        b2: chunks => <span className="font-bold">{chunks}</span>,
      }),
      text: t("projects.4.text"),
      image: "/images/defenders/project_5.png",
      sum: "478 690 грн",
    },
  ]; // Placeholder for projects data

  return (
    <BaseSection style={"projects-def"}>
      <div className="w-full xl:w-[1280px] mx-auto py-10 px-4 md:px-14 md:py-8">
        <h2 className="text-[32px] md:text-[40px] xl:text-[50px] text-center font-bold mb-8">
          <span className="text-red">Проєкти </span>підтримки
        </h2>

        <ProjectsList projects={projects} />
        <div className="w-full h-[52px] md:h-16 xl:h-[74px] relative mt-4 md:mt-8">
          <Image
            src="/images/defenders/line_mob.png"
            width={343}
            height={52}
            className="w-full h-full md:hidden"
            alt="Decorative line image"
          />
          <Image
            src="/images/defenders/line_md.png"
            width={656}
            height={64}
            className="w-full h-full hidden md:block xl:hidden"
            alt="Decorative line image"
          />
          <Image
            src="/images/defenders/line.png"
            width={1180}
            height={73}
            className="w-full h-full hidden xl:block"
            alt="Decorative line image"
          />
          <p
            className={`w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl md:text-4xl xl:text-5xl text-white text-center font-bold ${inter.className}`}
          >
            {t("projects_text")}
          </p>
        </div>
      </div>
    </BaseSection>
  );
};
export default Projects;
