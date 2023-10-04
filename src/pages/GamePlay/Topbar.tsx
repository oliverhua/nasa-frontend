import { IoWater, IoStatsChart } from "react-icons/io5";
FaTemperatureThreeQuarters;
import { FaTemperatureThreeQuarters, FaDollarSign } from "react-icons/fa6";

const icons = {
  waterVolume: <IoWater size={72} />,
  waterQuality: <IoStatsChart size={72} />,
  temperature: <FaTemperatureThreeQuarters size={72} />,
  engineeringBudget: <FaDollarSign size={72} />,
};

export default function Topbar() {
  return (
    <div className=" h-full flex items-center justify-around">
      <div title="水量">
        {icons.waterVolume}
        {/* <p>水量</p> */}
      </div>
      <div title="水質">
        {icons.waterQuality}
        {/* <p>水質</p> */}
      </div>
      <div title="溫度">
        {icons.temperature}
        {/* <p>溫度</p> */}
      </div>
      <div title="工程預算">
        {icons.engineeringBudget}
        {/* <p>工程預算</p> */}
      </div>
    </div>
  );
}
