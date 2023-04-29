import {
  Modal as ChakraUIModal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { ModalProps } from "./types";

export const Modal = ({
  children,
  headerModal,
  footerModal,
  isOpen,
  onClose,
  size,
  ...rest
}: ModalProps) => {
  return (
    <ChakraUIModal isOpen={isOpen} onClose={onClose} size={size}>
      <ModalOverlay />
      <ModalContent {...rest}>
        <ModalHeader>{headerModal}</ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>{footerModal}</ModalFooter>
      </ModalContent>
    </ChakraUIModal>
  );
};
