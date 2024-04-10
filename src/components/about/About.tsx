import ProfileImg from "../../assets/profile/profile.jpg";
//@ts-ignore
import ReactVivus from "react-vivus";
import Arrow from "../../assets/arrow.svg";
const About = () => {
  return (
    <div
      id="about"
      className=" relative grid grid-cols-12 grid-rows-3 gap-1 w-full h-[600px] pt-0 sm:pt-14 sm:mt-[0px] md:mt-[50px] lg:mt-[120px] sm:border-t-[1px] sm:border-primary md:border-t-0 lg:border-t-0"
    >
      <div className="row-span-2 sm:col-span-12 md:col-span-4 md:min-w-52 md:min-h-52">
        <img
          className="fadeInRight sm:w-[150px] sm:h-[150px]  md:w-[250px] md:h-[250px] lg:w-[320px] lg:h-[320px] object-cover m-auto object-bottom rounded-full"
          src={ProfileImg}
          alt="Profile image"
        />
        {/* <ReactVivus
          id="arrow"
          option={{
            file: Arrow,
            animTimingFunction: "EASE-IN-OUT",
            type: "oneByOne",
            duration: 30,
          }}
        /> */}
      </div>
      <div className="sm:col-span-12 md:col-span-8 z-50">
        <h1 className="fadeInLeft transition-view col-span-12 sm:text-center md:text-right font-accent p-0 text-primary leading-[10rem] sm:text-5xl md:text-[150px]">
          About Me
        </h1>
        <p className="fadeInLeft text-primary sm:text-lg md:text-2xl font-primary z-50 max-w-[700px] ml-auto">
          +3 years experienced front-end developer from Spain based in
          Amsterdam. Keeping up with astonishing visuals, great design and solid
          code.
        </p>
      </div>
      <img
        src={Arrow}
        className="sm:hidden md:visible fadeInRight row-start-3 col-start-4 col-span-1 w-14 ml-auto"
      />
      <div className="sm:hidden md:visible row-start-3 col-span-5 col-start-5">
        <p className="fadeInRight font-handwrite w-full m-0 p-0 ml-2 mt-8 text-primary text-3xl sm:hidden md:block ">
          I also love hiking, nature and sports!
        </p>
      </div>
    </div>
  );
};

export default About;
