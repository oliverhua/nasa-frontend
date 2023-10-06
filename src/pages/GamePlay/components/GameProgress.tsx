// import { levelData } from "@/assets/Storyline";

import { Chip } from "@nextui-org/react";
import { useLevel } from "@/contexts/LevelContext";

export default function GameProgress() {
  const { level } = useLevel();
  // const title = levelData[level].levelTitle;
  return (
    <div className=" h-full bg-yellow-950 flex items-center justify-around">
      {/* <Progress
        label={title}
        size="lg"
        value={level - 1}
        maxValue={maxLevel}
        color="success"
        showValueLabel={true}
        className="max-w-md"
      /> */}
      <div className="flex flex-row items-stretch">
        <Chip className="px-10 py-5 mx-2" color="warning" variant={level==1? "solid":"bordered"}>Rain</Chip>
        <Chip className="px-10 py-5 mx-2" color="warning" variant={level==2? "solid":"bordered"}>River</Chip>
        <Chip className="px-10 py-5 mx-2" color="warning" variant={level==3? "solid":"bordered"}>Gwater</Chip>
        <Chip className="px-10 py-5 mx-2" color="warning" variant={level==4? "solid":"bordered"}>Ocean</Chip>
        <Chip className="px-10 py-5 mx-2" color="warning" variant={level==5? "solid":"bordered"}>Cloud</Chip>
        <Chip className="px-10 py-5 mx-2" color="warning" variant={level==6? "solid":"bordered"}>Snow</Chip>
      </div>
    </div>
  );
}
