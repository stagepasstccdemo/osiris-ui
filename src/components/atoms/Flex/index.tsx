import ChakraWrapper from "@providers/ChakraWrapper";

import { Flex as ChakraFlex, FlexProps } from "@chakra-ui/react";

export const Flex = ({ ...props }: FlexProps) => {
  return (
    <ChakraWrapper>
      <ChakraFlex {...props} />
    </ChakraWrapper>
  );
};
