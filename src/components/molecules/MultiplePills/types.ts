import { FlexProps } from "@chakra-ui/react";
import { PillsProps } from "@components/atoms/Pills/types";

export type MultiplePillsProps = PillsProps &
  FlexProps & {
    pills: PillsProps[];
  };
