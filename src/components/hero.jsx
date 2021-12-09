import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Hero = ({ description, title, extra }) => {
  return (
    <div className="relative">
      <StaticImage
        src="../images/hero.png"
        alt="hero image"
        className="w-full "
        height="430"
      />
      <div className="absolute text-white items-center text-xs md:text-lg bottom-2 left-8 md:bottom-44 md:left-20 md:w-3/5">
        <h3 className="md:text-4xl text-2xl">{title}</h3>
        <h3 className="md:text-4xl text-2xl">{extra}</h3>
        <p className="text-md pt-2">{description}</p>
      </div>
    </div>
  );
};

export default Hero;
