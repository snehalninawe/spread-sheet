import React from "react";
import { IoSearch, IoFilter, IoArrowDown, IoArrowUp } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { FiEyeOff } from "react-icons/fi";
import { HiArrowsUpDown } from "react-icons/hi2";
import { Breadcrumbs } from "../components/BreadCrums";
import Image from '../assets/image.png';
import { FaAngleDoubleRight } from "react-icons/fa";
import { MdOutlineGridView } from "react-icons/md";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";

export const Toolbar: React.FC = () => {
  return (
    <div className="border-b bg-white text-sm">
      {/* Top Bar: Breadcrumbs + Icons */}
      <div className="flex justify-between items-center px-4 py-2">
        <Breadcrumbs />

        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative text-gray-500 flex items-center w-[165px] h-10 gap-2 rounded-md px-3 bg-[#F6F6F6]">
            <IoSearch className="absolute w-[13.33px] h-[13.33px] top-[13px] left-[13px] text-[#AFAFAF]" />
            <input
              type="text"
              placeholder="Search within sheet"
              className="pl-8 text-xs leading-4 font-normal w-full h-full bg-transparent border-none outline-none text-[#757575]"
              onChange={(e) => console.log("Searching:", e.target.value)}
            />
          </div>

          {/* Bell Icon */}
          <div className="relative w-5 h-5 bg-[#FFFFFF] cursor-pointer" onClick={() => console.log("Notifications clicked")}>
            <FaBell className="w-[17.96px] h-[19.51px] text-[#121212] absolute top-[2px] left-[3.02px]" />
            <span className="absolute -top-2 -right-1 w-4 h-4 bg-[#4B6A4F] text-[#F6F6F6] text-[10px] leading-4 font-medium text-center rounded-full border-2 border-white">
              2
            </span>
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-2 w-[112px] h-10 px-3 py-1.5 rounded-lg bg-[#FFFFFF] cursor-pointer"
               onClick={() => console.log("Profile clicked")}>
            <img
              src={Image}
              alt="John Doe"
              className="w-7 h-7 rounded-full object-cover"
            />
            <div className="flex flex-col w-[56px] h-[26px] max-w-[120px]">
              <span className="text-xs leading-4 font-normal text-[#121212]">John Doe</span>
              <span className="text-[10px] leading-3 font-normal text-[#757575]">john.doe@email.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Toolbar Buttons */}
      <div className="flex justify-between items-center px-4 py-2 border-t border-[#EEEEEE] bg-[#FFFFFF]">
        <div className="flex items-center gap-[4px] text-gray-700 font-medium">
          <button onClick={() => console.log("Toolbar clicked")} className="px-2 py-1 hover:bg-gray-100 rounded bg-[#FFFFFF] text-[#121212]">
            Tool bar
          </button>

          <FaAngleDoubleRight className="text-[#121212] w-[8.6px] h-[9.8px]" />

          <div className="w-px h-6 bg-[#EEEEEE]" />

          <button onClick={() => console.log("Hide fields clicked")} className="flex items-center gap-1 w-[118px] h-9 px-3 py-2 bg-[#FFFFFF] hover:bg-gray-100 rounded-md">
            <FiEyeOff className="w-[16.67px] h-[16.67px] text-[#121212]" />
            <span className="text-sm leading-5 text-[#121212]">Hide fields</span>
          </button>

          <button onClick={() => console.log("Sort clicked")} className="flex items-center gap-1 w-[73px] h-9 px-3 py-2 bg-[#FFFFFF] hover:bg-gray-100 rounded-md">
            <HiArrowsUpDown className="w-[17.5px] h-[13.33px] text-[#121212]" />
            <span className="text-sm leading-5 text-[#121212]">Sort</span>
          </button>

          <button onClick={() => console.log("Filter clicked")} className="flex items-center gap-1 w-[92px] h-9 px-3 py-2 hover:bg-gray-100 rounded-md">
            <IoFilter className="w-[13.75px] h-[9.58px] text-[#121212]" />
            <span className="text-[14px] leading-5 text-[#121212]">Filter</span>
          </button>

          <button onClick={() => console.log("Cell view clicked")} className="flex items-center gap-1 w-[105px] h-9 px-3 py-2 hover:bg-gray-100 rounded-md">
            <MdOutlineGridView className="w-[12.92px] h-[15px] text-[#121212]" />
            <span className="text-sm leading-5 text-[#121212]">Cell view</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button onClick={() => console.log("Import clicked")} className="flex items-center gap-[4px] w-[89px] h-9 px-2 py-2 rounded-md border border-[#EEEEEE] text-sm bg-[#FFFFFF] text-gray-800 hover:bg-gray-50">
            <IoArrowDown className="w-[12.08px] h-[16.67px] text-[#545454]" />
            <span className="text-[14px] font-normal">Import</span>
          </button>

          <button onClick={() => console.log("Export clicked")} className="flex items-center gap-1 w-[89px] h-9 px-2 py-2 rounded-md border border-[#EEEEEE] text-sm bg-[#FFFFFF] text-gray-800 hover:bg-gray-50">
            <IoArrowUp className="text-[#545454] w-[12.08px] h-[16.67px]" />
            <span className="text-[14px] font-normal text-[#545454]">Export</span>
          </button>

          <button onClick={() => console.log("Share clicked")} className="flex items-center gap-1 w-[84px] h-9 px-2 py-2 rounded-md border border-[#EEEEEE] text-sm bg-[#FFFFFF] text-gray-800 hover:bg-gray-50">
            <FaRegShareFromSquare className="text-[#545454] w-[15.83px] h-[15px]" />
            <span className="text-[14px] font-normal text-[#545454]">Share</span>
          </button>

          <button onClick={() => console.log("New Action clicked")} className="flex items-center gap-1 w-[150px] h-9 px-6 py-2 rounded-md bg-[#4B6A4F] text-white hover:bg-green-700">
            <IoMdAdd className="text-[#FFFFFF] w-[15px] h-[15px]" />
            <span className="text-[14px] font-medium text-[#FFFFFF]">New Action</span>
          </button>
        </div>
      </div>
    </div>
  );
};
