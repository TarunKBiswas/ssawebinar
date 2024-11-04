/* eslint-disable react/prop-types */
import TransparentCard from "../ui/TransparentCard";

const VideoCard = ({ data }) => {
  return (
    <TransparentCard>
      <div className="flex flex-col gap-2 w-full">
        <iframe
          src={data?.link}
          className="wistia_embed w-full rounded-xl overflow-hidden min-h-[450px]"
        ></iframe>
        <div
          className={`testimonial-card w-full max-w-[350px] mx-auto text-center md:w-full md:max-w-md`}
        >
          <p className="font-semibold">{data?.profile}</p>
          <h3 className="font-semibold h-full">{data?.name}</h3>
        </div>
      </div>
    </TransparentCard>
  );
};

export default VideoCard;
