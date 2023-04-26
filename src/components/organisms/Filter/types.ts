import { BoxProps, FlexProps, TextProps } from "@chakra-ui/react";

export type FilterProps = {
  leftIcon: React.ReactNode;
  rightIcon: React.ReactNode;
  leftText: string;
  rightText: string;
  renderBadgesList: object[];
  flexProps?: FlexProps;
  boxProps?: BoxProps;
  textProps?: TextProps;
  children?: React.ReactNode;
};
