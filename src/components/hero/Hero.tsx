import { useEffect } from "react";
import Clock from "../clock/Clock";
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
    <div id="hero">
      <h3 className="m-0 w-full p-0 pb-5 text-center text-lg text-primary">
        Frontend Developer
      </h3>
      <div
        className={`m-auto mb-8 mt-1 h-[1px] w-full bg-primary opacity-100 transition-all duration-500`}
      />
      <div className="relative z-40 w-full overflow-hidden sm:h-[180px] md:h-[400px] lg:h-[500px]">
        <h1 className="z-30 m-0 p-0 font-accent text-[200px] leading-[10rem] text-primary sm:text-6xl md:text-[150px] lg:text-[200px]">
          Hi. <span className="m-0 block p-0">I'm Jordi.</span>
        </h1>
        <h2 className=" z-30 m-0 p-0 font-primary text-primary sm:text-[20px] md:text-[50px] lg:text-[70px]">
          I build things for the{" "}
          <span
            id="webSpan"
            className="text-secondAccent md:text-[48px] lg:text-[68px]"
          >
            web
          </span>
          .
        </h2>
        <Clock></Clock>
      </div>
    </div>
  );
};

export default Hero;
