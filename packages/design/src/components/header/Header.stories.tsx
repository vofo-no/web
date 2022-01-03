import { Header } from "./Header";
import { Logo } from "../Logo";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { NavItem } from "./NavItem";
import React from "react";
import { Button } from "../Button";
import { NavMenu } from "./NavMenu";

export default {
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const VofoHeader = Template.bind({});
VofoHeader.args = {
  logo: (
    <a href="#">
      <Logo variant="header" />
    </a>
  ),
  isResponsive: true,
  navBreakpoint: 750,
  children: (
    <>
      <NavMenu>
        <NavItem href="#">Politikk</NavItem>
        <NavItem href="#">Medlemmer</NavItem>
        <NavItem href="#">Fakta</NavItem>
        <NavItem href="#">Ressurser</NavItem>
      </NavMenu>
      <NavMenu variant="top">
        <NavItem href="#" variant="top">
          English
        </NavItem>
        <NavItem href="#" variant="top">
          Om Vofo
        </NavItem>
        <NavItem href="#" variant="top">
          Kontakt oss
        </NavItem>
      </NavMenu>
    </>
  ),
};

export const LaeringskonferansenHeader = Template.bind({});
LaeringskonferansenHeader.args = {
  logo: <Logo variant="header" />,
  isResponsive: false,
  navBreakpoint: 750,
  children: (
    <>
      <NavMenu alignRight>
        <NavItem showDesktop href="#">
          Du møter disse
        </NavItem>
        <NavItem showDesktop href="#">
          Program
        </NavItem>
        <NavItem showDesktop>
          <div></div>
        </NavItem>
        <div>
          <Button as="a" href="#" variant="primary" size="large">
            Meld deg på
          </Button>
        </div>
      </NavMenu>
    </>
  ),
};

export const PlainHeader = Template.bind({});
PlainHeader.args = {
  logo: <Logo variant="header" />,
  isResponsive: false,
  children: null,
};
