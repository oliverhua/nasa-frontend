import GameFlow from "./GameFlow";
import GameProgress from "./components/GameProgress";
// import GameBackground from "../../assets/images/StageCardImage/Stage=Cloud.png"

export default function Play() {
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-center rounded-none bg-cover bg-[url('./src/assets/images/StageCardImage/Stage=Cloud.png')]">
      <div className="h-24"></div>
      <div className="flex-grow overflow-y-auto scrollbar-hide">
        <GameFlow />
      </div>
      <div className="h-40">{/* <GameProgress /> */}</div>
    </div>
  );
}
