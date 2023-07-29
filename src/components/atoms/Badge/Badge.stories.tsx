import { Meta, StoryObj } from "@storybook/react";

import { TextBadge } from ".";
import { TextBadgeProps } from "./types";

export default {
  title: "Components/Atoms/TextBadge",
  component: TextBadge,
  decorators: [
    (Story) => {
      return (
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {Story()}
        </div>
      );
    },
  ],
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["solid", "subtle", "outline"],
      },
      description:
        "The style variant of the badge (solid, subtle, or outline).",
    },
    color: {
      control: {
        type: "color",
      },
      description: "The text color of the badge.",
    },
    bgColor: {
      control: {
        type: "text",
      },
      description: "The background color of the badge.",
    },
    fontWeight: {
      control: {
        type: "select",
        options: ["normal", "bold", "semibold", "extrabold"],
      },
      description: "The font weight of the badge text.",
    },
    boxShadow: {
      control: {
        type: "select",
        options: ["basic", "threeD"],
      },
      description: "The type of box shadow to apply to the badge.",
    },
    text: {
      control: {
        type: "text",
      },
      description: "The text to be displayed inside the badge.",
    },
    children: {
      description: "React children to be displayed inside the badge.",
    },
  },
} as Meta;

export const Default: StoryObj<TextBadgeProps> = (args) => (
  <TextBadge {...args} />
);

Default.args = {
  variant: "outline",
  color: "red",
  bgColor: "default",
  fontWeight: "bold",
  boxShadow: "threeD",
  text: "Default Badge",
};
