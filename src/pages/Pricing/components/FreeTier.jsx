import pfp from "../../../assets/images/freetierpfp.png";
import tick from "../../../assets/icons/tick.svg";

const FreeTier = ({ freeTierData }) => {  
  return (
    <div className="w-[360px] h-[570px] border-[0.66px] border-[#000052] rounded-[19px] flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center justify-center text-center w-full">
        <img src={pfp} alt="Profile illustration" />
        <h2 className="text-[1rem] font-bold">{freeTierData.type}</h2>
        <h2 className="text-xl font-bold">
          ₦{freeTierData.amount} <span className="text-[#969696] text-xs">/{freeTierData.interval}</span>
        </h2>
        <p className="text-[#969696] font-xs">Perfect for getting started with events in Nigeria</p>
      </div>

      <div className="w-full mt-4">
        {freeTierData.items.map((data, index) => (
          <div key={index} className="flex gap-2 text-center px-12 items-center m-2">
            <img src={tick} alt="tick icon" className="" />
            <p>{data}</p>
          </div>
        ))}
      </div>
      <button className="py-4 px-[30%] bg-black border border-black rounded-lg text-white ">Choose Plan</button>
    </div>
  );
};

export default FreeTier;