import { BuildOptions } from './types/config';
import {ResolveOptions} from 'webpack';

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],//указываем папку от куда начинать смотреть абсолютные пути
        mainFiles: ['index'],
        alias: {}
    }
}