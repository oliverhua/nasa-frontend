import React from "react";
import ReactPlayer from "react-player";
import { videoDict, VideoStateType } from "../../../assets/VideoCollection";
interface VideoPlayerProps {
  hide: boolean;
  videoUrl: string;
  playerRef: React.RefObject<ReactPlayer>;
  onEnded: () => void;
}

export const preloadVideo = (videoName: VideoStateType) => {
  if (videoDict[videoName]) {
    const videoElement = document.createElement("video");
    videoElement.preload = "auto";
    videoElement.src = videoDict[videoName];
  }
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoUrl,
  playerRef,
  onEnded,
}) => {
  return (
    <ReactPlayer
      playing={true}
      ref={playerRef}
      url={videoUrl}
      width="100%"
      height="100%"
      playbackRate={1}
      loop={false}
      muted={false}
      onEnded={onEnded}
    />
  );
};

export function IconReplay() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
      <path d="M12 5V1L7 6l5 5V7a6 6 0 016 6 6 6 0 01-6 6 6 6 0 01-6-6H4a8 8 0 008 8 8 8 0 008-8 8 8 0 00-8-8z" />
    </svg>
  );
}

export default VideoPlayer;
