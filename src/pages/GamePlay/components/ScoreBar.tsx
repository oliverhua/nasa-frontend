import React from "react";
import { Progress } from "@nextui-org/react";



interface ScoreBarProps {
  score: number;
  maxScore: number;
}


const ScoreBar: React.FC<ScoreBarProps> = ({ score, maxScore }) => {
  const percentage = (score / maxScore) * 100;

  return (
    <div className="score-bar">
      <Progress value={percentage} maxValue={100} color="warning"  />
    </div>
  );
};

export default ScoreBar;
