import { useState, useEffect } from "react";
import Clock from "../clock/Clock";
const Hero = () => {
  const [show, setShow] = useState(false);
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
    setTimeout(() => {
      setShow(true);
    }, 100);

    const cleanup = () => clearInterval(interval);

    const web: HTMLElement | null = document.querySelector("#webSpan");
    const interval = setInterval(() => {
      if (web) web.style.fontFamily = fonts[fontIndex];
      fontIndex > 4 ? (fontIndex = 0) : (fontIndex += 1);
    }, 300);

    return cleanup;
  }, []);

  return (
    <div>
      <h3 className="text-primary text-lg m-0 p-0 w-full text-center">
        Frontend Developer
      </h3>
      <div
        className={`${
          show ? "w-full opacity-100" : "w-0 opacity-0"
        } h-[1px] w-full m-auto bg-primary mb-8 mt-1 transition-all duration-500`}
      />
      <div className="w-full sm:h-[180px] md:h-[400px] lg:h-[500px] relative overflow-hidden z-50">
        <h1 className="text-[200px] font-accent p-0 m-0 text-primary z-30 leading-[10rem] sm:text-6xl md:text-[150px] lg:text-[200px]">
          Hi. <span className="block m-0 p-0">I'm Jordi.</span>
        </h1>
        <h2 className="font-primary p-0 m-0 text-primary z-30 sm:text-1xl md:text-[50px] lg:text-[70px]">
          I build things for the{" "}
          <span id="webSpan" className="md:text-[48px] lg:text-[68px]">
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
