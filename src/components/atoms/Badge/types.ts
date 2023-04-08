type ColorScheme = {
  primary: "red";
  secondary: "blue";
  ternary: "yellow";
};

export const colorMap: Record<keyof ColorScheme, string> = {
  primary: "red",
  secondary: "blue",
  ternary: "yellow",
};

export interface TextBadgeProps {
  variant?: "solid" | "subtle" | "outline";
  color?: keyof ColorScheme;
  children: React.ReactNode;
}
