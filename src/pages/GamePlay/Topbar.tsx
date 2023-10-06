// import { IoWater, IoStatsChart } from "react-icons/io5";
// FaTemperatureThreeQuarters;
// import { FaTemperatureThreeQuarters, FaDollarSign } from "react-icons/fa6";

// const icons = {
//   waterVolume: <IoWater size={72} />,
//   waterQuality: <IoStatsChart size={72} />,
//   temperature: <FaTemperatureThreeQuarters size={72} />,
//   engineeringBudget: <FaDollarSign size={72} />,
// };

// export default function Topbar() {
//   return (
//     <div className=" h-full flex items-center justify-around">
//       <div title="水量">
//         {icons.waterVolume}
//         {/* <p>水量</p> */}
//       </div>
//       <div title="水質">
//         {icons.waterQuality}
//         {/* <p>水質</p> */}
//       </div>
//       <div title="溫度">
//         {icons.temperature}
//         {/* <p>溫度</p> */}
//       </div>
//       <div title="工程預算">
//         {icons.engineeringBudget}
//         {/* <p>工程預算</p> */}
//       </div>
//     </div>
//   );
// }

// import React from "react";
import { useState, useRef, useEffect } from "react";
import { IoWater, IoStatsChart } from "react-icons/io5";
import { FaTemperatureThreeQuarters, FaDollarSign } from "react-icons/fa6";
import ScoreBar from "./components/ScoreBar";
// import scoreControl from "./ScoreControl";
import { useLevel } from "@/contexts/LevelContext";
import { levelData } from "@/assets/Storyline";

import useDraggableCard from "@/hooks/useDraggableCard";

const icons = {
  waterVolume: <IoWater size={72} />,
  waterQuality: <IoStatsChart size={72} />,
  temperature: <FaTemperatureThreeQuarters size={72} />,
  engineeringBudget: <FaDollarSign size={72} />,
};

// const scores = {
//   waterVolume: 80,
//   waterQuality: 60,
//   temperature: 90,
//   engineeringBudget: 70,
// };

const maxScores = {
  waterVolume: 100,
  waterQuality: 100,
  temperature: 100,
  engineeringBudget: 100,
};
// interface TopbarProps{
//   src:{
//     waterVolume: number,
//     waterQuality: number,
//     temperature: number,
//     engineeringBudget: number,
//   }
// }

const Topbar = () => {
  const { hintStyle } = useDraggableCard();
  const { waterQuality, waterVolume, temperature, engineeringBudget } =
    useLevel();
  const { level } = useLevel();

  // const [w, setW] = useState(circleStyle.circleW);

  // const scoreCircle = {
  //   h: hintStyle.hintSrc==0? "h-0": hintStyle.hintSrc<0? "h-" + levelData[level].leftScore.waterVolume : "h-" + levelData[level].rightScore.waterVolume,
  //   w: hintStyle.hintSrc==0? "w-0": hintStyle.hintSrc<0? "w-" + levelData[level].leftScore.waterVolume : "w-" + levelData[level].rightScore.waterVolume,
  // }
  // setH(()=>{
  //   return hintStyle.hintSrc==0? "h-0": hintStyle.hintSrc<0? "h-" + levelData[level].leftScore.waterVolume : "h-" + levelData[level].rightScore.waterVolume;
  // })
  // setW(()=>{
  //   return hintStyle.hintSrc==0? "w-0": hintStyle.hintSrc<0? "w-" + levelData[level].leftScore.waterVolume : "w-" + levelData[level].rightScore.waterVolume;
  // })
  // useEffect(()=>{
  // 	setW(circleStyle.circleW);
  // }, [])

  return hintStyle.hintSrc < 0 ? (
    <div className="h-full flex items-center justify-around">
      <div className="flex  justify-around content-stretch w-60">
        <div className="">{icons.waterVolume}</div>
        <div className="py-15">
          <div
            className={
              "h-" +
              levelData[level].leftScore.waterVolume +
              " " +
              "w-" +
              levelData[level].leftScore.waterVolume +
              " bg-black rounded-full"
            }
          ></div>
          <ScoreBar score={waterVolume} maxScore={maxScores.waterVolume} />
        </div>
      </div>

      <div className="flex  justify-around content-stretch w-60">
        <div className="">{icons.waterQuality}</div>
        <div className="py-15">
          <div
            className={
              "h-" +
              levelData[level].leftScore.waterQuality +
              " " +
              "w-" +
              levelData[level].leftScore.waterQuality +
              " bg-black rounded-full"
            }
          ></div>
          <ScoreBar score={waterQuality} maxScore={maxScores.waterQuality} />
        </div>
      </div>

      <div className="flex  justify-around content-stretch w-60">
        <div className="">{icons.temperature}</div>
        <div className="py-15">
          <div
            className={
              "h-" +
              levelData[level].leftScore.temperature +
              " " +
              "w-" +
              levelData[level].leftScore.temperature +
              " bg-black rounded-full"
            }
          ></div>
          <ScoreBar score={temperature} maxScore={maxScores.temperature} />
        </div>
      </div>

      <div className="flex  justify-around content-stretch w-60">
        <div className="">{icons.engineeringBudget}</div>
        <div className="py-15">
          <div
            className={
              "h-" +
              levelData[level].leftScore.engineeringBudget +
              " " +
              "w-" +
              levelData[level].leftScore.engineeringBudget +
              " bg-black rounded-full"
            }
          ></div>
          <ScoreBar
            score={engineeringBudget}
            maxScore={maxScores.engineeringBudget}
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="h-full flex items-center justify-around">
      <div className="flex  justify-around content-stretch w-60">
        <div className="">{icons.waterVolume}</div>
        <div className="py-15">
          <div
            className={
              "h-" +
              levelData[level].rightScore.waterVolume +
              " " +
              "w-" +
              levelData[level].rightScore.waterVolume +
              " bg-black rounded-full"
            }
          ></div>
          <ScoreBar score={waterVolume} maxScore={maxScores.waterVolume} />
        </div>
      </div>

      <div className="flex  justify-around content-stretch w-60">
        <div className="">{icons.waterQuality}</div>
        <div className="py-15">
          <div
            className={
              "h-" +
              levelData[level].rightScore.waterQuality +
              " " +
              "w-" +
              levelData[level].rightScore.waterQuality +
              " bg-black rounded-full"
            }
          ></div>
          <ScoreBar score={waterQuality} maxScore={maxScores.waterQuality} />
        </div>
      </div>

      <div className="flex  justify-around content-stretch w-60">
        <div className="">{icons.temperature}</div>
        <div className="py-15">
          <div
            className={
              "h-" +
              levelData[level].rightScore.temperature +
              " " +
              "w-" +
              levelData[level].rightScore.temperature +
              " bg-black rounded-full"
            }
          ></div>
          <ScoreBar score={temperature} maxScore={maxScores.temperature} />
        </div>
      </div>

      <div className="flex  justify-around content-stretch w-60">
        <div className="">{icons.engineeringBudget}</div>
        <div className="py-15">
          <div
            className={
              "h-" +
              levelData[level].leftScore.engineeringBudget +
              " " +
              "w-" +
              levelData[level].leftScore.engineeringBudget +
              " bg-black rounded-full"
            }
          ></div>
          <ScoreBar
            score={engineeringBudget}
            maxScore={maxScores.engineeringBudget}
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
