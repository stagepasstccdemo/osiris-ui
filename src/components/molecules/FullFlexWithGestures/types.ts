import { FlexProps } from "@chakra-ui/react";

export type FullFlexWithGesturesProps = FlexProps & {
  swipe: {
    handler: {
      left?: () => void;
      right?: () => void;
    };
    swipeDuration: number;
  };
};
