import { AccordionButton, AccordionIcon } from "@chakra-ui/react";
import { Box, Text } from "@components/atoms";

export const AccordionMenu = () => {
  return (
    <Text as="h2" color="os-primary.100">
      <AccordionButton bgColor="gray.200" rounded="xl" fontSize="2rem">
        <Box as="span" flex="1" textAlign="left">
          Music
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </Text>
  );
};
