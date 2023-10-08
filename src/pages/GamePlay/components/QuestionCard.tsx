import { Card, CardBody } from "@nextui-org/react";

interface QuestionCardType {
  fadeIn: boolean;
  message: string;
}
export default function QuestionCard({ fadeIn, message }: QuestionCardType) {
  return (
    <div
      className={`transition-opacity duration-150 ease-in-out ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      <Card>
        <CardBody>
          <p className="font-mono text-3xl font-black ">{message}</p>
        </CardBody>
      </Card>
    </div>
  );
}
