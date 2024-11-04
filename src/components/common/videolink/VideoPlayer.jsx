import { state } from "../../../constants/common/state";
import { snapshot } from "valtio";

const VideoPlayer = () => {
  const snap = snapshot(state);
  const vdoUrl = snap.vdoUrl;
  return (
    <div
      className=" fixed bg-black/80 flex items-center w-screen h-screen z-10 justify-center top-0 left-0"
      onClick={() => (state.videoModal = false)}
    >
      <div className=" w-full h-full flex items-center justify-center">
        <div className="relative w-11/12 md:w-8/12 m-auto h-auto">
          <iframe
            src={vdoUrl}
            allow="autoplay; fullscreen"
            className="w-full md:min-w-[400px] lg:min-w-[1000px] lg:max-h-[100vh] bg-black/50 lg:m-auto aspect-video rounded-xl lg:rounded-3xl border p-0 border-[#FFFFFF]/15"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
