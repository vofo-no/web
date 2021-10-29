// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import campaign from "./documents/campaign";
import event from "./documents/event";
import venue from "./documents/venue";
import badge from "./objects/badge";
import address from "./objects/address";
import mainImage from "./objects/mainImage";
import schedule from "./objects/schedule";
import person from "./objects/person";
import programItem from "./objects/programItem";
import siteConfig from "./documents/siteConfig";
import organization from "./documents/organization";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    campaign,
    event,
    badge,
    address,
    mainImage,
    schedule,
    venue,
    organization,
    person,
    programItem,
    siteConfig,
  ]),
});
