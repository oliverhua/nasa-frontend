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
  mediaSrc: string | null;
}
import { useDisclosureContext } from "@/contexts/DisclosureContext";

export default function InformationModal({
  message,
  mediaSrc,
}: InformationModalProps) {
  const { isInformationOpen, onInformationClose } = useDisclosureContext();

  return (
    <>
      <Modal
        size="5xl"
        isDismissable={false}
        backdrop={"blur"}
        isOpen={isInformationOpen}
        onClose={onInformationClose}
        className="text-black"
      >
        <ModalContent>
          {(onInformationClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Information about Our Journey
              </ModalHeader>
              <ModalBody>
                <ModalMedia mediaSrc={mediaSrc} />
                <p>{message}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onInformationClose}>
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
interface ModalMediaProps {
  mediaSrc: string | null;
}

function ModalMedia({ mediaSrc }: ModalMediaProps) {
  if (!mediaSrc) {
    return null;
  }

  const ext = mediaSrc.split(".").pop();

  switch (ext?.toLowerCase()) {
    case "gif":
    case "png":
    case "jpg":
    case "jpeg":
      return (
        <img src={mediaSrc} alt="Media Content" style={{ maxWidth: "100%" }} />
      );

    case "mp4":
      return (
        <video controls width="100%">
          <source src={mediaSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );

    default:
      return null;
  }
}
