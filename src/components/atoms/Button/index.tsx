import ChakraWrapper from "@providers/ChakraWrapper";
import { Button as ChakraButton } from "@chakra-ui/react";

export const Button = ({ ...props }) => {
  return (
    <ChakraWrapper>
      <ChakraButton
        _hover={{
          opacity: 0.6,
        }}
        {...props}
      />
    </ChakraWrapper>
  );
};
