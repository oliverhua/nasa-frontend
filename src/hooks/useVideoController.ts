import { useState, useRef } from "react";
import ReactPlayer from "react-player";
import { VideoStateType } from "@/assets/VideoCollection";
import { preloadVideo } from "@/pages/VideoCanva/components/VideoPlayer";

import { useNavigate } from "react-router-dom";
const useVideoController = (videoName: VideoStateType) => {
  const navigate = useNavigate();
  const playerRef = useRef<ReactPlayer>(null);
  const [currentVideo, setCurrentVideo] = useState<VideoStateType>(videoName);
  const [hide, setHide] = useState(false);
  const switchVideo = (video: VideoStateType) => {
    preloadVideo(video);
    setHide(true);
    setTimeout(() => {
      setCurrentVideo(video);
      playerRef.current?.seekTo(0);
      setHide(false);
    }, 1000);
  };

  const onVideoEnd = () => {
    console.log("onVideoEnd", videoName);
    if (videoName === "intro" || videoName === "intro_2") {
      navigate("/play");
    }
  };

  // const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
  //   console.log("onClick");
  //   playerRef.current?.seekTo(0);
  // };

  return {
    playerRef,
    currentVideo,
    hide,
    // handlePlayerClick: onClick,
    onVideoEnd,
    updateCurrentVideo: switchVideo,
  };
};

export default useVideoController;
