import { Card, Image , CardBody} from "@nextui-org/react";
import useDraggableCard from "@/hooks/useDraggableCard";
// import useHint from "@hooks/useHint";
// import { useLevel } from "@/contexts/LevelContext";

interface GameCardProps {
  image_src: string;
  Hint_left: string;
  Hint_right: string;
}

const GameCard = ({image_src, Hint_left, Hint_right}: GameCardProps) => {
  const { HintStyle ,cardStyle, handleMouseDown } = useDraggableCard();
  return(
  HintStyle.hint_src>0?
  (
    <div >
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
        src={image_src}
      />
    </Card>
    </div>
    <div>
        <div className="w-full h-full flex flex-col justify-center items-center">
          <Card 
          className=" px-20 py-4 mx-2 bg-gray-300 rounded"
          isPressable 
          style={HintStyle}>
            <CardBody className="overflow-visible p-0">
              <p>{Hint_right}</p>
            </CardBody>
          </Card>
          </div>
        </div>
    </div>
  ):HintStyle.hint_src<0?(
    <div >
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
        src={image_src}
      />
    </Card>
    </div>
    <div>
        <div className="w-full h-full flex flex-col justify-center items-center">
          <Card 
          className=" px-20 py-4 mx-2 bg-gray-300 rounded"
          isPressable 
          style={HintStyle}>
            <CardBody className="overflow-visible p-0">
              <p>{Hint_left}</p>
            </CardBody>
          </Card>
          </div>
        </div>
    </div>
  ):(<div >
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
        src={image_src}
      />
    </Card>
    </div>
    <div>
        <div className="w-full h-full flex flex-col justify-center items-center">
          <Card 
          className=" px-20 py-4 mx-2 bg-gray-300 rounded"
          isPressable 
          style={HintStyle}>
            <CardBody className="overflow-visible p-0">
              <p>Think wisely</p>
            </CardBody>
          </Card>
          </div>
        </div>
    </div>));
};

export default GameCard;
