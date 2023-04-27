import { Flex } from "@chakra-ui/react";
import { Box, Text, TextBadge } from "@components/atoms";
import { Card } from "@components/molecules";
import { BigCardProps } from "@components/molecules/Card/BigCard/types";
import { NumberedCardProps } from "@components/molecules/Card/NumberedCard/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import { FilteredCardsProps } from "./types";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const FilteredCards = ({
  textLabel,
  buttonLabel,
  flexProps,
  textProps,
  textBadgeProps,
  renderList,
  hasSeeMoreOption,
  cardType,
}: FilteredCardsProps) => {
  const renderListMap = () => {
    return (
      <Swiper
        effect="coverflow"
        grabCursor
        spaceBetween={-40}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 0.5,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        {renderList.map((item: BigCardProps) => (
          <SwiperSlide key={item.key}>
            <Card.Big
              sourceBannerImg={item.sourceBannerImg}
              titleCard={item.titleCard}
              legendCard={item.legendCard}
              detailsDescriptionCard={item.detailsDescriptionCard}
              priceTag={item.priceTag}
              textButtonLabel={item.textButtonLabel}
              hasParentalHating={item.hasParentalHating}
              parentalRating={item.parentalRating}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

  const renderNumberedListMap = () => {
    return renderList.map((item: NumberedCardProps) => (
      <Card.Numbered
        key={item.key}
        sourceBannerImg={item.sourceBannerImg}
        titleCard={item.titleCard}
        numberInCard={item.numberInCard}
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
