import react from "../../assets/technologies/React-icon.svg.png";
import angular from "../../assets/technologies/angular.png";
import node from "../../assets/technologies/node-js-icon-454x512-nztofx17.png";
import html from "../../assets/technologies/html.png";
import css from "../../assets/technologies/css.png";
import git from "../../assets/technologies/git.png";
import aws from "../../assets/technologies/aws.png";
import sass from "../../assets/technologies/sass.png";
import teamcity from "../../assets/technologies/teamcity_logo_icon_249439.png";
import jenkins from "../../assets/technologies/jenkins-icon-1481x2048-3mznivrr.png";
import tailwind from "../../assets/technologies/tailwind.png";
import liquibase from "../../assets/technologies/liquibase_logo_icon_247825.png";

const Technologies = () => {
  return (
    <>
      <div className="marqueeContainer technologiesContainer mx-auto max-h-24 w-full max-w-[1120px] overflow-hidden whitespace-nowrap text-sm uppercase text-primary">
        <div className="marquee min-w-[1120px] py-2 text-center">
          <div className=" mx-4 inline-block">
            <img src={react} className="technologyImg mx-auto mb-2 block"></img>
            <p className=" block text-center">React</p>
          </div>
          <div className="mx-4 inline-block">
            <img
              src={angular}
              className="technologyImg mx-auto mb-2 block"
            ></img>
            <p className=" block text-center ">Angular</p>
          </div>
          <div className=" mx-4 inline-block">
            <img src={node} className="technologyImg mx-auto mb-2 block"></img>
            <p className=" block text-center ">NodeJS</p>
          </div>
          <div className="mx-4 inline-block">
            <img src={html} className="technologyImg mx-auto mb-2 block"></img>
            <p className=" block text-center ">HTML</p>
          </div>
          <div className="mx-4 inline-block">
            <img src={css} className="technologyImg mx-auto mb-2 block"></img>
            <p className=" block text-center ">CSS</p>
          </div>
          <div className="mx-4 inline-block">
            <img src={sass} className="technologyImg mx-auto mb-2 block"></img>
            <p className=" block text-center ">sass</p>
          </div>
          <div className="mx-4 inline-block">
            <img
              src={tailwind}
              className="technologyImg mx-auto mb-2 block"
            ></img>
            <p className=" block text-center ">tailwind</p>
          </div>
          <div className="mx-4 inline-block">
            <img src={git} className="technologyImg mx-auto mb-2 block"></img>
            <p className=" block text-center ">git</p>
          </div>
          <div className="mx-4 inline-block">
            <img
              src={aws}
              className="technologyImg mx-auto mb-2 block max-w-[50px] object-contain"
            ></img>
            <p className=" block text-center ">aws</p>
          </div>
          <div className="mx-4 inline-block">
            <img
              src={teamcity}
              className="technologyImg mx-auto mb-2 block"
            ></img>
            <p className=" block text-center ">teamcity</p>
          </div>
          <div className="mx-4 inline-block">
            <img
              src={jenkins}
              className="technologyImg mx-auto mb-2 block"
            ></img>
            <p className=" block text-center ">jenkins</p>
          </div>
          <div className="mx-4 inline-block ">
            <img
              src={liquibase}
              className="technologyImg mx-auto mb-2 block"
            ></img>
            <p className=" block ">liquibase</p>
          </div>
        </div>
        <div className="marquee min-w-[1150px] py-2">
          <div className=" mx-4 inline-block">
            <img src={react} className="technologyImg mx-auto mb-2 block"></img>
            <p className=" block text-center ">React</p>
          </div>
          <div className="mx-4 inline-block">
            <img
              src={angular}
              className="technologyImg mx-auto mb-2 block"
            ></img>
            <p className=" block text-center ">Angular</p>
          </div>
          <div className=" mx-4 inline-block">
            <img src={node} className="technologyImg mx-auto mb-2 block"></img>
            <p className=" block text-center ">NodeJS</p>
          </div>
          <div className="mx-4 inline-block">
            <img src={html} className="technologyImg mx-auto mb-2 block"></img>
            <p className=" block text-center ">HTML</p>
          </div>
          <div className="mx-4 inline-block">
            <img src={css} className="technologyImg mx-auto mb-2 block"></img>
            <p className=" block text-center ">CSS</p>
          </div>
          <div className="mx-4 inline-block">
            <img src={sass} className="technologyImg mx-auto mb-2 block"></img>
            <p className=" block text-center ">sass</p>
          </div>
          <div className="mx-4 inline-block">
            <img
              src={tailwind}
              className="technologyImg mx-auto mb-2 block"
            ></img>
            <p className=" block text-center ">tailwind</p>
          </div>
          <div className="mx-4 inline-block">
            <img src={git} className="technologyImg mx-auto mb-2 block"></img>
            <p className=" block text-center ">git</p>
          </div>
          <div className="mx-4 inline-block">
            <img
              src={aws}
              className="technologyImg mx-auto mb-2 block max-w-[50px] object-contain"
            ></img>
            <p className=" block text-center ">aws</p>
          </div>
          <div className="mx-4 inline-block">
            <img
              src={teamcity}
              className="technologyImg mx-auto mb-2 block"
            ></img>
            <p className=" block text-center ">teamcity</p>
          </div>
          <div className="mx-4 inline-block">
            <img
              src={jenkins}
              className="technologyImg mx-auto mb-2 block"
            ></img>
            <p className=" block text-center ">jenkins</p>
          </div>
          <div className="mx-4 inline-block ">
            <img
              src={liquibase}
              className="technologyImg mx-auto mb-2 block"
            ></img>
            <p className=" block text-center ">liquibase</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technologies;
