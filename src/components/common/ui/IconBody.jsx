/* eslint-disable react/prop-types */
const IconBody = ({ iconURL }) => {
  return (
    <div className="h-16 w-16 lg:w-16 lg:h-16 rounded-full  bg-[#9BD4FD26] relative flex flex-col items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center absolute">
        <img src={iconURL} className="w-8 h-8" />
      </div>
    </div>
  );
};

export default IconBody;
