import ChakraWrapper from "@providers/ChakraWrapper";
import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";

export const Button = ({ ...props }: ButtonProps) => {
  return (
    <ChakraWrapper>
      <ChakraButton
        _hover={{
          opacity: 0.6,
        }}
        alignSelf="center"
        width="inherit"
        maxWidth={["100%", "40%"]}
        {...props}
      />
    </ChakraWrapper>
  );
};
