const SelectionCircle = () => {
  return (
    <>
      <div className="circleCont z-[500]">
        <div className="border-secondAccent deformAnimation h-9 w-24 rounded-[50%] border"></div>
      </div>

      <div className="circleCont z-[500]">
        <div className="border-secondAccent circle deformAnimationRev h-9 w-24 rounded-[50%] border"></div>
      </div>
    </>
  );
};

export default SelectionCircle;
