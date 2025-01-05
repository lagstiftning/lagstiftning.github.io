import EleventyUnifiedPlugin from "eleventy-plugin-unified";

export default async function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyUnifiedPlugin, {
    htmlTransforms: [["rehype-format", { indent: " " }]],
  });
}
