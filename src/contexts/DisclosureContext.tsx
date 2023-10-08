import React, { useContext, createContext, ReactNode } from "react";
import { useDisclosure } from "@nextui-org/react";

interface DisclosureType {
  isInformationOpen: boolean;
  onInformationOpen: () => void;
  onInformationClose: () => void;
}

const DisclosureContext = createContext<DisclosureType | undefined>(undefined);

interface DisclosureProviderProps {
  children: ReactNode;
}

export const DisclosureProvider: React.FC<DisclosureProviderProps> = ({
  children,
}) => {
  const {
    isOpen: isInformationOpen,
    onOpen: onInformationOpen,
    onClose: onInformationClose,
  } = useDisclosure();

  return (
    <DisclosureContext.Provider
      value={{
        isInformationOpen,
        onInformationClose,
        onInformationOpen,
      }}
    >
      {children}
    </DisclosureContext.Provider>
  );
};

export const useDisclosureContext = (): DisclosureType => {
  const context = useContext(DisclosureContext);

  if (!context) {
    throw new Error(
      "useDisclosureContext must be used within a DisclosureProvider"
    );
  }

  return context;
};
