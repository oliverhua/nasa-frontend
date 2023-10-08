import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
interface InformationModalProps {
  message: string;
}
import { useDisclosureContext } from "@/contexts/DisclosureContext";
export default function InformationModal({ message }: InformationModalProps) {
  const { isInformationOpen, onInformationClose } = useDisclosureContext();

  return (
    <>
      <Modal
        backdrop={"blur"}
        isOpen={isInformationOpen}
        onClose={onInformationClose}
        className="text-black"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Information about Our Journey
              </ModalHeader>
              <ModalBody>
                <p>{message}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  Continue
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
