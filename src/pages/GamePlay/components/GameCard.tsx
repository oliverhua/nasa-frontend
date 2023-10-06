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

const GameCard = ({ imageSrc, hintLeft, hintRight }: GameCardProps) => {
  const { hintStyle, cardStyle, handleMouseDown } = useDraggableCard();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return hintStyle.hintSrc > 0 ? (
    <div>
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
              <p className="text-black text-xl font-bold">Ms. CO2</p>
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
          </CardFooter>
        </Card>
      </div>
      <div>
        <div className="w-full h-full flex flex-col justify-center items-center">
          <Card
            className=" px-20 py-8 mx-2 bg-gray-100 rounded-full"
            isPressable
            style={hintStyle}
          >
            <CardBody className="overflow-visible p-0 rounded-full">
              <p className="text-xl">{hintRight}</p>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  ) : hintStyle.hintSrc < 0 ? (
    <div>
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
              <p className="text-black text-xl font-bold">Ms. CO2</p>
            </div>
            <Button
              className="text-tiny"
              color="primary"
              radius="full"
              size="sm"
            >
              <BiBarChartSquare size={24} />
              Infographs
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div>
        <div className="w-full h-full flex flex-col justify-center items-center">
          <Card
            className=" px-20 py-8 mx-2 bg-gray-100 rounded-full"
            isPressable
            style={hintStyle}
          >
            <CardBody className="overflow-visible p-0 rounded-full">
              <p className="text-xl">{hintLeft}</p>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  ) : (
    <div>
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
              <p className="text-black text-xl font-bold">Ms. CO2</p>
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
                    <ModalHeader className="flex flex-col gap-1">
                      Info
                    </ModalHeader>
                    <ModalBody>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam pulvinar risus non risus hendrerit venenatis.
                        Pellentesque sit amet hendrerit risus, sed porttitor
                        quam.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam pulvinar risus non risus hendrerit venenatis.
                        Pellentesque sit amet hendrerit risus, sed porttitor
                        quam.
                      </p>
                      <p>
                        Magna exercitation reprehenderit magna aute tempor
                        cupidatat consequat elit dolor adipisicing. Mollit dolor
                        eiusmod sunt ex incididunt cillum quis. Velit duis sit
                        officia eiusmod Lorem aliqua enim laboris do dolor
                        eiusmod. Et mollit incididunt nisi consectetur esse
                        laborum eiusmod pariatur proident Lorem eiusmod et.
                        Culpa deserunt nostrud ad veniam.
                      </p>
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
      <div>
        <div className="w-full h-full flex flex-col justify-center items-center">
          <Card
            className=" px-20 py-8 mx-2 bg-gray-100 rounded-full"
            isPressable
            style={hintStyle}
          >
            <CardBody className="overflow-hidden p-0 rounded-full">
              <p className="text-xl">Think wisely</p>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
