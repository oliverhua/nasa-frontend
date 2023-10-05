import GameFlow from "./GameFlow";
import Topbar from "./Topbar";
import GameProgress from "./components/GameProgress";

export default function Play() {
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      <div className="h-40 bg-yellow-950">
        <Topbar />
      </div>
      <div className="flex-grow bg-[#bcbb69] overflow-y-auto scrollbar-hide">
        <GameFlow />
      </div>
      <div className="h-32 bg-slate-800">
        <GameProgress />
      </div>
    </div>
  );
}
