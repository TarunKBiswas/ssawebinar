/* eslint-disable react/prop-types */
import SectionCommunity from "../ui/SectionCommunity";
import Container from "../ui/Container";
import TransparentCard from "../ui/TransparentCard";
import IconBody from "../ui/IconBody";

const Syllabus = ({ data }) => {
  return (
    <div className="w-full bg-transparent">
      <SectionCommunity
        className="bg-transparent !px-0"
        custom={true}
        divClassName="!gap-0"
        description={""}
      >
        <Container className={"xl:w-[60vw]"} classes={"p-0"} classes2={"!px-0"}>
          <TransparentCard rounded={"rounded-xl"}>
            <div className="w-full flex flex-col py-6 gap-6 items-start lg:flex-row lg:items-center lg:justify-center">
              {data?.map((data, i) => {
                return (
                  <div
                    key={`${"t"}+${i}`}
                    className="w-full px-6 flex items-center justify-start lg:justify-center gap-6 font-readex font-medium"
                  >
                    {/* <div className="h-16 w-16 lg:w-16 lg:h-16 rounded-full  bg-[#9BD4FD26] relative flex flex-col items-center justify-center">
                        <div className="w-full flex flex-col items-center justify-center absolute">
                          <img src={data.Icon} className="w-8 h-8" />
                        </div>
                      </div> */}
                    <IconBody iconURL={data.Icon} />
                    <div className="text-sm tracking-wider lg:text-base lg:font-semibold leading-5 capitalize text-white font-readex text-center">
                      {data.title}
                    </div>
                  </div>
                );
              })}
            </div>
          </TransparentCard>
        </Container>
      </SectionCommunity>
    </div>
  );
};

export default Syllabus;
