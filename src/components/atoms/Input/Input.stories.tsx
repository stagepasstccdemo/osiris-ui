import { Meta, StoryObj } from "@storybook/react";

import { Input } from ".";

export default {
  title: "Components/Atoms/Input",
  component: Input,
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
