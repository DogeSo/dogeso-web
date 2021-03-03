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

module.exports = (env, options) => ({
    entry: {
        main: [paths.entry.main]
    },
    output: {
        path: path.resolve(__dirname, options.mode === 'production' ? '../dist' : '../build')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
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
})