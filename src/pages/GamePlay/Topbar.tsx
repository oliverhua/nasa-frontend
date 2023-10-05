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

import React from "react";
import { IoWater, IoStatsChart } from "react-icons/io5";
import { FaTemperatureThreeQuarters, FaDollarSign } from "react-icons/fa6";
import ScoreBar from "./components/ScoreBar";

const icons = {
  waterVolume: <IoWater size={72} />,
  waterQuality: <IoStatsChart size={72} />,
  temperature: <FaTemperatureThreeQuarters size={72} />,
  engineeringBudget: <FaDollarSign size={72} />,
};

const scores = {
  waterVolume: 80, 
  waterQuality: 60, 
  temperature: 90, 
  engineeringBudget: 70,
};

const maxScores = {
  waterVolume: 100, 
  waterQuality: 100, 
  temperature: 100, 
  engineeringBudget: 100, 
};

export default function Topbar() {
  return (
    <div className="h-full flex items-center justify-around">
      <div className="topbar-item">
        <div className="topbar-content">
          <div className="icon-and-progress">
            {icons.waterVolume}
          </div>
          <div className="icon-and-progress">
            <ScoreBar score={scores.waterVolume} maxScore={maxScores.waterVolume} />
          </div>
        </div>
      </div>
      <div className="topbar-item">
        <div className="topbar-content">
          <div className="icon-and-progress">
            {icons.waterQuality}
          </div>
          <div className="icon-and-progress">
            <ScoreBar score={scores.waterQuality} maxScore={maxScores.waterQuality} />
          </div>
        </div>
      </div>
      <div className="topbar-item">
        <div className="topbar-content">
          <div className="icon-and-progress">
            {icons.temperature}
          </div>
          <div className="icon-and-progress">
            <ScoreBar score={scores.temperature} maxScore={maxScores.temperature} />
          </div>
        </div>
      </div>
      <div className="topbar-item">
        <div className="topbar-content">
          <div className="icon-and-progress">
            {icons.engineeringBudget}
          </div>
          <div className="icon-and-progress">
            <ScoreBar score={scores.engineeringBudget} maxScore={maxScores.engineeringBudget} />
          </div>
        </div>
      </div>
    </div>

  );
}

