import FeeCard from "./FeeCard";
import Note from "./Note";
const PricingFees = () => {
  const feeData = [
    {
      percentage: "0%",
      title: "Free Events",
      percentageBgColor: "#D3D3FF66",
      percentageTextColor: "#000052",
      description: "No fee for free events on any plans",
    },
    {
      percentage: "3.7%",
      title: "Service Fee",
      percentageBgColor: "#93F3B366",
      percentageTextColor: "#10943C",
      description: "Per ticket + ₦200 service fee (paid by attendees)",
    },
    {
      percentage: "2.9%",
      title: "Payment Processing",
      percentageBgColor: "#FFAA8B66",
      percentageTextColor: "#FF6126",
      description: "Pre order payment processing fee",
    },
  ];
  return (
    <section className="min-h-screen text-black flex flex-col items-center justify-center gap-10">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-[2rem] font-semibold text-center">
          Transaction Fees
        </h2>
        <p className="text-xs font-medium w-[80%] text-center">
          Simple, transparent pricing for paid events across Nigeria
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-5">
        {feeData.map((fee, index) => (
          <FeeCard
            key={index}
            percentage={fee.percentage}
            percentageBgColor={fee.percentageBgColor}
            percentageTextColor={fee.percentageTextColor}
            title={fee.title}
            description={fee.description}
          />
        ))}
      </div>

      <Note />
    </section>
  );
};

export default PricingFees;
