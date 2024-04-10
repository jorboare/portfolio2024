import { useState, useEffect, useRef } from "react";
import { getMaxScroll, hasScrolledToPixel } from "../../utils/scrollUtils";
//@ts-ignore
import { Link } from "react-scroll";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobile, setMobile] = useState(window.innerWidth < 760);
  const [openMenu, setOpenMenu] = useState(false);
  const navBarRef = useRef(null);

  useEffect(() => {
    const checkPosition = () => {
      if (navBarRef.current) {
        //@ts-ignore
        const rect = navBarRef.current.getBoundingClientRect();
        setIsSticky(hasScrolledToPixel(getMaxScroll()));
      }
    };

    window.addEventListener("scroll", checkPosition);
    window.addEventListener("resize", () => setMobile(window.innerWidth < 760));

    checkPosition();
  }, []);

  const handleClick = (state: boolean) => {
    setOpenMenu(state);
  };

  return (
    <>
      <div
        ref={navBarRef}
        className={`${
          mobile
            ? "fixed right-4 top-5 "
            : isSticky
              ? "fixed left-1/2 top-0 mt-2 -translate-x-1/2 rounded-3xl border-b-0 py-2 bg-custom"
              : "absolute left-1/2 -translate-x-1/2 border-b py-3 sm:top-[357px] md:top-[537px] lg:top-[650px]"
        } z-50 border-primary transition-noTransform md:w-[80%] lg:w-[80%]`}
      >
        {mobile ? (
          <div
            className="relative h-10 w-10 cursor-pointer rounded-full bg-custom"
            onClick={() => handleClick(!openMenu)}
          >
            <div className="absolute left-1/2 top-1/2 h-[2px] w-6 -translate-x-1/2 -translate-y-1/2 cursor-pointer  bg-primary before:absolute before:-top-[5px] before:h-[2px] before:w-6 before:bg-primary after:absolute after:top-[5px] after:h-[2px] after:w-6 after:bg-primary" />
          </div>
        ) : (
          <ul className="flex justify-center gap-2 text-primary">
            <li>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer"
              >
                Home
              </Link>
            </li>
            ·
            <li>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer"
              >
                About me
              </Link>
            </li>
            ·
            <li>
              <Link
                activeClass="active"
                to="experience"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer"
              >
                Experience
              </Link>
            </li>
            ·
            <li>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer"
              >
                Projects
              </Link>
            </li>
            ·
            <li>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        )}
      </div>
      {mobile && (
        <div
          className={`${openMenu ? "max-h-[500px] p-5" : "h-0"} fixed left-1/2 top-0 z-[49] w-full -translate-x-1/2 transition-all bg-custom`}
        >
          <ul className="flex flex-col items-center justify-center gap-2 text-primary ">
            <li className="inline">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
                className="cursor-pointer"
                onSetActive={() => handleClick(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
                className="cursor-pointer"
                onSetActive={() => handleClick(false)}
              >
                About me
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="experience"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer"
                onSetActive={() => handleClick(false)}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer"
                onSetActive={() => handleClick(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer"
                onSetActive={() => handleClick(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
