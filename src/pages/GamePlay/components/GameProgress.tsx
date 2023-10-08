// import { Chip } from "@nextui-org/react";
// import { useLevel } from "@/contexts/LevelContext";
// import { levelData } from "@/assets/Storyline";

// export default function GameProgress() {
//   const { level } = useLevel();

//   const levelsArray = Object.entries(levelData).map(([id, data]) => ({
//     id: Number(id),
//     label: data.levelTitle,
//   }));

//   return (
//     <div className=" h-full bg-yellow-950 flex items-center justify-around">
//       <div className="flex flex-row items-stretch">
//         {levelsArray.map(({ id, label }) => (
//           <Chip
//             key={id}
//             className="px-10 py-5 mx-2"
//             color="warning"
//             variant={level === id ? "solid" : "bordered"}
//           >
//             {label}
//           </Chip>
//         ))}
//       </div>
//     </div>
//   );
// }
