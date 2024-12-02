import React, { useState,useContext } from "react";
import logo from "../assets/logo.png";
import profilPic from "../assets/raj.jpg";
import myContext from "./Context Store/MyContext";
function Header({ isLoginPage}) {
  const [toggle, setToggle] = useState(false);
 const { state} = useContext(myContext);
  return (
    <header
      className="w-full h-[60px] bg-[#090b13] flex justify-between items-center px-12
      max-sm:relative max-sm:px-5"
    >
      {/* Left Section */}
      <div className="flex justify-between h-full w-[65%] items-center">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-[70%] w-30" />

        {/* Navigation Items */}
        {isLoginPage ? null : (
          <>
            {/* For larger screens, nav is always visible */}
            <nav className="hidden max-sm:hidden sm:flex">
              <ul className="flex h-full gap-12 text-white p-2 font-bold text-sm">
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-house"></i>
                  <h1>Home</h1>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-search"></i>
                  <h1>Search</h1>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-plus"></i>
                  <h1>Watchlist</h1>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-star"></i>
                  <h1>Rated</h1>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-brands fa-rebel"></i>
                  <h1>Original</h1>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-radio"></i>
                  <h1>Series</h1>
                </li>
              </ul>
            </nav>

            {/* For smaller screens, nav visibility depends on toggle */}
            <nav
              className={`max-sm:absolute max-sm:z-10 max-sm:bg-[#090b13] max-sm:h-fit max-sm:w-fit 
              max-sm:top-[65px] max-sm:px-8 max-sm:rounded-xl max-sm:right-[20px] max-sm:py-5 
              ${toggle ? "block" : "hidden"}`}
            >
              <ul className="flex flex-col gap-4 text-white font-bold text-sm">
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-house"></i>
                  <h1>Home</h1>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-search"></i>
                  <h1>Search</h1>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-plus"></i>
                  <h1>Watchlist</h1>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-star"></i>
                  <h1>Rated</h1>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-brands fa-rebel"></i>
                  <h1>Original</h1>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-radio"></i>
                  <h1>Series</h1>
                </li>
              </ul>
            </nav>
          </>
        )}
      </div>

      {/* Right Section */}
      {isLoginPage ? (
        <button className="bg-white text-black px-4 py-2 rounded-lg tracking-widest text-sm">
          LOGIN
        </button>
      ) : (
        <div className="flex items-center gap-4">
          {/* Toggle Button for smaller screens */}
          <div
            className="text-white text-xl max-sm:block hidden"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <i className="fa-solid fa-x"></i> : <i className="fa-solid fa-bars"></i>}
          </div>

          {/* Profile Picture */}
          <img src={state.ProfPic || profilPic} alt="Profile" className="w-10 h-10 rounded-full" />
        </div>
      )}
    </header>
  );
}

export default Header;
