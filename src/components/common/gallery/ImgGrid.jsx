/* eslint-disable react/prop-types */
import SectionCommunity from "../ui/SectionCommunity";
import Container from "../ui/Container";

const ImgGrid = ({ data, title, desc, gridCount }) => {
  return (
    <div className="w-full bg-transparent">
      <SectionCommunity
        className="bg-transparent"
        custom={true}
        title={title && title}
        description={desc && desc}
      >
        <Container classes={"p-0"} classes2={"!px-0"}>
          <div
            className={`grid grid-cols-1 ${
              gridCount ? gridCount : "md:grid-cols-3"
            } gap-5 lg:gap-5`}
          >
            {data?.map((m, i) => {
              return (
                <div
                  key={`${"data"}+${i}`}
                  className="rounded-lg overflow-hidden w-full h-full max-w-[620px] max-h-[350px]"
                >
                  <img
                    alt="grid Images"
                    src={m || m.imgs}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              );
            })}
          </div>
        </Container>
      </SectionCommunity>
    </div>
  );
};

export default ImgGrid;
