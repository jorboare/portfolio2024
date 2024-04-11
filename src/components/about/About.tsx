import ProfileImg from "../../assets/profile/profile.jpg";
//@ts-ignore
import ReactVivus from "react-vivus";
import Arrow from "../../assets/arrow.svg";
const About = () => {
  return (
    <div
      id="about"
      className=" relative grid w-full grid-cols-2 grid-rows-2 gap-1 pt-0 sm:mb-5 sm:mt-[0px] sm:h-[400px] sm:border-t-[1px] sm:border-primary sm:px-3 sm:pt-14 md:mb-[0px] md:mt-[50px] md:h-[500px] md:border-t-0 md:px-10 lg:mt-[120px] lg:h-[600px] lg:border-t-0"
    >
      <div className="col-start-1  sm:col-span-2 sm:row-start-1 md:col-span-1 md:min-h-52 md:min-w-52">
        <img
          className="m-auto rounded-full object-cover object-bottom fadeInRight sm:h-[150px] sm:w-[150px] md:h-[250px] md:w-[250px] lg:h-[320px] lg:w-[320px]"
          src={ProfileImg}
          alt="Profile image"
        />
      </div>
      <div className="z-40 sm:col-span-2 sm:col-start-1 sm:row-start-2 sm:gap-6 md:col-span-1 md:col-start-2 md:row-start-1">
        <h1 className="fadeInLeft transition-view col-span-12 text-nowrap p-0 font-accent leading-[10rem] text-primary sm:text-center sm:text-5xl md:text-right md:text-[120px] lg:text-[150px]">
          <span className="text-secondary">A</span>bout Me
        </h1>
        <p className="fadeInLeft z-40 ml-auto max-w-[700px] font-primary text-primary sm:text-lg md:text-2xl">
          +3 years experienced front-end developer from Spain based in
          Amsterdam. Keeping up with beautiful visuals, great design and solid
          code.
        </p>
      </div>
      <img
        src={Arrow}
        className="col-span-1 col-start-1 row-start-1 ml-auto w-14 fadeInRight sm:hidden md:visible"
      />
      <div className="col-span-5 col-start-5 row-start-3 sm:hidden md:visible">
        <p className="m-0 ml-2 mt-8 w-full p-0 font-handwrite text-3xl text-primary fadeInRight sm:hidden md:block ">
          I also love hiking, nature and sports!
        </p>
      </div>
    </div>
  );
};

export default About;
