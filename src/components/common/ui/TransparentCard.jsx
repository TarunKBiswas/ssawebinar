/* eslint-disable react/prop-types */
const TransparentCard = ({ children, size, rounded, classes, classes2 }) => {
  return (
    <div
      className={`w-full ${size} border-2 border-blue-200/30 ${
        rounded || "rounded-3xl"
      } p-3 bg-white/5 ${classes}`}
    >
      <div
        className={`w-full flex items-center justify-evenly text-gray-200 ${classes2}`}
      >
        {children}
      </div>
    </div>
  );
};

export default TransparentCard;
