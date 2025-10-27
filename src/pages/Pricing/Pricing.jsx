import PricingHero from "./components/PricingHero";
import PricingTiers from "./components/PricingTiers"
import PricingFees from "./components/PricingFees"
import WhyChooseAfrosphere from "./components/WhyChooseAfrosphere";
const Pricing = () => {
   return (
    <main>
      <PricingHero />
      <PricingTiers />
      <PricingFees />
      <WhyChooseAfrosphere />
    </main>
  );
}

export default Pricing