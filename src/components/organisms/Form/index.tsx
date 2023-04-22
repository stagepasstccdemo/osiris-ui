import { Box } from "@chakra-ui/react";

export const Form = ({ children, ...props }) => {
  return (
    <form {...props}>
      <Box
        height="77vh"
        bgColor="white"
        borderTopRadius={40}
        p={20}
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
      >
        {children}
      </Box>
    </form>
  );
};
