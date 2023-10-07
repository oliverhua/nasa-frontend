import React, { createContext, ReactNode, useState, useContext } from "react";
import { levelData, levelNumType } from "@/assets/Storyline";

const maxLevelValue = Math.max(...Object.keys(levelData).map(Number));

interface LevelContextType {
  level: levelNumType;
  maxLevel: number;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
  nextLevel: (choice: "left" | "right") => void;
}

const LevelContext = createContext<LevelContextType | undefined>(undefined);

interface LevelProviderProps {
  children: ReactNode;
}

export const LevelProvider: React.FC<LevelProviderProps> = ({ children }) => {
  const [level, setLevel] = useState<levelNumType>(1);

  // const updateScore = (choice: string, attribute: ScoreAttribute) => {
  //   const scoreData = choice === "left" ? "leftScore" : "rightScore";
  //   return levelData[level][scoreData][attribute];
  // };

  const nextLevel = (choice: string) => {
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
