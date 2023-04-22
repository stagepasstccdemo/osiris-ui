import { Flex } from "@chakra-ui/react";
import { Pills } from "@components/atoms";
import { PillsProps } from "@components/atoms/Pills/types";
import { MultiplePillsProps } from "./types";

export const MultiplePills = ({
  pills,
  setPage,
  ...props
}: MultiplePillsProps) => {
  const renderPills = () => {
    return pills.map(({ key, selected, onClick }) => (
      <Pills key={key} selected={selected} onClick={() => onClick(setPage)} />
    ));
  };

  return <Flex {...props}>{renderPills()}</Flex>;
};
