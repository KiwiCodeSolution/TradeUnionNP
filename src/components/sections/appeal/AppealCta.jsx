import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import Title from "@/components/Title";
import { ChatBot } from "@/components/icons/IconsComponents";

const AppealCta = ({ email, chatBotLink }) => {
  const t = useTranslations("Appeal");
  return (
    <BaseSection style={"pb-16"}>
      <Wrapper>
        <div className="w-full bg-white rounded-2xl px-6 py-12 md:p-16 flex flex-col items-center gap-y-6 text-center">
          <Title tag={"h3"} styles={"text-center"}>
            {t(`cta_title`)}
          </Title>
          <p className="text-lg text-grey max-w-2xl">
            {t(`cta_text_before`)}
            {email && (
              <a className="text-red underline font-semibold" href={`mailto:${email}`}>
                {email}
              </a>
            )}
            {t(`cta_text_middle`)}
            {t(`cta_chatbot_label`)}
          </p>
          {chatBotLink && (
            <a
              href={chatBotLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit h-[60px] rounded-[100px] border-2 border-red text-red font-bold uppercase py-[12px] px-[28px] flex items-center gap-x-2 hover:bg-red hover:text-white transition-colors"
            >
              <span className="w-10 h-10 [&_svg]:w-10 [&_svg]:h-10 flex items-center justify-center shrink-0">
                <ChatBot />
              </span>
              {t(`cta_chatbot_button`)}
            </a>
          )}
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default AppealCta;
