import {
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { Button, IconButton, Text } from "@components/atoms";
import { HeaderProps } from "./types";

export const Header = ({
  leftIcon,
  logoImg,
  userProfile,
  flexProps,
  imageProps,
  iconProps,
  buttonProps,
  textProps,
}: HeaderProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const renderModal = () => {
    return (
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent bgColor="white">
          <ModalHeader>MODAL HEADER</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
            delectus reprehenderit earum illo quibusdam incidunt reiciendis
            maxime animi excepturi? Maxime pariatur recusandae tempora aperiam
            obcaecati, nihil nesciunt perspiciatis sapiente reiciendis.
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };

  return (
    <header style={{ position: "static" }} id="header">
      <Flex alignItems="center" justifyContent="space-between" {...flexProps}>
        <IconButton onClick={() => onOpen()} icon={leftIcon} {...iconProps} />
        <Image
          src={logoImg}
          alt="StagePass"
          objectFit="contain"
          width="180px"
          {...imageProps}
        />
        <Button
          bgColor="os-primary.100"
          width="3.125rem"
          height="3.125rem"
          rounded="15px"
          onClick={() => onOpen()}
          {...buttonProps}
        >
          <Text color="gray.100" {...textProps}>
            {userProfile}
          </Text>
        </Button>
        {renderModal()}
      </Flex>
    </header>
  );
};
