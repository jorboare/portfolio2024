const Contact = () => {
  const email = "jordi.b.arevalo@gmail.com";
  const subject = "Hey Jordi! Let's chat";

  const handleMailTo = () => {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  };

  return (
    <div id="contact" className="h-[100svh] w-full pt-20 ">
      <h1 className="font-accent text-primary sm:pl-10 sm:text-[100px] md:pl-24 md:text-[200px] lg:text-[300px]">
        <span className="text-secondary">C</span>ontact
      </h1>
      <div className="flex justify-center">
        <button
          onClick={handleMailTo}
          className=" mb-10 mr-24 mt-5 rounded-2xl border-2 border-primary px-5 py-2 font-primary text-3xl text-primary hover:bg-primary hover:text-secondaryBg"
        >
          Let's talk!
        </button>
      </div>
    </div>
  );
};

export default Contact;
