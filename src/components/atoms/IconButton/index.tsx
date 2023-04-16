import { IconButton as ChakraIconButton } from "@chakra-ui/react";
import ChakraWrapper from "@providers/ChakraWrapper";

export const IconButton = ({ ...props }) => {
  return (
    <ChakraWrapper>
      <ChakraIconButton aria-label="Area" {...props} />
    </ChakraWrapper>
  );
};
