/* eslint-disable react/prop-types */
const Container = ({ classes, classes2, children }) => {
  return (
    <div className={`w-full bg-transparent ${classes}`}>
      <div
        className={`max-w-7xl mx-auto px-4 xl:px-0 lg:px-5 ${classes2}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
