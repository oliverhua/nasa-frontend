import { useState, useEffect } from "react";
import GameCard from "./components/GameCard";
import { useLevel } from "@/contexts/LevelContext";
import Arrows from "./components/Arrows";
import { levelData } from "@/assets/Storyline";
import ChoiceCard from "./components/ChoiceCard";
import QuestionCard from "./components/QuestionCard";
import InformationModal from "./components/InformationModal";
import { useDisclosureContext } from "@/contexts/DisclosureContext";
import useDraggableCard from "@/hooks/useDraggableCard";

export default function GameFlow() {
  const { isInformationOpen } = useDisclosureContext();
  const { level, leftChoice, rightChoice } = useLevel();
  const [informationMessage, setInformationMessage] = useState<string>("");
  const data = levelData[level];
  const gameCardOpacityClass = isInformationOpen ? "opacity-0" : "opacity-100";

  const { choice } = useDraggableCard();
  useEffect(() => {
    const message =
      choice === "left"
        ? leftChoice.informationMessage
        : rightChoice.informationMessage;
    setInformationMessage(message);
  }, [choice]);
  const [state, setState] = useState({
    message: data.message,
    imageSrc: data.imageSrc,
    cardName: data.cardName,

    leftChoice: leftChoice,
    rightChoice: rightChoice,
    fadeIn: true,
  });

  useEffect(() => {
    if (isInformationOpen) return;

    setState((prevState) => ({
      ...prevState,
      fadeIn: false,
    }));

    setTimeout(() => {
      setState({
        message: data.message,
        imageSrc: data.imageSrc,
        cardName: data.cardName,
        leftChoice: leftChoice,
        rightChoice: rightChoice,
        fadeIn: true,
      });
    }, 300);
  }, [level, isInformationOpen]);

  if (!data) {
    return <p>Invalid level</p>;
  }

  return (
    <>
      <Arrows />
      <InformationModal message={informationMessage} />
      <div className="h-full w-full flex flex-col justify-center items-center">
        <div className="h-32 w-4/6 flex justify-center items-center">
          <QuestionCard message={state.message} fadeIn={state.fadeIn} />
        </div>
        <div className="w-full flex flex-row justify-center items-center">
          <div className="flex flex-1 z-10 ml-10 justify-center items-center">
            <ChoiceCard
              message={state.leftChoice.choiceMessage}
              fadeIn={state.fadeIn}
            />
          </div>
          <div
            className={`flex-1 z-20 mx-48 transition-opacity duration-300 ease-in-out ${
              state.fadeIn ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className={`transition-opacity duration-1000 ease-in-out ${gameCardOpacityClass}`}
            >
              <GameCard imageSrc={state.imageSrc} cardName={state.cardName} />
            </div>
          </div>
          <div className="flex flex-1 z-10 mr-10 justify-center items-center">
            <ChoiceCard
              message={state.rightChoice.choiceMessage}
              fadeIn={state.fadeIn}
            />
          </div>
        </div>
      </div>
    </>
  );
}
