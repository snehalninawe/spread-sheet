import React from "react";


interface StatusProps {
  status: "In-process" | "Need to start" | "Complete" | "Blocked";
}

const STATUS_STYLES: Record<StatusProps["status"], string> = {
  "In-process": "bg-[#FFF3D6] text-[#85640B]",
  "Need to start": "bg-[#E2E8F0] text-[#475569]",
  Complete: "bg-[#D3F2E3] text-[#0A6E3D]",
  Blocked: "bg-[#FFE1DE] text-[#C22219]",
};

export const Status: React.FC<StatusProps> = ({ status }) => {
  return (
    <span
      className={`w-fit min-w-[110px] h-6 px-2 py-1 rounded-full text-[12px] leading-4 font-medium flex items-center justify-center gap-1 ${
        STATUS_STYLES[status]
      }`}
    >
       <span>{status}</span>
    </span>
  );
};
