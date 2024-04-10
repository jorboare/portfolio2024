import { useEffect } from "react";

import ExperienceCard from "../../utils/experienceCard/ExperienceCard";
import { experiences } from "../../data/data";
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
      object.style.height = elPosY + 3 + "px";
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
        className="relative grid grid-cols-12 grid-rows-3 gap-1 w-full sm:h-[300px] md:h-[400px] pt-0 sm:pt-14 sm:mt-[0px] md:mt-[50px] lg:mt-[120px]"
      >
        <div className="fadeInRight absolute w-2/3 h-full md:h-[500px] lg:h-[600px] sm:top-0 md:-top-1/2 right-0 z-0 gradient-photo"></div>
        <div className="sm:col-span-12 md:col-span-8 z-40">
          <h1 className="fadeInLeft  col-span-12 sm:text-center md:text-right font-accent p-0 text-primary leading-[10rem] sm:text-5xl md:text-[150px]  z-0">
            <span className="text-secondary">E</span>xperience
          </h1>
          <p className="fadeInLeft z-50 text-primary sm:text-lg md:text-xl lg:text-2xl font-primary max-w-[700px] ml-auto">
            With experience spanning both front-end and back-end development, my
            expertise lies in crafting visually compelling experiences using
            React.
          </p>
        </div>
        <div
          id="verticalLine"
          className="transition-width absolute sm:left-0 md:left-1/2 top-full -translate-x-1/2 -tranlate-y-1/2 w-[1px] bg-primary z-40"
        ></div>
      </div>
      <div className="grid grid-cols-2 grid-rows-8 text-primary sm:gap-3 md:gap-0">
        {experiences.map((e, idx) => (
          <ExperienceCard key={idx} {...e} index={idx} />
        ))}
      </div>
    </>
  );
};

export default Experience;
