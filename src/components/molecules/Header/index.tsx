import { Flex, Image, useDisclosure } from "@chakra-ui/react";
import { Button, IconButton, Text } from "@components/atoms";

import { Modal } from "../Modal";
import { ModalFooter } from "../Modal/ModalFooter";
import { ModalHeader } from "../Modal/ModalHeader";
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
  leftIconModalContent,
  rightIconModalContent,
}: HeaderProps) => {
  const {
    isOpen: isLeftIconModalOpen,
    onOpen: onLeftIconModalOpen,
    onClose: onLeftIconModalClose,
  } = useDisclosure();

  const {
    isOpen: isRightIconModalOpen,
    onOpen: onRightIconModalOpen,
    onClose: onRightIconModalClose,
  } = useDisclosure();

  const renderLeftIconModalContent = () => {
    onLeftIconModalOpen();
  };

  const renderRightIconModalContent = () => {
    onRightIconModalOpen();
  };

  const renderLeftModal = () => {
    return (
      <Modal
        isOpen={isLeftIconModalOpen}
        onClose={onLeftIconModalClose}
        size="full"
        bgColor="white"
        headerModal={<ModalHeader handleCloseModal={onLeftIconModalClose} />}
        footerModal={<ModalFooter />}
      >
        {leftIconModalContent}
      </Modal>
    );
  };

  const renderRightModal = () => {
    return (
      <Modal
        isOpen={isRightIconModalOpen}
        onClose={onRightIconModalClose}
        size="full"
        bgColor="white"
        headerModal={<ModalHeader handleCloseModal={onRightIconModalClose} />}
        footerModal={<ModalFooter />}
      >
        {rightIconModalContent}
      </Modal>
    );
  };

  return (
    <header style={{ position: "static" }}>
      <Flex alignItems="center" justifyContent="space-between" {...flexProps}>
        <IconButton
          onClick={() => renderLeftIconModalContent()}
          icon={leftIcon}
          {...iconProps}
        />
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
          onClick={() => renderRightIconModalContent()}
          {...buttonProps}
        >
          <Text color="gray.100" {...textProps}>
            {userProfile}
          </Text>
        </Button>
      </Flex>

      {renderLeftModal()}
      {renderRightModal()}
    </header>
  );
};
