const BenefitCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-3 py-4 w-full max-w-40 bg-[#FBFBF] border-2 border-[#FEFEFE] rounded-[15px] shadow-[0px_0px_4px_0px_#00000040]">
      {/* Icon */}
      <img src={icon} alt={title} className="w-[52px]" />

      {/* Title */}
      <h3 className="text-[xs] font-semibold mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[0.55rem] text-[#969696] leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default BenefitCard;
