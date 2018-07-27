const ExtractTextPlugin = require('extract-text-webpack-plugin') 
module.exports = {
    mode: "production",
    entry: "./index.jsx",
    output: {
        filename: "./[name]-[hash]-bundle.js",
        path: __dirname + "/dist",
        publicPath: "/dist"
    },
    resolve: {
        // 后缀可省略.
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
        }]
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ]
}