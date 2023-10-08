import GameFlow from "./GameFlow";
import { useLevel } from "@/contexts/LevelContext";
import { backgroundDict, BackgroundType } from "@/assets/BackGroundCollection";
export default function Play() {
  const { level } = useLevel();
  const bgName = `bg${level}` as BackgroundType;
  return (
    <div
      style={{ "--image-url": `url(${backgroundDict[bgName]})` } as any}
      className={`h-screen w-screen flex flex-col overflow-hidden bg-center rounded-none bg-[image:var(--image-url)] bg-cover transition-all duration-500`}
    >
      <div className="h-24"></div>
      <div className="flex-grow overflow-y-auto scrollbar-hide">
        <GameFlow />
      </div>
      <div className="h-40">{/* <GameProgress /> */}</div>
    </div>
  );
}
