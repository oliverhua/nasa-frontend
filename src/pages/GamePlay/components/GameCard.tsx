import { Card, Image, CardFooter, CardBody, Divider } from "@nextui-org/react";
import React, { useState, useEffect } from "react";

import { useDisclosureContext } from "@/contexts/DisclosureContext";
import useDraggableCard from "@/hooks/useDraggableCard";
interface GameCardProps {
  imageSrc: string;
  cardName: string;
}

interface MainCardProps {
  cardName: string;
  imageSrc: string;
  cardStyle: React.CSSProperties;
  handleMouseDown: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const MainCard = ({
  cardName,
  imageSrc,
  cardStyle,
  handleMouseDown,
}: MainCardProps) => (
  <div className="z-20 w-full h-full py-4 flex flex-col justify-center items-center">
    <Card
      className="w-80 h-96 col-span-12"
      style={cardStyle}
      onMouseDown={handleMouseDown}
    >
      <CardBody className="w-full h-full overflow-visible p-4">
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-100 object-cover"
          src={imageSrc}
        />
      </CardBody>
      <Divider />
      <CardFooter className="flux items-center justify-center py-4">
        <p className="text-black text-xl font-bold">{cardName}</p>
      </CardFooter>
    </Card>
  </div>
);

const GameCard = ({ imageSrc, cardName }: GameCardProps) => {
  const { cardStyle, handleMouseDown } = useDraggableCard();
  const { isInformationOpen } = useDisclosureContext();

  return (
    <MainCard
      cardName={cardName}
      imageSrc={imageSrc}
      cardStyle={cardStyle}
      handleMouseDown={handleMouseDown}
    />
  );
};

export default GameCard;
