const path = require('path');

module.exports = {
    entry: {
        index: './js/app.js',
    },  // Punto de entrada de la App
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'bundle.js'
    },
    mode: 'development',
    devServer: {
        static: path.join(__dirname, '/'),
        compress: true,
    },
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