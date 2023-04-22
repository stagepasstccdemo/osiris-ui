import { Meta, StoryObj } from "@storybook/react";

import { Navigate } from ".";

export default {
  title: "Components/Atoms/Navigate",
  component: Navigate,
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
