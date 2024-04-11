import { useEffect, useState } from "react";
import solanum from "../../assets/video/Solanum.mp4";
import block from "../../assets/video/Enter the block.mp4";
import placeholder from "../../assets/experienceImg.jpg";
const Projects = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const container = getContainer();
    const scrollable = getScrollableEl();
    if (scrollable.rect) {
      console.log(scrollable.rect.height);
      container.el.style.height = `${scrollable.rect.width + 200}px`;
      console.log(getContainer().rect?.height);
    }
    const addTranslate = () => {
      const latScroll = getScrollableEl();
      const projContainer = getContainer();
      const latScrollElData = latScroll.rect;
      const projContainerData = projContainer.rect;
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
    window.addEventListener("resize", () =>
      setIsMobile(window.innerHeight > window.innerWidth),
    );

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
      className="projects-container relative h-[100svh] w-full overflow-hidden "
    >
      <div
        className={`${isSticky ? "fixed left-[50px] top-0" : "absolute left-[50px] top-0"} justify-left projects-scroll z-40 flex h-[100svh] w-auto flex-row flex-nowrap items-center gap-24 pr-10`}
      >
        <h1 className="font-accent  text-primary sm:text-[100px] md:text-[200px] lg:text-[250px]">
          <span className="text-secondary">P</span>rojects
        </h1>
        <div
          className={`${isMobile ? "h-[50svw] w-[80svw]" : "h-[70svh] w-[80svh]"}  relative shrink-0 grow-0 overflow-hidden rounded-[5%] shadow-2xl`}
        >
          <div className="absolute left-1/2 z-40 w-auto -translate-x-1/2 text-nowrap p-0 font-accent text-primary sm:bottom-2 sm:text-[40px] md:bottom-5 md:text-[100px]">
            Project Solanum
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
        </div>
        <div
          className={`${isMobile ? "h-[50svw] w-[80svw]" : "h-[70svh] w-[80svh]"}  relative shrink-0 grow-0 overflow-hidden rounded-[5%] shadow-2xl`}
        >
          <div className="absolute left-1/2 z-40 w-auto -translate-x-1/2 text-nowrap p-0 font-accent text-primary sm:bottom-2 sm:text-[40px] md:bottom-5 md:text-[100px]">
            Enter the block
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
        </div>
        <div
          className={`${isMobile ? "h-[50svw] w-[80svw]" : "h-[70svh] w-[80svh]"}  relative shrink-0 grow-0 overflow-hidden rounded-[5%] shadow-2xl`}
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
          className={`${isMobile ? "h-[50svw] w-[80svw]" : "h-[70svh] w-[80svh]"}  relative shrink-0 grow-0 overflow-hidden rounded-[5%] shadow-2xl`}
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
