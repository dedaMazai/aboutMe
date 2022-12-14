import webpack from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        locales: '',
        buildLocales: '',
    };
    config!.resolve!.modules!.push(paths.src);
    config!.resolve!.extensions!.push('.ts', '.tsx');
    config!.resolve!.alias = {
        ...config!.resolve!.alias,
        '@/shared': path.resolve(__dirname, '..', '..', 'src', 'shared'),
        '@/entities': path.resolve(__dirname, '..', '..', 'src', 'entities'),
        '@/features': path.resolve(__dirname, '..', '..', 'src', 'features'),
        '@/widgets': path.resolve(__dirname, '..', '..', 'src', 'widgets'),
        '@/pages': path.resolve(__dirname, '..', '..', 'src', 'pages'),
        '@/app': path.resolve(__dirname, '..', '..', 'src', 'app'),
    };

    config!.module!.rules!.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config!.module!.rules!.push(buildCssLoader(true));

    config!.plugins!.push(
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify('https://testapi.ru'),
            __PROJECT__: JSON.stringify('storybook'),
        }),
    );

    return config;
};
