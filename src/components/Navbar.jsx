import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

import { AiOutlineMenuUnfold } from "react-icons/ai";
const Navbar = () => {

  const list = [
    { path: "/", Title: "home" },
    { path: "/services", Title: "services" },
    { path: "/features", Title: "features" },
    { path: "/pricing", Title: "pricing" },
    { path: "/team", Title: "team" },
    { path: "/blog", Title: "blog" },
    { path: "/contact", Title: "contact" },
  ];
  const [scrl, setScrl] = useState(false);
  const scrlfunc = () => {
    if (window.scrollY >= 1) {
      setScrl(true);
    } else {
      setScrl(false);
    }
  };
  window.addEventListener("scroll", scrlfunc);
  const [value, setValue] = useState(false)
  const changeValue = () => {
    setValue(!value)
  }
  return (
    <>
      <div
        className={
          scrl
            ? "fixed bg-[rgba(0,0,0,0.6)] w-full duration-500"
            : "fixed bg-transparent w-full z-10 duration-300"
        }
      >
        <div className="flex relative items-center justify-between lg:max-w-[80%] md:max-w-[95%] mx-auto bg-transparent p-4">
          <div className="logo text-white font-semibold text-2xl">
            <Link to={"/"}>YAARI</Link>
          </div>
          <div className="menu">
            <ul
              className={`absolute top-0 left-[-100%] ${
                value && "left-[0]"
              } duration-300 h-screen w-full flex flex-col items-center justify-center bg-[rgba(32,30,30,0.98)] gap-2 -z-10 md:gap-7 md:flex-row md:h-auto md:sticky md:justify-end md:z-10 md:bg-transparent text-white capitalize font-semibold`}
            >
              {list.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="py-2 cursor-pointer relative group"
                  >
                    <Link to={item.path}>{item.Title}</Link>
                    <span className="absolute bottom-0 left-0 h-[2px] w-0 duration-300  group-hover:w-full bg-gray-400"></span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div
            className="icon cursor-pointer md:hidden text-white"
            onClick={changeValue}
          >
            {value ? <RxCross2 size={30} /> : <AiOutlineMenuUnfold size={30} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
