import React from "react";
import { Status } from "../components/Status";
import { Priority } from "../components/Priority";
import { GoBriefcase } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import { IoIosArrowDropdown } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { FaHandPaper } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

interface RowData {
  id: number;
  jobRequest: string;
  submitted: string;
  status: "In-process" | "Need to start" | "Complete" | "Blocked";
  submitter: string;
  url: string;
  assigned: string;
  priority: "High" | "Medium" | "Low";
  dueDate: string;
  estValue: string;
}

const generateRows = (): RowData[] => {
  const filledRows: RowData[] = [
    {
      id: 1,
      jobRequest: "Launch social media campaign for product X",
      submitted: "15-11-2024",
      status: "In-process",
      submitter: "Aisha Patel",
      url: "https://www.aishapatel.com",
      assigned: "Sophie Choudhury",
      priority: "Medium",
      dueDate: "20-11-2024",
      estValue: "₹6,200,000",
    },
    {
      id: 2,
      jobRequest: "Update press kit for company redesign",
      submitted: "28-10-2024",
      status: "Need to start",
      submitter: "Irfan Khan",
      url: "https://www.irfankhan.com",
      assigned: "Tejas Pandey",
      priority: "High",
      dueDate: "30-10-2024",
      estValue: "₹3,500,000",
    },
    {
      id: 3,
      jobRequest: "Finalize user testing feedback for app",
      submitted: "05-12-2024",
      status: "In-process",
      submitter: "Mark Johnson",
      url: "https://www.markjohnson.com",
      assigned: "Rachel Lee",
      priority: "Medium",
      dueDate: "10-12-2024",
      estValue: "₹4,750,000",
    },
    {
      id: 4,
      jobRequest: "Design financial report for Q4",
      submitted: "10-01-2025",
      status: "Complete",
      submitter: "Emily Green",
      url: "https://www.emilygreen.com",
      assigned: "Tom Wright",
      priority: "Low",
      dueDate: "15-01-2025",
      estValue: "₹5,900,000",
    },
    {
      id: 5,
      jobRequest: "Prepare financial report for Q4",
      submitted: "25-01-2025",
      status: "Blocked",
      submitter: "Jessica Brown",
      url: "https://www.jessicabrown.com",
      assigned: "Kevin Smith",
      priority: "Low",
      dueDate: "30-01-2025",
      estValue: "₹2,800,000",
    },
  ];

  const emptyRows: RowData[] = Array.from({ length: 25 }, (_, index) => ({
    id: index + 6,
    jobRequest: "",
    submitted: "",
    status: "Need to start",
    submitter: "",
    url: "",
    assigned: "",
    priority: "Low",
    dueDate: "",
    estValue: "",
  }));

  return [...filledRows, ...emptyRows];
};

export const DataTable: React.FC = () => {
  const rows = generateRows();

  return (
    <div className="w-full overflow-x-auto scrollbar-custom bg-[#F6F6F6]">
      <div className="min-w-[900px] text-sm font-body">
        <table className="min-w-full table-fixed border-separate border-spacing-0">
          <thead className="sticky top-0 z-10 bg-white">
            <tr>
              <th className="w-[13.33px] h-[13.34px] px-3 py-3 border border-gray-200 text-[#757575] bg-[#EEEEEE] font-medium text-center">#</th>
              {[
                "Job Request",
                "Submitted",
                "Status",
                "Submitter",
                "URL",
                "Assigned",
                "Priority",
                "Due Date",
                "Est. Value",
                "+"
              ].map((title, idx) => (
                <th
                  key={idx}
                  className={`w-[124px] h-8 px-4 py-2 border border-gray-200 bg-gray-50 ${title === "+" ? "border-dashed border-[1px] border-gray-400 text-center" : ""}`}
                >
                  <div className="flex items-center gap-2 justify-center text-center">
                    {title === "Job Request" && <GoBriefcase className="text-[#AFAFAF] w-[12px] h-[12px]" />}
                    {title === "Submitted" && <SlCalender className="text-[#AFAFAF] w-[12px] h-[12px]" />}
                    {title === "Status" && <IoIosArrowDropdown className="text-[#AFAFAF] w-[14px] h-[14px]" />}
                    {title === "Submitter" && <FaRegCircleUser className="text-[#AFAFAF] w-[14px] h-[14px]" />}
                    {title === "URL" && <TbWorld className="text-[#AFAFAF] w-[14px] h-[14px]" />}
                    {title === "Assigned" && <FaHandPaper className="text-[#83A588] w-[14px] h-[14px]" />}
                    {title === "+" ? (
                      <div className="flex items-center justify-center w-[20px] h-[20px] mx-auto rounded border border-gray-300 bg-white p-[2px]">
                        <FaPlus className="text-[#121212] text-[12px]" onClick={() => console.log("+ clicked")} />
                      </div>
                    ) : (
                      <span className="text-[12px] font-semibold leading-5 text-[#757575]">{title}</span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id} className="hover:bg-gray-50 text-center">
            <td className="border border-gray-200 bg-white text-center whitespace-nowrap overflow-hidden text-ellipsis">
              {row.id}
            </td>
            <td className="border border-gray-200 px-4 py-2 text-xs text-[#121212] bg-white whitespace-nowrap overflow-hidden text-ellipsis">
              {row.jobRequest || ""}
            </td>
            <td className="border border-gray-200 px-4 py-2 text-xs text-right text-[#757575] bg-white whitespace-nowrap overflow-hidden text-ellipsis">
              {row.submitted || ""}
            </td>
            <td className="border border-gray-200 px-4 py-2 bg-white whitespace-nowrap overflow-hidden text-ellipsis">
              {row.jobRequest ? <Status status={row.status} /> : ""}
            </td>
            <td className="border border-gray-200 px-4 py-2 text-xs text-[#757575] bg-white whitespace-nowrap overflow-hidden text-ellipsis">
              {row.submitter || ""}
            </td>
            <td className="border border-gray-200 px-4 py-2 text-xs text-[#121212] bg-white underline whitespace-nowrap overflow-hidden text-ellipsis">
              {row.url ? (
                <a href={row.url} target="_blank" rel="noreferrer">
                  {new URL(row.url).hostname}
                </a>
              ) : ""}
            </td>
            <td className="border border-gray-200 px-4 py-2 bg-white whitespace-nowrap overflow-hidden text-ellipsis">
              {row.assigned && (
                <span className="text-xs text-[#121212] px-2 py-[2px] rounded-md inline-block">
                  {row.assigned}
                </span>
              )}
            </td>
            <td className="border border-gray-200 px-2 py-2 bg-white text-center whitespace-nowrap overflow-hidden text-ellipsis">
              {row.jobRequest ? <Priority priority={row.priority} /> : ""}
            </td>
            <td className="border border-gray-200 px-2 py-2 text-right text-xs text-[#121212] bg-white whitespace-nowrap overflow-hidden text-ellipsis">
              {row.dueDate || ""}
            </td>
            <td className="border border-gray-200 px-4 py-2 text-right text-xs bg-white text-[#121212] whitespace-nowrap overflow-hidden text-ellipsis">
              {row.estValue || ""}
            </td>
            <td className="border border-gray-400 border-dashed px-2 py-2 w-[124px] h-8 bg-white whitespace-nowrap overflow-hidden text-ellipsis"></td>
          </tr>
        ))}
      </tbody>

        </table>
      </div>
    </div>
  );
};
