import { Button as ChakraButton } from "@chakra-ui/react";
import ChakraWrapper from "@providers/ChakraWrapper";

export const Button = ({ ...props }) => {
  return (
    <ChakraWrapper>
      <ChakraButton {...props} />
    </ChakraWrapper>
  );
};
