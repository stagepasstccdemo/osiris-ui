import { Meta } from "@storybook/react";
import { BulletPoint } from ".";

export default {
  title: "Components/Atoms/BulletPoint",
  component: BulletPoint,
  argTypes: {
    text: {
      control: { type: "text" },
      description: "The text content for the bullet point.",
    },
    children: {
      description: "Alternative to `text`, you can provide children elements.",
    },
  },
} as Meta;

const Template = (args) => <BulletPoint {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Default Bullet Point Text",
};
