import { BadgeProps } from "@chakra-ui/react";

const tailwindColors = require("@theme/colors");

type ColorScheme = {
  default: string;
  primary: string;
  secondary: string;
  ternary: string;
};

export const colorMap: Record<keyof ColorScheme, string> = {
  default: tailwindColors.gray[700],
  primary: tailwindColors["os-ternary"][200],
  secondary: tailwindColors["os-ternary"][300],
  ternary: tailwindColors.alert.success,
};

export type TextBadgeProps = BadgeProps & {
  variant?: "solid" | "subtle" | "outline";
  color?: typeof tailwindColors;
  bgColor?: keyof ColorScheme;
  fontWeight?: keyof typeof tailwindColors.fontWeight;
  children: React.ReactNode;
};
