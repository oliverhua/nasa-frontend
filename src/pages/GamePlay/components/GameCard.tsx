import {
  Card,
  Image,
  CardFooter,
  Button,
  CardBody,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import useDraggableCard from "@/hooks/useDraggableCard";
import { BiBarChartSquare } from "react-icons/bi";

interface GameCardProps {
  imageSrc: string;
  hintLeft: string;
  hintRight: string;
}

interface HintCardProps {
  text: string;
  style: React.CSSProperties;
}

const HintCard = ({ text, style }: HintCardProps) => (
  <div className="w-full h-full flex flex-col justify-center items-center">
    <Card
      className="px-20 py-8 mx-2 bg-gray-100 rounded-full z-10"
      isPressable
      style={style}
    >
      <CardBody className="overflow-visible p-0 rounded-full">
        <p className="text-xl">{text}</p>
      </CardBody>
    </Card>
  </div>
);

interface MainCardProps {
  cardName: string;
  imageSrc: string;
  cardStyle: React.CSSProperties;
  handleMouseDown: (event: React.MouseEvent<HTMLDivElement>) => void;
  onOpen: () => void;
  isOpen: boolean;
  onOpenChange: () => void;
}

const MainCard = ({
  cardName,
  imageSrc,
  cardStyle,
  handleMouseDown,
  onOpen,
  isOpen,
  onOpenChange,
}: MainCardProps) => (
  <div className="w-full h-full mt-24 flex flex-col justify-center items-center">
    <Card
      isFooterBlurred
      className="w-80 h-69 col-span-12 sm:col-span-5"
      style={cardStyle}
      onMouseDown={handleMouseDown}
    >
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-100 object-cover"
        src={imageSrc}
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-black text-xl font-bold">{cardName}</p>
        </div>
        <Button
          className="text-tiny"
          color="primary"
          radius="full"
          size="sm"
          onPress={onOpen}
        >
          <BiBarChartSquare size={24} />
          Infographs
        </Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Info</ModalHeader>
                <ModalBody>
                  <p>Lorem ipsum dolor sit amet,</p>
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
      </CardFooter>
    </Card>
  </div>
);

const GameCard = ({ imageSrc, hintLeft, hintRight }: GameCardProps) => {
  const { hintStyle, cardStyle, handleMouseDown } = useDraggableCard();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const hintToDisplay = hintStyle.hintSrc >= 0 ? hintRight : hintLeft;

  return (
    <>
    <HintCard text={hintToDisplay} style={hintStyle} />
    <HintCard text={hintToDisplay} style={hintStyle} />
      <MainCard
        cardName="Ms.CO2"
        imageSrc={imageSrc}
        cardStyle={cardStyle}
        handleMouseDown={handleMouseDown}
        onOpen={onOpen}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
      {/* <HintCard text={hintToDisplay} style={hintStyle} /> */}
    </>
  );
};

export default GameCard;
