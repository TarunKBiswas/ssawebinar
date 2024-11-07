import { testimony } from "../../../constants/common/MenuData";
import Container from "../ui/Container";
import SectionCommunity from "../ui/SectionCommunity";
import VideoCard from "./VideoCard";
import msg from '../../../assets/chats.webp'

const Testimony = () => {
  return (
    <div className="w-full bg-transparent">
      <SectionCommunity
        className="bg-transparent"
        custom={true}
        title={
          <span>
            What <span className=" text-primary">our users</span> have to say
          </span>
        }
      >
        <Container classes={"p-0"} classes2={"!px-0"}>
          <div className="flex flex-col gap-10">
            <div
              className={`grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5`}
            >
              {testimony?.map((d) => {
                return <VideoCard key={d.name} data={d} />;
              })}
            </div>

            <div>
              <img src={msg} alt="Testimony" className="w-full h-full object-contain" />
            </div>
          </div>
        </Container>
      </SectionCommunity>
    </div>
  );
};

export default Testimony;
