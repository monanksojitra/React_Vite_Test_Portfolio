import React from "react";
import TitelBox from "./TitelBox";
import { DiLinux } from "react-icons/di";
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaJava,
  FaFigma,
  FaCube,
  FaLinux,
} from "react-icons/fa";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const skillsArray = [
    { name: "HTML", icon: <FaHtml5 size={60} /> },
    { name: "CSS", icon: <FaCss3 size={60} /> },
    { name: "JS", icon: <FaJs size={60} /> },
    { name: "React", icon: <FaReact size={60} /> },
    { name: "React Native", icon: <TbBrandReactNative size={60} /> },
    { name: "Tailwind", icon: <SiTailwindcss size={60} /> },
    { name: "Java", icon: <FaJava size={60} /> },
    { name: "Figma", icon: <FaFigma size={60} /> },
    { name: "Base", icon: <FaCube size={60} /> },
    { name: "Linux", icon: <FaLinux size={60} /> },
  ];
  return (
    <div className="my-4">
      <TitelBox titel="Skills" css="text-blue-600 text-lg md:text-2xl" />

      <div className="my-5 py-2 flex overflow-hidden overflow-x-auto space-x-8 md:space-x-12 scroll-smooth no-scrollbar mx-auto w-[95%]">
        {skillsArray.map((item) => (
          <div className="basis-1/3 md:basis-1/5 hover:-translate-y-2 duration-100 ease-in-out ">
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
