import { Accordion as ChakraUIAccordion, Stack } from "@chakra-ui/react";
import ChakraWrapper from "@providers/ChakraWrapper";

import { AccordionItem } from "./AccordionItem";
import { AccordionProps } from "./types";

export const Accordion = ({ title, data }: AccordionProps) => {
  return (
    <ChakraWrapper>
      <ChakraUIAccordion allowMultiple allowToggle>
        <Stack spacing={4}>
          <AccordionItem>
            <AccordionItem.Title title={title} />
            <AccordionItem.Content data={data} />
          </AccordionItem>
        </Stack>
      </ChakraUIAccordion>
    </ChakraWrapper>
  );
};
