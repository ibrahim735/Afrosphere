import Hiwbg from "../../../assets/images/hiwbgimage.png";
const howitworkshero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-white w-full min-h-screen">
      <img
        src={Hiwbg}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover object-center "
      />
      <div className="relative z-10 w-full bg-black/50 backdrop-blur-md py-16">
        <div className="ml-8 w-[70%] flex flex-col">
          <h1
            id="hero-heading"
            className="text-[2.6rem] font-extrabold md:text-5xl"
          >
            How Afrospere works..
          </h1>

          <p className="mt-4 text-[1rem] font-normal md:text-base">
            From idea to execution, we make event organizing simple and
            effective. Here's how you can create unforgettable experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default howitworkshero;
