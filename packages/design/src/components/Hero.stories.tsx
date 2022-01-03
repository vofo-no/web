import React from "react";
import { Hero } from "./Hero";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./Button";
import { Box } from "./Box";

export default {
  component: Hero,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />;

export const Default = Template.bind({});
Default.args = {
  smallImageUrl: "https://placekitten.com/640/480",
  mediumImageUrl: "https://placekitten.com/1024/576",
  largeImageUrl: "https://placekitten.com/1920/1080",
  alt: "Haha",
  children: <h1>Hero!</h1>,
};

export const Stacked: ComponentStory<typeof Hero> = (args) => (
  <>
    <Hero {...args} />
    <Box isContainer>
      <Button variant="primary" size="xlarge">
        Hello world!
      </Button>
    </Box>
  </>
);
Stacked.args = {
  smallImageUrl: "https://placekitten.com/640/480",
  mediumImageUrl: "https://placekitten.com/1024/576",
  largeImageUrl: "https://placekitten.com/1920/1080",
  alt: "Haha",
  children: <h1>Hero!</h1>,
  isStack: true,
};
