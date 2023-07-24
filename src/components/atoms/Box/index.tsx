import ChakraWrapper from "@providers/ChakraWrapper";

import { Box as ChakraBox } from "@chakra-ui/react";

export const Box = ({ ...props }) => {
  return (
    <ChakraWrapper>
      <ChakraBox {...props} />
    </ChakraWrapper>
  );
};
