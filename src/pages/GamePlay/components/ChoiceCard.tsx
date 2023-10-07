import React from "react";
import { Card, CardBody } from "@nextui-org/react";

interface ChoiceCardType {
  fadeIn: boolean;
  message: string;
}

export default function QuestionCard({ fadeIn, message }: ChoiceCardType) {
  return (
    <div
      className={`transform transition-all duration-500 ease-in-out ${
        fadeIn ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <Card>
        <CardBody>
          <p className="font-mono font-black">{message}</p>
        </CardBody>
      </Card>
    </div>
  );
}
