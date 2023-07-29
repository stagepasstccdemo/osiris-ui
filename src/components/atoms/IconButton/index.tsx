import ChakraWrapper from "@providers/ChakraWrapper";

import { IconButton as ChakraIconButton } from "@chakra-ui/react";

export const IconButton = ({ ...props }) => {
  return (
    <ChakraWrapper>
      <ChakraIconButton aria-label="Area" {...props} />
    </ChakraWrapper>
  );
};
