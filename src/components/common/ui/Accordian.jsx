/* eslint-disable react/prop-types */
import { createContext, useContext, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const AccordianContext = createContext();

const Accordian = ({ children, value, onChange, ...props }) => {
  const [selected, setSelected] = useState(value);

  const handleSelect = (newValue) => {
    setSelected((prev) => {
      const nextValue = prev === newValue ? null : newValue;
      onChange?.(nextValue);
      return nextValue;
    });
  };

  return (
    <ul className="w-full max-w-4xl mx-auto" {...props}>
      <AccordianContext.Provider value={{ selected, handleSelect }}>
        {children}
      </AccordianContext.Provider>
    </ul>
  );
};

const AccordianItem = ({ children, value, questions, ...props }) => {
  const { selected, handleSelect } = useContext(AccordianContext);
  const open = selected === value;
  const contentRef = useRef(null);

  return (
    <li className="gradient-border !border-x-0" {...props}>
      <header
        role="button"
        onClick={() => handleSelect(value)}
        className="flex w-full items-center text-left py-6 font-medium"
      >
        <span className="w-11/12 text-white text-base leading-7 md:text-[22px]">
          {questions}
        </span>
        <span className="w-1/12 flex items-center justify-end">
          <FiChevronDown
            size={20}
            className={`text-gray-200 text-xl transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </span>
      </header>
      <div
        className="overflow-y-hidden transition-all duration-200"
        style={{ height: open ? contentRef.current?.scrollHeight : 0 }}
      >
        <div
          className="pb-6 text-left w-full max-w-[calc(100%_-_20px)]"
          ref={contentRef}
        >
          {children}
        </div>
      </div>
    </li>
  );
};

export default Accordian;
export { AccordianItem };
