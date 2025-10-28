// import pfp from "../../../assets/images/freetierpfp.png";
// import tick from "../../../assets/icons/tick.svg";

// const FreeTier = ({ freeTierData }) => {
//   return (
//     <div className="w-full max-w-[330px] h-fit py-8 border-[0.66px] border-[#000052] rounded-[19px] flex flex-col items-center justify-center gap-4">
//       <div className="flex flex-col items-center justify-center text-center w-full">
//         <img src={pfp} alt="Profile illustration" />
//         <h2 className="text-[1rem] font-bold">{freeTierData.type}</h2>
//         <h2 className="text-xl font-bold">
//           ₦{freeTierData.amount}{" "}
//           <span className="text-[#969696] text-xs">
//             /{freeTierData.interval}
//           </span>
//         </h2>
//         <p className="text-[#969696] text-xs">
//           Perfect for getting started with events in Nigeria
//         </p>
//       </div>

//       <div className="w-full mt-4">
//         {freeTierData.items.map((data, index) => (
//           <div
//             key={index}
//             className="flex gap-2 text-center px-12 items-center m-2"
//           >
//             <img src={tick} alt="tick icon" className="" />
//             <p className="text-sm font-normal">{data}</p>
//           </div>
//         ))}
//       </div>
//       <button className="cursor-pointer mt-5 py-4 px-28 bg-black border border-black rounded-lg text-white text-[0.7rem] font-medium">
//         Choose Plan
//       </button>
//     </div>
//   );
// };

// export default FreeTier;

import pfp from "../../../assets/images/freetiericon2.svg";
import tick from "../../../assets/icons/tick.svg";

const FreeTier = ({ freeTierData }) => {
  return (
    <div className="w-full max-w-[330px] md:max-w-[350px] lg:max-w-[380px] h-fit py-8 md:py-10 border-[0.66px] border-[#000052] rounded-[19px] flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center justify-center text-center w-full px-4">
        <img src={pfp} alt="Profile illustration" className="w-16 h-16 md:w-20 md:h-20 mb-3" />
        <h2 className="text-base md:text-lg font-bold">{freeTierData.type}</h2>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mt-1">
          ₦{freeTierData.amount}{" "}
          <span className="text-[#969696] text-xs md:text-sm">
            /{freeTierData.interval}
          </span>
        </h2>
        <p className="text-[#969696] text-xs md:text-sm mt-2">
          Perfect for getting started with events in Nigeria
        </p>
      </div>

      <div className="w-full mt-4">
        {freeTierData.items.map((data, index) => (
          <div
            key={index}
            className="flex gap-2 text-center px-8 md:px-12 items-center m-2"
          >
            <img src={tick} alt="tick icon" className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
            <p className="text-sm md:text-base font-normal">{data}</p>
          </div>
        ))}
      </div>
      <button className="cursor-pointer mt-5 py-3 md:py-4 px-20 md:px-24 lg:px-28 bg-black border border-black rounded-lg text-white text-xs md:text-sm font-medium hover:bg-gray-800 transition-colors">
        Choose Plan
      </button>
    </div>
  );
};

export default FreeTier;