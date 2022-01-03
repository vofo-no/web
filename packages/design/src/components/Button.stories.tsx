import React from "react";
import { Button } from "./Button";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Button",
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Button",
  variant: "primary",
  isDisabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Button",
  variant: "secondary",
  isDisabled: false,
};

export const Outline = Template.bind({});
Outline.args = {
  children: "Button",
  variant: "outline",
  isDisabled: false,
};

export const Text = Template.bind({});
Text.args = {
  children: "Button",
  variant: "text",
  isDisabled: false,
};

export const Menu = Template.bind({});
Menu.args = {
  children: "Button",
  variant: "menu",
  isOpen: false,
};
export const Disabled = Template.bind({});
Disabled.args = {
  children: "Button",
  isDisabled: true,
};

export const Link = Template.bind({});
Link.args = {
  children: "Button",
  as: "a",
};

export const Loading = Template.bind({});
Loading.args = {
  children: "Button",
  isLoading: true,
};

export const Small = Template.bind({});
Small.args = {
  children: "Button",
  size: "small",
};

export const Large = Template.bind({});
Large.args = {
  children: "Button",
  size: "large",
};

export const XLarge = Template.bind({});
XLarge.args = {
  children: "Button",
  size: "xlarge",
};
