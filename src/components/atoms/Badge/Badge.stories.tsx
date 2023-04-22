import { Meta, StoryObj } from "@storybook/react";

import { TextBadge } from ".";

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
} as Meta;

export const Default: StoryObj = {};
