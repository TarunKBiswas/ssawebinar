/* eslint-disable react/prop-types */
import SectionCommunity from "../ui/SectionCommunity";
import Container from "../ui/Container";
import TransparentCard from "../ui/TransparentCard";
import { CiCircleCheck } from "react-icons/ci";

const Pointers = ({ data }) => {
  return (
    <div className="w-full bg-transparent">
      <SectionCommunity
        className="bg-transparent"
        custom={true}
        title={data?.title}
        description={data?.sbtitle}
      >
        <Container className={"xl:w-[60vw]"} classes={"p-0"} classes2={"!px-0"}>
          <TransparentCard rounded={"rounded-xl"}>
            <div className="w-full flex flex-col gap-4 px-6 py-8">
              <div className="w-full flex flex-col items-start lg:grid lg:grid-cols-2 gap-8 text-gray-200 ">
                {data?.pointers?.map((data, i) => {
                  return (
                    <div
                      className="w-full flex items-start lg:items-center gap-4"
                      key={`${"data"}+${i}`}
                    >
                      <CiCircleCheck className="h-5 w-5 lg:h-6 lg:w-6" />
                      <p className="text-sm lg:text-base text-start leading-5 text-gray-200">
                        {data}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </TransparentCard>
        </Container>
      </SectionCommunity>
    </div>
  );
};

export default Pointers;
