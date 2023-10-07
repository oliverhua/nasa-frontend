import { useState, useEffect } from "react";
import GameCard from "./components/GameCard";
import { useLevel } from "@/contexts/LevelContext";
import Arrows from "./components/Arrows";
import { levelData } from "@/assets/Storyline";
import ChoiceCard from "./components/ChoiceCard";
import QuestionCard from "./components/QuestionCard";
export default function GameFlow() {
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
          <QuestionCard message={currentMessage} fadeIn={fadeIn} />
        </div>
        <div className="flex flex-row justify-center items-center">
          <div className="z-10 w-1/4 ml-10">
            <ChoiceCard message={data.choiceLeft} fadeIn={fadeIn} />
          </div>
          <div className="z-20 mx-48">
            <GameCard imageSrc={data.imageSrc} cardName={data.cardName} />
          </div>
          <div className="z-10 w-1/4 mr-10">
            <ChoiceCard message={data.choiceRight} fadeIn={fadeIn} />
          </div>
        </div>
      </div>
    </>
  );
}
