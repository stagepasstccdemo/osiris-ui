import { Badge } from "@chakra-ui/react";
import { styles } from "./styles";
import { boxShadowMap, colorMap, TextBadgeProps } from "./types";

export const TextBadge = ({
  variant = "outline",
  color = "white",
  bgColor = "default",
  fontWeight = "bold",
  boxShadow = "threeD",
  text,
  children,
  ...props
}: TextBadgeProps) => {
  return (
    <Badge
      px={16}
      py={10}
      fontWeight={fontWeight}
      color={color}
      bgColor={bgColor ? colorMap[bgColor] : "slate"}
      boxShadow={boxShadow ? boxShadowMap[boxShadow] : "threeD"}
      className={`${styles.default} ${styles.variant[variant]}`}
      {...props}
    >
      {text || children}
    </Badge>
  );
};
