/* eslint-disable react/prop-types */
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import "./styles/navbar.css";
import "./styles/loader.css";

//navItems = [{id: 1, to: "/", title: "Home"}, {id: 2, to: "/about", title: "About"}, {id: 3, to: "/services", title: "Services"}]
export function Navbar({ logo, navItems }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <nav
        className={`w-[90vw] bg-[#4f525770] backdrop-blur-lg font-primary px-4 xl:pr-8 py-2 flex justify-between items-center sticky top-4 mx-auto rounded-[10rem]`}
      >
        <img
          src={logo}
          alt="logo"
          className="w-[3rem] h-[3rem] lg:w-[4rem] lg:h-[4rem] rounded-[50%] border-[0.1px] border-black"
        />
        <div className="flex flex-col gap-4 items-end relative">
          {!menuOpen ? (
            <IoMenu
              onClick={() => toggleMenu()}
              className="text-[1.5rem] text-[#4f5257] gsm:text-[2rem] md:hidden hover:cursor-pointer"
            />
          ) : (
            <RxCross1
              onClick={() => toggleMenu()}
              className="text-[1.5rem] text-[#4f5257] gsm:text-[2rem] md:hidden hover:cursor-pointer"
            />
          )}
          <div
            className={` ${
              menuOpen ? "block" : "hidden"
            } md:block flex flex-col md:flex md:flex-row gap-[1rem] xl:gap-[2rem] 2xl:gap-[3rem] justify-center items-center text-[1.5rem] font-semibold text-right absolute top-[4rem] md:top-0 md:relative transition ease-in-out duration-1000`}
          >
            {navItems.map((navItem) => (
              <NavLink
                key={navItem.id}
                to={navItem.to}
                className={`bg-[#4f5257] text-gray-300 md:text-black px-4 rounded-[10rem] md:bg-transparent md:px-0 md:rounded-0`}
              >
                {navItem.title}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}



export function Loader({ logo }) {
  return (
    <div className="loader h-[100vh] w-[100vw] flex justify-center items-center bg-black">
      <div className="loading h-[100%] w-[100%] flex flex-col sm:flex-row justify-center items-center border-4 border-white-800">
        <img
          id="logo"
          src={logo}
          alt="loader"
          className="border-4  border-white w-[150px] sm:w-[200px] rounded-[50%] sm:mr-[1rem] sm:mb-[0] mb-[2rem] animate-spin"
        />
        <h5 className="textt text-white  text-[1rem] vvsm:text-[1.5rem] vsm:text-[1.7rem] md:text-[2.5rem] sm:text-[2rem] font-primary">
          Loading...
        </h5>
      </div>
    </div>
  );
}