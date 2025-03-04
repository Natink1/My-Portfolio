import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="py-20 px-6 md:px-20 flex flex-col md:!flex-col lg:!flex-row justify-between items-center">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
        }}
        className="pt-10 md:pt-0 w-50 md:w-1/2"
      >
        <h1 className="text-[#FF8303] sm:text-4xl md:text-6xl font-bold">
          Hi, I am Natnael Deribe
        </h1>
        <h2 className="text-white leading-15 text-2xl md:text-3xl">
          IT Support Specialist & Motion Graphics Designer
        </h2>
        <button className=" mt-10 bg-[#FF8303] text-white w-32 h-10 rounded-lg transition-all duration-300 hover:border border-[#FF8303] hover:bg-transparent hover:drop-shadow-[0_0_3px_rgba(255,145,1,1)]">
          Email Me
        </button>
      </motion.div>
      <div>
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.7,
          }}
          src="/src/images/Image.png"
          className="mx-auto w-[400px] opacity-30 transition-all ease-linear duration-300 hover:opacity-100 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Hero;
