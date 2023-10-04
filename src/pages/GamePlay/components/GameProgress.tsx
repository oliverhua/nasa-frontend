import { levelData } from "@/assets/Storyline";

import { Progress } from "@nextui-org/react";
import { useLevel } from "@/contexts/LevelContext";
export default function GameProgress() {
  const { level, maxLevel } = useLevel();
  const title = levelData[level].levelTitle;
  return (
    <div className=" h-full bg-yellow-950 flex items-center justify-around">
      <Progress
        label={title}
        size="lg"
        value={level - 1}
        maxValue={maxLevel}
        color="success"
        showValueLabel={true}
        className="max-w-md"
      />
    </div>
  );
}
