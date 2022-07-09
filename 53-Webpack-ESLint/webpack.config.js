const path = require('path');

module.exports = {
    entry: './js/app.js',  // Punto de entrada de la App
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'bundle.js'
    },
    mode: 'development',
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