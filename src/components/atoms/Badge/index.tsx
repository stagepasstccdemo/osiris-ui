import { Badge } from "@chakra-ui/react";
import { colorMap, TextBadgeProps } from "./types";

export const TextBadge = ({
  variant,
  children,
  color,
  ...props
}: TextBadgeProps) => {
  return (
    <Badge
      px={16}
      py={10}
      bgColor={color ? colorMap[color] : "slate"}
      color="white"
      className="bg-slate-50 rounded-3xl text-left"
      {...props}
    >
      {children}
    </Badge>
  );
};
