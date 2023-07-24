import ChakraWrapper from "@providers/ChakraWrapper";

import { Flex as ChakraFlex } from "@chakra-ui/react";

export const Flex = ({ ...props }) => {
  return (
    <ChakraWrapper>
      <ChakraFlex {...props} />
    </ChakraWrapper>
  );
};
