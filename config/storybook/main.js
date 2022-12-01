module.exports = {
    stories: [
        '../../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        'storybook-addon-mock',
    ],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-webpack5',
    },
    webpackFinal: (config) => {
        const fileLoaderRule = config.module.rules.find(
            (rule) => rule.test && rule.test.test('.svg'),
        );
        fileLoaderRule.exclude = /\.svg$/;
        return config;
    },
};
