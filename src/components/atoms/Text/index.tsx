import ChakraWrapper from "@providers/ChakraWrapper";

import { Text as ChakraUiText } from "@chakra-ui/react";

export const Text = ({ ...props }) => {
  return (
    <ChakraWrapper>
      <ChakraUiText {...props}>{props.children || props.text}</ChakraUiText>
    </ChakraWrapper>
  );
};
