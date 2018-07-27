const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: "./index.jsx",
    output: {
        filename: "./bundle.js",
        path: __dirname + "/dist",
        publicPath: "/dist"
    },
    devServer: {
        host: '127.0.0.1',
        hot: true,
        inline: true,
        historyApiFallback: true,
    },
    resolve: {
        extensions: [".jsx", ".js"]
    },
    module: {
        rules: [{
                test: /\.jsx|.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'react'],
                    plugins: [
                        ["transform-class-properties", { "spec": true }]
                    ]
                }
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
}