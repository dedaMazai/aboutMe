import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true, // если этого не будет то находясь
        // на странице /about к примеру и перезагрузке страницы будет написано
        // can not get
        // то есть свойство для проксирования запросов через index файл
        hot: true,
    };
}
