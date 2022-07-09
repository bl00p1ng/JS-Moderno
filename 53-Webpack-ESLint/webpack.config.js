const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: {
        index: './js/app.js',
    },  // Punto de entrada de la App
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'bundle.js'
    },
    mode: 'development',
    target: 'web',
    devServer: {
        static: {
            directory: path.join(__dirname, '/')
        },
        compress: true,
        open: true,
        hot: false,
        liveReload: true,
        watchFiles: ['public/js/*', 'js/*'],
    },
    plugins: [new ESLintPlugin()],
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}