import React from "react";
import { Card, Image, CardFooter, Button } from "@nextui-org/react";
import useDraggableCard from "@/hooks/useDraggableCard";
import { BiBarChartSquare } from "react-icons/bi";
interface GameCardProps {
  src: string;
}

const GameCard: React.FC<GameCardProps> = ({ src }) => {
  const { cardStyle, handleMouseDown } = useDraggableCard();

  return (
    <Card
      isFooterBlurred
      className="w-full h-full col-span-12 sm:col-span-5"
      style={cardStyle}
      onMouseDown={handleMouseDown}
    >
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-100 object-cover"
        src={src}
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-black text-xl font-bold">Ms. CO2</p>
        </div>
        <Button className="text-tiny" color="primary" radius="full" size="sm">
          <BiBarChartSquare size={24} />
          Infographs
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GameCard;
