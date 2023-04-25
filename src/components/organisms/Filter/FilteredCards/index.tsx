import { Flex } from "@chakra-ui/react";
import { Box, Text, TextBadge } from "@components/atoms";
import { Card } from "@components/molecules";
import { BigCardProps } from "@components/molecules/Card/BigCard/types";
import { FilteredCardsProps } from "./types";

export const FilteredCards = ({
  textLabel,
  buttonLabel,
  flexProps,
  textProps,
  textBadgeProps,
  renderList,
}: FilteredCardsProps) => {
  const renderListMap = () => {
    return renderList.map((item: BigCardProps) => (
      <Card.Big
        key={item.key}
        sourceBannerImg={item.sourceBannerImg}
        titleCard={item.titleCard}
        legendCard={item.legendCard}
        detailsDescriptionCard={item.detailsDescriptionCard}
        priceTag={item.priceTag}
        textButtonLabel={item.textButtonLabel}
        hasParentalHating={item.hasParentalHating}
        parentalRating={item.parentalRating}
      />
    ));
  };

  return (
    <Box>
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
      {renderListMap()}
    </Box>
  );
};

FilteredCards.defaultProps = {
  textLabel: "Filtered Cards",
  buttonLabel: "Clear All",
};
