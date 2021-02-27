// region import
const path = require('path')

// puglins
const plugins = {
    HTMLPlugin: require('html-webpack-plugin'),
    MiniCssExtractPlugin: require('mini-css-extract-plugin')
}

// paths
const paths = {
    entry: {
        main: path.resolve(__dirname, '../src/index.js')
    },
    source: {
        main: path.resolve(__dirname, '../src/')
    },
    template: path.resolve(__dirname, './template.html')
}

module.exports = {
    entry: {
        main: [paths.entry.main]
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/i,
                exclude: /(node_modules|bower_components)/,
                use: [
                    plugins.MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader', 
                        options: {
                            modules: {
                                mode: 'local'
                            }
                        }
                    }
                ],
              },
        ]
    },
    resolve: {
        alias: {
            '@': paths.source.main
        }
    },
    plugins: [
        new plugins.HTMLPlugin({
            template: paths.template,
            filename: 'index.html',
            inject: true,
        }),
        new plugins.MiniCssExtractPlugin()
    ]
}