module.exports = {
    mode: 'development',
    devtool: 'source-map',
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
            "stream": require.resolve("stream-browserify"),
            "buffer": require.resolve("buffer"),
            "assert": require.resolve("assert-browserify"),
            "fs": require.resolve("browserify-fs"),
            "util": false
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
    }
}
