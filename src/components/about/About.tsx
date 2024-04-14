import bgImage from "../../assets/Raphael_-_Saint_George_and_the_Dragon_-_Google_Art_Project.jpg";
//@ts-ignore
import ReactVivus from "react-vivus";

interface props {
  reached: boolean;
}
const About: React.FC<props> = (props) => {
  return (
    <div
      id="about"
      className={`${props.reached && "reached"} gradient-bg section relative z-50 grid h-[110vh] w-full pt-0 sm:mb-5 sm:mt-[0px] sm:border-t-[1px] sm:border-primary md:mb-[0px] md:border-t-0`}
    >
      <div className="absolute left-0 top-0 h-full w-full">
        <img
          className={`h-full w-full object-cover object-center`}
          src={bgImage}
        ></img>
      </div>
      <div className="z-40 grid grid-cols-12 gap-0">
        <div
          className={`${props.reached ? "opacity-100" : "opacity-0"} z-40 mx-5 mt-16 w-auto transition-all  sm:col-span-12 md:col-span-7 md:ml-10 md:mt-32 lg:col-span-6`}
        >
          <div className="dotted rounded-xl px-10 py-5">
            <h1 className="font-accent text-primary sm:text-[35px] md:text-[55px] lg:text-[70px]">
              About me
            </h1>
            <p className="text-primary sm:text-[20px] md:text-[23px] lg:text-[25px]">
              <span className="font-accent text-secondAccent sm:text-[23px] md:text-[30px] lg:text-[35px]">
                +3 years
              </span>{" "}
              experienced front-end developer from Spain based in
              <span className="font-accent text-secondAccent sm:text-[23px] md:text-[30px] lg:text-[35px]">
                {" "}
                Amsterdam
              </span>
              . Keeping up with beautiful visuals, great design and solid code.
            </p>
          </div>
        </div>
        <div className="sm:col-span-12 sm:col-start-1 md:col-span-4 md:col-start-9 md:mr-10 md:mt-32">
          <p
            className={`${props.reached ? "opacity-100" : "opacity-0"} dotted mx-5 rounded-xl px-5 py-2 text-center text-[30px] text-primary transition-all  sm:row-start-2 md:row-start-1 `}
          >
            This is{" "}
            <span className="font-accent text-[35px] text-secondAccent">
              {" "}
              Saint George
            </span>
          </p>
        </div>

        <div
          className={`${props.reached ? "opacity-100" : "opacity-0"} lg:col-start- z-40 w-auto rounded-xl  transition-all sm:col-span-12 sm:row-start-3 sm:mx-5 md:col-span-6 md:col-start-7 md:row-start-2 md:mr-10`}
        >
          <div className="dotted mb-5 rounded-xl px-10 py-8">
            <h1 className="font-accent text-primary sm:text-[35px] md:text-[35px] lg:text-[40px]">
              George <span className="text-secondAccent">===</span> Jordi
            </h1>
            <p className="text-primary sm:text-[20px] md:text-[23px] lg:text-[25px]">
              Legend says that he killed a{" "}
              <span className="text-secondAccent">poor dragon</span>. But I
              wouldn't do that, I love{" "}
              <span className="text-secondAccent">animals</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
