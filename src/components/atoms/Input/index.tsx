import { Input as ChakraInput } from "@chakra-ui/react";
import ChakraWrapper from "@providers/ChakraWrapper";

export const Input = ({ ...props }) => {
  return (
    <ChakraWrapper>
      <ChakraInput {...props} />
    </ChakraWrapper>
  );
};
