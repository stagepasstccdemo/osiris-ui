import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = require("../theme/colors");
const typography = require("../theme/typography");

const customTheme = extendTheme({
  fonts: {
    heading: "Montserrat, sans-serif",
  },
  fontSizes: {
    headlines: {
      ...typography.fontSize.headlines,
    },
  },
  colors: {
    ...colors,
  },
  fontWeights: {
    bold: 700,
  },
});

function ChakraWrapper({ children }) {
  return <ChakraProvider theme={customTheme}>{children}</ChakraProvider>;
}

export default ChakraWrapper;
