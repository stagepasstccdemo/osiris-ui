import { FlexProps, TextProps } from "@chakra-ui/react";
import { TextBadgeProps } from "@components/atoms/Badge/types";
import { BigCardProps } from "@components/molecules/Card/BigCard/types";

export type FilteredCardsProps = {
  textLabel?: string;
  buttonLabel?: string;
  flexProps?: FlexProps;
  textProps?: TextProps;
  textBadgeProps?: TextBadgeProps;
  renderList?: BigCardProps[];
  hasSeeMoreOption?: boolean;
  cardType?: "big" | "numbered";
  onSeeMoreClick?: (cardItemId: number) => void;
};
