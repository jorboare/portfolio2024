import { useEffect, useState } from "react";
import solanum from "../../assets/video/Solanum.mp4";
import block from "../../assets/video/Enter the block.mp4";
import placeholder from "../../assets/experienceImg.jpg";
import { Link } from "react-router-dom";

const Projects = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    //Calculation of the relative height for the project container
    const container = getContainer();
    const scrollable = getScrollableEl();
    if (scrollable.rect) {
      container.el.style.height = `${scrollable.rect.width}px`;
    }

    //When scrolling adds the X translation to the projects
    const addTranslate = () => {
      const latScroll = getScrollableEl();
      const projContainer = getContainer();
      const latScrollElData = latScroll.rect;
      const projContainerData = projContainer.rect;
      if (latScrollElData) {
        projContainer.el.style.height = `${latScrollElData.width + 100}px`;
      }
      if (projContainerData && latScrollElData && projContainerData.top <= 0) {
        setIsSticky(true);
        const scrollY = Math.round(Math.abs(projContainerData.top));
        latScroll.el.style.transform = `translateX(-${scrollY}px)`;
      } else {
        latScroll.el.style.transform = `translateX(0px)`;
        setIsSticky(false);
      }
    };
    setIsMobile(window.innerHeight > window.innerWidth),
      window.addEventListener("scroll", addTranslate);
    window.addEventListener("resize", () => {
      setIsMobile(window.innerHeight > window.innerWidth);
    });

    return () => window.removeEventListener("scroll", addTranslate);
  }, []);

  const getContainer = () => {
    const projContainer = document.querySelector(".projects-container");
    const container = {
      el: projContainer as HTMLElement,
      rect: projContainer?.getBoundingClientRect(),
    };
    return container;
  };
  const getScrollableEl = () => {
    const scrollable = document.querySelector(".projects-scroll");

    const element = {
      el: scrollable as HTMLElement,
      rect: scrollable?.getBoundingClientRect(),
    };
    return element;
  };
  return (
    <div
      id="projects"
      className="projects-container section relative w-full overflow-hidden"
    >
      <div
        className={`${isSticky ? "fixed left-[50px] top-0" : "absolute left-[50px] top-0"} justify-left projects-scroll z-40 flex h-[100svh] flex-row flex-nowrap items-center gap-24 pr-10`}
      >
        <div className="font-accent  text-primary sm:text-[100px] md:text-[200px]">
          <h1 className="dotted m-0 p-0 leading-tight">Projects</h1>
          <div className="flex h-9 items-center justify-end">
            <p className="block text-right text-xl text-secondAccent">
              Keep Scrolling
            </p>
            <div className="flex h-10 items-end justify-center px-3">
              <p className="circleScrollAnimation mr-10 block"></p>
            </div>
          </div>
        </div>

        <div
          className={`${isMobile ? "h-[70svw] w-[80svw]" : "h-[70svh] w-[80svh]"}  relative shrink-0 grow-0 overflow-hidden rounded-[5%] shadow-2xl`}
        >
          <Link to="https://project-solanum.vercel.app/" target="_blank">
            <div className="absolute left-1/2 z-40 w-auto -translate-x-1/2 text-nowrap p-0 font-accent text-primary sm:bottom-2 sm:text-[40px] md:bottom-5 md:text-[100px]">
              <p className="text-center">Project Solanum</p>
              <p className="text-center text-xl">
                React, React-context, Styled Components
              </p>
            </div>
            <video
              autoPlay
              muted
              loop
              className="h-[105%] w-full rounded-[5%] object-cover"
            >
              <source src={solanum} type="video/mp4" />
              Your browser doesn't accept videos
            </video>
          </Link>
        </div>
        <div
          className={`${isMobile ? "h-[70svw] w-[80svw]" : "h-[70svh] w-[80svh]"}  relative shrink-0 grow-0 overflow-hidden rounded-[5%] shadow-2xl`}
        >
          <Link
            to="https://jorboare.github.io/Enter-The-Block-Game/"
            target="_blank"
          >
            <div className="absolute left-1/2 z-40 w-auto -translate-x-1/2 text-nowrap p-0 font-accent text-primary sm:bottom-1 sm:text-[40px] md:bottom-5 md:text-[100px]">
              <p className="text-center"> Enter the block</p>
              <p className="text-center text-xl">
                React, React-context, Styled Components
              </p>
            </div>
            <video
              autoPlay
              muted
              loop
              className="h-[100%] w-full rounded-[5%]  object-cover object-center"
            >
              <source src={block} type="video/mp4" />
              Your browser doesn't accept videos
            </video>
          </Link>
        </div>
        <div
          className={`${isMobile ? "h-[70svw] w-[80svw]" : "h-[70svh] w-[80svh]"}  relative shrink-0 grow-0 overflow-hidden rounded-[5%] shadow-2xl`}
        >
          <div className="absolute left-1/2 z-40 w-auto -translate-x-1/2 text-nowrap p-0 font-accent text-primary sm:bottom-2 sm:text-[40px] md:bottom-5 md:text-[100px]">
            Placeholder
          </div>
          <img
            src={placeholder}
            className="h-[100%] w-full rounded-[5%]  object-cover object-center"
          />
        </div>
        <div
          className={`${isMobile ? "h-[70svw] w-[80svw]" : "h-[70svh] w-[80svh]"}  relative shrink-0 grow-0 overflow-hidden rounded-[5%] shadow-2xl`}
        >
          <div className="absolute left-1/2 z-40 w-auto -translate-x-1/2 text-nowrap p-0 font-accent text-primary sm:bottom-2 sm:text-[40px] md:bottom-5 md:text-[100px]">
            Placeholder
          </div>
          <img
            src={placeholder}
            className="h-[100%] w-full rounded-[5%]  object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
