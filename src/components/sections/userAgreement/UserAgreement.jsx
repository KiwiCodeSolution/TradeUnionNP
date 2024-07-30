import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import { Link } from "@/navigation";

const UserAgreement = ({ locale }) => {
  const t = useTranslations("User_agreement");
  return (
    <BaseSection style={""}>
      <Wrapper>
        <div className="agreement py-10">
          <Title tag={"h1"} styles={""}>
            {t(`title`)}
          </Title>
          <p className="text-[15px] text-liteGrey my-8">2021-06-01</p>
          <p className="text-base text-[#2c2e33] mb-2">
            {t(`description.0`)}
            <Link
              href="https://profspilka.org/"
              className="text-[#1155CC] underline underline-offset-1"
              locale={locale}
            >
              https://profspilka.org/
            </Link>{" "}
            {t(`description.1`)}
          </p>

          <ol className="text-base text-[#2c2e33] flex flex-col gap-y-2">
            <li className="flex flex-col gap-y-2">
              <h2 className="font-bold">1. {t(`first_title`)}</h2>
              <ol className="flex flex-col gap-y-2">
                <li>{t(`first_text.0`)}</li>
                <li>{t(`first_text.1`)}</li>
                <li>{t(`first_text.2`)}</li>
              </ol>
            </li>

            <li className="flex flex-col gap-y-2">
              <h2 className="font-bold">2. {t(`second_title`)}</h2>
              <ol className="flex flex-col gap-y-2">
                <li>{t(`second_text.0`)}</li>
                <li>{t(`second_text.1`)}</li>
                <li>{t(`second_text.2`)}</li>
                <li>{t(`second_text.3`)}</li>
                <li>{t(`second_text.4`)}</li>
                <li>{t(`second_text.5`)}</li>
              </ol>
            </li>

            <li className="flex flex-col gap-y-2">
              <h2 className="font-bold">3. {t(`third_title`)}</h2>
              <ol className="flex flex-col gap-y-2">
                <li>{t(`third_text.0`)}</li>
                <li>{t(`third_text.1`)}</li>
                <li>{t(`third_text.2`)}</li>
                <li>{t(`third_text.3`)}</li>
              </ol>
            </li>
          </ol>
          <p>{t(`last_point`)}</p>
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default UserAgreement;
