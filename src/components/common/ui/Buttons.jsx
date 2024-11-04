/* eslint-disable react/prop-types */
import { FaArrowUpLong } from "react-icons/fa6";

export const JoinButton = ({ title, icon, size, padding, classes }) => {
  return (
    <button
      type="button"
      className={`flex items-center justify-center flex-row-reverse gap-1.5 w-full rounded-lg px-2.5 text-sm font-medium text-gray-200 font-contrax bg-gradient-to-r hover:scale-95 transition-all duration-500
        ${size || "w-[100px]"} ${padding || "py-2"} ${classes} `}
    >
      {icon && <FaArrowUpLong className="text-gray-200  h-4 w-6 rotate-45" />}

      <span className="">{title}</span>
    </button>
  );
};

export const JoinButton1 = ({ title, className }) => {
  return (
    <button
      type="button"
      className={`grid justify-items-center rounded-lg text-white w-full py-5 px-3 text-lg font-bold tracking-wide ${
        className && className
      }`}
    >
      <span className="btnTextAmin">{title}</span>
    </button>
  );
};
