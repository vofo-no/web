import isFuture from "date-fns/isFuture";
import {
  TextStyles,
  Header,
  Logo,
  NavMenu,
  NavItem,
  Button,
  Footer,
} from "design";
import MyHero, { HeroProps } from "./Hero";
import FooterSponsor from "./FooterSponsor";
import { LarKonfQueryResult } from "../queries/larkonfQuery";

interface LayoutProps {
  children: React.ReactNode;
  start: Date;
}

function Layout(
  props: Pick<
    LarKonfQueryResult["larkonfEvent"],
    "mainSpeakers" | "program" | "registerUrl"
  > &
    LayoutProps &
    HeroProps
): JSX.Element {
  return (
    <>
      <Header logo={<Logo variant="header" />}>
        <NavMenu alignRight>
          {props.mainSpeakers && (
            <NavItem showDesktop href="#deltakere">
              Du møter disse
            </NavItem>
          )}
          {props.program && (
            <NavItem showDesktop href="#program">
              Program
            </NavItem>
          )}
          <NavItem showDesktop>
            <div></div>
          </NavItem>
          {props.registerUrl && isFuture(props.start) && (
            <div>
              <Button
                as="a"
                href={props.registerUrl}
                target="_blank"
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
