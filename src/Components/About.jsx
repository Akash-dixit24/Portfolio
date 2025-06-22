import React from "react";
import AboutImg from "../Assets/about-img.webp";
import AboutWorking from "../Assets/about-working.png";
import roundText from "../Assets/round-text.png";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col justify-center py-28 gap-8 mx-12 xl:flex-row lg:justify-start lg:mt-[8rem] xl:gap-[6rem] xl:mx-60 z-0"
    >
      {/* Left Container */}
      <div className="flex justify-center relative">
        <div className="h-[22rem] relative">
          <img
            src={AboutImg}
            alt="About"
            className="rounded-2xl h-full w-full object-cover"
          />
        </div>

        {/* Decorative Elements (only on XL and above) */}
        <div className="invisible xl:visible">
          {/* Background Circle */}
          <div className="absolute bg-white dark:bg-[#2D2E32] rounded-full h-[11rem] w-[11rem] right-[-5rem] top-52"></div>

          {/* Overlay Icon */}
          <div className="absolute w-[5rem] h-[5rem] right-[-2rem] top-60 z-20">
            <img src={AboutWorking} alt="Working" />
          </div>

          {/* Spinning Icon */}
          <div className="absolute w-[11rem] h-[11rem] right-[-5rem] top-[12.8rem] z-10">
            <img
              src={roundText}
              alt="Round Text"
              className="animate-animationRotate"
            />
          </div>
        </div>
      </div>

      {/* Right Container */}
      <div className="flex flex-col flex-auto items-center xl:items-start">
        <p className="text-center xl:text-left text-[#147EFB] dark:text-[#38bdf8] text-[1.1rem] uppercase font-[750] leading-4">
          About Me
        </p>

        <p className="text-center xl:text-left mt-[1rem] text-[#2D2E32] dark:text-white text-[1.6rem] leading-[2.2rem] font-bold">
          A dedicated Full Stack Developer based in New Delhi, India 📍
        </p>

        <p className="text-center xl:text-left max-w-[40rem] mt-[1rem] text-[1.01rem] leading-[1.6rem] text-[#767676] dark:text-gray-400">
          A skilled full stack developer with strong expertise in creating exceptional web applications and stunning user interfaces. With a comprehensive understanding of both front-end and back-end development, I seamlessly integrate design and functionality to deliver user-friendly, high-performance web solutions. Passionate about leveraging the latest technologies and best practices, I ensure that every project not only meets but exceeds client expectations.
        </p>
      </div>
    </div>
  );
};

export default About;

