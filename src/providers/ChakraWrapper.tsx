import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const shadows = require("@theme/shadows");
const colors = require("@theme/colors");
const typography = require("@theme/typography");

const customTheme = extendTheme({
  fonts: {
    heading: typography.fontFamily.primary[0],
    body: typography.fontFamily.primary[0],
    ...typography.fontFamily,
  },
  fontSizes: {
    ...typography.fontSize,
  },
  fontWeights: {
    ...typography.fontWeight,
  },
  colors: {
    ...colors,
  },
  shadows: {
    ...shadows.boxShadow,
  },
});

function ChakraWrapper({ children }) {
  return <ChakraProvider theme={customTheme}>{children}</ChakraProvider>;
}

export default ChakraWrapper;
