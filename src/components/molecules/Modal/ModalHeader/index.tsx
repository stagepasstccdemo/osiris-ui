import { Box, Flex, IconButton, Text } from "@components/atoms";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { ModalHeaderProps } from "./types";

export const ModalHeader = ({
  handleCloseModal,
  leftIcon,
  mainText,
  flexProps,
  boxProps,
  textProps,
}: ModalHeaderProps) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      p="1rem"
      pt="2rem"
      {...flexProps}
    >
      <Box {...boxProps}>
        <IconButton
          bgColor="os-secondary.100"
          rounded="2xl"
          padding="1.5rem 0.6rem"
          icon={leftIcon}
          onClick={handleCloseModal}
        />
      </Box>
      <Text
        as="h1"
        fontSize="2rem"
        color="os-primary.100"
        text={mainText}
        mx="auto"
        {...textProps}
      />
    </Flex>
  );
};

ModalHeader.defaultProps = {
  leftIcon: <AiOutlineArrowLeft size={30} color="FFFFFF" />,
  handleCloseModal: () => {},
  mainText: "Modal Header",
};
