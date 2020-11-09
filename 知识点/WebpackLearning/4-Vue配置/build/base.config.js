const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/A.js",
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "bundle.js",
        // publicPath: "./"
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }, {
            test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    //字节大小
                    limit: 8192,
                    //命名规则
                    name: "img/[name].[hash:8].[ext]"
                },
            }]
        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }
        }, {
            test: /\.vue$/,
            use: {
                loader: 'vue-loader',
            }
        }, {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                'style-loader',
                // Translates CSS into CommonJS
                'css-loader',
                // Compiles Sass to CSS
                'sass-loader',
            ],
        }, ]
    },
    resolve: {
        extensions: [".vue", ".css", ".js"],
        alias: {
            "vue$": "vue/dist/vue.esm.js"
        }
    },
    plugins: [
        new webpack.BannerPlugin("版权信息"),
        new htmlWebpackPlugin({
            template: "index.html"
        }),
    ],
}