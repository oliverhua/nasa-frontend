import React, { createContext, ReactNode, useState, useContext } from "react";
import { levelData, levelNumType, ScoreAttribute } from "@/assets/Storyline";

const maxLevelValue = Math.max(...Object.keys(levelData).map(Number));

interface LevelContextType {
  level: levelNumType;
  maxLevel: number;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
  nextLevel: (choice: string) => void;
  waterVolume: number;
  waterQuality: number;
  temperature: number;
  engineeringBudget: number;
  setWaterVolume: React.Dispatch<React.SetStateAction<number>>;
  setWaterQuality: React.Dispatch<React.SetStateAction<number>>;
  setTemperature: React.Dispatch<React.SetStateAction<number>>;
  setEngineeringBudget: React.Dispatch<React.SetStateAction<number>>;
}

const LevelContext = createContext<LevelContextType | undefined>(undefined);

interface LevelProviderProps {
  children: ReactNode;
}

export const LevelProvider: React.FC<LevelProviderProps> = ({ children }) => {
  const [level, setLevel] = useState<levelNumType>(1);
  const [waterVolume, setWaterVolume] = useState<number>(0);
  const [waterQuality, setWaterQuality] = useState<number>(0);
  const [temperature, setTemperature] = useState<number>(0);
  const [engineeringBudget, setEngineeringBudget] = useState<number>(0);

  const updateScore = (choice: string, attribute: ScoreAttribute) => {
    const scoreData = choice === "left" ? "leftScore" : "rightScore";
    return levelData[level][scoreData][attribute];
  };

  const nextLevel = (choice: string) => {
    setWaterVolume((prev) => prev + updateScore(choice, "waterVolume"));
    setWaterQuality((prev) => prev + updateScore(choice, "waterQuality"));
    setTemperature((prev) => prev + updateScore(choice, "temperature"));
    setEngineeringBudget(
      (prev) => prev + updateScore(choice, "engineeringBudget")
    );

    setLevel((prevLevel) => {
      const nextLevelData =
        choice === "left" ? "nextLeftLevel" : "nextRightLevel";
      const next = levelData[prevLevel][nextLevelData];

      return next === -1 ? 1 : next;
    });
  };

  return (
    <LevelContext.Provider
      value={{
        level,
        setLevel,
        nextLevel,
        maxLevel: maxLevelValue,
        waterVolume,
        waterQuality,
        temperature,
        engineeringBudget,
        setWaterVolume,
        setWaterQuality,
        setTemperature,
        setEngineeringBudget,
      }}
    >
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
