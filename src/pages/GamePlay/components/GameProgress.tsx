import { levelData } from "@/assets/Storyline";

import { Progress, Chip } from "@nextui-org/react";
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
      {/* <Chip color="warning" variant="solid">Solid</Chip>
      <Progress
        label={title}
        size="lg"
        value={level - 1}
        maxValue={maxLevel}
        color="success"
        showValueLabel={true}
        />
      <Chip color="warning" variant="bordered">Bordered</Chip>
      <Chip color="warning" variant="light">Light</Chip>
      <Chip color="warning" variant="flat">Flat</Chip>
      <Chip color="warning" variant="faded">Faded</Chip>
      <Chip color="warning" variant="shadow">Shadow</Chip>
      <Chip color="warning" variant="dot">Dot</Chip> */}
    </div>
  );
}
