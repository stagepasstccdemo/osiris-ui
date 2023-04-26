import { Flex as ChakraFlex } from "@chakra-ui/react";
import ChakraWrapper from "@providers/ChakraWrapper";

export const Flex = ({ ...props }) => {
  return (
    <ChakraWrapper>
      <ChakraFlex {...props} />
    </ChakraWrapper>
  );
};
