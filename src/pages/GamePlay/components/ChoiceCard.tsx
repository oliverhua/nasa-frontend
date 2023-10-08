import { Card, CardBody } from "@nextui-org/react";

interface ChoiceCardType {
  fadeIn: boolean;
  message: string;
}

export default function QuestionCard({ fadeIn, message }: ChoiceCardType) {
  return (
    <div
      className={`transform transition-all duration-300 ease-in-out ${
        fadeIn ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <Card className="w-fit bg-background/50">
        <CardBody>
          <p className="font-mono font-black">{message}</p>
        </CardBody>
      </Card>
    </div>
  );
}
