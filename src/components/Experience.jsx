import React from "react";

const Experience = () => {
  return (
    <div id="Experience" className="lg:!px-28 flex flex-col justify-center">
      <div>
        <h1 className="text-center text-white font-bold text-4xl lg:!text-6xl pt-10">
          Experience
        </h1>
        <p className="text-center text-white pt-5 p-5 ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
      </div>

      <div className="flex flex-col items-center lg:!flex-row lg:!justify-between lg:!px-30 lg:!py-20 py-2">
        <div className="mb-6">
          <h1 className="text-center text-white font-bold text-2xl lg:!text-5xl pt-10">
            Droga Pharma PLC
          </h1>
          <p className="text-[#FF8303]"> July 2022 - July 2024</p>
        </div>
        <div className="w-6/12 pt-8">
          <h1 className="text-white text-2xl lg:!text-4xl font-bold">
            Information Technology Officer
          </h1>
          <p className="text-[#FF8303]">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
            nunc, posuere in justo vulputate, bibendum sodales{" "}
          </p>
        </div>
      </div>

      <hr className="hidden lg:!flex text-white place-self-center w-full"></hr>

      <div className="flex flex-col items-center lg:!flex-row lg:!justify-between lg:!px-30 lg:!py-20">
        <div className="mb-6">
          <h1 className="text-center text-white font-bold text-2xl lg:!text-5xl pt-10">
            Droga Consulting PLC
          </h1>
          <p className="text-[#FF8303]"> July 2022 - July 2024</p>
        </div>
        <div className="w-6/12  ">
          <h1 className="text-white text-2xl lg:!text-4xl font-bold ">
            Technical Support Representative
          </h1>
          <p className="text-[#FF8303]">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
            nunc, posuere in justo vulputate, bibendum sodales{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
