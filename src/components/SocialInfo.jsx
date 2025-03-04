import React from "react";
const SocialInfo = (props) => {
  return (
    <div className="pt-5 lg:!pt-1 text-center">
      <img className="place-self-center w-8 lg:!w-10" src={props.IMG} />
      <h3 className="text-[#F0E3CA] text-base lg:!text-lg pt-2">{props.title}</h3>
      <p className="text-white text-sm lg:!text-base  pt-1">{props.text}</p>
    </div>
  );
};

export default SocialInfo;
