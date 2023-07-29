import ChakraWrapper from "@providers/ChakraWrapper";

import { Text as ChakraUiText } from "@chakra-ui/react";
import { TextPropsExtended } from "./types";

export const Text = ({ ...props }: TextPropsExtended) => {
  return (
    <ChakraWrapper>
      <ChakraUiText {...props}>{props.children || props.text}</ChakraUiText>
    </ChakraWrapper>
  );
};
