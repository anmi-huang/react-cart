import path from "path"
import webpack from "webpack"
import copy from "copy-webpack-plugin"
import html from "html-webpack-plugin"
import iconfont from "webpack-iconfont-plugin-nodejs"

const isDev = process.env.NODE_ENV !== "production"
const isProd = process.env.NODE_ENV === "production"
const removeEmpty = (x) => x.filter((y) => !!y)
const DOMAIN = "https://www.taichung.travel"
export default {
    resolve: {
        modules: [path.join(__dirname, "src/app"), "node_modules"],
        extensions: [".js", ".jsx"]
    },
    entry: {
        app: [path.resolve(__dirname, "src/app/index.js")]
    },
    devtool: isDev ? "source-map" : false,
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                        sourceMap: isDev
                    }
                }
            },
            {
                test: /iconfont.js/,
                use: [
                    "css-loader",
                    {
                        loader: "webfonts-loader"
                    }
                ]
            },
            {
                test: /\.global\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: isDev
                        }
                    }
                ]
            },
            // SASS support - compile all .global.scss files and pipe it to style.css
            {
                test: /\.global\.(scss|sass)$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: isDev
                        }
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            // SASS support - compile all other .scss files and pipe it to style.css
            {
                test: /^((?!\.global).)*\.(scss|sass)$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            sourceMap: isDev,
                            importLoaders: 1,
                            localIdentName: "[name]__[local]__[hash:base64:5]"
                        }
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            // WOFF Font
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        mimetype: "application/font-woff"
                    }
                }
            },
            // WOFF2 Font
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        mimetype: "application/font-woff"
                    }
                }
            },
            // TTF Font
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        mimetype: "application/octet-stream"
                    }
                }
            },
            // EOT Font
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: "file-loader"
            },
            // SVG Font
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        mimetype: "image/svg+xml"
                    }
                }
            },
            // Common Image Formats
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/,
                use: "url-loader"
            }
        ]
    },

    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: removeEmpty([
        new webpack.HotModuleReplacementPlugin(),
        new html({
            title: "playground",
            isProd: isProd,
            template: path.resolve(__dirname, "src/app/index.html")
        }),
        new copy({
            patterns: [
                {
                    from: "./src/app/assets/images",
                    to: "assets/images"
                },
                {
                    from: "./src/app/static-api",
                    to: "static-api"
                }
            ]
        }),
        new iconfont({
            fontName: "iconfont",
            cssPrefix: "iconfont",
            svgs: path.join(__dirname, "src/app/assets/svg/*.svg"),
            template: path.join(__dirname, "src/app/assets/template.hbs"),
            fontsOutput: path.join(__dirname, "src/app/assets/fonts/"),
            cssOutput: path.join(
                __dirname,
                "src/app/assets/css/_iconfont.scss"
            ),
            htmlOutput: false,
            jsOutput: false
        })
    ]),
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        hot: true,
        port: 3000,
        host: "0.0.0.0",
        open: true,
        //https: true,
        headers: { "Access-Control-Allow-Origin": "*" },
        before: (app) => {
            app.post("/static-api/*", function (req, res) {
                console.log(123)
                setTimeout(() => {
                    res.redirect(req.originalUrl)
                }, 1000)
            })
        },
        proxy: {
            "/api": {
                target: DOMAIN,
                secure: false,
                headers: {
                    Connection: "keep-alive"
                },
                changeOrigin: true
            }
        }
    }
}
