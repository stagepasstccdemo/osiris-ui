import { Meta, StoryObj } from "@storybook/react";

import { Pills } from ".";

export default {
  title: "Components/Atoms/Pills",
  component: Pills,
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
