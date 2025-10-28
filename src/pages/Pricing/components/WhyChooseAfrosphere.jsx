// import BenefitCard from "./BenefitCard";
// import paymentIcon from "../../../assets/images/localpayment.png";
// import supportIcon from "../../../assets/images/localsupport.png";
// import secureIcon from "../../../assets/images/secureplatform.png";
// import growthIcon from "../../../assets/images/growthtools.png";

// const WhyChooseAfrosphere = () => {
//   return (
//     <section className="min-h-screen text-black flex flex-col items-center justify-center gap-10">
//       <div className="flex flex-col items-center justify-center">
//         <h2 className="text-[2rem] font-semibold text-center">
//           Why Organizers Choose Afrosphere?
//         </h2>
//         <p className="text-xs font-medium w-[80%] text-center">
//           We're not just another event platform. We understand your challenges
//           and provide solutions that work.
//         </p>
//       </div>

//       <div className="grid grid-cols-2 gap-2 divide-x divide-y">
//         <BenefitCard
//           icon={paymentIcon}
//           title="Local Payments"
//           description="Support for Naira payments, bank transfers, and mobile money"
//         />

//         <BenefitCard
//           icon={supportIcon}
//           title="Local Support"
//           description="Nigerian customer support team in your timezone"
//         />

//         <BenefitCard
//           icon={secureIcon}
//           title="Secure Platform"
//           description="Bank-level security with fraud protection"
//         />

//         <BenefitCard
//           icon={growthIcon}
//           title="Growth Tools"
//           description="Analytics and marketing tools to grow your audience"
//         />
//       </div>
//     </section>
//   );
// };

// export default WhyChooseAfrosphere;


import BenefitCard from "./BenefitCard";
import paymentIcon from "../../../assets/images/localpayment2.svg";
import supportIcon from "../../../assets/images/localsupport2.svg";
import secureIcon from "../../../assets/images/secureplatform2.svg";
import growthIcon from "../../../assets/images/growthtools2.svg";

const WhyChooseAfrosphere = () => {
  return (
    <section className="min-h-screen text-black flex flex-col items-center justify-center gap-10 py-14 px-6">
      <div className="flex flex-col items-center justify-center max-w-4xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-3">
          Why Organizers Choose Afrosphere?
        </h2>
        <p className="text-sm md:text-base lg:text-lg font-medium text-center max-w-2xl">
          We're not just another event platform. We understand your challenges
          and provide solutions that work.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 w-full max-w-6xl">
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