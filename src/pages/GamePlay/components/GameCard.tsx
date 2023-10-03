import React from "react";
import { Card, Image } from "@nextui-org/react";
import useDraggableCard from "@/hooks/useDraggableCard";

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
    </Card>
  );
};

export default GameCard;
