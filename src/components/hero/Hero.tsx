import { useEffect } from "react";
import Background from "./Background";

const Hero = () => {
  let fontIndex = 0;
  const fonts = [
    "Bebas Neue, sans-serif",
    "Pacifico, cursive",
    "Workbench, sans-serif",
    "Tac One, sans-serif",
    "Licorice, cursive",
    "Playfair Display, serif",
  ];

  useEffect(() => {
    const cleanup = () => clearInterval(interval);

    const web: HTMLElement | null = document.querySelector("#webSpan");
    const interval = setInterval(() => {
      if (web) web.style.fontFamily = fonts[fontIndex];
      fontIndex > 4 ? (fontIndex = 0) : (fontIndex += 1);
    }, 300);

    return cleanup;
  }, []);

  return (
    <div id="hero" className="section relative h-[90vh] sm:px-2 md:px-32">
      <Background />
      <h3 className="m-0 mx-2 w-full pt-2 text-center text-xl text-primary">
        Front-end Developer
      </h3>
      <div className="align-center relative z-40 mt-5 flex h-[100%] w-full flex-col items-center justify-center">
        <h1 className="z-30 m-0 p-0 font-accent text-[200px] leading-[10rem] text-primary sm:text-6xl md:text-[150px] lg:text-[150px]">
          Hi. <span className="m-0 block p-0">I'm Jordi.</span>
        </h1>
        <h2 className="z-30 m-0 p-0 font-primary text-primary sm:text-[20px] md:text-[50px] lg:text-[60px]">
          I build things for the{" "}
          <span
            id="webSpan"
            className="m-0 p-0 leading-[1] text-secondAccent md:text-[48px] lg:text-[68px]"
          >
            web
          </span>
          .
        </h2>
      </div>
    </div>
  );
};

export default Hero;
