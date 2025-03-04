import React from "react";
import after from "../images/after-effects.png";
import chart from "../images/character-animator.png";
import css from "../images/css3.png";
import html from "../images/html.png";
import illust from "../images/illustrator.png";
import javascript from "../images/java-script.png";
import photoshop from "../images/photoshop.png";
import php from "../images/php.png";
import postg from "../images/postgre.png";
import premier from "../images/premiere-pro.png";

const Skills = () => {
  const skillImg = [
    {
      img: html,
      title: "HTML",
    },
    {
      img: css,
      title: "CSS",
    },
    {
      img: javascript,
      title: "Javascript",
    },
    {
      img: php,
      title: "PHP",
    },
    {
      img: postg,
      title: "PostgreSQL",
    },
    {
      img: premier,
      title: "Premiere Pro",
    },
    {
      img: chart,
      title: "Char Animator",
    },
    {
      img: after,
      title: "After Effects",
    },
    {
      img: illust,
      title: "Illustrator",
    },
    {
      img: photoshop,
      title: "Photoshop",
    },
  ];

  return (
    <div id="My_Skills">
      <div>
        <h1 className="text-center text-white font-bold text-4xl lg:!text-6xl pt-10">
          Skills
        </h1>
        <p className="text-center text-white px-28 pt-5 ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut{" "}
        </p>
      </div>

      <div className="px-20 lg:!px-64 py-8 ">
        <div className="bg-[#212121] rounded-3xl h-150 grid grid-cols-2 lg:!grid-cols-5 justify-between p-5 ">
          {skillImg.map((Skills, index) => (
            <div
              key={index}
              className="py-2 lg:!py-10 place-self-center place-items-center"
            >
              <img
                className="w-10 lg:!w-24 hover:scale-110 transition-all duration-150"
                src={Skills.img}
              ></img>
              <h1 className="pt-2 lg:!pt-5 text-white text-sm lg:!text-xl text-center">
                {Skills.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
