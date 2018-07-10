const webpack = require('webpack')

module.exports = {
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
        loaders: [{
                test: /\.jsx|.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'react'],
                    plugins: [
                        ["transform-class-properties", { "spec": true }]
                    ]
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
}