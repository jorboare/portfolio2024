const Contact = () => {
  const email = "jordi.b.arevalo@gmail.com";
  const subject = "Hey Jordi! Let's chat";

  const handleMailTo = () => {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  };

  return (
    <div id="contact" className="section h-[100svh] w-full pt-20">
      <h1 className="font-accent text-primary sm:pl-10 sm:text-[100px] md:pl-24 md:text-[150px]">
        Contact
      </h1>
      <div className="flex justify-start">
        <button
          onClick={handleMailTo}
          className=" hover:text-back mb-10 ml-24 mt-5 rounded-2xl border-2 border-primary px-5 py-2 font-primary text-3xl text-primary hover:bg-primary"
        >
          Let's talk!
        </button>
      </div>
    </div>
  );
};

export default Contact;
