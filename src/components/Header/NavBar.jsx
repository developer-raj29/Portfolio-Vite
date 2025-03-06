import { Box } from "@mui/material";
import React, { useRef, useState } from "react";
import circle from "../../assets/images/circle.svg";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { Links } from "../../config";
import { RxCross1 } from "react-icons/rx";
import { HiMenuAlt3 } from "react-icons/hi";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { linkRef } = useRef(null);

  return (
    <Box
      component={"header"}
      className="relative flex justify-center w-[96%] h-[5.5rem] mx-auto"
    >
      <Box
        component={"nav"}
        className="fixed border border-white flex items-center justify-around gap-[17%] w-11/12 h-20 mt-2 mx-auto z-[9999999] backdrop-blur-md rounded-s-[3rem] rounded-e-[3rem] nav-animation transition-all duration-700"
      >
        <div className="w-[15%]">
          <Link
            ref={linkRef}
            to={"/"}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="relative flex items-center gap-2"
          >
            <img
              src={circle}
              alt=""
              loading="lazy"
              className="xl:w-[30%] sm:w-[28%] w-[20%]"
            />
            <img
              src={logo}
              alt="logo"
              loading="lazy"
              className="absolute w-[31%] rounded-bl-[3rem] rounded-br-[3.2rem] top-[2px] "
            />
            <h2 className="text-[1.8rem] font-bold animate-text bg-gradient-to-br from-blue-600 via-purple-600 to-yellow-400 bg-clip-text text-transparent">
              Raj Yadav
            </h2>
          </Link>
        </div>

        <ul
          className={`${
            isOpen
              ? "lg:hidden flex flex-col items-center bg-gradient-to-br from-gray-500 to-black backdrop-blur-md absolute md:top-[170px] sm:top-[95px] xs:top-[130px] top-[115px] md:py-8 sm:py-6 py-5 md:px-14 sm:px-12 px-11 gap-6 md:right-5 sm:right-2 right-0 border border-[#858484] shadow-2xl shadow-slate-700 rounded-[2rem]"
              : "lg:flex hidden gap-12"
          } lg:flex-row list-none`}
        >
          {Links.map((link) => (
            <li key={link.id}>
              <Link
                ref={linkRef}
                to={link.href}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className="font-semibold text-base hover:text-[#268feb] hover:underline underline-offset-2 transition-all duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="lg:hidden flex items-center"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? <RxCross1 fontSize={33} /> : <HiMenuAlt3 fontSize={33} />}
        </button>
      </Box>
    </Box>
  );
};

export default NavigationBar;
