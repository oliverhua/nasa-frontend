import React, { createContext, ReactNode, useState, useContext } from "react";

import { levelData } from "@/assets/Storyline";
const maxLevel = Math.max(...Object.keys(levelData).map(Number));
interface LevelContextType {
  level: number;
  maxLevel: number;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
  nextLevel: () => void;
}

const LevelContext = createContext<LevelContextType | undefined>(undefined);

interface LevelProviderProps {
  children: ReactNode;
}

export const LevelProvider: React.FC<LevelProviderProps> = ({ children }) => {
  const [level, setLevel] = useState<number>(1);

  const nextLevel = () => {
    setLevel((prevLevel) => {
      if (prevLevel >= maxLevel) {
        return 1;
      } else {
        return prevLevel + 1;
      }
    });
  };

  return (
    <LevelContext.Provider value={{ level, setLevel, nextLevel, maxLevel }}>
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
