import { AccordionPanel, Link } from "@chakra-ui/react";
import { Flex, Text } from "@components/atoms";
import { AccordionData } from "../types";

export const AccordionContent = ({ data }: { data: AccordionData[] }) => {
  const renderContent = () => {
    return data.map((item: AccordionData) => (
      <Link key={item.id} href={item.pathTo}>
        <Text fontSize="1.5rem">{item.title}</Text>
      </Link>
    ));
  };

  return (
    <AccordionPanel pb={4}>
      <Flex flexDirection="column" gap="2" ml="0.5rem">
        {renderContent()}
      </Flex>
    </AccordionPanel>
  );
};

AccordionContent.defaultProps = {
  data: [
    {
      id: 1,
      title: "Accordion Content",
      pathTo: "/",
    },
  ],
};
