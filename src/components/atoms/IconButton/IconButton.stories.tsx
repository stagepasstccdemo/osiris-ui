import { Meta, StoryObj } from "@storybook/react";

import { IconButton } from ".";

export default {
  title: "Components/Atoms/IconButton",
  component: IconButton,
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
