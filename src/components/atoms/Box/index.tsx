import ChakraWrapper from "@providers/ChakraWrapper";

import { Box as ChakraBox, BoxProps } from "@chakra-ui/react";

export const Box = ({ ...props }: BoxProps) => {
  return (
    <ChakraWrapper>
      <ChakraBox {...props} />
    </ChakraWrapper>
  );
};
