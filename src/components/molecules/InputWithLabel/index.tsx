import { Flex } from "@chakra-ui/react";
import { Input, Text } from "@components/atoms";

export const InputWithLabel = ({ type, ...props }) => {
  return (
    <Flex direction="column" flex={1} {...props}>
      <Text text={props.text} />
      <Input type={type} {...props} />
    </Flex>
  );
};
