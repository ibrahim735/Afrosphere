// import propfp from "../../../assets/images/professionaltierpfp.png";
// import tick from "../../../assets/icons/tick.svg";

// const ProfessionalTier = ({ professionalTierData }) => {
//   return (
//     <div className="relative w-full max-w-[330px] h-fit border-[0.66px] border-[#000052] rounded-[19px] flex flex-col overflow-hidden py-12">
//       <div className="absolute inset-0 w-full h-8 bg-[#000052] flex items-center justify-center text-white text-[0.63rem] font-medium">
//         Most Popular
//       </div>
      
//       <div className="flex-1 flex flex-col items-center justify-center gap-4 px-4">
//         <div className="flex flex-col items-center justify-center text-center w-full">
//           <img src={propfp} alt="Profile illustration" />
//           <h2 className="text-[1rem] font-bold">{professionalTierData.type}</h2>
//           <h2 className="text-xl font-bold">
//             ₦{professionalTierData.amount}{" "}
//             <span className="text-[#969696] text-xs">
//               /{professionalTierData.interval}
//             </span>
//           </h2>
//           <p className="text-[#969696] font-xs">
//             Ideal for growing event organizers
//           </p>
//         </div>

//         <div className="w-full">
//           {professionalTierData.items.map((data, index) => (
//             <div
//               key={index}
//               className="flex gap-2 text-center px-7 items-center m-2"
//             >
//               <img src={tick} alt="tick icon"/>
//               <p className="text-sm font-normal">{data}</p>
//             </div>
//           ))}
//         </div>
        
//         <button className="cursor-pointer py-4 px-28 bg-black border border-black rounded-lg text-white text-[0.7rem] font-medium">
//           Choose Plan
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProfessionalTier;

import propfp from "../../../assets/images/professionaltiericon2.svg";
import tick from "../../../assets/icons/tick.svg";

const ProfessionalTier = ({ professionalTierData }) => {
  return (
    <div className="relative w-full max-w-[330px] md:max-w-[350px] lg:max-w-[380px] h-fit border-[0.66px] border-[#000052] rounded-[19px] flex flex-col overflow-hidden py-12 md:py-14">
      <div className="absolute top-0 left-0 right-0 w-full h-8 md:h-10 bg-[#000052] flex items-center justify-center text-white text-xs md:text-sm font-medium">
        Most Popular
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center gap-4 px-4">
        <div className="flex flex-col items-center justify-center text-center w-full">
          <img src={propfp} alt="Profile illustration" className="w-16 h-16 md:w-20 md:h-20 mb-3" />
          <h2 className="text-base md:text-lg font-bold">{professionalTierData.type}</h2>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mt-1">
            ₦{professionalTierData.amount}{" "}
            <span className="text-[#969696] text-xs md:text-sm">
              /{professionalTierData.interval}
            </span>
          </h2>
          <p className="text-[#969696] text-xs md:text-sm mt-2">
            Ideal for growing event organizers
          </p>
        </div>

        <div className="w-full">
          {professionalTierData.items.map((data, index) => (
            <div
              key={index}
              className="flex gap-2 text-center px-6 md:px-8 items-center m-2"
            >
              <img src={tick} alt="tick icon" className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0"/>
              <p className="text-sm md:text-base font-normal">{data}</p>
            </div>
          ))}
        </div>
        
        <button className="cursor-pointer py-3 md:py-4 px-20 md:px-24 lg:px-28 bg-black border border-black rounded-lg text-white text-xs md:text-sm font-medium hover:bg-gray-800 transition-colors">
          Choose Plan
        </button>
      </div>
    </div>
  );
};

export default ProfessionalTier;