import VideoPlayer from "../../components/VideoPlayer";
import { videoDict, VideoStateType } from "@/assets/VideoCollection";
import ControlButton from "../../components/ControlButton";
import useVideoController from "@/hooks/useVideoController";

const App = () => {
  const {
    playerRef,
    currentVideo,
    hide,
    handlePlayerClick,
    onVideoEnd,
    updateCurrentVideo,
  } = useVideoController();

  return (
    <>
      <div onClick={handlePlayerClick}>
        <VideoPlayer
          videoUrl={videoDict[currentVideo as VideoStateType]}
          hide={hide}
          playerRef={playerRef}
          onEnded={onVideoEnd}
        />
      </div>
      <ControlButton
        currentVideo={currentVideo}
        onButtonClick={() =>
          updateCurrentVideo(
            currentVideo === "NotPlaying" ? "Initial" : "NotPlaying"
          )
        }
      />
    </>
  );
};

export default App;
