import { Flex } from "@chakra-ui/react";
import { Text, TextBadge } from "@components/atoms";
import { FilteredCardsProps } from "./types";

export const FilteredCards = ({
  textLabel,
  buttonLabel,
  flexProps,
  textProps,
  textBadgeProps,
}: FilteredCardsProps) => {
  return (
    <Flex alignItems="center" justifyContent="space-between" {...flexProps}>
      <Text
        text={`| ${textLabel}`}
        fontSize={[24, "2xl", "3xl"]}
        color="os-ternary.300"
        {...textProps}
      />
      <TextBadge
        text={buttonLabel}
        px="0.875rem"
        py="0.625rem"
        fontSize={14}
        variant="solid"
        rounded="full"
        bgColor="lightPurple"
        color="os-ternary.300"
        fontWeight="bold"
        textTransform="lowercase"
        {...textBadgeProps}
      />
    </Flex>
  );
};

FilteredCards.defaultProps = {
  textLabel: "Filtered Cards",
  buttonLabel: "Clear All",
};
