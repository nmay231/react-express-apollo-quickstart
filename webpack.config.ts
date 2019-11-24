/** @format */

import path from 'path'
import webpack from 'webpack'

const isProd = process.env.NODE_ENV === 'production'

const resolve = (relative: string) => path.resolve(__dirname, relative)

const serverConfig: webpack.Configuration = {
    name: 'server',
    mode: isProd ? 'production' : 'development',
    entry: {
        main: './src/server/server.ts',
    },
    output: {
        path: resolve('dist'),
        filename: 'server.bundle.js',
    },
    module: {
        rules: [
            {
                test: /.ts$/,
                loader: 'ts-loader',
                options: {
                    configFile: resolve('config/tsconfig.server.json'),
                },
            },
        ],
    },
    resolve: { extensions: ['.mjs', '.ts', '.js'] },
    target: 'node',
    node: false,
    devtool: 'cheap-eval-source-map',
}

const clientConfig: webpack.Configuration = {
    name: 'client',
    mode: isProd ? 'production' : 'development',
    // If you add multiple entries to split up your code into
    // chunks, don't forget to include it in public/index.html
    entry: {
        main: './src/client/main.tsx',
    },
    output: {
        path: resolve('public/js'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /.tsx?$/,
                loader: 'ts-loader',
                options: {
                    configFile: resolve('config/tsconfig.client.json'),
                },
            },
        ],
    },
    resolve: {
        extensions: ['.jsx', '.js', '.ts', '.tsx'],
        modules: [resolve('node_modules')],
    },
    target: 'web',
    devServer: !isProd
        ? {
              contentBase: resolve('public'),
              publicPath: '/js/',
              compress: true,
              host: 'localhost',
              port: 3000,
              hot: true,
              inline: true,
              open: true,
              proxy: { '/api': 'http://localhost:4000' },
          }
        : undefined,
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all',
    //         minSize: 10000,
    //         maxAsyncRequests: 10,
    //         maxInitialRequests: 4,
    //     },
    // },
}

export default [serverConfig, clientConfig]
