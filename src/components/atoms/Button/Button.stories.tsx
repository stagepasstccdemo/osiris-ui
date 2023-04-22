import { Meta, StoryObj } from "@storybook/react";

import { Button } from ".";

export default {
  title: "Components/Atoms/Button",
  component: Button,
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
