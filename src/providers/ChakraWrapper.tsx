import { ChakraProvider } from "@chakra-ui/react";
// import {  extendTheme } from "@chakra-ui/react";
// import { ThemeProvider } from "@emotion/react";
// import { mode } from "@chakra-ui/theme-tools";

// const customTheme = extendTheme({
//   styles: {
//     global: (props) => ({
//       body: {
//         bg: mode("gray.50", "gray.900")(props),
//         color: mode("gray.800", "whiteAlpha.900")(props),
//       },
//     }),
//   },
// });

const ChakraWrapper = ({ children }) => (
  <ChakraProvider>{children}</ChakraProvider>
);

export default ChakraWrapper;