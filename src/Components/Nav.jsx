import React, { useState } from "react";
import { Link } from "react-scroll";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const downloadHandler = () => {
    window.open(
      `https://drive.google.com/file/d/1eryGVOq2E-fixqV41wo2EUY1lLCtJotW/view?usp=drivesdk`
    );
  };

  return (
    <div className="flex items-center justify-between lg:justify-between bg-white fixed w-[100vw] px-16 shadow-custom lg:h-auto lg:flex-row z-40">
      <div>
        <Link
          to="home"
          span={true}
          smooth={true}
          activeClass="active"
          onClick={toggleMenu}
        >
          <p className="py-6 text-xl font-bold cursor-pointer"> Akash Dixit </p>
        </Link>
      </div>
      <div>
        <ul className="flex gap-10">
          <Link
            to="hero"
            span={true}
            smooth={true}
            activeClass="active"
            onClick={toggleMenu}
          >
            <li className=" cursor-pointer font-semibold text-lg hover:text-[#147EFB] transition-all ease-in">
              Home
            </li>
          </Link>
          <Link to="about" span={true} smooth={true} onClick={toggleMenu}>
            <li className=" cursor-pointer hover:text-[#147EFB] transition-all ease-in  font-semibold text-lg">
              About
            </li>
          </Link>
          <Link to="portfolio" span={true} smooth={true} onClick={toggleMenu}>
            <li className=" cursor-pointer hover:text-[#147EFB] transition-all ease-in  font-semibold text-lg">
              Projects
            </li>
          </Link>
          <Link to="contact" span={true} smooth={true} onClick={toggleMenu}>
            <li className=" cursor-pointer hover:text-[#147EFB] transition-all ease-in  font-semibold text-lg">
              Contact
            </li>
          </Link>

          <li
            onClick={downloadHandler}
            className=" cursor-pointer hover:text-[#147EFB] transition-all ease-in font-semibold text-lg"
          >
            Resume
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;