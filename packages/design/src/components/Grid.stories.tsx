import React from "react";
import { Box } from "./Box";
import { Grid } from "./Grid";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: Grid,
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => (
  <Grid {...args}>
    <Box>Box 1</Box>
    <Box>Box 2</Box>
    <Box>Box 3</Box>
    <Box>Box 4</Box>
    <Box>Box 5</Box>
    <Box>Box 6</Box>
  </Grid>
);

export const Default = Template.bind({});
Default.args = {
  cols: 2,
};

export const Container = Template.bind({});
Container.args = {
  cols: 2,
  isContainer: true,
};
