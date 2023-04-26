import { Divider as ChakraDivider, Flex } from "@chakra-ui/react";
import { Text } from "@components/atoms";
import ChakraWrapper from "@providers/ChakraWrapper";

export const Divider = ({ textInBetween = false, ...props }) => {
  return (
    <ChakraWrapper>
      <Flex alignItems="center">
        {textInBetween ? (
          <>
            <ChakraDivider {...props} />
            <Text mx={props.distance}>{props.text}</Text>
            <ChakraDivider {...props} />
          </>
        ) : (
          <ChakraDivider {...props} />
        )}
      </Flex>
    </ChakraWrapper>
  );
};

Divider.defaultProps = {
  text: "or",
  border: "1",
  distance: "6",
  borderColor: "gray.700",
  borderWidth: "2px",
  rounded: "full",
};
