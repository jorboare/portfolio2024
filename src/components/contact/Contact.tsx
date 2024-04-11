const Contact = () => {
  return (
    <div className="h-[100svh] w-full py-20">
      <h1 className="font-accent text-primary sm:pl-10 sm:text-[100px] md:pl-24 md:text-[200px] lg:text-[300px]">
        <span className="text-secondary">C</span>ontact
      </h1>
      <div className="grid-col-2 grid grid-rows-2 sm:px-10 md:px-24">
        <div className="col-span-2 col-start-1 h-6">
          <label className="text-pr mr-24 font-primary text-3xl text-primary">
            Email
          </label>
          <input
            type="text"
            className="w-full border-b border-primary bg-transparent focus:border-b-2 focus:outline-none"
            placeholder="jane.doe@gmail.com"
          ></input>
        </div>
        <div className="col-span-2 row-start-2">
          <p className="text-pr mb-5 mr-24 p-0 font-primary text-3xl text-primary">
            Message
          </p>
          <textarea
            className=" w-full border border-primary bg-transparent text-primary focus:border-2 focus:outline-none"
            wrap="hard"
            rows={4}
            cols={30}
          />
        </div>
      </div>
      <div className="flex justify-end">
        <button className=" mr-24 mt-5 h-10 w-20 rounded-3xl bg-primary font-primary text-secondaryBg hover:bg-secondaryBg hover:text-primary">
          Let's talk!
        </button>
      </div>
    </div>
  );
};

export default Contact;
