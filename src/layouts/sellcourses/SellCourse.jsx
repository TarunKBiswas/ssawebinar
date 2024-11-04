import { useSnapshot } from "valtio";
import { state } from "../../constants/common/state";
import Navbar from "../../components/common/navbar/Navbar";
import HeroSection from "../../components/common/hero/HeroSection";
import Pointers from "../../components/common/pointers/Pointers";
import FirstStep from "../../components/common/steps/FirstStep";
import Testimony from "../../components/common/testimony/Testimony";
import OurCoach from "../../components/common/coach/OurCoach";
import CmAward from "../../components/common/awards/CmAward";
import ImgGrid from "../../components/common/gallery/ImgGrid";
import NewsReviews from "../../components/common/news/NewsReviews";
import VideoLink from "../../components/common/videolink/VideoLink";
import Faq from "../../components/common/faq/Faq";
import Footer from "../../components/common/footer/Footer";
import VideoPlayer from "../../components/common/videolink/VideoPlayer";
import { Link } from "react-router-dom";
import { JoinButton1 } from "../../components/common/ui/Buttons";
import { brandImages, otherAwards, socialHandle, syllabusData, teamImages } from "../../constants/common/MenuData";
import { heroData, learningData, stepsData, videoData } from "../../constants/sellCoursesData";

const SellCourse = () => {
  const snap = useSnapshot(state);

  return (
    <div className="w-full h-screen flex flex-col gap-14 lg:gap-[100px] first:lg:gap-16 text-center overflow-auto">
      <Navbar />
      <HeroSection data={syllabusData?.instaClass} heroData={heroData} />
      <Pointers data={learningData} />
      <FirstStep data={stepsData} />
      <Testimony />
      <OurCoach />
      <CmAward />
      <ImgGrid
        data={otherAwards}
        title="Other Awards & Recognition"
        desc="We take pride in the honors received by us for our exceptional achievements and contributions to empowering online sellers and fostering a thriving community."
      />

      <ImgGrid data={teamImages} title="Meet our social seller team" />
      <NewsReviews />
      <ImgGrid title="Our Socialmedia Handle" data={socialHandle} gridCount={"md:grid-cols-2"} />
      <VideoLink videoDet={videoData} checkoutLink={heroData?.checkout} />

      <ImgGrid
        gridCount={"grid-cols-3 md:grid-cols-4"}
        data={brandImages}
        title="Premium E-commerce brands are our clients"
        desc="We collaborate with clients all over the world, providing international services and expertise"
      />
      <Faq />
      <Link
        to={heroData?.checkout}
        className="w-[80%] mx-auto md:max-w-[300px]"
      >
        <JoinButton1
          title={"Register Now at ₹199 only"}
          className="bg-[#00CB7F] btn-shine"
        />
      </Link>

      <Footer />
      {snap.videoModal ? <VideoPlayer /> : null}
    </div>
  );
};

export default SellCourse;
