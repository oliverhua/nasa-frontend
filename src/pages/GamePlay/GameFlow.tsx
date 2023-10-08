import { useState, useEffect } from "react";
import GameCard from "./components/GameCard";
import { useLevel } from "@/contexts/LevelContext";
import Arrows from "./components/Arrows";
import { levelData } from "@/assets/Storyline";
import ChoiceCard from "./components/ChoiceCard";
import QuestionCard from "./components/QuestionCard";
import InformationModal from "./components/InformationModal";
import { useDisclosureContext } from "@/contexts/DisclosureContext";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Image,
  Card,
  CardBody,
  CardHeader,
} from "@nextui-org/react";
import { InfoType, infoDict } from "@/assets/InfoMediaCollection";

import "./stateChart.css";
import { useChoice } from "@/contexts/ChoiceContext";
export default function GameFlow() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isInformationOpen } = useDisclosureContext();
  const { level, leftChoice, rightChoice } = useLevel();
  const [informationMessage, setInformationMessage] = useState<string>("");
  const [informationMedia, setInformationMedia] = useState<string>("");
  const data = levelData[level];
  const gameCardOpacityClass = isInformationOpen ? "opacity-0" : "opacity-100";
  const { lastChoice } = useChoice();
  useEffect(() => {
    if (!lastChoice) return;
    console.log(lastChoice);
    const message =
      lastChoice === "left"
        ? leftChoice.informationMessage
        : rightChoice.informationMessage;
    const edge = lastChoice === "left" ? leftChoice.edgeID : rightChoice.edgeID;
    const media = infoDict[`info${edge}` as InfoType] ?? null;

    setInformationMessage(message);
    setInformationMedia(media);

    console.log(edge, media);
  }, [lastChoice]);

  const [state, setState] = useState({
    message: data.message,
    imageSrc: data.imageSrc,
    cardName: data.cardName,
    iconImage: data.iconImage,
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
        iconImage: data.iconImage,

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
      <InformationModal
        message={informationMessage}
        mediaSrc={informationMedia}
      />
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
      <Card className="bg-gray-300 right-0 absolute bottom-0 rounded-full justify-center">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <Button
            size="sm"
            radius="full"
            variant="light"
            className="text-tiny uppercase font-bold"
            onPress={onOpen}
          >
            Map
          </Button>
        </CardHeader>
        <CardBody className="overflow-visible flex flex-row py-2 justify-center">
          <Image
            alt="Card background"
            src={levelData[state.leftChoice.id].iconImage}
          />
          <div className="arrow-1"></div>
          <Image alt="Card background" src={state.iconImage} />
          <div className="arrow-12"></div>
          <Image
            alt="Card background"
            src={levelData[state.rightChoice.id].iconImage}
          />
        </CardBody>
      </Card>
      <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody className="relative">
                <Image src="./src/assets/images/StageCard.svg" />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
