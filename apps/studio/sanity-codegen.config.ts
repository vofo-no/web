import { SanityCodegenConfig } from "sanity-codegen";

const config: SanityCodegenConfig = {
  schemaPath: "./schemas/schema",
  outputPath: "../../packages/shared/schema.ts",
};

export default config;
