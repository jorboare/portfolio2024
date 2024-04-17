import MarqueeText from "../../utils/marqueeTexts/MarqueeText";

const Contact = () => {
  const email = "jordi.b.arevalo@gmail.com";
  const subject = "Hey Jordi! Let's chat";

  const handleMailTo = () => {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  };

  return (
    <div
      id="contact"
      className="section relative flex h-[100svh] w-full items-center justify-center pt-20 sm:px-5 md:px-20"
    >
      <video
        autoPlay
        muted
        loop
        className="absolute left-0 top-0 h-[100vh] w-full object-cover"
      >
        <source
          src="https://res.cloudinary.com/jordi-ironhack/video/upload/v1713349866/portfolio/Porfolio_video_gugfe5.mp4"
          type="video/mp4"
        />
      </video>
      <div className="z-30 flex w-full max-w-[1000px] grid-cols-2 grid-rows-4 flex-col justify-start sm:gap-0 md:gap-10">
        <div className="relative w-full  sm:col-span-2 md:col-span-1 md:row-span-4 ">
          <div className="dottedRed px-10 pb-10 pt-5 text-primary sm:mb-5 sm:rounded-xl sm:text-[20px] md:mb-0 md:text-[23px] lg:text-[25px]">
            <h1 className="font-accent leading-[1] text-primary  sm:text-[50px] md:text-[80px] lg:text-[100px] xl:text-[130px]">
              Contact
            </h1>
            <p>
              We can talk about{" "}
              <span className="font-accent text-secondAccent sm:text-[23px] md:text-[30px] lg:text-[35px]">
                programming
              </span>
              , but also about{" "}
              <span className="font-accent text-secondAccent sm:text-[23px] md:text-[30px] lg:text-[35px]">
                movies
              </span>
              ,{" "}
              <span className="font-accent text-secondAccent sm:text-[23px] md:text-[30px] lg:text-[35px]">
                music
              </span>{" "}
              and much{" "}
              <span className="font-accent text-secondAccent sm:text-[23px] md:text-[30px] lg:text-[35px]">
                more
              </span>
              .
            </p>
          </div>
        </div>
        <MarqueeText text="Email" link="#" clickAction={handleMailTo} />
        <MarqueeText
          text="Linkedin"
          link="https://www.linkedin.com/in/jordi-boronat-arevalo/"
        />
        <MarqueeText text="Github" link="https://github.com/jorboare" />
        <MarqueeText
          text="Codepen"
          link="https://codepen.io/jorboare/pens/public"
        />
      </div>
    </div>
  );
};

export default Contact;
