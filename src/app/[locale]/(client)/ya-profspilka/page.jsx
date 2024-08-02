import Reviews from "@/components/sections/appeal/Reviews";
import ContactSection from "@/components/sections/contactForm/ContactSection";
import Advantages from "@/components/sections/iTradeUnion/Advantages";
import HeroITradeSection from "@/components/sections/iTradeUnion/HeroITradeSection";
import Invite from "@/components/sections/iTradeUnion/Invite";
import Subscription from "@/components/sections/iTradeUnion/Subscription";
import TellUs from "@/components/sections/iTradeUnion/TellUs";

export default function TradeUnionistPage() {
  return (
    <main className="w-full">
      <HeroITradeSection />
      <Advantages />
      <ContactSection bgStyle={"bg-white"} />
      <TellUs />
      <Reviews section={"iTrade"} />
      <Invite />
      <Subscription />
    </main>
  );
}
