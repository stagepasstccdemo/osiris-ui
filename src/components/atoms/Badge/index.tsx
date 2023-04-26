import { Badge } from "@chakra-ui/react";
import ChakraWrapper from "@providers/ChakraWrapper";
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
    <ChakraWrapper>
      <Badge
        px={4}
        py={4}
        fontWeight={fontWeight}
        color={color}
        bgColor={bgColor ? colorMap[bgColor] : "slate"}
        boxShadow={boxShadow ? boxShadowMap[boxShadow] : "threeD"}
        className={`${styles.default} ${styles.variant[variant]}`}
        borderRadius="full"
        {...props}
      >
        {text || children}
      </Badge>
    </ChakraWrapper>
  );
};
