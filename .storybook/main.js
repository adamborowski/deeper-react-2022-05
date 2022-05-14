module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  babel: async (options) => ({
    ...options,
    /* add plugin to babel, however disable it by default */
    plugins: [...options.plugins, ['babel-plugin-storybook-csf-title', false]],
    /* enable the plugin for all files that match your story name pattern */
    overrides: [
      ...options.overrides,
      {
        include: /\/stories\.(ts|tsx)$/,
        plugins: [
          [
            'babel-plugin-storybook-csf-title',
            { toTitle: require('./toStoryName') },
          ],
        ],
      },
    ],
    // any extra options you want to set
  }),
};
