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

export default function HowToLogin() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const darkGreen = useColorModeValue("#005929", "#005929");

  return (
    <>
      <IconButton color={darkGreen} bg="#04A96A" mt="10px">
        <InfoIcon boxSize={7} onClick={onOpen}></InfoIcon>
      </IconButton>
      <Modal isOpen={isOpen} onClose={onClose} p="5">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader m="3px" textAlign="center">
            How does Login work?
          </ModalHeader>
          <ModalBody textAlign="center" mb="15px" fontSize="18px">
            Whether you're a new user, or an existing one, the process is pretty
            much the same. Pick an email you have access to, and a Magic Code
            (One Time Password) will be emailed to you. If you have never logged
            in before, after the code is added you will be asked to pick a
            username. Returning users will be logged in with their overall score
            available once submitting the Magic Code. Login is optional, feel
            free to have a play without it but the score won't be saved.
          </ModalBody>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    </>
  );
}
