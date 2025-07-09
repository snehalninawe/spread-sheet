import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { VscLayoutSidebarRight } from "react-icons/vsc";

export const Breadcrumbs: React.FC = () => {
  const items = ["WorkSpace", "Folder 2", "Spreadsheet 3"];

  return (
    <div className="flex items-center gap-1 text-sm text-[#F8FAFC]">

      <VscLayoutSidebarRight className="w-5 h-5 text-[#618666] mr-2" />

      {items.map((item, idx) => {
        let className = "";
        if (item === "WorkSpace") {
          className =
            "w-[76px] h-[20px] font-medium text-[14px] leading-[20px] text-[#AFAFAF]";
        } else if (item === "Folder 2") {
          className =
            "w-[56px] h-[20px] font-medium text-[14px] leading-[20px] text-[#AFAFAF]";
        } else if (item === "Spreadsheet 3") {
          className =
            "w-[99px] h-[20px] font-medium text-[14px] leading-[20px] text-[#121212]";
        }

        return (
          <div key={item} className="flex items-center gap-1">
            <span className={className} style={{ fontFamily: "inherit" }}>
              {item}
            </span>
            {idx < items.length - 1 && (
              <FaChevronRight className="w-4 h-4 text-[#AFAFAF] mx-1" />
            )}
          </div>
        );
      })}
    </div>
  );
};
