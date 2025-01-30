import newsd from "../../../assets/newsd.webp";
import newsm from "../../../assets/newsm.webp";
import SectionCommunity from "../ui/SectionCommunity";
import Container from "../ui/Container";

const NewsReviews = () => {
  return (
    <div className="w-full bg-transparent">
      <SectionCommunity
        className="bg-transparent"
        custom={true}
        title={"News Reviews"}
        description={
          "We take pride in the honors received by us for our exceptional achievements and contributions to empowering online sellers and fostering a thriving community."
        }
      >
        <Container className={"xl:w-[60vw]"} classes={"p-0"} classes2={"!px-0"}>
          <img
            src={newsd}
            alt="news-featuring"
            className="hidden md:block object-contain w-full"
          />
          <img
            src={newsm}
            alt="news-featuring"
            className="md:hidden block object-contain w-full"
          />
        </Container>
      </SectionCommunity>
    </div>
  );
};

export default NewsReviews;
