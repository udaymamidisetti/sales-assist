import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center m-auto pt-[21px]">
        <h1
          style={{ letterSpacing: "10px" }}
          className="text-[#E5DFD9] md:text-[20px] text-[10px] leading-[28.34px]  commefont"
        >
          TANN TRIM
        </h1>
        <div className="flex md:gap-[21px] gap-4">
          <FaMagnifyingGlass className="h-[15px] w-[15px] md:h-[24px] md:w-[24px] text-[#E5DFD9] text-[24px]" />
          <FaUserAlt className="h-[15px] w-[15px] md:h-[24px] md:w-[24px] text-[#E5DFD9] text-[24px]" />
          <FaRegBookmark className="h-[15px] w-[15px] md:h-[24px] md:w-[24px] text-[#E5DFD9] text-[24px]" />
          <HiOutlineShoppingBag className="h-[15px] w-[15px] md:h-[24px] md:w-[24px] text-[#E5DFD9] text-[24px]" />
        </div>
      </div>
      <div className="max-w-[472px] w-[100%] m-auto flex justify-center gap-5 md:gap-[50px] pt-[22px]">
        <p className="text-[10px] md:text-[14px] leading-[17.5px] text-[#E5DFD9] encodefont">
          Bags
        </p>
        <p className="text-[10px] md:text-[14px]  leading-[17.5px] text-[#E5DFD9] encodefont">
          Travel
        </p>
        <p className="text-[10px] md:text-[14px]  leading-[17.5px] text-[#E5DFD9] encodefont">
          Accesories
        </p>
        <p className="text-[10px] md:text-[14px]  leading-[17.5px] text-[#E5DFD9] encodefont">
          Gifting
        </p>
        <p className="text-[10px] md:text-[14px]  leading-[17.5px] text-[#E5DFD9] encodefont">
          Jewelery
        </p>
      </div>
    </>
  );
};

export default Header;
