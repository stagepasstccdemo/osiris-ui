import { Text as ChakraUiText } from "@chakra-ui/react";
import ChakraWrapper from "@providers/ChakraWrapper";

export const Text = ({ ...props }) => {
  return (
    <ChakraWrapper>
      <ChakraUiText {...props} />
    </ChakraWrapper>
  );
};
