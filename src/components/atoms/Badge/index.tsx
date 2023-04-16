import { Badge } from "@chakra-ui/react";
import { boxShadowMap, colorMap, TextBadgeProps } from "./types";

const styles = {
  default: "bg-slate-50 rounded-2xl text-left",
  variant: {
    outline: "border-4 border-slate-50",
  },
};

export const TextBadge = ({
  variant = "outline",
  color = "white",
  bgColor = "default",
  fontWeight = "bold",
  boxShadow = "threeD",
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
      {children}
    </Badge>
  );
};
