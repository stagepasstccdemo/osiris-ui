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
  bgDecoration,
}: ModalHeaderProps) => {
  return (
    <Flex
      alignItems="flex-start"
      justifyContent="center"
      p="1rem"
      pt="2rem"
      bgColor={bgDecoration && "os-primary.100"}
      roundedBottom={bgDecoration && "2xl"}
      height={bgDecoration && "10rem"}
      {...flexProps}
      pr="4rem"
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
        color={bgDecoration ? "white" : "os-secondary.100"}
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
