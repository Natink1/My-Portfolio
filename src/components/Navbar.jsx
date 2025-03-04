import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div>
      <div className="hidden container mx-auto lg:!flex justify-between items-center py-6">
        <div className="text-xl pl-25 font-bold flex items-center gap-1">
          <span className="text-orange-400">Portfolio</span>
        </div>
        <div>
          <ul className="md:!flex items-center space-x-6 lg:!text-lg md:!text-base text-white">
            <Link
              to="/"
              smooth={true}
              duration={800}
              className="cursor-pointer text-xl hover:text-orange-400 hover:scale-105 transition-all duration-150 ease-linear"
            >
              Home
            </Link>
            <Link
              to="Services"
              smooth={true}
              duration={800}
              className=" cursor-pointer text-xl hover:text-orange-400 hover:scale-105 transition-all duration-150 ease-linear "
            >
              Services
            </Link>
            <Link
              to="Aboutme"
              smooth={true}
              duration={800}
              className=" cursor-pointer text-xl hover:text-orange-400 hover:scale-105 transition-all duration-150 ease-linear "
            >
              About Me
            </Link>
            <Link
              to="My_Skills"
              smooth={true}
              duration={800}
              className=" cursor-pointer text-xl hover:text-orange-400 hover:scale-105 transition-all duration-150 ease-linear "
            >
              My Skills
            </Link>
            <Link
              to="Works"
              smooth={true}
              duration={800}
              className=" cursor-pointer text-xl hover:text-orange-400 hover:scale-105 transition-all duration-150 ease-linear "
            >
              Works
            </Link>
            <Link
              to="Contactme"
              smooth={true}
              duration={800}
              className=" cursor-pointer text-xl hover:text-orange-400 hover:scale-105 transition-all duration-150 ease-linear "
            >
              Contact Me
            </Link>
          </ul>
        </div>
        <span></span>
      </div>

   
      <div className="lg:!hidden flex justify-between items-center py-4 px-6 bg-gray-800">
        <div className="text-xl font-bold flex items-center gap-1 text-orange-400">
          Portfolio
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-2xl text-white"
        >
          {isMobileMenuOpen ? <IoMdClose /> : <CiMenuBurger />}
        </button>
      </div>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden bg-gray-900 text-white py-4 px-6"
        >
          <ul className="space-y-4 text-center">
            <Link
              to="/"
              smooth={true}
              duration={800}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-lg hover:text-orange-400 hover:scale-105 transition-all duration-150 ease-linear"
            >
              Home
            </Link>
            <Link
              to="Services"
              smooth={true}
              duration={800}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-lg hover:text-orange-400 hover:scale-105 transition-all duration-150 ease-linear"
            >
              Services
            </Link>
            <Link
              to="Aboutme"
              smooth={true}
              duration={800}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-lg hover:text-orange-400 hover:scale-105 transition-all duration-150 ease-linear"
            >
              About Me
            </Link>
            <Link
              to="My_Skills"
              smooth={true}
              duration={800}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-lg hover:text-orange-400 hover:scale-105 transition-all duration-150 ease-linear"
            >
              My Skills
            </Link>
            <Link
              to="Works"
              smooth={true}
              duration={800}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-lg hover:text-orange-400 hover:scale-105 transition-all duration-150 ease-linear"
            >
              Works
            </Link>
            <Link
              to="Contactme"
              smooth={true}
              duration={800}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-lg hover:text-orange-400 hover:scale-105 transition-all duration-150 ease-linear"
            >
              Contact Me
            </Link>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;