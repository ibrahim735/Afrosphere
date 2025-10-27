import BenefitCard from "./BenefitCard";
import paymentIcon from "../../../assets/images/localpayment.png";
import supportIcon from "../../../assets/images/localsupport.png";
import secureIcon from "../../../assets/images/secureplatform.png";
import growthIcon from "../../../assets/images/growthtools.png";

const WhyChooseAfrosphere = () => {
  return (
    <section className="min-h-screen text-black flex flex-col items-center justify-center gap-10">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-[2rem] font-semibold text-center">
          Why Organizers Choose Afrosphere?
        </h2>
        <p className="text-xs font-medium w-[80%] text-center">
          We're not just another event platform. We understand your challenges
          and provide solutions that work.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2 divide-x divide-y">
        <BenefitCard
          icon={paymentIcon}
          title="Local Payments"
          description="Support for Naira payments, bank transfers, and mobile money"
        />

        <BenefitCard
          icon={supportIcon}
          title="Local Support"
          description="Nigerian customer support team in your timezone"
        />

        <BenefitCard
          icon={secureIcon}
          title="Secure Platform"
          description="Bank-level security with fraud protection"
        />

        <BenefitCard
          icon={growthIcon}
          title="Growth Tools"
          description="Analytics and marketing tools to grow your audience"
        />
      </div>
    </section>
  );
};

export default WhyChooseAfrosphere;
