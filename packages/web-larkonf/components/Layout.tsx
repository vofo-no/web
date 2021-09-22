import { SanityImageSource } from "@sanity/image-url/lib/types/types";
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
  children: React.ReactNode;
  title: string;
  subtitle: string;
  image: SanityImageSource & { alt: string };
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
                <a href="#foredragsholdere">Foredragsholdere</a>
                <a href="#program">Program</a>
                <a href="#registrer">
                  <span
                    style={{
                      border: "2px solid green",
                      borderRadius: "5px",
                      padding: "0.7rem 1.2rem",
                    }}
                  >
                    Registrer deg nå
                  </span>
                </a>
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
