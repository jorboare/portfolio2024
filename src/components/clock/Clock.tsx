import { useState, useEffect } from "react";
// import hoursImg from "../../assets/stained glass window/Hours.png";
// import minutesImg from "../../assets/stained glass window/Minutes.png";
// import millisecondsImg from "../../assets/stained glass window/Milliseconds.png";
// import secondsImg from "../../assets/stained glass window/Seconds.png";
const hoursEquiv = 360 / 12;
const minEquiv = 360 / 60;
const secEquiv = 360 / 60;
const milEquiv = 360 / 1000;

const Clock = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setHours(date.getHours());
      setMinutes(date.getMinutes());
      setSeconds(date.getSeconds());
      setMilliseconds(date.getMilliseconds());
    }, 1);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const element: HTMLElement | null = document.querySelector("#hour");
    if (element) element.style.transform = `rotate(${hoursEquiv * hours}deg)`;
  }, [hours]);
  useEffect(() => {
    const element: HTMLElement | null = document.querySelector("#minute");
    if (element) element.style.transform = `rotate(${minEquiv * minutes}deg)`;
  }, [minutes]);
  useEffect(() => {
    const element: HTMLElement | null = document.querySelector("#second");
    if (element) element.style.transform = `rotate(${secEquiv * seconds}deg)`;
  }, [seconds]);
  useEffect(() => {
    const element: HTMLElement | null = document.querySelector("#millisecond");
    if (element)
      element.style.transform = `rotate(${milEquiv * milliseconds}deg)`;
  }, [milliseconds]);
  return (
    // <div className="absolute left-1/2 top-1/2 z-0 flex h-[100%] w-[100%] -translate-x-1/2 -translate-y-1/2 items-center justify-center ">
    //   <div className="h-full w-full">
    //     <div className="absolute left-[50%] top-[50%] z-0 -translate-x-1/2 -translate-y-1/2 rounded-full">
    //       <img
    //         src={hoursImg}
    //         id="hour"
    //         className=" z-0 h-[100%] w-[100%] max-w-none"
    //       ></img>
    //       <div className="absolute left-[50%] top-[50%] z-[15] h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2">
    //         <img
    //           src={minutesImg}
    //           id="minute"
    //           className=" h-[100%] w-[100%] max-w-none"
    //         ></img>
    //       </div>
    //       <div className="absolute left-[50%] top-[50%] z-[20] h-[45%]  w-[45%] -translate-x-1/2 -translate-y-1/2">
    //         <img
    //           src={secondsImg}
    //           id="second"
    //           className=" h-[100%] w-[100%] max-w-none"
    //         ></img>
    //       </div>
    //       <div className="absolute left-[50%] top-[50%] z-[25] -translate-x-1/2 -translate-y-1/2">
    //         <img
    //           id="millisecond"
    //           src={millisecondsImg}
    //           className="h-[50px] w-[50px] max-w-none"
    //         ></img>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="clock absolute right-0 top-0 z-0 flex h-[300px] w-[300px] items-center justify-center opacity-75">
      <div className="h-full w-full">
        <div className="absolute left-[50%] top-[50%] z-10 -translate-x-1/2  -translate-y-1/2">
          <div
            id="hour"
            className=" rounded-full border-primary crop-circle sm:h-[230px] sm:w-[230px]  sm:border md:h-[300px] md:w-[300px] md:border-2"
          ></div>

          <div className="absolute z-[15] -translate-x-1/2 -translate-y-1/2 sm:left-[60%] sm:top-[40%]  md:left-[57%] md:top-[43%]">
            <div
              id="minute"
              className="rounded-full border-primary crop-circle sm:h-[150px] sm:w-[150px]  sm:border md:h-[200px] md:w-[200px] md:border-2"
            ></div>
          </div>
          <div className="absolute left-[65%] top-[35%] z-[20] -translate-x-1/2  -translate-y-1/2">
            <div
              id="second"
              className="h-[100px] w-[100px] rounded-full  border-primary crop-circle sm:border md:border-2"
            ></div>
          </div>
          <div className="absolute left-[70%] top-[30%] z-[25] -translate-x-1/2 -translate-y-1/2">
            <div
              id="millisecond"
              className="h-[50px] w-[50px] rounded-full  border-primary crop-circle-big-gap sm:border md:border-2"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
