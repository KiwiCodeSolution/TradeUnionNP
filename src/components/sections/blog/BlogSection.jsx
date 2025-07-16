import BaseSection from "@/components/BaseSection";
import Title from "@/components/Title";
import LinkButton from "@/components/UI/buttons/LinkButton";
import Wrapper from "@/components/Wrapper";
import { useTranslations } from "next-intl";
import BlogItem from "./BlogItem";

const BlogSection = ({ locale, items }) => {
  const t = useTranslations("About.blog");
  return (
    <BaseSection style={""}>
      <Wrapper styles={"min-h-[840px] py-16 xl:py-32"}>
        <Title tag={"h2"} styles={"text-center mb-10"}>
          <span className="text-red">{t(`title.0`)}</span> {t(`title.1`)}
        </Title>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-x-10">
          {items.map(el => (
            <BlogItem key={el._id} item={el} section={"home"} locale={locale} part={"novyny"} />
          ))}
        </div>

        <LinkButton
          view={"transparent"}
          goTo={"/novyny"}
          locale={locale}
          goToPage
          icon
          style={
            "border border-red mt-9 mx-auto relative z-[7] py-[15px] px-[33px] rounded-full w-fit uppercase flex items-center justify-between gap-x-5 text-[14px] font-bold"
          }
        >
          {t(`button`)}
        </LinkButton>
      </Wrapper>
    </BaseSection>
  );
};

export default BlogSection;
