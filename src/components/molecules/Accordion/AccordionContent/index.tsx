import { AccordionPanel, Link } from "@chakra-ui/react";
import { Flex, Text } from "@components/atoms";

export const AccordionContent = () => {
  return (
    <AccordionPanel pb={4}>
      <Flex flexDirection="column" gap="2" ml="0.5rem">
        <Link href="teste">
          <Text fontSize="1.5rem">Top Music</Text>
        </Link>
        <Link href="teste">
          <Text fontSize="1.5rem">Classical</Text>
        </Link>

        <Link href="teste">
          <Text fontSize="1.5rem">Dance/Eletronic</Text>
        </Link>
        <Link href="teste">
          <Text fontSize="1.5rem">Rock/Pop</Text>
        </Link>
        <Link href="teste">
          <Text fontSize="1.5rem">Jazz/Blues</Text>
        </Link>
      </Flex>
    </AccordionPanel>
  );
};
