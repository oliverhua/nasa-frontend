import React, { useState, useEffect } from "react";
import GameCard from "./components/GameCard";
import { useLevel } from "@/contexts/LevelContext";

import { levelData } from "@/assets/Storyline";
// import {hintData} from "@/assets/Storyline";
interface GameFlowProps {
  // level: number;
}
export default function GameFlow({}: GameFlowProps): JSX.Element {
  const { level } = useLevel();
  const data = levelData[level];
  const [fadeIn, setFadeIn] = useState(true);
  const [currentMessage, setCurrentMessage] = useState(data.message);

  useEffect(() => {
    setFadeIn(false); // initially set to fade out
    const timer = setTimeout(() => {
      setCurrentMessage(data.message); // change the message
      setFadeIn(true); // after a delay, set to fade in
    }, 300); // adjust the delay as per your preference

    // Cleanup function to clear the timeout
    return () => clearTimeout(timer);
  }, [data.message]);

  if (!data) {
    return <p>Invalid level</p>;
  }
  const src_prop = {
    image_src: data.imageSrc,
    Hint_left: data.Hint_left,
    Hint_right: data.Hint_right

  }
  return (
    <div>
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div className="h-32 w-4/6 flex justify-center items-center">
        {/* Conditional rendering for the fade effect using Tailwind classes */}
        <p
          className={`font-mono text-3xl transition-opacity duration-150 ease-in-out ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
        >
          {currentMessage}
        </p>
      </div>
      </div>
      <div >
        <GameCard image_src={src_prop.image_src} Hint_left={src_prop.Hint_left} Hint_right={src_prop.Hint_right} />
      </div>
    
    </div>
  );
}
