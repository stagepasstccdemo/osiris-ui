import { Divider as ChakraDivider, Flex } from "@chakra-ui/react";
import { Text } from "@components/atoms";
import ChakraWrapper from "@providers/ChakraWrapper";

export const Divider = ({ ...props }) => {
  return (
    <ChakraWrapper>
      <Flex alignItems="center">
        <ChakraDivider {...props} />
        <Text mx={props.distance}>{props.text}</Text>
        <ChakraDivider {...props} />
      </Flex>
    </ChakraWrapper>
  );
};
