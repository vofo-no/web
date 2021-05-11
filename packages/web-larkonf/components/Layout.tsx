import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { BaseStyles, Box, Logo, Text } from "@vofo-no/design";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";

const builder = imageUrlBuilder(client);

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  image: SanityImageSource & { alt: string };
}

function Layout({
  children,
  title,
  subtitle,
  image,
}: LayoutProps): JSX.Element {
  return (
    <>
      <BaseStyles />
      <Box boxShadow="small" variant="light" px={2} py={6}>
        <Box
          container
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Logo />
          <Text as="h1" fontSize={6} mt={4} mb={0}>
            {title}
          </Text>
          <Text my={0} fontSize={3}>
            {subtitle}
          </Text>
        </Box>
      </Box>
      {image && (
        <img
          src={builder
            .image(image)
            .auto("format")
            .width(1400)
            .height(600)
            .url()}
          alt={image.alt}
          style={{ maxWidth: "100%" }}
        />
      )}

      <Box my={2} container>
        {children}
      </Box>
      <Box variant="dark" mt={4} py={3} px={2}>
        <Box container>Vofo!</Box>
      </Box>
    </>
  );
}

export default Layout;
