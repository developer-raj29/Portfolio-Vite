import React from "react";
import Typewriter from "typewriter-effect";

const TextAnimation = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Full Stack Developer",
          "Frontend Developer",
          "Junior Developer",
        ],
        autoStart: true,
        loop: true,
        delay: 75,
      }}
    />
  );
};

export default TextAnimation;
