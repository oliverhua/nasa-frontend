import { useState, useEffect } from "react";
import GameCard from "./components/GameCard";
import { useLevel } from "@/contexts/LevelContext";
import Arrows from "./components/Arrows";
import { levelData } from "@/assets/Storyline";

export default function GameFlow(): JSX.Element {
  const { level } = useLevel();
  const data = levelData[level];
  const [fadeIn, setFadeIn] = useState(true);
  const [currentMessage, setCurrentMessage] = useState(data.message);

  useEffect(() => {
    setFadeIn(false);
    const timer = setTimeout(() => {
      setCurrentMessage(data.message);
      setFadeIn(true);
    }, 300);

    return () => clearTimeout(timer);
  }, [data.message]);

  if (!data) {
    return <p>Invalid level</p>;
  }
  return (
    <>
      <Arrows />

      <div className="h-full w-full flex flex-col justify-center items-center">
        <div className="h-32 w-4/6 flex justify-center items-center">
          <p
            className={`font-mono text-3xl transition-opacity duration-150 ease-in-out ${
              fadeIn ? "opacity-100" : "opacity-0"
            }`}
          >
            {currentMessage}
          </p>
        </div>

        <GameCard
          imageSrc={data.imageSrc}
          hintLeft={data.hintLeft}
          hintRight={data.hintRight}
        />
      </div>
    </>
  );
}
