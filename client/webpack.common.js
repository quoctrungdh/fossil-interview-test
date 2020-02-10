const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: "./client/src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].[contenthash].js',
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            { test: /\.css$/, use: [
               "style-loader" ,"css-loader", "postcss-loader"
            ] },
            { test: /\.(png|svg|jpg|gif)$/, use: [
                {
                    loader: "file-loader",
                    options: {
                        esModule: false
                    }
                }
            ] }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "FossilVN test",
            template: "client/index.html"
        })
    ]
}