const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    stats: {warnings:false},
    entry: {
        main: './src/index.ts',
    },
    output: {
        path: __dirname + '/dist/',
    },
    devServer: {
        devMiddleware: {
            writeToDisk: true,
        },
    },
    resolve: {
        fallback: {
            "path": require.resolve("path-browserify"),
            "constants": require.resolve("constants-browserify"),
            "stream": require.resolve("readable-stream"),
            "buffer": require.resolve("buffer/"),
            "assert": require.resolve("assert-browserify"),
            "fs": require.resolve("browserify-fs"),
            "util": require.resolve("util/"),
        },
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: 'tsconfig.json',
                        },
                    },
                ],
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            // Make a global `process` variable that points to the `process` package,
            // because the `util` package expects there to be a global variable named `process`.
                 // Thanks to https://stackoverflow.com/a/65018686/14239942
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
         }),
         new webpack.ContextReplacementPlugin(
            /\/\@tsed\/core\//,
            (data) => {
              delete data.dependencies[0].critical;
              return data;
            },
          ),
        new HtmlWebpackPlugin()
    ],
}
