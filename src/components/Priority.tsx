import React from "react";

export const Priority: React.FC<{ priority: string }> = ({ priority }) => {
  let textColor = "";

  switch (priority) {
    case "High":
      textColor = "text-[#EF4D44]";
      break;
    case "Medium":
      textColor = "text-[#C29210]";
      break;
    case "Low":
      textColor = "text-[#1A8CFF]";
      break;
    default:
      textColor = "text-gray-600";
  }

  return (
    <div className="w-[125px] h-8 px-2 gap-2 flex items-center justify-start text-center bg-[#FFFFFF]">
      {/* Icon + Text layout */}
      <div className="w-[113px] h-4 gap-1 flex items-center text-center">
        {/* Priority Text */}
        <span className={`w-[48px] h-4 font-semibold text-[12px] leading-4 text-center  ${textColor}`}>
          {priority}
        </span>
      </div>
    </div>
  );
};
