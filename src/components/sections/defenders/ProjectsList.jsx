import { useTranslations } from "next-intl";
import Image from "next/image";

const ProjectsList = ({ projects }) => {
  const t = useTranslations("Defenders");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8">
      <article className="w-full md:max-w-[312px] xl:max-w-[372px] min-h-[312px] rounded-[32px] pt-3 px-4 pb-5 relative bg-white overflow-hidden flex flex-col justify-center items-center">
        <Image
          src="/images/defenders/bg_red_grad_5.png"
          width={404}
          height={162}
          className="w-[404px] h-[162px] absolute -top-[82px] -right-[57px]"
          alt="декоративне зображення для картки, розмитий червоний фон у вигляді довільної фігури"
        />
        <Image
          src="/images/defenders/bg_red_grad_7.png"
          width={404}
          height={162}
          className="w-[404px] h-[162px] absolute -bottom-[76px] left-[198px]"
          alt="декоративне зображення для картки, розмитий червоний фон у вигляді довільної фігури"
        />
        <Image
          src="/images/defenders/bg_red_grad_6.png"
          width={404}
          height={162}
          className="w-[404px] h-[162px] absolute bottom-[25px] -left-[124px]"
          alt="декоративне зображення для картки, розмитий червоний фон у вигляді довільної фігури"
        />

        <p className="text-[96px] font-bold text-grey text-left absolute top-[54px] left-12 z-[5]">
          2022
        </p>
        <p className="text-[96px] font-bold text-grey text-right absolute top-[137px] right-12 z-[5]">
          2025
        </p>
      </article>
      {projects.length > 0 &&
        projects.map(project => (
          <article
            className="w-full md:max-w-[312px] xl:max-w-[372px] min-h-[312px] rounded-[32px] pt-3 pb-5 relative bg-white overflow-hidden flex flex-col justify-between"
            key={project._id}
          >
            <div className="flex flex-col gap-y-1">
              <div className="w-full flex items-center gap-x-1 px-3 mb-1">
                <div className="w-20 h-20 flex items-center justify-center">
                  <Image
                    src={project.image}
                    width={60}
                    height={60}
                    className="w-[60px] h-[60px] object-contain"
                    alt="Project image"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl font-bold">{t("project_name")}</p>
                  <p className="text-xl font-bold">{project.name}</p>
                </div>
              </div>
              <div className="w-full px-4">
                <p className="leading-normal">{project.description}</p>
              </div>
            </div>

            <div className="w-full px-4">
              <div className="w-[253px] h-[2px] bg-grey mt-2 mb-3" />
              <p className="font-bold">
                {project.text}:{" "}
                <span className="text-xl text-red">
                  {project.sum} {t("currency")}
                </span>
              </p>
            </div>
          </article>
        ))}
    </div>
  );
};
export default ProjectsList;
