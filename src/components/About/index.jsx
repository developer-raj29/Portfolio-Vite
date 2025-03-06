import React from "react";
import AboutIMG from "../../assets/images/Profile pic.jpg";
import { about } from "../../config";
import AboutHero from "../Sub_Componets/aboutHero";
import AboutContent from "../Sub_Componets/aboutContent";

const About = () => {
  return (
    <section className="w-full lg:h-[40rem] md:h-[64rem] h-[66rem] xl:px-10 sm:px-6 px-0 mx-auto flex items-center">
      {about.map((item, index) => {
        return (
          <>
            <div className="about-page" key={index}>
              <AboutHero image={AboutIMG} id={item.id} />
              <AboutContent
                id={item.id}
                title={item.title}
                heading={item.heading}
                description={item.description}
                email={item.email}
                location={item.location}
                path={"/about"}
              />
            </div>
            {/* </MagicCard> */}
          </>
        );
      })}
    </section>
  );
};

export default About;
