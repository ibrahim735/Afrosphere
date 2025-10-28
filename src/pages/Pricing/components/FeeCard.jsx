// const FeeCard = ({ percentage, percentageBgColor, percentageTextColor, title, description }) => {
//   return (
//     <div className="w-full max-w-[330px] h-[194px] p-6 border-2 border-[#FEFEFE] rounded-[20px] flex flex-col items-center justify-center text-center shadow-[0px_0px_4px_0px_#00000040] bg-[#FEFEFE]">
//       {/* Percentage Badge */}
//       <div
//         className="px-2 py-1 rounded-lg mb-4 font-semibold text-sm"
//         style={{ backgroundColor: percentageBgColor, color: percentageTextColor } }
//       >
//         {percentage}
//       </div>

//       {/* Title */}
//       <h3 className="text-2xl md:text-2xl font-semibold text-black mb-2">
//         {title}
//       </h3>

//       {/* Description */}
//       <p className="text-sm text-[#969696] leading-relaxed">{description}</p>
//     </div>
//   );
// };

// export default FeeCard;


const FeeCard = ({ percentage, percentageBgColor, percentageTextColor, title, description }) => {
  return (
    <div className="w-full max-w-[330px] md:max-w-[280px] lg:max-w-[320px] h-auto min-h-[194px] p-6 md:p-7 lg:p-8 border-2 border-[#FEFEFE] rounded-[20px] flex flex-col items-center justify-center text-center shadow-[0px_0px_4px_0px_#00000040] bg-[#FEFEFE]">
      {/* Percentage Badge */}
      <div
        className="px-3 md:px-4 py-1 md:py-2 rounded-lg mb-3 md:mb-4 font-semibold text-sm md:text-base"
        style={{ backgroundColor: percentageBgColor, color: percentageTextColor }}
      >
        {percentage}
      </div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-semibold text-black mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-xs md:text-sm text-[#969696] leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeeCard;