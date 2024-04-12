import { useState, useEffect, useRef } from "react";
//@ts-ignore
import { Link } from "react-scroll";
import SelectionCircle from "../../utils/selectionCircle";

interface props {
  reached: boolean;
  whiteBg: boolean;
}

const Navbar: React.FC<props> = (props) => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobile, setMobile] = useState(window.innerWidth < 760);
  const [openMenu, setOpenMenu] = useState(false);
  const [posY, setPosY] = useState(0);
  const navBarRef = useRef(null);
  const [currentSection, setCurrentSection] = useState("hero");
  const [whiteBg, setWhiteBg] = useState(props.whiteBg);

  useEffect(() => {
    setIsSticky(props.reached);
  }, [props.reached]);

  useEffect(() => {
    setWhiteBg(props.whiteBg);
  }, [props.whiteBg]);

  useEffect(() => {
    const heroEl = document
      .getElementById("hero")
      ?.getBoundingClientRect().height;

    window.addEventListener("resize", () => setMobile(window.innerWidth < 760));
    window.onload = () => {
      if (heroEl) {
        setPosY(heroEl + 40);
      }
    };

    window.addEventListener("scroll", handleSections);

    return () => {
      window.removeEventListener("scroll", handleSections);
    };
  }, []);

  const handleClick = (state: boolean) => {
    setOpenMenu(state);
  };
  const handleSections = () => {
    const sections = document.querySelectorAll(".section");
    let currentSection = "hero";

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < 0) {
        currentSection = section.id;
      }
    });

    setCurrentSection(currentSection);
  };

  useEffect(() => {
    console.log(currentSection);
  }, [currentSection]);

  return (
    <>
      <div
        id="navbar"
        ref={navBarRef}
        className={`${
          mobile
            ? "fixed right-4 top-5 "
            : isSticky
              ? "fixed left-1/2 top-0 mt-2 -translate-x-1/2 rounded-3xl border-b-0 py-2 bg-custom"
              : `absolute left-1/2 -translate-x-1/2 border-b py-3 md:top-[${posY}px]`
        } z-[600] border-primary transition-noTransform md:w-[80%] lg:w-[80%]`}
      >
        {mobile ? (
          <div
            className="relative h-10 w-10 cursor-pointer rounded-full bg-custom"
            onClick={() => handleClick(!openMenu)}
          >
            <div className="absolute left-1/2 top-1/2 h-[2px] w-6 -translate-x-1/2 -translate-y-1/2 cursor-pointer  bg-primary before:absolute before:-top-[5px] before:h-[2px] before:w-6 before:bg-primary after:absolute after:top-[5px] after:h-[2px] after:w-6 after:bg-primary" />
          </div>
        ) : (
          <ul
            className={`${whiteBg ? "text-background" : "text-primary"} flex justify-center gap-2 text-primary`}
          >
            <li className="relative">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
                className={`cursor-pointer`}
              >
                Home
              </Link>
              {currentSection === "hero" && <SelectionCircle />}
            </li>
            ·
            <li className="relative">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
                className={` cursor-pointer`}
              >
                About me
              </Link>
              {currentSection === "about" && <SelectionCircle />}
            </li>
            ·
            <li className="relative">
              <Link
                activeClass="active"
                to="experience"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
                className={`cursor-pointer`}
              >
                Experience
              </Link>
              {currentSection === "experience" && <SelectionCircle />}
            </li>
            ·
            <li className="relative">
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
                className={`cursor-pointer`}
              >
                Projects
              </Link>
              {currentSection === "projects" && <SelectionCircle />}
            </li>
            ·
            <li className="relative">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
                className={`cursor-pointer`}
              >
                Contact
              </Link>
              {currentSection === "contact" && <SelectionCircle />}
            </li>
          </ul>
        )}
      </div>
      {mobile && (
        <div
          className={`${openMenu ? "h-[50svh] p-5" : "h-0"} fixed left-1/2 top-0 z-[500]  flex w-full -translate-x-1/2 items-center justify-center transition-all bg-custom`}
        >
          <ul
            className={`${whiteBg ? "text-background" : "text-primary"} flex flex-col items-center justify-center gap-5 font-accent text-xl`}
          >
            <li className="relative z-[600]">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
                className="cursor-pointer"
                onSetActive={() => setOpenMenu(false)}
              >
                Home
              </Link>
              {currentSection === "hero" && <SelectionCircle />}
            </li>
            <li className="relative z-[600]">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
                className="cursor-pointer"
                onSetActive={() => setOpenMenu(false)}
              >
                About me
              </Link>
              {currentSection === "about" && <SelectionCircle />}
            </li>
            <li className="relative z-[600]">
              <Link
                activeClass="active"
                to="experience"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
                className="cursor-pointer"
                onSetActive={() => setOpenMenu(false)}
              >
                Experience
              </Link>
              {currentSection === "experience" && <SelectionCircle />}
            </li>
            <li className="relative z-[600]">
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
                className="cursor-pointer"
                onSetActive={() => setOpenMenu(false)}
              >
                Projects
              </Link>
              {currentSection === "projects" && <SelectionCircle />}
            </li>
            <li className="relative z-[600]">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
                className="cursor-pointer"
                onSetActive={() => setOpenMenu(false)}
              >
                Contact
              </Link>
              {currentSection === "contact" && <SelectionCircle />}
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
