import { useState, useEffect } from "react";

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
    <div className="absolute right-0 top-0 w-[300px] h-[300px] flex justify-center items-center opacity-75 z-0">
      <div className="w-[250px] h-[250px]">
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2  z-10">
          <div
            id="hour"
            className=" w-[230px] h-[230px] rounded-full  border-primary sm:border md:border-2 crop-circle"
          ></div>

          <div className="absolute top-[40%] left-[60%] -translate-x-1/2 -translate-y-1/2  z-[15]">
            <div
              id="minute"
              className="w-[150px] h-[150px] rounded-full  border-primary sm:border md:border-2 crop-circle"
            ></div>
          </div>
          <div className="absolute top-[35%] left-[65%] -translate-x-1/2 -translate-y-1/2  z-[20]">
            <div
              id="second"
              className="w-[100px] h-[100px] rounded-full  border-primary sm:border md:border-2 crop-circle"
            ></div>
          </div>
          <div className="absolute top-[30%] left-[70%] -translate-x-1/2 -translate-y-1/2 z-[25]">
            <div
              id="millisecond"
              className="w-[50px] h-[50px] rounded-full  border-primary sm:border md:border-2 crop-circle-big-gap"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
