import React from "react";
import { Box } from "./Box";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Hello, world!",
};

export const Container = Template.bind({});
Container.args = {
  isContainer: true,
  children: "Hello, world!",
};

export const ContainerWithNested = () => (
  <>
    <Box isContainer>
      <Box padding="no">Hello, in a box!</Box>
    </Box>
    <Box isContainer padding="no">
      <Box>Hello, in a box!</Box>
    </Box>
  </>
);
