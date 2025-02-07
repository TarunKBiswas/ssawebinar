import SectionCommunity from "../ui/SectionCommunity";
import Container from "../ui/Container";
import { teamImages } from "../../../constants/common/MenuData";

const Team = () => {
  return (
    <div className="w-full bg-transparent">
      <SectionCommunity
        className="bg-transparent"
        custom={true}
        title={"Meet our social seller *team*"}
        description={
          "What you’ll learn in This Webinar In this webinar, you will learn about the fundamentals of animation and game design, including the different animation techniques"
        }
      >
        <Container classes={"p-0"} classes2={"!px-0"}>
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-5">
            {teamImages?.map((m, i) => (
              <div
                key={`${"data"}+${i}`}
                className="rounded-lg overflow-hidden w-full h-full max-w-[620px] max-h-[350px]"
              >
                <img
                alt="Team Images"
                  src={m}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            ))}
          </div>
        </Container>
      </SectionCommunity>
    </div>
  );
};

export default Team;
