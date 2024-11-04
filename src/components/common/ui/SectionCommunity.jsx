/* eslint-disable react/prop-types */

const SectionCommunity = ({
  title,
  description,
  video,
  custom,
  children,
  background,
  className,
  applyMobileStyling,
  divClassName,
  descStyles,
}) => {
  return (
    <section
      className={`${
        background ? background : video || custom ? "bg-[#FAFBFC]" : "bg-white"
      } px-5 xl:px-0 overflow-hidden ${className}`}
    >
      <div
        className={`flex flex-col items-center gap-10 lg:gap-14 ${divClassName} ${
          applyMobileStyling && "w-full"
        }`}
      >
        {(title || description) && (
          <div className="sec-headbox-lg flex flex-col gap-5">
            {title && (
              <h2 className="sec-headbox-lg !text-3xl md:!text-4xl md:!leading-[70px] lg:!text-[48px] font-bold max-w-[1024px] capitalize text-white">
                {title}
              </h2>
            )}

            {description && (
              <p
                className={`max-w-[750px] text-center text-sm md:text-lg lg:leading-6 text-[#E9E9E9] m-auto ${
                  descStyles ? descStyles : ""
                }`}
              >
                {description}
              </p>
            )}
          </div>
        )}

        {applyMobileStyling && <div className=" w-full">{children}</div>}
        {!applyMobileStyling && <>{children}</>}
      </div>
    </section>
  );
};

export default SectionCommunity;
