import ChakraWrapper from "@providers/ChakraWrapper";
import { Heading as ChakraHeading } from "@chakra-ui/react";

const tailwind = require("../../../theme/typography");

export const Heading = ({ as, ...props }) => {
  const fontSize = as
    ? tailwind.fontSize.headlines[as]
    : tailwind.fontSize.headlines.h1;

  return (
    <ChakraWrapper>
      <ChakraHeading
        as={as || "h1"}
        sx={{
          fontSize,
        }}
        {...props}
      >
        {props.children || props.text}
      </ChakraHeading>
    </ChakraWrapper>
  );
};
