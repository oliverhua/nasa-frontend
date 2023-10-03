import React from "react";
import { IconReplay } from "./VideoPlayer";
import { VideoStateType } from "../assets/VideoCollection";

interface ControlButtonProps {
  currentVideo: VideoStateType;
  onButtonClick: () => void;
}

const ControlButton: React.FC<ControlButtonProps> = ({
  currentVideo,
  onButtonClick,
}) => {
  return (
    <button
      className="fixed bottom-5 left-5 bg-red-500 hover:bg-red-600 text-white w-14 h-14 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 z-50"
      onClick={onButtonClick}
    >
      <span className="block text-xl leading-none">
        {currentVideo === "NotPlaying" ? "▶" : <IconReplay />}
      </span>
    </button>
  );
};

export default ControlButton;
