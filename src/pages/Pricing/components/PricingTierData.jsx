import Freetier from "./Freetier";
import Professionaltier from "./ProfessionalTier";

const Pricingtierdata = () => {
  const freeTierData = {
    amount: 0.0,
    type: "Free",
    interval: "per month",
    items: [
      "Unlimited free events",
      "Up to 100 attendees per events",
      "Email notifications",
      "Basic event creation",
      "Community support",
      "Mobile-friendly interface",
      "Event Discovery features",
    ],
  };

  const professionalTierData = {
    amount: 15000,
    type: "Professional",
    interval: "per month",
    items: [
      "Everything in free plan",
      "Unlimited attendees",
      "Advanced analytics and insights",
      "Custom branding & themes",
      "Multiple payment options",
      "Email marketing campaigns",
      "Priority customer support",
      "Event promotion boost",
      "Detailed revenue reports",
    ],
  };
  
  return (
    <>
      <Freetier freeTierData={freeTierData} />
      <Professionaltier data={professionalTierData} />
    </>
  );
};

export default Pricingtierdata;