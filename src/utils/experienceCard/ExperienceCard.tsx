import { useEffect, useState } from "react";

interface CardProps {
  year: string;
  title: string;
  subtitle?: string;
  text: string;
  icon: string | null;
  index: number;
}

const ExperienceCard: React.FC<CardProps> = (props) => {
  const { year, title, subtitle, text, index, icon } = props;
  const [pos, setPos] = useState<string>(index % 2 ? "left" : "right");

  useEffect(() => {
    const updatePosition = () => {
      if (window.innerWidth < 760) {
        setPos("right");
      } else {
        setPos(index % 2 ? "left" : "right");
      }
    };

    updatePosition();

    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
    };
  }, [index]);

  return (
    <>
      <div className="mb-2 grid grid-cols-2 grid-rows-1 text-primary sm:gap-3 md:gap-1">
        <div
          className={`${
            pos === "right"
              ? "ml-3 mr-auto sm:col-span-2 sm:col-start-1 md:col-span-1 md:col-start-2"
              : "col-start-1 ml-auto mr-3 text-right"
          } experienceEl relative z-40 w-auto rounded-lg border-[3px] border-secondaryBg bg-white bg-opacity-10 p-4 verticalRotate`}
        >
          <div
            className={`${
              pos === "right" ? "left-[-15px]" : "right-[-15px]"
            } absolute top-1/2 h-[4px] w-3 -translate-y-1/2 bg-primary ${
              "line" + index
            }`}
          ></div>
          <p className="font-accent text-3xl opacity-75">{year}</p>
          <h4
            className={`${
              subtitle ? "text-xl opacity-75" : "text-3xl"
            } font-accent`}
          >
            {title}
          </h4>
          {subtitle && (
            <h4
              className={`${
                subtitle ? "visible" : "hidden"
              } font-accent text-3xl`}
            >
              {subtitle}
            </h4>
          )}
          <p className="text-lg opacity-90">{text}</p>
          {icon && (
            <img
              src={icon}
              alt="Airplane Icon"
              className="absolute left-[-70px] top-1/2 w-10 -translate-y-1/2 sm:invisible md:visible"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ExperienceCard;
