import { SanityCodegenConfig } from "sanity-codegen";

const config: SanityCodegenConfig = {
  schemaPath: "./schemas/schema",
  outputPath: "../../packages/shared/src/schema.ts",
};

export default config;
