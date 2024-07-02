import ContactSection from "@/components/sections/contactForm/ContactSection";
import Advantages from "@/components/sections/iTradeUnion/Advantages";
import HeroITradeSection from "@/components/sections/iTradeUnion/HeroITradeSection";
import ReviewsITrade from "@/components/sections/iTradeUnion/ReviewsITrade";
import TellUs from "@/components/sections/iTradeUnion/TellUs";

export default function TradeUnionistPage() {
  return (
    <main className="w-full min-h-screen">
      <HeroITradeSection />
      <Advantages />
      <ContactSection bgStyle={"bg-white"} />
      <TellUs />
      <ReviewsITrade />
    </main>
  );
}
