import React from "react";
import { Logo } from "./Logo";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Default = Template.bind({});

export const Responsive = Template.bind({});
Responsive.args = {
  variant: "header",
};
