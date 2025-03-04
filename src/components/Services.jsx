import React from "react";
import { motion } from "framer-motion";
import Cards from "./Cards";

const Services = () => {
  const ServiceData = [
    {
      title: "Graphics",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore ",
    },
    {
      title: "Maintainance",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore ",
    },
    {
      title: "Support",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore ",
    },
    {
      title: "Graphics",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore ",
    },
    {
      title: "Maintainance",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore ",
    },
    {
      title: "Support",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore ",
    },
  ];

  return (
    <div id="Services" className="transition-all ease-linear duration-700">
      <div>
        <h1 className="text-center text-white font-bold text-6xl pt-10">
          Services
        </h1>
        <p className="text-center text-white leading-10 pt-5 ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore{" "}
        </p>
      </div>
      <div className="gap-y-2 pt-1 grid">
        <div className="grid grid-cols-1 place-self-center sm:!grid-cols-1 lg:!grid-cols-3">
          {ServiceData.map((Services, index) => (
            <div key={index}>
              <Cards title={Services.title} text={Services.text} />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Services;
