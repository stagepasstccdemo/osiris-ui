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
}: HeaderProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const renderModal = ({ children }) => {
    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="full"
        bgColor="white"
        headerModal={<ModalHeader handleCloseModal={onClose} />}
        footerModal={<ModalFooter />}
      >
        {children}
      </Modal>
    );
  };

  return (
    <header style={{ position: "static" }}>
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
        {renderModal({
          children: <Text>Modal Content</Text>,
        })}
      </Flex>
    </header>
  );
};
