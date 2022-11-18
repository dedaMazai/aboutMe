import webpack from 'webpack';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/config';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { paths, mode, isDev } = options;

    return {
        mode, // если вебпак видит мод продакшен он сразу сжимает итоговый файл и убирает всё лишнее
        entry: paths.entry,
        // стартовая точка нашего приложения,
        // используем path чтобы не хардкодить пути, и прописываем дирнейм
        // это папка где мы находимся в данный момент
        // тут же можем создать несколько ентрипоинтов(точек входа), просто в ентри передаем объект
        // с ключами названиями итоговых файлов и значением ссылкой
        output: { // куда и как будем делать сборку приложения
            filename: '[name].[contenthash].js', // название бандла
            path: paths.build, // папка куда складывать бандл
            clean: true,
            publicPath: '/',
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options), // здесь конфигурируем лоудеры
        },
        resolve: buildResolvers(options), // необходимо чтобы при
        // импорте не прописывать расширения файлов
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}
