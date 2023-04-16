import { BadgeProps } from "@chakra-ui/react";

const tailwindColors = require("@theme/colors");
const tailwindShadows = require("@theme/shadows");

type ColorScheme = {
  default: string;
  primary: string;
  secondary: string;
  ternary: string;
};

type ShadowMap = {
  basic: string;
  threeD: string;
};

export const colorMap: Record<keyof ColorScheme, string> = {
  default: tailwindColors.gray[700],
  primary: tailwindColors["os-ternary"][200],
  secondary: tailwindColors["os-ternary"][300],
  ternary: tailwindColors.alert.success,
};

export const boxShadowMap: Record<keyof ShadowMap, string> = {
  basic: tailwindShadows.boxShadow.glowingBlur,
  threeD: tailwindShadows.boxShadow.threeDShadow,
};

export type TextBadgeProps = BadgeProps & {
  variant?: "solid" | "subtle" | "outline";
  color?: typeof tailwindColors;
  bgColor?: keyof ColorScheme;
  boxShadow?: keyof ShadowMap;
  fontWeight?: keyof typeof tailwindColors.fontWeight;
  text: string;
  children: React.ReactNode;
};
