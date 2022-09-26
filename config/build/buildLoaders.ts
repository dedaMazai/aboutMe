import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BuildOptions} from './types/config';

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

    const cssLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
                modules: {
                  auto: (resPath: string) => Boolean(resPath.includes('.module.')),//чтобы принимали уникальное значение названия классов только в модульных css
                  localIdentName: isDev ?
                  '[path][name]__[local]--[hash:base64:5]' :
                  '[hash:base64:8]'//чтобы в продакшен сборке автогенерируемые названия а в дев усё читаемо
                }
            }
          },
          "sass-loader",
        ],
      }

    //так как мы используем TS то дополнительные лоудеры не нужны для JSX
    //но если бы писали на простом js то надо было бы добавить babel-louder, он же работает с JSX
    const typescriptLoader = {
        test: /\.tsx?$/,//здесь указываем расширение файлов которые необходимо пропустить через лоудер, ловит ts и tsx
        use: 'ts-loader',// указывем лоудер для тайпскрипта
        exclude: /node_modules/,//не будем обрабатывать эти папки
    }

    return [
        typescriptLoader,
        cssLoaders,
    ]
}