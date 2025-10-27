import Herobg from "../../../assets/images/pricingBgimage.png";
const PricingHero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-white w-full min-h-screen">
      <img
        src={Herobg}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover object-center "
      />
      <div className="relative z-10 w-full bg-black/50 backdrop-blur-md py-16">
        <div className="ml-8 w-[70%] flex flex-col">
          <h1
            id="hero-heading"
            className="text-[2.6rem] font-extrabold md:text-5xl"
          >
            Free for you, Low fees for Paid Events.
          </h1>

          <p className="mt-4 text-[1rem] font-normal md:text-base">
            Our pricing is simple – create your events for free, and attendees
            pay low-cost service fees only on paid tickets. Join the growing
            community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;
