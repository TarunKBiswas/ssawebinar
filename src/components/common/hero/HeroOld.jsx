/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa6";
import Container from "../ui/Container";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { JoinButton } from "../ui/Buttons";

let stars = [];

for (let index = 0; index < 5; index++) {
  stars.push(
    <FaStar
      key={`m${index}`}
      className="fill-[#FFB800] h-5 w-5 lg:h-6 lg:w-6"
    />
  );
}

const HeroOld = ({ data }) => {
  const titleWithRedText = data?.title?.replace(/\*(.*?)\*/, (match, p1) => {
    return `<span class="text-red-600">${p1}</span>`;
  });

  return (
    <Container>
      <div className="max-w-[990px] m-auto w-full flex flex-col items-center justify-between text-center">
        <div className="w-full flex flex-col items-center lg:gap-[50px] first:lg:gap-6 gap-[30px] text-white">
          <div className="border-blue-200/30 rounded-full bg-blue-200/10 border">
            <div className="bg-gradient-to-r from-[#4E5FFF1A] to-[#FF646433] py-[4px] px-[16px] rounded-full">
              <span className="flex gap-2 bg-transparent text-[14px] inter p-1">
                <CountUp
                  duration={5}
                  end={data?.countUpVal}
                  suffix={`${data?.countUpSuffix}`}
                />
                {data?.countUpText}
              </span>
            </div>
          </div>

          <div className="w-full max-w-[800px] flex flex-col items-center gap-4 lg:gap-6">
            <span
              className="text-[24px] lg:text-[55px] lg:leading-[60px] leading-9 font-semibold text-center max-w-[90%] text-[#F5F5F5] capitalize"
              dangerouslySetInnerHTML={{ __html: titleWithRedText }}
            ></span>

            <p className="text-sm lg:text-base leading-5 mx-4 lg:mx-auto text-[#E9E9E9] block text-center lg:max-w-[750px]">
              {data?.subTitle}
              <span className="font-semibold tracking-wider">
                Lakshit Sethiya
              </span>
              .
            </p>
          </div>

          <div className="w-full">
            <div className="relative overflow-hidden cursor-pointer hover:scale-[1.03] transition-all duration-[0.3s] ease-out">
              <iframe
                src={data?.videoLink}
                className="wistia_embed w-full h-full aspect-video"
              ></iframe>
            </div>
          </div>

          {/* Mobile View */}
          <div className="w-full flex flex-col items-center gap-8">
            <div className="w-full flex items-center justify-center gap-4">
              <div className="flex justify-around inter gap-[5px]">{stars}</div>
              <span className="text-[#FFB800] leading-[19px] text-[16px]">
                4.7 (256+)
              </span>
            </div>
            <Link to={data?.checkout} className="w-[90%] max-w-[340px] m-auto">
              <JoinButton
                title={data?.joinBtnText}
                size={"w-full"}
                padding={"py-[25px] !px-[35px] !text-[18px] !font-bold"}
                classes={"!from-[#4E5FFF] !via-[#85A1FF] !to-[#3DADFF]"}
              />
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeroOld;
