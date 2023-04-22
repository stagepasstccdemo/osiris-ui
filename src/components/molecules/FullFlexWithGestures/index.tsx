import { Flex } from "@chakra-ui/react";
import { FullFlexWithGesturesProps } from "./types";

export const FullFlexWithGestures = ({
  swipe,
  ...props
}: FullFlexWithGesturesProps) => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      {...swipe}
      {...props}
    />
  );
};
