import { useEffect } from "react";
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const Background = () => {
  useEffect(() => {
    const fatherEl = document.getElementById("bg-father");

    array.forEach((e) => {
      const calculation = 90 - e * 5;
      const calculationOp = 90 - e * 10;
      const calculationDelay = 100 + e * 100;

      setTimeout(() => {
        const newEl = document.createElement("div");
        fatherEl?.appendChild(newEl);
        newEl.classList.add(
          "absolute",
          "left-1/2",
          "top-1/2",
          "-translate-x-1/2",
          "-translate-y-1/2",
          "border-2",
          "border-secondAccent",
          `delay-[${calculationDelay}ms]`,
        );
        newEl.classList.add(
          `h-[${calculation}%]`,
          `w-[${calculation}%]`,
          `opacity-${calculationOp}`,
        );
      }, calculationDelay);
    });
  }, []);

  return (
    <div
      id="bg-father"
      className="delay absolute left-1/2 top-1/2 h-[100%] w-[100%] -translate-x-1/2 -translate-y-1/2"
    >
      {/* <div
        className={`absolute left-1/2 top-1/2 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 border-2 border-secondAccent opacity-90`}
      ></div>
      <div
        className={`absolute left-1/2 top-1/2 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 border-2 border-secondAccent opacity-80`}
      ></div>
      <div
        className={`absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 border-2 border-secondAccent opacity-70`}
      ></div>
      <div
        className={`absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 border-2 border-secondAccent opacity-60`}
      ></div>
      <div
        className={`absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 border-2 border-secondAccent opacity-50`}
      ></div>
      <div
        className={`absolute left-1/2 top-1/2 h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 border-2 border-secondAccent opacity-40`}
      ></div>
      <div
        className={`absolute left-1/2 top-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 border-2 border-secondAccent opacity-30`}
      ></div>
      <div
        className={`absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 border-2 border-secondAccent opacity-20`}
      ></div>
      <div
        className={`absolute left-1/2 top-1/2 h-[50%] w-[50%] -translate-x-1/2 -translate-y-1/2 border-2 border-secondAccent opacity-10`}
      ></div>
      <div
        className={`absolute left-1/2 top-1/2 h-[45%] w-[45%] -translate-x-1/2 -translate-y-1/2 border-2 border-secondAccent opacity-5`}
      ></div> */}
    </div>
  );
};

export default Background;
