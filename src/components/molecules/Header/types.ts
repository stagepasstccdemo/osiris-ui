import { FlexProps, IconProps, ImageProps, TextProps } from "@chakra-ui/react";
import { ButtonProps } from "@components/atoms/Pills/types";

export interface HeaderProps {
  leftIcon?: React.ReactNode;
  logoImg: string;
  userProfile: string;
  flexProps?: FlexProps;
  imageProps?: ImageProps;
  iconProps?: IconProps;
  buttonProps?: ButtonProps;
  textProps?: TextProps;
}
