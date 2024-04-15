import { useEffect } from "react";

import ExperienceCard from "../../utils/experienceCard/ExperienceCard";
import { experiences } from "../../data/data";
import Technologies from "../technologies/Technologies";
const Experience = () => {
  const thirdHeight = (window.innerHeight / 3) * 2;

  useEffect(() => {
    function handleScroll() {
      checkObjectInCenter();
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleShowingExperience);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleShowingExperience() {
    const experienceElements = document.querySelectorAll(".experienceEl");
    experienceElements.forEach((e) => {
      if (e) {
        const element = e as HTMLElement;
        const elementData = element.getBoundingClientRect();
        const objPosY = elementData.top + elementData.height / 2; //tracks the distance to the top from the middle of the element

        if (objPosY <= thirdHeight) {
          element.style.transform = "rotateX(0deg) translateX(0px)";
        } else {
          element.style.transform = "rotateX(-90deg)";
        }
      }
    });
  }
  function checkObjectInCenter() {
    const object = document.getElementById("verticalLine");
    const lastElement = document.querySelector(`.line${experiences.length}`);

    if (!object || !lastElement) return false;

    const objData = object.getBoundingClientRect();
    const scrollY = window.scrollY;
    const objectPosY = objData.top + scrollY;
    const calcHeight = (objectPosY - thirdHeight - window.scrollY) * -1;
    const elPosY =
      lastElement?.getBoundingClientRect().top + scrollY - objectPosY;
    if (calcHeight < 0) object.style.opacity = "0";
    else if (calcHeight > 0 && calcHeight < elPosY) {
      object.style.opacity = "1";
      object.style.height = calcHeight + "px";
    } else if (calcHeight > elPosY) {
      object.style.height = elPosY + 4 + "px";
    }

    if (calcHeight > 300) {
      object.style.width = "4px";
    } else {
      object.style.width = "1px";
    }
  }
  return (
    <>
      <div
        id="experience"
        className="section relative z-40 w-full px-10 pb-10 sm:mt-[0px] sm:pt-14 md:mt-[50px] lg:mt-[120px]"
      >
        <div className="gradient-photo absolute right-0 z-0 h-full fadeInRight sm:top-0 sm:w-full md:-top-1/2 md:h-[500px] md:w-2/3 lg:h-[600px]"></div>
        <div className="z-40 mb-10">
          <h1 className="fadeInLeft  z-30 p-0 font-accent leading-[10rem] text-primary sm:text-center sm:text-5xl md:text-center md:text-[150px]">
            Experience
          </h1>
          <p className="fadeInLeft z-50 max-w-[700px] font-primary text-primary sm:text-lg md:mb-10 md:ml-[20%] md:text-xl lg:text-2xl">
            With experience spanning both{" "}
            <span className="font-accent text-secondAccent">front-end</span> and
            <span className="font-accent text-secondAccent">
              {" "}
              back-end
            </span>{" "}
            development, my expertise lies in crafting visually compelling
            experiences using{" "}
            <span className="font-accent text-secondAccent">React</span>.
          </p>
          <p className="fadeInLeft z-50 mt-2 max-w-[700px] font-primary text-primary sm:text-lg md:mb-10 md:ml-[20%] md:text-xl lg:text-2xl">
            Here's a{" "}
            <span className="font-accent text-secondAccent">timeline</span>{" "}
            outlining my professional journey. While some projects are bound by
            confidentiality agreements, I'm more than happy to discuss the scope
            of my{" "}
            <span className="font-accent text-secondAccent">contributions</span>{" "}
            to them.
          </p>
          <Technologies />
        </div>
        <div
          id="verticalLine"
          className="-tranlate-y-1/2 absolute top-full z-50 mt-10 w-[1px] -translate-x-1/2 bg-primary transition-width sm:left-0 sm:ml-5 md:left-1/2 md:ml-0"
        ></div>
      </div>
      <div>
        {experiences.length &&
          experiences.map((e, idx) => (
            <ExperienceCard key={idx} {...e} index={idx + 1} />
          ))}
      </div>
    </>
  );
};

export default Experience;
