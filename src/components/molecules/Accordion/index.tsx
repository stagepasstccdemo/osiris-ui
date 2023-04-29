import {
  Accordion as ChakraUIAccordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Link,
  Stack,
} from "@chakra-ui/react";
import { Box, Flex, Text } from "@components/atoms";
import ChakraWrapper from "@providers/ChakraWrapper";
import { Divider } from "../Divider";

export const Accordion = () => {
  return (
    <ChakraWrapper>
      <ChakraUIAccordion allowMultiple allowToggle>
        <Stack spacing={4}>
          <AccordionItem border="none">
            <Text as="h2" color="os-primary.100">
              <AccordionButton bgColor="gray.200" rounded="xl" fontSize="2rem">
                <Box as="span" flex="1" textAlign="left">
                  Music
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
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
          </AccordionItem>
          <Divider borderColor="os-ternary.300" />
          <AccordionItem border="none">
            <Text as="h2" color="os-primary.100">
              <AccordionButton rounded="xl" fontSize="2rem">
                <Box as="span" flex="1" textAlign="left">
                  Comedy
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Stack>
      </ChakraUIAccordion>
    </ChakraWrapper>
  );
};
