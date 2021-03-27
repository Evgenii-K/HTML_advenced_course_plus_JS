const path = require('path');


module.exports = {
    entry: './src/js/script.js',
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'script.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ]
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread'],
                    }
                }
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'scss-loader' },
                ]
            },
        ]
    }
}