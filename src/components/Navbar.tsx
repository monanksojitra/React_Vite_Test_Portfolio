import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useContext, useState } from "react";

const Navbar = () => {
  const [show, setshow] = useState(false);
  const avtar = "https://github.com/shadcn.png";

  return (
    <div className="flex px-3 py-2  md:py-4 md:px-8 border-2 border-black rounded-full justify-between items-center ">
      <p className="font-bold text-sm md:text-lg ">&#916; MonankSojitra</p>
      <div className="hidden md:flex">
        <ul className="flex md:gap-4 2xl:gap-10 items-center">
          <li className="text-[8px] md:text-sm  cursor-pointer   hover:outline text-center rounded-3xl  px-2  xl:px-3 py-1 font-bold">
            Home
          </li>
          <li className="text-[8px] md:text-sm  cursor-pointer hover:outline text-center rounded-3xl  px-2 xl:px-3 py-1 font-bold ">
            <a href="#project"> Projects </a>
          </li>
          <li className="text-[8px] md:text-sm  cursor-pointer hover:outline text-center rounded-3xl px-2  xl:px-3 py-1 font-bold ">
            <a href="#about"> About</a>
          </li>
          <li className="text-[8px] md:text-sm  cursor-pointer hover:outline text-center rounded-3xl px-2  xl:px-3 py-1 font-bold ">
            <a href="#about"> Contact</a>
          </li>
        </ul>
      </div>
      <div
        className="cursor-pointer hover:ring-4 max-md:m-1 flex items-center justify-center ring-slate-500 duration-200 rounded-full"
        onClick={() => setshow(!show)}
      >
        <img
          src={avtar}
          className="h-7 md:h-10 xl:h-12 aspect-square rounded-full"
          alt=""
        />
      </div>
      <div
        className={`${
          show ? "" : "hidden"
        } absolute md:hidden bg-[#0F1221] bg-opacity-90 rounded-xl right-6   top-20 min-w-[200px] w-[25vw] z-50`}
      >
        <ul className="text-base text-white flex flex-col items-center justify-center space-y-5 py-5">
          <a href="#project">
            <li className="duration-200 hover:border-b-2">Project's</li>
          </a>
          <a href="#about">
            <li className="duration-200 hover:border-b-2">About</li>
          </a>
          <a href="#contect">
            <li className="duration-200 hover:border-b-2">Contect</li>
          </a>
          <a href="#contect">
            <li className="duration-200 hover:border-b-2">Help</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
