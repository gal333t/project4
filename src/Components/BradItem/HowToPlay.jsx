import {
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

export default function HowToPlay() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const darkGreen = useColorModeValue("#005929", "#005929");

  return (
    <>
      <IconButton color={darkGreen} bg="white" _hover={{ bg: "white" }}>
        <InfoIcon boxSize={7} onClick={onOpen}></InfoIcon>
      </IconButton>
      <Modal isOpen={isOpen} onClose={onClose} p="5">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader m="3px" textAlign="center">
            How to play Can I BRAD This?
          </ModalHeader>
          <ModalBody textAlign="center" mb="15px" fontSize="18px">
            A randomly picked item will show up and you need to decide if it can
            or can't be recycled by the BRAD program. Select your choice by
            clicking either the 'yes' or 'no' buttons. If you're right, you'll
            get 1 point! And if you're wrong, your score doesn't change. If
            you're logged in, your score will also be saved to the scoreboard.
            After each guess, another option will render for you to decide, can
            you BRAD this?
            <br />
            For more info on what can and can't be recycled, please visit{" "}
            <a
              href="https://banish.com.au/pages/recycling-program"
              target="_blank"
              className="link"
            >
              Banish.
            </a>
          </ModalBody>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    </>
  );
}
