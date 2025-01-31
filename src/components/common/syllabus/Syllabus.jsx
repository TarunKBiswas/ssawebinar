/* eslint-disable react/prop-types */
import SectionCommunity from "../ui/SectionCommunity";
import Container from "../ui/Container";
import TransparentCard from "../ui/TransparentCard";
import IconBody from "../ui/IconBody";

import calendar from "../../../assets/date-icon.webp";
import clock from "../../../assets/time-icon.webp";
import wallet from "../../../assets/price-icon.webp";

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
              {/* {data?.map((data, i) => {
                return (
                  <div
                    key={`${"t"}+${i}`}
                    className="w-full px-6 flex items-center justify-start lg:justify-center gap-6 font-readex font-medium"
                  >
                    <IconBody iconURL={data.Icon} />
                    <div className="text-sm tracking-wider lg:text-base lg:font-semibold leading-5 capitalize text-white font-readex text-center">
                      {data.title}
                    </div>
                  </div>
                );
              })} */}

              <div className="w-full px-6 flex items-center justify-start lg:justify-center gap-6 font-readex font-medium">
                <IconBody iconURL={calendar} />
                <div className="text-sm tracking-wider lg:text-base lg:font-semibold leading-5 capitalize text-white font-readex text-center">
                  {data.date}
                </div>
              </div>
              <div className="w-full px-6 flex items-center justify-start lg:justify-center gap-6 font-readex font-medium">
                <IconBody iconURL={clock} />
                <div className="text-sm tracking-wider lg:text-base lg:font-semibold leading-5 capitalize text-white font-readex text-center">
                  {data.time}
                </div>
              </div>
              <div className="w-full px-6 flex items-center justify-start lg:justify-center gap-6 font-readex font-medium">
                <IconBody iconURL={wallet} />
                <div className="text-sm tracking-wider lg:text-base lg:font-semibold leading-5 capitalize text-white font-readex text-center">
                  Price : ₹{data.price} only
                </div>
              </div>
            </div>
          </TransparentCard>
        </Container>
      </SectionCommunity>
    </div>
  );
};

export default Syllabus;
