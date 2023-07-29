import { AccordionItem as ChakraUIAccordionItem } from "@chakra-ui/react";
import { AccordionContent } from "../AccordionContent";
import { AccordionMenu } from "../AccordionMenu";

export const AccordionItem = ({ children, ...props }) => {
  return (
    <ChakraUIAccordionItem border="none" {...props}>
      {children}
    </ChakraUIAccordionItem>
  );
};

AccordionItem.Title = AccordionMenu;
AccordionItem.Content = AccordionContent;
