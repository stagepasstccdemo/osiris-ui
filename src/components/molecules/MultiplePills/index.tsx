import { Flex } from "@chakra-ui/react";
import { Pills } from "@components/atoms";
import { MultiplePillsProps } from "./types";

export const MultiplePills = ({ pills, ...props }: MultiplePillsProps) => {
  const renderPills = () => {
    return pills.map(({ key, selected, onClick }) => (
      <Pills key={key} selected={selected} onClick={onClick} />
    ));
  };

  return <Flex {...props}>{renderPills()}</Flex>;
};
