import VideoPlayer from "./components/VideoPlayer";
import { videoDict, VideoStateType } from "@/assets/VideoCollection";
import ControlButton from "./components/ControlButton";
import useVideoController from "@/hooks/useVideoController";
import { useParams } from "react-router-dom";

const App = () => {
  const { videoName } = useParams<{ videoName: VideoStateType }>();
  const videoToPlay = videoName ?? "NotPlaying";
  const { playerRef, currentVideo, hide, onVideoEnd } =
    useVideoController(videoToPlay);

  return (
    <>
      <div
        className="w-screen h-screen flex justify-center items-center"
        // onClick={handlePlayerClick}
      >
        <VideoPlayer
          videoUrl={videoDict[currentVideo]}
          hide={hide}
          playerRef={playerRef}
          onEnded={onVideoEnd}
        />
      </div>
      <ControlButton onButtonClick={onVideoEnd} />
    </>
  );
};

export default App;
