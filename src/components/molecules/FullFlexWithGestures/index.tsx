import { Flex } from "@chakra-ui/react";

export const FullFlexWithGestures = ({ swipe, ...props }: any) => {
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
