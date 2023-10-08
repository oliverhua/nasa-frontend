// ChoiceContext.tsx

import React, { ReactNode } from "react";

type ChoiceContextType = {
  lastChoice: "left" | "right" | null;
  setLastChoice: React.Dispatch<React.SetStateAction<"left" | "right" | null>>;
};

const ChoiceContext = React.createContext<ChoiceContextType | undefined>(
  undefined
);

interface ChoiceProviderProps {
  children: ReactNode;
}

export const ChoiceProvider: React.FC<ChoiceProviderProps> = ({ children }) => {
  const [lastChoice, setLastChoice] = React.useState<"left" | "right" | null>(
    null
  );

  return (
    <ChoiceContext.Provider value={{ lastChoice, setLastChoice }}>
      {children}
    </ChoiceContext.Provider>
  );
};

export function useChoice() {
  const context = React.useContext(ChoiceContext);
  if (!context) {
    throw new Error("useChoice must be used within a ChoiceProvider");
  }
  return context;
}

export default ChoiceContext;
