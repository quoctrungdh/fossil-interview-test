const path = require("path");

module.exports = {
    entry: "./client/src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    devServer: {
        inline: true,
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, "dist"),
        port: 3001
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
    }
}