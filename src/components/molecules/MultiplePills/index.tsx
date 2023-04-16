import { Flex, FlexProps } from "@chakra-ui/react";
import { Pills } from "@components/atoms";
import { PillsProps } from "@components/atoms/Pills/types";

type MultiplePillsProps = PillsProps &
  FlexProps & {
    pills: PillsProps[];
  };

export const MultiplePills = ({ pills, ...props }: MultiplePillsProps) => {
  const renderPills = () => {
    return pills.map(({ key, selected, onClick }) => (
      <Pills key={key} selected={selected} onClick={onClick} />
    ));
  };

  return <Flex {...props}>{renderPills()}</Flex>;
};
