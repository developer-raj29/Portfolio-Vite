import { Box } from "@mui/material";
import React from "react";
import Content from "../Sub_Componets/main_content";
import Hero from "../Sub_Componets/main_hero";

const Main = () => {
  return (
    <Box
      component={"section"}
      className="w-[90%] mx-auto relative flex justify-between"
    >
      {/* <StarsCanvas /> */}
      <Content />
      <Hero />
    </Box>
  );
};

export default Main;
