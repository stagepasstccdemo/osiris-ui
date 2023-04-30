import { AccordionItem as ChakraUIAccordionItem } from "@chakra-ui/react";
import { AccordionContent } from "../AccordionContent";
import { AccordionMenu } from "../AccordionMenu";

export const AccordionItem = ({ ...props }) => {
  return (
    <ChakraUIAccordionItem border="none" {...props}>
      <AccordionMenu />
      <AccordionContent />
    </ChakraUIAccordionItem>
  );
};
