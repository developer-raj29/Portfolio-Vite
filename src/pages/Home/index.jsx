import React, { lazy, Suspense } from "react";
const StarsCanvas = lazy(() => import("../../components/Common/StarBaground"));
import { Box } from "@mui/material";
import HomeComponent from "../../components/Main";
import About from "../../components/About";
import Education from "../../components/Education";
import Experience from "../../components/Experience";
import Skills from "../../components/Skills";

const Home = () => {
  return (
    <Box className="flex flex-col gap-12 w-11/12 z-0 mt-4 mx-auto">
      <Box className="w-full h-[40rem] mt-[4rem] relative mx-auto">
        <HomeComponent />
      </Box>
      <Suspense fallback={<div>Loading Stars...</div>}>
        <StarsCanvas />
      </Suspense>
      <About />
      <Education />
      <Skills />
      <Experience />
    </Box>
  );
};

export default Home;
