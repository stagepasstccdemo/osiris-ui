import { Accordion as ChakraUIAccordion, Stack } from "@chakra-ui/react";
import ChakraWrapper from "@providers/ChakraWrapper";

import { Divider } from "../Divider";
import { AccordionItem } from "./AccordionItem";

export const Accordion = () => {
  return (
    <ChakraWrapper>
      <ChakraUIAccordion allowMultiple allowToggle>
        <Stack spacing={4}>
          <AccordionItem />
          <Divider borderColor="os-ternary.300" />
          <AccordionItem />
        </Stack>
      </ChakraUIAccordion>
    </ChakraWrapper>
  );
};
