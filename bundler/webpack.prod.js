const { merge } = require("webpack-merge");
const commonConfiguration = require("./webpack.common.js");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlBeautifyPlugin = require("@nurminen/html-beautify-webpack-plugin");

module.exports = merge(commonConfiguration, {
    mode: "production",
    output: {
        publicPath: "./",
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlBeautifyPlugin({
            config: {
                html: {
                    end_with_newline: true,
                    indent_size: 4,
                    indent_with_tabs: false,
                    indent_inner_html: true,
                    preserve_newlines: true,
                },
            },
        }),
    ],
});
