import { BuildOptions } from './types/config';
import type {Configuration as DevServerConfiguration} from 'webpack-dev-server';
import path from 'path';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: true,
        static: path.resolve(__dirname, 'build'),
        historyApiFallback: true// если этого не будет то находясь на странице /about к примеру и перезагрузке страницы будет написано can not get
        //то есть свойство для проксирования запросов через index файл
    }
}