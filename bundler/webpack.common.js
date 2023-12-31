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
        filename: "assets/js/bundle.js",
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
            template: path.resolve(__dirname, "../src/pages/about/about.njk"),
            filename: "about.html",
        }),

        new HtmlWebpackPlugin({
            template: path.resolve(
                __dirname,
                "../src/pages/quiz/quiz-detail.njk"
            ),
            filename: "quiz-detail.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../src/pages/shems/shems.njk"),
            filename: "shems.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../src/pages/quiz/quiz.njk"),
            filename: "quiz.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(
                __dirname,
                "../src/pages/quiz/quiz-result.njk"
            ),
            filename: "quiz-result.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../src/pages/home/home.njk"),
            filename: "home.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(
                __dirname,
                "../src/pages/shedule/shedule.njk"
            ),
            filename: "shedule.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(
                __dirname,
                "../src/pages/glosarii/glosarii.njk"
            ),
            filename: "glosarii.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../src/pages/ui/ui.njk"),
            filename: "ui.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../src/pages/events/events.njk"),
            filename: "events.html",
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
            template: path.resolve(
                __dirname,
                "../src/pages/contacts/contacts.njk"
            ),
            filename: "contacts.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(
                __dirname,
                "../src/pages/partners/partners.njk"
            ),
            filename: "partners.html",
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
                "../src/pages/legends/legends.njk"
            ),
            filename: "legends.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../src/pages/legend/legend.njk"),
            filename: "legend.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(
                __dirname,
                "../src/pages/visitors/visitors.njk"
            ),
            filename: "visitors.html",
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
            template: path.resolve(__dirname, "../src/pages/faq/faq.njk"),
            filename: "faq.html",
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
                "../src/pages/exponats/exponats.njk"
            ),
            filename: "exponats.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(
                __dirname,
                "../src/pages/excursions/excursions.njk"
            ),
            filename: "excursions.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(
                __dirname,
                "../src/pages/excursion/excursion.njk"
            ),
            filename: "excursion.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../src/pages/rules/rules.njk"),
            filename: "rules.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../src/pages/rule/rule.njk"),
            filename: "rule.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(
                __dirname,
                "../src/pages/lections/lections.njk"
            ),
            filename: "lections.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(
                __dirname,
                "../src/pages/lection/lection.njk"
            ),
            filename: "lection.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(
                __dirname,
                "../src/pages/blogs/blogs-astro.njk"
            ),
            filename: "blogs-astro.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../src/pages/blog/blog.njk"),
            filename: "blog.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(
                __dirname,
                "../src/pages/history/history.njk"
            ),
            filename: "history.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../src/pages/404/404.njk"),
            filename: "404.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../src/pages/blogs/blogs.njk"),
            filename: "blogs.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(
                __dirname,
                "../src/pages/private-events/private-events.njk"
            ),
            filename: "private-events.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(
                __dirname,
                "../src/pages/visitor-special-needs/visitor-special-needs.njk"
            ),
            filename: "visitor-special-needs.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../src/pages/afisha/afisha.njk"),
            filename: "afisha.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(
                __dirname,
                "../src/pages/podcasts/podcasts.njk"
            ),
            filename: "podcasts.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../src/pages/price/price.njk"),
            filename: "price.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(
                __dirname,
                "../src/pages/podcasts/podcasts-single.njk"
            ),
            filename: "podcasts-single.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(
                __dirname,
                "../src/pages/forms/form-success.njk"
            ),
            filename: "form-success.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../src/pages/zal/zal.njk"),
            filename: "zal.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(
                __dirname,
                "../src/pages/forms/partner-form.njk"
            ),
            filename: "partner-form.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(
                __dirname,
                "../src/pages/forms/events-form.njk"
            ),
            filename: "events-form.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(
                __dirname,
                "../src/pages/forms/lection-form.njk"
            ),
            filename: "lection-form.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(
                __dirname,
                "../src/pages/forms/press-form.njk"
            ),
            filename: "press-form.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(
                __dirname,
                "../src/pages/forms/partner-form.njk"
            ),
            filename: "partner-form.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(
                __dirname,
                "../src/pages/podcasts/podcasts-serial.njk"
            ),
            filename: "podcasts-serial.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(
                __dirname,
                "../src/pages/podcast/podcast.njk"
            ),
            filename: "podcast.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../src/pages/search/search.njk"),
            filename: "search.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(
                __dirname,
                "../src/pages/search/search-result.njk"
            ),
            filename: "search-result.html",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(
                __dirname,
                "../src/pages/search/search-empty.njk"
            ),
            filename: "search-empty.html",
        }),
        new MiniCSSExtractPlugin({
            filename: "assets/css/[name].css",
        }),

        // Using svg symbols: <svg><use xlink:href="/img/symbols.svg#sym-name"></use></svg>
        new SVGSpritemapPlugin(
            path.resolve(__dirname, "../static/img/symbols/**/*.svg"),
            {
                output: {
                    filename: "img/symbols.svg",
                },
                sprite: {
                    prefix: "sym-",
                },
            }
        ),
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
                test: /\.(jpg|png|gif|svg|webp)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: "assets/images/",
                            publicPath: "../images/",
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
