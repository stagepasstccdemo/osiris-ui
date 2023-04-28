import {
  Box,
  BulletPoint,
  Button,
  Flex,
  Image,
  SimpleDivider,
  Text,
} from "@components/atoms";
import { BigCardProps } from "./types";

export const BigCard = ({
  sourceBannerImg,
  titleCard,
  legendCard,
  detailsDescriptionCard,
  priceTag,
  textButtonLabel,
  hasParentalHating = true,
  parentalRating = "+16",
}: BigCardProps) => {
  return (
    <Flex
      className="relative"
      mt="2rem"
      maxWidth="15.625rem"
      maxHeight="22.5rem"
      rounded="15px"
      bgColor="os-secondary.100"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Image
        src={sourceBannerImg}
        roundedTop={15}
        width="15.625rem"
        objectFit="cover"
        height="9.5rem"
      />
      <Box p="4">
        <Text
          text={titleCard}
          color="os-primary.300"
          fontWeight="bold"
          fontSize="md"
          noOfLines={1}
        />
        <Text
          text={legendCard}
          color="gray.100"
          fontWeight="bold"
          fontSize="xs"
          noOfLines={1}
        />
        <Text
          text={detailsDescriptionCard}
          color="gray.300"
          fontWeight="light"
          fontSize="xs"
          noOfLines={1}
        />
        <SimpleDivider numDots={10} padding="0.875rem 0" />
        <Text text={priceTag} color="os-primary.300" fontWeight="bold" />
      </Box>
      <Button
        bgColor="os-ternary.300"
        color="gray.100"
        maxWidth="100%"
        maxHeight="2.8rem"
        roundedBottom="15px"
        px="3rem"
        py="1.75rem"
      >
        {textButtonLabel}
      </Button>
      {hasParentalHating ? <BulletPoint text={parentalRating} /> : null}
    </Flex>
  );
};
