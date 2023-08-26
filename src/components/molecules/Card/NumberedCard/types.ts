export type NumberedCardProps = {
  key?: number;
  sourceBannerImg?: string;
  titleCard?: string;
  numberInCard?: number | string;
  handleCardClick?: (id: number) => void;
  cardItemId?: number;
};
