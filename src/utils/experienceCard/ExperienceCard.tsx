import { useEffect, useState } from "react";
interface CardProps {
  year: string;
  title: string;
  subtitle?: string;
  text: string;
  icon: string | null;
  index: number;
}
const ExperienceCard: React.FC<CardProps> = ({
  year,
  title,
  subtitle,
  text,
  index,
  icon,
}) => {
  const [pos, setPos] = useState<string>((index + 1) % 2 ? "left" : "right");

  useEffect(() => {
    if (window.innerWidth < 768) {
      setPos("right");
    }

    window.addEventListener("resize", () =>
      setPos((index + 1) % 2 ? "left" : "right")
    );
  }, []);
  return (
    <>
      <div
        className={`${
          pos === "right"
            ? "sm:col-start-1 md:col-start-2 sm:col-span-2 md:col-span-1 mr-auto ml-3"
            : "col-start-1 ml-auto mr-3 text-right"
        } row-start-${
          index + 1
        } relative z-40 w-auto p-4 border-[3px] border-secondaryBg rounded-lg bg-opacity-10 bg-white experienceEl verticalRotate`}
      >
        <div
          className={`${
            pos === "right" ? "left-[-15px]" : "right-[-15px]"
          } absolute top-1/2 -translate-y-1/2 w-3 h-[4px] bg-primary ${
            "line" + (index + 1)
          }`}
        ></div>
        <p className="font-accent text-3xl opacity-75">{year}</p>
        <h4
          className={`${
            subtitle ? "opacity-75 text-xl" : "text-3xl"
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
            className="absolute top-1/2 left-[-70px] -translate-y-1/2 w-10 sm:invisible md:visible"
          />
        )}
      </div>
    </>
  );
};

export default ExperienceCard;
