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
      <div className="z-40 grid grid-cols-2 grid-rows-4 justify-start sm:gap-0 md:gap-10">
        <div className="relative col-start-1 w-full  sm:col-span-2 md:col-span-1 md:row-span-4 md:pl-24 ">
          <h1 className="font-accent text-primary  sm:text-[50px] md:text-[80px] lg:text-[100px] xl:text-[150px]">
            Contact
          </h1>
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
