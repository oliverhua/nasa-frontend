import React, { createContext, ReactNode, useState, useContext } from "react";

import { levelData } from "@/assets/Storyline";
const maxLevel = Math.max(...Object.keys(levelData).map(Number));
interface LevelContextType {
  level: number;
  maxLevel: number;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
  nextLevel: (arg0:string) => void;

  waterVolume: number; 
  waterQuality: number; 
  temperature: number; 
  engineeringBudget: number;
  setV: React.Dispatch<React.SetStateAction<number>>;
  setQ: React.Dispatch<React.SetStateAction<number>>;
  setT: React.Dispatch<React.SetStateAction<number>>;
  setE: React.Dispatch<React.SetStateAction<number>>;

}

const LevelContext = createContext<LevelContextType | undefined>(undefined);

interface LevelProviderProps {
  children: ReactNode;
}


export const LevelProvider: React.FC<LevelProviderProps> = ({ children }) => {
  const [level, setLevel] = useState<number>(1);
  const [waterVolume, setV] = useState<number>(0);
  const [waterQuality, setQ] = useState<number>(0);
  const [temperature, setT] = useState<number>(0);
  const [engineeringBudget, setE] = useState<number>(0);


  const nextLevel = (choice:string) => {
    setV(()=>{
      if(choice == "left") return waterVolume + levelData[level].getleftscore.waterVolume;
      else return waterVolume + levelData[level].getrightscore.waterVolume;
    });
    setQ(()=>{
      if(choice == "left") return waterQuality + levelData[level].getleftscore.waterQuality;
      else return waterQuality + levelData[level].getrightscore.waterQuality;
    });
    setT(()=>{
      if(choice == "left") return temperature + levelData[level].getleftscore.temperature;
      else return temperature + levelData[level].getrightscore.temperature;
    });
    setE(()=>{
      if(choice == "left") return engineeringBudget + levelData[level].getleftscore.engineeringBudget;
      else return engineeringBudget + levelData[level].getrightscore.engineeringBudget;
    });
    setLevel((prevLevel) => {
      console.log(choice)
      if (prevLevel == -1) { 
        return 1; // 結尾
      } else if( choice=="left" ){
        if(levelData[prevLevel].nextleftlevel == -1){
          return 1
        }
        return levelData[prevLevel].nextleftlevel
      } else {
        if(levelData[prevLevel].nextrightlevel == -1){
          return 1
        }
        return levelData[prevLevel].nextrightlevel
      }
    });
  };

  return (
    <LevelContext.Provider value={{ level, setLevel, nextLevel, maxLevel, waterVolume, waterQuality, temperature, engineeringBudget, setE, setQ, setT, setV}}>
      {children}
    </LevelContext.Provider>
  );
};

export const useLevel = () => {
  const context = useContext(LevelContext);
  if (context === undefined) {
    throw new Error("useLevel must be used within a LevelProvider");
  }
  return context;
};
