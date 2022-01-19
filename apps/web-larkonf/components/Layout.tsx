import {
  TextStyles,
  Header,
  Logo,
  NavMenu,
  NavItem,
  Button,
  Footer,
} from "design";
import MyHero from "./Hero";
import FooterSponsor from "./FooterSponsor";
import { PropsWithChildren } from "react";
import { IndexPageProps } from "../pages";

export interface LayoutProps extends IndexPageProps {
  start: Date;
  end: Date;
}

function Layout(props: PropsWithChildren<LayoutProps>): JSX.Element {
  return (
    <>
      <Header logo={<Logo variant="header" />}>
        <NavMenu alignRight>
          {props.program && (
            <NavItem showDesktop href="#program">
              Program
            </NavItem>
          )}
          <NavItem showDesktop>
            <div></div>
          </NavItem>
          {props.showSignUp && (
            <div>
              <Button
                as="a"
                href={props.registerUrl}
                target="_blank"
                rel="noopener"
                variant="primary"
                size="large"
              >
                Meld deg på
              </Button>
            </div>
          )}
        </NavMenu>
      </Header>
      <TextStyles fullWidth>
        <MyHero {...props} />
        {props.children}
      </TextStyles>
      <Footer>
        <div>
          <p style={{ textAlign: "center" }}>
            Konferansen arrangeres av{" "}
            <strong>
              <a href="https://www.vofo.no">Voksenopplæringsforbundet</a>
            </strong>
          </p>
          <p style={{ textAlign: "center" }}>
            <a href="https://www.vofo.no/om-vofo/personvernerklaering/">
              Personvernerklæring
            </a>
          </p>
          <FooterSponsor />
        </div>
      </Footer>
    </>
  );
}

export default Layout;
