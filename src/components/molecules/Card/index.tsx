import { BigCard } from "./BigCard";
import { NumberedCard } from "./NumberedCard";

export const Card = ({ children }) => {
  return { children };
};

Card.Big = BigCard;
Card.Numbered = NumberedCard;
