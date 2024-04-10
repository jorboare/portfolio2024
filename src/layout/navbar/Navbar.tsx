import { useState, useEffect, useRef } from "react";
import { getMaxScroll, hasScrolledToPixel } from "../../utils/scrollUtils";
//@ts-ignore
import { Link } from "react-scroll";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobile, setMobile] = useState(window.innerWidth < 760);
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

  return (
    <>
      <div
        ref={navBarRef}
        className={`${
          mobile
            ? "fixed top-5 right-4 "
            : isSticky
            ? "fixed top-0 left-1/2 -translate-x-1/2 py-2 bg-custom mt-2 rounded-3xl border-b-0"
            : "absolute sm:top-[357px] md:top-[537px] lg:top-[650px] border-b left-1/2 -translate-x-1/2 py-3"
        } border-primary md:w-[80%] lg:w-[80%] transition-noTransform z-50`}
      >
        {mobile ? (
          <div className="w-6 h-[2px] bg-primary  after:absolute after:top-[5px] after:w-6 after:h-[2px] after:bg-primary before:absolute before:-top-[5px] before:w-6 before:h-[2px] before:bg-primary cursor-pointer" />
        ) : (
          <ul className="flex gap-2 justify-center text-primary">
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
    </>
  );
};

export default Navbar;
