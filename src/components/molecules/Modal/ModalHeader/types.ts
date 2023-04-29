import {
  BoxProps,
  FlexProps,
  ModalHeaderProps as ChakraUIModalHeaderProps,
  TextProps,
} from "@chakra-ui/react";

export type ModalHeaderProps = ChakraUIModalHeaderProps & {
  handleCloseModal: () => void;
  leftIcon: React.ReactNode;
  mainText: string;
  flexProps?: FlexProps;
  boxProps?: BoxProps;
  textProps?: TextProps;
};
