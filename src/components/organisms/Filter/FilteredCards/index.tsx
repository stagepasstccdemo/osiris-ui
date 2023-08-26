import { Flex } from "@chakra-ui/react";
import { Box, Text, TextBadge } from "@components/atoms";
import { Card } from "@components/molecules";
import { BigCardProps } from "@components/molecules/Card/BigCard/types";
import { NumberedCardProps } from "@components/molecules/Card/NumberedCard/types";
import { Swiper } from "@components/atoms/Swiper";
import { SwiperSlide } from "swiper/react";
import { FilteredCardsProps } from "./types";

export const FilteredCards = ({
  textLabel,
  buttonLabel,
  flexProps,
  textProps,
  textBadgeProps,
  renderList,
  hasSeeMoreOption,
  cardType,
  onSeeMoreClick,
}: FilteredCardsProps) => {
  const renderListMap = () => {
    return (
      <Swiper>
        {renderList.map(
          ({
            key,
            sourceBannerImg,
            titleCard,
            legendCard,
            detailsDescriptionCard,
            priceTag,
            textButtonLabel,
            hasParentalHating,
            parentalRating,
          }: BigCardProps) => (
            <SwiperSlide key={key}>
              <Card.Big
                sourceBannerImg={sourceBannerImg}
                titleCard={titleCard}
                legendCard={legendCard}
                detailsDescriptionCard={detailsDescriptionCard}
                priceTag={priceTag}
                textButtonLabel={textButtonLabel}
                hasParentalHating={hasParentalHating}
                parentalRating={parentalRating}
                handleCardClick={(value) => {
                  onSeeMoreClick(value);
                }}
                cardItemId={key}
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
    );
  };

  const renderNumberedListMap = () => {
    return (
      <Swiper>
        {renderList.map((item: NumberedCardProps) => (
          <SwiperSlide key={item.key}>
            <Card.Numbered
              sourceBannerImg={item.sourceBannerImg}
              titleCard={item.titleCard}
              numberInCard={item.numberInCard}
              handleCardClick={(value) => {
                onSeeMoreClick(value);
              }}
              cardItemId={item.key}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    );
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
        {hasSeeMoreOption && (
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
        )}
      </Flex>
      {cardType === "big" ? renderListMap() : renderNumberedListMap()}
    </Box>
  );
};

FilteredCards.defaultProps = {
  textLabel: "Filtered Cards",
  buttonLabel: "Clear All",
  hasSeeMoreOption: false,
  cardType: "big",
};
