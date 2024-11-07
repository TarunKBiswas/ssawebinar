/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa6";
import Container from "../ui/Container";
import CountUp from "react-countup";
import ratingview from "../../../assets/views.webp";
import { Link } from "react-router-dom";
import { JoinButton1 } from "../ui/Buttons";
import Syllabus from "../syllabus/Syllabus";
import MediaIcon from "../media/MediaIcon";
let stars = [];

for (let index = 0; index < 5; index++) {
  stars.push(
    <FaStar
      key={`m${index}`}
      className="fill-[#FFB800] h-4 w-4 lg:h-4 lg:w-4"
    />
  );
}
const HeroSection = ({ data, heroData }) => {
  return (
    <>
      <Container>
        <div className="m-auto w-full flex flex-col items-center justify-around text-center gap-14 md:gap-[100px]">
          <div className="w-full flex flex-col items-center lg:gap-[50px] first:lg:gap-14 gap-[30px] text-white">
            <div className="flex flex-col md:flex-row gap-10 w-full items-start justify-between">
              <div className="w-full md:w-1/2 max-w-lg md:order-2">
                <img
                  src={heroData?.faceImg}
                  alt="Face Image"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-10 md:gap-10 md:max-w-3xl justify-between">
                <div className="border-blue-200/30 mx-auto md:order-first -mt-1 md:ml-0 rounded-full bg-blue-200/10 border">
                  <div className="bg-gradient-to-r from-[#4E5FFF1A] to-[#FF646433] py-[4px] px-[16px] rounded-full">
                    <span className="flex gap-2 bg-transparent text-[14px] inter p-1">
                      <span className="w-12">
                        <CountUp
                          duration={5}
                          end={heroData?.countUpVal}
                          suffix="+"
                        />
                      </span>
                      {heroData?.countUpText}
                    </span>
                  </div>
                </div>

                <div
                  dangerouslySetInnerHTML={{ __html: heroData?.heroTagline }}
                />
                <p className="text-sm lg:text-base leading-5 text-[#E9E9E9] block text-center lg:max-w-[750px]">
                  {heroData?.subTitle}
                  {heroData?.subTitleBOldText && (
                    <span className="font-semibold tracking-wider">
                      {heroData?.subTitleBOldText}.
                    </span>
                  )}
                </p>

                <Link
                  to={heroData?.checkout}
                  className="w-[80%] mx-auto md:ml-0 md:max-w-[300px]"
                >
                  <JoinButton1
                    title={heroData?.joinBtnText}
                    className="bg-[#00CB7F] btn-shine"
                  />
                </Link>
                <div className="flex items-center justify-start gap-3">
                  <div className="w-full h-full max-w-32">
                    <img
                    alt="rating"
                      src={ratingview}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-full flex flex-col items-start justify-start gap-1">
                    <div className="flex justify-around inter gap-[5px]">
                      {stars}
                    </div>
                    <span className="text-[#FFB800] leading-[19px] text-[15px]">
                      4.7 (256+)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Syllabus data={data} />
        </div>
      </Container>
      <MediaIcon />
      <Container>
        <div className="w-full max-w-[990px] mx-auto gap-14 flex flex-col">
          <div className="relative overflow-hidden cursor-pointer hover:scale-[1.03] transition-all duration-[0.3s] ease-out">
            <iframe
              src={heroData?.videoLink}
              className="wistia_embed w-full h-full aspect-video"
            ></iframe>
          </div>
          <Link
            to={heroData?.checkout}
            className="w-[80%] mx-auto md:max-w-[300px]"
          >
            <JoinButton1
              title={heroData?.joinBtnText}
              className="bg-[#00CB7F] btn-shine"
            />
          </Link>
        </div>
      </Container>
    </>
  );
};

export default HeroSection;
