import React, { useEffect, useState } from "react";
import { FaSun } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { GiTakeMyMoney } from "react-icons/gi";
import { VscDebugRestart } from "react-icons/vsc";

const TopBar = () => {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={`h-[60px] px-5 md:px-7 flex justify-between items-center`}>
      <div className="absolute select-none left-[calc(50%-41px)] z-10">
        <div className="relative w-20 bg-slate-300 dark:bg-slate-800 group rounded-full flex items-center cursor-pointer">
          <div
            className="w-1/2 h-full p-2 z-10"
            onClick={() => {
              document.querySelector("meta[name='theme-color']").content =
                "#FFFFFF";
              setDarkMode(false);
            }}
          >
            <FaSun size={20} />
          </div>

          <div
            className="w-1/2 h-full p-2 z-10"
            onClick={() => {
              document.querySelector("meta[name='theme-color']").content =
                "#0D1117";
              setDarkMode(true);
            }}
          >
            <BsFillMoonStarsFill size={20} className="float-right" />
          </div>
          <div
            className={`bg-slate-200 dark:bg-[#171d25] p-4 rounded-full shadow-inner
           transform-gpu transition-transform duration-300 ease-in-out absolute left-[2px] ${darkMode ? "translate-x-[44px] shadow-[#fcfcfc33]" : ""
              }`}
          ></div>
        </div>
      </div>
      <div className="absolute left-0 sm:left-[calc(50%-260px)] top-[12px] flex place-items-center cursor-pointer active:scale-150 duration-300
      rounded-lg text-white font-extrabold w-fit
      bg-gradient-to-b from-sky-400 to-blue-800"
        onClick={() => {
          document.getElementById("userMoney").innerHTML = '១០០០៛'
        }}>
        <VscDebugRestart size={35} className="p-1" />
        <p className="max-[300px]:hidden rounded-r-[7px] min-w-[65px] text-center p-[6px] bg-[#95c2ee] text-black font-extralight font-moul">លេងម្តងទៀត</p>
      </div>
      <div className="absolute right-7 max-[400px]:right-0 sm:right-[calc(50%-190px)] top-[12px] flex place-items-center
      rounded-lg text-white font-extrabold w-fit
      bg-gradient-to-b from-sky-400 to-blue-800">
        <GiTakeMyMoney size={35} className="p-1" />
        <p id="userMoney" className="rounded-r-[7px] min-w-[65px] text-center p-[6px] font-moul bg-[#95c2ee] text-black">១០០០៛</p>
      </div>
    </div>
  )
}

export default TopBar