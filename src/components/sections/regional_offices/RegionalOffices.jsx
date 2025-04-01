import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import RegionalOffice from "./RegionalOffice";

export default function RegionalOffices({ items, locale }) {
  if (!items) {
    return null;
  }

  return (
    <BaseSection style={""}>
      <Wrapper styles={"py-16"}>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-8 xl:gap-16">
          {items && items.map(el => <RegionalOffice key={el._id} item={el} locale={locale} />)}
        </div>
      </Wrapper>
    </BaseSection>
  );
}
