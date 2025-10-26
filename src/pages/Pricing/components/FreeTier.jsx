import pfp from "../../../assets/images/freetierpfp.png";
import tick from "../../../assets/icons/tick.svg";
const Freetier = ({ freeTierData = {} }) => {
  return (
    <div className="w-xs h-[570px] border-[0.66px] border-[#000052] rounded-[19px] flex flex-col items-center justify-center">
      <div>
        <img src={pfp} alt="Profile illustration" />
        <h2>{freeTierData?.type}</h2>
        <h2>
          ₦{freeTierData?.amount} <span>/{freeTierData?.interval}</span>
        </h2>
        <p>Perfect for getting started with events in Nigeria</p>
      </div>

      {freeTierData?.items?.map((data, index) => (
        <div key={index} className="flex items-center gap-2 mt-2">
          <img src={tick} alt="tick icon" />
          <p>{data}</p>
        </div>
      ))}
    </div>
  );
};

export default Freetier;