module.exports = {
  // core: { builder: "webpack5" },
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  // logLevel: "debug",
  // reactOptions: {
  //   fastRefresh: true,
  // },
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-knobs",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-viewport",
    "@storybook/preset-create-react-app"
  ]
}