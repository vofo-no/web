import { ToggleNavButton } from "./ToggleNavButton";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

export default {
  component: ToggleNavButton,
} as ComponentMeta<typeof ToggleNavButton>;

const Template: ComponentStory<typeof ToggleNavButton> = (args) => (
  <ToggleNavButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  isOpen: false,
};
