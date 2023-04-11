import { Heading  as ChakraHeading, useBreakpointValue } from "@chakra-ui/react";

const tailwind = require("../../../theme/typography");

export const Heading = ({ as, ...props }) => {
  const fontSize = as ? tailwind.fontSize.headlines[as] : tailwind.fontSize.headlines.h1;

  return (
    <ChakraHeading
      as={as || "h1"}
      sx={{
        fontSize,
      }}
      {...props}
    />
  );
};