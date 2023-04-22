import { Meta, StoryObj } from "@storybook/react";

import { Text } from ".";

export default {
  title: "Components/Atoms/Text",
  component: Text,
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
