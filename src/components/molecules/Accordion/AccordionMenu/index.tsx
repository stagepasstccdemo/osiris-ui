import { AccordionButton, AccordionIcon } from "@chakra-ui/react";
import { Box, Text } from "@components/atoms";
import { AccordionData } from "../types";

type AccordionMenuProps = Pick<AccordionData, "title">;

export const AccordionMenu = ({ title }: AccordionMenuProps) => {
  return (
    <Text as="h2" color="os-primary.100">
      <AccordionButton bgColor="gray.200" rounded="xl" fontSize="2rem">
        <Box as="span" flex="1" textAlign="left">
          {title}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </Text>
  );
};

AccordionMenu.defaultProps = {
  value: "Accordion Menu",
};
