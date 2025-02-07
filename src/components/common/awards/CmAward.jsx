import SectionCommunity from "../ui/SectionCommunity";
import Container from "../ui/Container";
import newsd from "../../../assets/cmawardd.webp";
import newsm from "../../../assets/cmawardm.webp";

const CmAward = () => {
  return (
    <div className="w-full bg-transparent">
      <SectionCommunity
        className="bg-transparent"
        custom={true}
        title={"Awarded by *chief minister of Chhattisgarh*"}
        description={
          "Social Seller Academy has provided online business opportunities to more than 25000+ online sellers in India."
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

export default CmAward;
