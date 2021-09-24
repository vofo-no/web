import isFuture from "date-fns/isFuture";

import {
  BaseStyles,
  Box,
  Logo,
  Menu,
  MenuContainer,
  Text,
} from "@vofo-no/design";
import Hero, { HeroProps } from "./Hero";

interface LayoutProps {
  speakers?: Array<any>;
  program?: Array<any>;
  registerUrl?: string;
  children: React.ReactNode;
  start: Date;
}

function Layout(props: LayoutProps & HeroProps): JSX.Element {
  return (
    <>
      <BaseStyles />
      <Box variant="light" boxShadow="small">
        <Box
          container
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent={["center", "center", "space-between"]}
          mb={2}
        >
          <Logo variant="header" />
          <MenuContainer>
            <Menu>
              <Box flexDirection="row">
                {props.speakers && <a href="#deltakere">Deltakere</a>}
                {props.program && <a href="#program">Program</a>}
                {props.registerUrl && isFuture(props.start) && (
                  <a href={props.registerUrl} target="_blank">
                    <Text
                      as="span"
                      py={3}
                      px={4}
                      style={{ borderRadius: "5px" }}
                      backgroundColor="primary"
                      color="white"
                    >
                      Registrer deg nå
                    </Text>
                  </a>
                )}
              </Box>
            </Menu>
          </MenuContainer>
        </Box>
        <Hero {...props} />
      </Box>

      <Box my={2} container>
        {props.children}
      </Box>
      <Box variant="dark" mt={4} py={3} px={2}>
        <Box container>
          <Text textAlign="center">
            Konferansen arrangeres av{" "}
            <a href="http://vofo.no">
              <strong>Voksenopplæringsforbundet</strong>
            </a>
          </Text>
          <Text textAlign="center">
            <a href="http://vofo.no/om-vofo/personvernerklaering/">
              Personvernerklæring
            </a>
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default Layout;
