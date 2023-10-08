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
  Progress,
} from "@nextui-org/react";
import { InfoType, infoDict } from "@/assets/InfoMediaCollection";
import useDraggableCard from "@/hooks/useDraggableCard";
import "./stateChart.css";
import { useChoice } from "@/contexts/ChoiceContext";
import { characterDict } from "@/assets/CharacterCollection";

export default function GameFlow() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isInformationOpen } = useDisclosureContext();
  const { level, leftChoice, rightChoice } = useLevel();
  const [informationMessage, setInformationMessage] = useState<string>("");
  const [informationMedia, setInformationMedia] = useState<string>("");
  const data = levelData[level];
  const gameCardOpacityClass = isInformationOpen ? "opacity-0" : "opacity-100";
  const { lastChoice } = useChoice();
  
  const { op } = useDraggableCard();
  const [leftIcon, setLeftIcon] = useState('');
  const [rightIcon, setRightIcon] = useState('');
  const [StateSrcOne, setStateSrcOne] = useState('./src/assets/images/StateImages/GAS_inactive.svg');
  const [StateSrcTwo, setStateSrcTwo] = useState('./src/assets/images/StateImages/GAS_inactive.svg');
  const [StateSrcThree, setStateSrcThree] = useState('./src/assets/images/StateImages/GAS_inactive.svg');
  
  const [waterState, setwaterState] = useState("");
  useEffect(() => {
    // setIconOpacity(IconStyle.opacity);
    if (!lastChoice) return;
    const message =
      lastChoice === "left"
        ? leftChoice.informationMessage
        : rightChoice.informationMessage;
    const edge = lastChoice === "left" ? leftChoice.edgeID : rightChoice.edgeID;
    const media = infoDict[`info${edge}` as InfoType] ?? null;

    setInformationMessage(message);
    setInformationMedia(media);
    setStateSrcOne('./src/assets/images/StateImages/GAS_inactive.svg');
    setStateSrcTwo('./src/assets/images/StateImages/LIQUID_active.svg');
    setStateSrcThree('./src/assets/images/StateImages/SOLID_inactive.svg');
    
  }, [lastChoice]);


  const [state, setState] = useState({
    message: data.message,
    imageSrc: characterDict[`ch${level}`],
    cardName: data.cardName,
    iconImage: data.iconImage,
    dataState: data.substanceState,
    leftChoice: leftChoice,
    rightChoice: rightChoice,
    fadeIn: true,
  });

  console.log(state.imageSrc);
  useEffect(() => {
    if (isInformationOpen) return;

    setState((prevState) => ({
      ...prevState,
      fadeIn: false,
    }));

    setTimeout(() => {
      setState({
        message: data.message,
        imageSrc: characterDict[`ch${level}`],
        cardName: data.cardName,
        iconImage: data.iconImage,
        dataState: data.substanceState,
        leftChoice: leftChoice,
        rightChoice: rightChoice,
        fadeIn: true,
      });
      setLeftIcon(levelData[leftChoice.id].iconImage);
      setRightIcon(levelData[rightChoice.id].iconImage);
      if(levelData[level].substanceState === 'liquid'){
        setStateSrcOne('./src/assets/images/StateImages/GAS_inactive_new.svg')
        setStateSrcTwo('./src/assets/images/StateImages/LIQUID_active_new.svg')
        setStateSrcThree('./src/assets/images/StateImages/SOLID_inactive_new.svg')
      }
      else if(levelData[level].substanceState === 'gas'){
        setStateSrcOne('./src/assets/images/StateImages/GAS_active_new.svg')
        setStateSrcTwo('./src/assets/images/StateImages/LIQUID_inactive_new.svg')
        setStateSrcThree('./src/assets/images/StateImages/SOLID_inactive_new.svg')
      }
      else{
        setStateSrcOne('./src/assets/images/StateImages/GAS_inactive_new.svg')
        setStateSrcTwo('./src/assets/images/StateImages/LIQUID_inactive_new.svg')
        setStateSrcThree('./src/assets/images/StateImages/SOLID_active_new.svg')
      }
      
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
      <div className="justify-between">
      <Card className="bg-gray-300 w-64 h-24 z-10 right-0 absolute bottom-0 rounded-none justify-center" isPressable onPress={onOpen}>
        <CardHeader className="pb-0 pt-5 px-1 items-start">
          <Button size="sm" radius="full" variant="light" className="text-tiny uppercase font-bold" >Map</Button>
        </CardHeader>
        <CardBody className="overflow-visible flex flex-row py-2 justify-center" >
          <Image
            className="w-20 h-20"
            alt="Card background"
            src={ leftIcon }
          />
          <div className={`arrow-1 opacity-${op}`} ></div>
          <Image
            className="w-20 h-20"
            alt="Card background"
            src={state.iconImage}
          />
          <div className={`arrow-12 opacity-${op}`}></div>
          <Image
            className="w-20 h-20"
            alt="Card background"
            src={ rightIcon }
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
      <Card className="bg-gray-300 w-64 h-24 z-10 left-0 absolute bottom-0 rounded-none justify-center">
        <CardHeader className="pb-0 pt-5 px-1 items-start">
          <Button size="sm" radius="full" variant="light" className="text-tiny uppercase font-bold" >state</Button>
        </CardHeader>
        <CardBody className="overflow-visible flex flex-row py-2 justify-center" >
          
          <Image
            className="w-20 h-20"
            alt="Card background"
            src={ StateSrcOne }
          />
          
          <Image
            className="w-20 h-20"
            alt="Card background"
            src={StateSrcTwo}
          />
          
          <Image
            className="w-20 h-20"
            alt="Card background"
            src={ StateSrcThree }
          />
        </CardBody>
    </Card>
    {/* <div className="absolute bottom-0 right-4"> */}
      <Progress className="absolute bottom-0 right-4" size="lg" aria-label="Loading..." value={50} />
    {/* </div> */}
    </div>
    </>
  );
}
