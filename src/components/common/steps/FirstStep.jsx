/* eslint-disable react/prop-types */
import Container from "../ui/Container";
import IconBody from "../ui/IconBody";
import SectionCommunity from "../ui/SectionCommunity";
import TransparentCard from "../ui/TransparentCard";

const FirstStep = ({ data }) => {
  return (
    <div className="w-full bg-transparent">
      <SectionCommunity
        className="bg-transparent"
        custom={true}
        title={"Take Your First Step Toward A *Successful Online Business*"}
      >
        <Container classes={"p-0"} classes2={"!px-0"}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-12">
            {data?.map((m, i) => (
              <TransparentCard
                rounded={"rounded-xl"}
                classes={`lg:w-[300px] lg:h-[280px] m-auto p-5`}
                classes2={"realtive z-5 !justify-start grow shrink basis-0"}
                key={`${"data"}+${i}`}
              >
                <div className="flex flex-col gap-3 items-start ">
                  <IconBody iconURL={m.stepIcon} className="w-[60px]" />
                  <span className="text-xl font-semibold">{m.stepTitle}</span>
                  <span className="text-start text-sm lg:mb-[50px]">
                    {m.stepDesc}
                  </span>
                </div>
              </TransparentCard>
            ))}
          </div>
        </Container>
      </SectionCommunity>
    </div>
  );
};

export default FirstStep;
