import { BoxProps, FlexProps, TextProps } from "@chakra-ui/react";

export type CardItem = {
  leftIcon?: React.ReactNode;
  text: string;
  rightIcon?: React.ReactNode;
};

export type MenuCardOptionProps = {
  leftIcon?: React.ReactNode;
  text: string;
  rightIcon?: React.ReactNode;
  flexProps?: FlexProps;
  boxProps?: BoxProps;
  textProps?: TextProps;
  renderCardListItems?: CardItem[];
};
