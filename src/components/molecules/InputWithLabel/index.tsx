import { Flex } from "@chakra-ui/react";
import { Input, Text } from "@components/atoms";

export const InputWithLabel = ({ ...props }) => {
  return (
    <Flex direction="column" flex={1} {...props}>
      <Text text={props.text} />
      <Input {...props} />
    </Flex>
  );
};
