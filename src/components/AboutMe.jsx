import React from "react";
import SocialInfo from "./SocialInfo";
import Email from "../images/email.png";
import Phone from "../images/phone-call.png";
import Twitter from "../images/twitter.png";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div id="Aboutme" className=" flex justify-center flex-col items-center">
      <div className="text-white w-280 text-center pt-10">
        <h1 className="font-bold text-4xl lg:!text-6xl">About Me</h1>

        <p className="pt-10 p-6 lg:!px-28 text-justify text-2xl ">
          {" "}
          I received my diploma in Hardware and Networking from Addis Ababa
          Tegbareid Polytechnic College, where I designed network structures,
          maintained computers, and troubleshot issues. I earned a gold medal
          for developing an entrance security system with my team. I later
          pursued a Bachelor's in Computer Science at Addis Ababa University. I
          have worked as an IT Officer at Droga Pharma PLC for two years and
          currently serve as a Technical Support Representative at Droga
          Consulting P.L.C. (2024 - Present). I excel in troubleshooting
          computer issues and have skills in 3D animation (Blender) and
          graphic/video editing (Adobe After Effects, Premiere Pro, Photoshop,
          Illustrator). I also have basic programming knowledge.
        </p>
      </div>
      <div className="flex lg:!justify-between pb-10 flex-col lg:!flex-row lg:!w-4/12">
        <SocialInfo
          IMG={Email}
          title="Email Address"
          text="Naitnk4825@gmail.com"
        />
        <SocialInfo IMG={Twitter} title="Twitter" text="Naitnk4825@gmail.com" />
        <SocialInfo IMG={Phone} title="Phone" text="+251 924114825" />
      </div>
      <hr className="w-6/12 pb-2 lg:!pb-10"></hr>
    </div>
  );
};

export default AboutMe;
