import { Meta, StoryObj } from "@storybook/react";

import { Heading } from ".";

export default {
  title: "Components/Atoms/Heading",
  component: Heading,
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
