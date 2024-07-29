import { useTranslations } from "next-intl";
import Title from "@/components/Title";

const Slide = ({ slideNumber }) => {
  const t = useTranslations("Protection");
  const slide = slideNumber === 1 ? [1, 2, 3, 4, 5, 6] : [1, 2, 3, 4, 5];
  return (
    <article className="w-full h-fit">
      <Title tag="h2" styles="mt-4 mb-12">
        {slideNumber === 1 ? t(`first_slide_title`) : t(`second_slide_title`)}
      </Title>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-4">
        {slide.map((el, index) => (
          <li key={index + 58} className="w-full flex gap-x-2 items-start">
            <div className="flex items-center gap-x-2">
              <p className="text-red text-[22px] leading-[1.3]">0{el}</p>
              <div className="h-0.5 w-8 bg-red" />
            </div>

            <div>
              <h3 className="text-[22px] font-bold leading-[1.3]">
                {slideNumber === 1
                  ? t(`first_slide.${index}.title`)
                  : t(`second_slide.${index}.title`)}
              </h3>
              <p className="text-lg text-grey leading-6 py-4">
                {slideNumber === 1
                  ? t(`first_slide.${index}.text`)
                  : t(`second_slide.${index}.text`)}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Slide;
