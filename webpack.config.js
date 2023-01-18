const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",

    entry: {
        bundle: path.resolve(__dirname, "./src/index"),
    },

    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "Knights Travials",
            template: "./src/chessboard.html",
        }),
    ],

    devServer: {
        static: "./dist",
        hot: false,
        liveReload: true,
    },

    devtool: "inline-source-map",

    module: {
        rules: [
            {
                test: /\.css/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
}
