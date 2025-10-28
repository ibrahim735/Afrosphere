// const BenefitCard = ({ icon, title, description }) => {
//   return (
//     <div className="flex flex-col items-center justify-center text-center px-3 py-4 w-full max-w-40 bg-[#FBFBF] border-2 border-[#FEFEFE] rounded-[15px] shadow-[0px_0px_4px_0px_#00000040]">
//       {/* Icon */}
//       <img src={icon} alt={title} className="w-[52px]" />

//       {/* Title */}
//       <h3 className="text-[xs] font-semibold mb-2">
//         {title}
//       </h3>

//       {/* Description */}
//       <p className="text-[0.55rem] text-[#969696] leading-relaxed">
//         {description}
//       </p>
//     </div>
//   );
// };

// export default BenefitCard;

const BenefitCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 md:px-6 lg:px-8 py-6 md:py-8 w-full bg-[#FBFBFB] border-2 border-[#FEFEFE] rounded-[15px] md:rounded-[20px] shadow-[0px_0px_4px_0px_#00000040]">
      {/* Icon */}
      <img 
        src={icon} 
        alt={title} 
        className="w-[52px] md:w-16 lg:w-[72px] mb-3 md:mb-4" 
      />

      {/* Title */}
      <h3 className="text-sm md:text-base lg:text-lg font-semibold mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-xs md:text-sm text-[#969696] leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default BenefitCard;