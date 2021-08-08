/* eslint-disable node/no-unpublished-import, import/no-extraneous-dependencies */
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';

import paths from './paths';

export default {
    // Where webpack looks to start building the bundle
    entry: [`${paths.src}/scripts/index.ts`], // 0 -> main (default)
    // entry: { keyName: `${paths.src}/scripts/index.ts` }, // [name] === keyName

    // Where webpack outputs the assets and bundles
    output: {
        path:       paths.build,
        filename:   '[name].bundle.js', // main.bundle.js
        publicPath: '/',
    },

    // Customize the webpack build process
    plugins: [
        // Copies files from target to destination folder
        new CopyWebpackPlugin({
            patterns: [
                {
                    from:        paths.public,
                    to:          '.',
                    globOptions: {
                        ignore: ['*.DS_Store'],
                    },
                    noErrorOnMissing: true,
                },
            ],
        }),

        // Generates an HTML file from a template
        // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
        new HtmlWebpackPlugin({
            favicon:  `${paths.public}/img/favicon.ico`,
            template: `${paths.src}/index.html`, // template file
            filename: 'index.html', // output file
        }),

        // ESLint configuration
        new ESLintPlugin({
            files:     ['.', 'src', 'config'],
            formatter: 'table',
        }),
    ],

    // Determine how modules within the project are treated
    module: {
        rules: [
            {
                test:    /\.ts?$/,
                use:     'ts-loader',
                exclude: /node_modules/,
            },

            // JavaScript: Use Babel to transpile JavaScript files
            {
                test: /\.js$/,
                use:  ['babel-loader'],
            },

            // Images: Copy image files to build folder
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },

            // Fonts and SVGs: Inline files
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
        ],
    },

    resolve: {
        modules:    [paths.src, 'node_modules'],
        extensions: ['.js', '.ts', '.json'],
        alias:      {
            '@src': paths.src,
        },
    },
};
