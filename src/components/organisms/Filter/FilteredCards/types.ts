import { FlexProps, TextProps } from "@chakra-ui/react";
import { TextBadgeProps } from "@components/atoms/Badge/types";

export type FilteredCardsProps = {
  textLabel?: string;
  buttonLabel?: string;
  flexProps?: FlexProps;
  textProps?: TextProps;
  textBadgeProps?: TextBadgeProps;
};
