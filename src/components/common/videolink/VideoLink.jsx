/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { state } from "../../../constants/common/state";
import Container from "../ui/Container";
import SectionCommunity from "../ui/SectionCommunity";
import { JoinButton1 } from "../ui/Buttons";

const VideoLink = ({ videoDet, checkoutLink }) => {
  const vdoUrl = (url) => {
    state.vdoUrl = url;
    state.videoModal = true;
  };
  return (
    <div className="w-full bg-transparent">
      <SectionCommunity
        className="bg-transparent"
        custom={true}
        divClassName
        title={"Free Videos For WhatsApp Marketing"}
      >
        <Container classes={"p-0"} classes2={"!px-0"}>
          <div className="flex flex-col gap-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
              {videoDet.map((m, i) => (
                <div key={`${"m"}+${i}`} className="md:py-2">
                  <img
                    src={m.thumbImg}
                    className="cursor-pointer hover:scale-[1.02] transition-all ease-out duration-[0.3s]"
                    onClick={() => vdoUrl(m.videoURL)}
                  />
                </div>
              ))}
            </div>

            <Link
              to={checkoutLink}
              className="w-[80%] mx-auto md:max-w-[300px]"
            >
              <JoinButton1
                title={"Register Now at ₹199 only"}
                className="bg-[#00CB7F] btn-shine"
              />
            </Link>
          </div>
        </Container>
      </SectionCommunity>
    </div>
  );
};

export default VideoLink;
