// import Herobg from "../../../assets/images/pricingBgimage.png";

// const PricingHero = () => {
//   return (
//     <section className="relative flex flex-col items-center justify-center text-white w-full min-h-screen">
//       <img
//         src={Herobg}
//         alt="Hero background"
//         className="absolute inset-0 w-full h-full object-cover object-center "
//       />
//       <div className="relative z-10 w-full bg-[#0000001A]/50 backdrop-blur-[35px] py-16">
//         <div className="ml-8 w-[70%] flex flex-col">
//           <h1
//             id="hero-heading"
//             className="text-[2.6rem] font-extrabold md:text-5xl"
//           >
//             Free for you, Low fees for Paid Events.
//           </h1>

//           <p className="mt-4 text-[1rem] font-normal md:text-base">
//             Our pricing is simple – create your events for free, and attendees
//             pay low-cost service fees only on paid tickets. Join the growing
//             community.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PricingHero;

import Herobg from "../../../assets/images/pricingBgimage.png";
import HerobgDesktop from "../../../assets/images/pricingherodesktopbg.jpg"

const PricingHero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-white w-full min-h-screen">
      
      {/* Mobile/Tablet Image */}
      <img
        src={Herobg}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover object-center md:hidden"
      />
      
      {/* Desktop Image */}
      <img
        src={HerobgDesktop}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover object-center hidden md:block"
      />
      
      {/* Mobile/Tablet Layout */}
      <div className="relative z-10 w-full bg-[#0000001A]/50 backdrop-blur-[35px] py-16 md:hidden">
        <div className="ml-8 w-[70%] flex flex-col">
          <h1
            id="hero-heading"
            className="text-[2.6rem] font-extrabold"
          >
            Free for you, Low fees for Paid Events.
          </h1>

          <p className="mt-4 text-[1rem] font-normal">
            Our pricing is simple – create your events for free, and attendees
            pay low-cost service fees only on paid tickets. Join the growing
            community.
          </p>
        </div>
      </div>

      {/* Desktop Layout*/}
      <div className="hidden md:flex relative z-10 w-full min-h-screen items-center justify-center">
        <div className="bg-[#0000001A]/50 backdrop-blur-[10px] py-8 rounded-4xl max-w-[80%] w-full flex-flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-5xl lg:text-[4rem] font-extrabold leading-tight mb-1">
              Free for You, Low Fees for Paid Events
            </h1>
            
            <p className="text-base lg:text-xl font-medium max-w-[73%] mb-8">
              Our pricing is simple—create your events for free, and attendees pay low-cost service fees only on paid tickets. Join the growing community of Nigerian event organizers.
            </p>
            
            <button className="cursor-pointer bg-[#FF6126] hover:bg-[#FF5520] text-white text-xl font-normal px-8 py-3 rounded-2xl transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;