import SectionCommunity from "../ui/SectionCommunity";
import Container from "../ui/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";
import coachImg from "../../../assets/coach.webp";
import coachImg2 from "../../../assets/lsimg.webp";

const OurCoach = () => {
  return (
    <div className="w-full bg-transparent">
      <SectionCommunity
        className="bg-transparent"
        custom={true}
        loop={true}
        title={"Meet Your *Coach*"}
        description={""}
      >
        <Container className={"xl:w-[60vw]"} classes={"p-0"} classes2={"!px-0"}>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 justify-center lg:items-center lg:flex-row gap-12 lg:justify-between ">
            {/* <img src={coachImg} className="pr-3 w-full" alt="" /> */}
            <div className="image-box relative w-full h-[auto] md:h-[550px]">
              <Swiper
                spaceBetween={30}
                effect={"fade"}
                autoplay={{
                  delay: 800,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectFade]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="md:h-[550px] md:w-[550px] flex items-center rounded-lg justify-center overflow-hidden">
                    <img
                      src={coachImg}
                      alt="Coach Image"
                      className="object-contain aspect-auto"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="md:h-[550px] md:w-[550px] flex items-center rounded-lg justify-center overflow-hidden">
                    <img
                      src={coachImg2}
                      alt="Coach Image"
                      className="object-cover object-top h-full w-full rounded-lg"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="w-full flex flex-col items-start text-gray-200 gap-8 tracking-wide">
              <div className="flex flex-col gap-1 items-start">
                <p className="text-3xl lg:text-4xl">Mr. Lakshit Sethiya</p>
                <small className="text-sm font-[200]">
                  Founder & CEO, Social Seller Technology
                </small>
              </div>
              <p className="text-gray-300 font-readex text-sm lg:text-base text-start flex flex-col gap-6">
                <span className="leading-6">
                  Lakshit Sethiya is an Online Business Coach and WhatsApp
                  Marketing expert. He has educated over 2000 entrepreneurs and
                  corporate employees about WhatsApp Automation. Currently, he
                  leads a team of 45+ professionals providing WhatsApp
                  automation services to MSMEs and major corporates. Social
                  Seller Technologies is an official partner of Meta for
                  WhatsApp Business APIs.
                </span>
                <span>
                  Mr. Lakshit is a leading conversational commerce expert with
                  over 5 years of experience in Marketing and Sales. He
                  currently boasts a social media following of over 7 lakh
                  individuals and serves more than 2000 corporate clients.
                </span>
              </p>
            </div>
          </div>
        </Container>
      </SectionCommunity>
    </div>
  );
};

export default OurCoach;
