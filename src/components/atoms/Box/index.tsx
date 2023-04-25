import { Box as ChakraBox } from "@chakra-ui/react";
import ChakraWrapper from "@providers/ChakraWrapper";

export const Box = ({ ...props }) => {
  return (
    <ChakraWrapper>
      <ChakraBox {...props} />
    </ChakraWrapper>
  );
};
