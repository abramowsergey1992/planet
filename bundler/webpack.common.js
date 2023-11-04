const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const SVGSpritemapPlugin = require("svg-spritemap-webpack-plugin");
const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "../src/js/index.js"),
    target: "web",
    output: {
        filename: "assets/js/bundle.[contenthash].js",
        path: path.resolve(__dirname, "../docs"),
    },
    devtool: "source-map",
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{ from: path.resolve(__dirname, "../static") }],
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../src/pages/index/index.njk"),
            filename: "index.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../src/pages/home/home.njk"),
            filename: "home.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../src/pages/ui/ui.njk"),
            filename: "ui.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../src/pages/event/event.njk"),
            filename: "event.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../src/pages/shop/shop.njk"),
            filename: "shop.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../src/pages/cafe/cafe.njk"),
            filename: "cafe.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../src/pages/press/press.njk"),
            filename: "press.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../src/pages/sovet/sovet.njk"),
            filename: "sovet.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../src/pages/guides/guides.njk"),
            filename: "guides.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(
                __dirname,
                "../src/pages/directors/directors.njk"
            ),
            filename: "directors.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(
                __dirname,
                "../src/pages/vacancies/vacancies.njk"
            ),
            filename: "vacancies.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(
                __dirname,
                "../src/pages/exponat/exponat.njk"
            ),
            filename: "exponat.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(
                __dirname,
                "../src/pages/visitor-special-needs/visitor-special-needs.njk"
            ),
            filename: "visitor-special-needs.html",
        }),
        // new HtmlWebpackPlugin({
        //     template: path.resolve(__dirname, '../src/pages/styles/styles.njk'),
        //     filename: 'styles.html'
        // }),
        new MiniCSSExtractPlugin({
            filename: "assets/css/[name].[contenthash].css",
        }),

        // Using svg symbols: <svg><use xlink:href="/img/symbols.svg#sym-name"></use></svg>
        // new SVGSpritemapPlugin(path.resolve(__dirname, '../static/img/symbols/**/*.svg'), {
        //     output: {
        //         filename: 'img/symbols.svg'
        //     },
        //     sprite: {
        //         prefix: 'sym-'
        //     }
        // })
    ],
    module: {
        rules: [
            // HTML
            {
                test: /\.(html)$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            // Prevent processing paths
                            sources: {
                                list: [
                                    {
                                        tag: "img",
                                        attribute: "src",
                                        type: "src",
                                        filter: () => false,
                                    },
                                ],
                            },
                        },
                    },
                ],
            },

            // Nunjucks
            {
                test: /\.njk$/,
                use: [
                    {
                        loader: "simple-nunjucks-loader",
                        options: {
                            searchPaths: [path.resolve(__dirname, "../src/")],
                        },
                    },
                ],
            },

            // Typescript, Javascript
            {
                test: /\.(js|ts)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                ],
            },

            // Styles
            {
                test: /\.(less|css)$/,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader,
                    },
                    "css-loader",
                    "postcss-loader",
                    "less-loader",
                ],
            },

            // Images
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: "assets/images/",
                        },
                    },
                ],
            },

            // Fonts
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: "assets/fonts/",
                            publicPath: "../fonts/",
                        },
                    },
                ],
            },

            // Shaders
            {
                test: /\.(glsl|vs|fs|vert|frag)$/,
                exclude: /node_modules/,
                use: ["raw-loader"],
            },
        ],
    },
    optimization: {
        minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
};
