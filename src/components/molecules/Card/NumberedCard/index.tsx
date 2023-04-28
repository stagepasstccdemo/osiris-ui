import { Box, Flex, Image, Text } from "@components/atoms";
import { NumberedCardProps } from "./types";

export const NumberedCard = ({
  sourceBannerImg,
  titleCard,
  numberInCard,
}: NumberedCardProps) => {
  return (
    <Flex flexDirection="row" alignItems="flex-end" ml=".25rem" mb="2.5rem">
      <Text
        as="h1"
        text={numberInCard}
        fontSize="8.75rem"
        height="8.75rem"
        fontWeight="bold"
        color="os-ternary.300"
      />
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        mt="2rem"
        maxWidth="10.75rem"
        maxHeight="10.75rem"
        roundedTop="1.5rem"
        roundedBottom="1rem"
        bgColor="os-secondary.100"
        ml="-1.875rem"
        mb="-0.563rem"
      >
        <Image src={sourceBannerImg} roundedTop={15} />
        <Box px="0.75rem" py="0.625rem">
          <Text text={titleCard} noOfLines={1} color="gray.100" />
        </Box>
      </Flex>
    </Flex>
  );
};

NumberedCard.defaultProps = {
  sourceBannerImg: "https://github.com/fillipeags.png",
  titleCard: "",
  numberInCard: 0,
};
