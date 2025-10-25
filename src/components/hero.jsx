import Herobg from "../assets/images/pricingBgimage.png";
const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-white min-h-screen w-full h-screen">
      <div
        className="absolute inset-0 w-full h-full bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Herobg})` }}
        role="img"
      ></div>
      <div className="w-full bg-black/50 backdrop-blur-md py-16 ">
        <div className="ml-8 w-[70%] flex flex-col">
          <h1
            id="hero-heading"
            className="text-[2.6rem] font-extrabold md:text-5xl"
          >
            Free for you, Low fees for Paid Events.
          </h1>

          <p className="mt-4 text-[1rem] font-normal md:text-base ">
            Our pricing is simple – create your events for free, and attendees
            pay low-cost service fees only on paid tickets. Join the growing
            community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
