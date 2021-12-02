import { Box, Text } from "@vofo-no/design";
import { Organization } from "studio/schema";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";

const builder = imageUrlBuilder(client);

interface OrganizationsLogoBandProps {
  organizations?: Array<Pick<Organization, "name" | "logo" | "link">>;
}

function OrganizationsLogoBand({
  organizations,
}: OrganizationsLogoBandProps): JSX.Element {
  if (!organizations && organizations.length === 0) {
    return null;
  }

  return (
    <div id="organisasjoner">
      <Text textAlign="center">Organisasjoner som bidrar med innhold:</Text>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        {organizations
          .filter((item) => item.logo?.asset)
          .map((item) => (
            <Box
              key={item.name}
              m={2}
              height={[75, 90, 120]}
              position="relative"
              display="flex"
              justifyContent="center"
            >
              <a href={item.link} target="_blank" title={item.name}>
                <img
                  src={builder
                    .image(item.logo)
                    .format("png")
                    .auto("format")
                    .height(120)
                    .url()}
                  alt={item.name}
                  style={{ height: "100%", width: "100%" }}
                />
              </a>
            </Box>
          ))}
      </Box>
    </div>
  );
}

export default OrganizationsLogoBand;
