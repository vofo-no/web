import React from "react";
import { Footer } from "./Footer";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <div>Footer text</div>,
};

export const WithLink = Template.bind({});
WithLink.args = {
  children: (
    <div>
      Footer text <a href="#">Link o'hoy!</a>
    </div>
  ),
};

export const Double = Template.bind({});
Double.args = {
  children: (
    <>
      <div>
        Hey ho multiline
        <br />
        Tada!
      </div>
      <div>Oh no!</div>
    </>
  ),
};
