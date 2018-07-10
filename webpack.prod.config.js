const webpack = require('webpack')
const uglifyjs = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: "./static/index.jsx",
    output: {
        filename: "./bundle.js",
        path: __dirname + "/dist",
        publicPath: "/dist"
    },
    resolve: {
        // 后缀可省略.
        extensions: [".jsx", ".js"]
    },
    module: {
        loaders: [{
                test: /\.jsx|\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'react'],
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({  
            'process.env.NODE_ENV': JSON.stringify('production')  
        }),
        new uglifyjs(),
    ]
}