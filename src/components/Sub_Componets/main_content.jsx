import React from "react";
import { FaDownload } from "react-icons/fa6";
// import ALLButton from "./allButton";
import TextAnimation from "./textanimation";
import SocialMediaLinks from "../Common/SocialMedia";
import resume from "../../assets/Raj Yadav_Resume.pdf";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <div className="xl:w-[48%] lg:w-[50%] md:w-[55%] sm:w-[70%] xs:w-[95%] w-[100%] h-auto flex flex-col sm:justify-center justify-start sm:mt-0 mt-24 md:z-0 z-10">
      <h2 className="xl:text-[3rem] lg:text-[2.2rem] md:text-[2rem] sm:text-[1.8rem] text-[2rem] font-black leading-normal">
        Hello, I&#39;m
      </h2>
      <h1
        className="xl:text-[4rem] lg:text-[3.8rem] md:text-[3.6rem] sm:text-[3.5rem] text-[3rem] font-black leading-normal animate-text bg-gradient-to-r
       from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent"
      >
        Raj Yadav
      </h1>
      <h2 className="flex gap-2 xl:text-[2rem] lg:text-[1.8rem] sm:text-[1.6rem] xs:text-[1.3rem] text-[1.1rem] font-black leading-normal">
        And I&#39;m
        <span className="auto-typing-1 text-[#f8ce96]">
          {/* <TextAnimation /> */}
          {/* Full Stack Developer */}
          <TextAnimation size={"2rem"} />
        </span>
      </h2>
      <p className="xl:text-[1.02rem] lg:text-[0.9rem] sm:text-[0.81rem] text-[0.8rem] mt-2 font-semibold leading-normal">
        I recently completed my B.Tech in ECE from PIEMR, Indore. I am
        passionate about the software industry.
      </p>

      <SocialMediaLinks />

      <button
        className="xl:w-full max-w-fit py-2 xl:px-4 
      px-4 border h-12 text-black lg:text-[1.05rem] text-[1rem] font-bold bg-[#c1ffff] rounded-[50px] mt-5 shadowcon"
      >
        <a
          href={resume}
          target={"_blank"}
          className="flex items-center justify-center gap-3"
        >
          Download
          <FaDownload />
        </a>
      </button>
    </div>
  );
};

export default Content;
