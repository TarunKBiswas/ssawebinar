import icon from "../../../assets/play.svg";

const Play = () => {
  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-14 h-14 lg:w-16 lg:h-16">
      <div className="relative rounded-full border-red-100 backdrop-blur-sm bg-gradient-to-tr from-[#4E5FFF]/80 via-[#85A1FF]/80 to-[#3DADFF]/80 w-full h-full flex items-center justify-center">
        <div className="relative flex w-[70%] h-[70%] bg-white/50 rounded-full items-center justify-center">
          <img src={icon} className="w-[35%]" />
        </div>
      </div>
    </div>
  );
};

export default Play;
