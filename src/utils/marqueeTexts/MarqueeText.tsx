import { Link } from "react-router-dom";

interface props {
  text: string;
  link: string;
  clickAction?: () => void;
}

const MarqueeText: React.FC<props> = (props) => {
  return (
    <div
      className="marqueeContainer max-h-16 w-full whitespace-nowrap rounded-xl border border-primary text-primary transition-all hover:border-secondAccent hover:bg-primary hover:text-secondAccent sm:mb-5 md:mb-0"
      onClick={props.clickAction && props.clickAction}
    >
      <Link to={props.link} target="_blank">
        <div className="marquee py-2">
          <h1 className="mx-4 text-3xl ">{props.text}</h1>
          <h1 className="mx-4 text-3xl ">{props.text}</h1>
          <h1 className="mx-4 text-3xl ">{props.text}</h1>
          <h1 className="mx-4 text-3xl ">{props.text}</h1>
          <h1 className="mx-4 text-3xl ">{props.text}</h1>
          <h1 className="mx-4 text-3xl ">{props.text}</h1>
          <h1 className="mx-4 text-3xl ">{props.text}</h1>
          <h1 className="mx-4 text-3xl ">{props.text}</h1>
          <h1 className="mx-4 text-3xl ">{props.text}</h1>
          <h1 className="mx-4 text-3xl ">{props.text}</h1>
        </div>
        <div className="marquee py-2">
          <h1 className="mx-4 text-3xl ">{props.text}</h1>
          <h1 className="mx-4 text-3xl ">{props.text}</h1>
          <h1 className="mx-4 text-3xl ">{props.text}</h1>
          <h1 className="mx-4 text-3xl ">{props.text}</h1>
          <h1 className="mx-4 text-3xl ">{props.text}</h1>
          <h1 className="mx-4 text-3xl ">{props.text}</h1>
          <h1 className="mx-4 text-3xl ">{props.text}</h1>
          <h1 className="mx-4 text-3xl ">{props.text}</h1>
          <h1 className="mx-4 text-3xl ">{props.text}</h1>
          <h1 className="mx-4 text-3xl ">{props.text}</h1>
        </div>
      </Link>
    </div>
    // <Link
    //   to={props.link}
    //   target="_blank"
    //   className="block w-[400px] items-center justify-center overflow-hidden rounded-xl border-2 border-primary"
    // >
    //   <div className="marquee m-0 px-4 text-[50px]">
    //     <h1 className="marquee-text m-0 p-0 font-accent leading-[1]">
    //       {props.text}
    //     </h1>
    //     <h1 className="marquee-text m-0 p-0 font-accent leading-[1]">
    //       {props.text}
    //     </h1>
    //     <h1 className="marquee-text m-0 p-0 font-accent leading-[1]">
    //       {props.text}
    //     </h1>
    //   </div>
    // </Link>
  );
};

export default MarqueeText;
