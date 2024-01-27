import React from "react";
import coding from "../assets/coding.jpg";
const Hero = () => {
  return (
    <div
      className="bg-[#F0F0F5] min-h-[200px] h-[35vh] my-4 px-5 sm:h-[40vw] rounded-2xl flex items-center justify-start  object-fill bg-center bg-cover bg-no-repeat "
      style={{ backgroundImage: `url(${coding})` }}
    >
      <section className="sm:px-3 space-y-3 md:space-y-5 slide-left">
        <p className="text-2xl sm:text-[5vw]  font-bold text-white text-start md:tracking-tight sm:leading-[5vw] text-nowrap">
          Hello, <br />I am{" "}
          <span className="text-yellow-400 text-nowrap">Monank Sojitra.</span>
        </p>
        <p className="text-base sm:text-[2vw] text-[#696969] font-semibold md:my-2">
          Web Designer/Developer
        </p>
        <div className="flex gap-4 my-3  text-white">
          <p className="flex items-center justify-center px-2 py-1 md:py-3 md:px-7 rounded-md bg-[#5E3AEE] shadow-2xl shadow-slate-600 duration-200 ease-in-out hover:ring-2 ring-slate-500 hover:-translate-y-2">
            <a href="#contact">Contact</a>
          </p>
          <p className="flex items-center justify-center px-2 py-1 md:py-3 md:px-7 rounded-md text-black bg-white shadow-2xl shadow-slate-600 duration-200 ease-in-out hover:ring-2 ring-slate-500 hover:-translate-y-2">
            Projects
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
