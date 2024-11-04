import Marquee from "react-fast-marquee";
import media1 from "../../../assets/media/amazon.png";
import media2 from "../../../assets/media/dainik_bhaskar.png";
import media3 from "../../../assets/media/flipkart.png";
import media4 from "../../../assets/media/inc_42.png";
import media5 from "../../../assets/media/shopify.png";
import media6 from "../../../assets/media/whatsapp.png";
import media7 from "../../../assets/media/youtube.png";

const mediIcons = [media1, media2, media3, media4, media5, media6, media7];

const MediaIcon = () => {
  return (
    <div className="w-full bg-transparent">
      <div className="shadow-inner backdrop-blur-[10px] lg:pt-7">
        <Marquee className="gradient-border !border-x-0">
          {mediIcons.map((el, i) => (
            <div
              key={`${"el"}+${i}`}
              className="img-group py-3 mx-5 lg:mx-20 xl:mx-[6rem]"
            >
              <img
                src={el}
                className=" max-h-14 lg:max-h-20 py-2 object-contain w-full h-full"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default MediaIcon;
