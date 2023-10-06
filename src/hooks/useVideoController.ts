import { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import { VideoStateType, videoDict } from "@/assets/VideoCollection";
// import { fetchAnswerData, fetchPlaceData, sendTimeoutSignal } from "./Client";
import { preloadVideo } from "@/components/VideoPlayer";

const useVideoController = () => {
  const playerRef = useRef<ReactPlayer>(null);
  const [currentVideo, setCurrentVideo] =
    useState<VideoStateType>("NotPlaying");
  const [hide, setHide] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);

  const switchVideo = (video: VideoStateType) => {
    preloadVideo(video);
    setHide(true);
    setTimeout(() => {
      setCurrentVideo(video);
      playerRef.current?.seekTo(0);
      setHide(false);
    }, 1000);
  };

  const onEnd = () => {
    // if ((currentVideo === "NormalMission" || currentVideo === "PlaceTrash") && !hasClicked) {
    //   sendTimeoutSignal();
    // }
    switchVideo("Initial");
  };

  // const fetchPlaceResult = async () => {
  //   const { answer } = await fetchPlaceData() || {};
  //   // switchVideo(answer === "ThinFilmPaperCup" ? "SpecialMission" : "NormalMission");
  // };

  useEffect(() => {
    setHasClicked(false);
    // if (currentVideo === "PlaceTrash") fetchPlaceResult();
  }, [currentVideo]);

  // const handleMissionClick = async (selection: "left" | "right") => {
  //   const { answer, is_correct } = await fetchAnswerData(selection) || {};
  //   const videoName = `${answer}${is_correct ? "Success" : "Failed"}` as VideoStateType;
  //   if (videoDict[videoName]) switchVideo(videoName);
  //   else console.error("Invalid video name!");
  // };

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const currentTime = playerRef.current?.getCurrentTime();
    if (!currentTime) return;

    const percentage =
      ((e.clientX - e.currentTarget.getBoundingClientRect().left) /
        e.currentTarget.offsetWidth) *
      100;
    const selection =
      percentage > 51 ? "right" : percentage < 49 ? "left" : "middle";

    // if (currentVideo === "Initial") {
    //   switchVideo("PlaceTrash");
    // } else if (currentVideo === "NormalMission" && currentTime >= 21 && !hasClicked && selection !== "middle") {
    //   setHasClicked(true);
    //   handleMissionClick(selection);
    // } else if (currentVideo === "PlaceTrash") {
    //   window.location.href = "https://www.google.com";
    // }
  };

  return {
    playerRef,
    currentVideo,
    hide,
    handlePlayerClick: onClick,
    onVideoEnd: onEnd,
    updateCurrentVideo: switchVideo,
  };
};

export default useVideoController;
