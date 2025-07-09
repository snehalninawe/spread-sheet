import React, { useState } from "react";
import { motion } from "framer-motion";

const tabs = ["All Orders", "Pending", "Reviewed", "Arrived", "+"];

export const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All Orders");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    console.log(`Clicked: ${tab}`);
  };

  return (
    <div className="w-full border-t border-[#EEEEEE] bg-[#FFFFFF] px-8 pt-1 flex gap-6">
      {tabs.map((tab) => {
        const isActive = activeTab === tab;
        const isPlus = tab === "+";

        return (
          <div
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`relative h-[44px] flex items-center justify-center cursor-pointer px-4 py-2 text-sm font-medium 
              ${isActive && !isPlus ? "bg-[#E1F3E5] text-[#3E5741] font-semibold" : "text-[#757575]"} 
              ${isPlus ? "w-[36px] text-xl text-[#757575] bg-[#FFFFFF]" : ""}`}
          >
            {isPlus ? (
              <div className="w-[28px] h-[28px] flex items-center justify-center hover:bg-gray-200 rounded">
                +
              </div>
            ) : (
              <>
                <span>{tab}</span>
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="absolute top-0 left-0 right-0 h-[3px] bg-[#4B6A4F] rounded-b"
                  />
                )}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};
