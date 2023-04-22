import { FlexProps } from "@chakra-ui/react";
import { TextBadgeProps } from "@components/atoms/Badge/types";

export type MultipleBadgesProps = TextBadgeProps &
  FlexProps & {
    badges: TextBadgeProps[];
  };
