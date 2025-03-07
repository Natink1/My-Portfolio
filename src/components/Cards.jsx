import React from "react";
import Image from "../images/cards.png";

export const Cards = (props) => {
  return (
    <div>
      <div className="hover:shadow-xl hover:shadow-[#FF8303] transition-all duration-300 bg-[#1B1B1B] rounded-lg lg:!w-[380px] h-60 text-center m-10 py-[15px] px-[30px]">
        <img className="place-self-center" src={Image} alt="" />
        <h2 className="text-[#FF8303] leading-8 font-bold text-2xl mt-2">
          {props.title}{" "}
        </h2>
        <p className="text-white pt-4">{props.text} </p>
      </div>
    </div>
  );
};

export default Cards;
