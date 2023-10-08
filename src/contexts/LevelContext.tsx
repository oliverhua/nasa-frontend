import React, { createContext, ReactNode, useState, useContext } from "react";
import { levelData, levelNumType, OutdegreeType } from "@/assets/Storyline";

const maxLevelValue = Math.max(...Object.keys(levelData).map(Number));

interface LevelContextType {
  level: levelNumType;
  maxLevel: number;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
  nextLevel: (choice: "left" | "right") => void;
  crisis: OutdegreeType | null;
  rightChoice: OutdegreeType;
  leftChoice: OutdegreeType;
}

const LevelContext = createContext<LevelContextType | undefined>(undefined);

interface LevelProviderProps {
  children: ReactNode;
}

export const LevelProvider: React.FC<LevelProviderProps> = ({ children }) => {
  const [level, setLevel] = useState<levelNumType>(1);

  const initialOutDegree = getRandomOutdegrees(level);
  const [rightChoice, setRightChoice] = useState<OutdegreeType>(
    initialOutDegree!.random[0]
  );
  const [leftChoice, setLeftChoice] = useState<OutdegreeType>(
    initialOutDegree!.random[1]
  );

  const [crisis, setCrisis] = useState<OutdegreeType | null>(null);

  const nextLevel = (choice: string) => {
    if (!rightChoice || !leftChoice) return;

    const nextLevelOutdegree = choice === "left" ? leftChoice : rightChoice;
    const nextLevelChoices = getRandomOutdegrees(nextLevelOutdegree.id);

    if (!nextLevelChoices) return;

    setLevel(nextLevelOutdegree.id);
    setLeftChoice(nextLevelChoices.random[0]);
    setRightChoice(nextLevelChoices.random[1]);

    const { remaining } = nextLevelChoices;
    if (remaining?.isCrisis) {
      setCrisis(remaining);
    } else {
      setCrisis(null);
    }
  };

  return (
    <LevelContext.Provider
      value={{
        level,
        setLevel,
        nextLevel,
        crisis,
        rightChoice,
        leftChoice,
        maxLevel: maxLevelValue,
      }}
    >
      {children}
    </LevelContext.Provider>
  );
};

function getRandomOutdegrees(
  level: levelNumType
): { random: OutdegreeType[]; remaining: OutdegreeType | null } | null {
  // Check if the key exists in the data
  if (!levelData[level]) return null;

  const outdegrees = [...levelData[level].outdegrees];

  // Shuffle the outdegrees array
  for (let i = outdegrees.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [outdegrees[i], outdegrees[j]] = [outdegrees[j], outdegrees[i]];
  }

  // Get the first two items (OutdegreeType objects)
  const randomOutdegrees = outdegrees.slice(0, 2);
  const remainingOutdegree = outdegrees.length === 3 ? outdegrees[2] : null;

  return {
    random: randomOutdegrees,
    remaining: remainingOutdegree,
  };
}

export const useLevel = () => {
  const context = useContext(LevelContext);
  if (context === undefined) {
    throw new Error("useLevel must be used within a LevelProvider");
  }
  return context;
};
